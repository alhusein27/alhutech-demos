import type { DemoContent } from "./types";

export const churchContent: DemoContent = {
  slug: "church",
  businessName: "Grace Covenant Chapel",
  tagline: "Adenta · Accra — A place to belong",
  location: "Adenta, Accra",
  phoneDisplay: "+233 30 211 2233",
  whatsapp: "233500000000",
  heroTitle: "Come as you are. Leave transformed.",
  heroSubtitle:
    "Join us this Sunday at Grace Covenant Chapel — heartfelt worship, a practical word, and a family waiting to welcome you.",
  ctaPrimary: "Plan Your Visit",
  ctaSecondary: "Service Times",
  ctaSecondaryHref: "#schedule",
  accent: { from: "#4F46E5", to: "#8B5CF6" },

  slides: [
    {
      image: "/images/church/hero.webp",
      kicker: "Adenta · Accra — A place to belong",
      headline: "Come as you are. Leave transformed.",
      subtext:
        "Join us this Sunday at Grace Covenant Chapel — heartfelt worship, a practical word, and a family waiting to welcome you.",
    },
    {
      image: "/images/church/showcase-1.webp",
      kicker: "Sundays 8:00am & 10:30am",
      headline: "Sunday Celebration Service",
      subtext: "Worship, the word and communion on 1st Sundays — with safe, joyful classes for the children.",
    },
    {
      image: "/images/church/showcase-2.webp",
      kicker: "For the whole family",
      headline: "Ministries for every age",
      subtext: "Ignite Youth, Women of Grace, Men of Valour — and a welfare team serving Adenta week in, week out.",
    },
  ],

  aboutKicker: "Welcome Home",
  aboutHeading: "A family, not just a congregation",
  aboutBody: [
    "Grace Covenant Chapel began in 2012 with 40 people in a classroom. Today over a thousand worshippers call this home — but we have kept the warmth of those early days.",
    "Whether it's your first time in church or your first time in years, there's a seat saved for you — and a team ready to make you feel at home.",
  ],
  aboutPoints: [
    "Children's church during every service",
    "Free counselling & prayer support",
    "Active community outreach in Adenta",
    "Translation in Twi & Ga on request",
  ],
  stats: [
    { value: 1200, suffix: "+", label: "Members" },
    { value: 15, label: "Ministries" },
    { value: 12, label: "Years of grace" },
  ],

  servicesKicker: "Ministries",
  servicesTitle: "Find your place",
  servicesSubtitle: "Whatever your age or season, there is a team waiting for you.",
  servicesNavLabel: "Ministries",
  services: [
    {
      title: "Children's Ministry",
      description: "Safe, joyful classes for ages 2–12 during every service.",
    },
    {
      title: "Ignite Youth",
      description: "Fridays 6pm — real talk, real fun, real faith for ages 13–25.",
    },
    {
      title: "Women of Grace",
      description: "Monthly fellowship, mentorship and outreach.",
    },
    {
      title: "Men of Valour",
      description: "Breakfast fellowships and community projects.",
    },
    {
      title: "Choir & Worship",
      description: "Lead the congregation in heartfelt worship.",
    },
    {
      title: "Welfare & Outreach",
      description: "Food bank, hospital visits and school support in Adenta.",
    },
  ],

  scheduleKicker: "Service Times",
  scheduleTitle: "Join us this week",
  scheduleRows: [
    { day: "SUN", title: "Sunday Celebration Service", detail: "8:00am & 10:30am — worship, word & communion (1st Sundays)" },
    { day: "WED", title: "Word & Communion Service", detail: "6:30pm — midweek recharge with teaching and prayer" },
    { day: "FRI", title: "Night of Worship", detail: "9:00pm, last Friday monthly — an evening of music and prayer" },
  ],

  eventsKicker: "Coming Up",
  eventsTitle: "Mark your calendar",
  events: [
    { date: "28", month: "NOV", title: "Community Food Drive", detail: "Sharing food parcels with 200 Adenta families — volunteers welcome." },
    { date: "06", month: "DEC", title: "Carols by Candlelight", detail: "Our annual Christmas celebration — invite a friend." },
    { date: "20", month: "DEC", title: "Crossover Night", detail: "Ring in the new year with worship, prayer and thanksgiving." },
  ],

  galleryTitle: "Life at Grace Covenant",
  galleryCaptions: ["Sunday celebration service", "Ignite Youth Friday gathering", "Adenta community outreach"],

  reviewsTitle: "Stories of grace",
  testimonials: [
    {
      name: "Efya Boateng",
      role: "Adenta",
      quote:
        "I walked in broken and found a family. The welcome team remembered my name on my second visit — I have never looked back.",
    },
    {
      name: "Kwame Adu",
      role: "Madina",
      quote: "The word is always practical — I leave every Sunday with something I can actually apply to my week.",
    },
    {
      name: "Ama Serwaa",
      role: "Adenta",
      quote: "My children beg to go to children's church. As a mother, knowing they are safe and happy means everything.",
    },
  ],

  contactHeading: "Plan your visit",
  contactLead: "Tell us you're coming and our welcome team will look out for you — no awkward first Sundays.",
  addressLines: ["Grace Covenant Chapel, Lakeside Road,", "Adenta — Accra"],
  hoursLines: ["Sundays: 8:00am & 10:30am", "Wednesdays: 6:30pm"],
  form: {
    title: "Plan your visit",
    subtitle: "Let us know you're coming — we'll save you a seat and meet you at the door.",
    buttonLabel: "Send via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send — nothing is stored on this site.",
    fields: [
      { label: "Full name", type: "text", placeholder: "e.g. Ama Mensah", required: true },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. 024 123 4567", required: true },
      {
        label: "Which service?",
        type: "select",
        required: true,
        options: ["Sunday 8:00am", "Sunday 10:30am", "Wednesday 6:30pm"],
      },
      { label: "Anything we should know?", type: "textarea", placeholder: "Kids joining? Need directions? Let us know." },
    ],
  },

  ctaBanner: {
    title: "New here?",
    subtitle: "Plan your first visit — our welcome team will meet you at the entrance.",
    buttonLabel: "Plan Your Visit",
  },

  pitch: "Church website with service times, ministries, events and a plan-your-visit flow.",
};
