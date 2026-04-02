import Image from "next/image";
import { HERO_IMAGE_URL } from "@/lib/constants";
import { HeroInner } from "./HeroInner";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-start pb-24 pt-24 md:pb-28">
      <Image
        src={HERO_IMAGE_URL}
        alt="Tennis player in action"
        fill
        priority
        className="object-cover object-[72%_center] sm:object-[78%_center] lg:object-[85%_center]"
        sizes="100vw"
      />
      {/* Dark on the left for type; lighter on the right so the player reads */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/35 md:from-background md:via-background/55 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/50" />

      <HeroInner />
    </section>
  );
}
