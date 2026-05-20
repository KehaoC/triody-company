import type { BiText } from "@/lib/types";

export type ServiceItem = {
  slug: string;
  title: BiText;
  description: BiText;
  body: BiText[];
};

function p(en: string, zh: string): BiText {
  return { en, zh };
}

export const services: ServiceItem[] = [
  {
    slug: "15min-diagnostic",
    title: p(
      "15-Minute Diagnostic",
      "15 分钟诊断"
    ),
    description: p(
      "Pinpoint your highest-leverage AI agent opportunities — 10x faster than traditional consulting.",
      "精准定位最高杠杆的 AI Agent 机会——比传统咨询快 10 倍。"
    ),
    body: [
      p(
        "Most consultancies take weeks just to understand your business. We do it in 15 minutes.",
        "大多数咨询公司需要数周才能理解你的业务。我们只要 15 分钟。"
      ),
      p(
        "Our rapid diagnostic session cuts straight to what matters: where can AI agents create 10x impact in your operation? We map your workflows, identify the bottlenecks, and deliver a concrete, actionable roadmap — all before your coffee gets cold.",
        "快速诊断直接切中要害：AI Agent 在你的运营中哪里能创造 10 倍影响？我们梳理你的工作流、定位瓶颈、给出具体可执行的路线图——在你咖啡凉掉之前。"
      ),
      p(
        "This isn't a sales call dressed up as strategy. You'll walk away with a clear picture of which processes to automate first, what the ROI looks like, and whether we're the right partner to execute it. If we're not, we'll tell you.",
        "这不是披着策略外衣的销售电话。你会带着清晰的认知离开：哪些流程应该优先自动化、ROI 预估是多少、以及我们是否适合执行它。如果不合适，我们会直说。"
      ),
      p(
        "Traditional consulting: 4–6 weeks to produce a deck you'll never read. Triody: 15 minutes to a roadmap you'll actually use. That's 10x faster.",
        "传统咨询：4–6 周做一份你永远不会看的 PPT。Triody：15 分钟产出一份你会真正使用的路线图。快 10 倍。"
      ),
    ],
  },
  {
    slug: "1week-deployment",
    title: p(
      "1-Week Rapid Deployment",
      "一周快速部署"
    ),
    description: p(
      "From deep requirements to on-site production — all within 7 days.",
      "从深度需求到现场投产——7 天内完成。"
    ),
    body: [
      p(
        "The industry standard for deploying AI agents is 2–3 months. We do it in one week. That's not a typo — it's a 10x difference.",
        "部署 AI Agent 的行业标准是 2–3 个月。我们一周完成。不是笔误——这是 10 倍的差距。"
      ),
      p(
        "Week one starts with deep requirements gathering: we embed with your team, understand the real workflows, and map the integration points. By day three, we're building. By day five, we're testing in your environment. By day seven, your team is trained and the agent is live in production.",
        "第一天深入需求：我们融入你的团队，理解真实工作流，绘制集成节点。第三天开建。第五天在你的环境里测试。第七天你的团队已受训，Agent 在生产环境中运作。"
      ),
      p(
        "No endless scoping documents. No scope creep. No 'phase two' up-sells. Just the most advanced AI, deployed to the messiest real-world environments, faster than anyone else can deliver.",
        "没有无尽的需求文档。没有范围蔓延。没有「第二期」追加销售。只有最先进的 AI，部署到最复杂的真实环境中，比任何人都快。"
      ),
      p(
        "We move fast because we've done this before. Our playbook is battle-tested across ad tech, e-commerce, healthcare, and more. The agents we deploy aren't demos — they're production-grade from day one.",
        "我们快是因为我们做过。我们的手册在广告技术、电商、医疗等多个领域经受过实战检验。我们部署的不是 demo——从第一天起就是生产级的。"
      ),
      p(
        "10x the speed. Zero compromise on quality.",
        "10 倍速度。0 妥协的质量。"
      ),
    ],
  },
  {
    slug: "3hour-training",
    title: p(
      "3-Hour Agent Internal Training",
      "3 小时 Agent 内训"
    ),
    description: p(
      "On-site enterprise training that empowers every employee to master AI agents — boosting productivity and career growth.",
      "现场企业培训，赋能每位员工掌握 AI Agent——兼顾效率提升与职业成长。"
    ),
    body: [
      p(
        "Companies invest in AI agents, but adoption fails when employees feel threatened rather than empowered. Our 3-hour on-site training solves this by turning every employee into a capable, confident agent user.",
        "公司在 AI Agent 上投入，但如果员工感到威胁而非赋能，落地就会失败。我们 3 小时的现场培训解决了这个问题——把每位员工变成有能力、有信心的 Agent 使用者。"
      ),
      p(
        "This isn't a generic demo. We teach your team the universal framework for working with agents — effective prompting, output verification, workflow integration — all tailored to your company's specific use cases and existing agent setup. Every minute is relevant to their actual daily work.",
        "这不是泛泛的演示。我们教你的团队与 Agent 协作的通用框架——有效提示、输出验证、工作流集成——全部针对你公司的具体场景和现有 Agent 配置。每一分钟都与他们的实际日常工作相关。"
      ),
      p(
        "The outcome goes beyond productivity metrics. Employees leave with a marketable skill that future-proofs their career, transforming resistance into enthusiasm. When people feel agents make them more valuable — not replaceable — adoption follows naturally.",
        "效果超出效率指标。员工带着一项面向未来的可迁移技能离开，抵触转化为热情。当人们觉得 Agent 让他们更有价值——而非可被替代——接纳自然发生。"
      ),
      p(
        "One 3-hour session. Every employee equipped. Efficiency and well-being addressed in a single morning.",
        "一次 3 小时的课程。每位员工就绪。效率和幸福感在一个上午同时被关照。"
      ),
    ],
  },
  {
    slug: "meta-agent",
    title: p(
      "Meta-Agent",
      "Meta-Agent"
    ),
    description: p(
      "An agent that builds your agent system — dedicated consulting included, subscription-based.",
      "一个帮你搭建 Agent 系统的 Agent——含持续咨询，订阅制。"
    ),
    body: [
      p(
        "Most transformation leaders know exactly what agents they need — but lack the technical resources to build and maintain them. Meta-Agent is the answer: an agent that builds agents, so you don't need an engineering team.",
        "大多数转型负责人非常清楚自己需要什么 Agent——但缺乏构建和维护它们的技术资源。Meta-Agent 就是答案：一个搭建 Agent 的 Agent，你不需要工程团队。"
      ),
      p(
        "You describe the problem in plain language. Meta-Agent handles the rest — understanding requirements, scaffolding the system, testing in your environment, deploying to production. What would take a traditional dev team months happens in days.",
        "你用自然语言描述问题。Meta-Agent 处理剩下的一切——理解需求、搭建系统、在你环境中测试、部署到生产环境。传统开发团队需要数月的工作在数天内完成。"
      ),
      p(
        "The subscription includes continuous evolution. As your business changes, Meta-Agent adapts — new workflows, new integrations, new optimizations — all through the same conversational interface. No change requests. No ticket queues. Just describe what you need.",
        "订阅制包含持续演进。随着你的业务变化，Meta-Agent 同步适应——新工作流、新集成、新优化——全部通过同一个对话界面。没有变更请求，没有工单队列。描述你需要的即可。"
      ),
      p(
        "This is built for transformation leaders who need speed and reliability. A production-grade agent system in days, not months — plus ongoing consulting to ensure it stays perfectly aligned with your business goals.",
        "这是为需要速度和可靠性的转型负责人打造的。一个生产级的 Agent 系统，在数天内落地，而非数月——加上持续咨询，确保它始终与你的业务目标精准对齐。"
      ),
    ],
  },
];

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
