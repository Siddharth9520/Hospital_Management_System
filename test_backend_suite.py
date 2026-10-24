import http.client
import json

def request(method, path, data=None):
    try:
        conn = http.client.HTTPConnection("127.0.0.1", 5000, timeout=4)
        headers = {"Connection": "close"}
        payload = None
        if data is not None:
            headers["Content-Type"] = "application/json"
            payload = json.dumps(data)
        
        conn.request(method, path, body=payload, headers=headers)
        resp = conn.getresponse()
        status = resp.status
        content = resp.read().decode("utf-8")
        conn.close()
        try:
            parsed = json.loads(content)
        except:
            parsed = content
        return status, parsed
    except Exception as e:
        return 0, str(e)

results = []

def test(name, condition, details=""):
    status_str = "PASS" if condition else "FAIL"
    if not condition and not details:
        details = f"status={status}, res={res}"
    results.append((name, status_str, details))
    print(f"[{status_str}] {name} {('- ' + str(details)) if (not condition or details) else ''}", flush=True)

print("=== Running CarePulse C++ Backend Automated Test Suite ===")

# Verify server connectivity before proceeding
status, res = request("GET", "/api/status")
if status == 0:
    print("[ERROR] Could not connect to CarePulse C++ backend server on http://127.0.0.1:5000.")
    print("Please compile and launch the backend server first:")
    print("  g++ -O2 -std=c++14 backend/main.cpp -o server.exe -lws2_32")
    print("  .\\server.exe")
    import sys
    sys.exit(1)

# Reset first
status, res = request("POST", "/api/reset", {})
test("API Reset to clean state", status == 200)

# 1. Health & Status
status, res = request("GET", "/api/status")
test("GET /api/status", status == 200 and isinstance(res, dict) and res.get("status") == "ok")

# 2. System Statistics
status, res = request("GET", "/api/stats")
test("GET /api/stats returns metrics", status == 200 and res.get("totalDoctors") == 4 and res.get("totalPatients") == 4)

# 3. Doctors List
status, res = request("GET", "/api/doctors")
test("GET /api/doctors returns seed doctors", status == 200 and len(res) == 4)

# 4. Add Doctor
new_doc = {"id": "DOC-999", "name": "Dr. Test Doctor", "age": 45, "specialization": "Oncology", "isAvailable": True}
status, res = request("POST", "/api/doctors", new_doc)
test("POST /api/doctors creates doctor", status == 201 and res.get("success") == True)

# 5. Duplicate Doctor ID Rejected
status, res = request("POST", "/api/doctors", new_doc)
test("POST /api/doctors rejects duplicate ID", status == 400 and "already exists" in res.get("error", ""))

# 6. Add Doctor with Empty Field Rejected
status, res = request("POST", "/api/doctors", {"id": "", "name": "No ID Doc", "age": 40, "specialization": ""})
test("POST /api/doctors rejects empty fields", status == 400 and "cannot be empty" in res.get("error", ""))

# 7. Doctor Availability Toggle
status, res = request("PUT", "/api/doctors/availability", {"id": "DOC-101", "isAvailable": False})
test("PUT /api/doctors/availability toggles status", status == 200 and res.get("isAvailable") == False)

# 8. Doctor Availability for Unknown Doctor Rejected
status, res = request("PUT", "/api/doctors/availability", {"id": "DOC-UNKNOWN", "isAvailable": True})
test("PUT /api/doctors/availability rejects unknown doctor", status == 400 and "not found" in res.get("error", ""))

# 9. Safe Doctor Removal Rejected when Appointments Exist
status, res = request("DELETE", "/api/doctors", {"id": "DOC-101"})
test("DELETE /api/doctors rejects removal when linked appointments exist", status == 400 and "active appointments" in res.get("error", ""))

# 10. Doctor Removal for Doctor without Appointments
status, res = request("DELETE", "/api/doctors", {"id": "DOC-999"})
test("DELETE /api/doctors succeeds for unlinked doctor", status == 200 and res.get("success") == True)

# 11. Patients List
status, res = request("GET", "/api/patients")
test("GET /api/patients returns seed patients", status == 200 and len(res) == 4)

# 12. Register General Patient
gen_pat = {"id": "PAT-901", "name": "General Test Patient", "age": 30, "category": "General"}
status, res = request("POST", "/api/patients", gen_pat)
test("POST /api/patients General patient", status == 201 and res.get("patient", {}).get("consultationFee") == 500.0)

# 13. Register Valid Senior Patient
sen_pat = {"id": "PAT-902", "name": "Senior Test Patient", "age": 68, "category": "Senior"}
status, res = request("POST", "/api/patients", sen_pat)
test("POST /api/patients Senior patient (Age 68)", status == 201 and res.get("patient", {}).get("consultationFee") == 450.0)

# 14. Register Underage Senior Patient Rejected (OOP Exception)
bad_sen = {"id": "PAT-903", "name": "Underage Senior", "age": 52, "category": "Senior"}
status, res = request("POST", "/api/patients", bad_sen)
test("POST /api/patients rejects Senior under 60 (Exception)", status == 400 and "60 years or older" in res.get("error", ""))

