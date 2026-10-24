/* ==========================================================================
   CarePulse Hospital State & C++ Backend API Integration Engine
   Authoritative C++ Backend (Port 5000) with Asynchronous Synchronization
   ========================================================================== */

class HospitalState {
  constructor() {
    this.currentRole = "admin"; // 'admin', 'doctor', 'patient'
    this.activeSimTab = "dashboard";
    this.activeDoctorFilter = "DOC-101"; // For Doctor role
    this.activePatientFilter = "PAT-201"; // For Patient role
    this.listeners = [];

    // Backend configuration
    this.apiBase = (window.location.port === "5000") ? "/api" : "http://127.0.0.1:5000/api";
    this.backendConnected = false;
    this.isSyncing = false;
    this.lastSyncTime = null;

    // Local cached records initialized with academic seed data
    this.doctors = [];
    this.patients = [];
    this.appointments = [];
    this.bills = [];
    this.metrics = {
      totalDoctors: 0,
      totalPatients: 0,
      totalAppointments: 0,
      totalBills: 0,
      totalBilledRevenue: 0.0
    };

    this.initDefaultFallbackState();
    this.initBackendConnection();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify(event, payload) {
    this.listeners.forEach(fn => {
      try {
        fn(event, payload);
      } catch (err) {
        console.error("Error in HospitalState listener:", err);
      }
    });
  }

  initDefaultFallbackState() {
    this.doctors = [
      { id: "DOC-101", name: "Dr. Sarah Sharma", age: 42, specialization: "Cardiology", isAvailable: true },
      { id: "DOC-102", name: "Dr. Rajesh Rao", age: 48, specialization: "Neurology", isAvailable: true },
      { id: "DOC-103", name: "Dr. Anita Desai", age: 36, specialization: "Pediatrics", isAvailable: false },
      { id: "DOC-104", name: "Dr. Vikram Patel", age: 51, specialization: "Orthopedics", isAvailable: true }
    ];

    this.patients = [
      { id: "PAT-201", name: "Aakash Patel", age: 34, category: "General" },
      { id: "PAT-202", name: "Savitri Devi", age: 68, category: "Senior" },
      { id: "PAT-203", name: "Rohan Mehta", age: 27, category: "Emergency" },
      { id: "PAT-204", name: "Pooja Joshi", age: 62, category: "Senior" }
    ];

    this.appointments = [
      {
        id: "APT-101",
        patientId: "PAT-201",
        doctorId: "DOC-101",
        date: "2026-10-25",
        timeSlot: "10:00 AM",
        isBilled: true,
        billId: "BILL-501",
        billedAmount: 500.0
      },
      {
        id: "APT-102",
        patientId: "PAT-202",
        doctorId: "DOC-102",
        date: "2026-10-25",
        timeSlot: "11:30 AM",
        isBilled: false,
        billId: "",
        billedAmount: 0.0
      },
      {
        id: "APT-103",
        patientId: "PAT-203",
        doctorId: "DOC-104",
        date: "2026-10-25",
        timeSlot: "02:00 PM",
        isBilled: false,
        billId: "",
        billedAmount: 0.0
      }
    ];

    this.bills = [
      {
        billId: "BILL-501",
        appointmentId: "APT-101",
        patientId: "PAT-201",
        patientName: "Aakash Patel",
        patientCategory: "General",
        consultationFee: 500.0,
        adjustmentAmount: 0.0,
        finalAmount: 500.0,
        timestamp: "2026-10-24 10:45"
      }
    ];

    this.updateMetricsFromLocal();
  }

  updateMetricsFromLocal() {
    this.metrics = {
      totalDoctors: this.doctors.length,
      totalPatients: this.patients.length,
      totalAppointments: this.appointments.length,
      totalBills: this.bills.length,
      totalBilledRevenue: this.bills.reduce((sum, b) => sum + (Number(b.finalAmount) || 0), 0)
    };
  }

  // ==========================================================================
  // Backend API Communication Layer
  // ==========================================================================
  async initBackendConnection() {
    await this.checkBackendStatus();
    if (this.backendConnected) {
      await this.syncFromBackend();
    }
    // Background health check every 10 seconds
    setInterval(() => {
      this.checkBackendStatus();
    }, 10000);
  }

  async checkBackendStatus() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(`${this.apiBase}/status`, {
        method: "GET",
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const prevStatus = this.backendConnected;
        this.backendConnected = true;
        this.updateConnectionIndicator(true, data.service || "C++ Backend Active");
        if (!prevStatus) {
          await this.syncFromBackend();
        }
        return true;
      }
    } catch (e) {
      // Offline
    }
    this.backendConnected = false;
    this.updateConnectionIndicator(false, "C++ Backend Offline (Port 5000)");
    return false;
  }

