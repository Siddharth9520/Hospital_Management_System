#include <iostream>
#include <vector>
#include <string>
#include <memory>
#include <iomanip>
#include <stdexcept>
#include <algorithm>
#include <sstream>
#include <map>
#include <ctime>
#include <cstring>
#include <fstream>

#ifdef _WIN32
#include <winsock2.h>
#include <ws2tcpip.h>
#pragma comment(lib, "ws2_32.lib")
#else
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>
#endif

using namespace std;

// ============================================================================
// 1. PERSON CLASS (Base Class - Encapsulation)
// ============================================================================
class Person {
protected:
    string id;
    string name;
    int age;

public:
    Person(string personId, string personName, int personAge)
        : id(personId), name(personName), age(personAge) {}

    virtual ~Person() {}

    string getId() const { return id; }
    string getName() const { return name; }
    int getAge() const { return age; }

    virtual void displayDetails() const {
        cout << "ID: " << setw(8) << left << id 
             << " | Name: " << setw(18) << left << name 
             << " | Age: " << age;
    }
};

// ============================================================================
// 2. DOCTOR CLASS (Single Inheritance)
// ============================================================================
class Doctor : public Person {
private:
    string specialization;
    bool isAvailable;

public:
    Doctor(string docId, string docName, int docAge, string spec, bool avail = true)
        : Person(docId, docName, docAge), specialization(spec), isAvailable(avail) {}

    string getSpecialization() const { return specialization; }
    bool getAvailability() const { return isAvailable; }
    void setAvailability(bool status) { isAvailable = status; }

    void displayDetails() const override {
        Person::displayDetails();
        cout << " | Specialization: " << setw(16) << left << specialization
             << " | Status: " << (isAvailable ? "Available" : "Unavailable") << endl;
    }

    string toJson() const {
        stringstream ss;
        ss << "{"
           << "\"id\":\"" << id << "\","
           << "\"name\":\"" << name << "\","
           << "\"age\":" << age << ","
           << "\"specialization\":\"" << specialization << "\","
           << "\"isAvailable\":" << (isAvailable ? "true" : "false")
           << "}";
        return ss.str();
    }
};

// ============================================================================
// 3. PATIENT CLASS (Abstract Base Class - Polymorphism)
// ============================================================================
class Patient : public Person {
public:
    Patient(string patId, string patName, int patAge)
        : Person(patId, patName, patAge) {}

    virtual string getCategory() const = 0;             // Pure virtual function
    virtual double calculateBill() const = 0;           // Polymorphic bill calculation
    virtual double getDiscountOrSurcharge() const = 0;  // Adjustment value

    void displayDetails() const override {
        Person::displayDetails();
        cout << " | Category: " << setw(10) << left << getCategory()
             << " | Consultation Fee: ₹" << fixed << setprecision(2) << calculateBill() << endl;
    }

    virtual string toJson() const {
        stringstream ss;
        ss << "{"
           << "\"id\":\"" << id << "\","
           << "\"name\":\"" << name << "\","
           << "\"age\":" << age << ","
           << "\"category\":\"" << getCategory() << "\","
           << "\"consultationFee\":" << fixed << setprecision(2) << calculateBill()
           << "}";
        return ss.str();
    }
};

// ============================================================================
// 4. PATIENT CATEGORIES (Hierarchical Inheritance & Runtime Polymorphism)
// ============================================================================
class GeneralPatient : public Patient {
public:
    GeneralPatient(string patId, string patName, int patAge)
        : Patient(patId, patName, patAge) {}

    string getCategory() const override {
        return "General";
    }

    double calculateBill() const override {
        return 500.0; // Standard consultation charge
    }

    double getDiscountOrSurcharge() const override {
        return 0.0;
    }
};

class SeniorPatient : public Patient {
public:
    SeniorPatient(string patId, string patName, int patAge)
        : Patient(patId, patName, patAge) {
        if (patAge < 60) {
            throw invalid_argument("Senior patient must be 60 years or older.");
        }
    }

    string getCategory() const override {
        return "Senior";
    }

    double calculateBill() const override {
        return 500.0 * 0.90; // 10% Senior Discount -> ₹450
    }

    double getDiscountOrSurcharge() const override {
        return -50.0;
    }
};

class EmergencyPatient : public Patient {
public:
    EmergencyPatient(string patId, string patName, int patAge)
        : Patient(patId, patName, patAge) {}

    string getCategory() const override {
        return "Emergency";
    }

    double calculateBill() const override {
        return 500.0 + 300.0; // ₹500 base + ₹300 urgent triage surcharge -> ₹800
    }

