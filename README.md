# CarePulse — Hospital Management System & C++ Learning Simulator

> **An interactive, full-stack healthcare dashboard paired with a real-time C++ Object-Oriented Programming (OOP) learning simulator.**

---

## 1. Overview

**CarePulse** bridges the gap between academic C++ concepts and modern web application development. It allows students, educators, and software engineers to operate an interactive hospital simulation while inspecting the actual C++ object-oriented architecture powering each operation in real time.

The application features a desktop workspace split into three synchronized panels:
1. **C++ Code Explorer (Left):** Real C++ backend source code with syntax highlighting, searchable classes, collapsible modules, line numbers, and keyboard navigation.
2. **Code Explanation Panel (Center):** Deep-dive explanations of the selected code, breaking down *What it does*, *Why it matters*, the underlying *OOP Concept*, and real-world hospital usage.
3. **Hospital Simulation Dashboard (Right):** Live healthcare management console providing Doctor Management, Patient Registration, Appointment Scheduling, and Polymorphic Billing.

---

## 2. Key Features

- **Live Statistics Dashboard:** Real-time metrics for registered doctors, patients, booked appointments, generated bills, and gross revenue.
- **Doctor Management:** Add doctors, search by specialization, toggle availability states, and safely delete doctors with validation safeguards.
- **Patient Registration & Categorization:** Register patients across three distinct academic categories (`General`, `Senior`, `Emergency`) with instant rate breakdowns.
- **Conflict-Aware Appointment Booking:** Schedule patient-doctor appointments with backend validation rejecting slot conflicts (HTTP 409), unavailable doctors, and invalid date/time formats.
- **Polymorphic Billing & Issued Bill History:** Calculates patient-specific fees at runtime through pure virtual method overrides, issues printable official receipts, prevents double-billing, and maintains an immutable bill log.
- **Two-Way Code-to-Simulation Linking:** Clicking code lines navigates directly to the live hospital feature; triggering hospital operations highlights the responsible C++ code.
- **10-Step Guided Demo Mode:** A deterministic, faculty-ready walkthrough covering all 5 core OOP concepts from class constructors to runtime polymorphism.

---

## 3. Object-Oriented Programming (OOP) Concepts Demonstrated

CarePulse is engineered to demonstrate five foundational C++ OOP principles:

| Concept | Implementation in C++ Backend | Hospital Application Role |
|---|---|---|
| **1. Constructors** | Parameterized constructors with member initializer lists across `Person`, `Doctor`, `Patient`, `Appointment`, and `Bill`. | Initializes valid entities and guarantees all required fields are set before insertion. |
| **2. Inheritance** | `Doctor` and `Patient` derive from base class `Person`. Subclasses `GeneralPatient`, `SeniorPatient`, and `EmergencyPatient` inherit from `Patient`. | Reuses common identity attributes (`id`, `name`, `age`) while specializing domain responsibilities. |
| **3. Polymorphism** | Pure virtual function `calculateBill(double& base, double& adj, double& total)` in `Patient`, dynamically overridden by subclasses. | Dynamically computes category-specific billing amounts at runtime without type switching. |
| **4. Encapsulation** | Private and protected fields guarded by public accessors, mutators, and business methods (`setAvailability`, `markBilled`). | Protects hospital state from external tampering and maintains data consistency. |
| **5. Exception Handling** | C++ `std::invalid_argument` and `std::runtime_error` thrown for invalid input, underage senior citizens, and slot conflicts. | Gracefully reports operational errors back to the UI via structured JSON error payloads. |

---

## 4. Illustrative Academic Billing Rules

The system implements the following academic fee rules calculated authoritatively by the C++ backend:

- **General Patient:**
  - Base Consultation: **₹500.00**
  - Adjustments: **₹0.00**
  - **Final Total: ₹500.00**
- **Senior Patient:**
  - Qualification: Age $\ge 60$ (enforced via C++ exception)
  - Base Consultation: ₹500.00
  - Senior Concession: **-10% discount (-₹50.00)**
  - **Final Total: ₹450.00**
- **Emergency Patient:**
  - Base Consultation: ₹500.00
  - Emergency Triage Surcharge: **+₹300.00**
  - **Final Total: ₹800.00**

---

## 5. Technology Stack

- **Backend:** C++14 (Win32 Multi-Threaded Socket HTTP REST Server, Winsock2, `CreateThread`, `CRITICAL_SECTION`).
- **Frontend:** Vanilla HTML5, CSS3 (Modular Glassmorphism Design System, CSS Variables, Flexbox/Grid), and ES6+ JavaScript.
- **API Protocol:** RESTful JSON communication over HTTP (Port 5000) with CORS support.

---

## 6. Repository Structure

