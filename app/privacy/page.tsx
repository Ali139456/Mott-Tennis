import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalSection } from "@/components/legal/LegalSection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name} — how we collect, use, and protect your information.`,
};

const legalLink = "font-medium text-emerald-400 underline-offset-2 hover:underline";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "what-we-collect", label: "What we collect" },
  { id: "how-we-collect", label: "How we collect" },
  { id: "how-we-use", label: "How we use info" },
  { id: "disclosure", label: "Disclosure" },
  { id: "storage-security", label: "Storage & security" },
  { id: "cookies", label: "Cookies" },
  { id: "access-correction", label: "Access & correction" },
  { id: "marketing", label: "Marketing" },
  { id: "international", label: "International transfers" },
  { id: "policy-changes", label: "Changes to policy" },
  { id: "contact", label: "Contact" },
] as const;

export default function PrivacyPage() {
  return (
    <InnerPage>
      <LegalPageShell
        toc={toc}
        title={
          <>
            Privacy{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Policy
            </span>
          </>
        }
        subtitle={`How ${SITE.name} handles personal information under the Privacy Act 1988 (Australia).`}
        otherDocHref="/terms"
        otherDocLabel="Terms of Service"
      >
        <LegalSection id="overview" index={1} title="Overview">
          <p>
            We respect your privacy and are committed to protecting your
            personal information in accordance with the Privacy Act 1988.
          </p>
        </LegalSection>

        <LegalSection
          id="what-we-collect"
          index={2}
          title="What information we collect"
        >
          <h3>Personal information</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Booking details</li>
          </ul>
          <h3>Technical information</h3>
          <ul>
            <li>IP address</li>
            <li>Browser/device information</li>
            <li>Website usage data (via cookies)</li>
          </ul>
        </LegalSection>

        <LegalSection
          id="how-we-collect"
          index={3}
          title="How we collect information"
        >
          <p>We collect information when you:</p>
          <ul>
            <li>Make a booking</li>
            <li>Contact us</li>
            <li>Use our Website</li>
            <li>Subscribe to communications</li>
          </ul>
        </LegalSection>

        <LegalSection
          id="how-we-use"
          index={4}
          title="How we use your information"
        >
          <p>We use your information to:</p>
          <ul>
            <li>Provide services and manage bookings</li>
            <li>Communicate with you</li>
            <li>Improve our services</li>
            <li>Process payments</li>
          </ul>
        </LegalSection>

        <LegalSection id="disclosure" index={5} title="Disclosure of information">
          <p>We may share your information with:</p>
          <ul>
            <li>Payment providers (e.g. Stripe)</li>
            <li>IT and hosting providers</li>
            <li>Professional advisors</li>
          </ul>
          <p>We do not sell your personal information.</p>
        </LegalSection>

        <LegalSection
          id="storage-security"
          index={6}
          title="Data storage & security"
        >
          <p>We take reasonable steps to protect your data, including:</p>
          <ul>
            <li>Secure systems</li>
            <li>Restricted access</li>
            <li>Use of reputable service providers</li>
          </ul>
          <p>However, no system is completely secure.</p>
        </LegalSection>

        <LegalSection id="cookies" index={7} title="Cookies">
          <p>We use cookies to:</p>
          <ul>
            <li>Improve user experience</li>
            <li>Analyse website traffic</li>
          </ul>
          <p>You can disable cookies via your browser settings.</p>
        </LegalSection>

        <LegalSection
          id="access-correction"
          index={8}
          title="Access & correction"
        >
          <p>
            You may request access to or correction of your personal
            information by contacting us.
          </p>
        </LegalSection>

        <LegalSection id="marketing" index={9} title="Marketing">
          <p>
            We may send updates or promotions. You can unsubscribe at any time.
          </p>
        </LegalSection>

        <LegalSection
          id="international"
          index={10}
          title="International transfers"
        >
          <p>
            Some service providers may store data overseas. We take reasonable
            steps to ensure protection.
          </p>
        </LegalSection>

        <LegalSection id="policy-changes" index={11} title="Changes to policy">
          <p>
            We may update this Privacy Policy. The latest version will always be
            on our Website.
          </p>
        </LegalSection>

        <LegalSection id="contact" index={12} title="Contact">
          <p>For privacy enquiries:</p>
          <p>
            Email:{" "}
            <a href="mailto:info@blakemott.com" className={legalLink}>
              info@blakemott.com
            </a>
          </p>
          <p>
            See also our{" "}
            <Link href="/terms" className={legalLink}>
              Terms of Service
            </Link>
            .
          </p>
        </LegalSection>
      </LegalPageShell>
    </InnerPage>
  );
}
