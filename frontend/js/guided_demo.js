/* ==========================================================================
   CarePulse Guided Demo & Interactive Tour Controller
   10-Step Deterministic Walkthrough for Faculty Presentation & Viva Defense
   ========================================================================== */

class GuidedDemo {
  constructor() {
    this.currentStep = 0;
    this.isActive = false;
    this.steps = [
      {
        stepNum: 1,
        title: "Step 1: Explore the Person Base Class",
        tab: "dashboard",
        codeKey: "person-constructor",
        lineNum: 36,
        description: "We begin at the foundation of the hospital hierarchy: the Person base class. Notice encapsulated protected fields (id, name, age) initialized via member initializer list, and the virtual destructor.",
        highlightTarget: "#panel-code-explorer"
      },
      {
        stepNum: 2,
        title: "Step 2: Inspect Doctor Class & Availability State",
        tab: "doctors",
        codeKey: "doctor-class",
        lineNum: 61,
        description: "Doctor derives from Person via Single Public Inheritance. It encapsulates a specialization and a private isAvailable boolean state that controls whether consultations can be booked.",
        highlightTarget: "#stat-doctors"
      },
      {
        stepNum: 3,
        title: "Step 3: Register a General Patient (Hierarchical Inheritance)",
        tab: "patients",
        codeKey: "patient-abstract",
        lineNum: 91,
        description: "Patient is an abstract base class with pure virtual functions getCategory() and calculateBill(). GeneralPatient provides the standard baseline consultation rate of ₹500.",
        highlightTarget: "#stat-patients"
      },
      {
        stepNum: 4,
        title: "Step 4: Register a Senior Patient (Age Restriction & Concession)",
        tab: "patients",
        codeKey: "patient-senior",
        lineNum: 120,
        description: "SeniorPatient enforces a strict business rule: the constructor throws std::invalid_argument if age < 60. Overridden calculateBill() applies an academic 10% discount concession, giving ₹450 total.",
        highlightTarget: ".table-container"
      },
      {
        stepNum: 5,
        title: "Step 5: Demonstrate Emergency Patient Surcharge",
        tab: "patients",
        codeKey: "polymorphic-billing",
        lineNum: 135,
        description: "EmergencyPatient overrides calculateBill() to charge ₹500 consultation plus an urgent triage surcharge of ₹300, evaluating to ₹800 polymorphically without manual type checks.",
        highlightTarget: ".table-container"
      },
      {
        stepNum: 6,
        title: "Step 6: Book an Appointment (Object Association)",
        tab: "appointments",
        codeKey: "appointment-slot",
        lineNum: 165,
        description: "Booking an appointment creates a relationship linking a Patient and a Doctor on a specific date and time slot, while verifying that the physician is currently marked as Available.",
        highlightTarget: "#stat-appts"
      },
      {
        stepNum: 7,
        title: "Step 7: Demonstrate Error Handling (Slot Conflict Collision)",
        tab: "appointments",
        codeKey: "hospital-conflict",
        lineNum: 425,
        description: "CarePulse asserts schedule integrity: if an appointment is booked for a physician at an already occupied date and time slot, the C++ backend throws a std::runtime_error (HTTP 409 Conflict).",
        highlightTarget: ".table-controls-bar"
      },
      {
        stepNum: 8,
        title: "Step 8: Generate a Bill via calculateBill() Dispatch",
        tab: "billing",
        codeKey: "polymorphic-billing",
        lineNum: 454,
        description: "In the Billing engine, the system retrieves the target patient pointer and calls patient->calculateBill(). Dynamic dispatch selects the exact subclass method and produces an immutable Bill record.",
        highlightTarget: ".invoice-preview-card"
      },
      {
        stepNum: 9,
        title: "Step 9: Explain Polymorphism Rate Comparison",
        tab: "billing",
        codeKey: "polymorphic-billing",
        lineNum: 460,
        description: "Compare the three rates side-by-side: General (₹500), Senior (₹450 with 10% discount), and Emergency (₹800 with ₹300 surcharge). All derived classes share the uniform Patient* base interface.",
        highlightTarget: ".billing-layout"
      },
      {
        stepNum: 10,
        title: "Step 10: Complete OOP System Summary & Defense",
        tab: "dashboard",
        codeKey: "person-constructor",
        lineNum: 21,
        description: "You have verified all 5 core OOP concepts: Encapsulation, Single & Hierarchical Inheritance, Polymorphic Virtual Dispatch, and Exception Handling. The system is verified for viva presentation!",
        highlightTarget: ".welcome-hero-card"
      }
    ];
  }

