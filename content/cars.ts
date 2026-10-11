import type { DemoContent } from "./types";

export const carsContent: DemoContent = {
  slug: "cars",
  businessName: "Accra Auto Hub",
  tagline: "Abossey Okai · Accra",
  location: "Abossey Okai, Accra",
  phoneDisplay: "+233 24 499 8877",
  heroTitle: "No stories — just good cars.",
  heroSubtitle:
    "Inspected, serviced and warranted vehicles plus genuine spare parts — from Accra's most trusted auto yard.",
  ctaPrimary: "Browse Inventory",
  ctaSecondary: "WhatsApp Us",
  accent: { from: "#B91C1C", to: "#F87171" },

  slides: [
    {
      image: "/images/cars/hero.webp",
      video: "/videos/cars/hero.mp4",
      kicker: "Abossey Okai · Accra",
      headline: "No stories — just good cars.",
      subtext:
        "Inspected, serviced and warranted vehicles plus genuine spare parts — from Accra's most trusted auto yard.",
    },
    {
      image: "/images/cars/showcase-1.webp",
      kicker: "120-point inspected",
      headline: "Toyota RAV4 2019 — ₵385,000",
      subtext: "Every car listed passed our 120-point inspection — serviced, warranted and ready to drive away.",
    },
    {
      image: "/images/cars/showcase-2.webp",
      kicker: "Genuine parts & servicing",
      headline: "Spare Parts from ₵150",
      subtext: "Genuine spare parts for every make, plus hire purchase plans and a full-service workshop.",
    },
  ],

  aboutKicker: "Why Accra Auto Hub",
  aboutHeading: "Every car earns its price tag",
  aboutBody: [
    "Every vehicle at Accra Auto Hub passes a 120-point inspection by our own mechanics, gets a full service, and carries a 3-month engine & gearbox warranty. What we tell you is what you get.",
    "Hire purchase plans available, genuine spare parts with receipts, and after-sales support that actually answers.",
  ],
  aboutPoints: [
    "120-point inspection on every car",
    "3-month engine & gearbox warranty",
    "Hire purchase plans available",
    "Genuine spare parts with receipts",
  ],
  stats: [
    { value: 500, suffix: "+", label: "Cars sold" },
    { value: 120, suffix: "-point", label: "Inspection" },
    { value: 4.8, decimals: 1, label: "Customer rating" },
  ],

  servicesKicker: "More Than Cars",
  servicesTitle: "Full auto care",
  servicesSubtitle: "Sales, servicing and genuine parts — one yard, zero stories.",
  servicesNavLabel: "Services",
  services: [
    {
      title: "Vehicle Sales",
      description: "Inspected, serviced and warranted cars — with the full inspection report before you pay.",
    },
    {
      title: "Hire Purchase",
      description: "Flexible payment plans with clear terms — drive now, pay over time.",
    },
    {
      title: "Servicing & Repairs",
      description: "Our own workshop: servicing, diagnostics and repairs by certified mechanics.",
    },
    {
      title: "Genuine Spare Parts",
      description: "Brake pads, filters, belts, batteries and more — genuine parts with receipts.",
    },
  ],

  listingsKicker: "Current Inventory",
  listingsTitle: "Cars on the yard now",
  listingsSubtitle: "Filter by body type or sort by price — every car below passed our 120-point inspection.",
  listings: [
    {
      name: "Toyota RAV4 2019",
      type: "suv",
      typeLabel: "SUV",
      price: "₵385,000",
      priceNum: 385000,
      location: "Abossey Okai Yard",
      detail: "2019 · Petrol · Automatic · 68,000 km",
      tag: "Available",
    },
    {
      name: "Nissan Navara 2021",
      type: "pickup",
      typeLabel: "Pickup",
      price: "₵420,000",
      priceNum: 420000,
      location: "Abossey Okai Yard",
      detail: "2021 · Diesel · 4x4 · 45,000 km",
      tag: "Available",
    },
    {
      name: "Honda Accord 2020",
      type: "sedan",
      typeLabel: "Sedan",
      price: "₵295,000",
      priceNum: 295000,
      location: "Abossey Okai Yard",
      detail: "2020 · Petrol · Automatic · 72,000 km",
      tag: "Available",
    },
    {
      name: "Kia Sportage 2018",
      type: "suv",
      typeLabel: "SUV",
      price: "₵265,000",
      priceNum: 265000,
      location: "Abossey Okai Yard",
      detail: "2018 · Petrol · Automatic · 91,000 km",
      tag: "Available",
    },
    {
      name: "Toyota Corolla 2017",
      type: "sedan",
      typeLabel: "Sedan",
      price: "₵178,000",
      priceNum: 178000,
      location: "Abossey Okai Yard",
      detail: "2017 · Petrol · Automatic · 105,000 km",
      tag: "Available",
    },
    {
      name: "Genuine Spare Parts",
      type: "parts",
      typeLabel: "Parts",
      price: "from ₵150",
      priceNum: 150,
      location: "Parts Shop, Abossey Okai",
      detail: "Brake pads · Filters · Belts · Batteries",
      tag: "In Stock",
    },
  ],

  galleryTitle: "On the yard",
  galleryCaptions: ["Inspection bay — every car, 120 points", "Genuine parts counter", "Happy handover day"],

  reviewsTitle: "Drivers' stories",
  testimonials: [
    {
      name: "Kwame Adu",
      role: "Dansoman",
      quote:
        "Bought a 2019 RAV4 — the inspection report was honest about every scratch, and the warranty actually meant something.",
    },
    {
      name: "Ama Serwaa",
      role: "Tema",
      quote: "The hire purchase plan was clear and fair. No hidden charges, no stories — I'm recommending them to my whole office.",
    },
    {
      name: "Yaw Owusu",
      role: "Kasoa",
      quote: "Only place in Abossey Okai I'll buy parts. Genuine, with receipts, and they explain what your car actually needs.",
    },
  ],

  contactHeading: "Come see the cars",
  contactLead: "Walk the yard any day — or send the vehicle you're interested in and we'll hold a viewing.",
  addressLines: ["Plot 9, Abossey Okai Road,", "Accra — Ghana"],
  hoursLines: ["Mon – Sat: 8:00am – 6:00pm", "Sunday: 1:00pm – 5:00pm"],
  form: {
    title: "Enquire about a vehicle",
    subtitle: "Tell us which car caught your eye — we'll confirm availability and arrange a viewing.",
    buttonLabel: "Send Enquiry via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send — nothing is stored on this site.",
    fields: [
      { label: "Full name", type: "text", placeholder: "e.g. Ama Mensah", required: true },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. 024 123 4567", required: true },
      {
        label: "Vehicle of interest",
        type: "select",
        required: true,
        options: [
          "Toyota RAV4 2019 — ₵385,000",
          "Nissan Navara 2021 — ₵420,000",
          "Honda Accord 2020 — ₵295,000",
          "Kia Sportage 2018 — ₵265,000",
          "Toyota Corolla 2017 — ₵178,000",
          "Spare parts",
          "Something else",
        ],
      },
      { label: "Message", type: "textarea", placeholder: "Questions about condition, payment plans, trade-in…" },
    ],
  },

  ctaBanner: {
    title: "Seen a car you like?",
    subtitle: "Message us now — popular cars sell within days.",
    buttonLabel: "Enquire on WhatsApp",
  },

  pitch: "Car dealership with filterable inventory, hire-purchase info and parts shop.",
};
