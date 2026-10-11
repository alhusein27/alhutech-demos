"use client";

import { useMemo, useState } from "react";
import type { DemoContent, Listing } from "@/content/types";
import { waLink } from "@/lib/whatsapp";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type SortKey = "featured" | "low" | "high";

function ListingCard({ content, listing }: { content: DemoContent; listing: Listing }) {
  const href = waLink(content.whatsapp, `Hello ${content.businessName}! I'm interested in: ${listing.name} (${listing.price}).`);
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg">
      <div
        className="relative flex h-36 items-end justify-between p-4"
        style={{ background: `linear-gradient(135deg, ${content.accent.from}, ${content.accent.to})` }}
      >
        {listing.tag && (
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-800">
            {listing.tag}
          </span>
        )}
        <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {listing.typeLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900">{listing.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{listing.location}</p>
        {listing.detail && <p className="mt-2 text-sm font-medium text-slate-600">{listing.detail}</p>}
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <p className="kicker-accent text-xl font-bold">{listing.price}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 underline decoration-2 underline-offset-4 hover:opacity-80"
          >
            Enquire <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ListingGrid({ content }: { content: DemoContent }) {
  const listings = content.listings ?? [];
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState<SortKey>("featured");

  const types = useMemo(() => {
    const seen = new Map<string, string>();
    listings.forEach((l) => seen.set(l.type, l.typeLabel));
    return Array.from(seen.entries());
  }, [listings]);

  const visible = useMemo(() => {
    let out = filter === "all" ? [...listings] : listings.filter((l) => l.type === filter);
    if (sort === "low") out.sort((a, b) => a.priceNum - b.priceNum);
    if (sort === "high") out.sort((a, b) => b.priceNum - a.priceNum);
    return out;
  }, [listings, filter, sort]);

  if (listings.length === 0) return null;

  return (
    <section id="listings" className="scroll-mt-20 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker={content.listingsKicker}
            title={content.listingsTitle ?? content.servicesTitle}
            subtitle={content.listingsSubtitle ?? content.servicesSubtitle}
            align="center"
          />
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter listings">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === "all" ? "btn-accent text-white shadow" : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
              }`}
              aria-pressed={filter === "all"}
            >
              All
            </button>
            {types.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === key ? "btn-accent text-white shadow" : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
                aria-pressed={filter === key}
              >
                {label}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
            Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
          </label>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((listing, i) => (
            <Reveal key={listing.name} delay={(i % 3) * 80}>
              <ListingCard content={content} listing={listing} />
            </Reveal>
          ))}
        </div>
        {visible.length === 0 && (
          <p className="mt-8 text-center text-slate-500">No listings in this category yet — check back soon.</p>
        )}
      </div>
    </section>
  );
}
