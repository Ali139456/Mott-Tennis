import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 shrink-0 bg-emerald-400" aria-hidden />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
        {children}
      </span>
    </div>
  );
}
