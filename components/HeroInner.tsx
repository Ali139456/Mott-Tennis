"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star, Trophy } from "lucide-react";
import {
  duration,
  scrollViewport,
  smoothEase,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";

export function HeroInner() {
  const reduce = useReducedMotion();

  return (
    <div
      className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      style={{ marginTop: 96 }}
    >
      <div className="max-w-xl lg:max-w-2xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: duration.lg, ease: smoothEase }}
        >
          <SectionLabel className="mb-5 sm:mb-6 [&_span]:tracking-[0.32em]">
            High performance tennis advisory
          </SectionLabel>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{
            duration: duration.lg,
            ease: smoothEase,
            delay: reduce ? 0 : 0.08,
          }}
        >
          <span className="block text-white">Unlock Your</span>
          <span className="mt-1 block text-emerald-400 sm:mt-0">
            Full Potential
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:text-xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
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
          className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{
            duration: duration.md,
            ease: smoothEase,
            delay: reduce ? 0 : 0.22,
          }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 text-base font-semibold text-black transition hover:bg-emerald-300"
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <Link
            href="/pathway"
            className="inline-flex items-center justify-center rounded-full bg-zinc-200 px-8 py-3.5 text-base font-semibold text-black transition hover:bg-white"
          >
            View Pro Pathway
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-white/10 pt-8 sm:mt-14 sm:pt-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-10 sm:gap-y-6 lg:gap-x-14">
            <motion.div
              variants={staggerItem}
              className="flex gap-3.5 sm:max-w-[11rem]"
            >
              <Trophy
                className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400"
                strokeWidth={1.35}
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold leading-tight text-white sm:text-base">
                  ATP Top 200
                </span>
                <span className="text-xs leading-snug text-zinc-500 sm:text-sm">
                  Career High Ranking
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="flex gap-3.5 sm:max-w-[11rem]"
            >
              <Star
                className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400"
                strokeWidth={1.35}
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold leading-tight text-white sm:text-base">
                  #1 Junior
                </span>
                <span className="text-xs leading-snug text-zinc-500 sm:text-sm">
                  Australian Ranked
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="flex items-baseline gap-2"
            >
              <span className="text-3xl font-bold tabular-nums text-emerald-400 sm:text-4xl">
                20+
              </span>
              <span className="text-sm text-zinc-500 sm:text-base">
                Years in Tennis
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
