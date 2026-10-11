import { waLink } from "./whatsapp";

/**
 * Default lead contact for every demo site: Alhutech Digital Solutions.
 * All conversion actions (booking forms, per-card CTAs, hero buttons,
 * floating WhatsApp button, contact section) funnel here instead of the
 * fictional demo business.
 */
export const ALHUTECH_WHATSAPP = "233550044228";
export const ALHUTECH_SITE = "https://alhutech.com";

/** Click-to-chat link to Alhutech's WhatsApp with a prefilled message. */
export function leadWhatsAppUrl(message: string): string {
  return waLink(ALHUTECH_WHATSAPP, message);
}

/**
 * Prefilled lead message naming the demo the visitor was viewing.
 * `details` carries the item or form summary, e.g. "Name: Ama, Service: Frontal Install (₵350)".
 */
export function demoLeadMessage(businessName: string, slug: string, details?: string): string {
  return (
    `Hello Alhutech! I was looking at the ${businessName} demo (demo.alhutech.com/${slug}/) ` +
    `and I'd like a website like this for my business.` +
    (details ? ` Details: ${details}` : "")
  );
}
