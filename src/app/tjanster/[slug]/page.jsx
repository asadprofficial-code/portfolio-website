import Link from "next/link";
import Image from "@/components/Img";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/data/services";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/tjanster/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, images: [absoluteUrl(s.image)] },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Tjänster", item: absoluteUrl("/tjanster") },
        { "@type": "ListItem", position: 3, name: s.name, item: absoluteUrl(`/tjanster/${s.slug}`) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  const others = SERVICES.filter((o) => o.slug !== s.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="container-site pt-10 sm:pt-14">
        <nav aria-label="Brödsmulor" className="text-sm text-ink-muted">
          <Link href="/" className="hover:text-brand">Start</Link> / <Link href="/tjanster" className="hover:text-brand">Tjänster</Link> / <span>{s.name}</span>
        </nav>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="h1">{s.h1}</h1>
            <p className="lead mt-5">{s.intro}</p>
            <Link href="#kontakt" className="btn-primary mt-8">Få ett förslag</Link>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-line">
            <Image src={s.image} alt={s.name} fill priority sizes="(min-width:1024px) 520px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container-site mt-16 grid gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="h2">Det här ingår</h2>
          <ul className="mt-5 space-y-3">
            {s.included.map((i) => (
              <li key={i} className="flex gap-3 text-ink-muted"><span className="font-bold text-brand">✓</span>{i}</li>
            ))}
          </ul>
          {s.sections.map((sec) => (
            <div key={sec.h2} className="mt-12">
              <h2 className="h2">{sec.h2}</h2>
              <div className="prose-site mt-4"><p>{sec.body}</p></div>
            </div>
          ))}
          <FaqList items={s.faq} />
        </div>
        <aside className="card h-fit">
          <p className="font-bold">Fler tjänster</p>
          <ul className="mt-3 space-y-2 text-sm">
            {others.map((o) => <li key={o.slug}><Link href={`/tjanster/${o.slug}`} className="text-brand hover:underline">{o.name}</Link></li>)}
          </ul>
        </aside>
      </section>

      <section id="kontakt" className="container-site mt-20 scroll-mt-24">
        <h2 className="h2">Berätta om ert projekt</h2>
        <p className="lead mt-3 max-w-2xl">Skicka några rader så återkommer vi inom en arbetsdag med ett förslag.</p>
        <div className="mt-6 max-w-3xl"><ContactForm defaultService={s.slug} /></div>
      </section>
    </>
  );
}
