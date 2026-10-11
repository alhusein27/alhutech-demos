import type { DemoContent } from "@/content/types";
import { waLink } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function CTA({ content }: { content: DemoContent }) {
  const href = waLink(content.whatsapp, `Hello ${content.businessName}!`);
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div
            className="rounded-3xl px-8 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16"
            style={{ background: `linear-gradient(135deg, ${content.accent.from}, ${content.accent.to})` }}
          >
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{content.ctaBanner.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-white/90">{content.ctaBanner.subtitle}</p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-slate-900 shadow-lg hover:bg-slate-100 transition"
            >
              {content.ctaBanner.buttonLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
