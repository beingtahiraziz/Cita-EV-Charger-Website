export interface ComparisonCol {
  name: string;
  protection: string;
  smartApp: boolean;
  mounting: string;
  rfid: boolean;
  touchScreen: boolean;
  compatibleAll: boolean;
  warranty: string;
  cable: string;
  datasheet: string;
  datasheetUrl?: string;
}

export interface SmartFeature {
  title: string;
  icon: string;
}

export interface ProductData {
  slug: string;
  name: string;
  category: "Residential" | "Commercial" | "DC Fast" | "Software";
  powerOutput: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  benefits: string[];
  targetApplications: string[];
  imageUrl: string;
  faqs: { q: string; a: string }[];
  datasheetUrl?: string;
  comparisonTable?: ComparisonCol[];
  smartFeatures?: SmartFeature[];
  heroImageUrl?: string;
  gallery?: { src: string; label: string }[];
}

const acFeatures: SmartFeature[] = [
  { title: "Access with mobile app via WiFi / 4G / Ethernet", icon: "smartphone" },
  { title: "Compatible with all Type 2 charging cables", icon: "plug" },
  { title: "RFID access for instant command", icon: "nfc" },
  { title: "MID-certified energy meter", icon: "zap" },
  { title: "Protection IP65 & IK10", icon: "shield" },
  { title: "OCPP 1.6 JSON integration", icon: "server" },
];

