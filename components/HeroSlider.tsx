"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { DemoContent, HeroSlide } from "@/content/types";
import { leadWhatsAppUrl, demoLeadMessage } from "@/lib/lead";

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD_PX = 40;

/** Fallback single slide when a content file has no `slides` array. */
function fallbackSlides(content: DemoContent): HeroSlide[] {
  return [
    {
      image: `/images/${content.slug}/hero.webp`,
      kicker: content.tagline,
      headline: content.heroTitle,
      subtext: content.heroSubtitle,
    },
  ];
}

/**
 * Slider-Revolution-style hero: crossfading slides, slow Ken Burns zoom on the
 * active background, staggered entrance for the copy on each slide change,
 * arrows + dots + touch swipe, and autoplay that pauses on hover or when the
 * tab is hidden. An ambient <video> plays on slide 1 when the content defines
 * one; if the file is missing it hides itself and the poster image remains.
 */
export default function HeroSlider({ content }: { content: DemoContent }) {
  const slides = content.slides ?? fallbackSlides(content);
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [videoOk, setVideoOk] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  /** Flip the video element's muted property directly (no restart of playback). */
  const setMutedState = useCallback((muted: boolean) => {
    setIsMuted(muted);
    if (videoRef.current) videoRef.current.muted = muted;
  }, []);

  const go = useCallback(
    (i: number) => {
      // Narration belongs to the video slide — re-mute when leaving it.
      setMutedState(true);
      setIndex(((i % slides.length) + slides.length) % slides.length);
    },
    [slides.length, setMutedState]
  );
  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  const toggleMute = useCallback(() => {
    const next = !isMuted;
    setMutedState(next);
    if (!next) videoRef.current?.play().catch(() => {});
  }, [isMuted, setMutedState]);

  // Pause autoplay while the narration is audible so the slide (and its
  // voiceover) never change mid-sentence.
  const autoplay = !hoverPaused && !tabHidden && slides.length > 1 && isMuted;
  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [autoplay, slides.length]);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const primaryHref = leadWhatsAppUrl(demoLeadMessage(content.businessName, content.slug));
  const secondaryHref = content.ctaSecondaryHref ?? "#services";
  const active = slides[index];

  return (
    <section
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-roledescription="carousel"
      aria-label={`${content.businessName} highlights`}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > SWIPE_THRESHOLD_PX) {
          if (dx < 0) next();
          else prev();
        }
        touchStartX.current = null;
      }}
    >
      {/* Slide backgrounds — crossfade */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <div className={`absolute inset-0 ${i === index ? "hero-kenburns" : ""}`}>
            <img
              src={slide.image}
              alt={`${content.businessName} — ${slide.headline}`}
              width={1600}
              height={900}
              loading={i === 0 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {i === 0 && slide.video && videoOk && (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={slide.image}
                aria-hidden="true"
              >
                <source src={slide.video} type="video/mp4" onError={() => setVideoOk(false)} />
              </video>
            )}
          </div>
        </div>
      ))}

      {/* Per-niche accent gradient overlay + legibility gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/45 to-black/25" aria-hidden="true" />
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{ background: `linear-gradient(120deg, ${content.accent.from}33, transparent 60%)` }}
        aria-hidden="true"
      />

      {/* Copy — re-triggered staggered entrance on every slide change */}
      <div className="relative z-20 mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <div key={index}>
          <p
            className="hero-rise mb-4 text-sm font-bold uppercase tracking-[0.22em] text-white/80"
            style={{ animationDelay: "0ms" }}
          >
            {active.kicker}
          </p>
          {index === 0 ? (
            <h1
              className="hero-rise max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              {active.headline}
            </h1>
          ) : (
            <h2
              className="hero-rise max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              {active.headline}
            </h2>
          )}
          <p className="hero-rise mt-5 max-w-2xl text-lg text-white/85 sm:text-xl" style={{ animationDelay: "240ms" }}>
            {active.subtext}
          </p>
          <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-lg transition hover:opacity-90"
            >
              {content.ctaPrimary}
            </a>
            <a
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-xl text-white backdrop-blur transition hover:bg-black/60 sm:left-6"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-xl text-white backdrop-blur transition hover:bg-black/60 sm:right-6"
          >
            <span aria-hidden="true">→</span>
          </button>

          {/* Dots */}
          <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 gap-2.5" role="tablist" aria-label="Slide indicators">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}: ${slide.headline}`}
                onClick={() => go(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-[#D9A419]" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
      {/* Mute / unmute toggle for the narrated hero video (slide 1).
          Videos must autoplay muted (browser policy); visitors tap to hear
          the narration. Playback is never restarted by the toggle. */}
      {index === 0 && slides[0].video && videoOk && (
        <>
          {isMuted && (
            <span className="pointer-events-none absolute bottom-[4.9rem] left-4 z-30 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur sm:left-6">
              Tap for narration
            </span>
          )}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute narration" : "Mute narration"}
            aria-pressed={!isMuted}
            className={`absolute bottom-6 left-4 z-30 grid h-11 w-11 place-items-center rounded-full border backdrop-blur transition sm:left-6 ${
              isMuted
                ? "border-white/30 bg-black/30 text-white hover:bg-black/60"
                : "border-[#D9A419] bg-[#D9A419] text-black shadow-lg hover:brightness-105"
            }`}
          >
            {isMuted ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            )}
          </button>
        </>
      )}
    </section>
  );
}
