export type CaseItem = {
  slug: string;
  title: string;
  description: string;
  industry: string;
  body: string[];
};

export const cases: CaseItem[] = [
  {
    slug: "guru",
    title: "Guru — Auto Ad Placement Agent",
    description:
      "End-to-end automated ad ops for 50+ mobile games across every major platform.",
    industry: "Ads",
    body: [
      "Guru runs over 50 mobile game titles, each needing simultaneous ad placement across Google Ads, Meta Ads, and Apple Ads. Every platform, every title, every day — with fresh creatives constantly needed. The manual workload was crushing their growth.",
      "We built an end-to-end agent that automates the entire ad operations pipeline in four stages:",

      "Stage 1 — Hot Topic Discovery. The agent crawls trending topics across the web in real time, surfacing actionable creative ideas that align with each game's audience. No more guessing what might work — the agent finds what's already working and adapts it.",

      "Stage 2 — Creative Generation. From each discovered idea, the agent generates high-quality ad images at scale. What used to take a design team days now happens in minutes, with hundreds of variations ready for testing.",

      "Stage 3 — Cross-Platform Placement. The agent handles the heavy lifting of uploading creatives to Google Ads, Meta Ads, and Apple Ads across all 50+ titles. A process that consumed entire teams is now a background operation.",

      "Stage 4 — Analytics Feedback Loop. After placement, the agent ingests performance data from every platform, every title, every creative. It learns what's working and feeds those insights back into Stage 1 — closing the loop for continuous improvement.",

      "Result: 10x ad operations throughput. The team went from drowning in manual uploads to focusing on strategy and creative direction.",
    ],
  },
  {
    slug: "dianshi",
    title: "Dianshi — Auto Video Editing Agent",
    description:
      "Automated viral video pipeline from template discovery to final cut.",
    industry: "E-comm",
    body: [
      "Dianshi needs a constant stream of high-performing video ads for their e-commerce products. The manual editing pipeline — find references, write scripts, cut footage, add subtitles and music — was their biggest bottleneck.",

      "We built an agent that automates the entire video production workflow:",

      "First, the agent continuously scans the web for viral video templates in their niche, analyzing what makes each one work — the pacing, the hook, the transitions, the soundtrack.",

      "From that analysis, it generates scripts tailored to Dianshi's product catalog and matches them against their library of raw footage.",

      "Then the automated editing pipeline kicks in: subtitles are generated and synced, voiceovers are produced, cuts are made to match the template rhythm, and background music is layered in. The entire pipeline runs without human intervention.",

      "What used to take an editor a full day now takes minutes. The team reviews the final output rather than building it from scratch — shifting from production to curation.",

      "Result: 10x video output. More creative variations tested, faster iteration on what works, and a content engine that scales with the business.",
    ],
  },
  {
    slug: "sysu-hospital",
    title: "SYSU Cancer Center — Patient Triage Agent",
    description:
      "WeChat triage system prioritizing critical patient messages — because minutes matter.",
    industry: "Health",
    body: [
      "A chief physician at Sun Yat-sen University Cancer Center faces a relentless stream of patient messages on WeChat. Questions about symptoms, treatment side effects, medication schedules — each one matters, but not all are equally urgent. He can't spend his entire day on his phone, and he shouldn't have to.",

      "We connected an AI agent to his personal WeChat account. On a regular schedule, the agent reads incoming messages, classifies each one by urgency and topic, and produces a prioritized digest.",

      "A patient reporting severe post-surgery symptoms gets flagged immediately. A routine medication question gets batched for later review. The agent understands medical context well enough to distinguish 'I feel a bit tired' from 'I can't breathe' — and escalates accordingly.",

      "The doctor now opens a structured briefing instead of scrolling through an anxiety-inducing message list. He sees what needs his attention right now, what can wait until rounds are done, and what a nurse or resident can handle.",

      "Result: 10x faster triage. Critical cases surface in minutes instead of hours. The doctor's message-processing time dropped from hours per day to a focused 15-minute review. And most importantly: no patient with a life-threatening condition gets buried in the inbox.",
    ],
  },
  {
    slug: "cross-border",
    title: "Cross-Border — Customer Win-Back Agent",
    description:
      "Instant WhatsApp engagement after purchase, slashing return rates.",
    industry: "CBEC",
    body: [
      "A cross-border e-commerce business runs an independent storefront with customers across multiple time zones. Orders come in at all hours — especially midnight in the customer's local time, when the merchant is asleep.",

      "The problem: a customer places an order at 2 AM, gets no immediate confirmation or guidance, wakes up anxious, and by morning has already filed a dispute or requested a refund. Return rates were eating into margins.",

      "We built an agent that steps in the moment an order is placed. No matter the time, the agent instantly adds the customer on WhatsApp and sends a warm, personalized message covering everything they need to know: order confirmation, how to track their package, estimated delivery timeline, and how to get help if needed.",

      "The agent doesn't just send one message — it follows up at key milestones. When the package ships, the customer gets a notification. When it clears customs, another update. When it's out for delivery, a final heads-up.",

      "The psychology is simple: anxiety drives returns. When customers feel informed and supported, they wait. They trust. They buy again.",

      "Result: 10x reduction in post-purchase anxiety. Return rates dropped dramatically. Customer lifetime value increased. And the merchant sleeps through the night while the agent handles every order as if it were business hours.",
    ],
  },
  {
    slug: "red-content",
    title: "RED — Social Content Agent",
    description:
      "Auto-discover trends, generate content, and build community on Xiaohongshu.",
    industry: "Social",
    body: [
      "Building a presence on Xiaohongshu (RED) requires constant content output — trend spotting, drafting, editing, publishing, and engaging with comments. For small teams, this is a full-time job that never ends.",

      "Our agent automates the entire RED content engine. It continuously monitors trending topics and hashtags, identifying patterns that fit the brand's niche before they peak. From each trend, it generates platform-optimized content drafts — the right tone, the right structure, the right keywords.",

      "The agent schedules and publishes posts at data-driven optimal times, then stays engaged: responding to comments, answering product questions, and building the community while the team focuses on strategy and product.",

      "It's not about spamming — the agent maintains a consistent, authentic brand voice. Every response sounds human because it's trained on the brand's actual communication style.",

      "Result: 10x content output. A presence that would require a 3-person social team runs with one person overseeing the agent. More posts, more engagement, more customers — without burning out the team.",
    ],
  },
  {
    slug: "beauty-salon",
    title: "Beauty Salon — Client Experience Agent",
    description:
      "Automated booking, recommendations, and follow-ups that keep clients returning.",
    industry: "Beauty",
    body: [
      "A beauty salon lives and dies by client retention. But the work of keeping clients engaged — booking confirmations, personalized recommendations, birthday offers, post-treatment follow-ups — is endless administrative overhead that pulls owners away from what they do best.",

      "We built an agent that handles the entire client experience lifecycle. When a client messages to book, the agent checks availability, confirms the appointment, and sends a calendar invite — no back-and-forth, no missed messages.",

      "Before each appointment, the agent sends personalized preparation instructions based on the treatment type and the client's history. After the appointment, it follows up to check satisfaction, gather feedback, and recommend next treatments based on what's worked well before.",

      "The agent remembers everything: which treatments each client prefers, when they last visited, their skin type or preferences, even personal details like birthdays. It uses this to send timely, relevant re-engagement messages that feel personal — not automated.",

      "Result: 10x client engagement capacity. The salon owner went from spending 3 hours a day on admin to 20 minutes reviewing the agent's summary. Booking no-shows dropped. Repeat visits increased. And clients consistently comment on how attentive the service feels.",
    ],
  },
];

export function getCase(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
