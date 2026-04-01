"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { duration, smoothEase, staggerContainer, staggerItem } from "@/lib/motion";
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

export function Questions() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-zinc-900 bg-[#0a0a0a] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: duration.md, ease: smoothEase }}
        >
          <SectionLabel className="mb-4">Are you asking</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-white">The Questions</span>
            <br />
            <span className="text-zinc-500">That Matter</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
            At Blake Mott Tennis Consulting, we answer these questions with
            clarity, expertise, and a data-driven, holistic approach.
          </p>
        </motion.div>

        <motion.ul
          className="flex flex-col gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {questions.map((q) => (
            <motion.li
              key={q}
              variants={staggerItem}
              whileHover={
                reduce
                  ? {}
                  : {
                      x: 6,
                      transition: { duration: 0.3, ease: smoothEase },
                    }
              }
              className="flex gap-4 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 transition-colors duration-300 hover:border-emerald-400/25 sm:p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-black">
                <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              <span className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                {q}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
