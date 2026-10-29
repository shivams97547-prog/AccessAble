/**
 * AccessAble — Filters & Search Logic
 * Supports Grid, List, and Split Map & List view with synchronized Canvas map.
 */

import {
  LOCATIONS, CATEGORIES, FEATURES,
  getStatusClass, getVerificationBadgeClass, getVerificationLabel,
  getRelativeTime
} from "./data.js";
import {
  initDiscoveryMap, updateDiscoveryMap, highlightDiscoveryMapMarker
} from "./map.js";

let activeCategory = "all";
let activeFeatures = new Set();
let searchQuery = "";
let sortMode = "reports";
let viewMode = "grid"; // "grid" | "list" | "split"
let filteredLocations = [...LOCATIONS];
let discoveryMapInitialized = false;

export function initFilters() {
  renderCategoryPills();
  renderFeaturePills();
  setupSearch();
  setupSort();
  setupViewToggle();
  renderCards(filteredLocations);
  updateResultsCount(filteredLocations.length);
}

// ── Category pills ────────────────────────────────────────────
function renderCategoryPills() {
  const container = document.getElementById("categoryPills");
  if (!container) return;
  container.innerHTML = "";

  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-pill" + (cat.id === activeCategory ? " active" : "");
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", cat.id === activeCategory ? "true" : "false");
    btn.setAttribute("aria-label", cat.label);
    btn.dataset.category = cat.id;
    btn.innerHTML = `<span aria-hidden="true">${cat.emoji}</span> ${cat.label}`;

    btn.addEventListener("click", () => {
      activeCategory = cat.id;
      container.querySelectorAll(".filter-pill").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-checked", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-checked", "true");
      applyFilters();
    });

    container.appendChild(btn);
  });
}

// ── Feature pills ─────────────────────────────────────────────
function renderFeaturePills() {
  const container = document.getElementById("featurePills");
  if (!container) return;
  container.innerHTML = "";

  FEATURES.forEach(feat => {
    const btn = document.createElement("button");
    btn.className = "filter-pill";
    btn.setAttribute("role", "checkbox");
    btn.setAttribute("aria-checked", "false");
    btn.setAttribute("aria-label", `Filter by ${feat.ariaLabel}`);
    btn.dataset.feature = feat.id;
    btn.innerHTML = `
      <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-${feat.icon}"/></svg>
      ${feat.label}
    `;

    btn.addEventListener("click", () => {
      const isActive = activeFeatures.has(feat.id);
      if (isActive) {
        activeFeatures.delete(feat.id);
        btn.classList.remove("active");
        btn.setAttribute("aria-checked", "false");
      } else {
        activeFeatures.add(feat.id);
        btn.classList.add("active");
        btn.setAttribute("aria-checked", "true");
      }
      applyFilters();
    });

    container.appendChild(btn);
  });
}

// ── Search ───────────────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClear");
  const dropdown = document.getElementById("searchDropdown");
  if (!input) return;

  input.addEventListener("input", () => {
    searchQuery = input.value.trim().toLowerCase();
    if (clearBtn) clearBtn.className = "search-bar__clear" + (searchQuery ? " visible" : "");
    if (searchQuery.length > 0) {
      showDropdown(searchQuery, dropdown);
    } else {
      hideDropdown(dropdown);
    }
    applyFilters();
  });

  clearBtn && clearBtn.addEventListener("click", () => {
    input.value = "";
    searchQuery = "";
    clearBtn.className = "search-bar__clear";
    hideDropdown(dropdown);
    applyFilters();
    input.focus();
  });

  input.addEventListener("keydown", e => {
    if (e.key === "Escape") { hideDropdown(dropdown); input.blur(); }
  });

  document.addEventListener("click", e => {
    if (!input.closest(".search-bar")?.contains(e.target)) hideDropdown(dropdown);
  });
}

function showDropdown(query, dropdown) {
  if (!dropdown) return;
  const matches = LOCATIONS.filter(loc =>
    loc.name.toLowerCase().includes(query) ||
    loc.address.toLowerCase().includes(query) ||
    loc.categoryLabel.toLowerCase().includes(query)
  ).slice(0, 5);

  if (!matches.length) { hideDropdown(dropdown); return; }

  dropdown.innerHTML = matches.map(loc => `
    <a href="location.html?id=${loc.id}" class="search-dropdown__item" role="option">
      <span class="search-dropdown__item-icon">
        <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-pin"/></svg>
      </span>
      <span>
        <div class="search-dropdown__item-name">${highlightMatch(loc.name, query)}</div>
        <div class="search-dropdown__item-meta">${loc.categoryLabel} · ${loc.address}</div>
      </span>
    </a>
  `).join("");

  dropdown.classList.add("open");
}