    double getDiscountOrSurcharge() const override {
        return 300.0;
    }
};

// ============================================================================
// 5. APPOINTMENT & BILL CLASSES (Encapsulation & Association)
// ============================================================================
class Bill {
private:
    string billId;
    string appointmentId;
    string patientId;
    string patientName;
    string patientCategory;
    double baseFee;
    double adjustmentAmount;
    double finalAmount;
    string billingDate;

public:
    Bill(string bId, string aId, string pId, string pName, string pCat,
         double base, double adj, double finalAmt, string bDate)
        : billId(bId), appointmentId(aId), patientId(pId), patientName(pName),
          patientCategory(pCat), baseFee(base), adjustmentAmount(adj),
          finalAmount(finalAmt), billingDate(bDate) {}

    string getBillId() const { return billId; }
    string getAppointmentId() const { return appointmentId; }
    string getPatientId() const { return patientId; }
    double getFinalAmount() const { return finalAmount; }

    string toJson() const {
        stringstream ss;
        ss << "{"
           << "\"billId\":\"" << billId << "\","
           << "\"appointmentId\":\"" << appointmentId << "\","
           << "\"patientId\":\"" << patientId << "\","
           << "\"patientName\":\"" << patientName << "\","
           << "\"patientCategory\":\"" << patientCategory << "\","
           << "\"baseFee\":" << fixed << setprecision(2) << baseFee << ","
           << "\"adjustmentAmount\":" << adjustmentAmount << ","
           << "\"finalAmount\":" << finalAmount << ","
           << "\"billingDate\":\"" << billingDate << "\""
           << "}";
        return ss.str();
    }
};

class Appointment {
private:
    string appointmentId;
    string patientId;
    string doctorId;
    string date;
    string timeSlot;
    bool isBilled;
    double billedAmount;
    string billId;

public:
    Appointment(string apptId, string patId, string docId, string apptDate, string slot)
        : appointmentId(apptId), patientId(patId), doctorId(docId),
          date(apptDate), timeSlot(slot), isBilled(false), billedAmount(0.0), billId("") {}

    string getAppointmentId() const { return appointmentId; }
    string getPatientId() const { return patientId; }
    string getDoctorId() const { return doctorId; }
    string getDate() const { return date; }
    string getTimeSlot() const { return timeSlot; }
    bool getIsBilled() const { return isBilled; }
    double getBilledAmount() const { return billedAmount; }
    string getBillId() const { return billId; }

    void markBilled(const string& bId, double amount) {
        if (isBilled) {
            throw runtime_error("Appointment " + appointmentId + " is already billed.");
        }
        isBilled = true;
        billedAmount = amount;
        billId = bId;
    }

    string toJson() const {
        stringstream ss;
        ss << "{"
           << "\"id\":\"" << appointmentId << "\","
           << "\"patientId\":\"" << patientId << "\","
           << "\"doctorId\":\"" << doctorId << "\","
           << "\"date\":\"" << date << "\","
           << "\"timeSlot\":\"" << timeSlot << "\","
           << "\"isBilled\":" << (isBilled ? "true" : "false") << ","
           << "\"billedAmount\":" << fixed << setprecision(2) << billedAmount << ","
           << "\"billId\":\"" << billId << "\""
           << "}";
        return ss.str();
    }
};

// ============================================================================
// 6. HOSPITAL SYSTEM (Composition & Exception Handling)
// ============================================================================
class HospitalSystem {
private:
    vector<Doctor> doctors;
    vector<shared_ptr<Patient>> patients;
    vector<Appointment> appointments;
    vector<Bill> bills;
    int nextApptCounter;
    int nextBillCounter;

    string getCurrentTimestamp() {
        time_t now = time(nullptr);
        tm* ltm = localtime(&now);
        char buf[64];
        strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M", ltm);
        return string(buf);
    }

public:
    HospitalSystem() : nextApptCounter(101), nextBillCounter(501) {
        initSampleData();
    }

