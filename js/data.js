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

export {
  LOCATIONS, CATEGORIES, FEATURES, ACTIVITY_FEED, DEMO_DATA_DISCLAIMER,
  getRelativeTime, getStatusClass, getFeatureCardStatusClass,
  getVerificationBadgeClass, getVerificationLabel,
  getFeatureLabel, getLocationById,
  getLocalReports, saveLocalReport
};
