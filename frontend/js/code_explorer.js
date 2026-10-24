/* ==========================================================================
   CarePulse C++ Code Explorer Controller
   Line-by-line syntax tree, collapsible sections & search engine
   ========================================================================== */

class CodeExplorer {
  constructor() {
    this.container = document.getElementById("code-sections-container");
    this.searchInput = document.getElementById("code-search-input");
    this.searchClearBtn = document.getElementById("code-search-clear");
    this.statsIndicator = document.getElementById("code-stats-indicator");
    this.activeLineNum = 21; // Default to Person constructor (line 21)
    this.searchQuery = "";
    this.init();
  }

  init() {
    this.renderSections();
    this.attachEventListeners();
    // Default select Person constructor
    this.selectLine(21, "person-constructor", false);
  }

  renderSections() {
    if (!this.container) return;
    this.container.innerHTML = "";

    CPP_SECTIONS.forEach(section => {
      const sectionGroup = document.createElement("div");
      sectionGroup.className = "code-section-group";
      sectionGroup.id = `sec-${section.id}`;
      sectionGroup.dataset.sectionId = section.id;

      // Section Header
      const header = document.createElement("div");
      header.className = "code-section-header";
      header.innerHTML = `
        <div class="section-header-left">
          <svg class="section-chevron" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
          </svg>
          <span class="section-title">${section.title}</span>
        </div>
        <div class="section-badge-group">
          <span class="section-oop-tag">${section.oopConcept}</span>
          <span class="section-lines-count">${section.lines.length} lines</span>
        </div>
      `;

      header.addEventListener("click", () => {
        sectionGroup.classList.toggle("collapsed");
      });

      // Lines Wrapper
      const linesWrapper = document.createElement("div");
      linesWrapper.className = "code-lines-wrapper";

      section.lines.forEach(line => {
        const lineEl = document.createElement("div");
        lineEl.className = "code-line";
        lineEl.id = `cpp-line-${line.num}`;
        lineEl.dataset.lineNum = line.num;
        lineEl.dataset.sectionId = section.id;
        lineEl.tabIndex = 0; // Accessible keyboard navigation

        // Syntax rendering
        let contentHtml = "";
        if (line.type === "cmt") {
          contentHtml = `<span class="cmt">${this.escapeHtml(line.text)}</span>`;
        } else if (line.tokens && line.tokens.length > 0) {
          contentHtml = line.tokens
            .map(tok => `<span class="${tok.t}">${this.escapeHtml(tok.s)}</span>`)
            .join("");
        } else {
          contentHtml = this.formatSyntax(line.text);
        }

        lineEl.innerHTML = `
          <div class="line-num">${line.num}</div>
          <div class="line-content">${contentHtml}</div>
        `;

        // Click line handler
        lineEl.addEventListener("click", () => {
          this.onLineClicked(line.num, section.id);
        });

        // Keyboard navigation (Enter / Space)
        lineEl.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.onLineClicked(line.num, section.id);
          }
        });

        linesWrapper.appendChild(lineEl);
      });

