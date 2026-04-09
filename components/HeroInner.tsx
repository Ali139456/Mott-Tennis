"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock, Medal, Star, Trophy } from "lucide-react";
import {
  duration,
  smoothEase,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";

export function HeroInner() {
  const reducePref = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  /** Avoid SSR vs client mismatch: treat reduced motion as off until after mount. */
  const reduce = hydrated && !!reducePref;

  return (
    <div
      className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      style={{ marginTop: 96 }}
    >
      <div className="mx-auto max-w-xl text-center sm:mx-0 sm:text-left lg:max-w-2xl">
        <motion.div
          className="mb-5 sm:mb-6"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.lg, ease: smoothEase }}
        >
          <SectionLabel variant="sentence" emphasizeMobile>
            High performance tennis advisory
          </SectionLabel>
        </motion.div>

        <motion.h1
          className="text-center text-5xl font-bold leading-[1.08] tracking-tight sm:text-left sm:text-5xl lg:text-6xl xl:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
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
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white sm:mx-0 sm:text-lg lg:text-xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.md,
            ease: smoothEase,
            delay: reduce ? 0 : 0.16,
          }}
        >
          Elite coaching and mentoring from a former ATP-ranked, Grand Slam
          main draw professional.
          Personalised pathways to take your game from junior competition to the
          professional circuit.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-row flex-nowrap items-stretch justify-center gap-2 sm:mt-10 sm:items-center sm:justify-start sm:gap-4"
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
            className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-emerald-400 px-4 py-3 text-center text-sm font-semibold leading-tight text-black transition hover:bg-emerald-300 sm:w-auto sm:flex-none sm:gap-2 sm:px-8 sm:py-3.5 sm:text-base sm:leading-normal"
          >
            Start Your Journey
            <ArrowRight
              className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
              aria-hidden
            />
          </Link>
          <Link
            href="/pathway"
            className="inline-flex min-w-0 flex-1 items-center justify-center rounded-full bg-zinc-200 px-4 py-3 text-center text-sm font-semibold leading-tight text-black transition hover:bg-white sm:w-auto sm:flex-none sm:px-8 sm:py-3.5 sm:text-base sm:leading-normal"
          >
            View Pro Pathway
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-white/10 pt-8 sm:mt-14 sm:pt-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="mx-auto grid w-full max-w-sm grid-cols-2 justify-items-stretch gap-x-5 gap-y-5 sm:mx-0 sm:max-w-none lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8 xl:gap-x-14">
            <motion.div
              variants={staggerItem}
              className="flex min-h-[5.25rem] w-full min-w-0 flex-col items-center gap-2.5 rounded-2xl border border-white/10 bg-zinc-950/80 px-3 py-3.5 text-center shadow-[0_8px_32px_-12px_rgba(0,0,0,0.65)] ring-1 ring-emerald-500/10 backdrop-blur-md sm:min-h-0 sm:max-w-[11.5rem] sm:flex-row sm:items-start sm:gap-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:ring-0 sm:backdrop-blur-none sm:text-left"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] sm:mt-0.5">
                <Trophy
                  className="h-[1.125rem] w-[1.125rem] text-emerald-400"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-[0.8125rem] font-semibold leading-snug tracking-tight text-white sm:text-sm">
                  ATP Top 200
                </span>
                <span className="text-[11px] font-normal leading-snug tracking-wide text-white/65 sm:text-xs">
                  Career-high ranking
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="flex min-h-[5.25rem] w-full min-w-0 flex-col items-center gap-2.5 rounded-2xl border border-white/10 bg-zinc-950/80 px-3 py-3.5 text-center shadow-[0_8px_32px_-12px_rgba(0,0,0,0.65)] ring-1 ring-emerald-500/10 backdrop-blur-md sm:min-h-0 sm:max-w-[11.5rem] sm:flex-row sm:items-start sm:gap-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:ring-0 sm:backdrop-blur-none sm:text-left"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] sm:mt-0.5">
                <Star
                  className="h-[1.125rem] w-[1.125rem] text-emerald-400"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-[0.8125rem] font-semibold leading-snug tracking-tight text-white sm:text-sm">
                  #1 Junior
                </span>
                <span className="text-[11px] font-normal leading-snug tracking-wide text-white/65 sm:text-xs">
                  Australian ranked
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="flex min-h-[5.25rem] w-full min-w-0 flex-col items-center gap-2.5 rounded-2xl border border-white/10 bg-zinc-950/80 px-3 py-3.5 text-center shadow-[0_8px_32px_-12px_rgba(0,0,0,0.65)] ring-1 ring-emerald-500/10 backdrop-blur-md sm:min-h-0 sm:max-w-[11.5rem] sm:flex-row sm:items-start sm:gap-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:ring-0 sm:backdrop-blur-none sm:text-left"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] sm:mt-0.5">
                <Medal
                  className="h-[1.125rem] w-[1.125rem] text-emerald-400"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-[0.8125rem] font-semibold leading-snug tracking-tight text-white sm:text-sm">
                  Grand Slam
                </span>
                <span className="text-[11px] font-normal leading-snug tracking-wide text-white/65 sm:text-xs">
                  Main-draw player
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="flex min-h-[5.25rem] w-full min-w-0 flex-col items-center gap-2.5 rounded-2xl border border-white/10 bg-zinc-950/80 px-3 py-3.5 text-center shadow-[0_8px_32px_-12px_rgba(0,0,0,0.65)] ring-1 ring-emerald-500/10 backdrop-blur-md sm:min-h-0 sm:max-w-[11.5rem] sm:flex-row sm:items-start sm:gap-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:ring-0 sm:backdrop-blur-none sm:text-left"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] sm:mt-0.5">
                <Clock
                  className="h-[1.125rem] w-[1.125rem] text-emerald-400"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-[0.8125rem] font-semibold leading-snug tracking-tight text-emerald-400 sm:text-sm">
                  <span className="tabular-nums">20+</span>
                </span>
                <span className="text-[11px] font-normal leading-snug tracking-wide text-white/65 sm:text-xs">
                  Years in tennis
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
