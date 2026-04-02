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
import { SectionLabel } from "@/components/SectionLabel";
import { TwoToneTitle } from "@/components/TwoToneTitle";

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
      <section className="px-4 pb-16 pt-4 sm:px-6 md:px-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="text-center lg:text-left"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.lg, ease: smoothEase }}
            >
              <SectionLabel className="mb-6">About</SectionLabel>
              <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                Blake{" "}
                <span className="text-emerald-400">Mott</span>
              </h1>
              <p className="mt-8 text-lg font-light leading-relaxed text-white">
                A former ATP top-200 professional and Australia&apos;s number
                one junior at ages 13, 14, and 15, Blake Mott has spent over 20
                years at the top tier of tennis — both as a player and as a
                trusted advisor.
              </p>
              <p className="mt-6 text-base font-light leading-relaxed text-white">
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
                    <p className="mt-1 text-xs text-white">Ranking</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">#1</p>
                    <p className="mt-1 text-xs text-white">Junior AUS</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">20+</p>
                    <p className="mt-1 text-xs text-white">Years</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-zinc-900/80 bg-[#0a0a0a] px-4 pb-16 pt-16 sm:px-6 md:px-12 md:pb-24 md:pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(52,211,153,0.08)_0%,transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: duration.lg, ease: smoothEase }}
          >
            <SectionLabel centered className="mb-8 md:mb-10">
              Mission
            </SectionLabel>
            <figure className="mx-auto max-w-3xl rounded-2xl border border-white/[0.07] bg-zinc-950/50 px-6 py-9 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:px-10 sm:py-11 md:px-12 md:py-12">
              <span
                className="mb-4 block font-serif text-5xl leading-none text-emerald-500/35 sm:text-6xl"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="space-y-5 text-left sm:space-y-6 sm:text-center">
                <p className="text-base font-light leading-[1.75] text-white/90 sm:text-lg md:text-[1.125rem] md:leading-[1.8]">
                  Our mission is to provide a high-performance blueprint for
                  athletes and their families, combining proven professional and
                  junior career experience with modern analytical tools.
                </p>
                <p className="text-base font-light leading-[1.75] text-white/90 sm:text-lg md:text-[1.125rem] md:leading-[1.8]">
                  We aim to cultivate not only elite tennis skills but also the
                  mental resilience and strategic intelligence required to excel
                  at the highest levels.
                </p>
              </blockquote>
            </figure>
          </motion.div>
        </div>

        <div
          className="relative mx-auto mt-14 max-w-xs md:mt-20 md:max-w-md"
          aria-hidden
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        </div>

        <div className="relative mx-auto mt-12 max-w-7xl md:mt-16">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
            {gallery.map((item, t) => (
              <motion.div
                key={item.src}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={{
                  duration: 0.55,
                  ease: smoothEase,
                  delay: reduce ? 0 : t * 0.08,
                }}
                className="group relative h-[min(400px,70vw)] overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/30 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.04] sm:h-[420px] md:h-[440px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${item.objectClass}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/20 opacity-80 transition-opacity duration-500 group-hover:opacity-60"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent"
                  aria-hidden
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900/80 px-4 py-20 sm:px-6 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7">
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
                whileHover={
                  reduce
                    ? undefined
                    : { y: -4, transition: { duration: 0.3, ease: smoothEase } }
                }
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/55 to-zinc-950/95 p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-500 ease-out sm:items-start sm:p-9 sm:text-left md:p-10 hover:border-emerald-500/30 hover:from-emerald-950/40 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.1),0_20px_48px_-24px_rgba(52,211,153,0.15)]"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent opacity-70 transition-opacity duration-500 group-hover:via-emerald-400/70 group-hover:opacity-100"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/[0.07] blur-2xl transition-all duration-500 group-hover:bg-emerald-400/12"
                  aria-hidden
                />
                <div className="relative inline-flex rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] p-3.5 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/15">
                  <item.icon
                    className="h-7 w-7 text-emerald-400 sm:h-8 sm:w-8"
                    strokeWidth={1.35}
                    aria-hidden
                  />
                </div>
                <h3 className="relative mt-7 text-xl font-semibold tracking-tight sm:text-2xl">
                  <TwoToneTitle>{item.title}</TwoToneTitle>
                </h3>
                <p className="relative mt-4 text-sm font-light leading-relaxed text-white/90 sm:text-[0.9375rem] sm:leading-relaxed">
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
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              <span className="text-white">Let&apos;s Work </span>
              <span className="text-emerald-400">Together</span>
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
