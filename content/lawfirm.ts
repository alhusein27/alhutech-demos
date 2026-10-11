import type { DemoContent } from "./types";

export const lawfirmContent: DemoContent = {
  slug: "lawfirm",
  businessName: "Asante & Owusu Legal",
  tagline: "Ridge · Accra — Est. 2008",
  location: "Ridge, Accra",
  phoneDisplay: "+233 30 266 5544",
  heroTitle: "Counsel you can confide in.",
  heroSubtitle:
    "A full-service Ghanaian law firm in Ridge, Accra — guiding individuals, families and businesses through their most important matters for nearly two decades.",
  ctaPrimary: "Request Consultation",
  ctaSecondary: "Practice Areas",
  accent: { from: "#1E293B", to: "#64748B" },

  slides: [
    {
      image: "/images/lawfirm/hero.webp",
      kicker: "Ridge · Accra — Est. 2008",
      headline: "Counsel you can confide in.",
      subtext:
        "A full-service Ghanaian law firm in Ridge, Accra — guiding individuals, families and businesses through their most important matters for nearly two decades.",
    },
    {
      image: "/images/lawfirm/showcase-1.webp",
      kicker: "Verified before you pay",
      headline: "Property & Conveyancing",
      subtext: "Title searches, land registration and conveyancing — every detail verified before your money moves.",
    },
    {
      image: "/images/lawfirm/showcase-2.webp",
      kicker: "When it matters most",
      headline: "Litigation & Disputes",
      subtext: "Fearless representation in court, arbitration and negotiated settlements. Request a consultation.",
    },
  ],

  aboutKicker: "The Firm",
  aboutHeading: "Nearly two decades at the Bar",
  aboutBody: [
    "Asante & Owusu Legal is a full-service Ghanaian law firm in Ridge, Accra. For nearly two decades we have guided individuals, families and businesses through their most important matters — with discretion, diligence and plain-spoken advice.",
    "From company formation to courtroom advocacy, one partner oversees your matter from first call to final resolution.",
  ],
  aboutPoints: [
    "First consultation free for individuals",
    "Fees agreed in writing, upfront",
    "English, Twi & Ga spoken",
    "Strict client confidentiality",
  ],
  stats: [
    { value: 18, suffix: "+", label: "Years at the Bar" },
    { value: 900, suffix: "+", label: "Matters handled" },
    { value: 4.9, decimals: 1, label: "Client rating" },
  ],

  servicesKicker: "Practice Areas",
  servicesTitle: "How we can help",
  servicesSubtitle: "Focused expertise across the areas of law that matter most to our clients.",
  servicesNavLabel: "Practice Areas",
  services: [
    {
      title: "Corporate & Commercial",
      description: "Company formation, contracts, compliance and M&A support for growing businesses.",
      actionLabel: "Discuss your matter",
    },
    {
      title: "Property & Conveyancing",
      description: "Title searches, land registration and conveyancing — verified before you pay.",
      actionLabel: "Discuss your matter",
    },
    {
      title: "Litigation & Disputes",
      description: "Fearless representation in court, arbitration and negotiated settlements.",
      actionLabel: "Discuss your matter",
    },
    {
      title: "Family & Succession",
      description: "Wills, probate, custody and divorce handled with sensitivity and discretion.",
      actionLabel: "Discuss your matter",
    },
    {
      title: "Immigration",
      description: "Work permits, residence and citizenship applications done right the first time.",
      actionLabel: "Discuss your matter",
    },
    {
      title: "Employment",
      description: "Contracts, terminations and workplace disputes for employers and employees.",
      actionLabel: "Discuss your matter",
    },
  ],

  galleryTitle: "The chambers",
  galleryCaptions: ["Reception, Heritage House", "Our law library", "Partners' consultation room"],

  reviewsTitle: "Client confidence",
  testimonials: [
    {
      name: "Mr. Yaw Frimpong",
      role: "East Legon",
      quote:
        "They handled my land title registration flawlessly — every search, every stamp, no stories. I recommend them to everyone.",
    },
    {
      name: "Mrs. Akosua Dapaah",
      role: "Airport Residential",
      quote: "During a difficult family matter they were firm, kind and completely discreet. Worth every pesewa.",
    },
    {
      name: "Kweku Annan",
      role: "CEO, Accra",
      quote: "Our company's retainer firm for five years. Contracts, compliance, disputes — handled before they become problems.",
    },
  ],

  contactHeading: "Request a consultation",
  contactLead: "First consultation is free for individuals. Everything you share is strictly confidential.",
  addressLines: ["4th Floor, Heritage House,", "Ridge, Accra — Ghana"],
  hoursLines: ["Mon – Fri: 8:30am – 5:30pm", "By appointment on Saturdays"],
  form: {
    title: "Request a consultation",
    subtitle: "Briefly describe your matter — a lawyer will respond within one business day.",
    buttonLabel: "Send Request via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send — nothing is stored on this site.",
    fields: [
      { label: "Full name", type: "text", placeholder: "e.g. Ama Mensah", required: true },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. 024 123 4567", required: true },
      {
        label: "Area of law",
        type: "select",
        required: true,
        options: [
          "Corporate & commercial",
          "Property & conveyancing",
          "Litigation & disputes",
          "Family & succession",
          "Immigration",
          "Employment",
          "Other",
        ],
      },
      { label: "Brief description", type: "textarea", placeholder: "Outline your matter in a few sentences", required: true },
    ],
  },

  ctaBanner: {
    title: "Facing a legal matter?",
    subtitle: "Don't wait until it's urgent — early advice saves time, money and stress.",
    buttonLabel: "Request Consultation",
  },

  pitch: "Law firm with practice areas, lawyer credibility and confidential consultation intake.",
};
