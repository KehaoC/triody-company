export type CaseBlock =
  | string
  | { image: string; caption?: string }
  | { video: string; caption?: string }
  | { ref: string; label: string };

export type CaseItem = {
  slug: string;
  title: string;
  description: string;
  industry: string;
  problem: string[];
  solution: CaseBlock[];
};

export const cases: CaseItem[] = [
  {
    slug: "guru",
    title: "Guru ｜ Auto Ad Placement Agent",
    description:
      "End-to-end automated ad ops for 50+ mobile games across every major platform.",
    industry: "Ads",
    problem: [
      "Guru Game runs over 50 mobile game titles across Google Ads, Meta Ads, and Apple Ads — each needing fresh creatives daily. Design teams spent days producing ad variations. Ad ops teams spent entire days manually uploading creatives platform by platform, title by title. The math simply didn't work.",
      "They needed a system that could discover trending topics, generate matching creatives, place ads across every platform, and learn from performance data — all autonomously. And they needed it fast.",
    ],
    solution: [
      "We designed and deployed a 4-stage end-to-end agent that transforms Guru Game's entire ad operations into a continuous improvement loop.",

      "Stage 1 — Hot Topic Discovery. The agent continuously filters RSS feeds across the web, surfacing trending topics and creative angles for each game's target audience. These signals flow into ggbond, our internal discovery engine that matches trends to specific game titles, generating actionable creative briefs around the clock. What used to be a creative team guessing at what might work is now a data-driven pipeline that finds what's already working and adapts it.",

      { image: "/cases/guru/ggbond-repo.png", caption: "ggbond — the internal discovery engine that matches RSS trends to game titles (closed source per client requirement)" },
      { image: "/cases/guru/ggbond-repo-2.png", caption: "ggbond repo internals — the engine behind automated creative brief generation" },

      "Stage 2 — Creative Generation. From each brief, the agent produces high-quality ad creatives at scale — hundreds of variations ready for A/B testing in minutes. Work that previously consumed the design team's entire week now runs automatically.",

      "Stage 3 — Cross-Platform Placement. The agent connects to ad platforms through MCP (Model Context Protocol) servers, automating campaign creation and creative upload across Google Ads and Meta Ads for all 50+ titles simultaneously. No more logging into three different dashboards and repeating the same flow for every single title.",

      { ref: "https://github.com/googleads/google-ads-mcp", label: "google-ads-mcp" },
      { ref: "https://github.com/pipeboard-co/meta-ads-mcp", label: "meta-ads-mcp" },

      "To complete the operational picture, we integrated the agent with Feishu (Lark) for internal notifications and workflow coordination — built in the pre-lark-cli era by directly interfacing with Feishu's backend API.",

      "Stage 4 — Analytics & Feedback. Performance data from every platform, every title, every creative flows into GF — our private deployment of Google Mixboard. The analytics engine identifies winning patterns and routes insights back to Stage 1, closing the loop. Every ad dollar spent makes the next one smarter.",

      { ref: "https://github.com/KehaoC/GF", label: "GF — Google Mixboard private deployment" },

      "We didn't just ship code remotely. We flew to the Guru Game office for on-site FDE (Foundational Deployment Engineering), ensuring the agent meshed with their real infrastructure, real workflows, and real constraints.",

      { image: "/cases/guru/fde-photo.jpg", caption: "On-site FDE at Guru Game office (shared with employer consent)" },

      { image: "/cases/guru/gurugame-site.png", caption: "Guru Game — gurugame.ai" },
      { ref: "https://gurugame.ai/", label: "Guru Game" },

      "The impact, measured:",

      "ggbond became the idea engine for the entire creative team — serving ~30 people who now start every campaign with data-backed creative briefs instead of blank-page brainstorming.",

      "GF Mixboard replaced Google Mixboard as the creative team's primary image generation platform, covering ~20 people. Creative generation efficiency: 10x.",

      "The Guru Agent saves each ad optimizer 3 hours per day on creative uploads — time now spent on strategy, not data entry. Meanwhile, the system monitors the entire data platform in real time, flagging traffic anomalies 24/7 before a single dollar is wasted.",

      "End result: the team's ad campaign cycle compressed from 7 days to 2 days. Not a marginal gain — a structural change in how fast a 50-title portfolio can move.",
    ],
  },
  {
    slug: "dianshi",
    title: "点石 ｜ Auto Video Editing Agent",
    description:
      "Automated viral video pipeline — from template discovery to final cut, 3–4x editor throughput.",
    industry: "E-comm",
    problem: [
      "青岛点石文具 needs a constant stream of high-performing video ads for their extensive product catalog. The manual pipeline — find viral references, write scripts, cut footage, add subtitles and music — was their biggest bottleneck.",
      "Each video editor in the Qingdao team could produce only 3 videos per day. With hundreds of SKUs to promote across multiple e-commerce platforms, the math didn't work. Products went without video support. Revenue was left on the table. The team needed to break through a throughput ceiling that manual workflows simply couldn't cross.",
    ],
    solution: [
      "We built an automated video production agent on top of FireRed-OpenStoryline, an open-source video generation framework. Starting from a solid open-source foundation allowed us to deliver a production-ready system rapidly — and the client's requirements were extensive and specific:",

      { image: "/cases/dianshi/requirements.png", caption: "点石视频自动化需求清单 — 涵盖从脚本到成片的完整 pipeline 需求" },

      "Based on these requirements, we designed a modular system architecture. Each stage — template discovery, script generation, automated editing, subtitle generation, voiceover, and music layering — operates as an independent, tunable component. The team can adjust creative quality per stage without touching the rest of the pipeline.",

      { image: "/cases/dianshi/architecture.jpg", caption: "点石 Agent 系统架构 — 模块化设计，每阶段独立可调" },

      "The video below demonstrates the FireRed-OpenStoryline base system in action. This is the foundation we built upon and customized for 点石. The deployed version cannot be shown publicly due to confidentiality terms — but the core video generation capability is demonstrated here.",

      { video: "/cases/dianshi/demo.mp4", caption: "FireRed-OpenStoryline 基座 Demo（二次开发基座；定制版本因保密条款无法公开展示）" },

      { ref: "https://github.com/FireRedTeam/FireRed-OpenStoryline", label: "FireRed-OpenStoryline" },

      "The agent integrates directly with the team's existing file storage and workflow tools. Editors don't need to learn a new system — output lands where they already work, ready for review and final polish.",

      "The results, measured in the Qingdao team's own numbers:",

      "Each video editor went from producing 3 videos per day to 10–12 videos per day. A 3–4x throughput increase per person — meaning the same team can now support the entire product catalog without hiring.",

      "We achieved this while keeping token costs exceptionally low through a Token Plan strategy: critical creative decisions — script structure, hook design, pacing — route through top-tier models where quality matters most. Routine processing — subtitle generation, format conversion, music layering — uses cost-efficient secondary models. Every AI inference dollar is maximized for creative impact, not wasted on commodity tasks.",

      { ref: "https://baike.baidu.com/item/%E9%9D%92%E5%B2%9B%E7%82%B9%E7%9F%B3%E6%96%87%E5%85%B7%E7%94%A8%E5%93%81%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/18876990", label: "青岛点石文具用品有限公司" },
    ],
  },
  {
    slug: "sysu-hospital",
    title: "SYSU Cancer Center ｜ Patient Triage Agent",
    description:
      "WeChat triage system for post-surgical cancer patients — because buried messages cost lives.",
    industry: "Health",
    problem: [
      "After cancer surgery, many patients in China face a cruel reality: they can't afford extended hospitalization, so they go home. But complications don't stay in the hospital. A fever that might be nothing. A wound that won't heal. A pain that could be normal recovery — or a life-threatening infection.",
      "These patients trust exactly one person: the chief physician who performed their surgery. Not an AI chatbot. Not a general practitioner. Their surgeon. When they can't get a response on WeChat — the doctor is in surgery, in rounds, with other patients — some travel hundreds of kilometers back to the hospital. Some kneel in the hallway outside the doctor's office, desperate for an answer to a message sent days ago.",
      "The doctor, already stretched beyond human limits, finds these messages buried in an endless inbox. A patient asking about medication timing looks identical to a patient describing sepsis symptoms. Both are just unread WeChat messages. This wasn't just inefficient — it was dangerous. The cost of missing one critical message was unthinkable.",
    ],
    solution: [
      "We built an AI agent connected to the physician's personal WeChat account, serving a chief physician at Sun Yat-sen University Cancer Center. On a regular schedule, the agent reads incoming patient messages, classifies each by clinical urgency, and produces a prioritized digest.",

      "The agent understands enough clinical context to distinguish 'I feel a bit tired today' from 'My surgical wound is oozing and I have a 39°C fever' — and escalates accordingly. A patient with critical post-operative symptoms is flagged immediately and surfaced to the top. A routine medication refill question is batched for later review. The doctor opens a structured briefing instead of scrolling through an undifferentiated, anxiety-inducing list.",

      "Due to patient privacy and medical data sensitivity, we cannot show the actual deployed system with real patient information. The screenshot below demonstrates the same triage logic using de-sensitized scenarios — built with wx-cli for WeChat integration and opencli for the agent orchestration layer.",

      { image: "/cases/sysu-hospital/demo.jpg", caption: "去敏感场景 Demo — 基于 wx-cli 和 opencli 实现的微信消息分级系统（为保护患者隐私，使用脱敏测试数据）" },

      { ref: "https://www.sysucc.org.cn/linchuangzhuanjia", label: "中山大学肿瘤防治中心" },

      "The impact: the doctor's message-processing time dropped from hours of scrolling through WeChat every day to a focused 15-minute triage review. Critical post-surgical cases surface in minutes, not days.",

      "But the real outcome isn't measured in time saved. It's measured in what no longer happens: no patient with a life-threatening post-surgical complication gets buried in the inbox. No one has to travel across the country and kneel in a hospital hallway to be heard. Behind the metrics are real people — patients who now get a response when it matters most.",
    ],
  },
  {
    slug: "cross-border",
    title: "Cross-Border ｜ Agent Team for Customer Win-Back",
    description:
      "A multi-agent team deployed on sloke.ai — division of labor, unified management, 60%+ return rate reduction.",
    industry: "CBEC",
    problem: [
      "A cross-border e-commerce business runs an independent storefront with customers across multiple time zones. Orders come in at all hours — especially midnight in the customer's local time, when the merchant is asleep.",
      "The problem: a customer places an order at 2 AM, gets no immediate confirmation or guidance, wakes up anxious, and by morning has already filed a dispute or requested a refund. Return rates and dispute rates were eating into margins. Customer acquisition costs were being wasted on buyers who would never return.",
      "A single customer service agent couldn't solve this — the problem spans time zones, languages, logistics tracking, and the psychology of buyer anxiety. It demanded a system, not a bot.",
    ],
    solution: [
      "Instead of a monolithic chatbot, we designed and deployed an agent team on sloke.ai — four specialized agents working in concert, each owning a distinct part of the customer journey. This architecture draws from the skill-based collaboration patterns in Alibaba's Accio Work framework, adapted for cross-border e-commerce.",

      { image: "/cases/cross-border/01.png", caption: "Agent Team 管理面板 — 多 Agent 分工协作，统一调度与监控" },

      "The team operates in clearly defined roles:",

      "Order Guardian — activates within seconds of an order being placed. Adds the customer on WhatsApp and delivers a warm, personalized confirmation with tracking info, delivery timeline, and a direct help channel. No matter the time zone, no matter the language. Response time: under 30 seconds, 24/7.",

      "Logistics Tracker — monitors every shipping milestone (dispatch, customs clearance, last-mile delivery) and pushes proactive updates. The customer never wonders where their package is. Anxiety drops before it has a chance to build.",

      { image: "/cases/cross-border/02.png", caption: "Agent 协作工作流 — 订单触发 → 客服响应 → 物流追踪 → 主动干预" },

      "Risk Monitor — analyzes sentiment and behavioral signals in real time to detect early signs of buyer's remorse or confusion. Before a dispute is filed, the agent triggers a personalized intervention: additional product information, a reassurance message, or an escalation to human support when the situation requires empathy beyond AI's reach.",

      "Trust Builder — follows up post-delivery with care instructions, usage tips, and complementary product suggestions based on purchase history. Not spam — timely, relevant information timed to the moment the customer is most engaged with the product.",

      { image: "/cases/cross-border/03.png", caption: "数据分析面板 — 实时监控客户响应率、退货率、LTV 变化趋势" },

      "All four agents are managed through a unified control panel on sloke.ai. The merchant sees every interaction, can adjust messaging tone and escalation rules, and can override any agent decision. The agents learn from every interaction — continuously improving accuracy and personalization across the team.",

      "The results:",

      "Return rate dropped by over 60%. Dispute rate fell to near zero. Customer lifetime value increased as one-time buyers who felt supported became repeat purchasers — without any discounting or margin sacrifice.",

      "Cost-wise, this agent team replaced what would have required a 5-person customer service team working in rotating shifts to cover all time zones. The monthly operational cost is a fraction of a single full-time hire — and the agents don't sleep, don't get sick, and don't forget to follow up.",
    ],
  },
];

export function getCase(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
