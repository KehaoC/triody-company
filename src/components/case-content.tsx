"use client";

import { t, type BiText } from "@/lib/types";
import { useLocale } from "@/lib/locale";
import type { CaseBlock } from "@/content/cases";

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

function hasBiText(block: unknown): block is BiText {
  return typeof block === "object" && block !== null && "en" in block && "zh" in block;
}

export function CaseTitle({ text }: { text: BiText }) {
  const { locale } = useLocale();
  return <>{t(text, locale)}</>;
}

export function CaseIndustry({ text }: { text: BiText }) {
  const { locale } = useLocale();
  return <>{t(text, locale)}</>;
}

export function CaseBody({
  problem,
  solution,
}: {
  problem: BiText[];
  solution: CaseBlock[];
}) {
  const { locale } = useLocale();

  function renderBlock(block: CaseBlock, i: number) {
    if (hasBiText(block)) {
      return <p key={i}>{t(block, locale)}</p>;
    }
    if (typeof block === "string") {
      return <p key={i}>{block}</p>;
    }
    if ("video" in block) {
      return (
        <figure key={i} className="case-figure">
          <video src={block.video} controls className="case-video" />
          {block.caption && (
            <figcaption className="case-caption">
              {t(block.caption, locale)}
            </figcaption>
          )}
        </figure>
      );
    }
    if ("image" in block) {
      return (
        <figure key={i} className="case-figure">
          <img
            src={block.image}
            alt={block.caption ? t(block.caption, locale) : ""}
            className="case-image"
          />
          {block.caption && (
            <figcaption className="case-caption">
              {t(block.caption, locale)}
            </figcaption>
          )}
        </figure>
      );
    }
    if ("ref" in block) {
      return (
        <div key={i} className="case-ref">
          <a href={block.ref} target="_blank" rel="noopener noreferrer">
            {isGitHubUrl(block.ref) && <GitHubIcon />}
            {block.label}
          </a>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="writing-body">
      <section className="case-section">
        <h2 className="case-section-title">
          {locale === "zh" ? "问题与需求" : "Problem & Demand"}
        </h2>
        {problem.map((text, i) => (
          <p key={`p-${i}`}>{t(text, locale)}</p>
        ))}
      </section>

      <section className="case-section">
        <h2 className="case-section-title">
          {locale === "zh" ? "解决方案" : "Solution"}
        </h2>
        {solution.map((block, i) => renderBlock(block, i))}
      </section>
    </div>
  );
}
