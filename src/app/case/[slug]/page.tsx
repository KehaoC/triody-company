import { notFound } from "next/navigation";
import { getCase, cases, type CaseBlock } from "@/content/cases";
import Link from "next/link";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

function GitHubIcon() {
  return (
    <svg
      className="case-ref-icon"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function isGitHubUrl(url: string) {
  return url.includes("github.com");
}

function SolutionBlock({ block }: { block: CaseBlock }) {
  if (typeof block === "string") {
    return <p>{block}</p>;
  }
  if ("video" in block) {
    return (
      <figure className="case-figure">
        <video
          src={block.video}
          controls
          className="case-video"
        />
        {block.caption && (
          <figcaption className="case-caption">{block.caption}</figcaption>
        )}
      </figure>
    );
  }
  if ("image" in block) {
    return (
      <figure className="case-figure">
        <img
          src={block.image}
          alt={block.caption || ""}
          className="case-image"
        />
        {block.caption && (
          <figcaption className="case-caption">{block.caption}</figcaption>
        )}
      </figure>
    );
  }
  if ("ref" in block) {
    return (
      <div className="case-ref">
        <a
          href={block.ref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isGitHubUrl(block.ref) && <GitHubIcon />}
          {block.label}
        </a>
      </div>
    );
  }
  return null;
}

export default async function CaseDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseItem = getCase(slug);

  if (!caseItem) {
    notFound();
  }

  return (
    <main className="writing-page">
      <div className="writing-topbar">
        <Link href="/" className="writing-back">
          Triody
        </Link>
      </div>

      <article className="writing-article">
        <header className="writing-header">
          <h1 className="writing-title">{caseItem.title}</h1>
          <div className="writing-meta">{caseItem.industry}</div>
        </header>

        <div className="writing-body">
          <section className="case-section">
            <h2 className="case-section-title">Problem &amp; Demand</h2>
            {caseItem.problem.map((p, i) => (
              <p key={`problem-${i}`}>{p}</p>
            ))}
          </section>

          <section className="case-section">
            <h2 className="case-section-title">Solution</h2>
            {caseItem.solution.map((block, i) => (
              <SolutionBlock key={i} block={block} />
            ))}
          </section>
        </div>
      </article>
    </main>
  );
}
