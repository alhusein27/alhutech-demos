"use client";

import { useState } from "react";
import type { DemoContent } from "@/content/types";
import { waLink } from "@/lib/whatsapp";

interface HeaderProps {
  content: DemoContent;
  nav: { label: string; href: string }[];
  topOffset?: boolean; // when the demo bar is visible, sit 40px below it
}

export default function Header({ content, nav, topOffset = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const ctaHref = waLink(content.whatsapp, `Hello ${content.businessName}!`);

  return (
    <header className={`sticky ${topOffset ? "top-10" : "top-0"} z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-[0_1px_12px_rgba(0,0,0,0.04)]`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2" aria-label={`${content.businessName} — home`}>
            <span
              className="grid h-9 w-9 place-items-center rounded-xl text-white"
              style={{ background: `linear-gradient(135deg, ${content.accent.from}, ${content.accent.to})` }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M12 2c.7 4.8 3.2 7.3 8 8-4.8.7-7.3 3.2-8 8-.7-4.8-3.2-7.3-8-8 4.8-.7 7.3-3.2 8-8z"
                />
              </svg>
            </span>
            <span className="font-bold text-slate-900 leading-tight">{content.businessName}</span>
          </a>

          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                {item.label}
              </a>
            ))}
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
            >
              {content.ctaPrimary}
            </a>
          </nav>

          <button
            className="md:hidden grid h-10 w-10 place-items-center rounded-lg hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-nav"
          >
            <span className="relative block h-5 w-6" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-0.5 w-6 bg-slate-800 transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-6 bg-slate-800 transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-6 bg-slate-800 transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-slate-100 bg-white px-4 py-3" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {content.ctaPrimary}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
