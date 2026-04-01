import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import { SectionLabel } from "@/components/SectionLabel";
import { HERO_IMAGE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blake Mott — former ATP professional and junior #1 — high-performance tennis consulting worldwide.",
};

export default function AboutPage() {
  return (
    <InnerPage>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <SectionLabel className="mb-4">About</SectionLabel>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Blake Mott
            </h1>
            <p className="mt-2 text-xl text-zinc-500">
              Former ATP professional · Junior #1 Australia
            </p>
            <div className="prose prose-invert mt-8 max-w-none text-zinc-300 prose-p:leading-relaxed">
              <p>
                Blake&apos;s career spans the highest levels of junior and
                professional tennis. That lived experience — the travel, the
                pressure, the micro-decisions that compound over years — informs
                a consulting style that is direct, practical, and grounded in
                what actually moves the needle.
              </p>
              <p className="mt-4">
                Today, Blake works with ambitious players, families, and coaches
                who want a clear plan: what to train, how to compete, when to
                push, and when to consolidate. The goal is not motivation for
                its own sake — it&apos;s measurable progress with fewer costly
                detours.
              </p>
              <p className="mt-4">
                Engagements blend on-court logic (technique, tactics, patterns)
                with the realities of scheduling, psychology, and long-term
                athlete development.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-emerald-400 px-8 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Work with Blake
            </Link>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-800 lg:sticky lg:top-32">
            <Image
              src={HERO_IMAGE_URL}
              alt="Blake Mott on court"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </InnerPage>
  );
}
