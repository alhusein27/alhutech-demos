import type { DemoContent } from "@/content/types";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export function ScheduleRows({ content }: { content: DemoContent }) {
  if (!content.scheduleRows || content.scheduleRows.length === 0) return null;
  return (
    <section id="schedule" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={content.scheduleKicker} title={content.scheduleTitle ?? ""} align="center" />
        </Reveal>
        <div className="mt-10 space-y-4">
          {content.scheduleRows.map((row, i) => (
            <Reveal key={row.title} delay={i * 80}>
              <div className="flex items-center gap-5 rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <span
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-sm font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${content.accent.from}, ${content.accent.to})` }}
                >
                  {row.day}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">{row.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{row.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventsList({ content }: { content: DemoContent }) {
  if (!content.events || content.events.length === 0) return null;
  return (
    <section id="events" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={content.eventsKicker} title={content.eventsTitle ?? ""} align="center" />
        </Reveal>
        <div className="mt-10 space-y-4">
          {content.events.map((event, i) => (
            <Reveal key={event.title} delay={i * 80}>
              <div className="flex items-center gap-5 rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-slate-900 text-center text-white">
                  <span>
                    <span className="block text-xl font-bold leading-none">{event.date}</span>
                    <span className="block text-[11px] font-bold tracking-widest text-white/70">{event.month}</span>
                  </span>
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">{event.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{event.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps({ content }: { content: DemoContent }) {
  if (!content.steps || content.steps.length === 0) return null;
  return (
    <section id="admissions" className="scroll-mt-20 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={content.stepsKicker} title={content.stepsTitle ?? ""} align="center" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <span
                  className="grid h-11 w-11 place-items-center rounded-full text-lg font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${content.accent.from}, ${content.accent.to})` }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
