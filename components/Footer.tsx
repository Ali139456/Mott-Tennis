import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pathway", label: "Pathway" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20 xl:py-24">
        <div className="grid gap-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-[minmax(0,1.2fr)_auto_auto_minmax(0,1fr)] lg:items-start lg:gap-x-16 lg:gap-y-14 xl:gap-x-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 lg:gap-3.5">
              <Logo variant="compact" />
              <span className="font-semibold text-white lg:text-lg">
                {SITE.footerName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white lg:mt-5 lg:max-w-sm lg:text-base">
              High-performance tennis advisory services for athletes, families,
              and coaches worldwide.
            </p>
          </div>

          <div className="w-max max-w-full justify-self-start">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 lg:text-sm">
              Navigation
            </p>
            <ul className="mt-4 flex w-max max-w-full flex-col gap-3.5 lg:mt-5 lg:gap-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white transition hover:text-emerald-400 lg:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-max max-w-full justify-self-start">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 lg:text-sm">
              Legal
            </p>
            <ul className="mt-4 flex w-max max-w-full flex-col gap-3.5 lg:mt-5 lg:gap-4">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white transition hover:text-emerald-400 lg:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="justify-self-start sm:col-span-2 lg:col-span-1 lg:max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 lg:text-sm">
              Contact
            </p>
            <p className="mt-4 text-sm text-white lg:mt-5 lg:text-base">
              <a
                href={`mailto:${SITE.email}`}
                className="transition hover:text-emerald-400"
              >
                {SITE.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-white lg:text-base">{SITE.location}</p>
          </div>
        </div>

        <p className="mt-16 border-t border-zinc-900 pt-10 text-center text-xs text-white/80 lg:mt-20 lg:pt-12 lg:text-sm">
          © {new Date().getFullYear()} {SITE.footerName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
