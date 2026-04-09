import Link from "next/link";
import { SITE } from "@/lib/constants";

type LogoProps = {
  variant?: "full" | "compact";
  className?: string;
};

export function Logo({ variant = "full", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${className}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-black lg:h-12 lg:w-12 lg:text-base">
        BM
      </span>
      {variant === "full" && (
        <span className="font-semibold tracking-tight text-white lg:text-lg">
          {SITE.name}
        </span>
      )}
    </Link>
  );
}
