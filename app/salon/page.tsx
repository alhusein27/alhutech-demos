import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import { salonContent } from "@/content/salon";

export const metadata: Metadata = {
  title: `Salon demo — ${salonContent.businessName}`,
  description: salonContent.heroSubtitle,
};

export default function SalonDemoPage() {
  return <DemoPage content={salonContent} />;
}
