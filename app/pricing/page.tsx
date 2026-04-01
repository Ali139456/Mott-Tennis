import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { InnerPage } from "@/components/InnerPage";
import { SectionLabel } from "@/components/SectionLabel";
import { StripeCheckoutButton } from "@/components/pricing/StripeCheckoutButton";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Consulting packages for players, families, and coaches — from performance analysis to full pathway mentorship.",
};

const plans = [
  {
    name: "Performance Review",
    price: "From $490",
    description: "A focused diagnostic for players who want clarity fast.",
    features: [
      "90-minute strategy session (video call)",
      "Match footage review (up to 2 sets)",
      "Written priorities & 30-day action plan",
    ],
    cta: "Enquire",
    featured: false,
    checkoutTier: "performance" as const,
  },
  {
    name: "Development Partnership",
    price: "From $1,890 / month",
    description: "Ongoing advisory for juniors and transitioning pros.",
    features: [
      "Fortnightly coaching calls",
      "Tournament calendar & ranking strategy",
      "Video analysis + technical checkpoints",
      "Parent alignment sessions (as needed)",
    ],
    cta: "Get started",
    featured: true,
    checkoutTier: "development" as const,
  },
  {
    name: "Elite Mentorship",
    price: "Custom",
    description: "High-touch support for professional schedules and teams.",
    features: [
      "Weekly touchpoints & crisis support",
      "Travel-week planning and opponent prep",
      "Team coordination (coach, S&C, physio)",
      "Sponsorship and career positioning guidance",
    ],
    cta: "Contact us",
    featured: false,
  },
] as const;

export default function PricingPage() {
  return (
    <InnerPage>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionLabel className="mb-4">Pricing</SectionLabel>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Plans built
          <br />
          <span className="text-zinc-500">around your goals</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Every engagement starts with a conversation. Packages can be tailored
          to age, level, and the intensity of support you need.
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col border p-8 ${
                plan.featured
                  ? "border-emerald-400/60 bg-emerald-400/5 ring-1 ring-emerald-400/40"
                  : "border-zinc-800 bg-zinc-900/20"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 w-fit rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Most popular
                </span>
              )}
              <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
              <p className="mt-2 text-2xl font-bold text-emerald-400">
                {plan.price}
              </p>
              <p className="mt-3 text-sm text-zinc-400">{plan.description}</p>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-zinc-300">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden
                    />
                    {f}
                  </li>
                ))}
              </ul>
              {"checkoutTier" in plan && plan.checkoutTier ? (
                <StripeCheckoutButton
                  tier={plan.checkoutTier}
                  className={
                    plan.featured
                      ? "mt-8 inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold transition bg-emerald-400 text-black hover:bg-emerald-300 disabled:opacity-70"
                      : "mt-8 inline-flex w-full justify-center rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800/50 disabled:opacity-70"
                  }
                >
                  {plan.cta}
                </StripeCheckoutButton>
              ) : (
                <Link
                  href="/contact"
                  className="mt-8 inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold transition border border-zinc-600 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800/50"
                >
                  {plan.cta}
                </Link>
              )}
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-zinc-500">
          Prices shown as a guide — final scope is confirmed after an initial
          consultation.
        </p>
      </div>
    </InnerPage>
  );
}