function hideDropdown(dropdown) {
  if (dropdown) dropdown.classList.remove("open");
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return text;
  return text.slice(0, idx) +
    `<mark style="background:rgba(101,240,189,0.2);color:var(--color-accent-mint);border-radius:2px;">${text.slice(idx, idx + query.length)}</mark>` +
    text.slice(idx + query.length);
}

// ── Sort ─────────────────────────────────────────────────────
function setupSort() {
  const select = document.getElementById("sortSelect");
  if (!select) return;
  select.addEventListener("change", () => {
    sortMode = select.value;
    applyFilters();
  });
}

// ── View toggle ───────────────────────────────────────────────
function setupViewToggle() {
  const gridBtn = document.getElementById("viewGrid");
  const listBtn = document.getElementById("viewList");
  const splitBtn = document.getElementById("viewSplit");

  if (gridBtn) gridBtn.addEventListener("click", () => setView("grid", gridBtn, [listBtn, splitBtn]));
  if (listBtn) listBtn.addEventListener("click", () => setView("list", listBtn, [gridBtn, splitBtn]));
  if (splitBtn) splitBtn.addEventListener("click", () => setView("split", splitBtn, [gridBtn, listBtn]));
}

function setView(mode, activeBtn, inactiveBtns) {
  viewMode = mode;
  activeBtn.classList.add("active");
  activeBtn.setAttribute("aria-pressed", "true");

  inactiveBtns.forEach(btn => {
    if (btn) {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    }
  });

  const grid = document.getElementById("locationsGrid");
  const layout = document.getElementById("discoverLayout");
  const mapPane = document.getElementById("discoverMapPane");

  if (mode === "split") {
    if (layout) layout.className = "discover__layout discover__layout-split";
    if (mapPane) mapPane.style.display = "block";
    if (grid) grid.className = "cards-grid";

    // Lazy initialize discovery map on canvas
    if (!discoveryMapInitialized) {
      setTimeout(() => {
        initDiscoveryMap("discoveryMap", (loc) => {
          // On map marker click, scroll card into view
          const card = document.getElementById(`loc-card-${loc.id}`);
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            card.classList.add("highlight-pulse");
            setTimeout(() => card.classList.remove("highlight-pulse"), 1600);
          }
        });
        updateDiscoveryMap(filteredLocations);
        discoveryMapInitialized = true;
      }, 50);
    } else {
      setTimeout(() => updateDiscoveryMap(filteredLocations), 50);
    }
  } else if (mode === "list") {
    if (layout) layout.className = "discover__layout";
    if (mapPane) mapPane.style.display = "none";
    if (grid) grid.className = "cards-grid cards-grid--list";
  } else {
    // grid
    if (layout) layout.className = "discover__layout";
    if (mapPane) mapPane.style.display = "none";
    if (grid) grid.className = "cards-grid";
  }
}

