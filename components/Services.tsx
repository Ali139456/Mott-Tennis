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
import { duration, smoothEase, staggerContainer, staggerItem } from "@/lib/motion";
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
    <section className="border-t border-zinc-900 bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
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
          className="mt-14 grid gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map(({ icon: Icon, title, body }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              whileHover={{
                y: reduce ? 0 : -4,
                transition: { duration: 0.35, ease: smoothEase },
              }}
              className="group bg-black p-8 transition-shadow duration-500 hover:shadow-[inset_0_0_0_1px_rgba(52,211,153,0.35),0_20px_50px_-28px_rgba(0,0,0,0.8)]"
            >
              <motion.div
                whileHover={reduce ? {} : { scale: 1.06, rotate: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <Icon
                  className="h-8 w-8 text-emerald-400"
                  strokeWidth={1.25}
                  aria-hidden
                />
              </motion.div>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
