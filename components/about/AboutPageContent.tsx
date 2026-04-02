"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Briefcase,
  Heart,
  Layers,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ABOUT_PORTRAIT_URL } from "@/lib/constants";
import { duration, scrollViewport, smoothEase } from "@/lib/motion";

const gallery = [
  {
    src: "/8fde8aec7_ChatGPTImageNov17202504_32_13PM.png",
    alt: "Blake Mott competing at Australian Open",
    objectClass: "object-top",
  },
  {
    src: "/237e6606a_38b022d7-d94b-4649-8e4f-11214950dd16.jpeg",
    alt: "Blake Mott on tour",
    objectClass: "object-center",
  },
] as const;

const principles = [
  {
    icon: Briefcase,
    title: "Professional Experience",
    description:
      "With a career-high ATP ranking inside the top 200 and years competing at the highest level, Blake brings firsthand knowledge of what it takes to succeed on tour.",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Approach",
    description:
      "Every recommendation is backed by evidence, analytics, and proven methodologies. We track progress with measurable KPIs and adjust dynamically.",
  },
  {
    icon: Layers,
    title: "Holistic Development",
    description:
      "Tennis excellence requires more than technique. We integrate mental performance, physical conditioning, and strategic intelligence into every plan.",
  },
  {
    icon: Heart,
    title: "Athlete Wellbeing",
    description:
      "Sustainable success comes from balanced development. We prioritize the long-term health, happiness, and growth of every athlete.",
  },
] as const;

export function AboutPageContent() {
  const reduce = useReducedMotion();

  return (
    <div className="bg-[#0a0a0a]">
      <section className="px-4 pb-16 pt-12 sm:px-6 md:px-12 md:pb-20 md:pt-20 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.lg, ease: smoothEase }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-px w-12 shrink-0 bg-emerald-500"
                  aria-hidden
                />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                  About
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                Blake
                <br />
                <span className="text-white/30">Mott</span>
              </h1>
              <p className="mt-8 text-lg font-light leading-relaxed text-white/50">
                A former ATP top-200 professional and Australia&apos;s number
                one junior at ages 13, 14, and 15, Blake Mott has spent over 20
                years at the top tier of tennis — both as a player and as a
                trusted advisor.
              </p>
              <p className="mt-6 text-base font-light leading-relaxed text-white/40">
                After competing on the professional circuit and experiencing
                every challenge the pathway throws at emerging players, Blake
                founded his consulting practice to provide athletes and
                families with the guidance he wishes was available during his
                own journey.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: smoothEase,
                delay: reduce ? 0 : 0.2,
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5">
                <Image
                  src={ABOUT_PORTRAIT_URL}
                  alt="Blake Mott"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-white/10 bg-[#0a0a0a]/90 p-6 backdrop-blur-md">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">
                      ATP 200
                    </p>
                    <p className="mt-1 text-xs text-white/30">Ranking</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">#1</p>
                    <p className="mt-1 text-xs text-white/30">Junior AUS</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">20+</p>
                    <p className="mt-1 text-xs text-white/30">Years</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f0f0f] px-4 py-24 sm:px-6 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: duration.lg, ease: smoothEase }}
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span
                className="h-px w-12 shrink-0 bg-emerald-500"
                aria-hidden
              />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Mission
              </span>
              <span
                className="h-px w-12 shrink-0 bg-emerald-500"
                aria-hidden
              />
            </div>
            <p className="text-2xl font-light italic leading-relaxed text-white/70 md:text-3xl">
              &ldquo;Our mission is to provide a high-performance blueprint for
              athletes and their families, combining proven professional and
              junior career experience with modern analytical tools. We aim to
              cultivate not only elite tennis skills but also the mental
              resilience and strategic intelligence required to excel at the
              highest levels.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {gallery.map((item, t) => (
              <motion.div
                key={item.src}
                initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={scrollViewport}
                transition={{
                  duration: 0.5,
                  ease: smoothEase,
                  delay: reduce ? 0 : t * 0.1,
                }}
                className="relative h-[400px] overflow-hidden rounded-xl border border-white/5"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-cover transition-transform duration-700 hover:scale-105 ${item.objectClass}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px md:grid-cols-2 md:gap-px">
            {principles.map((item, t) => (
              <motion.div
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={{
                  duration: 0.5,
                  ease: smoothEase,
                  delay: reduce ? 0 : t * 0.1,
                }}
                className="group border border-white/5 p-10 transition-all duration-500 hover:border-emerald-500/20"
              >
                <item.icon
                  className="mb-6 h-6 w-6 text-emerald-400"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/40">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 md:px-12 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: duration.md, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Let&apos;s Work Together
            </h2>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-10 py-6 text-base font-semibold text-black transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              Get In Touch
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