// ── Filter logic ──────────────────────────────────────────────
function applyFilters() {
  let results = [...LOCATIONS];

  // Category
  if (activeCategory !== "all") {
    results = results.filter(loc => loc.category === activeCategory);
  }

  // Search
  if (searchQuery) {
    results = results.filter(loc =>
      loc.name.toLowerCase().includes(searchQuery) ||
      loc.address.toLowerCase().includes(searchQuery) ||
      loc.categoryLabel.toLowerCase().includes(searchQuery)
    );
  }

  // Feature filters
  if (activeFeatures.size > 0) {
    results = results.filter(loc =>
      [...activeFeatures].every(feat =>
        loc.features[feat] && loc.features[feat].status === "available"
      )
    );
  }

  // Sort
  switch (sortMode) {
    case "reports":
      results.sort((a, b) => b.reportCount - a.reportCount);
      break;
    case "recent":
      results.sort((a, b) => new Date(b.lastReported) - new Date(a.lastReported));
      break;
    case "name":
      results.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  filteredLocations = results;
  renderCards(results);
  updateResultsCount(results.length);

  // Sync discovery map if active
  if (discoveryMapInitialized) {
    updateDiscoveryMap(results);
  }
}

// ── Render cards ──────────────────────────────────────────────
export function renderCards(locations) {
  const grid = document.getElementById("locationsGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  if (locations.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "flex";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  grid.innerHTML = locations.map((loc, i) => buildLocationCard(loc, i)).join("");

  // Attach hover bridge between cards and discovery map
  grid.querySelectorAll(".location-card").forEach(card => {
    const locId = card.dataset.id;
    card.addEventListener("mouseenter", () => {
      highlightDiscoveryMapMarker(locId);
    });
    card.addEventListener("mouseleave", () => {
      highlightDiscoveryMapMarker(null);
    });
  });

  // Animate entrance
  grid.querySelectorAll(".location-card").forEach((card, i) => {
    card.style.animationDelay = `${i * 50}ms`;
    card.classList.add("card-entrance");
  });
}

function buildLocationCard(loc) {
  const featureHTML = Object.entries(loc.features).map(([key, feat]) => {
    const statusClass = getStatusClass(feat.status);
    const label = feat.status === "available" ? "Available" :
                  feat.status === "unavailable" ? "Unavailable" :
                  feat.status === "conflicting" ? "Conflicting" : "Unreported";
    const featureName = key === "stepFree" ? "Step-free" :
                        key === "doorway"  ? "Entrance" :
                        key === "ramp"     ? "Ramp" :
                        key === "lift"     ? "Lift" :
                        key === "toilet"   ? "Toilet" :
                        key === "parking"  ? "Parking" : "Sensory";
    return `
      <span class="feature-status ${statusClass}" title="${featureName}: ${label}">
        <span class="status-dot" aria-hidden="true"></span>
        <span>${featureName}</span>
      </span>
    `;
  }).join("");

  const badgeClass = getVerificationBadgeClass(loc.verificationStatus);
  const badgeLabel = getVerificationLabel(loc.verificationStatus);
  const lastReported = getRelativeTime(loc.lastReported);

  // Requirement 4: Clear indicator for missing or outdated information
  const missingCount = loc.missingCount || Object.values(loc.features).filter(f => f.status === "unknown").length;
  const missingIndicator = missingCount > 0
    ? `<span class="badge badge-needs-verification" style="font-size:0.65rem;padding:2px 6px" title="${missingCount} facilities need community verification">
        <svg class="icon" style="width:10px;height:10px" aria-hidden="true"><use href="#icon-alert"/></svg>
        ${missingCount} unverified
       </span>`
    : `<span class="badge badge-verified" style="font-size:0.65rem;padding:2px 6px" title="All core facilities verified">
        <svg class="icon" style="width:10px;height:10px" aria-hidden="true"><use href="#icon-check"/></svg>
        Complete
       </span>`;

  return `
    <article id="loc-card-${loc.id}" data-id="${loc.id}" class="location-card reveal" role="article" aria-label="${loc.name} accessibility information">
      <div class="location-card__header">
        <div class="location-card__top-row">
          <div>
            <h3 class="location-card__name">${loc.name}</h3>
            <p class="location-card__address">
              <svg class="icon icon-sm" aria-hidden="true" style="color:var(--color-accent-mint)"><use href="#icon-pin"/></svg>
              ${loc.address}
            </p>
          </div>
          <span class="badge badge-category" aria-label="Category: ${loc.categoryLabel}">
            <span aria-hidden="true">${loc.categoryEmoji}</span>
            <span class="sr-only">${loc.categoryLabel}</span>
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:var(--space-2);flex-wrap:wrap">
          <span class="badge ${badgeClass}">
            <svg class="icon" style="width:10px;height:10px" aria-hidden="true"><use href="#icon-shield"/></svg>
            ${badgeLabel}
          </span>
          ${missingIndicator}
        </div>
      </div>

      <div class="location-card__features" aria-label="Accessibility features breakdown">
        ${featureHTML}
      </div>

      <div class="location-card__footer">
        <div class="location-card__meta">
          <span class="location-card__reports">
            <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-community"/></svg>
            ${loc.reportCount} community report${loc.reportCount !== 1 ? "s" : ""}
          </span>
          <span class="location-card__verified text-muted text-xs">
            <svg class="icon" style="width:12px;height:12px" aria-hidden="true"><use href="#icon-clock"/></svg>
            ${lastReported}
          </span>
        </div>
        <a href="location.html?id=${loc.id}" class="btn btn-ghost btn-sm" aria-label="View accessibility details for ${loc.name}">
          View Breakdown
          <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-arrow-right"/></svg>
        </a>
      </div>
    </article>
  `;
}

function updateResultsCount(count) {
  const el = document.getElementById("resultsCount");
  if (el) el.innerHTML = `Showing <strong>${count}</strong> place${count !== 1 ? "s" : ""}`;

  const mapIndicator = document.getElementById("mapFilterIndicator");
  if (mapIndicator) {
    mapIndicator.textContent = `${count} on map`;
  }
}
