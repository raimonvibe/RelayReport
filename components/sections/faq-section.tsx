"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Will my clients need another password jungle?",
    a: "No — that’s the anxiety talking. You can invite with magic links, enforce SSO on Scale, or keep them in view-only bliss. We designed for stakeholders who already forgot three passwords this week.",
  },
  {
    q: "What if our stack is weird?",
    a: "Weird is normal. RelayReport connects where your data already lives; if something’s exotic, our team white-gloves the first sync so you’re not debugging JSON on a sprint night.",
  },
  {
    q: "Is this going to embarrass us in front of finance?",
    a: "Finance wants defensible numbers, not vibes. Every chart keeps source lineage, exports match what’s on screen, and you can lock narratives before they ship. Show up sounding like you hired a BI team.",
  },
  {
    q: "Can we white-label without hiring a front-end contractor?",
    a: "Yes. Domains, logos, accent colors, and email bits live in a panel your AM can handle between meetings — no repo access required.",
  },
  {
    q: "What happens when we add five more accounts next quarter?",
    a: "You duplicate playbooks, not workloads. Templates, alert recipes, and folders scale with you. Scale tier is for when procurement enters chat — we’re ready.",
  },
  {
    q: "Do we need an ops person babysitting alerts?",
    a: "Alerts default to smart, not spammy. Quiet hours, severity levels, and routing mean your phone buzzes for money moments — not noise margin wiggles.",
  },
  {
    q: "Can we trial without wiring production on day one?",
    a: "Sandbox with historical CSVs or a read-only slice. Prove the story in a room before you invite the skeptical VP — we’ll cheer from the sidelines.",
  },
  {
    q: "What if it doesn’t work for me?",
    a: "Then we failed the promise, not you. If RelayReport doesn’t cut prep time meaningfully in 30 days, we refund you and eat the lesson — no guilt-trip retention calls. Most teams know within two live client sessions; you’ll feel it or we’ll make it right.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-slate-50 px-4 py-16 dark:bg-slate-950 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#7C3AED]">
          The anxious questions (answered kindly)
        </p>
        <h2
          id="faq-heading"
          className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
        >
          Straight talk, no ticket numbers
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          If something here stirred your stomach, that’s good — it means you
          care about not wasting your team’s reputation. Here’s what we tell
          friends, not prospects.
        </p>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
