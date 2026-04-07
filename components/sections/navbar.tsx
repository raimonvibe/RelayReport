"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#problem", label: "The struggle" },
  { href: "#features", label: "Superpowers" },
  { href: "#stories", label: "Wins" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4"
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white"
        >
          <span
            className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#A855F7] text-sm font-bold text-white"
            aria-hidden
          >
            R
          </span>
          RelayReport
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-[#4F46E5] dark:text-slate-300 dark:hover:text-violet-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="#pricing"
            className="hidden rounded-lg bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] px-4 py-2 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-95 md:inline-flex"
            aria-label="Start your free trial — opens pricing section"
          >
            Start free trial
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 md:hidden dark:border-slate-600 dark:text-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-slate-100 transition-[max-height,opacity] duration-300 ease-out md:hidden dark:border-slate-800",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#pricing"
              className="mt-2 block rounded-lg bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] px-3 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
              aria-label="Start your free trial — opens pricing section"
            >
              Start free trial
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
