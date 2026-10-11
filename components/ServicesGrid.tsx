import type { DemoContent } from "@/content/types";
import { leadWhatsAppUrl, demoLeadMessage } from "@/lib/lead";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ServicesGrid({ content }: { content: DemoContent }) {
  if (content.services.length === 0) return null;
  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker={content.servicesKicker}
            title={content.servicesTitle}
            subtitle={content.servicesSubtitle}
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, i) => {
            const action = service.actionLabel ?? "Enquire";
            const href = leadWhatsAppUrl(
              demoLeadMessage(
                content.businessName,
                content.slug,
                `${action}: ${service.title}${service.price ? ` (${service.price})` : ""}`
              )
            );
            return (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-lg">
                  {service.category && (
                    <span className="accent-soft mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      {service.category}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    {service.price ? (
                      <p className="kicker-accent text-xl font-bold">{service.price}</p>
                    ) : (
                      <span />
                    )}
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 underline decoration-2 underline-offset-4 hover:opacity-80"
                    >
                      {action}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
