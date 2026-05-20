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
    slug: "3hour-training",
    title: "3-Hour Agent Internal Training",
    description:
      "On-site enterprise training that empowers every employee to master AI agents — boosting productivity and career growth.",
    body: [
      "Companies invest in AI agents, but adoption fails when employees feel threatened rather than empowered. Our 3-hour on-site training solves this by turning every employee into a capable, confident agent user.",
      "This isn't a generic demo. We teach your team the universal framework for working with agents — effective prompting, output verification, workflow integration — all tailored to your company's specific use cases and existing agent setup. Every minute is relevant to their actual daily work.",
      "The outcome goes beyond productivity metrics. Employees leave with a marketable skill that future-proofs their career, transforming resistance into enthusiasm. When people feel agents make them more valuable — not replaceable — adoption follows naturally.",
      "One 3-hour session. Every employee equipped. Efficiency and well-being addressed in a single morning.",
    ],
  },
  {
    slug: "meta-agent",
    title: "Meta-Agent",
    description:
      "An agent that builds your agent system — dedicated consulting included, $3,000/month.",
    body: [
      "Most transformation leaders know exactly what agents they need — but lack the technical resources to build and maintain them. Meta-Agent is the answer: an agent that builds agents, so you don't need an engineering team.",
      "You describe the problem in plain language. Meta-Agent handles the rest — understanding requirements, scaffolding the system, testing in your environment, deploying to production. What would take a traditional dev team months happens in days.",
      "The $3,000/month subscription includes continuous evolution. As your business changes, Meta-Agent adapts — new workflows, new integrations, new optimizations — all through the same conversational interface. No change requests. No ticket queues. Just describe what you need.",
      "This is built for transformation leaders who need speed and reliability. A production-grade agent system in days, not months — plus ongoing consulting to ensure it stays perfectly aligned with your business goals.",
    ],
  },
];

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
