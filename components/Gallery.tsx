import type { DemoContent } from "@/content/types";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Gallery({ content }: { content: DemoContent }) {
  const captions = content.galleryCaptions.slice(0, 3);
  return (
    <section id="gallery" className="scroll-mt-20 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={content.galleryKicker ?? "Gallery"} title={content.galleryTitle} align="center" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {captions.map((caption, i) => (
            <Reveal key={caption} delay={i * 90}>
              <figure className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <img
                    src={`/images/${content.slug}/showcase-${i + 1}.webp`}
                    alt={`${caption} — ${content.businessName}`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm font-semibold text-slate-700">{caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