    void initSampleData() {
        doctors.clear();
        patients.clear();
        appointments.clear();
        bills.clear();
        nextApptCounter = 101;
        nextBillCounter = 501;

        // Initial Seed Doctors
        doctors.push_back(Doctor("DOC-101", "Dr. Sarah Sharma", 42, "Cardiology", true));
        doctors.push_back(Doctor("DOC-102", "Dr. Rajesh Rao", 48, "Neurology", true));
        doctors.push_back(Doctor("DOC-103", "Dr. Anita Desai", 36, "Pediatrics", false));
        doctors.push_back(Doctor("DOC-104", "Dr. Vikram Patel", 51, "Orthopedics", true));

        // Initial Seed Patients
        patients.push_back(make_shared<GeneralPatient>("PAT-201", "Aakash Patel", 34));
        patients.push_back(make_shared<SeniorPatient>("PAT-202", "Savitri Devi", 68));
        patients.push_back(make_shared<EmergencyPatient>("PAT-203", "Rohan Mehta", 27));
        patients.push_back(make_shared<SeniorPatient>("PAT-204", "Pooja Joshi", 62));

        // Initial Seed Appointments
        Appointment apt1("APT-101", "PAT-201", "DOC-101", "2026-10-25", "10:00 AM");
        apt1.markBilled("BILL-501", 500.0);
        appointments.push_back(apt1);
        bills.emplace_back("BILL-501", "APT-101", "PAT-201", "Aakash Patel", "General", 500.0, 0.0, 500.0, "2026-10-24 10:45");
        nextBillCounter = 502;

        appointments.emplace_back("APT-102", "PAT-202", "DOC-102", "2026-10-25", "11:30 AM");
        appointments.emplace_back("APT-103", "PAT-203", "DOC-104", "2026-10-25", "02:00 PM");
        nextApptCounter = 104;
    }

    // Doctor Management
    void addDoctor(const Doctor& doc) {
        if (doc.getId().empty() || doc.getName().empty() || doc.getSpecialization().empty()) {
            throw invalid_argument("Validation Error: Doctor ID, Name, and Specialization cannot be empty.");
        }
        for (const auto& d : doctors) {
            if (d.getId() == doc.getId()) {
                throw runtime_error("C++ Exception: Doctor with ID '" + doc.getId() + "' already exists.");
            }
        }
        doctors.push_back(doc);
    }

    void removeDoctor(const string& docId) {
        // Safe removal check: Cannot remove doctor if referenced by active appointments
        for (const auto& a : appointments) {
            if (a.getDoctorId() == docId) {
                throw runtime_error("Safety Policy Violation: Cannot remove Doctor '" + docId + "' with active appointments in schedule.");
            }
        }

        auto it = remove_if(doctors.begin(), doctors.end(),
            [&docId](const Doctor& d) { return d.getId() == docId; });
        if (it == doctors.end()) {
            throw runtime_error("Doctor ID not found: " + docId);
        }
        doctors.erase(it, doctors.end());
    }

    bool setDoctorAvailability(const string& docId, bool status) {
        for (auto& d : doctors) {
            if (d.getId() == docId) {
                d.setAvailability(status);
                return status;
            }
        }
        throw runtime_error("Doctor ID not found: " + docId);
    }

    // Patient Management
    void registerPatient(shared_ptr<Patient> patient) {
        if (!patient || patient->getId().empty() || patient->getName().empty()) {
            throw invalid_argument("Validation Error: Patient ID and Name cannot be empty.");
        }
        if (patient->getAge() <= 0 || patient->getAge() > 120) {
            throw invalid_argument("Validation Error: Invalid patient age. Must be between 1 and 120.");
        }
        for (const auto& p : patients) {
            if (p->getId() == patient->getId()) {
                throw runtime_error("C++ Exception: Patient with ID '" + patient->getId() + "' already exists.");
            }
        }
        patients.push_back(patient);
    }

    // Appointment Booking with Conflict Validation
    string bookAppointment(const string& patId, const string& docId, const string& date, const string& timeSlot) {
        if (patId.empty() || docId.empty() || date.empty() || timeSlot.empty()) {
            throw invalid_argument("Validation Error: Patient, Doctor, Date, and Time Slot are all required.");
        }

        // Validate patient existence
        bool patientFound = false;
        for (const auto& p : patients) {
            if (p->getId() == patId) {
                patientFound = true;
                break;
            }
        }
        if (!patientFound) {
            throw runtime_error("Booking failed: Patient ID '" + patId + "' does not exist.");
        }

        // Validate doctor existence and availability
        bool doctorFound = false;
        bool doctorAvailable = false;
        string docName = "";
        for (const auto& d : doctors) {
            if (d.getId() == docId) {
                doctorFound = true;
                doctorAvailable = d.getAvailability();
                docName = d.getName();
                break;
            }
        }
        if (!doctorFound) {
            throw runtime_error("Booking failed: Doctor ID '" + docId + "' does not exist.");
        }
        if (!doctorAvailable) {
            throw runtime_error("Booking failed: " + docName + " is currently marked as Unavailable.");
        }

        // Prevent duplicate doctor/date/time slots
        for (const auto& a : appointments) {
            if (a.getDoctorId() == docId && a.getDate() == date && a.getTimeSlot() == timeSlot) {
                throw runtime_error("Booking Conflict (Exception): " + docName + " already has an appointment booked on " + date + " at " + timeSlot + ".");
            }
        }

        string apptId = "APT-" + to_string(nextApptCounter++);
        appointments.emplace_back(apptId, patId, docId, date, timeSlot);
        return apptId;
    }

