import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alhutech Demo Library — Websites that win customers",
  description:
    "Ten pre-built starter websites for Ghanaian businesses — restaurants, salons, boutiques, churches, real estate, schools, clinics, law firms and car dealers. Crafted by Alhutech Digital Solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
