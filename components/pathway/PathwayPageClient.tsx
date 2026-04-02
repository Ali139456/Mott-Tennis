"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollViewport } from "@/lib/motion";

const phases = [
  {
    phase: "01",
    title: "Foundation",
    age: "Ages 10–13",
    color: "from-emerald-400/20 to-emerald-400/5",
    items: [
      "Technical fundamentals & stroke development",
      "Introduction to match play & competition",
      "Building a love for the game",
      "Physical literacy & movement foundations",
    ],
  },
  {
    phase: "02",
    title: "Development",
    age: "Ages 13–16",
    color: "from-emerald-300/20 to-emerald-300/5",
    items: [
      "ITF Junior tournament scheduling",
      "Advanced tactical development",
      "Strength & conditioning programming",
      "Mental performance introduction",
      "Ranking strategy & tournament selection",
    ],
  },
  {
    phase: "03",
    title: "Transition",
    age: "Ages 16–18",
    color: "from-emerald-200/20 to-emerald-200/5",
    items: [
      "Transition from juniors to Futures/Challengers",
      "Professional-level physical preparation",
      "Travel & schedule management",
      "Sponsorship & career planning guidance",
      "Advanced match analysis & strategy",
    ],
  },
  {
    phase: "04",
    title: "Professional",
    age: "Ages 18+",
    color: "from-emerald-100/20 to-emerald-100/5",
    items: [
      "ATP/WTA tour schedule optimization",
      "Peak performance management",
      "Recovery & longevity strategies",
      "Career development & branding",
      "Ongoing tactical & mental coaching",
    ],
  },
] as const;

export function PathwayPageClient() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 pb-20 pt-10 md:px-12 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-emerald-400" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Your Journey
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              The Pro
              <br />
              <span className="text-white/30">Pathway</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/40">
              A structured, personalized roadmap from junior development through
              to the professional circuit — guided every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="relative mx-auto max-w-7xl">
          <div
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-emerald-400/40 via-emerald-400/20 to-transparent lg:block"
            aria-hidden
          />

          {phases.map((step, t) => (
            <motion.div
              key={step.phase}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.6, delay: reduce ? 0 : t * 0.1 }}
              className="relative mb-16 grid grid-cols-1 gap-8 lg:mb-24 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className="absolute left-1/2 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-emerald-400 bg-background lg:block"
                aria-hidden
              />
              <div className={t % 2 === 1 ? "lg:col-start-2" : ""}>
                <div
                  className={`rounded-2xl border border-white/5 bg-gradient-to-br p-8 transition-all duration-500 hover:border-emerald-400/20 md:p-10 ${step.color}`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-5xl font-bold text-emerald-400/30">
                      {step.phase}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm font-medium text-emerald-400">
                        {step.age}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm font-light text-white/50"
                      >
                        <div
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Start Your Pathway Today
            </h2>
            <p className="mt-6 text-lg font-light text-white/40">
              Every champion&apos;s journey begins with the right guidance.
            </p>
            <Link
              href="/pricing"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-10 py-6 text-base font-semibold text-black transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]"
            >
              View Subscription Plans
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
