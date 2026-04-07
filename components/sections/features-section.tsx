import Image from "next/image";
import {
  BarChart2,
  Bell,
  FileStack,
  Layers,
  Link2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { MarketingSkillBox } from "@/components/marketing-skill-box";

const blocks = [
  {
    Icon: Link2,
    title: "Instead of digging through logins, you now share one live room",
    beforeAfter:
      "Before: fifteen tabs and a nervous intern. After: clients refresh one URL; stakeholders stop DMing you for screenshots.",
    metric: "Average 6.3 fewer status pings per account (self-reported)",
    image:
      "https://placehold.co/640x400/f1f5f9/7C3AED?text=Unified+client+hub",
    alt: "Unified client workspace with connected data sources",
  },
  {
    Icon: BarChart2,
    title: "Instead of debating which chart looked good, you now show the one that closed renewals",
    beforeAfter:
      "Before: vanity charts nobody trusted. After: templates tuned for finance-grade questions, export-ready in a click.",
    metric: "Teams report prep time down 73% on quarterly reviews",
    image:
      "https://placehold.co/640x400/e2e8f0/A855F7?text=Board-ready+charts",
    alt: "Board-ready analytics charts and export",
    reverse: true,
  },
  {
    Icon: FileStack,
    title: "Instead of Frankenstein PDFs, you now send one polished story",
    beforeAfter:
      "Before: 40-slide decks that age badly. After: living reports that version themselves — last month's narrative stays truthful.",
    metric: "Median deck build drops from 4h → 28m",
    image: "https://placehold.co/640x400/f8fafc/4F46E5?text=Auto+PDF+narrative",
    alt: "Automated PDF report builder with brand styling",
  },
  {
    Icon: Bell,
    title: "Instead of surprises Friday at 4, you now get nudges while there is still time",
    beforeAfter:
      "Before: client reads a dip before you do. After: anomaly alerts with suggested talking points so you lead the conversation.",
    metric: "42% fewer same-week surprises escalated to leadership",
    image:
      "https://placehold.co/640x400/ede9fe/4F46E5?text=Smart+alert+inbox",
    alt: "Smart alert inbox with suggested responses",
    reverse: true,
  },
  {
    Icon: ShieldCheck,
    title: "Instead of praying IT ignores you, you now roll out with enterprise guardrails",
    beforeAfter:
      "Before: shadow IT and shared passwords. After: SSO, audit trails, and role rules that make security your ally on demos.",
    metric: "SOC 2 Type II friendly controls out of the box",
    image:
      "https://placehold.co/640x400/f1f5f9/7C3AED?text=Security+controls",
    alt: "Security and permissions overview",
  },
  {
    Icon: Sparkles,
    title: "Instead of begging for creative, AI drafts the recap in your voice",
    beforeAfter:
      "Before: writer's block on executive summaries. After: on-brand paragraphs you edit once, not from scratch.",
    metric: "80% of users ship first draft with fewer than 5 edits",
    image:
      "https://placehold.co/640x400/e2e8f0/A855F7?text=AI+summary+draft",
    alt: "AI-assisted executive summary draft in brand voice",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-24 bg-white px-4 py-16 dark:bg-slate-900 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#7C3AED]">
          Solution + Before · After · Bridge
        </p>
        <h2
          id="features-heading"
          className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
        >
          Your new superpowers
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Every capability here is a small story: less scavenger hunt, more
          confident answers. Pick the battle you want to win first — RelayReport
          covers the rest.
        </p>

        <div className="mt-14 space-y-20 md:space-y-28">
          {blocks.map(
            ({ Icon, title, beforeAfter, metric, image, alt, reverse }) => (
              <div
                key={title}
                className="grid gap-10 lg:grid-cols-2 lg:items-center"
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F46E5]/15 via-[#7C3AED]/15 to-[#A855F7]/15 text-[#4F46E5] dark:from-[#4F46E5]/25 dark:text-violet-300">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white md:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    {beforeAfter}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#7C3AED] dark:text-violet-300">
                    {metric}
                  </p>
                </div>
                <div
                  className={`relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-slate-700 ${reverse ? "lg:order-1" : ""}`}
                >
                  <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <MarketingSkillBox
          technique="Before → After micro-stories"
          why="Stories beat feature bullets because people remember change, not jargon."
          science="Contrast effects + episodic memory — concrete scenes stick."
          swapIdea="Lead each block with the metric, then explain how it felt on Tuesday."
          Icon={Layers}
        />
      </div>
    </section>
  );
}
