/* ==========================================================================
   CarePulse Hospital Simulation Views Controller
   Dashboard, Doctors, Patients, Appointments, Billing, Bill History & Roles
   ========================================================================== */

class SimulationViews {
  constructor() {
    this.container = document.getElementById("simulation-viewport");
    this.currentTab = "dashboard";

    // Filter states
    this.doctorSearch = "";
    this.doctorFilter = "all";

    this.patientSearch = "";
    this.patientFilter = "all";

    this.apptSearch = "";
    this.apptFilter = "all";
    this.apptDoctorFilter = "all";
    this.apptPatientFilter = "all";
    this.apptDateFilter = "";

    this.selectedBillingApptId = null;

    this.init();
  }

  init() {
    this.attachNavEvents();
    this.attachRoleEvents();
    this.renderStats();
    this.renderCurrentView();

    // Subscribe to state changes
    hospitalState.subscribe((event, payload) => {
      this.renderStats();
      this.renderCurrentView();
      if (payload && payload.cppTrigger) {
        this.updateExecutionPulse(payload.cppTrigger, payload.codeKey);
      }
    });
  }

  attachNavEvents() {
    document.querySelectorAll(".sim-nav-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const targetTab = tab.dataset.tab;
        this.switchTab(targetTab);
      });
    });
  }

  switchTab(tabName) {
    this.currentTab = tabName;
    document.querySelectorAll(".sim-nav-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.tab === tabName);
    });
    this.renderCurrentView();
  }

  attachRoleEvents() {
    document.querySelectorAll(".role-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        hospitalState.currentRole = btn.dataset.role;

        const roleLabels = {
          admin: "Admin / Receptionist (Full Operational Access)",
          doctor: "Doctor Portal (Physician Schedule & Availability)",
          patient: "Patient Portal (Consultation Records & Invoices)"
        };
        showToast(`Switched view to ${roleLabels[hospitalState.currentRole]}`, "info");
        this.renderCurrentView();
      });
    });
  }

  renderStats() {
    const metrics = hospitalState.getMetrics();
    const docEl = document.getElementById("stat-val-doctors");
    const patEl = document.getElementById("stat-val-patients");
    const apptEl = document.getElementById("stat-val-appts");
    const billEl = document.getElementById("stat-val-bills");

    if (docEl) docEl.textContent = metrics.totalDoctors;
    if (patEl) patEl.textContent = metrics.totalPatients;
    if (apptEl) apptEl.textContent = metrics.totalAppointments;
    if (billEl) {
      const revenue = Number(metrics.totalBilledRevenue) || 0;
      billEl.textContent = `₹${revenue.toLocaleString("en-IN")}`;
    }
  }

  updateExecutionPulse(triggerText, codeKey) {
    const pulseMsg = document.getElementById("live-execution-msg");
    const pulseLink = document.getElementById("live-execution-link");

    if (pulseMsg) {
      pulseMsg.textContent = triggerText;
    }
    if (pulseLink && codeKey) {
      pulseLink.style.display = "inline";
      pulseLink.onclick = () => {
        if (window.codeExplorer && typeof EXPLANATIONS_DB !== "undefined") {
          const exp = EXPLANATIONS_DB[codeKey];
          const line = exp ? exp.highlightLine : 1;
          window.codeExplorer.selectLine(line, codeKey, true);
        }
      };
    }
  }

  renderCurrentView() {
    if (!this.container) return;

    // Role-based views
    if (hospitalState.currentRole === "doctor") {
      this.renderDoctorRoleView();
      return;
    }

    if (hospitalState.currentRole === "patient") {
      this.renderPatientRoleView();
      return;
    }

    // Admin / Receptionist Views
    switch (this.currentTab) {
      case "dashboard":
        this.renderDashboardView();
        break;
      case "doctors":
        this.renderDoctorsView();
        break;
      case "patients":
        this.renderPatientsView();
        break;
      case "appointments":
        this.renderAppointmentsView();
        break;
      case "billing":
        this.renderBillingView();
        break;
      default:
        this.renderDashboardView();
    }
  }

  // ==========================================================================
  // VIEW 1: Dashboard Home Screen
  // ==========================================================================
  renderDashboardView() {
    const metrics = hospitalState.getMetrics();
    const isOnline = hospitalState.backendConnected;

    this.container.innerHTML = `
      <!-- Welcome Hero Card -->
      <div class="welcome-hero-card">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
          <div>
            <h2 class="welcome-title">CarePulse Hospital Management System</h2>
            <p class="welcome-desc">
              Complete interactive simulation integrating real-time C++ Object-Oriented Programming (Constructors, Inheritance, Polymorphism, Encapsulation, Exception Handling) with healthcare workflows.
            </p>
          </div>
          <button class="btn btn-guided-demo" id="dash-btn-start-demo" style="padding:8px 16px;">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
            </svg>
            Launch 10-Step Guided Demo
          </button>
        </div>

        <div class="benefits-grid" style="margin-top:14px;">
          <div class="benefit-item">
            <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <strong>Encapsulation:</strong> Private members with public accessors
          </div>
          <div class="benefit-item">
            <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <strong>Inheritance:</strong> Doctor & Patient inherit from Person
          </div>
          <div class="benefit-item">
            <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <strong>Polymorphism:</strong> virtual calculateBill() rates (₹500/₹450/₹800)
          </div>
          <div class="benefit-item">
            <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <strong>Exception Handling:</strong> Conflict & validation rejection
          </div>
        </div>
      </div>

      <!-- Backend Connection Status Banner -->
      <div style="background:${isOnline ? "rgba(16, 185, 129, 0.08)" : "rgba(239, 68, 68, 0.08)"}; border:1px solid ${isOnline ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.3)"}; border-radius:var(--radius-md); padding:10px 14px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${isOnline ? "#10b981" : "#ef4444"};"></span>
          <span style="font-size:0.8rem; font-weight:600; color:${isOnline ? "#065f46" : "#991b1b"};">
            ${isOnline ? "Authoritative C++ Backend Active (Port 5000)" : "Backend Server Offline — Click Reconnect"}
          </span>
          <span style="font-size:0.75rem; color:var(--text-muted);">
            ${isOnline ? `Authoritative OOP state serving ${metrics.totalDoctors} doctors, ${metrics.totalPatients} patients, ${metrics.totalAppointments} appointments.` : "Running with local cached fallback."}
          </span>
        </div>
        <button class="btn btn-outline btn-sm" id="btn-refresh-backend-status">
          ${isOnline ? "Sync C++ State" : "Reconnect Server"}
        </button>
      </div>

      <!-- Four Prominent Shortcut Action Cards -->
      <div class="action-cards-grid">
        <!-- 1. Manage Doctors -->
        <div class="action-card">
          <div>
            <div class="action-card-header">
              <div class="action-card-icon" style="background:#eff6ff; color:#2563eb;">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>
              </div>
              <h3 class="action-card-title">Doctor Management</h3>
            </div>
            <p class="action-card-desc">Oversee physician roster, availability switches, and department specializations.</p>
            <ul class="action-card-points">
              <li>Add and view registered doctors</li>
              <li>Toggle availability in real time</li>
              <li>Safe deletion check (no orphaned appointments)</li>
            </ul>
          </div>
          <button class="btn btn-outline btn-sm" id="btn-goto-doctors">Open Doctors &rarr;</button>
        </div>

        <!-- 2. Register Patients -->
        <div class="action-card">
          <div>
            <div class="action-card-header">
              <div class="action-card-icon" style="background:#f5f3ff; color:#7c3aed;">
                <svg viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>
              </div>
              <h3 class="action-card-title">Patient Management</h3>
            </div>
            <p class="action-card-desc">Enroll patients into General, Senior, or Emergency tiers with strict OOP validation.</p>
            <ul class="action-card-points">
              <li>General: standard rate (₹500)</li>
              <li>Senior: age &ge; 60 validation & 10% discount (₹450)</li>
              <li>Emergency: triage priority & surcharge (₹800)</li>
            </ul>
          </div>
          <button class="btn btn-outline btn-sm" id="btn-goto-patients">Open Patients &rarr;</button>
        </div>

        <!-- 3. Book Appointments -->
        <div class="action-card">
          <div>
            <div class="action-card-header">
              <div class="action-card-icon" style="background:#f0fdfa; color:#0d9488;">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
              </div>
              <h3 class="action-card-title">Appointment Scheduling</h3>
            </div>
            <p class="action-card-desc">Schedule patient visits with real-time slot conflict and doctor availability validation.</p>
            <ul class="action-card-points">
              <li>Doctor availability check</li>
              <li>Conflict prevention (no double bookings)</li>
              <li>Multi-criteria filtering by doctor & date</li>
            </ul>
          </div>
          <button class="btn btn-outline btn-sm" id="btn-goto-appointments">Open Appointments &rarr;</button>
        </div>

        <!-- 4. Generate Bills -->
        <div class="action-card">
          <div>
            <div class="action-card-header">
              <div class="action-card-icon" style="background:#fffbeb; color:#d97706;">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
              </div>
              <h3 class="action-card-title">Polymorphic Billing</h3>
            </div>
            <p class="action-card-desc">Generate itemized consultation invoices via polymorphic calculateBill() dispatch.</p>
            <ul class="action-card-points">
              <li>Itemized invoice generation</li>
              <li>Double-billing protection</li>
              <li>Comprehensive bill history table</li>
            </ul>
          </div>
          <button class="btn btn-outline btn-sm" id="btn-goto-billing">Open Billing &rarr;</button>
        </div>
      </div>

      <!-- Instructional Banner -->
      <div class="instructional-banner">
        <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
        <span>Click any line of C++ code in the left panel to inspect the actual OOP implementation and see its real-time reflection in this simulation.</span>
      </div>
    `;

    document.getElementById("dash-btn-start-demo")?.addEventListener("click", () => {
      if (window.guidedDemo) window.guidedDemo.start();
    });

    document.getElementById("btn-refresh-backend-status")?.addEventListener("click", async () => {
      showToast("Syncing with C++ Backend...", "info");
      await hospitalState.checkBackendStatus();
      await hospitalState.syncFromBackend();
      showToast(hospitalState.backendConnected ? "Synced with C++ Server!" : "C++ Server Offline", hospitalState.backendConnected ? "success" : "error");
    });

    document.getElementById("btn-goto-doctors")?.addEventListener("click", () => this.switchTab("doctors"));
    document.getElementById("btn-goto-patients")?.addEventListener("click", () => this.switchTab("patients"));
    document.getElementById("btn-goto-appointments")?.addEventListener("click", () => this.switchTab("appointments"));
    document.getElementById("btn-goto-billing")?.addEventListener("click", () => this.switchTab("billing"));
  }

  // ==========================================================================
  // VIEW 2: Doctors Screen
  // ==========================================================================
  renderDoctorsView() {
    let filtered = hospitalState.doctors.filter(d => {
      const matchSearch = d.name.toLowerCase().includes(this.doctorSearch.toLowerCase()) ||
                          d.specialization.toLowerCase().includes(this.doctorSearch.toLowerCase()) ||
                          d.id.toLowerCase().includes(this.doctorSearch.toLowerCase());
      if (this.doctorFilter === "available") return matchSearch && d.isAvailable;
      if (this.doctorFilter === "unavailable") return matchSearch && !d.isAvailable;
      return matchSearch;
    });

    this.container.innerHTML = `
      <div class="table-controls-bar">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <input type="text" class="table-search-input" id="doctor-search-input" placeholder="Search doctor, ID or specialty..." value="${this.doctorSearch}">
          <select class="form-control" id="doctor-status-filter" style="width:130px; padding:6px 10px; font-size:0.78rem;">
            <option value="all" ${this.doctorFilter === "all" ? "selected" : ""}>All Availability</option>
            <option value="available" ${this.doctorFilter === "available" ? "selected" : ""}>Available</option>
            <option value="unavailable" ${this.doctorFilter === "unavailable" ? "selected" : ""}>Unavailable</option>
          </select>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-open-add-doctor">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/></svg>
          Add Doctor
        </button>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Full Name</th>
              <th>Age</th>
              <th>Specialization</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `
              <tr>
                <td colspan="6" class="empty-table-state">
                  <svg class="empty-table-icon" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>
                  <p>No doctor records matching your search query.</p>
                </td>
              </tr>
            ` : filtered.map(d => `
              <tr>
                <td><strong>${d.id}</strong></td>
                <td>${d.name}</td>
                <td>${d.age || 40} yrs</td>
                <td>${d.specialization}</td>
                <td>
                  <span class="badge ${d.isAvailable ? "badge-available" : "badge-unavailable"}">
                    ${d.isAvailable ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:6px;">
                    <button class="btn btn-outline btn-sm btn-toggle-avail" data-doc-id="${d.id}">
                      ${d.isAvailable ? "Set Unavailable" : "Set Available"}
                    </button>
                    <button class="btn btn-outline btn-sm btn-remove-doc" data-doc-id="${d.id}" style="color:var(--red-600);">
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("doctor-search-input")?.addEventListener("input", (e) => {
      this.doctorSearch = e.target.value;
      this.renderDoctorsView();
    });

    document.getElementById("doctor-status-filter")?.addEventListener("change", (e) => {
      this.doctorFilter = e.target.value;
      this.renderDoctorsView();
    });

    document.getElementById("btn-open-add-doctor")?.addEventListener("click", () => {
      openModal("modal-add-doctor");
    });

    document.querySelectorAll(".btn-toggle-avail").forEach(btn => {
      btn.addEventListener("click", async () => {
        const docId = btn.dataset.docId;
        try {
          btn.disabled = true;
          const status = await hospitalState.toggleDoctorAvailability(docId);
          showToast(`Doctor ${docId} availability set to ${status ? "Available" : "Unavailable"}`, "success");
        } catch (err) {
          showToast(err.message, "error");
        } finally {
          btn.disabled = false;
        }
      });
    });

    document.querySelectorAll(".btn-remove-doc").forEach(btn => {
      btn.addEventListener("click", async () => {
        const docId = btn.dataset.docId;
        if (confirm(`Are you sure you want to remove Doctor ${docId}?`)) {
          try {
            btn.disabled = true;
            await hospitalState.removeDoctor(docId);
            showToast(`Doctor ${docId} successfully removed.`, "success");
          } catch (err) {
            showToast(err.message, "error");
          } finally {
            btn.disabled = false;
          }
        }
      });
    });
  }

  // ==========================================================================
  // VIEW 3: Patients Screen
  // ==========================================================================
  renderPatientsView() {
    let filtered = hospitalState.patients.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(this.patientSearch.toLowerCase()) ||
                          p.id.toLowerCase().includes(this.patientSearch.toLowerCase());
      if (this.patientFilter !== "all") return matchSearch && p.category.toLowerCase() === this.patientFilter.toLowerCase();
      return matchSearch;
    });

    this.container.innerHTML = `
      <div class="table-controls-bar">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <input type="text" class="table-search-input" id="patient-search-input" placeholder="Search patient ID or name..." value="${this.patientSearch}">
          <select class="form-control" id="patient-cat-filter" style="width:140px; padding:6px 10px; font-size:0.78rem;">
            <option value="all" ${this.patientFilter === "all" ? "selected" : ""}>All Categories</option>
            <option value="General" ${this.patientFilter === "General" ? "selected" : ""}>General</option>
            <option value="Senior" ${this.patientFilter === "Senior" ? "selected" : ""}>Senior (Age 60+)</option>
            <option value="Emergency" ${this.patientFilter === "Emergency" ? "selected" : ""}>Emergency</option>
          </select>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-open-register-patient">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/></svg>
          Register Patient
        </button>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Full Name</th>
              <th>Age</th>
              <th>OOP Hierarchy Category</th>
              <th>Academic Consultation Fee</th>
              <th>Billing Rule</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `
              <tr>
                <td colspan="6" class="empty-table-state">
                  <p>No patient records matching your filter criteria.</p>
                </td>
              </tr>
            ` : filtered.map(p => {
              const breakdown = hospitalState.calculatePolymorphicBill(p.category);
              const badgeClass = p.category === "Senior" ? "badge-senior" : (p.category === "Emergency" ? "badge-emergency" : "badge-general");
              return `
                <tr>
                  <td><strong>${p.id}</strong></td>
                  <td>${p.name}</td>
                  <td>${p.age} yrs</td>
                  <td>
                    <span class="badge ${badgeClass}">${p.category} Patient</span>
                  </td>
                  <td><strong>₹${breakdown.total.toFixed(2)}</strong></td>
                  <td style="font-size:0.74rem; color:var(--text-muted);">${breakdown.adjustmentLabel}</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("patient-search-input")?.addEventListener("input", (e) => {
      this.patientSearch = e.target.value;
      this.renderPatientsView();
    });

    document.getElementById("patient-cat-filter")?.addEventListener("change", (e) => {
      this.patientFilter = e.target.value;
      this.renderPatientsView();
    });

    document.getElementById("btn-open-register-patient")?.addEventListener("click", () => {
      openModal("modal-register-patient");
    });
  }

  // ==========================================================================
  // VIEW 4: Appointments Screen with Multi-Criteria Filters
  // ==========================================================================
  renderAppointmentsView() {
    let filtered = hospitalState.appointments.filter(a => {
      const p = hospitalState.patients.find(x => x.id === a.patientId);
      const d = hospitalState.doctors.find(x => x.id === a.doctorId);
      const str = `${a.id} ${p ? p.name : ""} ${d ? d.name : ""} ${a.date} ${a.timeSlot}`.toLowerCase();
      const matchSearch = str.includes(this.apptSearch.toLowerCase());

      if (this.apptFilter === "billed" && !a.isBilled) return false;
      if (this.apptFilter === "unbilled" && a.isBilled) return false;
      if (this.apptDoctorFilter !== "all" && a.doctorId !== this.apptDoctorFilter) return false;
      if (this.apptPatientFilter !== "all" && a.patientId !== this.apptPatientFilter) return false;
      if (this.apptDateFilter && a.date !== this.apptDateFilter) return false;

      return matchSearch;
    });

    this.container.innerHTML = `
      <div class="table-controls-bar">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <input type="text" class="table-search-input" id="appt-search-input" placeholder="Search appointments..." value="${this.apptSearch}">
          
          <!-- Filter by Status -->
          <select class="form-control" id="appt-status-filter" style="width:110px; padding:6px 8px; font-size:0.78rem;">
            <option value="all" ${this.apptFilter === "all" ? "selected" : ""}>All Status</option>
            <option value="unbilled" ${this.apptFilter === "unbilled" ? "selected" : ""}>Unbilled</option>
            <option value="billed" ${this.apptFilter === "billed" ? "selected" : ""}>Billed</option>
          </select>

          <!-- Filter by Doctor -->
          <select class="form-control" id="appt-doctor-filter" style="width:140px; padding:6px 8px; font-size:0.78rem;">
            <option value="all" ${this.apptDoctorFilter === "all" ? "selected" : ""}>All Doctors</option>
            ${hospitalState.doctors.map(d => `
              <option value="${d.id}" ${this.apptDoctorFilter === d.id ? "selected" : ""}>${d.name}</option>
            `).join("")}
          </select>

          <!-- Filter by Patient -->
          <select class="form-control" id="appt-patient-filter" style="width:140px; padding:6px 8px; font-size:0.78rem;">
            <option value="all" ${this.apptPatientFilter === "all" ? "selected" : ""}>All Patients</option>
            ${hospitalState.patients.map(p => `
              <option value="${p.id}" ${this.apptPatientFilter === p.id ? "selected" : ""}>${p.name}</option>
            `).join("")}
          </select>

          <!-- Filter by Date -->
          <input type="date" class="form-control" id="appt-date-filter" value="${this.apptDateFilter}" style="width:130px; padding:4px 8px; font-size:0.78rem;">

          ${(this.apptSearch || this.apptFilter !== "all" || this.apptDoctorFilter !== "all" || this.apptPatientFilter !== "all" || this.apptDateFilter) ? `
            <button class="btn btn-outline btn-sm" id="btn-clear-appt-filters" style="font-size:0.74rem;">Clear Filters</button>
          ` : ""}
        </div>

        <button class="btn btn-primary btn-sm" id="btn-open-book-appt">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
          Book Appointment
        </button>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Appt ID</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `
              <tr>
                <td colspan="6" class="empty-table-state">
                  <p>No appointments match the selected filters.</p>
                </td>
              </tr>
            ` : filtered.map(a => {
              const p = hospitalState.patients.find(x => x.id === a.patientId);
              const d = hospitalState.doctors.find(x => x.id === a.doctorId);
              return `
                <tr>
                  <td><strong>${a.id}</strong></td>
                  <td>${p ? `${p.name} (${p.category})` : a.patientId}</td>
                  <td>${d ? `${d.name} (${d.specialization})` : a.doctorId}</td>
                  <td>${a.date} | ${a.timeSlot}</td>
                  <td>
                    <span class="badge ${a.isBilled ? "badge-billed" : "badge-unbilled"}">
                      ${a.isBilled ? `Billed (₹${Number(a.billedAmount).toFixed(2)})` : "Unbilled"}
                    </span>
                  </td>
                  <td>
                    ${!a.isBilled ? `
                      <button class="btn btn-outline btn-sm btn-quick-bill" data-appt-id="${a.id}">
                        Generate Bill
                      </button>
                    ` : `
                      <button class="btn btn-outline btn-sm btn-view-receipt" data-appt-id="${a.id}">
                        Receipt
                      </button>
                    `}
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("appt-search-input")?.addEventListener("input", (e) => {
      this.apptSearch = e.target.value;
      this.renderAppointmentsView();
    });

    document.getElementById("appt-status-filter")?.addEventListener("change", (e) => {
      this.apptFilter = e.target.value;
      this.renderAppointmentsView();
    });

    document.getElementById("appt-doctor-filter")?.addEventListener("change", (e) => {
      this.apptDoctorFilter = e.target.value;
      this.renderAppointmentsView();
    });

    document.getElementById("appt-patient-filter")?.addEventListener("change", (e) => {
      this.apptPatientFilter = e.target.value;
      this.renderAppointmentsView();
    });

    document.getElementById("appt-date-filter")?.addEventListener("change", (e) => {
      this.apptDateFilter = e.target.value;
      this.renderAppointmentsView();
    });

    document.getElementById("btn-clear-appt-filters")?.addEventListener("click", () => {
      this.apptSearch = "";
      this.apptFilter = "all";
      this.apptDoctorFilter = "all";
      this.apptPatientFilter = "all";
      this.apptDateFilter = "";
      this.renderAppointmentsView();
    });

    document.getElementById("btn-open-book-appt")?.addEventListener("click", () => {
      openModal("modal-book-appointment");
    });

    document.querySelectorAll(".btn-quick-bill").forEach(btn => {
      btn.addEventListener("click", () => {
        this.selectedBillingApptId = btn.dataset.apptId;
        this.switchTab("billing");
      });
    });

    document.querySelectorAll(".btn-view-receipt").forEach(btn => {
      btn.addEventListener("click", () => {
        openReceiptModal(btn.dataset.apptId);
      });
    });
  }

  // ==========================================================================
  // VIEW 5: Billing & Comprehensive Bill History
  // ==========================================================================
  renderBillingView() {
    const unbilledAppts = hospitalState.appointments.filter(a => !a.isBilled);

    if (!this.selectedBillingApptId && unbilledAppts.length > 0) {
      this.selectedBillingApptId = unbilledAppts[0].id;
    }

    const currentAppt = hospitalState.appointments.find(a => a.id === this.selectedBillingApptId);
    let currentPatient = null;
    let billCalculation = null;

    if (currentAppt) {
      currentPatient = hospitalState.patients.find(p => p.id === currentAppt.patientId);
      if (currentPatient) {
        billCalculation = hospitalState.calculatePolymorphicBill(currentPatient.category);
      }
    }

    const issuedBills = hospitalState.bills;

    this.container.innerHTML = `
      <div class="billing-layout">
        <!-- Left: Appointment Selector -->
        <div class="bill-selection-box">
          <h3 style="font-size:0.95rem; font-weight:700; color:var(--text-main);">Select Unbilled Consultation</h3>
          <p style="font-size:0.75rem; color:var(--text-muted);">
            Choose from pending appointments to invoke C++ polymorphic bill calculation.
          </p>

          <div class="form-group">
            <label class="form-label">Pending Appointments for Invoicing</label>
            <select class="form-control" id="billing-appt-select">
              ${unbilledAppts.length === 0 ? `<option value="">No unbilled appointments pending</option>` : ""}
              ${unbilledAppts.map(a => {
                const p = hospitalState.patients.find(x => x.id === a.patientId);
                const d = hospitalState.doctors.find(x => x.id === a.doctorId);
                return `
                  <option value="${a.id}" ${a.id === this.selectedBillingApptId ? "selected" : ""}>
                    ${a.id} — ${p ? p.name : a.patientId} (${p ? p.category : ""}) w/ ${d ? d.name : a.doctorId}
                  </option>
                `;
              }).join("")}
            </select>
          </div>

          ${currentPatient ? `
            <div style="background:var(--slate-50); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:0.78rem;">
              <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span style="color:var(--text-muted);">Patient Category:</span>
                <strong>${currentPatient.category} Tier</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span style="color:var(--text-muted);">Patient Age:</span>
                <span>${currentPatient.age} years old</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--text-muted);">Assigned Doctor:</span>
                <span>${currentAppt ? (hospitalState.doctors.find(d => d.id === currentAppt.doctorId)?.name || currentAppt.doctorId) : ""}</span>
              </div>
            </div>
          ` : ""}

          <div class="academic-rate-notice">
            <strong>*Academic Pricing Rules (Enforced by C++ Polymorphism):</strong><br>
            • General Patient: ₹500 standard consultation fee.<br>
            • Senior Patient (60+ yrs): 10% discount concession, final ₹450.<br>
            • Emergency Patient: ₹500 fee + ₹300 urgent triage surcharge, final ₹800.
          </div>
        </div>

        <!-- Right: Itemized Invoice Preview -->
        <div class="invoice-preview-card">
          <div class="invoice-header">
            <div>
              <h3 class="invoice-title">Consultation Invoice Preview</h3>
              <span style="font-size:0.72rem; color:var(--text-muted);">Authoritative C++ Billing Engine</span>
            </div>
            <span class="badge ${currentAppt && currentAppt.isBilled ? "badge-billed" : "badge-unbilled"}">
              ${currentAppt && currentAppt.isBilled ? "Paid & Billed" : "Pending Bill Generation"}
            </span>
          </div>

          ${billCalculation && currentAppt && !currentAppt.isBilled ? `
            <div class="invoice-line-items">
              <div class="invoice-line">
                <span>Standard Consultation Charge</span>
                <span>₹${billCalculation.baseFee.toFixed(2)}</span>
              </div>
              <div class="invoice-line" style="color:${billCalculation.adjustmentAmount < 0 ? "var(--teal-600)" : (billCalculation.adjustmentAmount > 0 ? "var(--red-600)" : "inherit")};">
                <span>${billCalculation.adjustmentLabel}</span>
                <span>${billCalculation.adjustmentAmount < 0 ? `-₹${Math.abs(billCalculation.adjustmentAmount).toFixed(2)}` : (billCalculation.adjustmentAmount > 0 ? `+₹${billCalculation.adjustmentAmount.toFixed(2)}` : "₹0.00")}</span>
              </div>
              <div class="invoice-total-line">
                <span>Final Amount (C++ calculateBill)</span>
                <span>₹${billCalculation.total.toFixed(2)}</span>
              </div>
            </div>

            <div style="margin-top:auto; display:flex; flex-direction:column; gap:8px;">
              <button class="btn btn-primary" id="btn-execute-generate-bill">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Confirm &amp; Generate Bill in C++
              </button>
            </div>
          ` : `
            <div style="padding:40px 10px; text-align:center; color:var(--text-muted); font-size:0.8rem;">
              No unbilled appointment selected. All consultations are up to date!
            </div>
          `}
        </div>
      </div>

      <!-- Dedicated Bill History Table Section -->
      <div style="margin-top:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <div>
            <h3 style="font-size:0.95rem; font-weight:700; color:var(--text-main);">Issued Bill History (${issuedBills.length})</h3>
            <p style="font-size:0.75rem; color:var(--text-muted);">Authoritative billing ledger stored in C++ backend state.</p>
          </div>
        </div>

        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Bill ID</th>
                <th>Appt ID</th>
                <th>Patient Name</th>
                <th>Category</th>
                <th>Base Fee</th>
                <th>Adjustment</th>
                <th>Final Total</th>
                <th>Timestamp</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              ${issuedBills.length === 0 ? `
                <tr><td colspan="9" class="empty-table-state"><p>No bills generated yet.</p></td></tr>
              ` : issuedBills.map(b => {
                const adj = Number(b.adjustmentAmount) || 0;
                const fee = Number(b.consultationFee) || 500;
                const total = Number(b.finalAmount) || 500;
                return `
                  <tr>
                    <td><strong>${b.billId}</strong></td>
                    <td>${b.appointmentId}</td>
                    <td>${b.patientName}</td>
                    <td><span class="badge ${b.patientCategory === "Senior" ? "badge-senior" : (b.patientCategory === "Emergency" ? "badge-emergency" : "badge-general")}">${b.patientCategory}</span></td>
                    <td>₹${fee.toFixed(2)}</td>
                    <td style="color:${adj < 0 ? "var(--teal-600)" : (adj > 0 ? "var(--red-600)" : "inherit")};">
                      ${adj < 0 ? `-₹${Math.abs(adj).toFixed(2)}` : (adj > 0 ? `+₹${adj.toFixed(2)}` : "₹0.00")}
                    </td>
                    <td><strong style="color:var(--blue-600);">₹${total.toFixed(2)}</strong></td>
                    <td style="font-size:0.75rem; color:var(--text-muted);">${b.timestamp || "Recent"}</td>
                    <td>
                      <button class="btn btn-outline btn-sm btn-view-history-receipt" data-bill-id="${b.billId}">
                        Receipt
                      </button>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    document.getElementById("billing-appt-select")?.addEventListener("change", (e) => {
      this.selectedBillingApptId = e.target.value;
      this.renderBillingView();
    });

    document.getElementById("btn-execute-generate-bill")?.addEventListener("click", async () => {
      if (!this.selectedBillingApptId) return;
      const btn = document.getElementById("btn-execute-generate-bill");
      try {
        if (btn) btn.disabled = true;
        const result = await hospitalState.generateBill(this.selectedBillingApptId);
        showToast(`Bill ${result.bill.billId} generated: ₹${result.bill.finalAmount.toFixed(2)} via C++ calculateBill()`, "success");
        openReceiptModal(result.bill.billId);
      } catch (err) {
        showToast(err.message, "error");
      } finally {
        if (btn) btn.disabled = false;
      }
    });

    document.querySelectorAll(".btn-view-history-receipt").forEach(btn => {
      btn.addEventListener("click", () => {
        openReceiptModal(btn.dataset.billId);
      });
    });
  }

  // ==========================================================================
  // VIEW 6: Dedicated Doctor Role View (Filtered)
  // ==========================================================================
  renderDoctorRoleView() {
    const currentDoc = hospitalState.doctors.find(d => d.id === hospitalState.activeDoctorFilter) || hospitalState.doctors[0];
    const docAppts = hospitalState.appointments.filter(a => a.doctorId === currentDoc.id);

    this.container.innerHTML = `
      <div style="background:var(--slate-50); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px 18px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <h3 style="font-size:0.95rem; font-weight:700;">Doctor Clinical Portal (${currentDoc.name})</h3>
          <p style="font-size:0.75rem; color:var(--text-muted);">${currentDoc.specialization} Department | ID: ${currentDoc.id}</p>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <select class="form-control" id="doctor-role-switch-doc" style="width:190px; padding:6px 8px; font-size:0.78rem;">
            ${hospitalState.doctors.map(d => `
              <option value="${d.id}" ${d.id === currentDoc.id ? "selected" : ""}>${d.name} (${d.specialization})</option>
            `).join("")}
          </select>
          <button class="btn btn-outline btn-sm btn-doc-toggle-avail" data-doc-id="${currentDoc.id}">
            ${currentDoc.isAvailable ? "Set Unavailable" : "Set Available"}
          </button>
        </div>
      </div>

      <h4 style="font-size:0.85rem; font-weight:700; margin-bottom:8px;">My Consultations Schedule (${docAppts.length})</h4>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Appt ID</th>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Billing Status</th>
            </tr>
          </thead>
          <tbody>
            ${docAppts.length === 0 ? `
              <tr><td colspan="5" class="empty-table-state"><p>No appointments scheduled for ${currentDoc.name}.</p></td></tr>
            ` : docAppts.map(a => {
              const p = hospitalState.patients.find(x => x.id === a.patientId);
              return `
                <tr>
                  <td><strong>${a.id}</strong></td>
                  <td>${p ? `${p.name} (${p.category})` : a.patientId}</td>
                  <td>${a.date}</td>
                  <td>${a.timeSlot}</td>
                  <td>
                    <span class="badge ${a.isBilled ? "badge-billed" : "badge-unbilled"}">
                      ${a.isBilled ? `Billed (₹${Number(a.billedAmount).toFixed(2)})` : "Unbilled"}
                    </span>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("doctor-role-switch-doc")?.addEventListener("change", (e) => {
      hospitalState.activeDoctorFilter = e.target.value;
      this.renderDoctorRoleView();
    });

    document.querySelector(".btn-doc-toggle-avail")?.addEventListener("click", async () => {
      try {
        await hospitalState.toggleDoctorAvailability(currentDoc.id);
        this.renderDoctorRoleView();
      } catch (err) {
        showToast(err.message, "error");
      }
    });
  }

  // ==========================================================================
  // VIEW 7: Dedicated Patient Role View (Filtered)
  // ==========================================================================
  renderPatientRoleView() {
    const currentPat = hospitalState.patients.find(p => p.id === hospitalState.activePatientFilter) || hospitalState.patients[0];
    const patAppts = hospitalState.appointments.filter(a => a.patientId === currentPat.id);
    const patBills = hospitalState.bills.filter(b => b.patientId === currentPat.id);

    this.container.innerHTML = `
      <div style="background:var(--slate-50); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px 18px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <h3 style="font-size:0.95rem; font-weight:700;">Patient Health Records (${currentPat.name})</h3>
          <p style="font-size:0.75rem; color:var(--text-muted);">${currentPat.category} Category | Age: ${currentPat.age} yrs | ID: ${currentPat.id}</p>
        </div>
        <div>
          <select class="form-control" id="patient-role-switch-pat" style="width:190px; padding:6px 8px; font-size:0.78rem;">
            ${hospitalState.patients.map(p => `
              <option value="${p.id}" ${p.id === currentPat.id ? "selected" : ""}>${p.name} (${p.category})</option>
            `).join("")}
          </select>
        </div>
      </div>

      <h4 style="font-size:0.85rem; font-weight:700; margin-bottom:8px;">My Consultations &amp; Billing History (${patAppts.length})</h4>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Appt ID</th>
              <th>Doctor</th>
              <th>Date & Time</th>
              <th>Bill Status</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            ${patAppts.length === 0 ? `
              <tr><td colspan="5" class="empty-table-state"><p>No consultation records for ${currentPat.name}.</p></td></tr>
            ` : patAppts.map(a => {
              const d = hospitalState.doctors.find(x => x.id === a.doctorId);
              return `
                <tr>
                  <td><strong>${a.id}</strong></td>
                  <td>${d ? `${d.name} (${d.specialization})` : a.doctorId}</td>
                  <td>${a.date} | ${a.timeSlot}</td>
                  <td>
                    <span class="badge ${a.isBilled ? "badge-billed" : "badge-unbilled"}">
                      ${a.isBilled ? `Billed (₹${Number(a.billedAmount).toFixed(2)})` : "Unbilled"}
                    </span>
                  </td>
                  <td>
                    ${a.isBilled ? `
                      <button class="btn btn-outline btn-sm" onclick="openReceiptModal('${a.id}')">View Official Receipt</button>
                    ` : `<span style="color:var(--text-muted); font-size:0.74rem;">Pending Invoicing</span>`}
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("patient-role-switch-pat")?.addEventListener("change", (e) => {
      hospitalState.activePatientFilter = e.target.value;
      this.renderPatientRoleView();
    });
  }
}
