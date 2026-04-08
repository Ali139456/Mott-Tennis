import type { ReactNode } from "react";

type Props = {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, index, title, children }: Props) {
  return (
    <section
      id={id}
      className="group relative scroll-mt-28 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/40 via-zinc-950/60 to-zinc-950/90 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition duration-500 ease-out hover:border-emerald-500/30 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.08),0_24px_48px_-28px_rgba(52,211,153,0.12)] sm:p-7 md:p-8"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="flex gap-4 sm:gap-6">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-400/[0.12] text-sm font-bold tabular-nums text-emerald-300 shadow-[0_0_20px_-8px_rgba(52,211,153,0.4)]"
          aria-hidden
        >
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            {title}
          </h2>
          <div
            className="mt-4 text-sm leading-relaxed text-white/75 sm:text-[0.9375rem] [&_h3]:mt-4 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-emerald-100/90 [&_li]:marker:text-emerald-400/55 [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
