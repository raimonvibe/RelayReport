"use client";

import Link from "next/link";
import { Scale } from "lucide-react";
import { useState } from "react";

import { MarketingSkillBox } from "@/components/marketing-skill-box";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    tagline: "First escape from spreadsheet night shifts",
    monthly: 49,
    annual: 468,
    bullets: [
      "Instead of chasing exports, you connect five sources once and breathe.",
      "Instead of guessing who saw the report, you see opens and shares.",
      "Instead of generic slides, you ship white-labeled rooms on your domain.",
    ],
    ctaLabel: "Start your free trial",
  },
  {
    name: "Pro",
    tagline: "When renewals need receipts, not vibes",
    monthly: 129,
    annual: 1236,
    popular: true,
    bullets: [
      "Instead of Monday rescue missions, alerts fire when the story changes.",
      "Instead of begging BI for cuts, you slice by segment in two clicks.",
      "Instead of one hero, every AM gets a playbook tied to their book.",
    ],
    ctaLabel: "Start your free trial",
  },
  {
    name: "Scale",
    tagline: "Multi-brand chaos meets enterprise calm",
    monthly: 319,
    annual: 3062,
    bullets: [
      "Instead of duplicating workspaces, you govern hundreds from one grid.",
      "Instead of ticket storms, SSO and SCIM keep IT out of your DMs.",
      "Instead of guessing ROI, exec exports land quarterly without a chase.",
    ],
    ctaLabel: "Start your free trial",
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 bg-white px-4 py-16 dark:bg-slate-900 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#7C3AED]">
          Pick your adventure level
        </p>
        <h2
          id="pricing-heading"
          className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
        >
          Plans that match how mature your reporting is
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Every tier is written as a bridge: from the suffering you feel today
          to the unblocked week you want. No credit card theatre on trial — we
          win when you win.
        </p>

        <div
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
          role="group"
          aria-label="Billing period"
        >
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Billing
          </span>
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-800">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                !annual
                  ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
              )}
              aria-pressed={!annual}
              aria-label="Show monthly billing prices"
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                annual
                  ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
              )}
              aria-pressed={annual}
              aria-label="Show annual billing prices with discount"
            >
              Annual <span className="text-[#7C3AED]">(save ~20%)</span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const price = annual ? tier.annual / 12 : tier.monthly;
            const period = "/mo";
            return (
              <article
                key={tier.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-slate-50 p-6 dark:bg-slate-950/50",
                  tier.popular
                    ? "border-2 border-[#A855F7] shadow-lg shadow-violet-500/10 dark:shadow-violet-900/20"
                    : "border-slate-200 dark:border-slate-800",
                )}
              >
                {tier.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {tier.tagline}
                </p>
                <p className="mt-6" aria-label={`Price for ${tier.name} tier`}>
                  <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    ${Math.round(price)}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {period}
                  </span>
                  {annual ? (
                    <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                      billed ${tier.annual} / year
                    </span>
                  ) : null}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-slate-700 dark:text-slate-300">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#A855F7]"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex -space-x-1" aria-hidden>
                      <span className="size-5 rounded-full bg-violet-200 dark:bg-violet-800" />
                      <span className="size-5 rounded-full bg-violet-300 dark:bg-violet-700" />
                    </span>
                    4.9/5 avg — teams upgrade after first live client room
                  </div>
                  <Link
                    href="#top"
                    className={cn(
                      "flex w-full items-center justify-center rounded-lg py-3 text-center text-sm font-semibold transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                      tier.popular
                        ? "bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] text-white focus-visible:outline-violet-400"
                        : "border-2 border-slate-200 bg-white text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-white",
                    )}
                    aria-label={`${tier.ctaLabel} for ${tier.name} plan`}
                  >
                    {tier.ctaLabel}
                  </Link>
                  <Link
                    href="#stories"
                    className="flex w-full items-center justify-center rounded-lg py-2 text-center text-sm font-medium text-[#7C3AED] underline-offset-4 hover:underline dark:text-violet-300"
                    aria-label="See a two-minute demo — customer stories"
                  >
                    See a 2-min demo
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
          No credit card. Cancel anytime. Setup in 10 minutes — most teams ship
          a live room the same afternoon.
        </p>

        <MarketingSkillBox
          technique="Anchored tier + decoy annual"
          why="A glowing middle option and annual framing make the sensible choice feel obvious, not pushy."
          science="Anchoring + compromise effect — extremes make the middle attractive."
          swapIdea="Flip the default to monthly for markets allergic to annual math."
          Icon={Scale}
        />
      </div>
    </section>
  );
}