  updateConnectionIndicator(isConnected, text) {
    const el = document.getElementById("backend-connection-badge");
    if (el) {
      el.className = `backend-badge ${isConnected ? "backend-online" : "backend-offline"}`;
      el.innerHTML = `
        <span class="badge-dot"></span>
        <span>${isConnected ? "C++ Server Online" : "C++ Server Offline"}</span>
      `;
      el.title = `${text} — Authoritative OOP State`;
    }
  }

  async apiRequest(endpoint, options = {}) {
    const url = `${this.apiBase}${endpoint}`;
    const defaultHeaders = {
      "Content-Type": "application/json"
    };

    const config = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {})
      }
    };

    if (config.body && typeof config.body === "object") {
      config.body = JSON.stringify(config.body);
    }

    try {
      const res = await fetch(url, config);
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const errMessage = data.error || `HTTP ${res.status}: ${res.statusText}`;
        throw new Error(errMessage);
      }

      this.backendConnected = true;
      this.updateConnectionIndicator(true, "C++ Backend Active");
      return data;
    } catch (err) {
      if (err.name === "TypeError" && err.message.includes("Failed to fetch")) {
        this.backendConnected = false;
        this.updateConnectionIndicator(false, "C++ Server Offline (Port 5000)");
        throw new Error("Cannot reach C++ backend server on port 5000. Ensure server.exe is running.");
      }
      throw err;
    }
  }

  async syncFromBackend() {
    if (!this.backendConnected || this.isSyncing) return;
    this.isSyncing = true;
    try {
      const stats = await this.apiRequest("/stats", { method: "GET" }).catch(() => null);
      if (stats) this.metrics = stats;

      const doctors = await this.apiRequest("/doctors", { method: "GET" }).catch(() => null);
      if (doctors && Array.isArray(doctors)) this.doctors = doctors;

      const patients = await this.apiRequest("/patients", { method: "GET" }).catch(() => null);
      if (patients && Array.isArray(patients)) this.patients = patients;

      const appointments = await this.apiRequest("/appointments", { method: "GET" }).catch(() => null);
      if (appointments && Array.isArray(appointments)) this.appointments = appointments;

      const bills = await this.apiRequest("/bills", { method: "GET" }).catch(() => null);
      if (bills && Array.isArray(bills)) this.bills = bills;

      if (!stats) {
        this.updateMetricsFromLocal();
      }

      this.lastSyncTime = new Date();
      this.notify("state_changed", { action: "sync" });
    } catch (e) {
      console.warn("Backend sync notice:", e.message);
    } finally {
      this.isSyncing = false;
    }
  }

  // ==========================================================================
  // Synchronous Accessors for Instant UI Rendering
  // ==========================================================================
  getMetrics() {
    return this.metrics;
  }

  // ==========================================================================
  // Doctor Operations
  // ==========================================================================
  async addDoctor({ id, name, age, specialization, isAvailable = true }) {
    if (!id || !name || !specialization) {
      throw new Error("Validation Error: Please fill in all required doctor fields.");
    }

    if (this.backendConnected) {
      const payload = {
        id: id.trim(),
        name: name.trim(),
        age: parseInt(age, 10) || 40,
        specialization: specialization.trim(),
        isAvailable: Boolean(isAvailable)
      };

      const result = await this.apiRequest("/doctors", {
        method: "POST",
        body: payload
      });

      await this.syncFromBackend();
      this.notify("state_changed", {
        action: "addDoctor",
        doc: result.doctor || payload,
        cppTrigger: `Doctor::Doctor("${payload.id}", "${payload.name}", ${payload.age}, "${payload.specialization}")`,
        codeKey: "doctor-class"
      });
      return result.doctor || payload;
    } else {
      // Local fallback
      const exists = this.doctors.some(d => d.id.toLowerCase() === id.trim().toLowerCase());
      if (exists) {
        throw new Error(`C++ Exception: Doctor with ID '${id}' already exists.`);
      }
      const newDoc = {
        id: id.trim(),
        name: name.trim(),
        age: parseInt(age, 10) || 40,
        specialization: specialization.trim(),
        isAvailable: Boolean(isAvailable)
      };
      this.doctors.push(newDoc);
      this.updateMetricsFromLocal();
      this.notify("state_changed", {
        action: "addDoctor",
        doc: newDoc,
        cppTrigger: `Doctor::Doctor("${newDoc.id}", "${newDoc.name}", ${newDoc.age}, "${newDoc.specialization}")`,
        codeKey: "doctor-class"
      });
      return newDoc;
    }
  }

  async toggleDoctorAvailability(doctorId) {
    const doc = this.doctors.find(d => d.id === doctorId);
    if (!doc) throw new Error("Doctor not found: " + doctorId);

    const newStatus = !doc.isAvailable;

    if (this.backendConnected) {
      await this.apiRequest("/doctors/availability", {
        method: "PUT",
        body: { id: doctorId, isAvailable: newStatus }
      });
      doc.isAvailable = newStatus;
      await this.syncFromBackend();
    } else {
      doc.isAvailable = newStatus;
    }

    this.notify("state_changed", {
      action: "toggleAvailability",
      doc,
      cppTrigger: `Doctor::setAvailability(${newStatus ? "true" : "false"}) // Doctor ID: ${doctorId}`,
      codeKey: "doctor-class"
    });
    return newStatus;
  }

  async removeDoctor(doctorId) {
    if (this.backendConnected) {
      await this.apiRequest("/doctors", {
        method: "DELETE",
        body: { id: doctorId }
      });
      await this.syncFromBackend();
    } else {
      const hasAppointments = this.appointments.some(a => a.doctorId === doctorId);
      if (hasAppointments) {
        throw new Error(`Safety Policy Violation: Cannot remove Doctor '${doctorId}' with active appointments in schedule.`);
      }
      const initialLength = this.doctors.length;
      this.doctors = this.doctors.filter(d => d.id !== doctorId);
      if (this.doctors.length === initialLength) {
        throw new Error("Doctor ID not found.");
      }
      this.updateMetricsFromLocal();
    }

    this.notify("state_changed", {
      action: "removeDoctor",
      doctorId,
      cppTrigger: `HospitalSystem::removeDoctor("${doctorId}") // Verified safe removal`,
      codeKey: "hospital-conflict"
    });
  }

  // ==========================================================================
  // Patient Operations
  // ==========================================================================
  async registerPatient({ id, name, age, category }) {
    if (!id || !name || !category) {
      throw new Error("Validation Error: All patient fields are mandatory.");
    }
    const numAge = parseInt(age, 10);
    if (isNaN(numAge) || numAge <= 0 || numAge > 120) {
      throw new Error("Validation Error: Please enter a valid age between 1 and 120.");
    }

    // Senior age validation (enforced by SeniorPatient constructor in C++)
    if (category === "Senior" && numAge < 60) {
      throw new Error("C++ Exception (invalid_argument): Senior patient must be 60 years or older.");
    }

    const payload = {
      id: id.trim(),
      name: name.trim(),
      age: numAge,
      category
    };

    if (this.backendConnected) {
      const result = await this.apiRequest("/patients", {
        method: "POST",
        body: payload
      });
      await this.syncFromBackend();
      this.notify("state_changed", {
        action: "registerPatient",
        patient: result.patient || payload,
        cppTrigger: `make_shared<${category}Patient>("${payload.id}", "${payload.name}", ${payload.age})`,
        codeKey: category === "Senior" ? "patient-senior" : "patient-abstract"
      });
      return result.patient || payload;
    } else {
      const exists = this.patients.some(p => p.id.toLowerCase() === id.trim().toLowerCase());
      if (exists) {
        throw new Error(`C++ Exception: Patient record with ID '${id}' already exists.`);
      }
      this.patients.push(payload);
      this.updateMetricsFromLocal();
      this.notify("state_changed", {
        action: "registerPatient",
        patient: payload,
        cppTrigger: `make_shared<${category}Patient>("${payload.id}", "${payload.name}", ${payload.age})`,
        codeKey: category === "Senior" ? "patient-senior" : "patient-abstract"
      });
      return payload;
    }
  }

  // ==========================================================================
  // Appointment Operations
  // ==========================================================================
  async bookAppointment({ patientId, doctorId, date, timeSlot }) {
    if (!patientId || !doctorId || !date || !timeSlot) {
      throw new Error("Validation Error: Please select patient, doctor, date and time slot.");
    }

    const payload = { patientId, doctorId, date, timeSlot };

    if (this.backendConnected) {
      const result = await this.apiRequest("/appointments", {
        method: "POST",
        body: payload
      });
      await this.syncFromBackend();
      const apptId = result.appointmentId || "APT-NEW";
      const newAppt = this.appointments.find(a => a.id === apptId) || {
        id: apptId,
        patientId,
        doctorId,
        date,
        timeSlot,
        isBilled: false
      };

      this.notify("state_changed", {
        action: "bookAppointment",
        appointment: newAppt,
        cppTrigger: `HospitalSystem::bookAppointment("${patientId}", "${doctorId}", "${date}", "${timeSlot}") -> ${apptId}`,
        codeKey: "hospital-conflict"
      });
      return newAppt;
    } else {
      // Local fallback validations
      const patient = this.patients.find(p => p.id === patientId);
      if (!patient) throw new Error("C++ Exception: Patient ID not found in registry.");

      const doctor = this.doctors.find(d => d.id === doctorId);
      if (!doctor) throw new Error("C++ Exception: Doctor ID not found in staff list.");

      if (!doctor.isAvailable) {
        throw new Error(`Booking Failed: ${doctor.name} is currently marked as Unavailable.`);
      }

      const hasSlotConflict = this.appointments.some(
        a => a.doctorId === doctorId && a.date === date && a.timeSlot === timeSlot
      );
      if (hasSlotConflict) {
        throw new Error(`Booking Conflict (Exception): ${doctor.name} already has an appointment booked on ${date} at ${timeSlot}.`);
      }

      const apptId = `APT-${100 + this.appointments.length + 1}`;
      const newAppt = {
        id: apptId,
        patientId,
        doctorId,
        date,
        timeSlot,
        isBilled: false,
        billId: "",
        billedAmount: 0.0
      };
      this.appointments.push(newAppt);
      this.updateMetricsFromLocal();

      this.notify("state_changed", {
        action: "bookAppointment",
        appointment: newAppt,
        cppTrigger: `HospitalSystem::bookAppointment("${patientId}", "${doctorId}", "${date}", "${timeSlot}") -> ${apptId}`,
        codeKey: "hospital-conflict"
      });
      return newAppt;
    }
  }

  // ==========================================================================
  // Polymorphic Billing Calculation (Authoritative C++ Rules)
  // ==========================================================================
  calculatePolymorphicBill(patientCategory) {
    const BASE_FEE = 500.0;
    switch (patientCategory) {
      case "General":
        return {
          baseFee: BASE_FEE,
          adjustmentLabel: "Standard Rate (No Adjustment)",
          adjustmentAmount: 0.0,
          total: 500.0
        };
      case "Senior":
        return {
          baseFee: BASE_FEE,
          adjustmentLabel: "10% Senior Citizen Concession",
          adjustmentAmount: -50.0,
          total: 450.0
        };
      case "Emergency":
        return {
          baseFee: BASE_FEE,
          adjustmentLabel: "Emergency Triage Surcharge",
          adjustmentAmount: 300.0,
          total: 800.0
        };
      default:
        return {
          baseFee: BASE_FEE,
          adjustmentLabel: "Standard Rate",
          adjustmentAmount: 0.0,
          total: BASE_FEE
        };
    }
  }

  async generateBill(appointmentId) {
    if (!appointmentId) throw new Error("Appointment ID is required to generate bill.");

    if (this.backendConnected) {
      const result = await this.apiRequest("/bills/generate", {
        method: "POST",
        body: { appointmentId }
      });
      await this.syncFromBackend();
      const bill = result.bill;
      const appt = this.appointments.find(a => a.id === appointmentId) || {};
      const patient = this.patients.find(p => p.id === bill.patientId) || {};

      this.notify("state_changed", {
        action: "generateBill",
        bill,
        appointment: appt,
        patient,
        cppTrigger: `double amount = patient->calculateBill(); // Polymorphic dispatch -> ₹${bill.finalAmount.toFixed(2)} [${bill.billId}]`,
        codeKey: "polymorphic-billing"
      });
      return { bill, appt, patient };
    } else {
      const appt = this.appointments.find(a => a.id === appointmentId);
      if (!appt) throw new Error("C++ Exception: Appointment not found: " + appointmentId);
      if (appt.isBilled) {
        throw new Error(`Duplicate Billing Error: Appointment '${appointmentId}' is already billed.`);
      }
      const patient = this.patients.find(p => p.id === appt.patientId);
      if (!patient) throw new Error("Associated patient not found.");

      const breakdown = this.calculatePolymorphicBill(patient.category);
      const bId = `BILL-${500 + this.bills.length + 1}`;
      const nowStr = new Date().toISOString().replace("T", " ").substring(0, 16);

      appt.isBilled = true;
      appt.billId = bId;
      appt.billedAmount = breakdown.total;

      const newBill = {
        billId: bId,
        appointmentId,
        patientId: patient.id,
        patientName: patient.name,
        patientCategory: patient.category,
        consultationFee: breakdown.baseFee,
        adjustmentAmount: breakdown.adjustmentAmount,
        finalAmount: breakdown.total,
        timestamp: nowStr
      };

      this.bills.push(newBill);
      this.updateMetricsFromLocal();

      this.notify("state_changed", {
        action: "generateBill",
        bill: newBill,
        appointment: appt,
        patient,
        cppTrigger: `double amount = patient->calculateBill(); // Polymorphic dispatch -> ₹${breakdown.total.toFixed(2)} [${bId}]`,
        codeKey: "polymorphic-billing"
      });
      return { bill: newBill, appt, patient };
    }
  }

  // ==========================================================================
  // Reset Demo State
  // ==========================================================================
  async resetDemoData() {
    if (this.backendConnected) {
      await this.apiRequest("/reset", { method: "POST", body: {} });
      await this.syncFromBackend();
    } else {
      this.initDefaultFallbackState();
    }

    this.notify("state_changed", {
      action: "reset",
      cppTrigger: "HospitalSystem::initSampleData() // Reset authoritative state",
      codeKey: "hospital-system"
    });
  }
}

// Global Hospital State Instance
const hospitalState = new HospitalState();
