/** Build a WhatsApp click-to-chat link with a prefilled message. */
export function waLink(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
