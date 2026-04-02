"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { duration, scrollViewport, smoothEase } from "@/lib/motion";

export function CTA() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="relative border-t border-zinc-900 bg-[#0a0a0a] py-24 sm:py-32"
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={{ duration: duration.lg, ease: smoothEase }}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-emerald-500/[0.09] via-emerald-500/[0.03] to-transparent sm:h-44"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to Elevate{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            Your Game?
          </span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white sm:text-lg">
          Join athletes worldwide who trust Blake Mott Tennis Consulting to
          guide their journey from aspiration to achievement.
        </p>
        <motion.div
          className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{
            duration: duration.md,
            ease: smoothEase,
            delay: reduce ? 0 : 0.12,
          }}
        >
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 text-base font-semibold text-black transition hover:bg-emerald-300 hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.5)]"
          >
            View Plans &amp; Pricing
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700/90 bg-zinc-950/60 px-8 py-3.5 text-base font-semibold text-white transition hover:border-emerald-400/35 hover:bg-zinc-900/70"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
