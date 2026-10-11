import type { DemoContent } from "./types";

export const clinicContent: DemoContent = {
  slug: "clinic",
  businessName: "ClearView Dental Clinic",
  tagline: "East Legon · Accra",
  location: "East Legon, Accra",
  phoneDisplay: "+233 30 277 8899",
  whatsapp: "233500000000",
  heroTitle: "Dentistry without the dread.",
  heroSubtitle:
    "Modern, gentle dental care in East Legon — digital X-rays, quiet equipment, and dentists who explain everything before they begin.",
  ctaPrimary: "Book an Appointment",
  ctaSecondary: "Treatments & Prices",
  accent: { from: "#0E7490", to: "#22D3EE" },

  slides: [
    {
      image: "/images/clinic/hero.webp",
      kicker: "East Legon · Accra",
      headline: "Dentistry without the dread.",
      subtext:
        "Modern, gentle dental care in East Legon — digital X-rays, quiet equipment, and dentists who explain everything before they begin.",
    },
    {
      image: "/images/clinic/showcase-1.webp",
      kicker: "No surprises, ever",
      headline: "Check-up & Consultation — ₵150",
      subtext: "Full examination, digital X-ray review and a clear treatment plan — with payment plans available.",
    },
    {
      image: "/images/clinic/showcase-2.webp",
      kicker: "The confidence smile",
      headline: "Professional Whitening — ₵1,200",
      subtext: "Up to 8 shades brighter in one visit — gentle, comfortable, and done by real dentists.",
    },
  ],

  aboutKicker: "Why ClearView",
  aboutHeading: "Gentle care, modern equipment",
  aboutBody: [
    "ClearView Dental Clinic brings modern, gentle dentistry to East Legon. Digital X-rays, quiet equipment, and dentists who explain everything before they begin.",
    "Whether it's a routine clean or a full smile makeover, your comfort leads every decision we make.",
  ],
  aboutPoints: [
    "Painless-first, gentle approach",
    "Digital X-rays — less radiation",
    "Strict sterilisation protocols",
    "Evening & Saturday appointments",
  ],
  stats: [
    { value: 10, suffix: "+", label: "Years serving Accra" },
    { value: 8, suffix: "k+", label: "Happy patients" },
    { value: 4.9, decimals: 1, label: "Average rating" },
  ],

  servicesKicker: "Treatments & Prices",
  servicesTitle: "Honest pricing, gentle hands",
  servicesSubtitle: "Clear prices before we begin — no surprises, ever. Payment plans available.",
  servicesNavLabel: "Treatments",
  services: [
    {
      title: "Check-up & Consultation",
      description: "Full examination, digital X-ray review and a clear treatment plan.",
      price: "₵150",
      actionLabel: "Book this treatment",
    },
    {
      title: "Scaling & Polishing",
      description: "Remove tartar and stains for a fresh, healthy smile.",
      price: "₵350",
      actionLabel: "Book this treatment",
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening — up to 8 shades brighter in one visit.",
      price: "₵1,200",
      actionLabel: "Book this treatment",
    },
    {
      title: "Braces Consultation",
      description: "Orthodontic assessment with clear pricing and payment plans.",
      price: "₵200 consult",
      actionLabel: "Book this treatment",
    },
    {
      title: "Root Canal Treatment",
      description: "Save your tooth with gentle, single-visit endodontics.",
      price: "from ₵1,800",
      actionLabel: "Book this treatment",
    },
    {
      title: "Kids Dentistry",
      description: "Friendly first visits, fissure sealants and fluoride for little smiles.",
      price: "₵200",
      actionLabel: "Book this treatment",
    },
  ],

  galleryTitle: "Inside the clinic",
  galleryCaptions: ["Modern treatment suites", "Digital X-ray studio", "Our friendly care team"],

  reviewsTitle: "Patient stories",
  testimonials: [
    {
      name: "Ama Serwaa",
      role: "East Legon",
      quote:
        "I used to dread the dentist. The team explained everything and I genuinely felt no pain during my root canal.",
    },
    {
      name: "Yaw Mensah",
      role: "Cantonments",
      quote: "Booked on WhatsApp in the morning, whitened by afternoon. My wedding photos thank them.",
    },
    {
      name: "Efua Adu",
      role: "Osu",
      quote: "My 6-year-old actually asks when her next visit is. That tells you everything about this clinic.",
    },
  ],

  contactHeading: "Book your visit",
  contactLead: "Evening and Saturday slots fill fast — message us your preferred day and we'll confirm.",
  addressLines: ["7 Jungle Avenue, East Legon,", "Accra — Ghana"],
  hoursLines: ["Mon – Fri: 8:00am – 7:00pm", "Saturday: 9:00am – 2:00pm"],
  form: {
    title: "Book an appointment",
    subtitle: "Choose your treatment and preferred time — we'll confirm your slot.",
    buttonLabel: "Send Booking via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send — nothing is stored on this site.",
    fields: [
      { label: "Full name", type: "text", placeholder: "e.g. Ama Mensah", required: true },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. 024 123 4567", required: true },
      { label: "Preferred date", type: "date", required: true },
      {
        label: "Treatment",
        type: "select",
        required: true,
        options: [
          "Check-up & consultation",
          "Scaling & polishing",
          "Teeth whitening",
          "Braces consultation",
          "Kids dentistry",
          "Emergency care",
        ],
      },
      {
        label: "Time",
        type: "select",
        required: true,
        options: ["Morning (8am – 12pm)", "Afternoon (12pm – 4pm)", "Evening (4pm – 7pm)"],
      },
      { label: "Symptoms / notes", type: "textarea", placeholder: "Tell us what's bothering you" },
    ],
  },

  ctaBanner: {
    title: "Toothache can't wait?",
    subtitle: "Emergency slots are held every day — message us now and we'll fit you in.",
    buttonLabel: "Book an Appointment",
  },

  pitch: "Dental clinic with treatments & prices, gentle-care promise and WhatsApp appointments.",
};
