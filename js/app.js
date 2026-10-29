/**
 * AccessAble — Main App Entry Point
 */

import { initScrollReveal, initPageFade, initNavScroll, initMobileMenu, initRipple } from "./animations.js";

const page = document.body.dataset.page;

// ── Bootstrap ─────────────────────────────────────────────────
async function init() {
  initPageFade();
  initNavScroll();
  initMobileMenu();
  initRipple();

  if (page === "index") {
    const [{ initHeroMap }] = await Promise.all([import("./map.js")]);
    const { initFilters } = await import("./filters.js");

    initHeroMap("heroMap");
    initFilters();
    initScrollReveal();

    // Smooth scroll for hero CTA
    document.getElementById("heroExploreBtn")?.addEventListener("click", () => {
      document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (page === "location") {
    const { initLocationPage } = await import("./location.js");
    initLocationPage();
    initScrollReveal();
  }

  if (page === "report") {
    const { initReportForm } = await import("./report.js");
    initReportForm();
    initScrollReveal();
  }
}

document.addEventListener("DOMContentLoaded", init);
