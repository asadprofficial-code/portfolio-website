import Image from "next/image";
import { VISIBLE_PROJECTS } from "@/data/projects";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Referenser – Shopify-butiker, webbplatser och SEO",
  description: "Ett urval av Shopify-butiker, webbplatser och SEO-uppdrag som vi har arbetat med.",
  alternates: { canonical: "/referenser" },
};

export default function ReferenserPage() {
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <p className="eyebrow">Referenser</p>
        <h1 className="h1 mt-4">Projekt vi har arbetat med</h1>
        <p className="lead mt-5 max-w-3xl">Shopify-butiker, webbplatser och SEO-uppdrag. Klicka dig vidare för att se sajterna live.</p>
      </section>
      <section className="container-site mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VISIBLE_PROJECTS.map((p) => (
          <article key={p.name} className="card !p-0 overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={p.image} alt={`${p.name} – ${p.type}`} fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-brand">{p.type}</p>
              <h2 className="mt-1 text-lg font-bold">{p.name}</h2>
              <p className="mt-2 text-sm text-ink-muted">{p.text}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-brand">Besök sajten →</a>
              )}
            </div>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
