import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Rocket, Shield } from "lucide-react";

import { MarketingSkillBox } from "@/components/marketing-skill-box";

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#A855F7] px-4 py-16 text-white md:py-24"
    >
      <div className="relative mx-auto max-w-4xl text-center">
        <h2
          id="final-cta-heading"
          className="text-3xl font-bold tracking-tight md:text-4xl"
        >
          Your frantic deck season ends today.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          You already do hero work — RelayReport is how your clients see it
          without you becoming a human refresh button.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#4F46E5] shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Start your free trial — view pricing"
          >
            <Rocket className="size-4" aria-hidden />
            Start your free trial
          </Link>
          <Link
            href="#stories"
            className="inline-flex rounded-lg border-2 border-white/85 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="See a two-minute demo — success stories"
          >
            See a 2-min demo
          </Link>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-sm sm:flex-row sm:gap-8">
          <div
            className="flex -space-x-2"
            role="img"
            aria-label="Teams that joined this month"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={`https://placehold.co/72x72/e0e7ff/4F46E5?text=${i}`}
                className="size-10 rounded-full border-2 border-[#7C3AED] object-cover ring-2 ring-white/30"
                alt=""
                width={40}
                height={40}
                loading="lazy"
              />
            ))}
          </div>
          <p className="text-sm font-medium text-white/95">
            <span className="font-bold text-white">3,420</span> teams joined
            this quarter — the old workflow is losing friends fast.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-white/85">
          <span className="inline-flex items-center gap-1.5">
            <Shield className="size-4" aria-hidden />
            SOC 2 Type II (placeholder)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Shield className="size-4" aria-hidden />
            GDPR-ready DPA
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Shield className="size-4" aria-hidden />
            99.9% uptime SLA (Scale)
          </span>
        </div>

        <MarketingSkillBox
          technique="Mirror-close rally cry"
          why="Repeating the pain in past tense signals closure — the brain treats relief as already in motion."
          science="Temporal self-continuity — ending a painful chapter boosts commitment."
          swapIdea="Close with a deadline tied to a seasonal pain — EOQ, renewals, etc."
          Icon={Lightbulb}
        />
      </div>
    </section>
  );
}