  start() {
    this.isActive = true;
    this.currentStep = 0;
    showToast("Starting 10-Step CarePulse Guided Demonstration", "info");
    this.renderBanner();
    this.goToStep(0);
  }

  stop() {
    this.isActive = false;
    const banner = document.getElementById("guided-demo-banner-container");
    if (banner) banner.innerHTML = "";
    showToast("Exited Guided Demo mode.", "info");
  }

  goToStep(index) {
    if (index < 0 || index >= this.steps.length) {
      this.stop();
      return;
    }
    this.currentStep = index;
    const step = this.steps[index];

    // 1. Switch simulation tab
    if (window.simulationViews) {
      window.simulationViews.switchTab(step.tab);
    }

    // 2. Highlight C++ code line & update explanation
    if (window.codeExplorer && typeof EXPLANATIONS_DB !== "undefined") {
      window.codeExplorer.selectLine(step.lineNum, step.codeKey, true);
    }

    // 3. Update the floating tour banner
    this.renderBanner();
  }

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.goToStep(this.currentStep + 1);
    } else {
      showToast("Guided Demonstration completed! All 10 steps verified.", "success");
      this.stop();
    }
  }

  prev() {
    if (this.currentStep > 0) {
      this.goToStep(this.currentStep - 1);
    }
  }

  renderBanner() {
    const bannerContainer = document.getElementById("guided-demo-banner-container");
    if (!bannerContainer || !this.isActive) return;

    const step = this.steps[this.currentStep];

    bannerContainer.innerHTML = `
      <div class="guided-demo-banner" style="background:#1e293b; border:1px solid #38bdf8; border-radius:var(--radius-md); padding:12px 16px; margin-top:8px; display:flex; justify-content:space-between; align-items:center; gap:14px; box-shadow:0 4px 14px rgba(0,0,0,0.25);">
        <div style="display:flex; align-items:flex-start; gap:10px;">
          <span class="demo-step-badge" style="background:#0284c7; color:#ffffff; font-size:0.72rem; font-weight:700; padding:4px 8px; border-radius:var(--radius-full); white-space:nowrap;">
            Step ${step.stepNum} of ${this.steps.length}
          </span>
          <div>
            <strong style="font-size:0.86rem; color:#f8fafc;">${step.title}</strong>
            <p style="font-size:0.75rem; color:#cbd5e1; margin-top:2px; line-height:1.4;">${step.description}</p>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          ${this.currentStep > 0 ? `<button class="btn btn-secondary btn-sm" id="demo-btn-prev">Previous</button>` : ""}
          <button class="btn btn-primary btn-sm" id="demo-btn-next">
            ${this.currentStep === this.steps.length - 1 ? "Finish Demo" : "Next Step &rarr;"}
          </button>
          <button class="btn btn-icon btn-sm" id="demo-btn-close" title="Exit Demo" style="color:#cbd5e1; background:transparent;">✕</button>
        </div>
      </div>
    `;

    document.getElementById("demo-btn-next")?.addEventListener("click", () => this.next());
    document.getElementById("demo-btn-prev")?.addEventListener("click", () => this.prev());
    document.getElementById("demo-btn-close")?.addEventListener("click", () => this.stop());
  }
}

// Global Guided Demo instance
const guidedDemo = new GuidedDemo();
window.guidedDemo = guidedDemo;
