/**
 * AccessAble — Location Profile Page Logic
 * Features "The Accessibility Breakdown" signature interactive component.
 */

import {
  LOCATIONS, FEATURES, getLocationById, getRelativeTime,
  getFeatureCardStatusClass, getVerificationBadgeClass, getVerificationLabel,
  getLocalReports, DEMO_DATA_DISCLAIMER
} from "./data.js";
import { initFeatureCardReveal, showToast } from "./animations.js";

export function initLocationPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "kings-cross-station";
  const loc = getLocationById(id);

  if (!loc) {
    document.getElementById("locationMain").innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon" aria-hidden="true">🗺️</div>
        <h2 class="empty-state__title">Location not found</h2>
        <p class="empty-state__desc">We couldn't find that location in our demo dataset. <a href="index.html#discover" style="color:var(--color-accent-mint)">Browse all places</a>.</p>
      </div>
    `;
    return;
  }

  renderLocationHero(loc);
  renderJourneyFlow(loc);
  renderAccessibilityBreakdown(loc);
  renderReportTimeline(loc);
  renderSidebar(loc);

  // Set page title
  document.title = `${loc.name} — Accessibility Breakdown · AccessAble`;

  // Report update button
  document.getElementById("reportUpdateBtn")?.addEventListener("click", () => {
    window.location.href = `report.html?location=${loc.id}`;
  });

  setTimeout(() => initFeatureCardReveal(), 100);
}

function renderLocationHero(loc) {
  const container = document.getElementById("locationHero");
  if (!container) return;

  const badgeClass = getVerificationBadgeClass(loc.verificationStatus);
  const badgeLabel = getVerificationLabel(loc.verificationStatus);
  const missingWarning = loc.missingCount > 0 
    ? `<span class="badge badge-needs-verification" style="font-size:var(--text-xs)" title="${loc.missingCount} accessibility features lack recent verification">
        <svg class="icon" style="width:11px;height:11px" aria-hidden="true"><use href="#icon-alert"/></svg>
        ${loc.missingCount} Unverified Feature${loc.missingCount > 1 ? 's' : ''}
       </span>`
    : `<span class="badge badge-verified" style="font-size:var(--text-xs)">
        <svg class="icon" style="width:11px;height:11px" aria-hidden="true"><use href="#icon-check"/></svg>
        All Core Features Reported
       </span>`;

  container.innerHTML = `
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.html">Home</a>
        <span class="breadcrumb__sep" aria-hidden="true">›</span>
        <a href="index.html#discover">Explore Places</a>
        <span class="breadcrumb__sep" aria-hidden="true">›</span>
        <span class="breadcrumb__current" aria-current="page">${loc.name}</span>
      </nav>

      <div class="location-hero__inner">
        <div>
          <div style="display:flex;align-items:center;gap:var(--space-2);margin-bottom:var(--space-4);flex-wrap:wrap">
            <span class="badge badge-category">
              <span aria-hidden="true">${loc.categoryEmoji}</span> ${loc.categoryLabel}
            </span>
            <span class="badge ${badgeClass}">
              <svg class="icon" style="width:10px;height:10px" aria-hidden="true"><use href="#icon-shield"/></svg>
              ${badgeLabel}
            </span>
            ${missingWarning}
          </div>

          <h1 class="location-hero__title">${loc.name}</h1>
          <div class="location-hero__meta">
            <span style="font-size:var(--text-sm);color:var(--color-text-muted);display:flex;align-items:center;gap:6px">
              <svg class="icon icon-sm" aria-hidden="true" style="color:var(--color-accent-mint)"><use href="#icon-pin"/></svg>
              ${loc.address}
            </span>
            <span style="font-size:var(--text-sm);color:var(--color-text-muted);display:flex;align-items:center;gap:6px">
              <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-community"/></svg>
              ${loc.reportCount} community reports
            </span>
            <span style="font-size:var(--text-sm);color:var(--color-text-muted);display:flex;align-items:center;gap:6px">
              <svg class="icon" style="width:12px;height:12px" aria-hidden="true"><use href="#icon-clock"/></svg>
              ${getRelativeTime(loc.lastReported)}
            </span>
          </div>
        </div>

        <div style="display:flex;gap:var(--space-3);flex-wrap:wrap;align-items:center">
          <a href="report.html?location=${loc.id}" class="btn btn-primary btn-lg">
            <svg class="icon icon-md" aria-hidden="true"><use href="#icon-trending"/></svg>
            Submit an Update
          </a>
          <a href="index.html#discover" class="btn btn-ghost-white btn-lg">
            <svg class="icon icon-md" aria-hidden="true"><use href="#icon-arrow-left"/></svg>
            Back to Explore
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Facility Journey Flow: Visual architectural pathway through the venue
 */
function renderJourneyFlow(loc) {
  const container = document.getElementById("journeyFlow");
  if (!container) return;

  const steps = [
    { id: "parking", label: "Arrival & Parking", icon: "parking" },
    { id: "doorway", label: "Entrance & Doors", icon: "doorway" },
    { id: "stepFree", label: "Step-free Access", icon: "stepfree" },
    { id: "ramp", label: "Ramps & Slopes", icon: "ramp" },
    { id: "lift", label: "Lifts & Levels", icon: "lift" },
    { id: "toilet", label: "Restrooms", icon: "toilet" },
    { id: "sensory", label: "Sensory & Quiet", icon: "sensory" }
  ];

  const itemsHTML = steps.map((step, idx) => {
    const feat = loc.features[step.id];
    const status = feat ? feat.status : "unknown";
    const statusColor = status === "available" ? "var(--color-success)" :
                        status === "unavailable" ? "var(--color-danger)" :
                        status === "conflicting" ? "var(--color-amber)" : "var(--color-text-muted)";
    const dotClass = status === "available" ? "flow-dot--available" :
                     status === "unavailable" ? "flow-dot--unavailable" :
                     status === "conflicting" ? "flow-dot--conflicting" : "flow-dot--unknown";

    return `
      <button type="button" class="journey-node" data-target="card-${step.id}" title="Jump to ${step.label} breakdown">
        <div class="journey-node__circle" style="border-color:${statusColor}">
          <span class="journey-node__dot ${dotClass}" aria-hidden="true"></span>
          <svg class="icon icon-sm" aria-hidden="true" style="color:${statusColor}"><use href="#icon-${step.icon}"/></svg>
        </div>
        <span class="journey-node__label">${step.label}</span>
      </button>
      ${idx < steps.length - 1 ? `<div class="journey-connector" aria-hidden="true"></div>` : ""}
    `;
  }).join("");

  container.innerHTML = `
    <div class="card" style="margin-bottom:var(--space-8);background:linear-gradient(180deg, var(--color-bg-card) 0%, rgba(20,31,53,0.6) 100%);border-color:var(--color-border-accent)">
      <div class="card-body" style="padding:var(--space-5)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-4);flex-wrap:wrap;gap:var(--space-2)">
          <div style="display:flex;align-items:center;gap:var(--space-2)">
            <svg class="icon icon-sm" style="color:var(--color-accent-mint)" aria-hidden="true"><use href="#icon-split"/></svg>
            <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);text-transform:uppercase;letter-spacing:var(--tracking-widest);color:var(--color-accent-mint)">
              Accessible Journey Pathway
            </span>
          </div>
          <span style="font-size:var(--text-xs);color:var(--color-text-muted)">
            Click any step to inspect facility details
          </span>
        </div>
        <div class="journey-flow-scroll" role="navigation" aria-label="Facility journey path">
          <div class="journey-flow">
            ${itemsHTML}
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach click to scroll to feature card
  container.querySelectorAll(".journey-node").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const card = document.getElementById(targetId);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("highlight-pulse");
        setTimeout(() => card.classList.remove("highlight-pulse"), 1800);
      }
    });
  });
}

function renderAccessibilityBreakdown(loc) {
  const container = document.getElementById("accessibilityBreakdown");
  if (!container) return;

  const featureCards = FEATURES.map(feat => {
    const data = loc.features[feat.id];
    if (!data) return "";

    const statusClass = getFeatureCardStatusClass(data.status);
    const statusLabel = data.status === "available"   ? "Reported Available" :
                        data.status === "unavailable" ? "Reported Unavailable" :
                        data.status === "conflicting" ? "Conflicting Reports" : "Not Reported";
    const freshness = getRelativeTime(data.lastReported);
    const evidenceText = data.evidence || "No specific community observations recorded yet.";

    // Qualitative Confidence
    const confidenceLevel = data.confidence || (data.reports >= 10 ? "high" : data.reports >= 4 ? "moderate" : "low");
    const confidenceLabel = confidenceLevel === "high" ? "High confidence (multiple reports)" :
                            confidenceLevel === "moderate" ? "Moderate confidence" : "Low confidence (needs corroboration)";

    // Qualitative Uncertainty
    const uncertainty = data.uncertainty || (data.status === "conflicting" ? "high" : data.status === "unknown" ? "high" : "low");
    const uncertaintyLabel = uncertainty === "low" ? "Low uncertainty · Corroborated" :
                             uncertainty === "medium" ? "Moderate uncertainty · Limited data" :
                             "High uncertainty · Needs field verification";
    const uncertaintyColor = uncertainty === "low" ? "var(--color-success)" :
                              uncertainty === "medium" ? "var(--color-amber)" : "var(--color-danger)";

    return `
      <article id="card-${feat.id}" class="feature-card ${statusClass}" aria-label="${feat.label}: ${statusLabel}">
        <div class="feature-card__header">
          <div class="feature-card__icon-name">
            <div class="feature-card__icon" style="background:var(--color-bg-secondary);color:${
              data.status === "available"   ? "var(--color-success)" :
              data.status === "unavailable" ? "var(--color-danger)" :
              data.status === "conflicting" ? "var(--color-amber)" :
              "var(--color-text-muted)"
            }">
              <svg class="icon icon-md" aria-hidden="true"><use href="#icon-${feat.icon}"/></svg>
            </div>
            <div>
              <h3 class="feature-card__name">${feat.label}</h3>
              <span class="text-xs text-muted" style="display:block;margin-top:2px">
                ${data.reports} community observation${data.reports !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
          <span class="feature-card__status-label">${statusLabel}</span>
        </div>

        <!-- Evidence note from community -->
        <div class="feature-card__evidence-box" style="background:var(--color-bg-secondary);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:var(--space-3) var(--space-4);margin:var(--space-1) 0">
          <div style="display:flex;align-items:center;gap:6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-text-muted);margin-bottom:4px">
            <svg class="icon" style="width:12px;height:12px;color:var(--color-accent-mint)" aria-hidden="true"><use href="#icon-info"/></svg>
            Community Observation
          </div>
          <p style="font-size:var(--text-sm);color:var(--color-text-secondary);line-height:1.5">
            ${evidenceText}
          </p>
        </div>

        ${data.status === "conflicting" ? `
          <div style="background:var(--color-amber-dim);border:1px solid rgba(245,185,66,0.3);border-radius:var(--radius-md);padding:var(--space-3);font-size:var(--text-xs);color:var(--color-amber);display:flex;align-items:flex-start;gap:8px">
            <svg class="icon icon-sm" aria-hidden="true" style="margin-top:2px;flex-shrink:0"><use href="#icon-alert"/></svg>
            <div>
              <strong>Conflicting reports noted:</strong> Visitors have reported different experiences regarding this facility (e.g. temporary maintenance or mixed access points). If you visit, please submit an updated report.
            </div>
          </div>
        ` : ""}

        ${data.status === "unknown" ? `
          <div style="background:var(--color-muted-dim);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:var(--space-3);font-size:var(--text-xs);color:var(--color-text-muted);display:flex;align-items:center;gap:8px">
            <svg class="icon icon-sm" aria-hidden="true" style="flex-shrink:0"><use href="#icon-info"/></svg>
            <span>No community report on file yet. Have you been here? Help fellow visitors by submitting the first report!</span>
          </div>
        ` : ""}

        <!-- Freshness, Confidence, and Uncertainty -->
        <div class="feature-card__meta" style="padding-top:var(--space-2);border-top:1px solid var(--color-border-subtle);display:flex;flex-direction:column;gap:var(--space-2)">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-2)">
            <span class="feature-card__freshness" style="display:flex;align-items:center;gap:4px">
              <svg class="icon" style="width:12px;height:12px" aria-hidden="true"><use href="#icon-clock"/></svg>
              ${freshness}
            </span>
            <span style="font-size:var(--text-xs);color:${uncertaintyColor};font-weight:var(--font-medium)">
              ${uncertaintyLabel}
            </span>
          </div>

          ${data.reports > 0 ? `
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-2)">
              <div class="confidence confidence--${confidenceLevel}" aria-label="Confidence: ${confidenceLabel}">
                <div class="confidence__bar" aria-hidden="true">
                  <div class="confidence__segment"></div>
                  <div class="confidence__segment"></div>
                  <div class="confidence__segment"></div>
                </div>
                <span class="confidence__label" style="font-size:0.7rem">${confidenceLabel}</span>
              </div>
              <a href="report.html?location=${loc.id}&feature=${feat.id}" class="text-xs text-mint" style="text-decoration:underline;cursor:pointer" title="Update status for ${feat.label}">
                Update feature →
              </a>
            </div>
          ` : `
            <div style="display:flex;justify-content:flex-end">
              <a href="report.html?location=${loc.id}&feature=${feat.id}" class="btn btn-sm btn-ghost" style="padding:2px 10px;font-size:0.75rem">
                + Report this feature
              </a>
            </div>
          `}
        </div>
      </article>
    `;
  }).join("");

  container.innerHTML = `
    <div class="section-header reveal" style="margin-bottom:var(--space-6)">
      <div style="display:flex;align-items:center;gap:var(--space-2)">
        <span class="section-eyebrow" style="margin-bottom:0">Signature Feature</span>
        <span class="badge badge-demo" style="font-size:0.65rem">Nuanced Analysis</span>
      </div>
      <h2 class="section-title" style="margin-top:var(--space-2)">The Accessibility Breakdown</h2>
      <p class="section-subtitle" style="max-width:620px">
        Unlike simplistic "accessible vs inaccessible" scores, AccessAble breaks down each facility individually with evidence freshness, uncertainty levels, and direct quotes from community visitors.
      </p>
    </div>

    <!-- Architectural facility journey pathway container -->
    <div id="journeyFlow"></div>

    <!-- Feature Cards Stagger Grid -->
    <div class="features-grid reveal-stagger">
      ${featureCards}
    </div>
  `;

  renderJourneyFlow(loc);
}

function renderReportTimeline(loc) {
  const container = document.getElementById("reportTimeline");
  if (!container) return;

  // Merge demo reports with any local reports
  const localReports = getLocalReports().filter(r => r.locationId === loc.id);
  const allReports = [...localReports, ...loc.reports].sort(
    (a, b) => new Date(b.date || b.submittedAt) - new Date(a.date || a.submittedAt)
  );

  const timelineHTML = allReports.map((report, i) => {
    const date = report.date || report.submittedAt?.split("T")[0] || "Unknown date";
    const user = report.user || report.reporterName || "Anonymous contributor";
    const isLocal = report.isLocal;

    const featuresReported = Object.entries(report.features || {})
      .filter(([, v]) => v && v !== "null")
      .map(([k, v]) => {
        const feat = FEATURES.find(f => f.id === k);
        const statusClass = v === "available" ? "feature-status--available" :
                            v === "unavailable" ? "feature-status--unavailable" :
                            "feature-status--unknown";
        return `
          <span class="feature-status ${statusClass}" style="font-size:0.7rem;padding:2px 8px">
            <span class="status-dot" aria-hidden="true"></span>
            ${feat?.label || k}: ${v === "available" ? "✓" : v === "unavailable" ? "✗" : "?"}
          </span>
        `;
      }).join("");

    return `
      <div class="timeline-item">
        <div class="timeline-item__line">
          <div class="timeline-item__dot" aria-hidden="true"></div>
          ${i < allReports.length - 1 ? `<div class="timeline-item__connector" aria-hidden="true"></div>` : ""}
        </div>
        <div class="timeline-item__content">
          <div class="timeline-item__meta">
            <span class="timeline-item__user" style="display:flex;align-items:center;gap:6px">
              <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-user"/></svg>
              ${user}
            </span>
            ${isLocal ? `<span class="badge badge-demo" style="background:var(--color-accent-mint-dim);color:var(--color-accent-mint);border-color:var(--color-border-accent)">Your Local Report</span>` : ""}
            <time class="timeline-item__date" datetime="${date}">${formatDate(date)}</time>
          </div>
          ${report.notes ? `<p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-3);line-height:1.5">${report.notes}</p>` : ""}
          ${featuresReported ? `<div class="timeline-item__features" style="display:flex;flex-wrap:wrap;gap:6px">${featuresReported}</div>` : ""}
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="section-header reveal" style="margin-bottom:var(--space-6)">
      <p class="section-eyebrow">Auditable Evidence</p>
      <h2 class="section-title">Chronological Report History</h2>
      <p class="section-subtitle">Read unfiltered community logs in reverse chronological order.</p>
    </div>
    <div class="card" style="border-color:var(--color-border)">
      <div class="card-body">
        ${allReports.length === 0
          ? `<div class="empty-state" style="padding:var(--space-12)">
               <div class="empty-state__icon" aria-hidden="true">📋</div>
               <p class="empty-state__title">No reports logged yet</p>
               <p class="empty-state__desc">Be the first to report accessibility information for this place.</p>
             </div>`
          : timelineHTML
        }
      </div>
    </div>
  `;
}

function renderSidebar(loc) {
  const container = document.getElementById("locationSidebar");
  if (!container) return;

  const availableFeatures = Object.entries(loc.features).filter(([, v]) => v.status === "available").length;
  const totalFeatures = Object.keys(loc.features).length;

  container.innerHTML = `
    <div class="card" style="position:sticky;top:calc(var(--nav-height) + var(--space-6));border-color:var(--color-border-accent)">
      <div class="card-body" style="display:flex;flex-direction:column;gap:var(--space-5)">

        <!-- Quick Summary & Checklist -->
        <div>
          <div class="section-eyebrow" style="margin-bottom:var(--space-2)">Visual Checklist</div>
          <div style="font-size:var(--text-3xl);font-weight:var(--font-extrabold);color:var(--color-text-primary);letter-spacing:var(--tracking-tight)">
            ${availableFeatures} <span style="font-size:var(--text-sm);color:var(--color-text-muted);font-weight:var(--font-normal)">of ${totalFeatures} facilities reported available</span>
          </div>
          <div class="progress-bar" style="margin-top:var(--space-3)" role="progressbar" aria-valuenow="${availableFeatures}" aria-valuemin="0" aria-valuemax="${totalFeatures}">
            <div class="progress-bar__fill" style="width:${Math.round((availableFeatures / totalFeatures) * 100)}%"></div>
          </div>
          <p style="font-size:var(--text-xs);color:var(--color-text-muted);margin-top:var(--space-2);line-height:1.4">
            Evidence-based observations from ${loc.reportCount} contributors.
          </p>
        </div>

        <div class="divider" style="margin:0"></div>

        <!-- Facility status list -->
        <div style="display:flex;flex-direction:column;gap:var(--space-3)" role="list" aria-label="Facility checklist">
          ${FEATURES.map(feat => {
            const data = loc.features[feat.id];
            const status = data?.status || "unknown";
            const icon = status === "available" ? "check" : status === "unavailable" ? "x" : status === "conflicting" ? "alert" : "info";
            const color = status === "available" ? "var(--color-success)" :
                          status === "unavailable" ? "var(--color-danger)" :
                          status === "conflicting" ? "var(--color-amber)" : "var(--color-text-muted)";
            const statusText = status === "available" ? "Available" :
                              status === "unavailable" ? "Unavailable" :
                              status === "conflicting" ? "Conflicting" : "Unverified";

            return `
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:var(--text-sm)" role="listitem">
                <span style="display:flex;align-items:center;gap:var(--space-2);color:var(--color-text-secondary)">
                  <svg class="icon icon-sm" aria-hidden="true" style="color:var(--color-accent-mint)"><use href="#icon-${feat.icon}"/></svg>
                  ${feat.label}
                </span>
                <span style="display:flex;align-items:center;gap:4px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:${color}">
                  <svg class="icon" style="width:12px;height:12px;color:${color}" aria-hidden="true"><use href="#icon-${icon}"/></svg>
                  ${statusText}
                </span>
              </div>
            `;
          }).join("")}
        </div>

        <div class="divider" style="margin:0"></div>

        <!-- Action buttons -->
        <a href="report.html?location=${loc.id}" class="btn btn-primary btn-full">
          <svg class="icon icon-md" aria-hidden="true"><use href="#icon-trending"/></svg>
          Report an Observation
        </a>

        <!-- Disclaimer Banner -->
        <div class="demo-banner" style="justify-content:center;text-align:center;font-size:0.7rem;line-height:1.4">
          <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-alert"/></svg>
          Demo Prototype · Not verified with venue
        </div>
      </div>
    </div>
  `;
}

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric"
    });
  } catch {
    return dateStr;
  }
}
