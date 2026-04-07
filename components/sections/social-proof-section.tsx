import Image from "next/image";
import Link from "next/link";
import { Star, Users } from "lucide-react";

import { MarketingSkillBox } from "@/components/marketing-skill-box";

const brands = [
  "Northline Digital",
  "Studio Kettle",
  "Parcel & Co",
  "Brightmetric",
  "Layer Labs",
];

const stories = [
  {
    quote:
      "I stopped being the bottleneck. Clients open the portal before they ping me — renewals closed two weeks early.",
    stat: "+18 pts gross retention in 90 days",
    name: "Priya Nanda",
    role: "VP Client Strategy",
    company: "Northline Digital",
    avatar: "https://placehold.co/96x96/c4b5fd/312e81?text=PN",
  },
  {
    quote:
      "We used to lose Mondays to screenshots. Now Monday is for creative again — finance actually trusts our numbers.",
    stat: "Reporting time −11 hrs / account / mo",
    name: "Marcus Hale",
    role: "Managing Director",
    company: "Studio Kettle",
    avatar: "https://placehold.co/96x96/ddd6fe/4c1d95?text=MH",
  },
  {
    quote:
      "The anomaly ping saved us from a client-ghosts-us spiral. We called with context while competitors were still exporting CSVs.",
    stat: "3 at-risk accounts saved same quarter",
    name: "Elena Voss",
    role: "Head of Accounts",
    company: "Parcel & Co",
    avatar: "https://placehold.co/96x96/e9d5ff/5b21b6?text=EV",
  },
  {
    quote:
      "Onboarding used to be six calls. Now we send the live room, they invite stakeholders, day-one wow is real.",
    stat: "Time-to-first-value: 21 → 5 days",
    name: "Jordan Reeves",
    role: "Founder",
    company: "Brightmetric",
    avatar: "https://placehold.co/96x96/fae8ff/86198f?text=JR",
  },
];

export function SocialProofSection() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="scroll-mt-24 bg-slate-50 px-4 py-16 dark:bg-slate-950 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#7C3AED]">
          Social proof where decisions happen
        </p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2
              id="stories-heading"
              className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
            >
              Wins you can steal for your deck
            </h2>
            <p className="mt-3 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Real operators, named titles, numbers they stood behind — not
              polish quotes from &quot;Marketing Person, Tech Co.&quot;
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
            <div
              className="flex items-center gap-0.5 text-amber-500"
              aria-label="4.9 out of 5 stars average rating"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" aria-hidden />
              ))}
            </div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              4.9/5 across 640+ reviews
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Trusted by teams shipping serious work
        </p>
        <div
          className="mt-3 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-slate-200 py-6 dark:border-slate-800 md:justify-between"
          role="list"
        >
          {brands.map((name) => (
            <span
              key={name}
              role="listitem"
              className="text-sm font-semibold text-slate-400 dark:text-slate-500"
            >
              {name}
            </span>
          ))}
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {stories.map((story) => (
            <li
              key={story.name}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <blockquote className="flex-1">
                <p className="text-lg font-medium leading-relaxed text-slate-900 dark:text-white">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-bold text-[#7C3AED] dark:text-violet-300">
                  {story.stat}
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6 dark:border-slate-800">
                <Image
                  src={story.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {story.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {story.role}, {story.company}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex -space-x-2"
              role="img"
              aria-label="Active teams this week"
            >
              {[1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src={`https://placehold.co/64x64/f1f5f9/4F46E5?text=${i}`}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full border-2 border-white object-cover dark:border-slate-900"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
              <span className="font-bold text-slate-900 dark:text-white">
                2,180
              </span>{" "}
              teams active this week — join before your QBR stack gets taller.
            </p>
          </div>
          <Link
            href="#pricing"
            className="inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-95 sm:w-auto"
            aria-label="Start your free trial — opens pricing"
          >
            Start your free trial
          </Link>
        </div>

        <MarketingSkillBox
          technique="Proximity social proof to CTA"
          why="Trust signals beside the button borrow their urgency — doubt drops right when action peaks."
          science="Social proof under uncertainty — conformity when risk feels high."
          swapIdea="Rotate a single testimonial line under the button instead of avatars."
          Icon={Users}
        />
      </div>
    </section>
  );
}
