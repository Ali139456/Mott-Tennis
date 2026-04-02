"use client";

import {
  Brain,
  Dumbbell,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  duration,
  scrollViewport,
  smoothEase,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";

const services = [
  {
    icon: Target,
    title: "Junior Pathway & Development",
    body: "Personalized training schedules, tournament planning, and ranking strategies tailored to your progression toward ATP/WTA competition.",
  },
  {
    icon: Video,
    title: "Performance Analysis",
    body: "In-depth video analysis of match play, technical review of strokes, serve mechanics, shot selection, and match strategy.",
  },
  {
    icon: Brain,
    title: "Mental Performance",
    body: "Resilience training, focus techniques, and stress management strategies to help you thrive under competitive pressure.",
  },
  {
    icon: Users,
    title: "Parental Guidance",
    body: "Support for parents navigating the competitive pathway, tournament planning, and managing expectations effectively.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Nutrition",
    body: "Strength, conditioning, and nutrition guidance aligned to maximize on-court performance and accelerate recovery.",
  },
  {
    icon: TrendingUp,
    title: "Pro Transition Mentorship",
    body: "Advisory for juniors moving into professional circuits, including tournament selection, sponsorship, and career planning.",
  },
] as const;

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-zinc-900 bg-[#0a0a0a] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: duration.md, ease: smoothEase }}
        >
          <SectionLabel className="mb-4">Services</SectionLabel>
          <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-white">Core Consulting</span>
            <br />
            <span className="text-zinc-500">Areas</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {services.map(({ icon: Icon, title, body }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              whileHover={
                reduce ? undefined : { y: -2, transition: { duration: 0.25, ease: smoothEase } }
              }
              className="group flex flex-col rounded-2xl border border-zinc-800/90 bg-zinc-900/35 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:border-emerald-400 hover:bg-emerald-950/90 hover:shadow-[0_0_0_1px_rgb(52,211,153),0_12px_48px_-12px_rgba(52,211,153,0.2)] sm:p-9"
            >
              <div className="inline-flex w-fit rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] p-3.5 transition-all duration-300 group-hover:border-emerald-400 group-hover:bg-emerald-400/25 group-hover:shadow-[0_0_20px_-4px_rgba(52,211,153,0.45)]">
                <Icon
                  className="h-6 w-6 shrink-0 text-emerald-400 transition-colors duration-300 group-hover:text-emerald-200"
                  strokeWidth={1.4}
                  aria-hidden
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                {body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
