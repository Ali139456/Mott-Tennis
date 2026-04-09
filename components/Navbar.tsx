"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { smoothEase } from "@/lib/motion";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/pathway", label: "Pathway" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barBg =
    !isHome || scrolled
      ? "border-b border-zinc-800/80 bg-background/90 backdrop-blur-md"
      : "border-b border-transparent bg-transparent";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${barBg}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8 lg:py-5 xl:py-6">
        <Logo />

        <nav className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? "relative rounded-full px-4 py-2 text-sm font-medium text-emerald-300 transition-all duration-200 lg:px-5 lg:py-2.5 lg:text-base " +
                      "bg-gradient-to-b from-emerald-400/20 to-emerald-400/5 shadow-[inset_0_0_0_1px_rgba(52,211,153,0.35)] ring-1 ring-emerald-400/25 " +
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    : "group relative rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200 lg:px-5 lg:py-2.5 lg:text-base " +
                      "hover:bg-white/[0.07] hover:text-emerald-300 " +
                      "after:pointer-events-none after:absolute after:inset-x-4 after:bottom-1.5 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-emerald-400/75 after:transition-transform after:duration-300 after:content-[''] " +
                      "hover:after:scale-x-100 " +
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_1px_0_rgba(0,0,0,0.12)] transition hover:bg-emerald-300 hover:shadow-[0_2px_12px_rgba(52,211,153,0.35)] active:translate-y-px lg:px-6 lg:py-3 lg:text-base"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden border-t border-zinc-800 bg-background/98 md:hidden"
            initial={reduce ? false : { height: 0, opacity: 0.96 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0.96 }}
            transition={{ duration: reduce ? 0 : 0.38, ease: smoothEase }}
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {links.map(({ href, label }, i) => {
                const active = pathname === href;
                return (
                  <motion.div
                    key={href}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduce ? 0 : i * 0.04,
                      duration: 0.3,
                      ease: smoothEase,
                    }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={
                        active
                          ? "block rounded-xl border-l-2 border-emerald-400 bg-gradient-to-r from-emerald-400/15 to-transparent px-4 py-3.5 text-base font-medium text-emerald-300 shadow-[inset_0_0_0_1px_rgba(52,211,153,0.12)]"
                          : "block rounded-xl border-l-2 border-transparent px-4 py-3.5 text-base font-medium text-white/90 transition-colors duration-200 " +
                            "hover:border-emerald-400/40 hover:bg-white/[0.06] hover:text-emerald-300 active:bg-white/[0.04]"
                      }
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduce ? 0 : 0.12,
                  duration: 0.3,
                  ease: smoothEase,
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-black shadow-[0_1px_0_rgba(0,0,0,0.1)] transition hover:bg-emerald-300 hover:shadow-[0_2px_14px_rgba(52,211,153,0.35)] active:translate-y-px"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