```
CAREPULSE/
├── .gitignore                     # Git exclusion rules for binaries, caches, and logs
├── README.md                      # Comprehensive project documentation
├── backend/
│   └── main.cpp                   # Multi-threaded C++ HTTP REST backend & domain classes
└── frontend/
    ├── app.js                     # Root frontend module integration loader
    ├── index.html                 # Main three-panel healthcare dashboard & learning interface
    ├── style.css                  # Consolidated stylesheet bundle
    ├── css/
    │   ├── code-explorer.css      # C++ code explorer styles & token highlights
    │   ├── explanation.css        # OOP concept explanation card styles
    │   ├── main.css               # Base layout, typography, navigation, modals, and badge styles
    │   ├── simulation.css         # Hospital tables, cards, stat badges, and action controls
    │   └── variables.css          # Design tokens (colors, gradients, glassmorphism, typography)
    └── js/
        ├── app.js                 # UI coordinator and event router
        ├── code_explorer.js       # 7-module C++ syntax explorer & line highlighter
        ├── cpp_codebase.js        # Synchronized C++ source metadata & AST tokens
        ├── explanation_panel.js   # OOP explanation and practical application engine
        ├── guided_demo.js         # Deterministic 10-step faculty demonstration engine
        ├── hospital_state.js      # Authoritative C++ REST synchronization client
        └── simulation_views.js    # Doctor, patient, appointment, and billing UI views
```

---

## 7. Prerequisites

- **Operating System:** Windows 10 or 11 (64-bit recommended).
- **C++ Compiler:** MinGW GCC with C++14 support (`g++`).
- **Web Browser:** Modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox).

---

## 8. Build & Run Instructions

### Step 1: Compile the C++ Backend Server
Open PowerShell or Command Prompt in the repository root directory:
```powershell
g++ -O2 -std=c++14 backend/main.cpp -o server.exe -lws2_32
```

### Step 2: Launch the Backend Server
```powershell
.\server.exe
```
You will see the startup banner:
```
==========================================================
   CarePulse C++ Hospital Backend Server Running        
   Port: 5000 | Authoritative OOP State Active       
==========================================================
```

### Step 3: Launch the Frontend
The frontend can be loaded in either of two ways:
1. **Via Built-in C++ Web Server (Recommended):** Open your browser and navigate to:
   ```
   http://localhost:5000/
   ```
2. **Via Local Static Server or File:** Open `frontend/index.html` directly or host it on port 8080.
   - Verify the top-right header badge indicates **🟢 C++ Server Online**.

---

## 9. REST API Endpoint Reference

The authoritative C++ engine exposes the following REST endpoints on `http://127.0.0.1:5000`:

| Method | Endpoint | Description | Status Codes |
|---|---|---|---|
| `GET` | `/api/status` | Service health status and heartbeat | `200 OK` |
| `GET` | `/api/stats` | Hospital statistics (counts and revenue) | `200 OK` |
| `GET` | `/api/doctors` | List all registered doctors | `200 OK` |
| `POST` | `/api/doctors` | Add a doctor (validates duplicate ID & empty fields) | `201 Created`, `400 Bad Request` |
| `PUT` | `/api/doctors/availability` | Toggle doctor availability state | `200 OK`, `404 Not Found` |
| `DELETE` | `/api/doctors` | Safe removal (rejects if linked to appointments) | `200 OK`, `400`, `404` |
| `GET` | `/api/patients` | List all registered patients with fee structures | `200 OK` |
| `POST` | `/api/patients` | Register a patient (`General`, `Senior`, `Emergency`) | `201 Created`, `400 Bad Request` |
| `GET` | `/api/appointments` | List appointments (supports `doctorId`, `patientId`, `date` filters) | `200 OK` |
| `POST` | `/api/appointments` | Book appointment (validates doctor, patient, slot conflicts) | `201 Created`, `400`, `409 Conflict` |
| `GET` | `/api/bills` | Retrieve complete issued bill history | `200 OK` |
| `POST` | `/api/bills/generate` | Generate immutable bill via polymorphic calculation | `201 Created`, `400`, `404` |
| `POST` | `/api/reset` | Restore clean initial demonstration data | `200 OK` |
| `GET` | `/*` | Built-in HTTP static file server delivering the frontend | `200 OK`, `404 Not Found` |

---

## 10. Current Limitations & Scope

- **In-Memory Storage:** Records are maintained in-memory within the C++ process (`std::vector<Doctor>`, `std::vector<std::unique_ptr<Patient>>`, etc.). Records are reset to default seed data when `server.exe` restarts or when `/api/reset` is called.
- **Demonstration Roles:** Role switching (`Admin`, `Doctor`, `Patient`) provides contextual perspective views for demonstration purposes without requiring a production database or cryptographic auth.

---

## 11. License

Developed for academic presentation and educational simulation of C++ Object-Oriented Programming and Full-Stack Healthcare Architecture.
