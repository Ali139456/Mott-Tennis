"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { scrollViewport } from "@/lib/motion";
import { TwoToneTitle } from "@/components/TwoToneTitle";

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
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    // Wider range = more scrolling per step so the fill feels less rushed.
    offset: ["start 0.85", "end 0.18"],
  });

  /** Stepped target 0 → 1 for each phase (smooth spring below eases between steps). */
  const lineScaleYTarget = useTransform(scrollYProgress, (p) => {
    if (reduce) return 1;
    const n = phases.length;
    if (p <= 0) return 0;
    const step = Math.min(n, Math.ceil(p * n - 0.02));
    return step / n;
  });

  const lineScaleY = useSpring(lineScaleYTarget, {
    stiffness: reduce ? 400 : 28,
    damping: reduce ? 40 : 26,
    mass: reduce ? 0.4 : 1.15,
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 pb-20 pt-10 md:px-12 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center sm:text-left"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel className="mb-6">Your Journey</SectionLabel>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              The Pro
              <br />
              <span className="text-emerald-400">Pathway</span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-white sm:mx-0">
              A structured, personalized roadmap from junior development through
              to the professional circuit — guided every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div ref={timelineRef} className="relative mx-auto max-w-7xl">
          {/* Dim spine — full height */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-0 hidden w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-500/25 via-emerald-500/15 to-emerald-500/5 lg:block"
            aria-hidden
          />
          {/* Bright fill — grows from top, stepped per phase */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-0 z-[1] hidden h-full w-1.5 origin-top -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.45)] lg:block"
            style={{ scaleY: lineScaleY }}
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
                className="absolute left-1/2 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-emerald-400 bg-background ring-4 ring-background lg:block"
                aria-hidden
              />
              <div className={t % 2 === 1 ? "lg:col-start-2" : ""}>
                <div
                  className={`rounded-2xl border border-white/5 bg-gradient-to-br p-8 transition-all duration-500 hover:border-emerald-400/20 md:p-10 ${step.color}`}
                >
                  <div className="mb-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
                    <span className="text-5xl font-bold text-emerald-400">
                      {step.phase}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold">
                        <TwoToneTitle>{step.title}</TwoToneTitle>
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
                        className="flex items-start gap-3 text-sm font-light text-white"
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
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              <span className="text-white">Start Your Pathway </span>
              <span className="text-emerald-400">Today</span>
            </h2>
            <p className="mt-6 text-lg font-light text-white">
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
