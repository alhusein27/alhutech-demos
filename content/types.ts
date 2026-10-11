/** Shared content model for every demo site in the Alhutech demo library. */

export interface Accent {
  from: string; // gradient / primary start, hex
  to: string; // gradient / primary end, hex
}

export interface Stat {
  value: number; // numeric part used for count-up animation
  prefix?: string; // e.g. "GH₵", "1:"
  suffix?: string; // e.g. "+", "k+", "M+", "%"
  decimals?: number; // e.g. 1 for 4.9
  label: string;
}

export interface Service {
  title: string;
  description: string;
  price?: string; // e.g. "₵350", "from ₵1,800"
  category?: string; // e.g. "Gowns", "Cakes"
  actionLabel?: string; // per-card WhatsApp CTA label, defaults to "Book" / "Order"
}

export interface MenuSection {
  heading: string;
  items: { name: string; price: string; desc?: string }[];
}

export interface Listing {
  name: string;
  type: string; // machine key for filtering, e.g. "apartment"
  typeLabel: string; // human label, e.g. "Apartment"
  price: string; // display string, e.g. "₵4,500 /month"
  priceNum: number; // numeric for sorting
  location: string;
  detail?: string; // e.g. beds/specs/mileage
  tag?: string; // e.g. "For Sale", "Available"
}

export interface ScheduleRow {
  day: string; // e.g. "SUN", "WED"
  title: string;
  detail: string;
}

export interface EventRow {
  date: string; // e.g. "14"
  month: string; // e.g. "NOV"
  title: string;
  detail: string;
}

export interface Step {
  title: string;
  detail: string;
}

/** One panel of the animated hero slider on each demo page. */
export interface HeroSlide {
  image: string; // e.g. "/images/restaurant/showcase-1.webp"
  video?: string; // optional ambient background video, e.g. "/videos/restaurant/hero.mp4"
  kicker: string;
  headline: string;
  subtext: string;
}

export interface FormField {
  label: string;
  type: "text" | "tel" | "email" | "date" | "number" | "select" | "textarea";
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

export interface FormConfig {
  title: string;
  subtitle: string;
  buttonLabel: string;
  note?: string;
  fields: FormField[];
}

export interface DemoContent {
  slug: string;
  businessName: string;
  tagline: string; // hero kicker, e.g. "Osu · Accra"
  location: string;
  phoneDisplay: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaSecondaryHref?: string; // default anchors to the services section
  accent: Accent;
  slides?: HeroSlide[]; // hero slider; falls back to heroTitle/heroSubtitle when absent

  // section headings
  aboutKicker?: string;
  aboutHeading: string;
  aboutBody: string[];
  aboutPoints: string[];
  stats: Stat[];

  servicesKicker?: string;
  servicesTitle: string;
  servicesSubtitle?: string;
  servicesNavLabel: string; // nav label for the services anchor, e.g. "Menu"
  services: Service[];

  menuSections?: MenuSection[]; // restaurant / bakery style price lists
  menuKicker?: string;
  menuTitle?: string;
  menuSubtitle?: string;

  listings?: Listing[]; // realestate / cars
  listingsKicker?: string;
  listingsTitle?: string;
  listingsSubtitle?: string;

  scheduleRows?: ScheduleRow[]; // church service times
  scheduleTitle?: string;
  scheduleKicker?: string;
  events?: EventRow[]; // school / church news
  eventsTitle?: string;
  eventsKicker?: string;
  steps?: Step[]; // school admissions
  stepsTitle?: string;
  stepsKicker?: string;

  galleryKicker?: string;
  galleryTitle: string;
  galleryCaptions: string[]; // exactly 3 captions → /images/{slug}/showcase-{1..3}.webp

  reviewsKicker?: string;
  reviewsTitle: string;
  testimonials: { name: string; role: string; quote: string }[];

  // contact
  contactKicker?: string;
  contactHeading: string;
  contactLead: string;
  addressLines: string[];
  hoursLines: string[];
  contactNote?: string;
  form?: FormConfig;

  ctaBanner: { title: string; subtitle: string; buttonLabel: string };

  // library landing card
  pitch: string; // one-line pitch for the library grid
}
