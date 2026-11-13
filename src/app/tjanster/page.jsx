import Link from "next/link";
import Image from "@/components/Img";
import { SERVICES } from "@/data/services";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Tjänster – Shopify, webbutveckling, SEO och innehåll",
  description: "Shopify-utveckling, e-handelsoptimering, webbutveckling, SEO, sociala medier och texter för företag i hela Sverige.",
  alternates: { canonical: "/tjanster" },
};

export default function TjansterPage() {
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <p className="eyebrow">Tjänster</p>
        <h1 className="h1 mt-4">Våra tjänster</h1>
        <p className="lead mt-5 max-w-3xl">Från ny Shopify-butik till sökmotoroptimering och texter. Välj en tjänst för att läsa vad som ingår och hur vi arbetar.</p>
      </section>
      <section className="container-site mt-12 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => (
          <Link key={s.slug} href={`/tjanster/${s.slug}`} className="card flex gap-5 transition-colors hover:border-brand">
            <div className="relative hidden h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:block">
              <Image src={s.image} alt="" fill sizes="112px" className="object-cover" />
            </div>
            <div>
              <h2 className="text-lg font-bold">{s.name}</h2>
              <p className="mt-2 text-sm text-ink-muted">{s.short}</p>
              <ul className="mt-3 space-y-1 text-sm text-ink-muted">
                {s.included.slice(0, 3).map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          </Link>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
