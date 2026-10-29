(function(global) {
"use strict";

/**
 * AccessAble — Demo Data
 * ⚠️  DEMO DATA ONLY — Not verified real-world information.
 * These locations and accessibility details are illustrative samples
 * for prototype purposes. Do not rely on this data for real accessibility planning.
 */

const DEMO_DATA_DISCLAIMER = "Demo data — not verified real-world information";

const LOCATIONS = [
  {
    id: "kings-cross-station",
    name: "King's Cross Station",
    category: "stations",
    categoryLabel: "Station & Transport",
    categoryEmoji: "🚉",
    address: "Euston Road, King's Cross, London N1 9AL",
    reportCount: 34,
    lastReported: "2026-10-15",
    verificationStatus: "verified",
    missingCount: 0,
    features: {
      stepFree: {
        status: "available",
        label: "Reported Available",
        reports: 28,
        lastReported: "2026-10-15",
        evidence: "Tactile-paved step-free entrances via both main Western Concourse and Euston Road. Level threshold throughout main concourse.",
        confidence: "high",
        uncertainty: "low"
      },
      doorway: {
        status: "available",
        label: "Reported Available",
        reports: 25,
        lastReported: "2026-10-15",
        evidence: "Multiple automatic double glass sliding doors with >120cm clear opening width. Zero sill step. Push-pads available for manual bypass.",
        confidence: "high",
        uncertainty: "low"
      },
      ramp: {
        status: "available",
        label: "Reported Available",
        reports: 22,
        lastReported: "2026-10-10",
        evidence: "Gentle 1:15 gradient ramps with double continuous handrails connecting concourse to mezzanine shops and Northern ticket hall.",
        confidence: "high",
        uncertainty: "low"
      },
      lift: {
        status: "available",
        label: "Reported Available",
        reports: 30,
        lastReported: "2026-10-15",
        evidence: "4 public passenger lifts connecting street to platforms 0-11 and Underground ticket hall. Voice announcements and braille buttons operational.",
        confidence: "high",
        uncertainty: "low"
      },
      toilet: {
        status: "available",
        label: "Reported Available",
        reports: 18,
        lastReported: "2026-09-28",
        evidence: "Radar key accessible toilets on the main concourse near platform 9 and secondary unit near Western transit entrance. Changing Places facility available.",
        confidence: "high",
        uncertainty: "low"
      },
      parking: {
        status: "available",
        label: "Reported Available",
        reports: 12,
        lastReported: "2026-09-20",
        evidence: "Designated Blue Badge accessible drop-off bays on Pancras Road with dropped curb and direct level station access.",
        confidence: "high",
        uncertainty: "low"
      },
      sensory: {
        status: "needs-verification",
        label: "Needs Verification",
        reports: 3,
        lastReported: "2026-08-14",
        evidence: "Hearing induction loops present at customer service counters 1-4. Station can be loud during peak travel hours; sensory quiet room not yet confirmed.",
        confidence: "moderate",
        uncertainty: "medium"
      }
    },
    reports: [
      {
        id: "r1",
        user: "Anonymous contributor",
        date: "2026-10-15",
        notes: "Step-free access clearly marked at both main entrances. Lifts were operational and spacious enough for motorized wheelchairs with companion.",
        features: { stepFree: "available", doorway: "available", lift: "available", ramp: "available" }
      },
      {
        id: "r2",
        user: "Community reporter",
        date: "2026-10-10",
        notes: "Ramps well maintained with high-contrast edge markings. Accessible toilets located on the main concourse — follow the blue accessibility signs.",
        features: { ramp: "available", toilet: "available" }
      },
      {
        id: "r3",
        user: "Anonymous contributor",
        date: "2026-09-28",
        notes: "Blue badge parking spaces available outside Pancras Road. Ticket machines at accessible height on the main concourse with audio jack.",
        features: { parking: "available", doorway: "available" }
      },
      {
        id: "r4",
        user: "Community reporter",
        date: "2026-09-05",
        notes: "All lifts in service during my visit. Step-free route from street to platform 0 is well signed.",
        features: { lift: "available", stepFree: "available" }
      }
    ],
    confidence: "high",
    mapX: 0.32,
    mapY: 0.28
  },
  {
    id: "university-college-hospital",
    name: "University College Hospital",
    category: "hospitals",
    categoryLabel: "Hospital & Clinic",
    categoryEmoji: "🏥",
    address: "235 Euston Road, London NW1 2BU",
    reportCount: 28,
    lastReported: "2026-10-08",
    verificationStatus: "verified",
    missingCount: 1,
    features: {
      stepFree: {
        status: "available",
        label: "Reported Available",
        reports: 24,
        lastReported: "2026-10-08",
        evidence: "Flush ground-level entrance directly off Euston Road sidewalk. Smooth tactile non-slip flooring.",
        confidence: "high",
        uncertainty: "low"
      },
      doorway: {
        status: "available",
        label: "Reported Available",
        reports: 22,
        lastReported: "2026-10-08",
        evidence: "Automatic motion-sensor sliding doors with 130cm opening width and slow closing safety sensors.",
        confidence: "high",
        uncertainty: "low"
      },
      ramp: {
        status: "available",
        label: "Reported Available",
        reports: 20,
        lastReported: "2026-10-05",
        evidence: "Internal shallow ramps connecting main atrium to diagnostic wings; handrails on both flanks.",
        confidence: "high",
        uncertainty: "low"
      },
      lift: {
        status: "available",
        label: "Reported Available",
        reports: 26,
        lastReported: "2026-10-08",
        evidence: "Large hospital-grade bed lifts on cores A, B, and C with mirror backing, vocal floor announcements, and low dual button consoles.",
        confidence: "high",
        uncertainty: "low"
      },
      toilet: {
        status: "available",
        label: "Reported Available",
        reports: 22,
        lastReported: "2026-09-30",
        evidence: "Unisex accessible toilets on every floor adjacent to lift banks. Emergency pull cords hang within 10cm of floor.",
        confidence: "high",
        uncertainty: "low"
      },
      parking: {
        status: "unknown",
        label: "Not Reported",
        reports: 0,
        lastReported: null,
        evidence: "No verified reports on dedicated patient disabled parking spaces. Drop-off bay noted at main forecourt.",
        confidence: "low",
        uncertainty: "high"
      },
      sensory: {
        status: "available",
        label: "Reported Available",
        reports: 5,
        lastReported: "2026-09-12",
        evidence: "High contrast door frame surrounds, color-coded floor zoning, and fixed hearing loops at reception desks.",
        confidence: "moderate",
        uncertainty: "medium"
      }
    },
    reports: [
      {
        id: "r5",
        user: "Anonymous contributor",
        date: "2026-10-08",
        notes: "Main entrance is fully step-free with automatic sliding doors. Staff at welcome desk provide wheelchair escorts upon request.",
        features: { stepFree: "available", doorway: "available", lift: "available" }
      },
      {
        id: "r6",
        user: "Community reporter",
        date: "2026-10-05",
        notes: "Accessible toilets on every floor I visited. Well signed throughout with raised pictograms.",
        features: { toilet: "available", ramp: "available" }
      },
      {
        id: "r7",
        user: "Anonymous contributor",
        date: "2026-09-18",
        notes: "Multiple lifts available and very spacious. I could not find information about long-stay accessible parking — would appreciate an update from someone who drove.",
        features: { lift: "available", parking: "unknown" }
      }
    ],
    confidence: "high",
    mapX: 0.30,
    mapY: 0.38
  },
  {
    id: "british-library",
    name: "British Library",
    category: "public",
    categoryLabel: "Public Building",
    categoryEmoji: "🏛️",
    address: "96 Euston Road, London NW1 2DB",
    reportCount: 19,
    lastReported: "2026-09-22",
    verificationStatus: "verified",
    missingCount: 1,
    features: {
      stepFree: {
        status: "available",
        label: "Reported Available",
        reports: 16,
        lastReported: "2026-09-22",
        evidence: "Piazza access from Euston Road has wide level stone paving with gentle ramp alternative to steps.",
        confidence: "high",
        uncertainty: "low"
      },
      doorway: {
        status: "available",
        label: "Reported Available",
        reports: 15,
        lastReported: "2026-09-22",
        evidence: "Power-assisted automated doors to right of revolving door. Push pads positioned at wheelchair-accessible height (90cm).",
        confidence: "high",
        uncertainty: "low"
      },
      ramp: {
        status: "available",
        label: "Reported Available",
        reports: 14,
        lastReported: "2026-09-20",
        evidence: "Wide outdoor brick ramps leading up to main entrance; inside piazza exhibits are fully step-free.",
        confidence: "high",
        uncertainty: "low"
      },
      lift: {
        status: "available",
        label: "Reported Available",
        reports: 18,
        lastReported: "2026-09-22",
        evidence: "Spacious passenger lifts serving all reading rooms, exhibition galleries, and auditorium.",
        confidence: "high",
        uncertainty: "low"
      },
      toilet: {
        status: "available",
        label: "Reported Available",
        reports: 15,
        lastReported: "2026-09-15",
        evidence: "Large accessible toilets on upper ground and lower ground floors with left- and right-hand transfer layouts.",
        confidence: "high",
        uncertainty: "low"
      },
      parking: {
        status: "unknown",
        label: "Not Reported",
        reports: 0,
        lastReported: null,
        evidence: "Public disabled parking bays not clearly identified on-site; pre-booking with security may be required.",
        confidence: "low",
        uncertainty: "high"
      },
      sensory: {
        status: "available",
        label: "Reported Available",
        reports: 4,
        lastReported: "2026-08-30",
        evidence: "Quiet study zones available in reading rooms. Induction loops in conference centre and information points.",
        confidence: "moderate",
        uncertainty: "medium"
      }
    },
    reports: [
      {
        id: "r8",
        user: "Community reporter",
        date: "2026-09-22",
        notes: "Excellent accessibility throughout. Staff at the visitor entrance were knowledgeable about accessible routes and motorized scooter loans.",
        features: { stepFree: "available", doorway: "available", lift: "available" }
      },
      {
        id: "r9",
        user: "Anonymous contributor",
        date: "2026-09-20",
        notes: "Large accessible toilets on ground floor and first floor. Hearing loop available at the information desk.",
        features: { toilet: "available", sensory: "available" }
      }
    ],
    confidence: "high",
    mapX: 0.28,
    mapY: 0.42
  },
  {
    id: "camden-market",
    name: "Camden Market",
    category: "restaurants",
    categoryLabel: "Market & Food",
    categoryEmoji: "🥘",
    address: "Camden Lock Place, London NW1 8AF",
    reportCount: 11,
    lastReported: "2026-10-01",
    verificationStatus: "needs-verification",
    missingCount: 2,
    features: {
      stepFree: {
        status: "available",
        label: "Reported Available",
        reports: 8,
        lastReported: "2026-10-01",
        evidence: "Chalk Farm Road and Camden High Street entrances are street-level. Note: historical cobblestones create significant vibration.",
        confidence: "moderate",
        uncertainty: "medium"
      },
      doorway: {
        status: "conflicting",
        label: "Conflicting Reports",
        reports: 6,
        lastReported: "2026-10-01",
        evidence: "Main entrance archway is wide and open, but several indoor horse tunnel boutique shops have narrow doorways (<70cm) with raised iron thresholds.",
        confidence: "moderate",
        uncertainty: "high"
      },
      ramp: {
        status: "conflicting",
        label: "Conflicting Reports",
        reports: 5,
        lastReported: "2026-10-01",
        evidence: "Ramp down to the canal lock waterside was reported closed for maintenance in September; recent visitor reported a temporary wooden ramp installed.",
        confidence: "moderate",
        uncertainty: "high"
      },
      lift: {
        status: "unavailable",
        label: "Reported Unavailable",
        reports: 6,
        lastReported: "2026-09-25",
        evidence: "Mezzanine railway arch stalls are accessible only via historic cast iron staircases; no platform lift found.",
        confidence: "moderate",
        uncertainty: "low"
      },
      toilet: {
        status: "unknown",
        label: "Not Reported",
        reports: 0,
        lastReported: null,
        evidence: "Public accessible toilets in the market area have conflicting signage; visitors reported standard stalls only.",
        confidence: "low",
        uncertainty: "high"
      },
      parking: {
        status: "unavailable",
        label: "Reported Unavailable",
        reports: 4,
        lastReported: "2026-09-20",
        evidence: "Strict pedestrian zone; nearest on-street pay-and-display bays are ~350m away on steep grade.",
        confidence: "moderate",
        uncertainty: "low"
      },
      sensory: {
        status: "unavailable",
        label: "Reported Unavailable",
        reports: 3,
        lastReported: "2026-09-15",
        evidence: "Extremely crowded on weekends, narrow lanes, heavy acoustic reflections, and intense food aromas.",
        confidence: "moderate",
        uncertainty: "low"
      }
    },
    reports: [
      {
        id: "r10",
        user: "Anonymous contributor",
        date: "2026-10-01",
        notes: "Main entrance is step-free but some inner areas have uneven cobblestones. Ramp access to the lock area is reported inconsistently — one report says it exists, another says it was removed for works.",
        features: { stepFree: "available", ramp: "conflicting", doorway: "conflicting" }
      },
      {
        id: "r11",
        user: "Community reporter",
        date: "2026-09-25",
        notes: "No lift available in the indoor market upper stalls section. Market has mixed terrain — some areas difficult for wheelchair users.",
        features: { lift: "unavailable" }
      },
      {
        id: "r12",
        user: "Anonymous contributor",
        date: "2026-09-20",
        notes: "Street parking nearby has no accessible bays that I could find. Could not locate an accessible toilet with radar lock.",
        features: { parking: "unavailable", toilet: "unknown" }
      }
    ],
    confidence: "low",
    mapX: 0.25,
    mapY: 0.22
  },
  {
    id: "st-pancras-international",
    name: "St Pancras International",
    category: "stations",
    categoryLabel: "Station & Transport",
    categoryEmoji: "🚉",
    address: "Euston Road, London N1C 4QP",
    reportCount: 41,
    lastReported: "2026-10-20",
    verificationStatus: "verified",
    missingCount: 0,
    features: {
      stepFree: {
        status: "available",
        label: "Reported Available",
        reports: 38,
        lastReported: "2026-10-20",
        evidence: "Step-free from street, Eurostar terminal, domestic platforms, and Thameslink lower levels.",
        confidence: "high",
        uncertainty: "low"
      },
      doorway: {
        status: "available",
        label: "Reported Available",
        reports: 34,
        lastReported: "2026-10-20",
        evidence: "Wide automatic sliding entrance doors (>140cm opening) at Midland Road, Pancras Road, and Euston Road entries.",
        confidence: "high",
        uncertainty: "low"
      },
      ramp: {
        status: "available",
        label: "Reported Available",
        reports: 32,
        lastReported: "2026-10-18",
        evidence: "Comprehensive ramp system linking concourses with tactile hazard warnings at top and bottom.",
        confidence: "high",
        uncertainty: "low"
      },
      lift: {
        status: "available",
        label: "Reported Available",
        reports: 40,
        lastReported: "2026-10-20",
        evidence: "Glass passenger lifts serving upper Eurostar departure lounge and all platforms. Staff assistance available 24/7.",
        confidence: "high",
        uncertainty: "low"
      },
      toilet: {
        status: "available",
        label: "Reported Available",
        reports: 30,
        lastReported: "2026-10-15",
        evidence: "Changing Places toilet with hoist, adult changing bench, and shower located at The Arcade lower level. Multiple accessible cubicles.",
        confidence: "high",
        uncertainty: "low"
      },
      parking: {
        status: "available",
        label: "Reported Available",
        reports: 20,
        lastReported: "2026-10-10",
        evidence: "Eurostar multi-storey car park on Pancras Road has 12 extra-wide Blue Badge bays adjacent to station lift lobby.",
        confidence: "high",
        uncertainty: "low"
      },
      sensory: {
        status: "needs-verification",
        label: "Needs Verification",
        reports: 4,
        lastReported: "2026-09-20",
        evidence: "Visual departure monitors with high contrast. Sensory calming area not confirmed outside Eurostar premium lounge.",
        confidence: "moderate",
        uncertainty: "medium"
      }
    },
    reports: [
      {
        id: "r13",
        user: "Community reporter",
        date: "2026-10-20",
        notes: "Comprehensive step-free access throughout. Assistance available from Eurostar special assistance team on request at meeting point A.",
        features: { stepFree: "available", doorway: "available", lift: "available" }
      },
      {
        id: "r14",
        user: "Anonymous contributor",
        date: "2026-10-15",
        notes: "Accessible toilets well signed and available on multiple levels. Blue badge parking in the adjacent car park is very convenient.",
        features: { toilet: "available", parking: "available" }
      }
    ],
    confidence: "high",
    mapX: 0.33,
    mapY: 0.30
  },
  {
    id: "tate-modern",
    name: "Tate Modern",
    category: "public",
    categoryLabel: "Gallery & Museum",
    categoryEmoji: "🎨",
    address: "Bankside, London SE1 9TG",
    reportCount: 22,
    lastReported: "2026-10-05",
    verificationStatus: "verified",
    missingCount: 1,
    features: {
      stepFree: {
        status: "available",
        label: "Reported Available",
        reports: 20,
        lastReported: "2026-10-05",
        evidence: "Main Turbine Hall entrance is accessed via gentle sloping ramp from Holland Street and Bankside riverside walk.",
        confidence: "high",
        uncertainty: "low"
      },
      doorway: {
        status: "available",
        label: "Reported Available",
        reports: 19,
        lastReported: "2026-10-05",
        evidence: "Large automatic push-button sliding doors with wide clearance (>150cm). Flat flush thresholds.",
        confidence: "high",
        uncertainty: "low"
      },
      ramp: {
        status: "available",
        label: "Reported Available",
        reports: 18,
        lastReported: "2026-10-03",
        evidence: "Iconic Turbine Hall grand ramp is shallow and wide with level rest landings every 10 meters.",
        confidence: "high",
        uncertainty: "low"
      },
      lift: {
        status: "available",
        label: "Reported Available",
        reports: 20,
        lastReported: "2026-10-05",
        evidence: "Large glass lifts in both Natalie Bell Building and Blavatnik Building connecting all 10 exhibition levels.",
        confidence: "high",
        uncertainty: "low"
      },
      toilet: {
        status: "available",
        label: "Reported Available",
        reports: 16,
        lastReported: "2026-09-28",
        evidence: "Accessible toilets on levels 0, 1, 2, 4, and Blavatnik level 1. Changing Places toilet on level 0 with ceiling track hoist.",
        confidence: "high",
        uncertainty: "low"
      },
      parking: {
        status: "unknown",
        label: "Not Reported",
        reports: 0,
        lastReported: null,
        evidence: "Limited disabled parking bays on Park Street requiring advance booking with Tate ticketing.",
        confidence: "low",
        uncertainty: "high"
      },
      sensory: {
        status: "available",
        label: "Reported Available",
        reports: 6,
        lastReported: "2026-09-15",
        evidence: "Tactile gallery displays with audio description guides. Quiet sensory rooms available on request at Level 0 information desk.",
        confidence: "high",
        uncertainty: "low"
      }
    },
    reports: [
      {
        id: "r15",
        user: "Anonymous contributor",
        date: "2026-10-05",
        notes: "Very accessible venue. All main galleries reachable by lift. Tactile guides and audio descriptions available for visually impaired visitors.",
        features: { stepFree: "available", doorway: "available", lift: "available", sensory: "available" }
      },
      {
        id: "r16",
        user: "Community reporter",
        date: "2026-09-28",
        notes: "Accessible toilets on multiple floors. Large and clean. Ramps at main entrance and riverside entrance make navigation effortless.",
        features: { toilet: "available", ramp: "available" }
      }
    ],
    confidence: "high",
    mapX: 0.58,
    mapY: 0.62
  },
  {
    id: "brixton-recreation-centre",
    name: "Brixton Recreation Centre",
    category: "public",
    categoryLabel: "Leisure & Sports",
    categoryEmoji: "🏊",
    address: "27 Brixton Station Road, London SW9 8QQ",
    reportCount: 5,
    lastReported: "2026-09-10",
    verificationStatus: "needs-verification",
    missingCount: 3,
    features: {
      stepFree: {
        status: "unknown",
        label: "Not Reported",
        reports: 1,
        lastReported: "2026-09-10",
        evidence: "Ground entrance has steps; alternative accessible side entrance requires buzzer notification.",
        confidence: "low",
        uncertainty: "high"
      },
      doorway: {
        status: "needs-verification",
        label: "Needs Verification",
        reports: 2,
        lastReported: "2026-09-10",
        evidence: "Main entrance has heavy double pull doors without automatic sensor; power-assisted button was reported non-functional in September.",
        confidence: "low",
        uncertainty: "high"
      },
      ramp: {
        status: "unknown",
        label: "Not Reported",
        reports: 1,
        lastReported: "2026-09-10",
        evidence: "Ramp status inside pool viewing area unconfirmed.",
        confidence: "low",
        uncertainty: "high"
      },
      lift: {
        status: "unavailable",
        label: "Reported Unavailable",
        reports: 3,
        lastReported: "2026-09-08",
        evidence: "Pool viewing gallery lift reported out of order during past 3 community visits. Ground pool hoists operational.",
        confidence: "moderate",
        uncertainty: "low"
      },
      toilet: {
        status: "unknown",
        label: "Not Reported",
        reports: 0,
        lastReported: null,
        evidence: "Accessible changing room with shower reported near pool deck, but public cubicle condition unverified.",
        confidence: "low",
        uncertainty: "high"
      },
      parking: {
        status: "unavailable",
        label: "Reported Unavailable",
        reports: 2,
        lastReported: "2026-09-05",
        evidence: "No dedicated centre car park. Street parking on Brixton Station Road is severely restricted.",
        confidence: "low",
        uncertainty: "medium"
      },
      sensory: {
        status: "unknown",
        label: "Not Reported",
        reports: 0,
        lastReported: null,
        evidence: "Quiet swimming sessions scheduled on Tuesday mornings, but general sensory guidance not provided.",
        confidence: "low",
        uncertainty: "high"
      }
    },
    reports: [
      {
        id: "r17",
        user: "Anonymous contributor",
        date: "2026-09-10",
        notes: "Limited information available. I could not find a working lift to upper studios during my visit. Uncertain about step-free route to the spectator gallery.",
        features: { lift: "unavailable", doorway: "needs-verification" }
      },
      {
        id: "r18",
        user: "Community reporter",
        date: "2026-09-05",
        notes: "No accessible parking bays visible nearby. Further community reports needed to verify pool access hoists.",
        features: { parking: "unavailable" }
      }
    ],
    confidence: "low",
    mapX: 0.42,
    mapY: 0.72
  },
  {
    id: "the-shard",
    name: "The Shard",
    category: "public",
    categoryLabel: "Attraction",
    categoryEmoji: "🏙️",
    address: "32 London Bridge Street, London SE1 9SG",
    reportCount: 16,
    lastReported: "2026-09-30",
    verificationStatus: "needs-verification",
    missingCount: 2,
    features: {
      stepFree: {
        status: "available",
        label: "Reported Available",
        reports: 14,
        lastReported: "2026-09-30",
        evidence: "Direct step-free connection from London Bridge Station upper concourse directly into the ticket lobby.",
        confidence: "high",
        uncertainty: "low"
      },
      doorway: {
        status: "available",
        label: "Reported Available",
        reports: 12,
        lastReported: "2026-09-30",
        evidence: "Automatic powered side pass doors adjacent to revolving entrance doors, managed by security.",
        confidence: "high",
        uncertainty: "low"
      },
      ramp: {
        status: "unknown",
        label: "Not Reported",
        reports: 2,
        lastReported: "2026-09-20",
        evidence: "Internal floors are largely level; ramp availability to open-air Level 72 viewing terrace unconfirmed.",
        confidence: "low",
        uncertainty: "high"
      },
      lift: {
        status: "available",
        label: "Reported Available",
        reports: 16,
        lastReported: "2026-09-30",
        evidence: "High-speed kaleidoscope lifts with video ceilings traveling to levels 68, 69, and 72. Wheelchair priority boarding.",
        confidence: "high",
        uncertainty: "low"
      },
      toilet: {
        status: "available",
        label: "Reported Available",
        reports: 12,
        lastReported: "2026-09-25",
        evidence: "Accessible unisex toilets with panoramic windows on Level 68 and main arrival level 1.",
        confidence: "high",
        uncertainty: "low"
      },
      parking: {
        status: "unknown",
        label: "Not Reported",
        reports: 0,
        lastReported: null,
        evidence: "No private car park; drop-off point at St Thomas Street requires concierge coordination.",
        confidence: "low",
        uncertainty: "high"
      },
      sensory: {
        status: "needs-verification",
        label: "Needs Verification",
        reports: 3,
        lastReported: "2026-09-15",
        evidence: "Lifts accelerate rapidly (6 meters/second) causing ear pressure changes. High reflectivity glass may cause sensory glare on sunny days.",
        confidence: "moderate",
        uncertainty: "medium"
      }
    },
    reports: [
      {
        id: "r19",
        user: "Anonymous contributor",
        date: "2026-09-30",
        notes: "Step-free access clearly available at the main entrance. Multiple high-speed lifts to viewing floors. Visited with a wheelchair user with no major issues.",
        features: { stepFree: "available", doorway: "available", lift: "available" }
      },
      {
        id: "r20",
        user: "Community reporter",
        date: "2026-09-25",
        notes: "Accessible toilets on the viewing floors. Could not confirm ramp availability at all open-air terrace entrances.",
        features: { toilet: "available", ramp: "unknown" }
      }
    ],
    confidence: "moderate",
    mapX: 0.60,
    mapY: 0.55
  }
];

// Community activity demo data (clearly labelled as demo/illustrative)
const ACTIVITY_FEED = [
  { id: "a1", text: "New report submitted for St Pancras International (Changing Places facility)", time: "2 hours ago", icon: "pin" },
  { id: "a2", text: "University College Hospital accessibility details updated", time: "5 hours ago", icon: "check" },
  { id: "a3", text: "Camden Market conflicting doorway report flagged for community review", time: "1 day ago", icon: "alert" }
];

// Category definitions
const CATEGORIES = [
  { id: "all",        label: "All Places",             emoji: "🗺️" },
  { id: "stations",   label: "Stations & Transport",   emoji: "🚉" },
  { id: "hospitals",  label: "Hospitals & Clinics",    emoji: "🏥" },
  { id: "public",     label: "Public Buildings",       emoji: "🏛️" },
  { id: "restaurants",label: "Restaurants & Cafés",    emoji: "🥘" },
  { id: "colleges",   label: "Colleges & Education",   emoji: "🎓" },
  { id: "parks",      label: "Parks & Outdoors",       emoji: "🌳" },
  { id: "hotels",     label: "Hotels & Accommodation", emoji: "🏨" }
];

// Feature definitions with doorway included
const FEATURES = [
  { id: "stepFree", label: "Step-free Access", icon: "stepfree",  ariaLabel: "Step-free access" },
  { id: "doorway",  label: "Entrance & Doors",  icon: "doorway",   ariaLabel: "Doorway and entrance access" },
  { id: "ramp",     label: "Ramp Available",    icon: "ramp",      ariaLabel: "Ramp available" },
  { id: "lift",     label: "Lift / Elevator",   icon: "lift",      ariaLabel: "Lift or elevator" },
  { id: "toilet",   label: "Accessible Toilet", icon: "toilet",    ariaLabel: "Accessible toilet" },
  { id: "parking",  label: "Accessible Parking",icon: "parking",   ariaLabel: "Accessible parking" },
  { id: "sensory",  label: "Sensory Friendly",  icon: "sensory",   ariaLabel: "Sensory-friendly facilities" }
];

// Helpers
function getRelativeTime(dateStr) {
  if (!dateStr) return "No recent reports";
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Reported today";
  if (diffDays === 1) return "Reported yesterday";
  if (diffDays < 7) return `Reported ${diffDays} days ago`;
  if (diffDays < 30) return `Reported ${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? "s" : ""} ago`;
  if (diffDays < 365) return `Reported ${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? "s" : ""} ago`;
  return `Reported ${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? "s" : ""} ago`;
}

function getStatusClass(status) {
  const map = {
    available:            "feature-status--available",
    unknown:              "feature-status--unknown",
    unavailable:          "feature-status--unavailable",
    conflicting:          "feature-status--conflicting",
    "needs-verification": "feature-status--conflicting"
  };
  return map[status] || "feature-status--unknown";
}

function getFeatureCardStatusClass(status) {
  const map = {
    available:            "status-available",
    unknown:              "status-unknown",
    unavailable:          "status-unavailable",
    conflicting:          "status-conflicting",
    "needs-verification": "status-conflicting"
  };
  return map[status] || "status-unknown";
}

function getVerificationBadgeClass(status) {
  const map = {
    "verified":           "badge-verified",
    "needs-verification": "badge-needs-verification",
    "outdated":           "badge-outdated"
  };
  return map[status] || "badge-muted";
}

function getVerificationLabel(status) {
  const map = {
    "verified":           "Community Verified",
    "needs-verification": "Needs Verification",
    "outdated":           "Outdated"
  };
  return map[status] || "Unknown";
}

function getFeatureLabel(featureId) {
  const f = FEATURES.find(f => f.id === featureId);
  return f ? f.label : featureId;
}

function getLocationById(id) {
  return LOCATIONS.find(loc => loc.id === id) || null;
}

// Load user-submitted reports from localStorage and merge with demo
function getLocalReports() {
  try {
    return JSON.parse(localStorage.getItem("accessable_reports") || "[]");
  } catch {
    return [];
  }
}

function saveLocalReport(report) {
  try {
    const reports = getLocalReports();
    reports.unshift(report);
    localStorage.setItem("accessable_reports", JSON.stringify(reports));
  } catch (e) {
    console.warn("localStorage write failed or not supported in this environment:", e);
  }
}




/**
 * AccessAble — Animations & Micro-interactions
 */

// Respect reduced-motion preference
const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia
  ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
  : false;

// ── Intersection Observer for scroll reveals ────────────────
function initScrollReveal() {
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
function initFeatureCardReveal() {
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
function initRipple() {
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
function initPageFade() {
  if (document.body && document.body.classList) {
    document.body.classList.add("page-fade-in");
  }
}

// ── Nav scroll effect ─────────────────────────────────────────
function initNavScroll() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const handler = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", handler, { passive: true });
  handler();
}

// ── Mobile menu ───────────────────────────────────────────────
function initMobileMenu() {
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
function showToast(message, type = "info", duration = 4000) {
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
function showSkeletons(container, count = 6) {
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


/**
 * AccessAble — Interactive Map Visualisation
 * High-performance Canvas map engine with glowing markers, animated pulses,
 * road and river vectors, and interactive tooltips.
 */



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

function initHeroMap(canvasId) {
  if (heroMapInstance) heroMapInstance.destroy();
  heroMapInstance = new AccessMap(canvasId, { interactiveNav: true });
  return heroMapInstance;
}

function initDiscoveryMap(canvasId, onSelect) {
  if (discoveryMapInstance) discoveryMapInstance.destroy();
  discoveryMapInstance = new AccessMap(canvasId, { onSelect });
  return discoveryMapInstance;
}

function updateDiscoveryMap(locations) {
  if (discoveryMapInstance) {
    discoveryMapInstance.setLocations(locations);
  }
}

function highlightDiscoveryMapMarker(locationId) {
  if (discoveryMapInstance) {
    discoveryMapInstance.highlightLocation(locationId);
  }
}

function destroyHeroMap() {
  if (heroMapInstance) heroMapInstance.destroy();
  if (discoveryMapInstance) discoveryMapInstance.destroy();
}


/**
 * AccessAble — Filters & Search Logic
 * Supports Grid, List, and Split Map & List view with synchronized Canvas map.
 */




let activeCategory = "all";
let activeFeatures = new Set();
let searchQuery = "";
let sortMode = "reports";
let viewMode = "grid"; // "grid" | "list" | "split"
let filteredLocations = [...LOCATIONS];
let discoveryMapInitialized = false;

function initFilters() {
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
function renderCards(locations) {
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


/**
 * AccessAble — Location Profile Page Logic
 * Features "The Accessibility Breakdown" signature interactive component.
 */




function initLocationPage() {
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


/**
 * AccessAble — Report Form Logic
 * Uses localStorage for persistence.
 * ⚠️ Reports are stored locally on this device only — not shared with other users.
 */




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

function initReportForm() {
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



// Expose on global
if (typeof global !== 'undefined') {
  global.LOCATIONS = LOCATIONS;
  global.CATEGORIES = CATEGORIES;
  global.FEATURES = FEATURES;
  global.buildLocationCard = buildLocationCard;
  global.initLocationPage = initLocationPage;
  global.initFilters = initFilters;
  global.initHeroMap = initHeroMap;
}

// Main app bootstrapping
function initApp() {
  const page = (typeof document !== 'undefined' && document.body) ? document.body.dataset.page : '';
  initPageFade();
  initNavScroll();
  initMobileMenu();
  initRipple();

  if (page === 'index') {
    initHeroMap('heroMap');
    initFilters();
    initScrollReveal();

    document.getElementById('heroExploreBtn')?.addEventListener('click', () => {
      document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (page === 'location') {
    initLocationPage();
    initScrollReveal();
  }

  if (page === 'report') {
    initReportForm();
    initScrollReveal();
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}

})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));