import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import Link from "next/link";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
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
          <h1 className="writing-title">{service.title}</h1>
          <div className="writing-meta">Service</div>
        </header>

        <div className="writing-body">
          {service.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
