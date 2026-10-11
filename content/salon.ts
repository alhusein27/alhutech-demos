import type { DemoContent } from "./types";

export const salonContent: DemoContent = {
  slug: "salon",
  businessName: "Glow Haven Beauty Studio",
  tagline: "East Legon · Accra",
  location: "East Legon, Accra",
  phoneDisplay: "+233 55 123 4567",
  heroTitle: "Look Stunning. Feel Unstoppable.",
  heroSubtitle:
    "Accra's home for flawless frontal installs, silk presses, braids, nails and glam makeup — all under one roof.",
  ctaPrimary: "Book on WhatsApp",
  ctaSecondary: "View Services",
  accent: { from: "#DB2777", to: "#F472B6" },

  slides: [
    {
      image: "/images/salon/hero.webp",
      video: "/videos/salon/hero.mp4",
      kicker: "East Legon · Accra",
      headline: "Look Stunning. Feel Unstoppable.",
      subtext:
        "Accra's home for flawless frontal installs, silk presses, braids, nails and glam makeup — all under one roof.",
    },
    {
      image: "/images/salon/showcase-1.webp",
      kicker: "Our best seller",
      headline: "Frontal Install — ₵350",
      subtext: "Melted, natural-looking frontal installs styled your way — wash & braid-down included.",
    },
    {
      image: "/images/salon/showcase-2.webp",
      kicker: "Walk in, glow out",
      headline: "Spa Pedicure & Full Glam",
      subtext: "Spa pedicures from ₵150, full glam makeup from ₵250 — transparent pricing, no surprises.",
    },
  ],

  aboutKicker: "Our Story",
  aboutHeading: "A little haven of glow in East Legon",
  aboutBody: [
    "Glow Haven started in 2019 with two styling chairs and one belief: every woman who sits in our chair should leave feeling like the best version of herself. Today our studio is East Legon's go-to for protective styles, luxury nails and event glam — with a team of stylists who treat your hair like their own.",
  ],
  aboutPoints: [
    "Certified stylists & licensed nail technicians",
    "Premium, hair-friendly products only",
    "Relaxed lounge, complimentary drinks & Wi-Fi",
  ],
  stats: [
    { value: 6, suffix: "+", label: "Years of glow" },
    { value: 4.9, decimals: 1, label: "Average rating" },
    { value: 3, suffix: "k+", label: "Happy clients" },
  ],

  servicesKicker: "Services & Prices",
  servicesTitle: "Everything you need, one price list",
  servicesSubtitle: "Transparent pricing, no surprises. Pay your way — cash, card or MTN MoMo accepted.",
  servicesNavLabel: "Services",
  services: [
    {
      title: "Frontal Install",
      description: "Melted, natural-looking frontal installation with styling of your choice. Includes wash & braid-down.",
      price: "₵350",
      actionLabel: "Book this service",
    },
    {
      title: "Silk Press",
      description: "Bone-straight, silky finish with heat protection and a deep-conditioning treatment included.",
      price: "₵180",
      actionLabel: "Book this service",
    },
    {
      title: "Knotless Braids",
      description: "Neat, lightweight knotless braids in any length. Gentle on edges, built to last 6–8 weeks.",
      price: "₵280",
      actionLabel: "Book this service",
    },
    {
      title: "Spa Pedicure",
      description: "Soak, exfoliation, massage and polish in our massage pedicure chairs. Pure relaxation.",
      price: "₵150",
      actionLabel: "Book this service",
    },
    {
      title: "Full Glam Makeup",
      description: "Flawless full-face glam for weddings, shoots and nights out. Lashes included.",
      price: "₵250",
      actionLabel: "Book this service",
    },
    {
      title: "Wig Revamp",
      description: "We bring tired wigs back to life — wash, deep condition, restyle and curl to look brand new.",
      price: "₵120",
      actionLabel: "Book this service",
    },
    {
      title: "Acrylic Nails",
      description: "Strong, shaped acrylics with gel polish — from classy nudes to bold art.",
      price: "₵200",
      actionLabel: "Book this service",
    },
    {
      title: "Wash & Deep Condition",
      description: "A proper reset for natural hair — clarifying wash, steam deep-condition and detangle.",
      price: "₵90",
      actionLabel: "Book this service",
    },
  ],

  galleryTitle: "Fresh from the studio",
  galleryCaptions: ["Signature cornrows", "Nude & gold nail art", "Bridal glam session"],

  reviewsTitle: "What our clients say",
  testimonials: [
    {
      name: "Ama Serwaa",
      role: "East Legon",
      quote:
        "My frontal has never looked this natural. I got compliments the whole week — people thought it was my own hair. I am never going anywhere else.",
    },
    {
      name: "Efya Mensimah",
      role: "Osu",
      quote:
        "Booked on WhatsApp in the morning and walked out by afternoon with the silkiest press I have ever had. The studio itself is so calming.",
    },
    {
      name: "Adwoa Owusu",
      role: "Cantonments",
      quote:
        "The pedicure chairs alone are worth the visit. My feet have never felt this soft, and paying with MoMo took ten seconds. Five stars, every time.",
    },
  ],

  contactHeading: "Find your glow",
  contactLead: "Walk-ins welcome — but booking ahead on WhatsApp guarantees your chair is waiting.",
  addressLines: ["14 Lagos Avenue, East Legon,", "Accra — Ghana"],
  hoursLines: ["Mon – Sat: 8:00am – 8:00pm", "Sunday: 12:00pm – 6:00pm"],
  form: {
    title: "Book an appointment",
    subtitle: "Send us your preferred service and day — we'll confirm your slot within minutes.",
    buttonLabel: "Send Booking via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send — nothing is stored on this site.",
    fields: [
      { label: "Full name", type: "text", placeholder: "e.g. Ama Mensah", required: true },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. 055 123 4567", required: true },
      {
        label: "Service",
        type: "select",
        required: true,
        options: [
          "Frontal Install",
          "Silk Press",
          "Knotless Braids",
          "Spa Pedicure",
          "Full Glam Makeup",
          "Acrylic Nails",
          "Wig Revamp",
          "Wash & Deep Condition",
        ],
      },
      { label: "Preferred date", type: "date", required: true },
      { label: "Notes", type: "textarea", placeholder: "Anything we should prepare for?" },
    ],
  },

  ctaBanner: {
    title: "Ready when you are",
    subtitle: "Your chair is waiting — message us and we'll confirm your slot within minutes.",
    buttonLabel: "Book on WhatsApp",
  },

  pitch: "Salon & spa with services + prices, WhatsApp booking, gallery and client reviews.",
};
