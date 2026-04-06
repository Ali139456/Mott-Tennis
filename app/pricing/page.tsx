import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { PricingPlanGrid } from "@/components/pricing/PricingPlanGrid";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Subscription plans for developing juniors through pro transition — month-to-month guidance from a former ATP professional.",
};

const plans = [
  {
    name: "Foundation",
    tier: "foundation" as const,
    price: "349",
    period: "/month",
    description:
      "For developing juniors looking to build a strong competitive base.",
    features: [
      "Monthly 1-on-1 video consultation (60 min)",
      "Personalized development plan",
      "Tournament scheduling guidance",
      "Monthly match video analysis (1 match)",
      "Email support",
      "Access to training resources",
    ],
    popular: false,
  },
  {
    name: "Performance",
    tier: "performance" as const,
    price: "699",
    period: "/month",
    description:
      "For serious competitors targeting national rankings and ITF events.",
    features: [
      "Bi-weekly 1-on-1 video consultations",
      "Comprehensive performance analysis",
      "Match video analysis (3 matches/month)",
      "Technical video analysis",
      "Tactical analysis reports",
      "Mental performance plan",
      "Parental guidance sessions",
      "Priority support & messaging",
      "Tournament strategy & planning",
    ],
    popular: true,
  },
  {
    name: "Elite",
    tier: "elite" as const,
    price: "1,199",
    period: "/month",
    description:
      "For athletes on the path to professional competition — the complete advisory.",
    features: [
      "Weekly 1-on-1 consultations",
      "5 match video analyses",
      "Full technical, tactical & physical review",
      "Mental performance coaching program",
      "Nutrition & fitness integration",
      "Pro transition mentorship",
      "Sponsorship & career guidance",
      "Direct phone/message access to Blake",
      "Custom periodization planning",
    ],
    popular: false,
  },
] as const;

export default function PricingPage() {
  return (
    <InnerPage>
      <div className="bg-[#0a0a0a]">
        <section className="px-4 pb-12 pt-16 sm:px-6 md:px-12 md:pb-20 md:pt-20">
          <div className="mx-auto max-w-7xl text-center">
            <SectionLabel variant="sentence" centered className="mb-6">
              Subscription Plans
            </SectionLabel>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Invest in Your{" "}
              <span className="text-emerald-400">Future</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-emerald-100/85 sm:text-lg">
              Choose the plan that matches your ambition. All plans include
              personalized guidance from a former ATP professional.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 md:px-12 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <PricingPlanGrid plans={plans} />

            <p className="mt-10 text-center text-xs font-light text-emerald-500/80 sm:text-sm">
              All prices in USD. Plans are month-to-month, cancel anytime.
              Custom packages available upon request.
            </p>
          </div>
        </section>
      </div>
    </InnerPage>
  );
}
