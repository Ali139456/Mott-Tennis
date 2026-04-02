import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blake Mott — former ATP professional and junior #1 — mission, experience, and high-performance tennis consulting worldwide.",
};

export default function AboutPage() {
  return (
    <InnerPage>
      <AboutPageContent />
    </InnerPage>
  );
}
