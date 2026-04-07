import type { LucideIcon } from "lucide-react";

type MarketingSkillBoxProps = {
  technique: string;
  why: string;
  science: string;
  swapIdea: string;
  Icon: LucideIcon;
};

export function MarketingSkillBox({
  technique,
  why,
  science,
  swapIdea,
  Icon,
}: MarketingSkillBoxProps) {
  return (
    <details className="group mt-6 max-w-2xl rounded-lg border border-violet-200/80 bg-violet-50/90 text-left dark:border-violet-700/60 dark:bg-violet-950/40">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2 text-sm font-medium text-violet-900 dark:text-violet-100 [&::-webkit-details-marker]:hidden">
        <span
          className="flex size-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] text-white"
          aria-hidden
        >
          <Icon className="size-3.5" strokeWidth={2} />
        </span>
        <span className="flex-1 pr-2">
          Marketing skill unlocked: {technique}
        </span>
        <span className="text-violet-600/80 text-xs group-open:hidden dark:text-violet-300/80">
          Show
        </span>
        <span className="hidden text-xs text-violet-600/80 group-open:inline dark:text-violet-300/80">
          Hide
        </span>
      </summary>
      <div className="space-y-2 border-t border-violet-200/70 px-3 py-3 text-xs leading-relaxed text-slate-700 dark:border-violet-800/60 dark:text-slate-200">
        <p>
          <span className="font-semibold text-violet-800 dark:text-violet-200">
            Why it works:{" "}
          </span>
          {why}
        </p>
        <p>
          <span className="font-semibold text-violet-800 dark:text-violet-200">
            The science:{" "}
          </span>
          {science}
        </p>
        <p>
          <span className="font-semibold text-violet-800 dark:text-violet-200">
            Swap idea (A/B):{" "}
          </span>
          {swapIdea}
        </p>
      </div>
    </details>
  );
}
