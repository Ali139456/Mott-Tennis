"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { duration, scrollViewport, smoothEase, staggerContainer } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";

const questions = [
  "Do I have the right development plan to reach my goals?",
  "Am I training the optimal number of hours without risking burnout?",
  "Which tournaments should I play to maximize ranking and experience?",
  "Am I on track to reach the ranking I aspire to?",
  "Is my technique, tactics, and movement truly optimized?",
  "Am I mentally prepared to perform under pressure?",
  "As a parent, am I giving the right support?",
] as const;

const listSlideDuration = 0.3;

export function Questions() {
  const reduce = useReducedMotion();

  const questionItemVariants = reduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, x: 48 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: listSlideDuration, ease: smoothEase },
        },
      };

  return (
    <section className="relative overflow-hidden border-t border-zinc-800/80 bg-[#0a0a0a] py-20 sm:py-24">
      {/* Atmosphere: layered green glow + faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[min(85vw,640px)] w-[min(85vw,640px)] rounded-full bg-emerald-400/[0.14] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_-10%,rgba(52,211,153,0.22)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_70%_20%,rgba(16,185,129,0.08)_0%,transparent_50%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14 xl:gap-16">
          {/* Left: editorial block */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: duration.lg, ease: smoothEase }}
            className="max-w-xl text-center sm:text-left lg:max-w-lg"
          >
            <SectionLabel variant="sentence" className="mb-6 sm:mb-8">
              Are you asking
            </SectionLabel>
            <h2 className="text-[2.75rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl sm:leading-[0.98] lg:text-7xl">
              The Questions
              <br />
              <span className="text-emerald-400">That Matter</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white sm:text-xl sm:leading-relaxed">
              At Blake Mott Tennis Advisory, we answer these questions with
              clarity, expertise, and a data-driven, holistic approach.
            </p>
          </motion.div>

          <div>
            <motion.ul
              className="flex flex-col gap-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
            >
              {questions.map((q) => (
                <motion.li
                  key={q}
                  variants={questionItemVariants}
                  className="group flex items-start gap-3 rounded-xl border border-white/[0.06] bg-zinc-950/35 p-3.5 backdrop-blur-sm transition-all duration-300 ease-out sm:gap-3.5 sm:p-4 hover:border-emerald-400/50 hover:bg-emerald-950/90 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.35),0_8px_28px_-12px_rgba(52,211,153,0.2)]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-black shadow-[0_0_14px_-2px_rgba(52,211,153,0.5)] transition-transform duration-300 group-hover:scale-[1.03] group-hover:bg-white group-hover:text-emerald-600">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-normal leading-snug text-white transition-colors duration-300 sm:text-[0.9375rem] sm:leading-snug">
                    {q}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
