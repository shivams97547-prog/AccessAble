/**
 * AccessAble — Interactive Map Visualisation
 * High-performance Canvas map engine with glowing markers, animated pulses,
 * road and river vectors, and interactive tooltips.
 */

import { LOCATIONS } from "./data.js";

const DPR = typeof window !== "undefined" && window.devicePixelRatio ? window.devicePixelRatio : 1;

// Color palette
const COLORS = {
  bg:           "#0D1929",
  grid:         "rgba(255,255,255,0.03)",
  gridAccent:   "rgba(101,240,189,0.06)",
  road:         "rgba(255,255,255,0.07)",
  roadAccent:   "rgba(101,240,189,0.05)",
  water:        "rgba(17,40,80,0.65)",
  mint:         "#65F0BD",
  mintGlow:     "rgba(101,240,189,0.4)",
  mintDim:      "rgba(101,240,189,0.15)",
  amber:        "#F5B942",
  danger:       "#F87171",
  text:         "#F8FAFC",
  textMuted:    "#94A3B8",
  card:         "rgba(14,24,44,0.96)",
  cardBorder:   "rgba(101,240,189,0.3)"
};

// Road paths (vector representation of city arteries)
const ROAD_PATHS = [
  { x1: 0.05, y1: 0.45, x2: 0.95, y2: 0.45, w: 3 },
  { x1: 0.05, y1: 0.65, x2: 0.95, y2: 0.65, w: 2.5 },
  { x1: 0.05, y1: 0.25, x2: 0.95, y2: 0.25, w: 2 },
  { x1: 0.30, y1: 0.05, x2: 0.30, y2: 0.95, w: 3 },
  { x1: 0.55, y1: 0.05, x2: 0.55, y2: 0.95, w: 2.5 },
  { x1: 0.75, y1: 0.05, x2: 0.75, y2: 0.95, w: 2 },
  { x1: 0.05, y1: 0.20, x2: 0.45, y2: 0.55, w: 1.5 },
  { x1: 0.55, y1: 0.45, x2: 0.95, y2: 0.75, w: 1.5 }
];

const WATER_AREAS = [
  { points: [[0, 0.56], [0.35, 0.54], [0.70, 0.60], [1, 0.53], [1, 0.62], [0.70, 0.68], [0.35, 0.62], [0, 0.64]] }
];

