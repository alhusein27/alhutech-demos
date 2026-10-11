import type { DemoContent } from "./types";

export const realestateContent: DemoContent = {
  slug: "realestate",
  businessName: "GoldCoast Homes Realty",
  tagline: "Cantonments · Accra",
  location: "Cantonments, Accra",
  phoneDisplay: "+233 30 244 5566",
  heroTitle: "Find a place you'll love to live.",
  heroSubtitle:
    "Verified apartments, houses, land and office space across Accra — with agents who actually pick up the phone.",
  ctaPrimary: "Browse Listings",
  ctaSecondary: "Talk to an Agent",
  accent: { from: "#0D9488", to: "#34D399" },

  slides: [
    {
      image: "/images/realestate/hero.webp",
      video: "/videos/realestate/hero.mp4",
      kicker: "Cantonments · Accra",
      headline: "Find a place you'll love to live.",
      subtext:
        "Verified apartments, houses, land and office space across Accra — with agents who actually pick up the phone.",
    },
    {
      image: "/images/realestate/showcase-1.webp",
      kicker: "Verified & inspected",
      headline: "4-Bedroom Detached House — ₵3,800,000",
      subtext: "Every listing is physically inspected before it goes live. Buy, rent or sell with confidence.",
    },
    {
      image: "/images/realestate/showcase-2.webp",
      kicker: "Land & rentals too",
      headline: "Half Plot, Titled Land — ₵850,000",
      subtext: "Title searches and land verification before you pay — plus diaspora services for buyers abroad.",
    },
  ],

  aboutKicker: "Why GoldCoast",
  aboutHeading: "Accra property, without the stories",
  aboutBody: [
    "Buying or renting in Accra should not feel like a gamble. Every GoldCoast Homes listing is physically inspected, ownership-verified, and priced against real market data.",
    "From your first viewing to the final signature, one dedicated agent walks the whole journey with you.",
  ],
  aboutPoints: [
    "Every listing physically inspected",
    "Ownership verified at the Lands Commission",
    "In-house legal document review",
    "Diaspora purchase support",
  ],
  stats: [
    { value: 350, suffix: "+", label: "Deals closed" },
    { value: 120, prefix: "GH₵", suffix: "M+", label: "Property transacted" },
    { value: 4.9, decimals: 1, label: "Client rating" },
  ],

  servicesKicker: "Our Services",
  servicesTitle: "More than listings",
  servicesSubtitle: "Full-service support for buyers, sellers, landlords and tenants.",
  servicesNavLabel: "Services",
  services: [
    {
      title: "Buy & Sell",
      description: "Verified listings, honest pricing and negotiation handled for you end to end.",
    },
    {
      title: "Rentals & Management",
      description: "Tenant placement, rent collection and property management you don't have to chase.",
    },
    {
      title: "Land Verification",
      description: "Title searches and Lands Commission verification before you pay a pesewa.",
    },
    {
      title: "Diaspora Services",
      description: "Video viewings, trusted handover and full documentation for Ghanaians abroad.",
    },
  ],

  listingsKicker: "Featured Listings",
  listingsTitle: "On the market now",
  listingsSubtitle: "Filter by type or sort by price — every listing below has been physically inspected.",
  listings: [
    {
      name: "2-Bedroom Apartment",
      type: "apartment",
      typeLabel: "Apartment",
      price: "₵4,500 /month",
      priceNum: 4500,
      location: "East Legon, Accra",
      detail: "2 beds · 2 baths · furnished",
      tag: "For Rent",
    },
    {
      name: "4-Bedroom Detached House",
      type: "house",
      typeLabel: "House",
      price: "₵3,800,000",
      priceNum: 3800000,
      location: "Airport Residential, Accra",
      detail: "4 beds · 5 baths · boys' quarters",
      tag: "For Sale",
    },
    {
      name: "Half Plot — Titled Land",
      type: "land",
      typeLabel: "Land",
      price: "₵850,000",
      priceNum: 850000,
      location: "Tema, Community 25",
      detail: "Registered title · walled",
      tag: "For Sale",
    },
    {
      name: "3-Bedroom Townhouse",
      type: "house",
      typeLabel: "House",
      price: "₵2,100,000",
      priceNum: 2100000,
      location: "Spintex, Accra",
      detail: "3 beds · 3.5 baths · gated estate",
      tag: "For Sale",
    },
    {
      name: "120sqm Office Space",
      type: "commercial",
      typeLabel: "Commercial",
      price: "₵14,000 /month",
      priceNum: 14000,
      location: "Osu, Accra",
      detail: "Open plan · parking · backup power",
      tag: "For Rent",
    },
    {
      name: "1-Bedroom Studio",
      type: "apartment",
      typeLabel: "Apartment",
      price: "₵3,200 /month",
      priceNum: 3200,
      location: "Cantonments, Accra",
      detail: "1 bed · 1 bath · serviced",
      tag: "For Rent",
    },
  ],

  galleryTitle: "Recent handovers",
  galleryCaptions: ["Airport Residential family home", "East Legon rental handover", "Tema land title transfer"],

  reviewsTitle: "Client stories",
  testimonials: [
    {
      name: "Nana Ama Serwaa",
      role: "Spintex",
      quote:
        "They found us a 3-bedroom in Spintex within two weeks — and handled all the tenancy paperwork. No stories, just results.",
    },
    {
      name: "Kwabena Osei",
      role: "London, UK",
      quote:
        "Bought my land from London with video viewings and full title verification. I never once worried I'd been scammed.",
    },
    {
      name: "Efua Mensah",
      role: "Cantonments",
      quote: "Sold my apartment above asking price in three weeks. Their pricing advice and photos made all the difference.",
    },
  ],

  contactHeading: "Talk to an agent",
  contactLead: "Tell us what you're looking for — a real agent replies within one business day.",
  addressLines: ["14 Switchback Road, Cantonments,", "Accra — Ghana"],
  hoursLines: ["Mon – Fri: 8:30am – 5:30pm", "Saturday: 9:00am – 2:00pm"],
  form: {
    title: "Make an enquiry",
    subtitle: "Buying, renting or selling — tell us what you need.",
    buttonLabel: "Send Enquiry via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send — nothing is stored on this site.",
    fields: [
      { label: "Full name", type: "text", placeholder: "e.g. Ama Mensah", required: true },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. 024 123 4567", required: true },
      {
        label: "I am looking for",
        type: "select",
        required: true,
        options: ["Apartment to rent", "House to rent", "Property to buy", "Land to buy", "Office / commercial space"],
      },
      { label: "Budget (GH₵)", type: "text", placeholder: "e.g. 5,000 /month or 2,000,000" },
      { label: "Details", type: "textarea", placeholder: "Preferred areas, bedrooms, move-in date…" },
    ],
  },

  ctaBanner: {
    title: "Selling or letting a property?",
    subtitle: "Get a free valuation and professional photos — listed within 48 hours.",
    buttonLabel: "Get a Free Valuation",
  },

  pitch: "Real estate agency with filterable listings, verified titles and WhatsApp enquiries.",
};
