import type { DemoContent } from "@/content/types";
import { ALHUTECH_WHATSAPP } from "@/lib/lead";

export default function Footer({ content }: { content: DemoContent }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-bold text-white">{content.businessName}</p>
            <p className="mt-1 text-sm text-slate-400">{content.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {content.addressLines.join(" ")}
              <br />
              {content.hoursLines.join(" · ")}
              <br />
              <a href={`tel:+${ALHUTECH_WHATSAPP}`} className="underline underline-offset-4 hover:text-white">
                {content.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">Demo site crafted by Alhutech Digital Solutions</p>
            <a
              href="https://alhutech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block underline underline-offset-4 hover:text-white"
            >
              alhutech.com
            </a>
            <p className="mt-4 text-xs text-slate-500">
              Fictional demo business. Replace this credit after payment.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          &copy; {year} {content.businessName}. All rights reserved. (Fictional demo business.)
        </div>
      </div>
    </footer>
  );
}
