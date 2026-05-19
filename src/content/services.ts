export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  body: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "15min-diagnostic",
    title: "15-Minute Diagnostic",
    description:
      "Pinpoint your highest-leverage AI agent opportunities — 10x faster than traditional consulting.",
    body: [
      "Most consultancies take weeks just to understand your business. We do it in 15 minutes.",
      "Our rapid diagnostic session cuts straight to what matters: where can AI agents create 10x impact in your operation? We map your workflows, identify the bottlenecks, and deliver a concrete, actionable roadmap — all before your coffee gets cold.",
      "This isn't a sales call dressed up as strategy. You'll walk away with a clear picture of which processes to automate first, what the ROI looks like, and whether we're the right partner to execute it. If we're not, we'll tell you.",
      "Traditional consulting: 4–6 weeks to produce a deck you'll never read. Triody: 15 minutes to a roadmap you'll actually use. That's 10x faster.",
    ],
  },
  {
    slug: "1week-deployment",
    title: "1-Week Rapid Deployment",
    description:
      "From deep requirements to on-site production — all within 7 days.",
    body: [
      "The industry standard for deploying AI agents is 2–3 months. We do it in one week. That's not a typo — it's a 10x difference.",
      "Week one starts with deep requirements gathering: we embed with your team, understand the real workflows, and map the integration points. By day three, we're building. By day five, we're testing in your environment. By day seven, your team is trained and the agent is live in production.",
      "No endless scoping documents. No scope creep. No 'phase two' up-sells. Just the most advanced AI, deployed to the messiest real-world environments, faster than anyone else can deliver.",
      "We move fast because we've done this before. Our playbook is battle-tested across ad tech, e-commerce, healthcare, and more. The agents we deploy aren't demos — they're production-grade from day one.",
      "10x the speed. Zero compromise on quality.",
    ],
  },
  {
    slug: "10year-service",
    title: "10-Year Quality Guarantee",
    description:
      "A decade of continuous optimization and support — 10x the industry commitment.",
    body: [
      "Most AI agencies disappear after deployment. We stay for ten years.",
      "AI doesn't stand still, and neither do we. Our 10-year guarantee means continuous monitoring, proactive model updates, and ongoing optimization as the technology evolves. When GPT-7 drops, your agents are upgraded before you even ask.",
      "This includes dedicated support, regular performance reviews, and a commitment to keep your automation running at peak efficiency. If something breaks at 3 AM, we fix it. If a new model could cut your costs by 30%, we deploy it.",
      "The typical agency retainer lasts 6–12 months and covers surface-level maintenance. Our guarantee spans a decade and covers everything — from emergency fixes to strategic upgrades. That's 10x the commitment.",
      "We can offer this because our agents work. They get better over time, not worse. Ten years isn't a sales promise — it's a natural consequence of building things right the first time.",
    ],
  },
];

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