    // Polymorphic Billing Calculation
    Bill generateBill(const string& apptId) {
        Appointment* targetAppt = nullptr;
        for (auto& a : appointments) {
            if (a.getAppointmentId() == apptId) {
                targetAppt = &a;
                break;
            }
        }

        if (!targetAppt) {
            throw runtime_error("Bill generation failed: Appointment ID '" + apptId + "' not found.");
        }
        if (targetAppt->getIsBilled()) {
            throw runtime_error("Duplicate Billing Error: Appointment '" + apptId + "' is already billed.");
        }

        // Find patient and compute polymorphic bill
        for (const auto& p : patients) {
            if (p->getId() == targetAppt->getPatientId()) {
                double finalAmount = p->calculateBill(); // Polymorphic dispatch via virtual function
                double adj = p->getDiscountOrSurcharge();
                string bId = "BILL-" + to_string(nextBillCounter++);
                string bDate = getCurrentTimestamp();

                targetAppt->markBilled(bId, finalAmount);
                Bill newBill(bId, apptId, p->getId(), p->getName(), p->getCategory(),
                             500.0, adj, finalAmount, bDate);
                bills.push_back(newBill);
                return newBill;
            }
        }

        throw runtime_error("Bill generation failed: Associated patient record missing.");
    }

    // Accessors and Statistics
    const vector<Doctor>& getDoctors() const { return doctors; }
    const vector<shared_ptr<Patient>>& getPatients() const { return patients; }
    const vector<Appointment>& getAppointments() const { return appointments; }
    const vector<Bill>& getBills() const { return bills; }

    string getStatsJson() const {
        double totalRevenue = 0.0;
        for (const auto& b : bills) {
            totalRevenue += b.getFinalAmount();
        }

        stringstream ss;
        ss << "{"
           << "\"totalDoctors\":" << doctors.size() << ","
           << "\"totalPatients\":" << patients.size() << ","
           << "\"totalAppointments\":" << appointments.size() << ","
           << "\"totalBills\":" << bills.size() << ","
           << "\"totalBilledRevenue\":" << fixed << setprecision(2) << totalRevenue
           << "}";
        return ss.str();
    }
};

// Global Hospital System Instance (Authoritative backend state)
HospitalSystem g_hospital;

// ============================================================================
// 7. LIGHTWEIGHT HTTP & JSON API LAYER
// ============================================================================

// Helper: Extract JSON string field safely
string extractJsonString(const string& json, const string& key) {
    size_t pos = json.find("\"" + key + "\"");
    if (pos == string::npos) {
        pos = json.find("\\\"" + key + "\\\"");
    }
    if (pos == string::npos) return "";

    pos = json.find(':', pos);
    if (pos == string::npos) return "";

    pos++;
    while (pos < json.length() && (json[pos] == ' ' || json[pos] == '\t' || json[pos] == '\r' || json[pos] == '\n')) pos++;
    
    bool hasEscape = false;
    if (pos + 1 < json.length() && json[pos] == '\\' && json[pos+1] == '"') {
        hasEscape = true;
        pos += 2;
    } else if (pos < json.length() && json[pos] == '"') {
        pos++;
    } else {
        size_t end = pos;
        while (end < json.length() && json[end] != ',' && json[end] != '}' && json[end] != '\r' && json[end] != '\n') end++;
        return json.substr(pos, end - pos);
    }

    size_t end = pos;
    while (end < json.length()) {
        if (hasEscape && end + 1 < json.length() && json[end] == '\\' && json[end+1] == '"') {
            break;
        } else if (!hasEscape && json[end] == '"' && (end == 0 || json[end-1] != '\\')) {
            break;
        }
        end++;
    }
    return json.substr(pos, end - pos);
}

// Helper: Extract JSON number field safely
double extractJsonNumber(const string& json, const string& key, double defaultVal = 0.0) {
    size_t pos = json.find("\"" + key + "\"");
    if (pos == string::npos) {
        pos = json.find("\\\"" + key + "\\\"");
    }
    if (pos == string::npos) return defaultVal;

    pos = json.find(':', pos);
    if (pos == string::npos) return defaultVal;

    pos++;
    while (pos < json.length() && (json[pos] == ' ' || json[pos] == '\t' || json[pos] == '\r' || json[pos] == '\n' || json[pos] == '"' || json[pos] == '\\')) pos++;
    size_t end = pos;
    while (end < json.length() && (isdigit(json[end]) || json[end] == '.' || json[end] == '-')) end++;
    if (end > pos) {
        try {
            return stod(json.substr(pos, end - pos));
        } catch (...) {
            return defaultVal;
        }
    }
    return defaultVal;
}

