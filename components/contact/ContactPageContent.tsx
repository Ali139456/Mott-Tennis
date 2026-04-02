"use client";

import { Clock, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/constants";
import { duration, smoothEase } from "@/lib/motion";

export function ContactPageContent() {
  const reduce = useReducedMotion();

  return (
    <div className="bg-[#0a0a0a]">
      <section className="px-4 pb-24 pt-12 sm:px-6 md:px-12 md:pb-32 md:pt-20 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              className="text-center lg:text-left"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.lg, ease: smoothEase }}
            >
              <SectionLabel className="mb-6">Contact</SectionLabel>
              <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                Let&apos;s{" "}
                <span className="text-emerald-400">Connect</span>
              </h1>
              <p className="mx-auto mt-8 max-w-md text-lg font-light leading-relaxed text-white lg:mx-0">
                Ready to take the next step? Fill out the form and Blake will
                personally respond within 24–48 hours.
              </p>

              <div className="mt-16 flex w-full flex-col items-start space-y-8 text-left">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <Mail className="h-4 w-4 text-emerald-400" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-emerald-400">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm text-white transition hover:text-emerald-300"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <MapPin className="h-4 w-4 text-emerald-400" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-emerald-400">
                      Location
                    </p>
                    <p className="text-sm text-white">
                      {SITE.location} — Available Worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <Clock className="h-4 w-4 text-emerald-400" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-emerald-400">
                      Response Time
                    </p>
                    <p className="text-sm text-white">Within 24–48 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: duration.lg,
                ease: smoothEase,
                delay: reduce ? 0 : 0.2,
              }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
