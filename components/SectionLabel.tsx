import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
  /**
   * `eyebrow` — short label, uppercase, wide tracking.
   * `sentence` — longer line, sentence case (same emerald styling).
   */
  variant?: "eyebrow" | "sentence";
  /** Center the pill in the row (e.g. Credentials, Pricing hero). */
  centered?: boolean;
  /** When `variant="sentence"`, slightly larger pill text below `sm` (e.g. home hero). */
  emphasizeMobile?: boolean;
};

const pillBase =
  "inline-flex items-center justify-center rounded-full border border-zinc-700/90 bg-zinc-900/95 text-emerald-400 ring-1 ring-emerald-500/15";

const pillEyebrow = `${pillBase} px-3 py-1.5 text-[0.625rem] font-semibold uppercase leading-none tracking-[0.18em] sm:px-3.5 sm:py-2 sm:text-[0.6875rem]`;

const pillSentence = `${pillBase} max-w-xl px-3.5 py-2 text-center text-[0.6875rem] font-medium leading-snug tracking-wide normal-case sm:px-4 sm:py-2 sm:text-xs`;

const pillSentenceHero = `${pillBase} max-w-xl px-3.5 py-2 text-center text-xs font-medium leading-snug tracking-wide normal-case sm:px-4 sm:py-2 sm:text-xs`;

export function SectionLabel({
  children,
  className = "",
  variant = "eyebrow",
  centered = false,
  emphasizeMobile = false,
}: SectionLabelProps) {
  const pillClass =
    variant === "sentence"
      ? emphasizeMobile
        ? pillSentenceHero
        : pillSentence
      : pillEyebrow;

  const pill = <div className={pillClass}>{children}</div>;

  if (centered) {
    return (
      <div className={`flex w-full justify-center ${className}`.trim()}>
        {pill}
      </div>
    );
  }

  return (
    <div
      className={`flex w-full justify-center sm:justify-start ${className}`.trim()}
    >
      {pill}
    </div>
  );
}
