import Link from "next/link";
import type { ReactNode } from "react";
import { SectionLabel } from "@/components/SectionLabel";

export type LegalTocItem = { id: string; label: string };

type Props = {
  toc: readonly LegalTocItem[];
  title: ReactNode;
  subtitle: string;
  otherDocHref: string;
  otherDocLabel: string;
  children: ReactNode;
};

export function LegalPageShell({
  toc,
  title,
  subtitle,
  otherDocHref,
  otherDocLabel,
  children,
}: Props) {
  return (
    <div className="relative min-h-[60vh] overflow-hidden bg-[#0a0a0a]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)`,
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-[-10%] h-[min(90vw,520px)] w-[min(90vw,520px)] rounded-full bg-emerald-400/[0.09] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(52,211,153,0.14)_0%,transparent_52%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 md:pb-32 md:pt-16 lg:px-8">
        <SectionLabel variant="sentence" className="mb-6 sm:mb-8">
          Legal & compliance
        </SectionLabel>

        <header className="border-b border-white/10 pb-10 md:pb-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.25rem] lg:leading-[1.08]">
                {title}
              </h1>
              <p className="mt-4 text-base font-light leading-relaxed text-white/65 sm:text-lg">
                {subtitle}
              </p>
            </div>
            <Link
              href={otherDocHref}
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/[0.1] px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-400/55 hover:bg-emerald-400/15 hover:text-white"
            >
              {otherDocLabel}
            </Link>
          </div>
        </header>

        <div className="mt-12 lg:mt-14 lg:grid lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-x-8 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] xl:gap-x-12">
          <aside className="mb-12 lg:sticky lg:top-28 lg:mb-0 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
              On this page
            </p>
            <nav
              className="flex flex-col gap-0.5 border-l-2 border-emerald-500/25 py-0.5 pl-4"
              aria-label="Sections"
            >
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="-ml-0.5 rounded-r-lg py-1.5 pl-2 text-sm text-white/55 transition hover:bg-emerald-500/[0.07] hover:text-emerald-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="flex flex-col gap-5 md:gap-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
