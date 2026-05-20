import Image from "next/image";
import { services } from "@/content/services";
import { cases } from "@/content/cases";

type ListItem = {
  group?: string;
  title?: string;
  description?: string;
  href?: string;
  meta: string;
};

const serviceItems: ListItem[] = services.map((s) => ({
  title: s.title,
  description: s.description,
  href: `/service/${s.slug}`,
  meta: ""
}));

const caseItems: ListItem[] = [
  ...cases.map((c) => ({
    group: c.industry,
    title: c.title,
    description: c.description,
    href: `/case/${c.slug}`,
    meta: ""
  })),
  {
    title: "More...",
    description: "Additional cases — get in touch for details.",
    href: "",
    meta: ""
  }
];

function BasicLink({
  href,
  children
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
    <section className="post-list" aria-labelledby={`${title.toLowerCase()}-title`}>
      <h2 id={`${title.toLowerCase()}-title`} className="section-title">
        {title}
      </h2>
      <ul>
        <li>
          <ul>
            {items.map((item) => {
              const inner = (
                <>
                  {item.group ? <span className="group-label">{item.group}</span> : null}
                  <span className="item-copy">
                    {item.title ? (
                      <span className="item-title">{item.title}</span>
                    ) : null}
                    {item.description ? (
                      <span className="item-description">{item.description}</span>
                    ) : null}
                  </span>
                  {item.meta ? <time>{item.meta}</time> : null}
                </>
              );

              return (
                <li key={item.href ?? item.title ?? item.description ?? item.meta}>
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

export default function Home() {
  return (
    <main className="homepage">
      <article className="article">
        <header>
          <h1>
            <Image
              className="brand-logo"
              src="/triody-logo.png"
              alt="Triody"
              width={300}
              height={60}
              loading="eager"
            />
          </h1>
          <time>10x your business with agents.</time>
        </header>

        <p>
          We deploy AI agents that 10x your business — faster, smarter,
          more reliable than any alternative.
        </p>

        <p>
          15-minute diagnostic. One-week deployment. Production-grade agents.
        </p>

        <p>
          Get in touch:{" "}
          <BasicLink href="mailto:kyriecai.me@gmail.com">kyriecai.me@gmail.com</BasicLink>
        </p>
      </article>

      <PostList title="Services" items={serviceItems} />
      <PostList title="Selected Cases" items={caseItems} />

      <section className="team-section" aria-labelledby="team-title">
        <h2 id="team-title" className="section-title">
          Team
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
                <BasicLink href="mailto:kyriecai.me@gmail.com">kyriecai.me@gmail.com</BasicLink>
              </span>
              <span className="team-social">
                <BasicLink href="https://xhslink.com/m/5ollow7Ij4d">Xiaohongshu</BasicLink>
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
                <BasicLink href="mailto:samuelwang997@gmail.com">samuelwang997@gmail.com</BasicLink>
              </span>
              <span className="team-social">
                <BasicLink href="https://xhslink.com/m/2hHbDUNzmaV">Xiaohongshu</BasicLink>
              </span>
            </div>
          </div>
        </div>

        <p className="team-desc">
          Our team brings together undergraduate, master's, and PhD talent from
          the National University of Singapore, UC Berkeley, Northwestern
          University, Sun Yat-sen University, Renmin University of China, and
          Shanghai Jiao Tong University. Every member operates with strong
          initiative — we listen hard, understand deeply, and deliver with
          uncompromising quality.
        </p>

        <p className="team-desc">
          Our ranks include members of China's National Excellence Program 2.0,
          initiators of Launchpad S1, and published authors at AAAI and other
          top-tier venues. Our expertise spans agentic engines, AI
          infrastructure, AI for Science, and embodied intelligence — giving us
          the depth to build what others can only demo.
        </p>
      </section>
    </main>
  );
}
