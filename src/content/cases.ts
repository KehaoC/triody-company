import type { BiText } from "@/lib/types";

export type CaseBlock =
  | BiText
  | { image: string; caption?: BiText }
  | { video: string; caption?: BiText }
  | { ref: string; label: string };

export type CaseItem = {
  slug: string;
  title: BiText;
  description: BiText;
  industry: BiText;
  problem: BiText[];
  solution: CaseBlock[];
};

function p(en: string, zh: string): BiText {
  return { en, zh };
}

export const cases: CaseItem[] = [
  {
    slug: "guru",
    title: p(
      "Guru ｜ Auto Ad Placement Agent",
      "Guru ｜ 广告自动投放 Agent"
    ),
    description: p(
      "End-to-end automated ad ops for 50+ mobile games across every major platform.",
      "50+ 款手游全平台广告投放自动化，端到端闭环。"
    ),
    industry: p("Ads", "广告"),
    problem: [
      p(
        "Guru Game runs over 50 mobile game titles across Google Ads, Meta Ads, and Apple Ads — each needing fresh creatives daily. Design teams spent days producing ad variations. Ad ops teams spent entire days manually uploading creatives platform by platform, title by title. The math simply didn't work.",
        "Guru Game 运营 50 余款手游，覆盖 Google Ads、Meta Ads、Apple Ads 三大平台，每款游戏每天都需要新鲜素材。设计团队花数天出图，投放团队花整天手动上传——平台乘标题，人手怎么算都不够。"
      ),
      p(
        "They needed a system that could discover trending topics, generate matching creatives, place ads across every platform, and learn from performance data — all autonomously. And they needed it fast.",
        "他们需要一套能自动发现热点、生成匹配素材、跨平台投放、并从数据中持续学习的系统。而且要快。"
      ),
    ],
    solution: [
      p(
        "We designed and deployed a 4-stage end-to-end agent that transforms Guru Game's entire ad operations into a continuous improvement loop.",
        "我们设计并部署了一套四阶段端到端 Agent，将 Guru Game 的整个广告运营变成了一条持续优化的闭环流水线。"
      ),
      p(
        "Stage 1 — Hot Topic Discovery. The agent continuously filters RSS feeds across the web, surfacing trending topics and creative angles for each game's target audience. These signals flow into ggbond, our internal discovery engine that matches trends to specific game titles, generating actionable creative briefs around the clock. What used to be a creative team guessing at what might work is now a data-driven pipeline that finds what's already working and adapts it.",
        "第一阶段——热点发现。Agent 持续过滤全网 RSS，为每款游戏的目标受众抓取趋势话题和创意角度。信号汇入 ggbond（内部发现引擎），自动匹配趋势到具体游戏，24 小时不间断产出可执行的创意简报。创意团队从「猜什么可能行」变成了「找到已经在行的然后优化它」。"
      ),
      { image: "/cases/guru/ggbond-repo.png", caption: p(
        "ggbond — the internal discovery engine that matches RSS trends to game titles (closed source per client requirement)",
        "ggbond — 内部发现引擎，将 RSS 趋势匹配到游戏标题（闭源，客户要求）"
      )},
      { image: "/cases/guru/ggbond-repo-2.png", caption: p(
        "ggbond repo internals — the engine behind automated creative brief generation",
        "ggbond 仓库内部 — 自动化创意简报生成引擎"
      )},
      p(
        "Stage 2 — Creative Generation. From each brief, the agent produces high-quality ad creatives at scale — hundreds of variations ready for A/B testing in minutes. Work that previously consumed the design team's entire week now runs automatically.",
        "第二阶段——素材生成。从每份简报出发，Agent 批量产出高质量广告素材——数百个变体在几分钟内就绪，可直接 A/B 测试。以前设计团队一整周的工作量，现在自动完成。"
      ),
      p(
        "Stage 3 — Cross-Platform Placement. The agent connects to ad platforms through MCP (Model Context Protocol) servers, automating campaign creation and creative upload across Google Ads and Meta Ads for all 50+ titles simultaneously. No more logging into three different dashboards and repeating the same flow for every single title.",
        "第三阶段——跨平台投放。Agent 通过 MCP（Model Context Protocol）服务器连接广告平台，自动化创建广告系列并上传素材，覆盖 Google Ads 和 Meta Ads 全平台 50+ 款游戏。不再需要登录三个后台、为每一款游戏重复同样的操作。"
      ),
      { ref: "https://github.com/googleads/google-ads-mcp", label: "google-ads-mcp" },
      { ref: "https://github.com/pipeboard-co/meta-ads-mcp", label: "meta-ads-mcp" },
      p(
        "To complete the operational picture, we integrated the agent with Feishu (Lark) for internal notifications and workflow coordination — built in the pre-lark-cli era by directly interfacing with Feishu's backend API.",
        "为完善运营闭环，我们将 Agent 接入了飞书，用于内部通知和工作流协同——这是在 lark-cli 诞生之前，直接对飞书后台接口做的深度打通。"
      ),
      p(
        "Stage 4 — Analytics & Feedback. Performance data from every platform, every title, every creative flows into GF — our private deployment of Google Mixboard. The analytics engine identifies winning patterns and routes insights back to Stage 1, closing the loop. Every ad dollar spent makes the next one smarter.",
        "第四阶段——数据反馈。所有平台、所有游戏、所有素材的表现数据汇入 GF——我们为 Guru 私有化部署的 Google Mixboard。分析引擎识别优胜模式，将洞察回传第一阶段，形成闭环。每一分广告费都在让下一分更聪明。"
      ),
      { ref: "https://github.com/KehaoC/GF", label: "GF — Google Mixboard private deployment" },
      p(
        "We didn't just ship code remotely. We flew to the Guru Game office for on-site FDE (Foundational Deployment Engineering), ensuring the agent meshed with their real infrastructure, real workflows, and real constraints.",
        "我们没有远程交付代码了事。我们飞到 Guru Game 办公室做了现场 FDE（基础部署工程），确保 Agent 与他们的真实基建、真实流程、真实约束无缝对接。"
      ),
      { image: "/cases/guru/fde-photo.jpg", caption: p(
        "On-site FDE at Guru Game office (shared with employer consent)",
        "Guru Game 办公室现场 FDE（已征得雇主同意）"
      )},
      { image: "/cases/guru/gurugame-site.png", caption: p(
        "Guru Game — gurugame.ai",
        "Guru Game 官网 — gurugame.ai"
      )},
      { ref: "https://gurugame.ai/", label: "Guru Game" },
      p(
        "The impact, measured:",
        "可量化的效果："
      ),
      p(
        "ggbond became the idea engine for the entire creative team — serving ~30 people who now start every campaign with data-backed creative briefs instead of blank-page brainstorming.",
        "ggbond 成为全创意组（约 30 人）的 idea 引擎，每个人从数据驱动的创意简报开始每一轮投放，而非空白页头脑风暴。"
      ),
      p(
        "GF Mixboard replaced Google Mixboard as the creative team's primary image generation platform, covering ~20 people. Creative generation efficiency: 10x.",
        "GF Mixboard 取代了 Google Mixboard 成为创意团队首选生图工具，覆盖约 20 人，素材生成效率提升 10 倍。"
      ),
      p(
        "The Guru Agent saves each ad optimizer 3 hours per day on creative uploads — time now spent on strategy, not data entry. Meanwhile, the system monitors the entire data platform in real time, flagging traffic anomalies 24/7 before a single dollar is wasted.",
        "Guru Agent 帮每位广告优化师每天节省 3 小时素材上传时间——这些时间现在花在策略上，而非机械搬运。同时，系统 24/7 实时监控全数据中台，异常流量在浪费一分钱之前就被标记。"
      ),
      p(
        "End result: the team's ad campaign cycle compressed from 7 days to 2 days. Not a marginal gain — a structural change in how fast a 50-title portfolio can move.",
        "最终结果：全团队广告投放周期从 7 天压缩到了 2 天。不是边际改善，而是 50 款游戏矩阵运行速度的结构性变革。"
      ),
    ],
  },
  {
    slug: "dianshi",
    title: p(
      "点石 ｜ Auto Video Editing Agent",
      "点石 ｜ 视频自动剪辑 Agent"
    ),
    description: p(
      "Automated viral video pipeline — from template discovery to final cut, 3–4× editor throughput.",
      "病毒视频自动化生产流水线——从模板发现到成片输出，剪辑师产能 3–4 倍提升。"
    ),
    industry: p("E-comm", "电商"),
    problem: [
      p(
        "Qingdao Dianshi Stationery needs a constant stream of high-performing video ads for their extensive product catalog. The manual pipeline — find viral references, write scripts, cut footage, add subtitles and music — was their biggest bottleneck.",
        "青岛点石文具需要为其庞大的产品目录持续产出高质量视频广告。全手动流程——找爆款参考、写脚本、剪片子、加字幕和音乐——是最大的瓶颈。"
      ),
      p(
        "Each video editor in the Qingdao team could produce only 3 videos per day. With hundreds of SKUs to promote across multiple e-commerce platforms, the math didn't work. Products went without video support. Revenue was left on the table. The team needed to break through a throughput ceiling that manual workflows simply couldn't cross.",
        "青岛团队的每位剪辑师每天只能产出 3 条视频。面对数百个 SKU、多个电商平台的投放需求，这根本算不过来。产品没有视频支援，收入白白流失。团队需要突破手工流程的天花板。"
      ),
    ],
    solution: [
      p(
        "We built an automated video production agent on top of FireRed-OpenStoryline, an open-source video generation framework. Starting from a solid open-source foundation allowed us to deliver a production-ready system rapidly — and the client's requirements were extensive and specific:",
        "我们在 FireRed-OpenStoryline 开源视频生成框架之上，构建了自动化视频生产 Agent。以成熟的开源基座为起点，我们得以快速交付可投产的系统——客户的需求清单非常详尽和具体："
      ),
      { image: "/cases/dianshi/requirements.png", caption: p(
        "点石 video automation requirements — covering the full pipeline from script to final output",
        "点石视频自动化需求清单——涵盖从脚本到成片的完整 pipeline 需求"
      )},
      p(
        "Based on these requirements, we designed a modular system architecture. Each stage — template discovery, script generation, automated editing, subtitle generation, voiceover, and music layering — operates as an independent, tunable component. The team can adjust creative quality per stage without touching the rest of the pipeline.",
        "基于这些需求，我们设计了模块化系统架构。模板发现、脚本生成、自动剪辑、字幕生成、配音、音乐分层——每个阶段都是独立可调的组件。团队可以按需调整某一环节的创意质量，而无需牵动整条流水线。"
      ),
      { image: "/cases/dianshi/architecture.jpg", caption: p(
        "点石 Agent system architecture — modular design, each stage independently tunable",
        "点石 Agent 系统架构——模块化设计，每阶段独立可调"
      )},
      p(
        "The video below demonstrates the FireRed-OpenStoryline base system in action. This is the foundation we built upon and customized for 点石. The deployed version cannot be shown publicly due to confidentiality terms — but the core video generation capability is demonstrated here.",
        "下方视频展示了 FireRed-OpenStoryline 基座系统的实际效果。这是我们二次开发的起点。为点石定制部署的版本因保密条款无法公开展示——但核心的视频生成能力在这里可见一斑。"
      ),
      { video: "/cases/dianshi/demo.mp4", caption: p(
        "FireRed-OpenStoryline base demo (the foundation we customized; deployed version under NDA)",
        "FireRed-OpenStoryline 基座 Demo（二次开发基座；定制版本因保密条款无法公开展示）"
      )},
      { ref: "https://github.com/FireRedTeam/FireRed-OpenStoryline", label: "FireRed-OpenStoryline" },
      p(
        "The agent integrates directly with the team's existing file storage and workflow tools. Editors don't need to learn a new system — output lands where they already work, ready for review and final polish.",
        "Agent 直接接入团队现有的文件存储和协作工具。剪辑师无需学习新系统——产出落在他们本来就在用的地方，只需审核和最后的润色。"
      ),
      p(
        "The results, measured in the Qingdao team's own numbers:",
        "以下是青岛团队自己统计的数字："
      ),
      p(
        "Each video editor went from producing 3 videos per day to 10–12 videos per day. A 3–4× throughput increase per person — meaning the same team can now support the entire product catalog without hiring.",
        "每位剪辑师从每天产出 3 条视频提升到 10–12 条，人均产能提升 3–4 倍——同样的团队现在可以覆盖全部产品线，无需增编。"
      ),
      p(
        "We achieved this while keeping token costs exceptionally low through a Token Plan strategy: critical creative decisions — script structure, hook design, pacing — route through top-tier models where quality matters most. Routine processing — subtitle generation, format conversion, music layering — uses cost-efficient secondary models. Every AI inference dollar is maximized for creative impact, not wasted on commodity tasks.",
        "我们通过 Token Plan 策略将推理成本压到极低：关键创意决策——脚本结构、钩子设计、节奏把控——走顶级模型，确保质量；常规处理——字幕生成、格式转换、音乐叠加——走低成本次级模型。每一分推理费用都花在创意刀刃上，而非消耗在流水线杂活上。"
      ),
      { ref: "https://baike.baidu.com/item/%E9%9D%92%E5%B2%9B%E7%82%B9%E7%9F%B3%E6%96%87%E5%85%B7%E7%94%A8%E5%93%81%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/18876990", label: "青岛点石文具用品有限公司" },
    ],
  },
  {
    slug: "sysu-hospital",
    title: p(
      "SYSU Cancer Center ｜ Patient Triage Agent",
      "中大肿瘤防治中心 ｜ 患者消息分级 Agent"
    ),
    description: p(
      "WeChat triage system for post-surgical cancer patients — because buried messages cost lives.",
      "术后肿瘤患者微信消息分级系统——被淹没的消息，代价是生命。"
    ),
    industry: p("Health", "医疗"),
    problem: [
      p(
        "After cancer surgery, many patients in China face a cruel reality: they can't afford extended hospitalization, so they go home. But complications don't stay in the hospital. A fever that might be nothing. A wound that won't heal. A pain that could be normal recovery — or a life-threatening infection.",
        "在中国，很多肿瘤患者术后面临一个残酷的现实：支付不起漫长的住院费用，只能回家。但并发症不会留在医院里。一个可能是正常的发烧，一个可能是术后感染。一个可能是愈合中的疼痛，一个可能是致命的信号。"
      ),
      p(
        "These patients trust exactly one person: the chief physician who performed their surgery. Not an AI chatbot. Not a general practitioner. Their surgeon. When they can't get a response on WeChat — the doctor is in surgery, in rounds, with other patients — some travel hundreds of kilometers back to the hospital. Some kneel in the hallway outside the doctor's office, desperate for an answer to a message sent days ago.",
        "这些患者只信任一个人：那个给他们做手术的主任医师。不是 AI 聊天机器人，不是全科医生——是他们的主刀医生。当微信消息得不到回复——医生在手术台上、在查房中、在救治其他患者——有的人千里迢迢回到医院，有的人跪在医生办公室外的走廊里，只为一条发了三天的消息能有一个回应。"
      ),
      p(
        "The doctor, already stretched beyond human limits, finds these messages buried in an endless inbox. A patient asking about medication timing looks identical to a patient describing sepsis symptoms. Both are just unread WeChat messages. This wasn't just inefficient — it was dangerous. The cost of missing one critical message was unthinkable.",
        "而医生，早已超出了人类精力的极限，发现这些消息被埋在无穷无尽的微信列表里。一个问用药时间的患者，和一个描述败血症症状的患者，在收件箱里看起来一模一样——都是未读消息。这不只是低效，这是危险。错过一条危重消息的代价，不可想象。"
      ),
    ],
    solution: [
      p(
        "We built an AI agent connected to the physician's personal WeChat account, serving a chief physician at Sun Yat-sen University Cancer Center. On a regular schedule, the agent reads incoming patient messages, classifies each by clinical urgency, and produces a prioritized digest.",
        "我们为中山大学肿瘤防治中心的一位主任医师搭建了接入其个人微信的 AI Agent。按设定周期，Agent 定时读取患者消息，按临床紧急程度分级，生成优先级摘要。"
      ),
      p(
        "The agent understands enough clinical context to distinguish 'I feel a bit tired today' from 'My surgical wound is oozing and I have a 39°C fever' — and escalates accordingly. A patient with critical post-operative symptoms is flagged immediately and surfaced to the top. A routine medication refill question is batched for later review. The doctor opens a structured briefing instead of scrolling through an undifferentiated, anxiety-inducing list.",
        "Agent 能够理解足够的临床语境，区分「我今天有点累」和「我手术伤口在渗液，发烧 39 度」——并做出相应的升级。危重术后症状的患者被立即标记，推到最上面。常规的续药问题被归入待处理批次。医生打开的不再是一个令人焦虑的未读列表，而是一份结构清晰的简报。"
      ),
      p(
        "Due to patient privacy and medical data sensitivity, we cannot show the actual deployed system with real patient information. The screenshot below demonstrates the same triage logic using de-sensitized scenarios — built with wx-cli for WeChat integration and opencli for the agent orchestration layer.",
        "由于患者隐私和医疗数据敏感性，我们无法展示包含真实患者信息的实际系统。以下截图使用去敏化场景演示了相同的分级逻辑——基于 wx-cli 实现微信接入，opencli 实现 Agent 编排层。"
      ),
      { image: "/cases/sysu-hospital/demo.jpg", caption: p(
        "De-sensitized demo — WeChat message triage built with wx-cli and opencli (test data used to protect patient privacy)",
        "去敏感场景 Demo——基于 wx-cli 和 opencli 实现的微信消息分级系统（使用脱敏测试数据保护患者隐私）"
      )},
      { ref: "https://www.sysucc.org.cn/linchuangzhuanjia", label: "中山大学肿瘤防治中心" },
      p(
        "The impact: the doctor's message-processing time dropped from hours of scrolling through WeChat every day to a focused 15-minute triage review. Critical post-surgical cases surface in minutes, not days.",
        "效果：医生的消息处理时间从每天数小时刷微信，缩减到了 15 分钟的专注简报审阅。危重术后案例在数分钟内浮现，而不是数天。"
      ),
      p(
        "But the real outcome isn't measured in time saved. It's measured in what no longer happens: no patient with a life-threatening post-surgical complication gets buried in the inbox. No one has to travel across the country and kneel in a hospital hallway to be heard. Behind the metrics are real people — patients who now get a response when it matters most.",
        "但真正的成果不在省下的时间里。它在那些不再发生的事情里：不再有危重术后并发症患者被埋没在收件箱里。不再有人需要跨越千里、跪在医院的走廊里才能被听见。指标背后是真实的人——那些在最需要回应的时候，终于得到了回应的患者。"
      ),
    ],
  },
  {
    slug: "cross-border",
    title: p(
      "Cross-Border ｜ Agent Team for E-Commerce",
      "跨境 ｜ 电商 Agent Team"
    ),
    description: p(
      "Two specialized agents — product sourcing + market research — deployed on sloke.ai, saving 5–7 hours/day and $5K–10K/month.",
      "两个专职 Agent——选品 + 市场调研——部署在 sloke.ai，日均省 5–7 小时，月均省 $5K–10K。"
    ),
    industry: p("CBEC", "跨境"),
    problem: [
      p(
        "Most cross-border e-commerce sellers don't fail because of bad execution. They fail because they picked the wrong product to begin with. The real bottleneck isn't operations — it's the research that happens before a single dollar is spent on inventory.",
        "大多数跨境电商卖家不是死在执行上，而是死在选品上。真正的瓶颈不在运营——在第一分钱花在库存之前的那段调研。"
      ),
      p(
        "Traditional market research takes 2–3 weeks: manually reading hundreds of competitor reviews, scrolling social media for trend signals, comparing prices one ASIN at a time, making Excel charts for the boss. It's slow, it's expensive, and it still ends with a gut-feel decision. One bad pick costs ¥70K–350K in dead stock, wasted ads, and lost time.",
        "传统市场调研需要 2–3 周：人工翻几百条竞品评论、刷社交媒体找趋势信号、一个个 ASIN 比价、拉 Excel 给老板看。慢、贵，最后靠拍脑袋。一次选品失误的代价是 ¥7–35 万的库存、广告和时间打水漂。"
      ),
      p(
        "Product sourcing is no better. Hours of scrolling 1688 and Alibaba, manually comparing MOQ, price, and supplier reliability — hoping you don't get scammed. The entire pre-launch workflow was built on manual labor and intuition. It didn't scale, and it didn't need to be this way.",
        "找货也好不到哪去。几小时翻 1688 和阿里巴巴，手工对比起订量、价格、供应商靠谱程度——祈祷自己别被骗。整个上架前的工作流建立在人工和直觉之上。它不该是这样的。"
      ),
    ],
    solution: [
      p(
        "We designed and deployed an agent team on sloke.ai — two specialized agents that work in concert, each owning a distinct part of the cross-border e-commerce workflow. The architecture draws from Alibaba's Accio Work skill-collaboration patterns, adapted for the realities of cross-border selling.",
        "我们在 sloke.ai 上设计并部署了一个 Agent Team——两个专职 Agent 协同工作，各自负责跨境电商工作流中不同的一环。架构借鉴了阿里 Accio Work 的 Skill 协作模式，并针对跨境业务的现实场景做了适配。"
      ),
      p(
        "Here's what this looks like in practice. A real scenario:",
        "来看一个真实场景："
      ),
      p(
        'The boss asks: "Can we still make money on bluetooth earphones?"',
        "老板问：「蓝牙耳机还能不能做？」"
      ),
      p(
        "I (Market Research) pull Jungle Scout weekly search volume — ~250K, stable. Exa reports CAGR at 5.8%. Competitive landscape: Apple, ZMI, Samsung dominate the top end. But the mid-to-low tier has gaps. 30 minutes in, the boss has data he can act on.",
        "我（市场调研 Agent）拉出 Jungle Scout 周度搜索量——~250K，稳定。Exa 给出 CAGR 5.8%。竞争格局：Apple、ZMI、Samsung 三强割据高端，但中低端有缺口。30 分钟内，老板有了可以拍板的数据。"
      ),
      p(
        "Argos (Product Sourcing) is already running in parallel on 1688: three suppliers found with the same mold, ¥28–45 factory price, Alibaba at ¥18–25 with MOQ 500. Landed cost: $6.80. Recommended retail: $24.99 — positioned at 60% of Anker's price point with clear differentiation.",
        "Argos（选品 Agent）已经在 1688 上并行了：同款模具找到 3 家供应商，出厂价 ¥28–45，阿里上 ¥18–25 起订 500。到岸成本 $6.80，建议售价 $24.99——卡在 Anker 的 60% 价位打差异化。"
      ),
      p(
        "30 minutes from question to decision-ready data. That's the system working.",
        "从提问到可决策的数据，30 分钟。这就是系统在干活。"
      ),
      { image: "/cases/cross-border/01.png", caption: p(
        "Market Research Agent dashboard — bluetooth earphone selection scenario: search volume + trends + competitors + supply chain, decision-ready in 30 min",
        "市场调研 Agent 工作台——蓝牙耳机选品场景：搜索量 + 趋势 + 竞品 + 供应链，30 分钟内可拍板"
      )},
      p(
        "What each agent does, specifically:",
        "每个 Agent 具体做什么："
      ),
      p(
        "Argos — Product Sourcing:",
        "Argos——选品方向："
      ),
      p(
        "1688 image search: one screenshot of an Amazon bestseller → 19 fields auto-extracted (price, sales volume, repurchase rate, shipping origin). What took 2–3 hours of manual scrolling now takes 5 minutes.",
        "1688 以图搜货：一张亚马逊爆款截图 → 19 字段自动提取（价格、销量、复购率、发货地）。原来 2–3 小时的手动翻页现在 5 分钟。"
      ),
      p(
        "Jungle Scout deep category analysis: 8-dimension report with 3-tier product recommendations. What took 2–3 days of pulling data and building spreadsheets now runs in a single pass. At ¥2,000/day, that's ¥6,000–10,000 saved per analysis.",
        "Jungle Scout 品类深度分析：8 维度报告 + 3 级产品推荐。原来 2–3 天拉数据做表现在一次运行。按日薪 ¥2,000 算，每次分析省 ¥6,000–10,000。"
      ),
      p(
        "Alibaba supplier matching + screening: one-click search → Markdown table with thumbnails, MOQ, pricing, lead time. Supplier shortlisting from 1 day → 1 minute.",
        "阿里巴巴供应商匹配：一键搜索 → Markdown 表格含缩略图、起订量、报价、交期。供应商初筛从 1 天 → 1 分钟。"
      ),
      p(
        "Scientific product selection: multi-source cross-validation (JS search volume + Exa trends + competitive analysis) replacing 1–2 weeks of manual trial. One wrong pick costs ¥70K–350K. This is how you avoid it.",
        "科学选品：多源交叉验证（JS 搜索量 + Exa 趋势 + 竞品分析）替代 1–2 周手工试错。选错一个品亏 ¥7–35 万。这就是怎么避免的。"
      ),
      p(
        "AliExpress seller evaluation: 5-indicator scorecard (store age, followers, response rate, positive review rate, review quality) + anti-fraud checklist + landed cost calculation. 1 hour per supplier → minutes. This isn't efficiency — it's survival.",
        "AliExpress 卖家评估：5 指标评分卡（店铺年限、粉丝、响应速度、好评率、评价质量）+ 防骗清单 + 到岸成本计算。每个供应商从 1 小时 → 数分钟。这不是效率，是保命。"
      ),
      { image: "/cases/cross-border/02.png", caption: p(
        "Agent capability overview — 7 core functions, from product selection to supplier evaluation, each with quantified savings",
        "Agent 能力全景——7 项核心功能，从选品到供应商评估，每一项都有明确的「省多少」"
      )},
      p(
        "Argos-Marketing — Market Research:",
        "Argos-Marketing——市场调研方向："
      ),
      p(
        "Competitor review mining: 4 agents run in parallel, analyzing hundreds of reviews to find market gaps — unmet needs, recurring complaints, feature requests. What used to take 1–2 days and cost $3K–5K/month in outsourced research now runs in a single pass.",
        "竞品评论挖掘：4 Agent 并行，分析数百条评论找市场缺口——未满足的需求、反复出现的抱怨、功能诉求。原来 1–2 天、外包费用 $3K–5K/月，现在一次运行。"
      ),
      p(
        "Category entry feasibility: Jungle Scout search volume trends + Exa cross-validation. Days of social media scrolling and gut-feeling → 10 minutes of data-backed analysis.",
        "品类入场判断：JS 搜索量趋势 + Exa 交叉验证。数天刷社媒凭直觉 → 10 分钟数据驱动分析。"
      ),
      p(
        "Best Seller deconstruction: pricing sweet spot, visual strategy, and copywriting logic extracted in one pass. Half a day of manual comparison → minutes.",
        "爆款模式拆解：定价甜点区、视觉策略、文案逻辑一步出。半天手工比价 → 数分钟。"
      ),
      p(
        "Customer review hook extraction: 6-dimension analysis surfacing the exact language and pain points from real customer reviews. Hours of manual sorting → minutes.",
        "客户评论钩子提炼：6 维分析从真实评论中提取精准语言和痛点。数小时手工整理 → 数分钟。"
      ),
      p(
        "Keyword trend tracking: Selenium auto-scrapes AMZ123 and JS search data → CSV. 30 minutes of daily manual work → zero.",
        "关键词趋势追踪：Selenium 自动抓取 AMZ123 和 JS 搜索数据 → CSV。每天 30 分钟手工 → 零。"
      ),
      p(
        "Competitor background search: Exa pulls company and founder profiles in seconds. 1 hour per competitor → seconds.",
        "竞品公司/创始人背景调查：Exa 一键出。每个竞品 1 小时 → 数秒。"
      ),
      p(
        "Market data visualization: Python auto-generates charts and trend lines. 1–2 hours of Excel → automated.",
        "市场数据可视化：Python 自动生成图表和趋势线。1–2 小时 Excel 手拉 → 自动化。"
      ),
      { image: "/cases/cross-border/03.png", caption: p(
        "@Argos + @Argos-Marketing overview — product sourcing saves 3–4 h/day, market research saves 2–3 h/day",
        "@Argos + @Argos-Marketing 分工总览——选品方向日均省 3–4 小时，市场调研方向日均省 2–3 小时"
      )},
      p(
        "Beyond the screenshots: we deployed the agent team on-site with the client's actual workflow, their actual data sources, their actual decision-making rhythm. The system isn't a demo — it's running in production, connected to their JS account, their 1688 supplier relationships, their daily operations.",
        "截图之外：我们在客户现场部署了 Agent Team，对接了他们的真实工作流、真实数据源、真实决策节奏。这个系统不是 demo——它在生产环境中运行，连接着他们的 JS 账号、他们的 1688 供应商关系、他们的日常运营。"
      ),
      { image: "/cases/cross-border/fde.jpg", caption: p(
        "On-site FDE with the cross-border team (shared with employer consent)",
        "跨境团队 FDE 现场部署（已征得雇主同意）"
      )},
      p(
        "The bottom line, in numbers:",
        "算总账："
      ),
      p(
        "Product sourcing: 3–4 hours saved per day. $2K–5K saved per month. $10K–50K in trial-and-error costs avoided per product decision.",
        "选品方向：日均省 3–4 小时，月均省 $2K–5K，一次性省试错成本 $10K–50K。"
      ),
      p(
        "Market research: 2–3 hours saved per day. $3K–5K saved per month.",
        "市场调研方向：日均省 2–3 小时，月均省 $3K–5K。"
      ),
      p(
        "Combined: 5–7 hours saved every day. $5K–10K saved every month. And the kind of mistake that kills a cross-border business — picking the wrong product — is systematically prevented.",
        "合计：日均省 5–7 小时，月均省 $5K–10K。而那种足以杀死一家跨境电商公司的错误——选错品——被系统性地杜绝了。"
      ),
    ],
  },
];

export function getCase(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
