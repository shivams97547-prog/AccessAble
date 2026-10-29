/**
 * AccessAble — Animations & Micro-interactions
 */

// Respect reduced-motion preference
const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia
  ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
  : false;

// ── Intersection Observer for scroll reveals ────────────────
export function initScrollReveal() {
  if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
    document.querySelectorAll(".reveal, .reveal-stagger").forEach(el => {
      el.classList.add("visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal, .reveal-stagger").forEach(el => {
    observer.observe(el);
  });
}

// ── Feature card stagger reveal (location.html) ─────────────
export function initFeatureCardReveal() {
  if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
    document.querySelectorAll(".feature-card").forEach(el => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.05 }
  );

  document.querySelectorAll(".feature-card").forEach(el => observer.observe(el));
}

// ── Button ripple effect ─────────────────────────────────────
export function initRipple() {
  if (prefersReducedMotion) return;
  document.addEventListener("click", e => {
    const btn = e.target.closest(".btn");
    if (!btn) return;
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    const rect = btn.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + "px";
    ripple.style.top  = (e.clientY - rect.top) + "px";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
}

// ── Page fade-in ─────────────────────────────────────────────
export function initPageFade() {
  if (document.body && document.body.classList) {
    document.body.classList.add("page-fade-in");
  }
}

// ── Nav scroll effect ─────────────────────────────────────────
export function initNavScroll() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const handler = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", handler, { passive: true });
  handler();
}

// ── Mobile menu ───────────────────────────────────────────────
export function initMobileMenu() {
  const hamburger = document.querySelector(".nav__hamburger");
  const mobileNav = document.querySelector(".nav-mobile");
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("open");
    mobileNav.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", !isOpen);
    hamburger.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  });

  // Close on outside click
  document.addEventListener("click", e => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Open navigation menu");
    }
  });

  // Close on link click
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// ── Toast notifications ───────────────────────────────────────
export function showToast(message, type = "info", duration = 4000) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    container.setAttribute("role", "region");
    container.setAttribute("aria-label", "Notifications");
    container.setAttribute("aria-live", "polite");
    document.body.appendChild(container);
  }

  const iconMap = {
    success: "check",
    error:   "x",
    info:    "shield",
    warning: "alert"
  };

  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.setAttribute("role", "status");
  toast.innerHTML = `
    <svg class="icon icon-md" aria-hidden="true" style="color:var(--color-${type === 'success' ? 'success' : type === 'error' ? 'danger' : type === 'warning' ? 'amber' : 'accent-mint'});flex-shrink:0;">
      <use href="#icon-${iconMap[type]}"/>
    </svg>
    <span>${message}</span>
    <button class="btn-icon" style="margin-left:auto;color:var(--color-text-muted)" aria-label="Dismiss notification">
      <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-x"/></svg>
    </button>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));

  const dismiss = () => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 400);
  };

  toast.querySelector("button").addEventListener("click", dismiss);
  if (duration > 0) setTimeout(dismiss, duration);
  return toast;
}

// ── Skeleton loading ──────────────────────────────────────────
export function showSkeletons(container, count = 6) {
  container.innerHTML = Array.from({ length: count }, () => `
    <div class="location-card" style="min-height:220px">
      <div class="location-card__header">
        <div style="display:flex;flex-direction:column;gap:8px;width:100%">
          <div class="skeleton" style="height:20px;width:60%"></div>
          <div class="skeleton" style="height:14px;width:80%"></div>
          <div class="skeleton" style="height:18px;width:35%"></div>
        </div>
      </div>
      <div class="location-card__features" style="gap:8px">
        ${Array.from({ length: 5 }, () => `<div class="skeleton" style="height:26px;width:80px;border-radius:999px"></div>`).join("")}
      </div>
      <div class="location-card__footer">
        <div class="skeleton" style="height:14px;width:40%"></div>
        <div class="skeleton" style="height:32px;width:100px;border-radius:8px"></div>
      </div>
    </div>
  `).join("");
}
