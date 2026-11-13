import Link from "next/link";
import Image from "@/components/Img";
import { SERVICES } from "@/data/services";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Tjänster – SEO och webbdesign för småföretag",
  description: "SEO och webbdesign för småföretag i hela Sverige: SEO-analys, löpande SEO, hemsidor, landningssidor och webbutiker till fast pris.",
  alternates: { canonical: "/tjanster" },
};

export default function TjansterPage() {
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <p className="eyebrow">Tjänster</p>
        <h1 className="h1 mt-4">Våra tjänster</h1>
        <p className="lead mt-5 max-w-3xl">Vi arbetar med två saker: SEO som ger fler kunder och hemsidor som är byggda för att synas. Välj en tjänst för att läsa vad som ingår.</p>
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
                {s.bullets.slice(0, 3).map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          </Link>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
