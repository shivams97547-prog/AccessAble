/**
 * AccessAble — Report Form Logic
 * Uses localStorage for persistence.
 * ⚠️ Reports are stored locally on this device only — not shared with other users.
 */

import { LOCATIONS, FEATURES, saveLocalReport, getLocationById } from "./data.js";
import { showToast } from "./animations.js";

let currentStep = 1;
let selectedLocation = null;
let reportData = {
  locationId: null,
  features: {
    stepFree: null,
    doorway:  null,
    ramp:     null,
    lift:     null,
    toilet:   null,
    parking:  null,
    sensory:  null
  },
  notes: {},
  visitDate: "",
  reporterName: "",
  agreedToGuidelines: false,
  photo: null
};

export function initReportForm() {
  setupLocationSearch();
  setupFeatureToggles();
  setupNavigation();
  setupPhotoUpload();
  setupDateField();

  // Pre-fill location from URL param
  const params = new URLSearchParams(window.location.search);
  const locId = params.get("location");
  const targetFeature = params.get("feature");

  if (locId) {
    const loc = getLocationById(locId);
    if (loc) {
      selectLocation(loc);
      if (targetFeature) {
        // Automatically skip to step 2 if arriving from a specific feature click
        setTimeout(() => {
          goToStep(2);
          const featEl = document.querySelector(`[data-feature="${targetFeature}"]`);
          if (featEl) {
            featEl.scrollIntoView({ behavior: "smooth", block: "center" });
            featEl.parentElement?.classList.add("highlight-pulse");
          }
        }, 150);
      }
    }
  }
}

// ── Step navigation ────────────────────────────────────────────
function goToStep(step) {
  document.querySelectorAll(".report-step").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(`step${step}`);
  if (target) target.classList.add("active");

  // Update step indicator
  document.querySelectorAll(".step-indicator__step").forEach((el, idx) => {
    const n = idx + 1;
    el.classList.remove("active", "completed");
    if (n < step) el.classList.add("completed");
    else if (n === step) el.classList.add("active");
  });
  document.querySelectorAll(".step-indicator__line").forEach((el, idx) => {
    el.classList.toggle("completed", idx + 1 < step);
  });

  currentStep = step;
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (step === 3) populateReviewStep();
}

function setupNavigation() {
  // Step 1 → 2
  const toStep2 = document.getElementById("toStep2");
  if (toStep2) {
    toStep2.addEventListener("click", () => {
      if (!selectedLocation) {
        showToast("Please select a location before continuing.", "warning");
        const input = document.getElementById("locationSearch");
        if (input) { input.focus(); input.classList.add("touched"); }
        return;
      }
      goToStep(2);
    });
  }

  // Step 2 → 3
  const toStep3 = document.getElementById("toStep3");
  if (toStep3) {
    toStep3.addEventListener("click", () => {
      const dateField = document.getElementById("visitDate");
      if (dateField && !dateField.value) {
        showToast("Please enter the date of your visit.", "warning");
        dateField.focus(); dateField.classList.add("touched");
        return;
      }
      reportData.visitDate = dateField?.value || "";
      reportData.notes = collectNotes();
      goToStep(3);
    });
  }

  // Back buttons
  document.getElementById("backToStep1")?.addEventListener("click", () => goToStep(1));
  document.getElementById("backToStep2")?.addEventListener("click", () => goToStep(2));

  // Submit
  const submitBtn = document.getElementById("submitReport");
  if (submitBtn) {
    submitBtn.addEventListener("click", handleSubmit);
  }

  // Start over
  document.getElementById("startOver")?.addEventListener("click", () => {
    resetForm();
    goToStep(1);
  });
}

