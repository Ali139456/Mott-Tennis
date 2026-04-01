import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} — book a consultation or ask a question.`,
};

export default function ContactPage() {
  return (
    <InnerPage>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionLabel className="mb-4">Contact</SectionLabel>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let&apos;s talk
          <br />
          <span className="text-zinc-500">about your journey</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Share a short overview of the player, current level, and what you
          want to achieve. We&apos;ll follow up with next steps.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <aside className="lg:col-span-2">
            <div className="border border-zinc-800 bg-black/40 p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Direct
              </h2>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 block text-lg text-emerald-400 hover:text-emerald-300"
              >
                {SITE.email}
              </a>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Location
              </h2>
              <p className="mt-3 text-zinc-300">{SITE.location}</p>
              <p className="mt-6 text-sm leading-relaxed text-zinc-500">
                Consultations are available remotely worldwide. In-person
                sessions may be arranged where schedules align.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </InnerPage>
  );
}
