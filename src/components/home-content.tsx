"use client";

import { useLocale } from "@/lib/locale";
import { t } from "@/lib/types";
import { services } from "@/content/services";
import { cases } from "@/content/cases";
import { LanguageToggle } from "@/components/language-toggle";

type ListItem = {
  group?: string;
  title?: string;
  description?: string;
  href?: string;
  meta: string;
};

function BasicLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      className="basic-link"
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

function PostList({ title, items }: { title: string; items: ListItem[] }) {
  return (
    <section
      className="post-list"
      aria-labelledby={`${title.toLowerCase()}-title`}
    >
      <h2 id={`${title.toLowerCase()}-title`} className="section-title">
        {title}
      </h2>
      <ul>
        <li>
          <ul>
            {items.map((item) => {
              const inner = (
                <>
                  {item.group ? (
                    <span className="group-label">{item.group}</span>
                  ) : null}
                  <span className="item-copy">
                    {item.title ? (
                      <span className="item-title">{item.title}</span>
                    ) : null}
                    {item.description ? (
                      <span className="item-description">
                        {item.description}
                      </span>
                    ) : null}
                  </span>
                  {item.meta ? <time>{item.meta}</time> : null}
                </>
              );

              return (
                <li
                  key={
                    item.href ?? item.title ?? item.description ?? item.meta
                  }
                >
                  {item.href ? (
                    <a href={item.href}>{inner}</a>
                  ) : (
                    <div className="post-list-row" aria-disabled="true">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </section>
  );
}

export function HomeContent() {
  const { locale } = useLocale();

  const serviceItems: ListItem[] = services.map((s) => ({
    title: t(s.title, locale),
    description: t(s.description, locale),
    href: `/service/${s.slug}`,
    meta: "",
  }));

  const caseItems: ListItem[] = [
    ...cases.map((c) => ({
      group: t(c.industry, locale),
      title: t(c.title, locale),
      description: t(c.description, locale),
      href: `/case/${c.slug}`,
      meta: "",
    })),
    {
      title: locale === "zh" ? "更多案例…" : "More…",
      description:
        locale === "zh"
          ? "更多案例——请联系了解详情。"
          : "Additional cases — get in touch for details.",
      href: "",
      meta: "",
    },
  ];

  const tagline =
    locale === "zh"
      ? "15 分钟诊断。一周部署。生产级 Agent。"
      : "15-minute diagnostic. One-week deployment. Production-grade agents.";

  const getInTouch =
    locale === "zh" ? "联系我们：" : "Get in touch:";

  return (
    <>
      <article className="article">
        <header>
          <h1>
            <img
              className="brand-logo"
              src="/triody-logo.png"
              alt="Triody"
              width={300}
              height={60}
            />
          </h1>
          <time>
            {locale === "zh"
              ? "用 Agent 让你的业务 10x。"
              : "10x your business with agents."}
          </time>
        </header>

        <div className="homepage-toggle">
          <LanguageToggle />
        </div>

        <p>
          {locale === "zh"
            ? "我们部署能 10 倍加速你业务的 AI Agent——更快、更聪明、比任何替代方案都更可靠。"
            : "We deploy AI agents that 10x your business — faster, smarter, more reliable than any alternative."}
        </p>

        <p>{tagline}</p>

        <p>
          {getInTouch}{" "}
          <BasicLink href="mailto:kyriecai.me@gmail.com">
            kyriecai.me@gmail.com
          </BasicLink>
        </p>
      </article>

      <PostList
        title={locale === "zh" ? "服务" : "Services"}
        items={serviceItems}
      />
      <PostList
        title={locale === "zh" ? "精选案例" : "Selected Cases"}
        items={caseItems}
      />

      <section className="team-section" aria-labelledby="team-title">
        <h2 id="team-title" className="section-title">
          {locale === "zh" ? "团队" : "Team"}
        </h2>

        <div className="team-founders">
          <div className="team-founder">
            <img
              src="/team/kyriecai.jpg"
              alt="Kyriecai"
              className="team-avatar"
            />
            <div className="team-founder-info">
              <span className="team-name">Kyriecai</span>
              <span className="team-role">Founder</span>
              <span className="team-contact">
                <BasicLink href="mailto:kyriecai.me@gmail.com">
                  kyriecai.me@gmail.com
                </BasicLink>
              </span>
              <span className="team-social">
                <BasicLink href="https://xhslink.com/m/5ollow7Ij4d">
                  Xiaohongshu
                </BasicLink>
              </span>
            </div>
          </div>

          <div className="team-founder">
            <img
              src="/team/samuelwang.jpg"
              alt="Samuel Wang"
              className="team-avatar"
            />
            <div className="team-founder-info">
              <span className="team-name">Chaoyu Wang</span>
              <span className="team-role">Founder</span>
              <span className="team-contact">
                <BasicLink href="mailto:samuelwang997@gmail.com">
                  samuelwang997@gmail.com
                </BasicLink>
              </span>
              <span className="team-social">
                <BasicLink href="https://xhslink.com/m/2hHbDUNzmaV">
                  Xiaohongshu
                </BasicLink>
              </span>
            </div>
          </div>
        </div>

        {locale === "zh" ? (
          <>
            <p className="team-desc">
              我们的团队汇聚了来自新加坡国立大学、加州大学伯克利分校、西北大学、中山大学、中国人民大学和上海交通大学的本科、硕士和博士人才。每位成员都有极强的主观能动性——我们认真倾听、深度理解、以不妥协的质量交付。
            </p>
            <p className="team-desc">
              我们中有国家拔尖计划 2.0 成员、Launchpad S1
              发起人、AAAI 等顶会论文作者。专业领域覆盖 Agentic
              Engine、AI Infra、AI4S 和具身智能——我们有足够的深度去构建别人只能做
              demo 的东西。
            </p>
          </>
        ) : (
          <>
            <p className="team-desc">
              Our team brings together undergraduate, master's, and PhD talent
              from the National University of Singapore, UC Berkeley,
              Northwestern University, Sun Yat-sen University, Renmin
              University of China, and Shanghai Jiao Tong University. Every
              member operates with strong initiative — we listen hard,
              understand deeply, and deliver with uncompromising quality.
            </p>
            <p className="team-desc">
              Our ranks include members of China's National Excellence Program
              2.0, initiators of Launchpad S1, and published authors at AAAI
              and other top-tier venues. Our expertise spans agentic engines,
              AI infrastructure, AI for Science, and embodied intelligence —
              giving us the depth to build what others can only demo.
            </p>
          </>
        )}
      </section>
    </>
  );
}
