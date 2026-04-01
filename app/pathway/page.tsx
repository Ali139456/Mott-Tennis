import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { PathwayPageClient } from "@/components/pathway/PathwayPageClient";

export const metadata: Metadata = {
  title: "Pathway",
  description:
    "A structured pathway from junior development through to professional tennis — tournament planning, performance milestones, and mentorship.",
};

export default function PathwayPage() {
  return (
    <InnerPage>
      <PathwayPageClient />
    </InnerPage>
  );
}
