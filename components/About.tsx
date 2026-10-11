import type { DemoContent } from "@/content/types";
import SectionHeading from "./SectionHeading";
import Stats from "./Stats";
import Reveal from "./Reveal";

export default function About({ content }: { content: DemoContent }) {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading kicker={content.aboutKicker} title={content.aboutHeading} />
            {content.aboutBody.map((p, i) => (
              <p key={i} className="mt-4 text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
            <ul className="mt-6 space-y-3">
              {content.aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white"
                    style={{ background: `linear-gradient(135deg, ${content.accent.from}, ${content.accent.to})` }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" width="13" height="13">
                      <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                  </span>
                  <span className="text-slate-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="flex items-center">
            <Stats content={content} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
