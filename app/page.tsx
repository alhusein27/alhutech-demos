import Link from "next/link";
import { allDemos } from "@/content";

const whyItems = [
  {
    title: "Fast to launch",
    detail: "Every demo is a complete, working site — pick one, we rebrand it with your name, prices and photos, and you're live in days.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path fill="currentColor" d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp integration",
    detail: "Every button and form opens WhatsApp with the customer's message pre-written — bookings and orders land straight in your chat.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.3-.9.9-1.1 2.2-.2 3.9a11.6 11.6 0 0 0 4.5 4.2c1.7.8 2.4.9 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.4-.2z"
        />
      </svg>
    ),
  },
  {
    title: "Mobile-data friendly",
    detail: "Lightweight pages that load fast on any phone and any network — your customers won't burn data just to see your menu.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 2v11h3V2H7zm7 0v11h3V2h-3zM7 14c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2H7zm0 2h10v6H7v-6z"
        />
      </svg>
    ),
  },
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-brand-950 font-sans text-white antialiased">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Alhutech demo library — home">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-500 text-brand-950" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M12 2c.7 4.8 3.2 7.3 8 8-4.8.7-7.3 3.2-8 8-.7-4.8-3.2-7.3-8-8 4.8-.7 7.3-3.2 8-8z"
                />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block font-bold">Alhutech</span>
              <span className="block text-xs text-white/60">Demo Library</span>
            </span>
          </Link>
          <a
            href="https://alhutech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-brand-950 transition hover:bg-gold-400"
          >
            alhutech.com
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(600px 300px at 20% 10%, rgba(217,164,25,0.18), transparent 70%), radial-gradient(700px 350px at 85% 90%, rgba(20,101,76,0.5), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold-400">Alhutech Digital Solutions</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Websites that win <span className="text-gold-400">customers.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            Ten ready-made starter websites for Ghanaian businesses — pick the one closest to yours, and we&apos;ll
            rebrand it with your name, prices and photos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#demos"
              className="rounded-full bg-gold-500 px-8 py-3.5 font-bold text-brand-950 transition hover:bg-gold-400"
            >
              Browse the demos
            </a>
            <a
              href="https://alhutech.com/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-8 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Get a quote
            </a>
          </div>
        </div>
      </section>

      {/* Demo grid */}
      <section id="demos" className="scroll-mt-20 pb-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-400">The collection</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Ten niches, ready to explore</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              Each demo is a full working website with Ghanaian content, GH₵ pricing and WhatsApp booking built in.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allDemos.map((demo) => (
              <Link
                key={demo.slug}
                href={`/${demo.slug}/`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-brand-900/60 transition hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-brand-800">
                  <img
                    src={`/images/${demo.slug}/hero.webp`}
                    alt={`${demo.businessName} demo website preview`}
                    width={800}
                    height={450}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                    style={{ background: `linear-gradient(135deg, ${demo.accent.from}, ${demo.accent.to})` }}
                  >
                    {demo.servicesNavLabel}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{demo.businessName}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{demo.pitch}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold-400">
                    View demo <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why strip */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-400">Why build with Alhutech</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Made for how Ghana does business</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-brand-900/60 p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-500/15 text-gold-400">
                  {item.icon}
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-gold-500 px-8 py-12 text-center text-brand-950 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Like what you see? Make it yours.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-brand-950/80">
              Tell us your business name and which demo you like — we&apos;ll rebrand it and get you online fast.
            </p>
            <a
              href="https://alhutech.com/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-brand-950 px-8 py-3.5 font-bold text-white transition hover:bg-brand-800"
            >
              Start your project
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-white/50 sm:flex-row sm:px-6">
          <p>
            <span className="font-bold text-white">Alhutech Digital Solutions</span> · Accra, Ghana
          </p>
          <p>
            Demo library — all businesses shown are fictional.{" "}
            <a href="https://alhutech.com" target="_blank" rel="noopener noreferrer" className="text-gold-400 underline underline-offset-4">
              alhutech.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
