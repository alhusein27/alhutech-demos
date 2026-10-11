import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import { schoolContent } from "@/content/school";

export const metadata: Metadata = {
  title: `School demo — ${schoolContent.businessName}`,
  description: schoolContent.heroSubtitle,
};

export default function SchoolDemoPage() {
  return <DemoPage content={schoolContent} />;
}