// ── Location search (Step 1) ───────────────────────────────────
function setupLocationSearch() {
  const input = document.getElementById("locationSearch");
  const dropdown = document.getElementById("locationDropdown");
  const selectedDisplay = document.getElementById("selectedLocation");
  if (!input) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { hideLocationDropdown(dropdown); return; }
    const matches = LOCATIONS.filter(l =>
      l.name.toLowerCase().includes(q) || l.address.toLowerCase().includes(q)
    ).slice(0, 6);
    renderLocationDropdown(matches, dropdown, input, selectedDisplay);
  });

  input.addEventListener("keydown", e => {
    if (e.key === "Escape") hideLocationDropdown(dropdown);
  });

  document.addEventListener("click", e => {
    if (!input.closest(".search-bar")?.contains(e.target)) hideLocationDropdown(dropdown);
  });

  // "Recently viewed" quick picks from demo data
  renderRecentPicks(selectedDisplay);
}

function renderLocationDropdown(locations, dropdown, input, selectedDisplay) {
  if (!dropdown) return;
  if (!locations.length) { hideLocationDropdown(dropdown); return; }

  dropdown.innerHTML = locations.map(loc => `
    <button class="search-dropdown__item" data-id="${loc.id}" type="button">
      <span class="search-dropdown__item-icon">
        <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-pin"/></svg>
      </span>
      <span>
        <div class="search-dropdown__item-name">${loc.name}</div>
        <div class="search-dropdown__item-meta">${loc.categoryLabel}</div>
      </span>
    </button>
  `).join("");

  dropdown.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const loc = getLocationById(btn.dataset.id);
      if (loc) {
        selectLocation(loc, input, selectedDisplay);
        hideLocationDropdown(dropdown);
      }
    });
  });

  dropdown.classList.add("open");
}

function renderRecentPicks(selectedDisplay) {
  const container = document.getElementById("recentPicks");
  if (!container) return;
  const picks = LOCATIONS.slice(0, 3);
  container.innerHTML = picks.map(loc => `
    <button class="filter-pill" data-id="${loc.id}" type="button" style="font-size:var(--text-xs)">
      <span aria-hidden="true">${loc.categoryEmoji}</span> ${loc.name}
    </button>
  `).join("");
  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const loc = getLocationById(btn.dataset.id);
      if (loc) selectLocation(loc);
    });
  });
}

function selectLocation(loc, input, selectedDisplay) {
  selectedLocation = loc;
  reportData.locationId = loc.id;

  if (input) input.value = loc.name;

  const display = selectedDisplay || document.getElementById("selectedLocation");
  if (display) {
    display.innerHTML = `
      <div class="card" style="border-color:var(--color-border-accent);margin-top:var(--space-4)">
        <div class="card-body" style="display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);flex-wrap:wrap">
          <div>
            <div style="font-weight:var(--font-semibold)">${loc.name}</div>
            <div style="font-size:var(--text-sm);color:var(--color-text-muted)">${loc.categoryLabel} · ${loc.address}</div>
          </div>
          <svg class="icon icon-lg" aria-hidden="true" style="color:var(--color-accent-mint)"><use href="#icon-check"/></svg>
        </div>
      </div>
    `;
    display.style.display = "block";
  }
}

function hideLocationDropdown(dropdown) {
  if (dropdown) dropdown.classList.remove("open");
}

