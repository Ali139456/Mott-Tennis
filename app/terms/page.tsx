import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalSection } from "@/components/legal/LegalSection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.name} — blakemott.com`,
};

const legalLink = "font-medium text-emerald-400 underline-offset-2 hover:underline";

const toc = [
  { id: "about-us", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "bookings", label: "Bookings & payments" },
  { id: "risk", label: "Assumption of risk" },
  { id: "liability", label: "Limitation of liability" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "conduct", label: "User conduct" },
  { id: "privacy", label: "Privacy" },
  { id: "third-party", label: "Third-party services" },
  { id: "changes", label: "Changes to terms" },
  { id: "governing-law", label: "Governing law" },
  { id: "contact", label: "Contact" },
] as const;

export default function TermsPage() {
  return (
    <InnerPage>
      <LegalPageShell
        toc={toc}
        title={
          <>
            Terms of{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Service
            </span>
          </>
        }
        subtitle={`${SITE.name} — rules for using blakemott.com and engaging our advisory services.`}
        otherDocHref="/privacy"
        otherDocLabel="Privacy Policy"
      >
        <LegalSection id="about-us" index={1} title="About Us">
          <p>
            {SITE.name}, operating under the legal entity Blake Terry Mott ABN
            97 126 824 234, (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            provides tennis coaching, advisory services, programs, and related
            content via{" "}
            <Link href="https://blakemott.com" className={legalLink}>
              blakemott.com
            </Link>{" "}
            (&quot;Website&quot;).
          </p>
          <p>
            By using this Website or engaging our services, you agree to these
            Terms.
          </p>
        </LegalSection>

        <LegalSection id="services" index={2} title="Services">
          <p>We provide:</p>
          <ul>
            <li>Tennis coaching (in-person and/or online)</li>
            <li>Performance advisory and consulting</li>
            <li>Training programs, content, and resources</li>
          </ul>
          <p>
            All services are subject to availability and may be modified at any
            time.
          </p>
        </LegalSection>

        <LegalSection id="bookings" index={3} title="Bookings & payments">
          <ul>
            <li>All sessions must be booked in advance</li>
            <li>Payment terms will be specified at the time of booking</li>
            <li>We may use third-party providers (e.g. Stripe) for payments</li>
          </ul>
          <h3>Cancellations</h3>
          <ul>
            <li>Minimum 24 hours&apos; notice required</li>
            <li>Late cancellations or no-shows may be charged in full</li>
          </ul>
        </LegalSection>

        <LegalSection id="risk" index={4} title="Assumption of risk">
          <p>
            Participation in tennis and physical training involves risk of
            injury.
          </p>
          <p>By participating, you:</p>
          <ul>
            <li>Acknowledge and accept these risks</li>
            <li>Confirm you are medically fit to participate</li>
            <li>Agree to follow all safety instructions</li>
          </ul>
          <p>
            To the maximum extent permitted by law, we are not liable for
            injuries arising from participation.
          </p>
        </LegalSection>

        <LegalSection id="liability" index={5} title="Limitation of liability">
          <p>To the extent permitted under Australian law:</p>
          <ul>
            <li>We are not liable for indirect or consequential loss</li>
            <li>
              Our total liability is limited to the amount paid for services
            </li>
            <li>
              Nothing in these Terms excludes rights under the Australian
              Consumer Law.
            </li>
          </ul>
        </LegalSection>

        <LegalSection
          id="intellectual-property"
          index={6}
          title="Intellectual property"
        >
          <p>
            All content on this Website (including programs, videos, materials)
            is owned by us or licensed to us.
          </p>
          <p>You may not:</p>
          <ul>
            <li>Copy, reproduce, or distribute content</li>
            <li>Use content for commercial purposes</li>
          </ul>
        </LegalSection>

        <LegalSection id="conduct" index={7} title="User conduct">
          <p>You agree not to:</p>
          <ul>
            <li>Misuse the Website</li>
            <li>Provide false information</li>
            <li>Interfere with systems or security</li>
          </ul>
        </LegalSection>

        <LegalSection id="privacy" index={8} title="Privacy">
          <p>
            Your use of this Website is also governed by our{" "}
            <Link href="/privacy" className={legalLink}>
              Privacy Policy
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection id="third-party" index={9} title="Third-party services">
          <p>
            We may use third-party platforms (e.g. booking systems, payment
            providers). We are not responsible for their services or policies.
          </p>
        </LegalSection>

        <LegalSection id="changes" index={10} title="Changes to terms">
          <p>
            We may update these Terms at any time. Continued use constitutes
            acceptance.
          </p>
        </LegalSection>

        <LegalSection id="governing-law" index={11} title="Governing law">
          <p>
            These Terms are governed by the laws of New South Wales, Australia.
          </p>
        </LegalSection>

        <LegalSection id="contact" index={12} title="Contact">
          <p>For enquiries:</p>
          <p>
            Email:{" "}
            <a href="mailto:info@blakemott.com" className={legalLink}>
              info@blakemott.com
            </a>
          </p>
          <p>
            Website:{" "}
            <Link href="https://blakemott.com" className={legalLink}>
              blakemott.com
            </Link>
          </p>
        </LegalSection>
      </LegalPageShell>
    </InnerPage>
  );
}