// Helper: Extract JSON bool field safely
bool extractJsonBool(const string& json, const string& key, bool defaultVal = true) {
    size_t pos = json.find("\"" + key + "\"");
    if (pos == string::npos) {
        pos = json.find("\\\"" + key + "\\\"");
    }
    if (pos == string::npos) return defaultVal;

    pos = json.find(':', pos);
    if (pos == string::npos) return defaultVal;

    pos++;
    while (pos < json.length() && (json[pos] == ' ' || json[pos] == '\t' || json[pos] == '\r' || json[pos] == '\n' || json[pos] == '"' || json[pos] == '\\')) pos++;
    if (json.substr(pos, 4) == "true") return true;
    if (json.substr(pos, 5) == "false") return false;
    return defaultVal;
}

// Helper: Extract query string parameter safely
string extractQueryParam(const string& query, const string& key) {
    size_t pos = query.find(key + "=");
    if (pos == string::npos) return "";
    pos += key.length() + 1;
    size_t end = query.find('&', pos);
    if (end == string::npos) end = query.length();
    return query.substr(pos, end - pos);
}

// Helper: Read disk file content (for static web assets)
string readFileContent(const string& filename) {
    ifstream file(filename, ios::binary);
    if (!file.is_open()) return "";
    stringstream ss;
    ss << file.rdbuf();
    return ss.str();
}

string getMimeType(const string& path) {
    if (path.find(".html") != string::npos) return "text/html; charset=utf-8";
    if (path.find(".css") != string::npos) return "text/css; charset=utf-8";
    if (path.find(".js") != string::npos) return "application/javascript; charset=utf-8";
    if (path.find(".json") != string::npos) return "application/json; charset=utf-8";
    if (path.find(".svg") != string::npos) return "image/svg+xml";
    if (path.find(".png") != string::npos) return "image/png";
    return "text/plain; charset=utf-8";
}

// Build standard HTTP response with CORS headers
string buildHttpResponse(int statusCode, const string& statusText, const string& jsonBody, const string& contentType = "application/json; charset=utf-8") {
    stringstream ss;
    ss << "HTTP/1.1 " << statusCode << " " << statusText << "\r\n"
       << "Content-Type: " << contentType << "\r\n"
       << "Content-Length: " << jsonBody.length() << "\r\n"
       << "Access-Control-Allow-Origin: *\r\n"
       << "Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS\r\n"
       << "Access-Control-Allow-Headers: Content-Type, Authorization\r\n"
       << "Connection: close\r\n"
       << "\r\n"
       << jsonBody;
    return ss.str();
}

