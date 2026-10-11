import type { DemoContent } from "./types";

export const fashionContent: DemoContent = {
  slug: "fashion",
  businessName: "Nhyira Chic Boutique",
  tagline: "Osu · Accra · Est. 2019",
  location: "Osu, Accra",
  phoneDisplay: "+233 50 000 0000",
  heroTitle: "Wear Ghana. Own Every Room.",
  heroSubtitle:
    "Modern kente gowns, two-piece sets and kaftans — designed in Accra, sewn to turn heads at every wedding, naming ceremony and Friday night out.",
  ctaPrimary: "Chat to Order",
  ctaSecondary: "View Collection",
  accent: { from: "#A21CAF", to: "#F59E0B" },

  slides: [
    {
      image: "/images/fashion/hero.webp",
      video: "/videos/fashion/hero.mp4",
      kicker: "Osu · Accra · Est. 2019",
      headline: "Wear Ghana. Own Every Room.",
      subtext:
        "Modern kente gowns, two-piece sets and kaftans — designed in Accra, sewn to turn heads at every wedding, naming ceremony and Friday night out.",
    },
    {
      image: "/images/fashion/showcase-1.webp",
      kicker: "The signature",
      headline: "Ahenema Kente Gown — ₵1,850",
      subtext: "Our signature bridal-ready gown in handwoven kente — fitted bodice, flowing train. Best seller.",
    },
    {
      image: "/images/fashion/showcase-2.webp",
      kicker: "Everyday royalty",
      headline: "Osu Weekend Set — ₵950",
      subtext: "Relaxed two-piece in breathable cotton — the effortless Friday-to-Sunday uniform. Ships in 72 hours.",
    },
  ],

  aboutKicker: "Our Story",
  aboutHeading: "Heritage you can wear",
  aboutBody: [
    "Nhyira Chic started in 2019 in a single room off Oxford Street, with one sewing machine and a stubborn belief: Ghanaian women shouldn't have to choose between heritage and modern style.",
    "Today we dress brides, executives and every woman in between — hand-picked kente from Bonwire and Accra markets, tailored in our Osu atelier.",
  ],
  aboutPoints: [
    "Hand-picked kente, Bonwire & Accra markets",
    "Custom orders — your fabric, our tailors",
    "New arrivals weekly",
    "Nationwide delivery in 24–72 hours",
  ],
  stats: [
    { value: 6, suffix: "+", label: "Years of craft" },
    { value: 2, suffix: "k+", label: "Happy customers" },
    { value: 72, suffix: "h", label: "Delivery nationwide" },
  ],

  servicesKicker: "The Collection",
  servicesTitle: "Pieces that speak before you do",
  servicesSubtitle: "Tap any piece to order instantly on WhatsApp — tell us your size and it ships within 72 hours.",
  servicesNavLabel: "Collection",
  services: [
    {
      title: "Ahenema Kente Gown",
      description: "Our signature bridal-ready gown in handwoven kente — fitted bodice, flowing train. Best seller.",
      price: "₵1,850",
      category: "Gowns",
      actionLabel: "Order on WhatsApp",
    },
    {
      title: "Osu Weekend Set",
      description: "Relaxed two-piece set in breathable cotton — the effortless Friday-to-Sunday uniform. New in.",
      price: "₵950",
      category: "Two-piece sets",
      actionLabel: "Order on WhatsApp",
    },
    {
      title: "Chief's Kaftan",
      description: "Regal kaftan in rich fabric with hand embroidery — for the man who commands the room.",
      price: "₵780",
      category: "Menswear",
      actionLabel: "Order on WhatsApp",
    },
    {
      title: "Royal Headwrap",
      description: "Pre-tied headwrap in matching kente prints — full glam in under a minute. Restocked.",
      price: "₵180",
      category: "Accessories",
      actionLabel: "Order on WhatsApp",
    },
    {
      title: "Kente Clutch Bag",
      description: "Evening clutch wrapped in authentic kente — the finishing touch to any outfit.",
      price: "₵420",
      category: "Accessories",
      actionLabel: "Order on WhatsApp",
    },
    {
      title: "Asante Evening Gown",
      description: "Floor-length evening gown with kente accents — made for engagements and galas. Bridal range.",
      price: "₵1,450",
      category: "Gowns",
      actionLabel: "Order on WhatsApp",
    },
  ],

  galleryTitle: "The lookbook",
  galleryCaptions: [
    "The Ahenema Gown — bridal collection",
    "Inside the Osu shop — new arrivals weekly",
    "Hand-picked kente, Bonwire & Accra markets",
  ],

  reviewsTitle: "Worn & loved",
  testimonials: [
    {
      name: "Akosua Frimpong",
      role: "East Legon",
      quote:
        "My Ahenema gown stole the show at my traditional wedding. The fit was perfect — people are still asking where I got it.",
    },
    {
      name: "Nana Yaa",
      role: "Kumasi",
      quote:
        "Ordered on WhatsApp from Kumasi and it arrived in two days, exactly as pictured. The fabric quality is unmatched.",
    },
    {
      name: "Efua Boateng",
      role: "Osu",
      quote:
        "They tailored my mother's cloth into a kaftan for my dad's 60th. Beautiful work, fair price, done on time.",
    },
  ],

  contactHeading: "Come try it on in Osu",
  contactLead: "Find the shop — two minutes from Osu Castle, opposite the Frankie's junction — look for the gold sign.",
  addressLines: ["14 Oxford Street, Osu,", "Accra — Ghana"],
  hoursLines: ["Mon – Sat: 9:00am – 7:00pm", "Sunday: 1:00pm – 6:00pm"],
  contactNote: "Not in Accra? No problem — we deliver nationwide in 24–72 hours, pay with MTN MoMo or on delivery.",
  form: {
    title: "Order or enquire",
    subtitle: "Tell us the piece you want and your size — we reply within the hour, 8am – 10pm daily.",
    buttonLabel: "Send via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send — nothing is stored on this site.",
    fields: [
      { label: "Full name", type: "text", placeholder: "e.g. Ama Mensah", required: true },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. 050 000 0000", required: true },
      {
        label: "Piece",
        type: "select",
        required: true,
        options: [
          "Ahenema Kente Gown — ₵1,850",
          "Osu Weekend Set — ₵950",
          "Chief's Kaftan — ₵780",
          "Royal Headwrap — ₵180",
          "Kente Clutch Bag — ₵420",
          "Asante Evening Gown — ₵1,450",
          "Custom order (my own fabric)",
        ],
      },
      { label: "Size / details", type: "textarea", placeholder: "Your size, colour preference, or custom order details" },
    ],
  },

  ctaBanner: {
    title: "Wedding or event coming up?",
    subtitle: "Custom orders take 1–2 weeks — chat with us and let's create your piece.",
    buttonLabel: "Chat to Order",
  },

  pitch: "Fashion boutique with collection showcase, lookbook, price list and WhatsApp ordering.",
};
