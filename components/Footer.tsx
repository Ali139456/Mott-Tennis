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
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              High-performance tennis advisory services for athletes, families,
              and coaches worldwide.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Contact
            </p>
            <p className="mt-4 text-sm text-zinc-400">
              <a
                href={`mailto:${SITE.email}`}
                className="transition hover:text-white"
              >
                {SITE.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-zinc-400">{SITE.location}</p>
          </div>
        </div>

        <p className="mt-12 border-t border-zinc-900 pt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} {SITE.footerName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
