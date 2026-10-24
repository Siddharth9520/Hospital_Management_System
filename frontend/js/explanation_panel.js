/* ==========================================================================
   CarePulse Code Explanation Panel Controller
   Stacked dynamic cards rendering plain English, OOP concepts & examples
   ========================================================================== */

class ExplanationPanel {
  constructor() {
    this.container = document.getElementById("explanation-content-area");
    this.currentData = null;
    this.init();
  }

  init() {
    this.update("person-constructor", 21);
  }

  update(key, lineNum = null) {
    const data = EXPLANATIONS_DB[key] || EXPLANATIONS_DB["person-constructor"];
    this.currentData = data;
    const effectiveLine = lineNum || data.highlightLine;

    if (!this.container) return;

    this.container.innerHTML = `
      <!-- 1. Selected Code Card -->
      <div class="exp-card exp-code-card">
        <div class="exp-card-header">
          <span class="exp-card-title">
            <svg viewBox="0 0 20 20"><path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/></svg>
            Selected C++ Source Excerpt
          </span>
          <span class="badge badge-unbilled">Line ${effectiveLine}</span>
        </div>
        <div class="code-snippet-box">
          <code>${this.escapeHtml(data.selectedCode)}</code>
        </div>
        <div class="code-snippet-meta">
          <span>Target Module: <strong>${data.sectionId}</strong></span>
          <button class="jump-sim-btn" id="btn-jump-sim" data-target="${data.simFeatureTarget}">
            <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            Jump to Simulation Feature
          </button>
        </div>
      </div>

      <!-- 2. What It Does Card -->
      <div class="exp-card">
        <div class="exp-card-header">
          <span class="exp-card-title">
            <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
            What it does
          </span>
        </div>
        <div class="exp-card-content">
          ${data.whatItDoes}
        </div>
      </div>

      <!-- 3. Why It Matters Card -->
      <div class="exp-card">
        <div class="exp-card-header">
          <span class="exp-card-title">
            <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
            Why it matters
          </span>
        </div>
        <div class="exp-card-content">
          ${data.whyItMatters}
        </div>
      </div>

      <!-- 4. OOP Concept Badge Card -->
      <div class="exp-card exp-concept-card">
        <div class="exp-card-header">
          <span class="exp-card-title">
            <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            OOP Concept
          </span>
          <span class="badge badge-concept">${data.oopConceptBadge}</span>
        </div>
        <div class="concept-badge-row">
          <div class="concept-pill">
            <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg>
            ${data.oopConcept}
          </div>
        </div>
        <p style="font-size:0.78rem; color:var(--text-muted); margin-top:4px;">
          Applied to maintain high cohesion and enforce clean object boundaries in healthcare workflows.
        </p>
      </div>

      <!-- 5. Where It Is Used Card -->
      <div class="exp-card exp-used-card">
        <div class="exp-card-header">
          <span class="exp-card-title">
            <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
            Where it is used in Hospital System
          </span>
        </div>
        <div class="usage-location-pill">
          ${data.simFeatureTarget.toUpperCase()} SYSTEM
        </div>
        <div class="exp-card-content">
          ${data.whereUsed}
        </div>
      </div>

      <!-- 6. Practical Example & Terminal Preview -->
      <div class="exp-card exp-example-card">
        <div class="exp-card-header">
          <span class="exp-card-title">
            <svg viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg>
            Practical Example & Simulated Output
          </span>
        </div>
        <div class="terminal-preview-box">
          <span class="terminal-badge">C++ Output</span>
          ${this.escapeHtml(data.practicalExample)}
        </div>
      </div>

      <!-- 7. Progressive Disclosure: Deep Dive Accordion -->
      <div class="deep-dive-accordion" id="deep-dive-accordion">
        <button class="deep-dive-trigger" id="deep-dive-trigger">
          <span>OOP Deep Dive & Viva Defense Notes</span>
          <svg class="deep-dive-chevron" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
        </button>
        <div class="deep-dive-content">
          <p>${data.deepDive}</p>
          <div class="viva-tip-box">
            <strong>College Viva Tip:</strong> Be prepared to explain why virtual destructors are mandatory when deleting derived objects through base class pointers (to avoid memory leaks).
          </div>
        </div>
      </div>
    `;

    // Attach Jump to Simulation click handler
    const jumpBtn = document.getElementById("btn-jump-sim");
    if (jumpBtn) {
      jumpBtn.addEventListener("click", () => {
        const target = jumpBtn.dataset.target;
        if (window.simulationViews) {
          window.simulationViews.switchTab(target);
          showToast(`Navigated to Hospital ${target.toUpperCase()} screen`, "info");
        }
      });
    }

    // Attach Accordion Toggle
    const accTrigger = document.getElementById("deep-dive-trigger");
    const accordion = document.getElementById("deep-dive-accordion");
    if (accTrigger && accordion) {
      accTrigger.addEventListener("click", () => {
        accordion.classList.toggle("expanded");
      });
    }
  }

  escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
