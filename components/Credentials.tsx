"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  duration,
  scrollViewport,
  smoothEase,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { SectionLabel } from "@/components/SectionLabel";

const stats = [
  { value: "ATP 200", label: "Career-High Professional Ranking" },
  { value: "#1", label: "Australian Junior at ages 13, 14 & 15" },
  { value: "20+", label: "Years at the Top Tier of Tennis" },
  { value: "Global", label: "Athletes & Families Worldwide" },
] as const;

export function Credentials() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-zinc-900 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: duration.md, ease: smoothEase }}
        >
          <SectionLabel centered className="mb-0">
            Credentials
          </SectionLabel>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="text-white">Why Blake </span>
            <span className="text-emerald-400">Mott?</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white sm:text-lg">
            Insight from firsthand professional experience combined with a
            data-driven, evidence-based approach to player development.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={value}
              variants={staggerItem}
              whileHover={
                reduce
                  ? {}
                  : {
                      y: -4,
                      transition: { duration: 0.35, ease: smoothEase },
                    }
              }
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 to-zinc-950/90 px-6 py-8 text-center shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:border-emerald-500/30 hover:from-emerald-950/50 hover:to-zinc-950 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.12),0_20px_50px_-24px_rgba(52,211,153,0.2)] sm:px-7 sm:py-9"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:via-emerald-400/80 group-hover:opacity-100"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-400/[0.06] blur-2xl transition-all duration-500 group-hover:bg-emerald-400/10"
                aria-hidden
              />
              <p className="relative text-2xl font-bold tabular-nums tracking-tight text-emerald-400 sm:text-3xl">
                {value}
              </p>
              <p className="relative mt-3 text-sm font-light leading-snug text-white/90">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
