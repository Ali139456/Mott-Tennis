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

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Logo variant="compact" />
              <span className="font-semibold text-white">
                {SITE.footerName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white">
              High-performance tennis advisory services for athletes, families,
              and coaches worldwide.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white transition hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Contact
            </p>
            <p className="mt-4 text-sm text-white">
              <a
                href={`mailto:${SITE.email}`}
                className="transition hover:text-emerald-400"
              >
                {SITE.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-white">{SITE.location}</p>
          </div>
        </div>

        <p className="mt-12 border-t border-zinc-900 pt-8 text-center text-xs text-white/80">
          © {new Date().getFullYear()} {SITE.footerName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
