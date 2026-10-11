"use client";

/**
 * Slim "you are viewing a demo" bar pinned to the very top of every demo
 * route page. Dismissible via the × button; DemoPage keeps the visibility
 * state (persisted for the session in sessionStorage) and shifts the sticky
 * Header down 40px while the bar is shown.
 */
export default function DemoBar({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="sticky top-0 z-[60] min-h-[40px] bg-[#0B3D2E] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-1.5 sm:px-6">
        <a
          href="/"
          className="text-xs font-semibold text-white transition hover:text-[#D9A419] sm:text-sm"
        >
          <span aria-hidden="true">← </span>All demos
        </a>

        <p className="hidden text-xs text-white/75 md:block">
          Demo website crafted by <span className="font-semibold text-[#D9A419]">Alhutech Digital Solutions</span>
        </p>

        <div className="flex items-center gap-2">
          <a
            href="https://alhutech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#D9A419] px-3.5 py-1.5 text-xs font-bold text-[#0B3D2E] transition hover:brightness-105 sm:text-sm"
          >
            Get a website like this <span aria-hidden="true">→</span>
          </a>
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss demo banner"
            className="grid h-7 w-7 place-items-center rounded-full text-lg leading-none text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    </div>
  );
}
