import type { DemoContent } from "./types";

export const schoolContent: DemoContent = {
  slug: "school",
  businessName: "Bright Future Academy",
  tagline: "Spintex · Accra — Crèche to JHS",
  location: "Spintex, Accra",
  phoneDisplay: "+233 30 333 4455",
  whatsapp: "233500000000",
  heroTitle: "Where bright futures begin.",
  heroSubtitle:
    "A nurturing, high-achieving school in Spintex — small classes, strong values, and results parents can see.",
  ctaPrimary: "Start Admission",
  ctaSecondary: "Our Programmes",
  accent: { from: "#0284C7", to: "#38BDF8" },

  slides: [
    {
      image: "/images/school/hero.webp",
      kicker: "Spintex · Accra — Crèche to JHS",
      headline: "Where bright futures begin.",
      subtext:
        "A nurturing, high-achieving school in Spintex — small classes, strong values, and results parents can see.",
    },
    {
      image: "/images/school/showcase-1.webp",
      kicker: "Crèche to JHS",
      headline: "One campus, one community",
      subtext: "Gentle crèche beginnings, phonics-first kindergarten, swimming, music and coding along the way.",
    },
    {
      image: "/images/school/showcase-2.webp",
      kicker: "Results parents can see",
      headline: "Focused BECE preparation",
      subtext: "Past-question drills, one-on-one mentoring and strong values at every level. Book a tour.",
    },
  ],

  aboutKicker: "Why Bright Future",
  aboutHeading: "Big results, small classes",
  aboutBody: [
    "Bright Future Academy is a private basic school in Spintex serving children from crèche through JHS. Our 1:15 teacher–pupil ratio means no child is invisible — every learner is known, challenged and celebrated.",
    "From phonics to BECE, we blend Ghana's curriculum with coding, sports and character formation — raising children ready for SHS and beyond.",
  ],
  aboutPoints: [
    "1:15 teacher–pupil ratio",
    "Coding & robotics from Primary 4",
    "Safe, CCTV-monitored campus",
    "School bus routes across Spintex & Teshie",
  ],
  stats: [
    { value: 950, suffix: "+", label: "Pupils" },
    { value: 15, prefix: "1:", label: "Teacher ratio" },
    { value: 98, suffix: "%", label: "BECE pass rate" },
  ],

  servicesKicker: "Programmes",
  servicesTitle: "From first steps to BECE",
  servicesSubtitle: "One campus, one community — from crèche all the way to JHS.",
  servicesNavLabel: "Programmes",
  services: [
    {
      title: "Crèche (6m – 2yrs)",
      description: "Gentle settling-in, sensory play, naps on schedule — with photo updates to parents daily.",
      category: "Early Years",
    },
    {
      title: "Kindergarten",
      description: "Phonics-first literacy, numeracy through play, and French & Twi exposure.",
      category: "Early Years",
    },
    {
      title: "Lower Primary",
      description: "Strong foundations in English, maths and science — plus swimming and music.",
      category: "Primary",
    },
    {
      title: "Upper Primary",
      description: "Coding, robotics club, inter-school competitions and leadership roles.",
      category: "Primary",
    },
    {
      title: "JHS",
      description: "Focused BECE preparation with past-question drills and one-on-one mentoring.",
      category: "Junior High",
    },
  ],

  stepsKicker: "Admissions",
  stepsTitle: "Enrolling is simple",
  steps: [
    { title: "Enquire", detail: "Send a WhatsApp message or call — our admissions team answers within a day." },
    { title: "Tour the campus", detail: "Visit on a Wednesday or Saturday morning and see classes in action." },
    { title: "Assessment", detail: "A friendly, age-appropriate assessment — no cramming needed." },
    { title: "Enrol", detail: "Complete forms, pick up uniforms and book lists. Welcome to the family!" },
  ],

  eventsKicker: "News & Events",
  eventsTitle: "Life at Bright Future",
  events: [
    { date: "14", month: "NOV", title: "PTA General Meeting", detail: "All parents invited — 10am at the school hall. Agenda: third-term plans." },
    { date: "28", month: "OCT", title: "Inter-Schools Debate Victory", detail: "Our JHS team beat 12 schools to lift the Spintex trophy. Well done!" },
    { date: "18", month: "DEC", title: "Carols & Awards Night", detail: "End-of-term celebration with pupil performances and prize-giving." },
  ],

  galleryTitle: "Campus life",
  galleryCaptions: ["Morning assembly, main courtyard", "Coding & robotics club", "Inter-schools debate champions"],

  reviewsTitle: "What parents say",
  testimonials: [
    {
      name: "Mrs. Adwoa Frimpong",
      role: "Parent, Spintex",
      quote:
        "My daughter joined in Primary 3 struggling with maths. Two terms later she topped her class. The teachers truly care.",
    },
    {
      name: "Mr. Kofi Boateng",
      role: "Parent, Teshie",
      quote: "The bus service alone changed our mornings. Safe pickup, on time, and the drivers know every child by name.",
    },
    {
      name: "Mrs. Efya Owusu",
      role: "Parent, Spintex",
      quote: "I get photo updates from crèche every day. As a first-time mum, that peace of mind is priceless.",
    },
  ],

  contactHeading: "Visit us",
  contactLead: "Tours run every Wednesday and Saturday morning — or send an enquiry and we'll arrange your visit.",
  addressLines: ["Plot 12, Coastal Estates Road,", "Spintex, Accra — Ghana"],
  hoursLines: ["School days: 7:30am – 3:30pm", "Office: Mon – Fri, 8:00am – 4:00pm"],
  form: {
    title: "Admission enquiry",
    subtitle: "Tell us about your child and we'll guide you through the next steps.",
    buttonLabel: "Send Enquiry via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send — nothing is stored on this site.",
    fields: [
      { label: "Parent / guardian name", type: "text", placeholder: "e.g. Ama Mensah", required: true },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. 024 123 4567", required: true },
      {
        label: "Class applying for",
        type: "select",
        required: true,
        options: ["Crèche", "Kindergarten", "Lower Primary", "Upper Primary", "JHS"],
      },
      { label: "Anything we should know?", type: "textarea", placeholder: "Child's age, current school, questions…" },
    ],
  },

  ctaBanner: {
    title: "Admissions open for next term",
    subtitle: "Limited places per class — book your campus tour this week.",
    buttonLabel: "Start Admission",
  },

  pitch: "Private school with programmes, admissions steps, fees guide and parent news.",
};
