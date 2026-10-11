import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import { churchContent } from "@/content/church";

export const metadata: Metadata = {
  title: `Church demo — ${churchContent.businessName}`,
  description: churchContent.heroSubtitle,
};

export default function ChurchDemoPage() {
  return <DemoPage content={churchContent} />;
}