// Request Handler Router
string handleHttpRequest(const string& method, const string& path, const string& queryString, const string& body) {
    // 1. CORS Preflight
    if (method == "OPTIONS") {
        return buildHttpResponse(204, "No Content", "");
    }

    // 2. Health & Status
    if (path == "/api/status" && method == "GET") {
        return buildHttpResponse(200, "OK", "{\"status\":\"ok\",\"service\":\"CarePulse C++ Backend\",\"version\":\"2.0\"}");
    }

    // 3. System Statistics
    if (path == "/api/stats" && method == "GET") {
        return buildHttpResponse(200, "OK", g_hospital.getStatsJson());
    }

    // 4. Doctors Endpoints
    if (path == "/api/doctors") {
        if (method == "GET") {
            stringstream ss;
            ss << "[";
            const auto& docs = g_hospital.getDoctors();
            for (size_t i = 0; i < docs.size(); i++) {
                if (i > 0) ss << ",";
                ss << docs[i].toJson();
            }
            ss << "]";
            return buildHttpResponse(200, "OK", ss.str());
        }

        if (method == "POST") {
            try {
                string id = extractJsonString(body, "id");
                string name = extractJsonString(body, "name");
                int age = (int)extractJsonNumber(body, "age", 40.0);
                string spec = extractJsonString(body, "specialization");
                bool avail = extractJsonBool(body, "isAvailable", true);

                Doctor newDoc(id, name, age, spec, avail);
                g_hospital.addDoctor(newDoc);
                return buildHttpResponse(201, "Created", "{\"success\":true,\"message\":\"Doctor added successfully\",\"doctor\":" + newDoc.toJson() + "}");
            } catch (const exception& e) {
                return buildHttpResponse(400, "Bad Request", "{\"success\":false,\"error\":\"" + string(e.what()) + "\"}");
            }
        }

        if (method == "DELETE") {
            try {
                string id = extractJsonString(body, "id");
                if (id.empty()) id = extractQueryParam(queryString, "id");
                g_hospital.removeDoctor(id);
                return buildHttpResponse(200, "OK", "{\"success\":true,\"message\":\"Doctor removed successfully\"}");
            } catch (const exception& e) {
                return buildHttpResponse(400, "Bad Request", "{\"success\":false,\"error\":\"" + string(e.what()) + "\"}");
            }
        }
    }

    // Direct path-based doctor delete /api/doctors/DOC-101
    if (path.rfind("/api/doctors/", 0) == 0 && method == "DELETE") {
        try {
            string id = path.substr(13);
            g_hospital.removeDoctor(id);
            return buildHttpResponse(200, "OK", "{\"success\":true,\"message\":\"Doctor removed successfully\"}");
        } catch (const exception& e) {
            return buildHttpResponse(400, "Bad Request", "{\"success\":false,\"error\":\"" + string(e.what()) + "\"}");
        }
    }

    if (path == "/api/doctors/availability" && method == "PUT") {
        try {
            string id = extractJsonString(body, "id");
            bool avail = extractJsonBool(body, "isAvailable", true);
            g_hospital.setDoctorAvailability(id, avail);
            return buildHttpResponse(200, "OK", "{\"success\":true,\"isAvailable\":" + string(avail ? "true" : "false") + "}");
        } catch (const exception& e) {
            return buildHttpResponse(400, "Bad Request", "{\"success\":false,\"error\":\"" + string(e.what()) + "\"}");
        }
    }

    // 5. Patients Endpoints
    if (path == "/api/patients") {
        if (method == "GET") {
            stringstream ss;
            ss << "[";
            const auto& pats = g_hospital.getPatients();
            for (size_t i = 0; i < pats.size(); i++) {
                if (i > 0) ss << ",";
                ss << pats[i]->toJson();
            }
            ss << "]";
            return buildHttpResponse(200, "OK", ss.str());
        }

        if (method == "POST") {
            try {
                string id = extractJsonString(body, "id");
                string name = extractJsonString(body, "name");
                int age = (int)extractJsonNumber(body, "age", 0.0);
                string category = extractJsonString(body, "category");

                shared_ptr<Patient> newPat;
                if (category == "General") {
                    newPat = make_shared<GeneralPatient>(id, name, age);
                } else if (category == "Senior") {
                    newPat = make_shared<SeniorPatient>(id, name, age);
                } else if (category == "Emergency") {
                    newPat = make_shared<EmergencyPatient>(id, name, age);
                } else {
                    return buildHttpResponse(400, "Bad Request", "{\"success\":false,\"error\":\"Invalid patient category. Must be General, Senior, or Emergency.\"}");
                }

                g_hospital.registerPatient(newPat);
                return buildHttpResponse(201, "Created", "{\"success\":true,\"message\":\"Patient registered successfully\",\"patient\":" + newPat->toJson() + "}");
            } catch (const exception& e) {
                return buildHttpResponse(400, "Bad Request", "{\"success\":false,\"error\":\"" + string(e.what()) + "\"}");
            }
        }
    }

    // 6. Appointments Endpoints
    if (path == "/api/appointments") {
        if (method == "GET") {
            string filterDoc = extractQueryParam(queryString, "doctorId");
            string filterPat = extractQueryParam(queryString, "patientId");
            string filterDate = extractQueryParam(queryString, "date");

            stringstream ss;
            ss << "[";
            const auto& appts = g_hospital.getAppointments();
            bool first = true;
            for (size_t i = 0; i < appts.size(); i++) {
                if (!filterDoc.empty() && appts[i].getDoctorId() != filterDoc) continue;
                if (!filterPat.empty() && appts[i].getPatientId() != filterPat) continue;
                if (!filterDate.empty() && appts[i].getDate() != filterDate) continue;

                if (!first) ss << ",";
                ss << appts[i].toJson();
                first = false;
            }
            ss << "]";
            return buildHttpResponse(200, "OK", ss.str());
        }

        if (method == "POST") {
            try {
                string patId = extractJsonString(body, "patientId");
                string docId = extractJsonString(body, "doctorId");
                string date = extractJsonString(body, "date");
                string slot = extractJsonString(body, "timeSlot");

                string apptId = g_hospital.bookAppointment(patId, docId, date, slot);
                return buildHttpResponse(201, "Created", "{\"success\":true,\"message\":\"Appointment booked successfully\",\"appointmentId\":\"" + apptId + "\"}");
            } catch (const exception& e) {
                string err = e.what();
                int code = (err.find("Conflict") != string::npos) ? 409 : 400;
                return buildHttpResponse(code, "Booking Error", "{\"success\":false,\"error\":\"" + err + "\"}");
            }
        }
    }

    // 7. Bills Endpoints
    if (path == "/api/bills" && method == "GET") {
        string filterPat = extractQueryParam(queryString, "patientId");
        stringstream ss;
        ss << "[";
        const auto& bills = g_hospital.getBills();
        bool first = true;
        for (size_t i = 0; i < bills.size(); i++) {
            if (!filterPat.empty() && bills[i].getPatientId() != filterPat) continue;
            if (!first) ss << ",";
            ss << bills[i].toJson();
            first = false;
        }
        ss << "]";
        return buildHttpResponse(200, "OK", ss.str());
    }

    if ((path == "/api/bills/generate" || path == "/api/bills") && method == "POST") {
        try {
            string apptId = extractJsonString(body, "appointmentId");
            Bill bill = g_hospital.generateBill(apptId);
            return buildHttpResponse(201, "Created", "{\"success\":true,\"message\":\"Bill generated via C++ Polymorphism\",\"bill\":" + bill.toJson() + "}");
        } catch (const exception& e) {
            return buildHttpResponse(400, "Bad Request", "{\"success\":false,\"error\":\"" + string(e.what()) + "\"}");
        }
    }

    // 8. Demo State Reset
    if (path == "/api/reset" && method == "POST") {
        g_hospital.initSampleData();
        return buildHttpResponse(200, "OK", "{\"success\":true,\"message\":\"Hospital demo state successfully reset.\"}");
    }

    // 9. Static File Serving (Self-contained Web Server)
    if (method == "GET") {
        string localPath = "";
        if (path == "/" || path == "/index.html") {
            localPath = "frontend/index.html";
        } else if (path.rfind("/css/", 0) == 0 || path.rfind("/js/", 0) == 0 ||
                   path.rfind("/assets/", 0) == 0 || path.rfind("/frontend/", 0) == 0) {
            localPath = path.substr(1);
        }

        if (!localPath.empty()) {
            string content = readFileContent(localPath);
            if (content.empty()) {
                content = readFileContent("frontend/" + localPath);
            }
            if (content.empty()) {
                content = readFileContent("index.html");
            }

            if (!content.empty()) {
                return buildHttpResponse(200, "OK", content, getMimeType(localPath));
            }
        }
    }

    // Not Found
    return buildHttpResponse(404, "Not Found", "{\"success\":false,\"error\":\"Endpoint not found: " + path + "\"}");
}

