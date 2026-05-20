import { notFound } from "next/navigation";
import { getCase, cases } from "@/content/cases";
import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { CaseTitle, CaseIndustry, CaseBody } from "@/components/case-content";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function CaseDetailPage({
  params,
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
        <LanguageToggle />
      </div>

      <article className="writing-article">
        <header className="writing-header">
          <h1 className="writing-title">
            <CaseTitle text={caseItem.title} />
          </h1>
          <div className="writing-meta">
            <CaseIndustry text={caseItem.industry} />
          </div>
        </header>

        <CaseBody problem={caseItem.problem} solution={caseItem.solution} />
      </article>
    </main>
  );
}
