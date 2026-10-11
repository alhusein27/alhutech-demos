import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import { clinicContent } from "@/content/clinic";

export const metadata: Metadata = {
  title: `Clinic demo — ${clinicContent.businessName}`,
  description: clinicContent.heroSubtitle,
};

export default function ClinicDemoPage() {
  return <DemoPage content={clinicContent} />;
}
