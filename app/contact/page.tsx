import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { InnerPage } from "@/components/InnerPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} — Blake responds within 24–48 hours.`,
};

export default function ContactPage() {
  return (
    <InnerPage>
      <ContactPageContent />
    </InnerPage>
  );
}
