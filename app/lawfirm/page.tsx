import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import { lawfirmContent } from "@/content/lawfirm";

export const metadata: Metadata = {
  title: `Lawfirm demo — ${lawfirmContent.businessName}`,
  description: lawfirmContent.heroSubtitle,
};

export default function LawfirmDemoPage() {
  return <DemoPage content={lawfirmContent} />;
}
