"use client";

import { ArrowRight, Check, Star } from "lucide-react";
import { StripeCheckoutButton } from "@/components/pricing/StripeCheckoutButton";

export type PricingTier = "foundation" | "performance" | "elite";

export type PricingPlan = {
  name: string;
  tier: PricingTier;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  popular: boolean;
};

type Props = {
  plans: readonly PricingPlan[];
};

export function PricingPlanGrid({ plans }: Props) {
  return (
    <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:items-stretch">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={`group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all duration-500 ease-out sm:p-7 ${
            plan.popular
              ? "z-[1] border-emerald-500/45 bg-gradient-to-b from-emerald-950/80 via-zinc-950 to-zinc-950 shadow-[0_0_0_1px_rgba(52,211,153,0.15),0_20px_56px_-24px_rgba(52,211,153,0.32)]"
              : "border-zinc-800/80 bg-gradient-to-b from-zinc-900/50 to-zinc-950 hover:border-emerald-500/30 hover:from-emerald-950/30 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.1),0_16px_48px_-28px_rgba(52,211,153,0.14)]"
          }`}
        >
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent transition-opacity duration-500 ${
              plan.popular
                ? "via-emerald-400/80 opacity-100"
                : "via-emerald-500/30 opacity-40 group-hover:via-emerald-400/50 group-hover:opacity-90"
            }`}
            aria-hidden
          />
          <div
            className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl transition-all duration-500 ${
              plan.popular
                ? "bg-emerald-400/12"
                : "bg-emerald-500/[0.05] group-hover:bg-emerald-400/8"
            }`}
            aria-hidden
          />
          <div className="relative mb-4 flex min-h-[1.75rem] justify-center sm:justify-start">
            {plan.popular ? (
              <div className="inline-flex w-fit items-center gap-1 rounded-full border border-emerald-400/35 bg-emerald-500/[0.12] px-2.5 py-0.5">
                <Star
                  className="h-3 w-3 fill-emerald-400 text-emerald-400"
                  aria-hidden
                />
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-emerald-300 sm:text-[0.65rem]">
                  Most Popular
                </span>
              </div>
            ) : null}
          </div>
          <h2 className="relative text-center text-lg font-bold tracking-tight text-emerald-100 sm:text-left sm:text-xl">
            {plan.name}
          </h2>
          <p className="relative mt-1.5 text-xs font-light leading-relaxed text-emerald-400/80 sm:text-[0.8125rem]">
            {plan.description}
          </p>
          <div className="relative mt-5 mb-6 rounded-xl border border-emerald-500/15 bg-black/35 px-3.5 py-4 sm:mt-6">
            <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0">
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400/90">
                USD
              </span>
              <span className="text-base font-semibold text-emerald-400">$</span>
              <span className="text-4xl font-bold tabular-nums tracking-tight text-emerald-200 sm:text-[2.5rem]">
                {plan.price}
              </span>
              <span className="text-xs font-normal text-emerald-400/75">
                {plan.period}
              </span>
            </div>
          </div>
          <ul className="relative space-y-1.5">
            {plan.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5 rounded-md py-1 pl-0.5 pr-1.5 transition-colors duration-300 hover:bg-emerald-500/[0.06]"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 sm:h-[1.125rem] sm:w-[1.125rem]">
                  <Check
                    className="h-2.5 w-2.5 text-emerald-400 sm:h-3 sm:w-3"
                    strokeWidth={3}
                    aria-hidden
                  />
                </span>
                <span className="text-xs font-light leading-snug text-emerald-100/75 sm:text-[0.8125rem]">
                  {f}
                </span>
              </li>
            ))}
          </ul>
          <StripeCheckoutButton
            tier={plan.tier}
            className={`relative mt-auto shrink-0 pt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-semibold transition-all duration-300 sm:py-4 sm:text-sm disabled:opacity-70 ${
              plan.popular
                ? "bg-emerald-400 text-zinc-950 shadow-[0_0_20px_-6px_rgba(52,211,153,0.55)] hover:bg-emerald-300 hover:shadow-[0_0_28px_-4px_rgba(52,211,153,0.5)]"
                : "border border-emerald-500/25 bg-zinc-950/50 text-emerald-200 hover:border-emerald-400/40 hover:bg-emerald-950/50 hover:text-emerald-100"
            }`}
          >
            Subscribe now
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
          </StripeCheckoutButton>
        </article>
      ))}
    </div>
  );
}