#ifdef _WIN32
CRITICAL_SECTION g_hospitalCs;

DWORD WINAPI ClientWorkerThread(LPVOID param);
#endif

void processClientSocket(SOCKET clientSocket) {
#ifdef _WIN32
    DWORD tv = 2500; // 2.5s timeout per worker thread
    setsockopt(clientSocket, SOL_SOCKET, SO_RCVTIMEO, (const char*)&tv, sizeof(tv));
    setsockopt(clientSocket, SOL_SOCKET, SO_SNDTIMEO, (const char*)&tv, sizeof(tv));
#endif

    string rawRequest = "";
    char buffer[4096];
    int expectedTotal = -1;

    while (true) {
        int n = recv(clientSocket, buffer, sizeof(buffer) - 1, 0);
        if (n <= 0) break;
        buffer[n] = '\0';
        rawRequest.append(buffer, n);

        size_t headerEnd = rawRequest.find("\r\n\r\n");
        if (headerEnd != string::npos) {
            if (rawRequest.find("100-continue") != string::npos || rawRequest.find("100-Continue") != string::npos) {
                const char* cont = "HTTP/1.1 100 Continue\r\n\r\n";
                send(clientSocket, cont, (int)strlen(cont), 0);
                size_t expPos = rawRequest.find("Expect:");
                if (expPos == string::npos) expPos = rawRequest.find("expect:");
                if (expPos != string::npos) {
                    size_t expEnd = rawRequest.find("\r\n", expPos);
                    if (expEnd != string::npos) {
                        rawRequest.erase(expPos, expEnd - expPos + 2);
                        headerEnd = rawRequest.find("\r\n\r\n");
                    }
                }
            }

            if (expectedTotal < 0) {
                size_t clPos = rawRequest.find("Content-Length:");
                if (clPos == string::npos) clPos = rawRequest.find("content-length:");
                if (clPos == string::npos) clPos = rawRequest.find("Content-length:");
                if (clPos != string::npos) {
                    size_t clStart = clPos + 15;
                    size_t clEnd = rawRequest.find("\r\n", clStart);
                    int cl = 0;
                    try {
                        cl = stoi(rawRequest.substr(clStart, clEnd - clStart));
                    } catch (...) {}
                    expectedTotal = (int)headerEnd + 4 + cl;
                } else {
                    expectedTotal = (int)headerEnd + 4;
                }
            }

            if ((int)rawRequest.length() >= expectedTotal) {
                break;
            }
        }
    }

    if (rawRequest.empty()) {
#ifdef _WIN32
        closesocket(clientSocket);
#else
        close(clientSocket);
#endif
        return;
    }

    stringstream reqStream(rawRequest);
    string method, fullPath, httpVer;
    reqStream >> method >> fullPath >> httpVer;

    string path = fullPath;
    string queryString = "";
    size_t queryPos = path.find('?');
    if (queryPos != string::npos) {
        queryString = path.substr(queryPos + 1);
        path = path.substr(0, queryPos);
    }

    string body = "";
    size_t bodyPos = rawRequest.find("\r\n\r\n");
    if (bodyPos != string::npos) {
        body = rawRequest.substr(bodyPos + 4);
    }

    cout << "[CarePulse API] " << method << " " << path << endl;

    string response;
#ifdef _WIN32
    EnterCriticalSection(&g_hospitalCs);
    response = handleHttpRequest(method, path, queryString, body);
    LeaveCriticalSection(&g_hospitalCs);
#else
    response = handleHttpRequest(method, path, queryString, body);
#endif

    int totalSent = 0;
    int toSend = (int)response.length();
    const char* ptr = response.c_str();
    while (totalSent < toSend) {
        int sent = send(clientSocket, ptr + totalSent, toSend - totalSent, 0);
        if (sent <= 0) break;
        totalSent += sent;
    }

#ifdef _WIN32
    shutdown(clientSocket, SD_SEND);
    closesocket(clientSocket);
#else
    shutdown(clientSocket, SHUT_WR);
    close(clientSocket);
#endif
}

