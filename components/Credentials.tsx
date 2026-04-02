"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  duration,
  scrollViewport,
  smoothEase,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

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
          <div className="flex w-full max-w-md items-center justify-center gap-4">
            <span className="h-px flex-1 max-w-[4rem] bg-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Credentials
            </span>
            <span className="h-px flex-1 max-w-[4rem] bg-emerald-400" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Why Blake Mott?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Insight from firsthand professional experience combined with a
            data-driven, evidence-based approach to player development.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
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
                      y: -6,
                      transition: { duration: 0.35, ease: smoothEase },
                    }
              }
              className="rounded-xl bg-zinc-950/25 px-6 py-8 text-center transition-shadow duration-500 hover:shadow-[0_0_40px_-16px_rgba(52,211,153,0.22)]"
            >
              <p className="text-2xl font-bold text-emerald-400 sm:text-3xl">
                {value}
              </p>
              <p className="mt-2 text-sm text-zinc-400">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
