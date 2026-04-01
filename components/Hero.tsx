import Image from "next/image";
import { HERO_IMAGE_URL } from "@/lib/constants";
import { HeroInner } from "./HeroInner";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-20 md:pt-32">
      <Image
        src={HERO_IMAGE_URL}
        alt="Tennis player in action"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-black/30" />

      <HeroInner />

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  );
}