// ── Feature toggles (Step 2) ───────────────────────────────────
function setupFeatureToggles() {
  const container = document.getElementById("featureReports");
  if (!container) return;

  container.innerHTML = FEATURES.map(feat => `
    <div class="feature-report-row" role="group" aria-labelledby="feat-label-${feat.id}">
      <div class="feature-report-row__header">
        <span class="feature-report-row__icon">
          <svg class="icon icon-md" aria-hidden="true"><use href="#icon-${feat.icon}"/></svg>
        </span>
        <div>
          <div id="feat-label-${feat.id}" style="font-weight:var(--font-semibold)">${feat.label}</div>
          <div style="font-size:var(--text-xs);color:var(--color-text-muted)">Select what you observed</div>
        </div>
      </div>
      <div class="toggle-group" role="radiogroup" aria-label="${feat.label} status" data-feature="${feat.id}">
        <button type="button" class="toggle-btn" data-value="available" aria-pressed="false">
          <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-check"/></svg> Available
        </button>
        <button type="button" class="toggle-btn" data-value="unavailable" aria-pressed="false">
          <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-x"/></svg> Not Available
        </button>
        <button type="button" class="toggle-btn" data-value="null" aria-pressed="false">Unsure</button>
      </div>
      <div class="form-group" style="margin-top:0">
        <label for="notes-${feat.id}" class="form-label">Notes (optional)</label>
        <textarea
          id="notes-${feat.id}"
          class="form-input form-textarea"
          data-feat="${feat.id}"
          placeholder="Describe what you observed, e.g. location of ramp, width of doorway..."
          rows="2"
          aria-label="Notes for ${feat.label}"
          style="min-height:60px"
        ></textarea>
      </div>
    </div>
  `).join("");

  // Wire up toggle buttons
  container.querySelectorAll(".toggle-group").forEach(group => {
    const featId = group.dataset.feature;
    group.querySelectorAll(".toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        group.querySelectorAll(".toggle-btn").forEach(b => {
          b.classList.remove("active-yes", "active-no", "active-unsure");
          b.setAttribute("aria-pressed", "false");
        });
        const val = btn.dataset.value;
        btn.setAttribute("aria-pressed", "true");
        if (val === "available") btn.classList.add("active-yes");
        else if (val === "unavailable") btn.classList.add("active-no");
        else btn.classList.add("active-unsure");
        reportData.features[featId] = val === "null" ? null : val;
      });
    });
  });
}

function collectNotes() {
  const notes = {};
  document.querySelectorAll("[data-feat]").forEach(el => {
    if (el.value.trim()) notes[el.dataset.feat] = el.value.trim();
  });
  return notes;
}

// ── Photo upload (Step 2) ──────────────────────────────────────
function setupPhotoUpload() {
  const input = document.getElementById("photoUpload");
  const preview = document.getElementById("photoPreview");
  if (!input || !preview) return;

  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Please select an image file.", "error");
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      reportData.photo = e.target.result;
      preview.innerHTML = `
        <div style="position:relative;display:inline-block">
          <img src="${e.target.result}" alt="Uploaded photo preview" style="max-width:100%;max-height:200px;border-radius:var(--radius-md);display:block">
          <button type="button" id="removePhoto" class="btn btn-sm btn-danger" style="position:absolute;top:8px;right:8px" aria-label="Remove photo">
            <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-x"/></svg>
          </button>
        </div>
      `;
      document.getElementById("removePhoto")?.addEventListener("click", () => {
        reportData.photo = null;
        input.value = "";
        preview.innerHTML = "";
      });
    };
    reader.readAsDataURL(file);
  });
}

// ── Date field ────────────────────────────────────────────────
function setupDateField() {
  const field = document.getElementById("visitDate");
  if (!field) return;
  // Default to today
  field.value = new Date().toISOString().split("T")[0];
  field.max = new Date().toISOString().split("T")[0];
}

