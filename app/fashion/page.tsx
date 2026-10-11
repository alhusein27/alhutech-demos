import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import { fashionContent } from "@/content/fashion";

export const metadata: Metadata = {
  title: `Fashion demo — ${fashionContent.businessName}`,
  description: fashionContent.heroSubtitle,
};

export default function FashionDemoPage() {
  return <DemoPage content={fashionContent} />;
}
