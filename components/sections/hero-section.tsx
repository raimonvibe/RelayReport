import Image from "next/image";
import { Lightbulb, Rocket } from "lucide-react";
import Link from "next/link";

import { MarketingSkillBox } from "@/components/marketing-skill-box";

function DeviceMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/40"
      aria-hidden
    >
      <div className="flex items-center gap-1.5 rounded-t-lg bg-white/20 px-3 py-2 dark:bg-slate-800/60">
        <span className="size-2 rounded-full bg-white/60" />
        <span className="size-2 rounded-full bg-white/40" />
        <span className="size-2 rounded-full bg-white/30" />
      </div>
      <div className="rounded-b-lg bg-white p-3 dark:bg-slate-900">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800">
          <Image
            src="https://placehold.co/800x500/e2e8f0/4F46E5?text=Client+dashboard+preview"
            alt="RelayReport dashboard showing live client metrics and ready-to-send reports"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 500px"
            loading="lazy"
          />
        </div>
        <p className="mt-2 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
          Live rollups — zero spreadsheet surgery
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#A855F7] px-4 pb-16 pt-10 text-white md:pb-24 md:pt-14"
    >
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-white/80">
            Another Monday, another deck nobody asked for?
          </p>
          <h1
            id="hero-heading"
            className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Client reporting in hours, not weeks
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            For agency leads leaving behind slides + screenshots: RelayReport
            turns messy client work into one live hub, one-click PDFs, and ROI
            that makes renewals boring — in your favor.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#4F46E5] shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Start your free trial — view plans"
            >
              <Rocket className="size-4" aria-hidden />
              Start your free trial
            </Link>
            <Link
              href="#stories"
              className="inline-flex rounded-lg border-2 border-white/80 bg-transparent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="See a two-minute demo — customer stories"
            >
              See a 2-min demo
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <div className="flex -space-x-2" role="img" aria-label="Teams using RelayReport">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  className="size-9 rounded-full border-2 border-[#7C3AED] object-cover ring-2 ring-white/30"
                  src={`https://placehold.co/80x80/ede9fe/4F46E5?text=${i}`}
                  alt=""
                  width={36}
                  height={36}
                  loading="lazy"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-white/95">
              <span className="font-bold text-white">12,400</span> teams already
              escaped the &quot;just one more deck&quot; trap
            </p>
          </div>

          <MarketingSkillBox
            technique="Outcome-in-timeframe headline"
            why="Readers instantly know what they get and how fast, so the brain stops guessing instead of clicking."
            science="Clarity + temporal discounting — concrete near-term wins beat vague promises."
            swapIdea="Lead with the villain: &apos;Stop shipping Friday-night decks.&apos;"
            Icon={Lightbulb}
          />
        </div>
        <DeviceMockup />
      </div>
    </section>
  );
}
