import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Superpowers" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#stories", label: "Customers" },
      { href: "#problem", label: "Why we exist" },
      { href: "#top", label: "Security" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#stories", label: "Templates" },
      { href: "#faq", label: "Help center" },
      { href: "#pricing", label: "API docs" },
    ],
  },
];

export function FooterSection() {
  return (
    <footer
      className="border-t border-slate-200 bg-white px-4 py-14 dark:border-slate-800 dark:bg-slate-900"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p id="footer-heading" className="sr-only">
              Site footer
            </p>
            <Link href="#top" className="flex items-center gap-2 text-lg font-bold">
              <span
                className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#A855F7] text-sm text-white"
                aria-hidden
              >
                R
              </span>
              RelayReport
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-600 dark:text-slate-400">
              Live client reporting for agencies tired of being the human refresh
              button.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href="https://twitter.com"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED] dark:border-slate-700 dark:text-slate-300"
                aria-label="RelayReport on X (Twitter)"
              >
                <Twitter className="size-4" aria-hidden />
              </Link>
              <Link
                href="https://linkedin.com"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED] dark:border-slate-700 dark:text-slate-300"
                aria-label="RelayReport on LinkedIn"
              >
                <Linkedin className="size-4" aria-hidden />
              </Link>
              <Link
                href="https://github.com"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED] dark:border-slate-700 dark:text-slate-300"
                aria-label="RelayReport on GitHub"
              >
                <Github className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {col.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-700 hover:text-[#4F46E5] dark:text-slate-300 dark:hover:text-violet-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-100 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RelayReport. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#top" className="hover:text-[#4F46E5] dark:hover:text-violet-300">
              Privacy
            </Link>
            <Link href="#top" className="hover:text-[#4F46E5] dark:hover:text-violet-300">
              Terms
            </Link>
            <Link href="#top" className="hover:text-[#4F46E5] dark:hover:text-violet-300">
              Cookies
            </Link>
          </div>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-slate-400 dark:text-slate-500">
          Micro-lesson: clarity beats cleverness — when in doubt, delete the joke
          and add one specific number your buyer can repeat in a meeting.
        </p>
      </div>
    </footer>
  );
}
