import type { DemoContent } from "@/content/types";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function MenuSection({ content }: { content: DemoContent }) {
  if (!content.menuSections || content.menuSections.length === 0) return null;
  return (
    <section id="menu" className="scroll-mt-20 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker={content.menuKicker ?? content.servicesKicker}
            title={content.menuTitle ?? content.servicesTitle}
            subtitle={content.menuSubtitle ?? content.servicesSubtitle}
            align="center"
          />
        </Reveal>
        <div className="mt-12 space-y-10">
          {content.menuSections.map((group) => (
            <Reveal key={group.heading}>
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div
                  className="px-6 py-4"
                  style={{ background: `linear-gradient(135deg, ${content.accent.from}, ${content.accent.to})` }}
                >
                  <h3 className="text-lg font-bold text-white">{group.heading}</h3>
                </div>
                <ul className="divide-y divide-slate-100">
                  {group.items.map((item) => (
                    <li key={item.name} className="px-6 py-4">
                      <div className="flex items-baseline gap-3">
                        <span className="font-semibold text-slate-900">{item.name}</span>
                        <span className="mx-1 flex-1 border-b-2 border-dotted border-slate-200" aria-hidden="true" />
                        <span className="kicker-accent font-bold whitespace-nowrap">{item.price}</span>
                      </div>
                      {item.desc && <p className="mt-1 text-sm text-slate-500">{item.desc}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