class AccessMap {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.options = options; // { interactiveNav: true/false, onSelect: fn }
    this.locations = options.locations || [...LOCATIONS];
    this.markers = [];
    this.hoveredMarker = null;
    this.activeMarker = null;
    this.time = 0;
    this.animFrame = null;
    this.isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    this.init();
  }

  init() {
    this.resize();
    this.buildMarkers();
    this.setupListeners();
    this.animate();

    this._resizeHandler = () => {
      this.resize();
      this.buildMarkers();
    };
    window.addEventListener("resize", this._resizeHandler);
  }

  resize() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const w = rect.width || 400;
    const h = rect.height || 300;
    this.canvas.width = w * DPR;
    this.canvas.height = h * DPR;
    this.canvas.style.width = w + "px";
    this.canvas.style.height = h + "px";
    this.ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  setLocations(newLocations) {
    this.locations = newLocations;
    this.buildMarkers();
    if (this.activeMarker && !newLocations.find(l => l.id === this.activeMarker.id)) {
      this.activeMarker = null;
    }
  }

  buildMarkers() {
    const W = this.canvas.width / DPR;
    const H = this.canvas.height / DPR;

    this.markers = this.locations.map((loc, i) => {
      const status = loc.verificationStatus === "verified" ? "verified" :
                     loc.verificationStatus === "needs-verification" ? "needs-verification" : "unverified";
      return {
        id: loc.id,
        name: loc.name,
        category: loc.categoryLabel,
        x: loc.mapX * W,
        y: loc.mapY * H,
        status,
        color: status === "verified" ? COLORS.mint :
               status === "needs-verification" ? COLORS.amber : COLORS.danger,
        pulseOffset: i * 0.7,
        data: loc
      };
    });
  }

  highlightLocation(id) {
    const found = this.markers.find(m => m.id === id);
    if (found) {
      this.activeMarker = found;
      this.hoveredMarker = found;
    } else {
      this.activeMarker = null;
      this.hoveredMarker = null;
    }
  }

  animate() {
    this.time += 0.02;
    this.draw();
    if (!this.isReducedMotion) {
      this.animFrame = requestAnimationFrame(() => this.animate());
    }
  }

  draw() {
    const W = this.canvas.width / DPR;
    const H = this.canvas.height / DPR;
    if (W <= 0 || H <= 0) return;

    // Background
    this.ctx.fillStyle = COLORS.bg;
    this.ctx.fillRect(0, 0, W, H);

    this.drawGrid(W, H);
    this.drawWater(W, H);
    this.drawRoads(W, H);
    this.drawRouteConnections(W, H);
    this.drawMarkers(W, H);

    if (this.hoveredMarker || this.activeMarker) {
      this.drawTooltip(W, H);
    }
  }

  drawGrid(W, H) {
    const step = 28;
    this.ctx.strokeStyle = COLORS.grid;
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    for (let x = 0; x < W; x += step) {
      this.ctx.moveTo(x, 0); this.ctx.lineTo(x, H);
    }
    for (let y = 0; y < H; y += step) {
      this.ctx.moveTo(0, y); this.ctx.lineTo(W, y);
    }
    this.ctx.stroke();

    // Major grid lines
    this.ctx.strokeStyle = COLORS.gridAccent;
    this.ctx.beginPath();
    for (let x = 0; x < W; x += step * 4) {
      this.ctx.moveTo(x, 0); this.ctx.lineTo(x, H);
    }
    for (let y = 0; y < H; y += step * 4) {
      this.ctx.moveTo(0, y); this.ctx.lineTo(W, y);
    }
    this.ctx.stroke();
  }

  drawWater(W, H) {
    WATER_AREAS.forEach(area => {
      const pts = area.points;
      this.ctx.beginPath();
      this.ctx.moveTo(pts[0][0] * W, pts[0][1] * H);
      for (let i = 1; i < pts.length; i++) {
        this.ctx.lineTo(pts[i][0] * W, pts[i][1] * H);
      }
      this.ctx.closePath();

      const wave = Math.sin(this.time * 0.5) * 0.08;
      this.ctx.fillStyle = `rgba(18, 42, 85, ${0.65 + wave})`;
      this.ctx.fill();
      this.ctx.strokeStyle = "rgba(101, 240, 189, 0.12)";
      this.ctx.lineWidth = 1.2;
      this.ctx.stroke();
    });
  }

  drawRoads(W, H) {
    ROAD_PATHS.forEach(road => {
      this.ctx.beginPath();
      this.ctx.moveTo(road.x1 * W, road.y1 * H);
      this.ctx.lineTo(road.x2 * W, road.y2 * H);
      this.ctx.strokeStyle = COLORS.road;
      this.ctx.lineWidth = road.w || 2;
      this.ctx.stroke();
    });
  }

  drawRouteConnections(W, H) {
    for (let i = 0; i < this.markers.length; i++) {
      for (let j = i + 1; j < this.markers.length; j++) {
        const a = this.markers[i], b = this.markers[j];
        const dist = Math.hypot(b.x - a.x, b.y - a.y);
        if (dist < W * 0.35) {
          const alpha = (1 - dist / (W * 0.35)) * 0.14;
          const pulse = 0.6 + 0.4 * Math.sin(this.time * 0.6 + i);
          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.strokeStyle = `rgba(101,240,189,${alpha * pulse})`;
          this.ctx.lineWidth = 1;
          this.ctx.setLineDash([4, 6]);
          this.ctx.stroke();
          this.ctx.setLineDash([]);
        }
      }
    }
  }

  drawMarkers(W, H) {
    this.markers.forEach((marker, i) => {
      const isHovered = this.hoveredMarker === marker;
      const isActive = this.activeMarker === marker;
      const t = this.time + marker.pulseOffset;

      // Pulse ring for verified or active markers
      if (!this.isReducedMotion) {
        const pulseCycle = (t % 2.4) / 2.4;
        const pulseRadius = 8 + pulseCycle * 18;
        const pulseAlpha = Math.max(0, 1 - pulseCycle) * 0.45;

        this.ctx.beginPath();
        this.ctx.arc(marker.x, marker.y, pulseRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = marker.color === COLORS.mint ? `rgba(101,240,189,${pulseAlpha})` :
                             marker.color === COLORS.amber ? `rgba(245,185,66,${pulseAlpha})` :
                             `rgba(248,113,113,${pulseAlpha})`;
        this.ctx.fill();
      }

      // Glow halo
      const glowRadius = isHovered || isActive ? 22 : 14;
      const grd = this.ctx.createRadialGradient(marker.x, marker.y, 0, marker.x, marker.y, glowRadius);
      grd.addColorStop(0, marker.color === COLORS.mint ? "rgba(101,240,189,0.4)" :
                          marker.color === COLORS.amber ? "rgba(245,185,66,0.35)" : "rgba(248,113,113,0.35)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      this.ctx.beginPath();
      this.ctx.arc(marker.x, marker.y, glowRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = grd;
      this.ctx.fill();

      // Pin center dot
      const radius = isHovered || isActive ? 9 : 7;
      this.ctx.beginPath();
      this.ctx.arc(marker.x, marker.y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = marker.color;
      this.ctx.fill();

      // Inner white center
      this.ctx.beginPath();
      this.ctx.arc(marker.x, marker.y, radius * 0.4, 0, Math.PI * 2);
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.fill();

      // Mini text label under marker if not hovering
      if (!isHovered && !isActive && (i < 5 || W > 500)) {
        this.drawMarkerPill(marker, W);
      }
    });
  }

  drawMarkerPill(marker, W) {
    const label = marker.name.length > 17 ? marker.name.slice(0, 15) + "…" : marker.name;
    this.ctx.font = "500 10px Inter, sans-serif";
    const textW = this.ctx.measureText(label).width;
    const boxW = textW + 10;
    const boxH = 18;
    let bx = marker.x - boxW / 2;
    let by = marker.y + 12;

    bx = Math.max(4, Math.min(W - boxW - 4, bx));

    roundRect(this.ctx, bx, by, boxW, boxH, 4);
    this.ctx.fillStyle = "rgba(14, 24, 44, 0.88)";
    this.ctx.fill();
    this.ctx.strokeStyle = "rgba(255,255,255,0.08)";
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    this.ctx.fillStyle = COLORS.text;
    this.ctx.fillText(label, bx + 5, by + 12);
  }

  drawTooltip(W, H) {
    const marker = this.hoveredMarker || this.activeMarker;
    if (!marker) return;

    const loc = marker.data;
    const cardW = Math.min(220, W * 0.65);
    const cardH = 96;
    const pad = 12;

    let cx = marker.x + 16;
    let cy = marker.y - cardH / 2;
    if (cx + cardW > W - 10) cx = marker.x - cardW - 16;
    if (cy < 8) cy = 8;
    if (cy + cardH > H - 8) cy = H - cardH - 8;

    // Card shadow
    this.ctx.shadowColor = "rgba(0,0,0,0.65)";
    this.ctx.shadowBlur = 18;

    roundRect(this.ctx, cx, cy, cardW, cardH, 8);
    this.ctx.fillStyle = COLORS.card;
    this.ctx.fill();
    this.ctx.shadowBlur = 0;

    // Glowing border
    roundRect(this.ctx, cx, cy, cardW, cardH, 8);
    this.ctx.strokeStyle = marker.color === COLORS.mint ? COLORS.cardBorder : "rgba(245,185,66,0.4)";
    this.ctx.lineWidth = 1.2;
    this.ctx.stroke();

    // Left accent bar
    this.ctx.beginPath();
    this.ctx.moveTo(cx + 3, cy + 8);
    this.ctx.lineTo(cx + 3, cy + cardH - 8);
    this.ctx.strokeStyle = marker.color;
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = "round";
    this.ctx.stroke();
    this.ctx.lineCap = "butt";

    // Name
    this.ctx.font = "600 13px Inter, sans-serif";
    this.ctx.fillStyle = COLORS.text;
    const name = loc.name.length > 22 ? loc.name.slice(0, 20) + "…" : loc.name;
    this.ctx.fillText(name, cx + pad + 2, cy + 22);

    // Category
    this.ctx.font = "400 11px Inter, sans-serif";
    this.ctx.fillStyle = COLORS.textMuted;
    this.ctx.fillText(`${loc.categoryEmoji || "📍"} ${loc.categoryLabel}`, cx + pad + 2, cy + 39);

    // Verification chip
    const chipY = cy + 50;
    const chipText = loc.verificationStatus === "verified" ? "Community Verified" : "Needs Verification";
    this.ctx.font = "600 9px Inter, sans-serif";
    const chipW = this.ctx.measureText(chipText).width + 12;

    roundRect(this.ctx, cx + pad + 2, chipY, chipW, 16, 8);
    this.ctx.fillStyle = marker.color === COLORS.mint ? "rgba(101,240,189,0.15)" : "rgba(245,185,66,0.15)";
    this.ctx.fill();
    this.ctx.fillStyle = marker.color;
    this.ctx.fillText(chipText, cx + pad + 8, chipY + 11);

    // Click instruction / reports count
    this.ctx.font = "400 10px Inter, sans-serif";
    this.ctx.fillStyle = COLORS.mint;
    this.ctx.fillText(`Click to view details →`, cx + pad + 2, cy + cardH - 12);
  }

  setupListeners() {
    this.canvas.addEventListener("mousemove", e => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const hit = this.markers.find(m => Math.hypot(m.x - x, m.y - y) < 18);
      this.canvas.style.cursor = hit ? "pointer" : "default";
      this.hoveredMarker = hit;
    });

    this.canvas.addEventListener("mouseleave", () => {
      this.hoveredMarker = null;
      this.canvas.style.cursor = "default";
    });

    this.canvas.addEventListener("click", e => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const hit = this.markers.find(m => Math.hypot(m.x - x, m.y - y) < 18);

      if (hit) {
        this.activeMarker = hit;
        if (typeof this.options.onSelect === "function") {
          this.options.onSelect(hit.data);
        } else {
          window.location.href = `location.html?id=${hit.id}`;
        }
      }
    });

    this.canvas.addEventListener("touchend", e => {
      const touch = e.changedTouches[0];
      const rect = this.canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      const hit = this.markers.find(m => Math.hypot(m.x - x, m.y - y) < 22);

      if (hit) {
        if (typeof this.options.onSelect === "function") {
          this.options.onSelect(hit.data);
        } else {
          window.location.href = `location.html?id=${hit.id}`;
        }
      }
    });
  }

  destroy() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    if (this._resizeHandler) window.removeEventListener("resize", this._resizeHandler);
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Module singleton exports
let heroMapInstance = null;
let discoveryMapInstance = null;

export function initHeroMap(canvasId) {
  if (heroMapInstance) heroMapInstance.destroy();
  heroMapInstance = new AccessMap(canvasId, { interactiveNav: true });
  return heroMapInstance;
}

export function initDiscoveryMap(canvasId, onSelect) {
  if (discoveryMapInstance) discoveryMapInstance.destroy();
  discoveryMapInstance = new AccessMap(canvasId, { onSelect });
  return discoveryMapInstance;
}

export function updateDiscoveryMap(locations) {
  if (discoveryMapInstance) {
    discoveryMapInstance.setLocations(locations);
  }
}

export function highlightDiscoveryMapMarker(locationId) {
  if (discoveryMapInstance) {
    discoveryMapInstance.highlightLocation(locationId);
  }
}

export function destroyHeroMap() {
  if (heroMapInstance) heroMapInstance.destroy();
  if (discoveryMapInstance) discoveryMapInstance.destroy();
}
