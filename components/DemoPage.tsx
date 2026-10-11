"use client";

import { useEffect, useState, type CSSProperties } from "react";
import type { DemoContent } from "@/content/types";
import DemoBar from "./DemoBar";
import Header from "./Header";
import HeroSlider from "./HeroSlider";
import About from "./About";
import ServicesGrid from "./ServicesGrid";
import MenuSection from "./MenuSection";
import ListingGrid from "./ListingGrid";
import { ScheduleRows, EventsList, Steps } from "./InfoSections";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import CTA from "./CTA";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

const DEMO_BAR_DISMISSED_KEY = "alhutech-demo-bar-dismissed";

/**
 * Composes a full demo site from a single DemoContent object.
 * Per-niche branding flows through the `--accent-from` / `--accent-to` CSS variables.
 * Holds the demo-bar visibility state so the sticky Header can sit below it
 * while it is shown and return to the top when it is dismissed.
 */
export default function DemoPage({ content }: { content: DemoContent }) {
  const [barVisible, setBarVisible] = useState(true);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(DEMO_BAR_DISMISSED_KEY) === "1") {
        setBarVisible(false);
      }
    } catch {
      // sessionStorage unavailable — keep the bar visible
    }
  }, []);

  const dismissBar = () => {
    try {
      window.sessionStorage.setItem(DEMO_BAR_DISMISSED_KEY, "1");
    } catch {
      // sessionStorage unavailable — still hide it for this page view
    }
    setBarVisible(false);
  };

  const style = {
    "--accent-from": content.accent.from,
    "--accent-to": content.accent.to,
  } as CSSProperties;

  const hasServices = content.services.length > 0;
  const hasMenu = (content.menuSections?.length ?? 0) > 0;
  const hasListings = (content.listings?.length ?? 0) > 0;

  const servicesHref = hasServices ? "#services" : hasMenu ? "#menu" : hasListings ? "#listings" : "#services";

  const nav: { label: string; href: string }[] = [
    { label: "About", href: "#about" },
    { label: content.servicesNavLabel, href: servicesHref },
  ];
  if (hasListings && servicesHref !== "#listings") nav.push({ label: "Listings", href: "#listings" });
  if (content.scheduleRows?.length) nav.push({ label: "Service Times", href: "#schedule" });
  nav.push({ label: "Gallery", href: "#gallery" });
  nav.push({ label: "Reviews", href: "#reviews" });
  nav.push({ label: "Contact", href: "#contact" });

  return (
    <div id="top" style={style} className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      {barVisible && <DemoBar onDismiss={dismissBar} />}
      <Header content={content} nav={nav} topOffset={barVisible} />
      <main>
        <HeroSlider content={content} />
        <About content={content} />
        <ServicesGrid content={content} />
        <MenuSection content={content} />
        <ListingGrid content={content} />
        <ScheduleRows content={content} />
        <Steps content={content} />
        <EventsList content={content} />
        <Gallery content={content} />
        <Testimonials content={content} />
        <CTA content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
      <WhatsAppFloat content={content} />
    </div>
  );
}
