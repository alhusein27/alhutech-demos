import type { DemoContent } from "./types";

export const bakeryContent: DemoContent = {
  slug: "bakery",
  businessName: "Adom Delights",
  tagline: "Osu · Accra · Baked fresh daily",
  location: "Osu, Accra",
  phoneDisplay: "+233 50 000 0000",
  heroTitle: "Cakes & pastries worth celebrating.",
  heroSubtitle:
    "Fresh cakes, pastries and breads baked every morning in Osu, Accra. Order on WhatsApp, pay with MTN MoMo.",
  ctaPrimary: "Order on WhatsApp",
  ctaSecondary: "View Menu",
  accent: { from: "#B45309", to: "#F59E0B" },

  slides: [
    {
      image: "/images/bakery/hero.webp",
      video: "/videos/bakery/hero.mp4",
      kicker: "Osu · Accra · Baked fresh daily",
      headline: "Cakes & pastries worth celebrating.",
      subtext:
        "Fresh cakes, pastries and breads baked every morning in Osu, Accra. Order on WhatsApp, pay with MTN MoMo.",
    },
    {
      image: "/images/bakery/showcase-1.webp",
      kicker: "Fresh from the oven",
      headline: "Meat Pies · Box of 6 — ₵60",
      subtext: "Flaky golden crust, richly spiced minced-beef filling. Our bestseller since day one.",
    },
    {
      image: "/images/bakery/showcase-2.webp",
      kicker: "Worth celebrating",
      headline: "Classic Birthday Cake — ₵350",
      subtext: "8-inch sponge with buttercream finish and a handwritten message. Bulk & party orders welcome.",
    },
  ],

  aboutKicker: "Our Story",
  aboutHeading: "A little Osu bakery with a big reputation",
  aboutBody: [
    "Adom Delights began in 2019 with one oven, a family recipe book, and a simple promise: nothing leaves our kitchen unless we'd proudly serve it at our own table.",
    "Today we bake hundreds of cakes, pies and loaves every morning — but every batch still gets the same slow care as the first.",
  ],
  aboutPoints: [
    "Baked fresh every morning — never day-old",
    "Custom cakes for birthdays & weddings",
    "Delivery across Osu, Labadi & Cantonments",
  ],
  stats: [
    { value: 6, suffix: "+", label: "Years baking" },
    { value: 25, suffix: "k+", label: "Orders delivered" },
    { value: 4.9, decimals: 1, label: "Average rating" },
  ],

  servicesKicker: "Fresh from the oven",
  servicesTitle: "Our menu",
  servicesSubtitle: "Order ahead on WhatsApp and skip the queue. Bulk & party orders welcome — just give us 48 hours.",
  servicesNavLabel: "Menu",
  services: [
    {
      title: "Classic Birthday Cake",
      description: "8-inch vanilla or chocolate sponge with buttercream finish and a handwritten message.",
      price: "₵350",
      category: "Cakes",
      actionLabel: "Order this cake",
    },
    {
      title: "3-Tier Wedding Cake",
      description: "Elegant tiered centrepiece in your colours and flavour — includes tasting & delivery.",
      price: "from ₵1,800",
      category: "Cakes",
      actionLabel: "Enquire",
    },
    {
      title: "Meat Pies · Box of 6",
      description: "Flaky golden crust, richly spiced minced-beef filling. Our bestseller since day one.",
      price: "₵60",
      category: "Pastries",
      actionLabel: "Order a box",
    },
    {
      title: "Glazed Doughnuts · Box of 6",
      description: "Pillowy-soft, dipped in vanilla glaze. Also available in chocolate and strawberry.",
      price: "₵45",
      category: "Pastries",
      actionLabel: "Order a box",
    },
    {
      title: "Cupcakes · Box of 6",
      description: "Assorted flavours with swirled frosting — perfect for parties and office treats.",
      price: "₵75",
      category: "Cakes",
      actionLabel: "Order a box",
    },
    {
      title: "Banana Bread Loaf",
      description: "Moist, nutty and not too sweet. Baked fresh every morning — sells out by noon.",
      price: "₵40",
      category: "Breads",
      actionLabel: "Order a loaf",
    },
    {
      title: "Chocolate Fudge Cake",
      description: "Deep, dark and decadent — a whole 9-inch cake for serious chocolate lovers.",
      price: "₵280",
      category: "Cakes",
      actionLabel: "Order this cake",
    },
    {
      title: "Fruit Tart",
      description: "Buttery shell, vanilla custard and fresh seasonal fruit with a honey glaze.",
      price: "₵95",
      category: "Pastries",
      actionLabel: "Order one",
    },
  ],

  galleryTitle: "From our kitchen",
  galleryCaptions: ["Celebration cakes, made to order", "Today's counter — Osu shop", "Morning pastries, still warm"],

  reviewsTitle: "Sweet words",
  testimonials: [
    {
      name: "Ama Serwaa",
      role: "Osu",
      quote: "The birthday cake for my daughter was the talk of the party. Moist, beautiful, and delivered right on time.",
    },
    {
      name: "Kwame Mensah",
      role: "Labadi",
      quote: "Their meat pies are the best I've had in Accra. I order a box for the office every single Friday.",
    },
    {
      name: "Efua Asante",
      role: "Cantonments",
      quote: "Adom Delights made our wedding cake and our guests are still talking about it months later.",
    },
  ],

  contactHeading: "Come taste",
  contactLead: "Order ahead on WhatsApp and skip the queue — pay with MTN MoMo on pickup or delivery.",
  addressLines: ["14 Oxford Street, Osu,", "Accra — Ghana"],
  hoursLines: ["Mon – Sat: 8:00am – 8:00pm", "Sunday: 12:00pm – 6:00pm"],
  form: {
    title: "Place an order",
    subtitle: "Tell us what you want and when — we'll confirm availability and delivery.",
    buttonLabel: "Send Order via WhatsApp",
    note: "Submitting opens WhatsApp with your message ready to send — nothing is stored on this site.",
    fields: [
      { label: "Full name", type: "text", placeholder: "e.g. Ama Mensah", required: true },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. 050 000 0000", required: true },
      {
        label: "What would you like?",
        type: "select",
        required: true,
        options: [
          "Classic Birthday Cake — ₵350",
          "3-Tier Wedding Cake — from ₵1,800",
          "Meat Pies (Box of 6) — ₵60",
          "Glazed Doughnuts (Box of 6) — ₵45",
          "Cupcakes (Box of 6) — ₵75",
          "Banana Bread Loaf — ₵40",
          "Chocolate Fudge Cake — ₵280",
          "Fruit Tart — ₵95",
        ],
      },
      { label: "Date needed", type: "date", required: true },
      { label: "Quantity / details", type: "textarea", placeholder: "e.g. 2 boxes, chocolate flavour, write 'Happy Birthday Kofi'" },
    ],
  },

  ctaBanner: {
    title: "Need a cake this weekend?",
    subtitle: "Custom orders need 48 hours — message us today and let's plan it.",
    buttonLabel: "Order on WhatsApp",
  },

  pitch: "Bakery & cake shop with product showcase, custom cake order form and gallery.",
};
