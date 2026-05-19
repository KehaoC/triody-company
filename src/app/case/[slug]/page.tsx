import { notFound } from "next/navigation";
import { getCase, cases } from "@/content/cases";
import Link from "next/link";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
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
          {caseItem.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