// ── Review step (Step 3) ──────────────────────────────────────
function populateReviewStep() {
  const container = document.getElementById("reviewContent");
  if (!container) return;

  const loc = selectedLocation;
  const featureSummary = Object.entries(reportData.features)
    .filter(([, v]) => v !== null)
    .map(([k, v]) => {
      const feat = FEATURES.find(f => f.id === k);
      const label = v === "available" ? "✓ Available" : v === "unavailable" ? "✗ Not Available" : "? Unsure";
      return `<div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--color-border-subtle)">
        <span style="font-size:var(--text-sm)">${feat?.label || k}</span>
        <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:${v === "available" ? "var(--color-success)" : v === "unavailable" ? "var(--color-danger)" : "var(--color-amber)"}">${label}</span>
      </div>`;
    }).join("");

  const noFeaturesReported = Object.values(reportData.features).every(v => v === null);

  container.innerHTML = `
    <div class="card" style="margin-bottom:var(--space-4)">
      <div class="card-body">
        <div class="section-eyebrow" style="margin-bottom:var(--space-2)">Location</div>
        <div style="font-weight:var(--font-semibold)">${loc?.name || "—"}</div>
        <div style="font-size:var(--text-sm);color:var(--color-text-muted)">${loc?.address || ""}</div>
      </div>
    </div>
    <div class="card" style="margin-bottom:var(--space-4)">
      <div class="card-body">
        <div class="section-eyebrow" style="margin-bottom:var(--space-3)">Accessibility Details</div>
        ${noFeaturesReported
          ? `<p style="color:var(--color-text-muted);font-size:var(--text-sm)">No accessibility features reported. You can still submit with notes.</p>`
          : featureSummary
        }
      </div>
    </div>
    <div class="card" style="margin-bottom:var(--space-4)">
      <div class="card-body">
        <div class="section-eyebrow" style="margin-bottom:var(--space-2)">Visit Date</div>
        <div style="font-size:var(--text-sm)">${reportData.visitDate || "Not specified"}</div>
      </div>
    </div>
    ${reportData.photo ? `
      <div class="card" style="margin-bottom:var(--space-4)">
        <div class="card-body">
          <div class="section-eyebrow" style="margin-bottom:var(--space-2)">Photo</div>
          <img src="${reportData.photo}" alt="Submitted photo" style="max-width:100%;max-height:160px;border-radius:var(--radius-md)">
        </div>
      </div>
    ` : ""}
  `;
}

// ── Submit ────────────────────────────────────────────────────
function handleSubmit() {
  const nameField = document.getElementById("reporterName");
  const guidelinesCheckbox = document.getElementById("agreeGuidelines");

  if (!guidelinesCheckbox?.checked) {
    showToast("Please agree to the community guidelines before submitting.", "warning");
    guidelinesCheckbox?.focus();
    return;
  }

  reportData.reporterName = nameField?.value.trim() || "Anonymous contributor";
  reportData.agreedToGuidelines = true;

  const report = {
    id: "local-" + Date.now(),
    locationId: reportData.locationId,
    locationName: selectedLocation?.name || "Unknown",
    features: { ...reportData.features },
    notes: { ...reportData.notes },
    visitDate: reportData.visitDate,
    reporterName: "Anonymous contributor", // Always anonymise
    submittedAt: new Date().toISOString(),
    isLocal: true
  };

  saveLocalReport(report);

  // Show success state
  const form = document.getElementById("reportForm");
  const success = document.getElementById("successState");
  if (form) form.style.display = "none";
  if (success) {
    success.style.display = "block";
    // Set link to view location
    const viewLink = document.getElementById("viewLocationLink");
    if (viewLink && reportData.locationId) {
      viewLink.href = `location.html?id=${reportData.locationId}`;
    }
  }

  showToast("Report submitted successfully! Saved locally on this device.", "success");
}

// ── Reset ──────────────────────────────────────────────────────
function resetForm() {
  selectedLocation = null;
  reportData = {
    locationId: null,
    features: { stepFree: null, doorway: null, ramp: null, lift: null, toilet: null, parking: null, sensory: null },
    notes: {},
    visitDate: "",
    reporterName: "",
    agreedToGuidelines: false,
    photo: null
  };

  const form = document.getElementById("reportForm");
  const success = document.getElementById("successState");
  if (form) form.style.display = "block";
  if (success) success.style.display = "none";

  const locationSearch = document.getElementById("locationSearch");
  if (locationSearch) locationSearch.value = "";
  const selectedDisplay = document.getElementById("selectedLocation");
  if (selectedDisplay) { selectedDisplay.innerHTML = ""; selectedDisplay.style.display = "none"; }

  setupFeatureToggles();
  setupDateField();
}
