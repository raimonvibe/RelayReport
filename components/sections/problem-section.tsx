import { AlertCircle, Clock, Target, TrendingDown } from "lucide-react";

import { MarketingSkillBox } from "@/components/marketing-skill-box";

const pains = [
  {
    Icon: AlertCircle,
    title: "Clients ping you for numbers you already have",
    story:
      "Before: answers live in five tools and a napkin. After: one link shows proof — you look like the pro who anticipated the question.",
  },
  {
    Icon: Clock,
    title: "Reporting eats your best PM hours",
    story:
      "Before: copy-paste Sundays. After: schedules that run themselves — you reclaim the block on your calendar labeled &quot;deep work&quot; that was always a lie.",
  },
  {
    Icon: TrendingDown,
    title: "Renewals wobble when ROI is vibes",
    story:
      "Before: subjective &quot;we crushed it.&quot; After: trendlines tied to dollars — finance approves, clients stay, fire drills quiet down.",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="scroll-mt-24 bg-slate-50 px-4 py-16 dark:bg-slate-950 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#7C3AED]">
          Problem · Agitation · Solution
        </p>
        <h2
          id="problem-heading"
          className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
        >
          The old way doesn&apos;t need better fonts. It needs fewer miracles.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          We&apos;ve been there too — swapping hero metrics at midnight while
          the client asks &quot;can we see last quarter again but compared to
          TikTok?&quot; That&apos;s the villain. You&apos;re the hero; RelayReport
          is the bridge from chaos to calm.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {pains.map(({ Icon, title, story }) => (
            <li
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400">
                <Icon className="size-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {story}
              </p>
            </li>
          ))}
        </ul>

        <MarketingSkillBox
          technique="Personified enemy (old way)"
          why="Naming a shared villain builds empathy faster than listing product specs."
          science="In-group bonding and contrast framing — us vs. the broken workflow."
          swapIdea="Name a specific ritual: &apos;The Sunday screenshot sprint.&apos;"
          Icon={Target}
        />
      </div>
    </section>
  );
}
