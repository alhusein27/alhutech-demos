import type { DemoContent } from "./types";

export const restaurantContent: DemoContent = {
  slug: "restaurant",
  businessName: "Mama Esi's Kitchen",
  tagline: "Osu · Accra",
  location: "Osu, Accra",
  phoneDisplay: "+233 24 455 6677",
  whatsapp: "233500000000",
  heroTitle: "Real Ghanaian food, made like home.",
  heroSubtitle:
    "From smoky waakye to charcoal-grilled tilapia — cooked fresh every single day at Mama Esi's Kitchen.",
  ctaPrimary: "Reserve a Table",
  ctaSecondary: "View Menu",
  accent: { from: "#C2410C", to: "#F59E0B" },

  slides: [
    {
      image: "/images/restaurant/hero.webp",
      video: "/videos/restaurant/hero.mp4",
      kicker: "Osu · Accra",
      headline: "Real Ghanaian food, made like home.",
      subtext:
        "From smoky waakye to charcoal-grilled tilapia — cooked fresh every single day at Mama Esi's Kitchen.",
    },
    {
      image: "/images/restaurant/showcase-1.webp",
      kicker: "Fresh from the grill",
      headline: "Banku & Tilapia — ₵85",
      subtext: "Charcoal-grilled whole tilapia with fresh pepper — served the way a chop bar should serve it.",
    },
    {
      image: "/images/restaurant/showcase-2.webp",
      kicker: "Chop bar favourites",
      headline: "Smoky Jollof & Chicken — ₵60",
      subtext: "Party-style jollof with grilled chicken, cooked fresh daily. When it's finished, it's finished!",
    },
  ],

  aboutKicker: "Our Story",
  aboutHeading: "Three generations of Ghanaian flavour",
  aboutBody: [
    "Mama Esi started selling waakye from a coal pot on Oxford Street over fifteen years ago. Today her kitchen feeds hundreds of Accra residents every day — but every pot is still cooked the slow way, with the same family recipes.",
    "No shortcuts, no compromises: charcoal-grilled fish, freshly pounded fufu to order, and shito made in-house every week.",
  ],
  aboutPoints: [
    "Charcoal-grilled tilapia, fresh daily",
    "Fufu pounded to order — never pre-made",
    "Family recipes, cooked the slow way",
    "MTN MoMo, card & cash accepted",
  ],
  stats: [
    { value: 15, suffix: "+", label: "Years cooking" },
    { value: 4.9, decimals: 1, label: "Average rating" },
    { value: 200, suffix: "+", label: "Meals daily" },
  ],

  servicesKicker: "Our Menu",
  servicesTitle: "Eat like you're home",
  servicesSubtitle: "Everything is cooked fresh daily — when it's finished, it's finished!",
  servicesNavLabel: "Menu",
  services: [],

  menuSections: [
    {
      heading: "Mains",
      items: [
        { name: "Waakye Special", price: "₵45", desc: "With spaghetti, gari, shito, egg, meat & fish" },
        { name: "Jollof Rice & Chicken", price: "₵60", desc: "Party-style smoky jollof with grilled chicken" },
        { name: "Banku & Tilapia", price: "₵85", desc: "Charcoal-grilled whole tilapia, fresh pepper" },
        { name: "Fufu & Goat Light Soup", price: "₵70", desc: "Pounded to order, rich light soup" },
        { name: "Kenkey & Fried Fish", price: "₵40", desc: "Ga kenkey with crispy fried fish & pepper" },
        { name: "Fried Rice & Guinea Fowl", price: "₵75", desc: "With coleslaw and extra shito" },
      ],
    },
    {
      heading: "Light Bites & Sides",
      items: [
        { name: "Kelewele", price: "₵25", desc: "Spicy fried plantain cubes" },
        { name: "Yam Chips & Palava", price: "₵35", desc: "With kontomire stew" },
        { name: "Grilled Chicken (half)", price: "₵50", desc: "Suya-spiced, with onions" },
      ],
    },
    {
      heading: "Drinks",
      items: [
        { name: "Sobolo (large)", price: "₵15", desc: "Homemade hibiscus, chilled" },
        { name: "Fresh Pineapple Juice", price: "₵20", desc: "Pressed daily, no added sugar" },
        { name: "Asana", price: "₵12", desc: "Traditional caramelised corn drink" },
        { name: "Malta Guinness", price: "₵18" },
        { name: "Bottled Water", price: "₵8" },
      ],
    },
  ],

  galleryTitle: "From our coal pots",
  galleryCaptions: ["Charcoal-grilled tilapia", "Sunday waakye spread", "Fresh homemade sobolo"],

  reviewsTitle: "What Accra is saying",
  testimonials: [
    {
      name: "Kofi Asante",
      role: "Osu",
      quote:
        "The banku and tilapia is the best I have had outside of my mother's kitchen. The pepper is serious — ask for mild if you are not ready!",
    },
    {
      name: "Ama Serwaa",
      role: "Cantonments",
      quote:
        "Ordered waakye for the whole office on Friday. Arrived hot, portions generous, and the shito alone is worth the trip.",
    },
    {
      name: "Yaw Owusu",
      role: "East Legon",
      quote:
        "Brought my in-laws here and Mama Esi herself came to our table. Warm people, honest food, fair prices.",
    },
  ],

  contactHeading: "Come hungry",
  contactLead: "Find us on Oxford Street — or reserve ahead and your table (and your tilapia) will be waiting.",
  addressLines: ["24 Oxford Street, Osu,", "Accra — Ghana"],
  hoursLines: ["Mon – Sat: 10:00am – 10:00pm", "Sunday: 12:00pm – 8:00pm"],
  contactNote: "Delivery: we deliver within Osu, Labadi and Cantonments — order on WhatsApp before 7pm.",
  form: {
    title: "Reserve a table",
    subtitle: "Tell us when you're coming and we'll have everything ready.",
    buttonLabel: "Send Reservation via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send — nothing is stored on this site.",
    fields: [
      { label: "Full name", type: "text", placeholder: "e.g. Ama Mensah", required: true },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. 024 123 4567", required: true },
      { label: "Date", type: "date", required: true },
      { label: "Number of guests", type: "number", placeholder: "e.g. 4", required: true },
      {
        label: "Time",
        type: "select",
        required: true,
        options: ["Lunch (12pm – 3pm)", "Evening (5pm – 8pm)", "Late (8pm – 10pm)"],
      },
      { label: "Special requests", type: "textarea", placeholder: "Birthday? Outdoor seating? Let us know." },
    ],
  },

  ctaBanner: {
    title: "Hungry already?",
    subtitle: "Message us on WhatsApp and your table will be waiting.",
    buttonLabel: "Reserve a Table",
  },

  pitch: "Chop bar & local restaurant with menu, WhatsApp reservations and a daily-specials flow.",
};
