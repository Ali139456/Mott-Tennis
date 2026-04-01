"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { duration, smoothEase } from "@/lib/motion";

export function CTA() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="border-t border-zinc-900 bg-[#0a0a0a] py-24 sm:py-32"
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: duration.lg, ease: smoothEase }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to Elevate{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
            Your Game?
          </span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Join athletes worldwide who trust Blake Mott Tennis Consulting to
          guide their journey from aspiration to achievement.
        </p>
        <motion.div
          className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            className="inline-flex items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/50 px-8 py-3.5 text-base font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