      sectionGroup.appendChild(header);
      sectionGroup.appendChild(linesWrapper);
      this.container.appendChild(sectionGroup);
    });
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

  formatSyntax(text) {
    if (!text) return "";
    let safe = this.escapeHtml(text);
    return `<span class="id">${safe}</span>`;
  }

  attachEventListeners() {
    // Search input
    if (this.searchInput) {
      this.searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.performSearch();
      });
    }

    // Search clear
    if (this.searchClearBtn) {
      this.searchClearBtn.addEventListener("click", () => {
        this.searchInput.value = "";
        this.searchQuery = "";
        this.performSearch();
        this.searchInput.focus();
      });
    }

    // Toolbar buttons
    const expandAllBtn = document.getElementById("btn-expand-all");
    const collapseAllBtn = document.getElementById("btn-collapse-all");
    const copyCodeBtn = document.getElementById("btn-copy-code");

    if (expandAllBtn) {
      expandAllBtn.addEventListener("click", () => {
        document.querySelectorAll(".code-section-group").forEach(sec => sec.classList.remove("collapsed"));
        showToast("Expanded all 7 C++ OOP class modules", "info");
      });
    }

    if (collapseAllBtn) {
      collapseAllBtn.addEventListener("click", () => {
        document.querySelectorAll(".code-section-group").forEach(sec => sec.classList.add("collapsed"));
        showToast("Collapsed all sections", "info");
      });
    }

    if (copyCodeBtn) {
      copyCodeBtn.addEventListener("click", () => {
        this.copyEntireCodebase();
      });
    }
  }

  performSearch() {
    const hasQuery = this.searchQuery.length > 0;
    if (this.searchClearBtn) {
      this.searchClearBtn.classList.toggle("visible", hasQuery);
    }

    let matchCount = 0;
    const allLines = document.querySelectorAll(".code-line");

    allLines.forEach(lineEl => {
      const lineText = lineEl.textContent.toLowerCase();
      lineEl.classList.remove("match-active");

      if (hasQuery && lineText.includes(this.searchQuery)) {
        lineEl.classList.add("match-active");
        matchCount++;
        // Auto expand parent section
        const parentSec = lineEl.closest(".code-section-group");
        if (parentSec) {
          parentSec.classList.remove("collapsed");
        }
      }
    });

    if (this.statsIndicator) {
      if (hasQuery) {
        this.statsIndicator.textContent = `${matchCount} match${matchCount === 1 ? "" : "es"} found`;
        this.statsIndicator.style.color = matchCount > 0 ? "#38bdf8" : "#f87171";
      } else {
        this.statsIndicator.textContent = "7 C++ Classes / 314 Lines";
        this.statsIndicator.style.color = "#94a3b8";
      }
    }
  }

  onLineClicked(lineNum, sectionId) {
    this.selectLine(lineNum, null, false);
  }

  selectLine(lineNum, specificKey = null, shouldScroll = true) {
    this.activeLineNum = lineNum;

    // Remove previous active classes
    document.querySelectorAll(".code-line.active").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".code-section-group.highlighted-section").forEach(el => el.classList.remove("highlighted-section"));

    const targetLineEl = document.getElementById(`cpp-line-${lineNum}`);
    if (targetLineEl) {
      targetLineEl.classList.add("active");
      const parentSec = targetLineEl.closest(".code-section-group");
      if (parentSec) {
        parentSec.classList.remove("collapsed");
        parentSec.classList.add("highlighted-section");
      }

      if (shouldScroll) {
        targetLineEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    // Determine appropriate explanation key
    let keyToUse = specificKey;
    if (!keyToUse) {
      keyToUse = this.findExplanationKeyForLine(lineNum);
    }

    if (window.explanationPanel) {
      window.explanationPanel.update(keyToUse, lineNum);
    }
  }

  findExplanationKeyForLine(lineNum) {
    if (lineNum >= 1 && lineNum <= 36) return "person-constructor";
    if (lineNum >= 37 && lineNum <= 59) return "doctor-class";
    if (lineNum >= 60 && lineNum <= 77) return "patient-abstract";
    if (lineNum >= 78 && lineNum <= 126) return "patient-senior";
    if (lineNum >= 127 && lineNum <= 160) return "appointment-slot";
    if (lineNum >= 161 && lineNum <= 253) return "hospital-conflict";
    if (lineNum >= 254 && lineNum <= 286) return "polymorphic-billing";
    return "person-constructor";
  }

  copyEntireCodebase() {
    let fullCode = "";
    CPP_SECTIONS.forEach(sec => {
      sec.lines.forEach(l => {
        fullCode += l.text + "\n";
      });
    });

    navigator.clipboard.writeText(fullCode).then(() => {
      showToast("C++ Hospital System source code copied to clipboard!", "success");
    }).catch(() => {
      showToast("Failed to copy code to clipboard", "error");
    });
  }
}