# 15. Register Emergency Patient
emg_pat = {"id": "PAT-904", "name": "Emergency Test Patient", "age": 22, "category": "Emergency"}
status, res = request("POST", "/api/patients", emg_pat)
test("POST /api/patients Emergency patient (INR800 fee)", status == 201 and res.get("patient", {}).get("consultationFee") == 800.0)

# 16. Register Patient with Invalid Age Rejected
bad_age = {"id": "PAT-905", "name": "Zero Age", "age": 0, "category": "General"}
status, res = request("POST", "/api/patients", bad_age)
test("POST /api/patients rejects invalid age (0)", status == 400 and "between 1 and 120" in res.get("error", ""))

# 17. Register Patient with Duplicate ID Rejected
status, res = request("POST", "/api/patients", gen_pat)
test("POST /api/patients rejects duplicate ID", status == 400 and "already exists" in res.get("error", ""))

# 18. Appointments List
status, res = request("GET", "/api/appointments")
test("GET /api/appointments returns seed appointments", status == 200 and len(res) >= 3)

# 19. Filter Appointments by Doctor
status, res = request("GET", "/api/appointments?doctorId=DOC-102")
test("GET /api/appointments?doctorId=DOC-102 filters correctly", status == 200 and all(a["doctorId"] == "DOC-102" for a in res))

# 20. Book Valid Appointment
valid_appt = {"patientId": "PAT-902", "doctorId": "DOC-104", "date": "2026-10-26", "timeSlot": "09:00 AM"}
status, res = request("POST", "/api/appointments", valid_appt)
new_appt_id = res.get("appointmentId", "")
test("POST /api/appointments books valid appointment", status == 201 and new_appt_id.startswith("APT-"))

# 21. Slot Conflict Collision Rejected (409 Conflict)
conflict_appt = {"patientId": "PAT-901", "doctorId": "DOC-104", "date": "2026-10-26", "timeSlot": "09:00 AM"}
status, res = request("POST", "/api/appointments", conflict_appt)
test("POST /api/appointments rejects slot conflict (409)", status == 409 and "Conflict" in res.get("error", ""))

# 22. Book with Unavailable Doctor Rejected
status, res = request("POST", "/api/appointments", {"patientId": "PAT-901", "doctorId": "DOC-103", "date": "2026-10-27", "timeSlot": "10:00 AM"})
test("POST /api/appointments rejects unavailable doctor", status == 400 and "Unavailable" in res.get("error", ""))

# 23. Book with Nonexistent Doctor Rejected
status, res = request("POST", "/api/appointments", {"patientId": "PAT-901", "doctorId": "DOC-GHOST", "date": "2026-10-27", "timeSlot": "10:00 AM"})
test("POST /api/appointments rejects missing doctor", status == 400 and "does not exist" in res.get("error", ""))

# 24. Book with Nonexistent Patient Rejected
status, res = request("POST", "/api/appointments", {"patientId": "PAT-GHOST", "doctorId": "DOC-102", "date": "2026-10-27", "timeSlot": "10:00 AM"})
test("POST /api/appointments rejects missing patient", status == 400 and "does not exist" in res.get("error", ""))

# 25. Generate Bill for Senior Patient (10% discount = INR450)
status, res = request("POST", "/api/bills/generate", {"appointmentId": new_appt_id})
bill = res.get("bill", {})
test("POST /api/bills/generate Senior bill (Polymorphic INR450)", status == 201 and bill.get("finalAmount") == 450.0 and bill.get("adjustmentAmount") == -50.0)

# 26. Duplicate Billing Rejected
status, res = request("POST", "/api/bills/generate", {"appointmentId": new_appt_id})
test("POST /api/bills/generate prevents double-billing", status == 400 and "already billed" in res.get("error", ""))

# 27. Generate Bill for Nonexistent Appointment Rejected
status, res = request("POST", "/api/bills/generate", {"appointmentId": "APT-NONEXISTENT"})
test("POST /api/bills/generate rejects unknown appointment", status == 400 and "not found" in res.get("error", ""))

# 28. Bills History Listing
status, res = request("GET", "/api/bills")
test("GET /api/bills includes new generated bill", status == 200 and any(b["billId"] == bill.get("billId") for b in res))

# 29. Static File Serving (Self-Contained)
status, res = request("GET", "/index.html")
test("GET /index.html served by C++ server", status == 200 and "<!DOCTYPE html>" in str(res))

# Final Reset to Clean Presentation State
status, res = request("POST", "/api/reset", {})
test("Final reset to initial demo state", status == 200)

passed = sum(1 for _, s, _ in results if s == "PASS")
total = len(results)
print(f"\n==========================================")
print(f"Test Summary: {passed}/{total} Passed ({(passed/total)*100:.1f}%)")
print(f"==========================================")
if passed == total:
    print("ALL BACKEND TESTS PASSED PERFECTLY!")
