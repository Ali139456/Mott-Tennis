"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star, Trophy } from "lucide-react";
import { duration, smoothEase, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";

export function HeroInner() {
  const reduce = useReducedMotion();

  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.lg, ease: smoothEase }}
      >
        <SectionLabel className="mb-6">
          High performance tennis advisory
        </SectionLabel>
      </motion.div>

      <motion.h1
        className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        initial={reduce ? false : { opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: duration.lg,
          ease: smoothEase,
          delay: reduce ? 0 : 0.08,
        }}
      >
        Unlock Your{" "}
        <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
          Full Potential
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-200 sm:text-xl"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: duration.md,
          ease: smoothEase,
          delay: reduce ? 0 : 0.16,
        }}
      >
        Elite coaching and mentoring from a former ATP-ranked professional.
        Personalised pathways to take your game from junior competition to the
        professional circuit.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: duration.md,
          ease: smoothEase,
          delay: reduce ? 0 : 0.22,
        }}
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 text-base font-semibold text-black transition hover:bg-emerald-300 hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)]"
        >
          Start Your Journey
          <ArrowRight className="h-5 w-5" aria-hidden />
        </Link>
        <Link
          href="/pathway"
          className="inline-flex items-center justify-center rounded-full border border-zinc-500/80 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-emerald-400/40 hover:bg-white/15"
        >
          View Pro Pathway
        </Link>
      </motion.div>

      <motion.div
        className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10 lg:gap-14"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={staggerItem}
          className="flex items-center gap-3 text-zinc-200"
        >
          <Trophy
            className="h-6 w-6 shrink-0 text-emerald-400"
            strokeWidth={1.5}
          />
          <span className="text-sm font-medium sm:text-base">
            ATP Top 200 Career High Ranking
          </span>
        </motion.div>
        <motion.div
          variants={staggerItem}
          className="flex items-center gap-3 text-zinc-200"
        >
          <Star
            className="h-6 w-6 shrink-0 text-emerald-400"
            strokeWidth={1.5}
          />
          <span className="text-sm font-medium sm:text-base">
            #1 Junior Australian Ranked
          </span>
        </motion.div>
        <motion.div
          variants={staggerItem}
          className="flex items-baseline gap-2 text-zinc-200"
        >
          <span className="text-3xl font-bold tabular-nums text-emerald-400">
            20+
          </span>
          <span className="text-sm font-medium sm:text-base">
            Years in Tennis
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
