import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import { carsContent } from "@/content/cars";

export const metadata: Metadata = {
  title: `Cars demo — ${carsContent.businessName}`,
  description: carsContent.heroSubtitle,
};

export default function CarsDemoPage() {
  return <DemoPage content={carsContent} />;
}
