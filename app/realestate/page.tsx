import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import { realestateContent } from "@/content/realestate";

export const metadata: Metadata = {
  title: `Realestate demo — ${realestateContent.businessName}`,
  description: realestateContent.heroSubtitle,
};

export default function RealestateDemoPage() {
  return <DemoPage content={realestateContent} />;
}