export const productsData: ProductData[] = [
  /* ================= RESIDENTIAL ================= */
  {
    slug: "smart-7",
    name: "Smart 7",
    category: "Residential",
    powerOutput: "7kW",
    heroHeadline: "7kW AC Compact EV Charging Station",
    heroSubheadline: "A compact, high-performance home and workplace charging solution with IP65 & IK10 ratings.",
    description: "The CITA Smart 7 is a compact and high-performance home and workplace charging solution. It delivers maximum power up to 7kW for single-phase installation and comes with an integrated Type 2 socket. The Smart 7's compact housing design is less than 12 inches and operates in extreme environments, from -30°C ice and snow to 55°C direct sunshine. It connects using WiFi to your network and comes with a three-year warranty.",
    benefits: [
      "Compact Sub-12-inch Design",
      "Up to 7kW Single-Phase Power",
      "Integrated Type 2 Socket",
      "Extreme -30°C to 55°C Operation",
      "Smart App Monitoring",
      "IP65 & IK10 Protection",
      "3-Year Warranty",
    ],
    targetApplications: ["Homes", "Villas", "Apartments", "Workplaces", "Garages", "Carports"],
    imageUrl: "/products/Smart 7.png",
    heroImageUrl: "/products/Side-view-7.png",
    gallery: [
      { src: "/images/Smart%207%20Ultra/13.jpg", label: "Product view" },
      { src: "/images/Smart%207%20Ultra/19.jpg", label: "Installed" },
      { src: "/images/Smart%207%20Ultra/31.jpg", label: "In use" },
    ],
    datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-7.pdf",
    smartFeatures: acFeatures,
    faqs: [
      { q: "What is the maximum power of the Smart 7?", a: "Up to 7kW on a single-phase supply, delivered through an integrated Type 2 socket." },
      { q: "Can it operate outdoors in extreme weather?", a: "Yes. It is rated for -30°C to 55°C and carries IP65 & IK10 protection for outdoor use." },
      { q: "What warranty is included?", a: "The Smart 7 comes with a 3-year warranty." },
    ],
    comparisonTable: [
      { name: "CITA SMART 7", protection: "IP65 & IK10", smartApp: true, mounting: "Wall mounted", rfid: true, touchScreen: false, compatibleAll: true, warranty: "3 Years", cable: "Type 2 socket / 5m cable", datasheet: "Download", datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-7.pdf" },
    ],
  },
  {
    slug: "smart-7-eco",
    name: "Smart 7 Eco",
    category: "Residential",
    powerOutput: "7.4kW",
    heroHeadline: "Efficient Everyday Home Charging",
    heroSubheadline: "Up to 7.4kW single-phase charging for homes and workplaces, built for durability.",
    description: "The CITA Smart 7 Eco is a dependable home and workplace charger delivering up to 7.4kW of power for single-phase installations, with an integrated Type 2 socket. Engineered for durability and flexibility, the Smart 7 Eco connects seamlessly to cloud platforms for remote monitoring and management. With IP65 & IK10 protection and an extendable warranty, it delivers long-term reliability and peace of mind.",
    benefits: [
      "Up to 7.4kW Single-Phase Power",
      "Integrated Type 2 Socket",
      "Cloud Platform Connectivity",
      "Durable Weatherproof Build",
      "Smart Remote Management",
      "IP65 & IK10 Protection",
      "Extendable Warranty",
    ],
    targetApplications: ["Homes", "Villas", "Apartments", "Workplaces", "Gated Communities"],
    imageUrl: "/products/Smart.png",
    heroImageUrl: "/products/Smart 7.png",
    gallery: [
      { src: "/images/Smart%207%20ECO/10.jpg", label: "Product view" },
      { src: "/images/Smart%207%20ECO/12.jpg", label: "Installed" },
      { src: "/images/Smart%207%20ECO/28.jpg", label: "In use" },
    ],
    smartFeatures: acFeatures,
    faqs: [
      { q: "How much power does the Smart 7 Eco deliver?", a: "Up to 7.4kW on a single-phase supply." },
      { q: "Does it connect to cloud platforms?", a: "Yes. The Smart 7 Eco connects seamlessly to cloud platforms for remote monitoring and management." },
      { q: "Is it suitable for outdoor installation?", a: "Yes, with IP65 & IK10 protection it is built for outdoor durability." },
    ],
    comparisonTable: [
      { name: "CITA SMART 7 ECO", protection: "IP65 & IK10", smartApp: true, mounting: "Wall mounted", rfid: true, touchScreen: false, compatibleAll: true, warranty: "3 Years (extendable)", cable: "Type 2 / 5m cable", datasheet: "Download" },
    ],
  },
  {
    slug: "smart-7-pro",
    name: "Smart 7 Pro",
    category: "Residential",
    powerOutput: "7kW",
    heroHeadline: "Premium Home & Workplace Charging",
    heroSubheadline: "Up to 7kW single-phase charging with a lockable Type 2 socket and cloud control.",
    description: "The CITA Smart 7 Pro is a compact yet powerful EV charger, ideal for home and workplace use. It delivers up to 7kW of power for single-phase installations and includes an integrated Type 2 socket with locking. Built for flexibility and long-term performance, the Smart 7 Pro connects effortlessly to cloud platforms and, with IP65 & IK10 protection and an extendable warranty, offers dependable performance, safety and peace of mind.",
    benefits: [
      "Up to 7kW Single-Phase Power",
      "Lockable Type 2 Socket",
      "Cloud Platform Control",
      "RCD Protection Built-In",
      "Smart Scheduling & Monitoring",
      "IP65 & IK10 Protection",
      "Extendable Warranty",
    ],
    targetApplications: ["Homes", "Villas", "Workplaces", "Apartments", "Small Businesses"],
    imageUrl: "/products/Smart 7.png",
    heroImageUrl: "/products/Side-view-7.png",
    gallery: [
      { src: "/images/Smart%207%20Pro/15.jpg", label: "Product view" },
      { src: "/images/Smart%207%20Pro/22.jpg", label: "Installed" },
      { src: "/images/Smart%207%20Pro/23.jpg", label: "In use" },
    ],
    smartFeatures: acFeatures,
    faqs: [
      { q: "Does the Smart 7 Pro have a lockable socket?", a: "Yes, it includes an integrated Type 2 charging socket with locking." },
      { q: "What safety protection is built in?", a: "It includes RCD protection along with IP65 & IK10 ratings and multiple safety mechanisms." },
      { q: "Can I control it remotely?", a: "Yes, it connects to cloud platforms for scheduling, monitoring and remote management." },
    ],
    comparisonTable: [
      { name: "CITA SMART 7 PRO", protection: "IP65 & IK10", smartApp: true, mounting: "Wall mounted", rfid: true, touchScreen: false, compatibleAll: true, warranty: "3 Years (extendable)", cable: "Lockable Type 2 socket", datasheet: "Download" },
    ],
  },
  /* ================= COMMERCIAL ================= */
  {
    slug: "smart-22",
    name: "Smart 22",
    category: "Commercial",
    powerOutput: "22kW",
    heroHeadline: "Commercial Charging Solution with IP65 Ratings",
    heroSubheadline: "Fast 22kW three-phase charging for commercial properties and workplaces.",
    description: "The CITA Smart 22 commercial charger provides fast charging to an electric vehicle using the charger's on-board three-phase supply. Designed with a Type 2 charging socket, the charger is compatible with either Type 1, Type 2 or GB/T cables. Compliant with industrial standards, the charger uses a built-in RCD for protection and delivers up to 22kW of power. It carries IP65 & IK10 ratings and comes with a three-year warranty.",
    benefits: [
      "22kW Three-Phase Power",
      "Type 2 Socket, Multi-Cable Compatible",
      "Built-In RCD Protection",
      "Smart User Authentication",
      "Remote Management & Monitoring",
      "IP65 & IK10 Protection",
      "3-Year Warranty",
    ],
    targetApplications: ["Corporate Offices", "Business Parks", "Hotels", "Shopping Centers", "Residential Towers", "Commercial Parking"],
    imageUrl: "/products/Smart-22-Transparent.png",
    heroImageUrl: "/products/Smart-22-Hero.png",
    gallery: [
      { src: "/images/Smart%2022%20Ultra/14.jpg", label: "Product view" },
      { src: "/images/Smart%2022%20Ultra/21.jpg", label: "Installed" },
      { src: "/images/Smart%2022%20Ultra/33.jpg", label: "In use" },
    ],
    datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-22.pdf",
    smartFeatures: acFeatures,
    faqs: [
      { q: "What power does the Smart 22 deliver?", a: "Up to 22kW using an on-board three-phase supply." },
      { q: "Which cables is it compatible with?", a: "It works with Type 1, Type 2 or GB/T cables through its Type 2 socket." },
      { q: "Is it certified for commercial use?", a: "Yes, it is IP65 & IK10 rated, uses a built-in RCD and carries a 3-year warranty." },
    ],
    comparisonTable: [
      { name: "CITA SMART 22", protection: "IP65 & IK10", smartApp: true, mounting: "Wall & pole", rfid: true, touchScreen: false, compatibleAll: true, warranty: "3 Years", cable: "Type 2 socket (Type 1/2/GB-T)", datasheet: "Download", datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-22.pdf" },
    ],
  },
  {
    slug: "smart-22-eco",
    name: "Smart 22 Eco",
    category: "Commercial",
    powerOutput: "22kW",
    heroHeadline: "High-Performance Compact Commercial Charging",
    heroSubheadline: "Up to 22kW three-phase charging for both workplace and home environments.",
    description: "The CITA Smart 22 Eco charger offers a high-performance, compact solution for both home and workplace EV charging needs. Delivering up to 22kW of power on three-phase installations, it combines intelligent connectivity with a durable, weatherproof design. Cloud and app integration allow operators to monitor usage and manage access, while IP65 & IK10 protection ensures reliable performance in demanding environments.",
    benefits: [
      "Up to 22kW Three-Phase Power",
      "Compact Commercial Design",
      "App & Cloud Integration",
      "RFID Access Control",
      "Energy Monitoring",
      "IP65 & IK10 Protection",
      "Extendable Warranty",
    ],
    targetApplications: ["Workplaces", "Retail", "Hospitality", "Residential Towers", "Business Parks"],
    imageUrl: "/products/Smart.png",
    heroImageUrl: "/products/Smart-22-Hero.png",
    gallery: [
      { src: "/images/Smart%2022%20ECO/2.jpg", label: "Product view" },
      { src: "/images/Smart%2022%20ECO/5.jpg", label: "Installed" },
      { src: "/images/Smart%2022%20ECO/18.jpg", label: "In use" },
    ],
    smartFeatures: acFeatures,
    faqs: [
      { q: "How much power does the Smart 22 Eco provide?", a: "Up to 22kW on a three-phase installation." },
      { q: "Is it suitable for both home and workplace?", a: "Yes, its compact high-performance design suits both home and workplace charging." },
      { q: "Does it support access control?", a: "Yes, with RFID authentication and app/cloud management." },
    ],
    comparisonTable: [
      { name: "CITA SMART 22 ECO", protection: "IP65 & IK10", smartApp: true, mounting: "Wall & pole", rfid: true, touchScreen: false, compatibleAll: true, warranty: "3 Years (extendable)", cable: "Type 2 / 5m cable", datasheet: "Download" },
    ],
  },
  {
    slug: "smart-22-pro",
    name: "Smart 22 Pro",
    category: "Commercial",
    powerOutput: "22kW",
    heroHeadline: "Premium Commercial 22kW Charging",
    heroSubheadline: "Up to 22kW three-phase charging with advanced smart management and security.",
    description: "The CITA Smart 22 Pro is a premium commercial charger delivering up to 22kW on three-phase installations. Built for professional deployments, it combines robust construction with advanced smart-management features including RFID access, energy metering, OCPP connectivity and full remote control. IP65 & IK10 rated, it is designed for reliable, high-utilisation charging across workplaces, retail and public sites.",
    benefits: [
      "Up to 22kW Three-Phase Power",
      "Advanced Smart Management",
      "RFID & App Access Control",
      "MID-Certified Metering",
      "OCPP Networked Charging",
      "IP65 & IK10 Protection",
      "Extendable Warranty",
    ],
    targetApplications: ["Corporate Offices", "Retail & Malls", "Hotels", "Public Parking", "Business Parks"],
    imageUrl: "/products/Smart-22-Transparent.png",
    heroImageUrl: "/products/Smart-22-Hero.png",
    gallery: [
      { src: "/images/Smart%2022%20Pro/16.jpg", label: "Product view" },
      { src: "/images/Smart%2022%20Pro/25.jpg", label: "Installed" },
      { src: "/images/Smart%2022%20Pro/27.jpg", label: "In use" },
    ],
    smartFeatures: acFeatures,
    faqs: [
      { q: "What makes the Smart 22 Pro different?", a: "It adds advanced smart-management, MID-certified metering and OCPP networking on top of 22kW three-phase charging." },
      { q: "Can it be networked across a site?", a: "Yes, via OCPP 1.6 for centralised management and billing." },
      { q: "Is it suitable for high-utilisation sites?", a: "Yes, its robust IP65 & IK10 build is designed for reliable, high-utilisation charging." },
    ],
    comparisonTable: [
      { name: "CITA SMART 22 PRO", protection: "IP65 & IK10", smartApp: true, mounting: "Wall & pole", rfid: true, touchScreen: true, compatibleAll: true, warranty: "3 Years (extendable)", cable: "Tethered Type 2, 5m", datasheet: "Download" },
    ],
  },
  {
    slug: "smart-44-gen-3",
    name: "Smart 44",
    category: "Commercial",
    powerOutput: "44kW (2x22kW)",
    heroHeadline: "2 x 22kW Mode 3 AC Charger",
    heroSubheadline: "44kW dual-vehicle commercial charging engineered for high-demand environments.",
    description: "The CITA Smart 44 is a 44kW AC commercial EV charger engineered for high-demand environments, including commercial fleets, public transport depots and workplace charging facilities. Built to industrial standards, it delivers reliable dual-vehicle charging with independent, fully isolated control and power circuits. Designed for scalability, multiple Smart 44 chargers can be networked at a single site with just one internet connection, making it ideal for public or commercial infrastructure projects. It operates from -30°C to 55°C for long-term peace of mind.",
    benefits: [
      "Charge 2 EVs Simultaneously",
      "2 x 22kW Mode 3 AC",
      "Fully Isolated Control & Power Circuits",
      "Networkable on One Connection",
      "7-inch Interactive Touchscreen",
      "IP65 & IK10 Protection",
      "-30°C to 55°C Operation",
    ],
    targetApplications: ["Commercial Fleets", "Public Transport Depots", "Workplaces", "Apartment Complexes", "Public Charging Stations"],
    imageUrl: "/products/New-44-Front.png",
    heroImageUrl: "/products/Urbanfox-44kw.png",
    gallery: [
      { src: "/products/New-44-Front.png", label: "Front view" },
      { src: "/products/Urbanfox-44kw.png", label: "Pedestal mount" },
      { src: "/products/Old-44-Front.png", label: "Dual sockets" },
    ],
    smartFeatures: [
      { title: "Access with mobile app via WiFi / 4G / Ethernet", icon: "smartphone" },
      { title: "Charge 2 EVs at once with up to 22kW AC each", icon: "activity" },
      { title: "7-inch interactive touch screen", icon: "smartphone" },
      { title: "RFID access for instant command", icon: "nfc" },
      { title: "Fully isolated control & power circuits", icon: "shield" },
      { title: "OCPP 1.6 JSON integration", icon: "server" },
    ],
    faqs: [
      { q: "How many EVs can the Smart 44 charge at once?", a: "Two, at up to 22kW per vehicle, with independent fully isolated circuits." },
      { q: "Can multiple units be networked?", a: "Yes. Multiple Smart 44 chargers can be networked at one site with a single internet connection." },
      { q: "What environments is it built for?", a: "High-demand commercial fleets, public transport depots and workplaces, operating from -30°C to 55°C." },
    ],
    comparisonTable: [
      { name: "CITA SMART 44", protection: "IP65 & IK10", smartApp: true, mounting: "Wall & pedestal", rfid: true, touchScreen: true, compatibleAll: true, warranty: "3 Years", cable: "2x Type 2 tethered, 5m", datasheet: "Download" },
    ],
  },
  /* ================= DC FAST ================= */
  {
    slug: "smart-dc-30",
    name: "Smart 30 DC",
    category: "DC Fast",
    powerOutput: "30kW DC",
    heroHeadline: "Compact 30kW DC Fast Charger",
    heroSubheadline: "Reliable DC fast charging for commercial and light public locations.",
    description: "The CITA Smart 30 DC is a compact DC fast charger delivering up to 30kW of output. It supports CCS2, CHAdeMO (IEC) or GB/T (20234.3) compatible electric vehicles and connects via 4G or Ethernet for remote monitoring and management. With over-current and residual current protection, a touchscreen interface and OCPP connectivity, it is an efficient DC charging solution for commercial sites and light public charging without complex infrastructure.",
    benefits: [
      "Up to 30kW DC Output",
      "CCS2 / CHAdeMO / GB-T Support",
      "4G & Ethernet Connectivity",
      "Over-Current & Residual Current Protection",
      "Touchscreen Interface",
      "OCPP Networked Charging",
      "Compact Footprint",
    ],
    targetApplications: ["Commercial Sites", "Fleet Depots", "Parking Facilities", "Retail Locations", "Light Public Charging"],
    imageUrl: "/products/DC-30.png",
    heroImageUrl: "/products/New-DC-2026-Design.png",
    gallery: [
      { src: "/products/DC-30.png", label: "Front view" },
      { src: "/products/New-DC-2026-Design.png", label: "2026 design" },
      { src: "/products/CITA-EV-DC-Charger.png", label: "DC charging" },
    ],
    smartFeatures: [
      { title: "Up to 30kW DC output", icon: "zap" },
      { title: "CCS2 / CHAdeMO / GB-T support", icon: "plug" },
      { title: "4G / Ethernet connectivity", icon: "wifi" },
      { title: "Over-current & residual current protection", icon: "alert-triangle" },
      { title: "Touchscreen user interface", icon: "smartphone" },
      { title: "OCPP integration", icon: "server" },
    ],
    faqs: [
      { q: "What is the Smart 30 DC output?", a: "Up to 30kW DC, suitable for compatible CCS2, CHAdeMO or GB/T vehicles." },
      { q: "How does it connect?", a: "Via 4G or Ethernet for remote monitoring, diagnostics and management." },
      { q: "What protection does it include?", a: "Over-current protection and residual current protection, with a durable outdoor-rated build." },
    ],
    comparisonTable: [
      { name: "CITA SMART 30 DC", protection: "IP54 & IK10", smartApp: true, mounting: "Floor / wall", rfid: true, touchScreen: true, compatibleAll: true, warranty: "2 Years", cable: "CCS2 tethered", datasheet: "Download" },
    ],
  },
  {
    slug: "smart-80-dc",
    name: "Smart 80 DC",
    category: "DC Fast",
    powerOutput: "80kW DC",
    heroHeadline: "80kW DC Fast Charger for High-Demand Sites",
    heroSubheadline: "Charge up to four EVs at once with new-generation 40kW power modules.",
    description: "The CITA Smart 80 DC Fast Charger is designed for fast, reliable EV charging in high-demand locations. Built with new-generation 40kW power modules, it delivers stable performance and smart power distribution while supporting simultaneous charging for up to four EVs (2× DC + 2× AC). This makes it a practical choice for commercial sites, fuel stations, fleet depots and public charging hubs that need high throughput and dependable uptime.",
    benefits: [
      "80kW DC Output",
      "New-Generation 40kW Power Modules",
      "Charge up to 4 EVs (2xDC + 2xAC)",
      "Smart Power Distribution",
      "Payment & Access Integration",
      "Robust Outdoor-Rated Build",
      "OCPP Networked Charging",
    ],
    targetApplications: ["Fuel Stations", "Commercial Charging Hubs", "Fleet Depots", "Motorway Service Areas", "Shopping Malls", "Government Projects"],
    imageUrl: "/products/New-DC-Pro.png",
    heroImageUrl: "/products/CITA-Smart-DC---60kW-to-180kW-DC---01.png",
    gallery: [
      { src: "/products/New-DC-Pro.png", label: "Front view" },
      { src: "/products/CITA-Smart-DC---60kW-to-180kW-DC---01.png", label: "High-power unit" },
      { src: "/products/New-DC-2026-Design-2.png", label: "Charging hub" },
    ],
    smartFeatures: [
      { title: "80kW DC output with 40kW power modules", icon: "zap" },
      { title: "Charge up to 4 EVs (2x DC + 2x AC)", icon: "activity" },
      { title: "Smart power distribution", icon: "sun" },
      { title: "Payment & RFID access integration", icon: "nfc" },
      { title: "4G / Ethernet connectivity", icon: "wifi" },
      { title: "OCPP integration", icon: "server" },
    ],
    faqs: [
      { q: "How many EVs can the Smart 80 DC charge at once?", a: "Up to four simultaneously - two DC and two AC outputs." },
      { q: "What power modules does it use?", a: "New-generation 40kW power modules for stable performance and smart power distribution." },
      { q: "Where is it best deployed?", a: "High-demand sites such as fuel stations, fleet depots and commercial charging hubs." },
    ],
    comparisonTable: [
      { name: "CITA SMART 80 DC", protection: "IP54 & IK10", smartApp: true, mounting: "Floor standing", rfid: true, touchScreen: true, compatibleAll: true, warranty: "2 Years", cable: "2x CCS2 + 2x Type 2", datasheet: "Download" },
    ],
  },
  {
    slug: "smart-dc-eco",
    name: "Smart DC Eco",
    category: "DC Fast",
    powerOutput: "80-160kW DC",
    heroHeadline: "CITA Smart DC Eco (80kW - 160kW)",
    heroSubheadline: "High-efficiency DC fast charging with 2 DC guns and 2 AC sockets for high-demand locations.",
    description: "The CITA Smart DC Eco is a high-efficiency DC fast charger available in 80kW, 120kW and 160kW ranges, built for highways, fleets, parking facilities and public charging hubs. It features two DC charging guns with built-in cable plus two AC Type 2 sockets (optional upgrade), enabling up to four EVs to charge at once with intelligent load balancing. With a 15-inch interactive touchscreen, retractable cables, RFID reader, POS terminal for direct payments, MID DC/AC metering, ISO 15118 Plug & Charge readiness and OCPP 2.0.1 support, it delivers speed, style and confidence for busy commercial sites.",
    benefits: [
      "Available in 80kW, 120kW & 160kW",
      "2 DC Guns + 2 AC Type 2 Sockets",
      "Charge up to 4 EVs at Once",
      "15-inch Interactive Touchscreen",
      "POS Terminal for Direct Payments",
      "ISO 15118 Plug & Charge Ready",
      "OCPP 2.0.1 & MID Metering",
    ],
    targetApplications: ["Highways", "Fleet Depots", "Parking Facilities", "Public Charging Hubs", "Commercial Properties", "Fuel Stations"],
    imageUrl: "https://citaevcharger.co.uk/wp-content/uploads/2026/02/New-DC-2026-Design-2-1.png",
    heroImageUrl: "https://citaevcharger.co.uk/wp-content/uploads/2026/02/New-DC-2026-Design-2-1.png",
    gallery: [
      { src: "https://citaevcharger.co.uk/wp-content/uploads/2026/02/New-DC-2026-Design-2-1.png", label: "Product view" },
      { src: "https://citaevcharger.co.uk/wp-content/uploads/2026/02/Screenshot-2026-02-17-at-6.53.15-PM.jpg", label: "Smart features" },
      { src: "https://citaevcharger.co.uk/wp-content/uploads/2026/02/Group-5019-1.png", label: "In use" },
    ],
    smartFeatures: [
      { title: "15-inch interactive touch screen", icon: "smartphone" },
      { title: "Retractable cables for tidy charging", icon: "plug" },
      { title: "RFID reader for instant access", icon: "nfc" },
      { title: "POS terminal (card, Apple Pay, Google Pay)", icon: "award" },
      { title: "Charge 4 EVs at once (2 DC + 2 AC)", icon: "activity" },
      { title: "OCPP 2.0.1 & ISO 15118 ready", icon: "server" },
    ],
    faqs: [
      { q: "How many EVs can the Smart DC Eco charge at once?", a: "Up to four - two DC fast-charging guns with smart load balancing plus two 22kW AC Type 2 charging points." },
      { q: "What connector types does it support?", a: "CCS2, CHAdeMO and GB/T for DC fast charging, plus AC Type 2 sockets for standard charging." },
      { q: "What warranty is included?", a: "A standard 2-year warranty with extendable options, including access to CITA EV's technical support team." },
    ],
    comparisonTable: [
      { name: "CITA SMART DC ECO", protection: "IP54 & IK10", smartApp: true, mounting: "Floor standing", rfid: true, touchScreen: true, compatibleAll: true, warranty: "2 Years (extendable)", cable: "2x DC guns + 2x AC Type 2", datasheet: "Download" },
    ],
  },
  {
    slug: "smart-dc-pro",
    name: "Smart DC Pro",
    category: "DC Fast",
    powerOutput: "200-480kW DC",
    heroHeadline: "CITA Smart DC Pro (200kW - 480kW)",
    heroSubheadline: "Superfast DC charging with dual DC guns, dual AC sockets and an upgradable 42-inch advertising display.",
    description: "The CITA Smart DC Pro is a superfast DC charger available in 200kW to 480kW ranges (200, 240, 280, 320, 360, 400, 440 and 480kW). It features dual DC guns (CCS2/CCS1/CHAdeMO/GB-T), dual AC Type 2 sockets and a 15-inch default HMI screen upgradable to a 42-inch advertising display, letting Charge Point Operators create an additional revenue stream. Designed for high-demand public infrastructure, it charges up to four EVs simultaneously with smart load balancing, RFID authentication, POS contactless payments, ambient LED lighting and full remote management through CITA CPMS.",
    benefits: [
      "Available 200kW to 480kW",
      "Dual DC Guns + Dual AC Sockets",
      "Charge up to 4 EVs at Once",
      "15-inch HMI, Upgradable to 42-inch Ad Display",
      "POS Contactless Payments",
      "RFID & Smart Load Balancing",
      "Managed via CITA CPMS",
    ],
    targetApplications: ["Highway Charging Hubs", "Fuel Stations", "Fleet Depots", "Public Infrastructure", "Motorway Services", "Commercial Sites"],
    imageUrl: "https://citaevcharger.co.uk/wp-content/uploads/2026/02/New-DC-Pro.png",
    heroImageUrl: "https://citaevcharger.co.uk/wp-content/uploads/2026/02/New-DC-Pro.png",
    gallery: [
      { src: "https://citaevcharger.co.uk/wp-content/uploads/2026/02/New-DC-Pro.png", label: "Product view" },
      { src: "https://citaevcharger.co.uk/wp-content/uploads/2026/02/ChatGPT-Image-Feb-10-2026-02_40_40-PM-1024x537.png", label: "Charging hub" },
      { src: "https://citaevcharger.co.uk/wp-content/uploads/2026/02/DC-10-in-W.jpg", label: "Display detail" },
    ],
    smartFeatures: [
      { title: "15-inch HMI upgradable to 42-inch ad display", icon: "smartphone" },
      { title: "Retractable cables for tidy charging", icon: "plug" },
      { title: "RFID reader for instant access", icon: "nfc" },
      { title: "POS terminal (card, Apple Pay, Google Pay)", icon: "award" },
      { title: "Charge 4 EVs at once (2 DC + 2 AC)", icon: "activity" },
      { title: "Remote management via CITA CPMS", icon: "server" },
    ],
    faqs: [
      { q: "What power ranges does the Smart DC Pro offer?", a: "200, 240, 280, 320, 360, 400, 440 and 480kW, with dual DC guns and dual AC Type 2 sockets." },
      { q: "Does it support advertising displays?", a: "Yes. The 15-inch HMI is upgradable to a 42-inch outdoor-rated advertising display for additional CPO revenue." },
      { q: "What payment options are supported?", a: "A built-in POS terminal accepts credit cards, Apple Pay and Google Pay, alongside RFID authentication." },
    ],
    comparisonTable: [
      { name: "CITA SMART DC PRO", protection: "IP54 & IK10", smartApp: true, mounting: "Floor standing", rfid: true, touchScreen: true, compatibleAll: true, warranty: "2 Years (extendable)", cable: "2x DC guns + 2x AC Type 2", datasheet: "Download" },
    ],
  },
  /* ================= SOFTWARE ================= */
  {
    slug: "cita-ev-app",
    name: "CITA EV App",
    category: "Software",
    powerOutput: "Mobile App",
    heroHeadline: "Your EV Charging Companion",
    heroSubheadline: "Locate stations, schedule sessions and monitor charging from your phone.",
    description: "Take control of your EV charging with the CITA EV App. Locate charging stations, start and schedule charging sessions, monitor real-time energy usage and optimise efficiency - all from your phone. Available for iOS and Android, the app connects seamlessly with CITA home EV chargers for a simple, smart and safe charging experience.",
    benefits: [
      "Locate Charging Stations",
      "Start & Schedule Sessions",
      "Real-Time Monitoring",
      "Energy Usage Analytics",
      "Remote Control",
      "iOS & Android",
      "Works with CITA Home Chargers",
    ],
    targetApplications: ["Home EV Owners", "Apartment Residents", "Workplace Users", "Fleet Drivers"],
    imageUrl: "https://citaevcharger.com.pk/wp-content/uploads/2025/12/smart-ev-app-solutions-for-all-chargers.png",
    faqs: [
      { q: "Which chargers work with the CITA EV App?", a: "The app works seamlessly with CITA home EV chargers for monitoring and control." },
      { q: "Is the app available on iOS and Android?", a: "Yes, it is available on both the App Store and Google Play." },
      { q: "What can I do with the app?", a: "Locate stations, start and schedule charging, monitor usage and optimise energy efficiency." },
    ],
    smartFeatures: [
      { title: "Locate charging stations", icon: "smartphone" },
      { title: "Start & schedule sessions", icon: "activity" },
      { title: "Real-time charging monitoring", icon: "zap" },
      { title: "Energy usage analytics", icon: "server" },
      { title: "Remote start/stop control", icon: "wifi" },
      { title: "Available on iOS & Android", icon: "plug" },
    ],
  },
  {
    slug: "cita-cpms",
    name: "CITA CPMS",
    category: "Software",
    powerOutput: "Web Platform",
    heroHeadline: "Charge Point Management System",
    heroSubheadline: "Monitor, control and scale every charger from one intelligent dashboard.",
    description: "CITA CPMS (Charge Point Management System) is a powerful platform for commercial, fleet and public charging operators. Manage multiple chargers across locations from one central dashboard - monitor sessions, energy data and charger status in real time, control user access and RFID cards, handle billing and optimise performance. Fully compatible with all CITA AC and DC chargers, CPMS scales EV charging operations effortlessly.",
    benefits: [
      "Central Multi-Charger Dashboard",
      "Real-Time Session Monitoring",
      "User & RFID Access Control",
      "Energy & Usage Analytics",
      "Billing & Revenue Management",
      "Manages Both AC & DC",
      "Scalable Across Locations",
    ],
    targetApplications: ["Offices", "Residential Communities", "Fleet Operators", "Public Charging Networks", "Retail & Hospitality", "Government Projects"],
    imageUrl: "https://citaevcharger.com.pk/wp-content/uploads/2026/01/CPMS@2x.png",
    faqs: [
      { q: "Does CPMS support multiple chargers at one location?", a: "Yes, it manages multiple chargers from one central dashboard, ideal for offices, communities, fleets and public sites." },
      { q: "Can I control user access?", a: "Yes, administrators can assign permissions, manage RFID cards and track charging sessions." },
      { q: "Does it manage both AC and DC chargers?", a: "Yes, CPMS manages both AC and DC chargers from a single system." },
    ],
    smartFeatures: [
      { title: "Central multi-charger dashboard", icon: "server" },
      { title: "Real-time session monitoring", icon: "activity" },
      { title: "User & RFID access control", icon: "nfc" },
      { title: "Energy & usage analytics", icon: "zap" },
      { title: "Billing & revenue management", icon: "award" },
      { title: "Manages both AC & DC chargers", icon: "plug" },
    ],
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return productsData.find((p) => p.slug === slug);
}
