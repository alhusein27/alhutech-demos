import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import { bakeryContent } from "@/content/bakery";

export const metadata: Metadata = {
  title: `Bakery demo — ${bakeryContent.businessName}`,
  description: bakeryContent.heroSubtitle,
};

export default function BakeryDemoPage() {
  return <DemoPage content={bakeryContent} />;
}
