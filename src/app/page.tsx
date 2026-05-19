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

const caseItems: ListItem[] = cases.map((c) => ({
  group: c.industry,
  title: c.title,
  description: c.description,
  href: `/case/${c.slug}`,
  meta: ""
}));

const contacts = [
  { label: "Email", href: "mailto:kyriecai.me@gmail.com" },
  { label: "X", href: "https://x.com/triody" },
  { label: "GitHub", href: "https://github.com/triody" }
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
          15-minute diagnostic. One-week deployment. Ten-year guarantee.
        </p>

        <p>
          Get in touch:{" "}
          {contacts.map((contact, index) => (
            <span key={contact.label}>
              <BasicLink href={contact.href}>{contact.label}</BasicLink>
              {index < contacts.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </article>

      <PostList title="Services" items={serviceItems} />
      <PostList title="Cases" items={caseItems} />

      <section className="participants" aria-labelledby="contact-title">
        <h2 id="contact-title" className="section-title">
          Contact
        </h2>
        <div className="participants-stack">
          <p style={{ fontSize: "0.875rem", fontWeight: 460, color: "var(--muted)", letterSpacing: "-0.00563rem", lineHeight: "1.25rem" }}>
            <BasicLink href="mailto:kyriecai.me@gmail.com">kyriecai.me@gmail.com</BasicLink>
          </p>
        </div>
      </section>
    </main>
  );
}
