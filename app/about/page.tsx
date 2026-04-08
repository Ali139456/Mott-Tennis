import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blake Mott — former ATP top-200 professional, Grand Slam main draw player, and Australia's #1 junior — mission, experience, and high-performance tennis advisory worldwide.",
};

export default function AboutPage() {
  return (
    <InnerPage>
      <AboutPageContent />
    </InnerPage>
  );
}