#ifdef _WIN32
DWORD WINAPI ClientWorkerThread(LPVOID param) {
    SOCKET clientSocket = (SOCKET)(uintptr_t)param;
    processClientSocket(clientSocket);
    return 0;
}
#endif

// Server Main Loop
int main() {
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);
    int port = 5000;

#ifdef _WIN32
    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        cerr << "[CarePulse Server] Failed to initialize Winsock." << endl;
        return 1;
    }
    InitializeCriticalSection(&g_hospitalCs);
#endif

    SOCKET serverSocket = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (serverSocket == INVALID_SOCKET) {
        cerr << "[CarePulse Server] Socket creation failed." << endl;
        return 1;
    }

    int opt = 1;
    setsockopt(serverSocket, SOL_SOCKET, SO_REUSEADDR, (const char*)&opt, sizeof(opt));

    sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = htonl(INADDR_ANY);
    serverAddr.sin_port = htons(port);

    if (bind(serverSocket, (struct sockaddr*)&serverAddr, sizeof(serverAddr)) == SOCKET_ERROR) {
        cerr << "[CarePulse Server] Bind failed on port " << port << "." << endl;
#ifdef _WIN32
        closesocket(serverSocket);
        WSACleanup();
#endif
        return 1;
    }

    if (listen(serverSocket, SOMAXCONN) == SOCKET_ERROR) {
        cerr << "[CarePulse Server] Listen failed." << endl;
        return 1;
    }

    cout << "==========================================================" << endl;
    cout << "   CarePulse C++ Hospital Backend Server Running        " << endl;
    cout << "   Port: " << port << " | Authoritative OOP State Active       " << endl;
    cout << "==========================================================" << endl;

    while (true) {
        sockaddr_in clientAddr;
        int clientLen = sizeof(clientAddr);
        SOCKET clientSocket = accept(serverSocket, (struct sockaddr*)&clientAddr, &clientLen);

        if (clientSocket == INVALID_SOCKET) {
            continue;
        }

#ifdef _WIN32
        HANDLE hThread = CreateThread(NULL, 0, ClientWorkerThread, (LPVOID)(uintptr_t)clientSocket, 0, NULL);
        if (hThread) {
            CloseHandle(hThread);
        } else {
            processClientSocket(clientSocket);
        }
#else
        processClientSocket(clientSocket);
#endif
    }

#ifdef _WIN32
    DeleteCriticalSection(&g_hospitalCs);
    closesocket(serverSocket);
    WSACleanup();
#endif

    return 0;
}
