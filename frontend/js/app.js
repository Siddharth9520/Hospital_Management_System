/* ==========================================================================
   CarePulse Main Application Bootstrap & UI Handlers
   Integrated with Authoritative C++ Backend
   ========================================================================== */

// Global Toast System
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let iconSvg = "";
  if (type === "success") {
    iconSvg = `<svg width="16" height="16" viewBox="0 0 20 20" fill="#10b981"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`;
  } else if (type === "error") {
    iconSvg = `<svg width="16" height="16" viewBox="0 0 20 20" fill="#ef4444"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>`;
  } else {
    iconSvg = `<svg width="16" height="16" viewBox="0 0 20 20" fill="#3b82f6"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`;
  }

  toast.innerHTML = `
    <div>${iconSvg}</div>
    <div style="flex:1;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Modal System
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add("active");

  // Specific initialization for Book Appointment modal
  if (modalId === "modal-book-appointment") {
    populateBookAppointmentDropdowns();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

function populateBookAppointmentDropdowns() {
  const patientSelect = document.getElementById("book-patient-select");
  const doctorSelect = document.getElementById("book-doctor-select");

  if (patientSelect) {
    if (hospitalState.patients.length === 0) {
      patientSelect.innerHTML = `<option value="">No patients registered</option>`;
    } else {
      patientSelect.innerHTML = hospitalState.patients.map(p => `
        <option value="${p.id}">${p.name} (${p.category} Patient - ${p.id})</option>
      `).join("");
    }
  }

  if (doctorSelect) {
    if (hospitalState.doctors.length === 0) {
      doctorSelect.innerHTML = `<option value="">No doctors available</option>`;
    } else {
      doctorSelect.innerHTML = hospitalState.doctors.map(d => `
        <option value="${d.id}" ${!d.isAvailable ? 'disabled style="color:#94a3b8;"' : ""}>
          ${d.name} (${d.specialization}) ${d.isAvailable ? "— Available" : "— UNAVAILABLE"}
        </option>
      `).join("");
    }
  }
}

function openReceiptModal(apptIdOrBillId) {
  // Check in bills list first
  let bill = hospitalState.bills.find(b => b.billId === apptIdOrBillId || b.appointmentId === apptIdOrBillId);
  let appt = hospitalState.appointments.find(a => a.id === apptIdOrBillId || (bill && a.id === bill.appointmentId));
  
  let patientName = bill ? bill.patientName : "";
  let patientCategory = bill ? bill.patientCategory : "General";
  let doctorName = "Attending Physician";
  let fee = bill ? bill.consultationFee : 500.0;
  let adj = bill ? bill.adjustmentAmount : 0.0;
  let total = bill ? bill.finalAmount : 500.0;
  let timestamp = bill ? bill.timestamp : (appt ? appt.billedAt || "Recent" : "Recent");
  let billId = bill ? bill.billId : (appt && appt.billId ? appt.billId : `REC-${apptIdOrBillId}`);

  if (appt) {
    const doc = hospitalState.doctors.find(d => d.id === appt.doctorId);
    if (doc) doctorName = `${doc.name} (${doc.specialization})`;
    const pat = hospitalState.patients.find(p => p.id === appt.patientId);
    if (pat) {
      if (!patientName) patientName = pat.name;
      patientCategory = pat.category;
    }
  }

  const receiptContent = document.getElementById("receipt-modal-content");
  if (!receiptContent) return;

  let adjLabel = "Standard Rate (No Adjustment)";
  if (patientCategory === "Senior") adjLabel = "10% Senior Citizen Concession (-₹50.00)";
  else if (patientCategory === "Emergency") adjLabel = "Emergency Triage Surcharge (+₹300.00)";

  receiptContent.innerHTML = `
    <div style="text-align:center; border-bottom:1px solid var(--border-subtle); padding-bottom:12px; margin-bottom:14px;">
      <h3 style="font-family:var(--font-heading); font-size:1.1rem; color:var(--text-main);">CarePulse Hospital Consultation Receipt</h3>
      <p style="font-size:0.75rem; color:var(--text-muted);">
        Official Bill ID: <strong>${billId}</strong> | Appt ID: ${appt ? appt.id : "N/A"} | Date: ${timestamp}
      </p>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.8rem; margin-bottom:14px;">
      <div>
        <span style="color:var(--text-muted); display:block;">Patient Details:</span>
        <strong>${patientName || "Registered Patient"}</strong>
        <p style="font-size:0.74rem; color:var(--text-muted);">${patientCategory} Tier</p>
      </div>
      <div>
        <span style="color:var(--text-muted); display:block;">Attending Physician:</span>
        <strong>${doctorName}</strong>
      </div>
    </div>

    <div style="background:var(--slate-50); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:12px; margin-bottom:14px; font-size:0.8rem;">
      <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
        <span>Standard Consultation Fee</span>
        <span>₹${Number(fee).toFixed(2)}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:6px; color:${adj < 0 ? "var(--teal-600)" : (adj > 0 ? "var(--red-600)" : "inherit")};">
        <span>${adjLabel}</span>
        <span>${adj < 0 ? `-₹${Math.abs(adj).toFixed(2)}` : (adj > 0 ? `+₹${Number(adj).toFixed(2)}` : "₹0.00")}</span>
      </div>
      <div style="border-top:1px dashed var(--border-subtle); padding-top:8px; display:flex; justify-content:space-between; font-weight:700; font-size:0.95rem;">
        <span>Final Paid Amount</span>
        <span style="color:var(--blue-600);">₹${Number(total).toFixed(2)}</span>
      </div>
    </div>

    <div style="text-align:center; font-size:0.7rem; color:var(--text-muted);">
      Authoritative C++ OOP Record — Polymorphic Dispatch via virtual calculateBill()
    </div>
  `;

  openModal("modal-view-receipt");
}

// Main Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Global Component Instances
  window.codeExplorer = new CodeExplorer();
  window.explanationPanel = new ExplanationPanel();
  window.simulationViews = new SimulationViews();

  // Make 4 Statistic Cards Clickable
  document.getElementById("stat-doctors")?.addEventListener("click", () => {
    window.simulationViews?.switchTab("doctors");
  });
  document.getElementById("stat-patients")?.addEventListener("click", () => {
    window.simulationViews?.switchTab("patients");
  });
  document.getElementById("stat-appts")?.addEventListener("click", () => {
    window.simulationViews?.switchTab("appointments");
  });
  document.getElementById("stat-bills")?.addEventListener("click", () => {
    window.simulationViews?.switchTab("billing");
  });

  // Top Header Buttons
  document.getElementById("btn-start-guided-demo")?.addEventListener("click", () => {
    if (window.guidedDemo) {
      window.guidedDemo.start();
    }
  });

  document.getElementById("btn-reset-demo-data")?.addEventListener("click", () => {
    openModal("modal-reset-confirm");
  });

  document.getElementById("btn-theme-toggle")?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("carepulse_theme", nextTheme);
    showToast(`Switched to ${nextTheme} theme`, "info");
  });

  // Restore Theme
  const savedTheme = localStorage.getItem("carepulse_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Close modals on overlay or cancel clicks
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });

  document.querySelectorAll(".btn-cancel-modal, .modal-close").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal-overlay");
      if (modal) modal.classList.remove("active");
    });
  });

  // Form: Add Doctor Submission (Async with double-click prevention)
  document.getElementById("form-add-doctor")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector("button[type='submit']");
    if (submitBtn) submitBtn.disabled = true;

    const id = document.getElementById("add-doc-id").value;
    const name = document.getElementById("add-doc-name").value;
    const age = document.getElementById("add-doc-age").value;
    const specialization = document.getElementById("add-doc-spec").value;
    const isAvailable = document.getElementById("add-doc-avail").checked;

    try {
      await hospitalState.addDoctor({ id, name, age, specialization, isAvailable });
      closeModal("modal-add-doctor");
      e.target.reset();
      showToast(`Doctor ${name} successfully added to C++ system!`, "success");
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });

  // Form: Register Patient Submission (Async with double-click prevention)
  document.getElementById("form-register-patient")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector("button[type='submit']");
    if (submitBtn) submitBtn.disabled = true;

    const id = document.getElementById("reg-pat-id").value;
    const name = document.getElementById("reg-pat-name").value;
    const age = document.getElementById("reg-pat-age").value;
    const category = document.getElementById("reg-pat-category").value;

    try {
      await hospitalState.registerPatient({ id, name, age, category });
      closeModal("modal-register-patient");
      e.target.reset();
      showToast(`Registered ${category} Patient: ${name}`, "success");
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });

  // Form: Book Appointment Submission (Async with double-click prevention)
  document.getElementById("form-book-appt")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector("button[type='submit']");
    if (submitBtn) submitBtn.disabled = true;

    const patientId = document.getElementById("book-patient-select").value;
    const doctorId = document.getElementById("book-doctor-select").value;
    const date = document.getElementById("book-appt-date").value;
    const timeSlot = document.getElementById("book-appt-time").value;

    try {
      const appt = await hospitalState.bookAppointment({ patientId, doctorId, date, timeSlot });
      closeModal("modal-book-appointment");
      showToast(`Appointment ${appt.id} booked successfully for ${timeSlot} on ${date}!`, "success");
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });

  // Reset Demo Data Confirmation (Async)
  document.getElementById("btn-confirm-reset")?.addEventListener("click", async () => {
    try {
      await hospitalState.resetDemoData();
      closeModal("modal-reset-confirm");
      showToast("C++ Demo state successfully reset to initial baseline records.", "info");
    } catch (err) {
      showToast(err.message, "error");
    }
  });

  // Keyboard Shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(m => m.classList.remove("active"));
    }
    // Tabs 1-5 shortcuts when not typing in an input
    if (["input", "textarea", "select"].includes(document.activeElement.tagName.toLowerCase())) {
      return;
    }
    if (e.key === "1") window.simulationViews?.switchTab("dashboard");
    if (e.key === "2") window.simulationViews?.switchTab("doctors");
    if (e.key === "3") window.simulationViews?.switchTab("patients");
    if (e.key === "4") window.simulationViews?.switchTab("appointments");
    if (e.key === "5") window.simulationViews?.switchTab("billing");
    if (e.key === "?") openModal("modal-shortcuts");
  });
});
