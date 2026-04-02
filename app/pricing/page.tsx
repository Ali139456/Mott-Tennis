import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Subscription plans for developing juniors through pro transition — month-to-month guidance from a former ATP professional.",
};

const plans = [
  {
    name: "Foundation",
    price: "149",
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
    price: "349",
    period: "/month",
    description:
      "For serious competitors targeting national rankings and ITF events.",
    features: [
      "Bi-weekly 1-on-1 video consultations",
      "Comprehensive performance analysis",
      "Match video analysis (4 matches/month)",
      "Technical & tactical review reports",
      "Mental performance sessions",
      "Parental guidance sessions",
      "Priority support & messaging",
      "Tournament strategy & planning",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "699",
    period: "/month",
    description:
      "For athletes on the path to professional competition — the complete advisory.",
    features: [
      "Weekly 1-on-1 consultations",
      "Unlimited match video analysis",
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
            <div className="mb-6 flex items-center justify-center gap-3">
              <span
                className="h-px w-12 shrink-0 bg-emerald-500"
                aria-hidden
              />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Subscription Plans
              </span>
              <span
                className="h-px w-12 shrink-0 bg-emerald-500"
                aria-hidden
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Invest in Your
              <br />
              <span className="text-white/30">Future</span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-white/40">
              Choose the plan that matches your ambition. All plans include
              personalized guidance from a former ATP professional.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 md:px-12 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-px lg:grid-cols-3 lg:gap-px">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative border p-8 transition-all duration-500 md:p-10 ${
                    plan.popular
                      ? "border-emerald-500/40 bg-emerald-500/[0.03]"
                      : "border-white/5 hover:border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <div
                      className="absolute left-0 right-0 top-0 h-px bg-emerald-500"
                      aria-hidden
                    />
                  )}
                  {plan.popular && (
                    <div className="mb-6 flex items-center gap-1.5">
                      <Star
                        className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400"
                        aria-hidden
                      />
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h2 className="mb-2 text-xl font-bold text-white">
                    {plan.name}
                  </h2>
                  <p className="mb-8 text-sm font-light text-white/30">
                    {plan.description}
                  </p>
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-lg text-white/30">$</span>
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-white/30">{plan.period}</span>
                  </div>
                  <ul className="mb-10 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                          aria-hidden
                        />
                        <span className="text-sm font-light text-white/50">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-6 text-sm font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-emerald-500 text-black hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                        : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>

            <p className="mt-12 text-center text-sm font-light text-white/20">
              All prices in AUD. Plans are month-to-month, cancel anytime.
              Custom packages available upon request.
            </p>
          </div>
        </section>
      </div>
    </InnerPage>
  );
}
