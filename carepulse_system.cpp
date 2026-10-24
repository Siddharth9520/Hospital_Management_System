#include <iostream>
#include <vector>
#include <string>
#include <memory>
#include <iomanip>
#include <stdexcept>
#include <algorithm>

using namespace std;

// ==========================================
// 1. PERSON CLASS (Encapsulation & Base Class)
// ==========================================
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

// ==========================================
// 2. DOCTOR CLASS (Single Inheritance)
// ==========================================
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
};

// ==========================================
// 3. PATIENT CLASS (Abstract Base Class - Polymorphism)
// ==========================================
class Patient : public Person {
public:
    Patient(string patId, string patName, int patAge)
        : Person(patId, patName, patAge) {}

    virtual string getCategory() const = 0;   // Pure virtual function
    virtual double calculateBill() const = 0; // Polymorphic bill calculation

    void displayDetails() const override {
        Person::displayDetails();
        cout << " | Category: " << setw(10) << left << getCategory()
             << " | Consultation Fee: ₹" << fixed << setprecision(2) << calculateBill() << endl;
    }
};

// ==========================================
// 4. PATIENT CATEGORIES (Hierarchical Inheritance)
// ==========================================
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
};

// ==========================================
// 5. APPOINTMENT CLASS (Encapsulation & Association)
// ==========================================
class Appointment {
private:
    string appointmentId;
    string patientId;
    string doctorId;
    string date;
    string timeSlot;
    bool isBilled;
    double billedAmount;

public:
    Appointment(string apptId, string patId, string docId, string apptDate, string slot)
        : appointmentId(apptId), patientId(patId), doctorId(docId),
          date(apptDate), timeSlot(slot), isBilled(false), billedAmount(0.0) {}

    string getAppointmentId() const { return appointmentId; }
    string getPatientId() const { return patientId; }
    string getDoctorId() const { return doctorId; }
    string getDate() const { return date; }
    string getTimeSlot() const { return timeSlot; }
    bool getIsBilled() const { return isBilled; }
    double getBilledAmount() const { return billedAmount; }

    void markBilled(double amount) {
        if (isBilled) {
            throw runtime_error("Appointment " + appointmentId + " is already billed.");
        }
        isBilled = true;
        billedAmount = amount;
    }
};

// ==========================================
// 6. HOSPITAL SYSTEM (Composition & Exception Handling)
// ==========================================
class HospitalSystem {
private:
    vector<Doctor> doctors;
    vector<shared_ptr<Patient>> patients;
    vector<Appointment> appointments;
    int nextApptCounter;

public:
    HospitalSystem() : nextApptCounter(101) {}

    void addDoctor(const Doctor& doc) {
        for (const auto& d : doctors) {
            if (d.getId() == doc.getId()) {
                throw runtime_error("Doctor with ID " + doc.getId() + " already exists.");
            }
        }
        doctors.push_back(doc);
    }

    void removeDoctor(const string& docId) {
        auto it = remove_if(doctors.begin(), doctors.end(),
            [&docId](const Doctor& d) { return d.getId() == docId; });
        if (it == doctors.end()) {
            throw runtime_error("Doctor not found: " + docId);
        }
        doctors.erase(it, doctors.end());
    }

    void setDoctorAvailability(const string& docId, bool status) {
        for (auto& d : doctors) {
            if (d.getId() == docId) {
                d.setAvailability(status);
                return;
            }
        }
        throw runtime_error("Doctor not found: " + docId);
    }

    void registerPatient(shared_ptr<Patient> patient) {
        for (const auto& p : patients) {
            if (p->getId() == patient->getId()) {
                throw runtime_error("Patient with ID " + patient->getId() + " already exists.");
            }
        }
        patients.push_back(patient);
    }

    string bookAppointment(const string& patId, const string& docId, const string& date, const string& timeSlot) {
        // Validate patient existence
        bool patientFound = false;
        for (const auto& p : patients) {
            if (p->getId() == patId) {
                patientFound = true;
                break;
            }
        }
        if (!patientFound) {
            throw runtime_error("Booking failed: Patient ID " + patId + " not found.");
        }

        // Validate doctor existence and availability
        bool doctorFound = false;
        bool doctorAvailable = false;
        for (const auto& d : doctors) {
            if (d.getId() == docId) {
                doctorFound = true;
                doctorAvailable = d.getAvailability();
                break;
            }
        }
        if (!doctorFound) {
            throw runtime_error("Booking failed: Doctor ID " + docId + " not found.");
        }
        if (!doctorAvailable) {
            throw runtime_error("Booking failed: Doctor is currently marked as Unavailable.");
        }

        // Prevent duplicate doctor/date/time slots
        for (const auto& a : appointments) {
            if (a.getDoctorId() == docId && a.getDate() == date && a.getTimeSlot() == timeSlot) {
                throw runtime_error("Booking conflict: Doctor already has an appointment at " + timeSlot + " on " + date + ".");
            }
        }

        string apptId = "APT-" + to_string(nextApptCounter++);
        appointments.emplace_back(apptId, patId, docId, date, timeSlot);
        return apptId;
    }

    double generateBill(const string& apptId) {
        Appointment* targetAppt = nullptr;
        for (auto& a : appointments) {
            if (a.getAppointmentId() == apptId) {
                targetAppt = &a;
                break;
            }
        }

        if (!targetAppt) {
            throw runtime_error("Bill generation failed: Appointment ID " + apptId + " not found.");
        }
        if (targetAppt->getIsBilled()) {
            throw runtime_error("Bill generation failed: Appointment already billed.");
        }

        // Find patient and compute polymorphic bill
        for (const auto& p : patients) {
            if (p->getId() == targetAppt->getPatientId()) {
                double amount = p->calculateBill(); // Polymorphic dispatch
                targetAppt->markBilled(amount);
                return amount;
            }
        }

        throw runtime_error("Bill generation failed: Associated patient record missing.");
    }

    const vector<Doctor>& getDoctors() const { return doctors; }
    const vector<shared_ptr<Patient>>& getPatients() const { return patients; }
    const vector<Appointment>& getAppointments() const { return appointments; }
};

// ==========================================
// 7. MAIN MENU (Interactive Driver Program)
// ==========================================
int main() {
    HospitalSystem hospital;

    // Seed default sample data for academic demonstration
    hospital.addDoctor(Doctor("DOC-101", "Dr. Sarah Sharma", 42, "Cardiology", true));
    hospital.addDoctor(Doctor("DOC-102", "Dr. Rajesh Rao", 48, "Neurology", true));
    hospital.addDoctor(Doctor("DOC-103", "Dr. Anita Desai", 36, "Pediatrics", false));

    hospital.registerPatient(make_shared<GeneralPatient>("PAT-201", "Aakash Patel", 34));
    hospital.registerPatient(make_shared<SeniorPatient>("PAT-202", "Savitri Devi", 68));
    hospital.registerPatient(make_shared<EmergencyPatient>("PAT-203", "Rohan Mehta", 27));

    hospital.bookAppointment("PAT-201", "DOC-101", "2026-10-25", "10:00 AM");

    cout << "======================================================" << endl;
    cout << "   CarePulse - Hospital Management & C++ Simulator    " << endl;
    cout << "======================================================" << endl;
    cout << "Hospital system initialized with default OOP records." << endl;
    cout << "Doctors: " << hospital.getDoctors().size()
         << " | Patients: " << hospital.getPatients().size()
         << " | Appointments: " << hospital.getAppointments().size() << endl;

    return 0;
}
