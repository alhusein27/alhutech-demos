import type { DemoContent } from "@/content/types";
import { leadWhatsAppUrl, demoLeadMessage, ALHUTECH_WHATSAPP } from "@/lib/lead";
import BookingForm from "./BookingForm";
import Reveal from "./Reveal";

export default function Contact({ content }: { content: DemoContent }) {
  const telHref = `tel:+${ALHUTECH_WHATSAPP}`;
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="kicker-accent text-sm font-bold uppercase tracking-[0.18em] mb-3">
              {content.contactKicker ?? "Visit Us"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{content.contactHeading}</h2>
            <p className="mt-3 text-lg text-slate-600">{content.contactLead}</p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="accent-soft grid h-11 w-11 shrink-0 place-items-center rounded-xl" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="text-accent">
                    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="text-slate-600">{content.addressLines.join(" ")}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="accent-soft grid h-11 w-11 shrink-0 place-items-center rounded-xl" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="text-accent">
                    <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.6l4.2 2.5-.8 1.3L11 13.5V7h2v5.6z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Hours</p>
                  {content.hoursLines.map((h) => (
                    <p key={h} className="text-slate-600">{h}</p>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="accent-soft grid h-11 w-11 shrink-0 place-items-center rounded-xl" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="text-accent">
                    <path fill="currentColor" d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.2 1l-2.3 2.2z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Call / WhatsApp</p>
                  <a href={telHref} className="text-slate-600 underline underline-offset-4 hover:text-slate-900">
                    {content.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>
            {content.contactNote && (
              <p className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">{content.contactNote}</p>
            )}
          </Reveal>
          <Reveal delay={120}>
            {content.form ? (
              <BookingForm content={content} />
            ) : (
              <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-8 text-center shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">Get in touch</h3>
                <p className="mt-2 text-slate-600">Message us on WhatsApp — we reply fast.</p>
                <a
                  href={leadWhatsAppUrl(demoLeadMessage(content.businessName, content.slug))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent mt-6 inline-block rounded-full px-8 py-3.5 font-semibold text-white shadow-md hover:opacity-90 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
