import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import { restaurantContent } from "@/content/restaurant";

export const metadata: Metadata = {
  title: `Restaurant demo — ${restaurantContent.businessName}`,
  description: restaurantContent.heroSubtitle,
};

export default function RestaurantDemoPage() {
  return <DemoPage content={restaurantContent} />;
}
