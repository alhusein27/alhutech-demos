"use client";

import { useState } from "react";
import type { DemoContent } from "@/content/types";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials({ content }: { content: DemoContent }) {
  const items = content.testimonials;
  const [index, setIndex] = useState(0);
  if (items.length === 0) return null;

  const go = (dir: number) => setIndex((i) => (i + dir + items.length) % items.length);
  const item = items[index];

  return (
    <section id="reviews" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker={content.reviewsKicker}
            title={content.reviewsTitle}
            align="center"
          />
        </Reveal>
        <Reveal className="mt-10">
          <div className="relative rounded-3xl border border-slate-100 bg-slate-50/70 p-8 sm:p-10">
            <p className="text-center text-lg leading-relaxed text-slate-700 sm:text-xl" key={index}>
              <span className="kicker-accent text-3xl font-bold" aria-hidden="true">
                &ldquo;
              </span>
              {item.quote}
              <span className="kicker-accent text-3xl font-bold" aria-hidden="true">
                &rdquo;
              </span>
            </p>
            <footer className="mt-6 text-center">
              <p className="font-bold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </footer>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path fill="currentColor" d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12z" />
                </svg>
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Testimonials">
                {items.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setIndex(i)}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial from ${t.name}`}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? "w-8 btn-accent" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path fill="currentColor" d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4 4.6 4.6z" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
