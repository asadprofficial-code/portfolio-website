import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { VISIBLE_PROJECTS } from "@/data/projects";
import { SITE } from "@/lib/site";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";

export const metadata = { alternates: { canonical: "/" } };

const STEPS = [
  { t: "Genomgång", d: "Ett kort videomöte där vi går igenom mål, nuläge och budget." },
  { t: "Förslag och fast pris", d: "Ni får ett skriftligt förslag med vad som ingår, tidsplan och pris." },
  { t: "Bygge", d: "Vi arbetar i en testmiljö och stämmer av löpande tills ni godkänner." },
  { t: "Lansering och uppföljning", d: "Vi lanserar, mäter och fortsätter förbättra." },
];

const FAQ = [
  { q: "Var finns ni?", a: `${SITE.location} Möten sker via video, och vi svarar på svenska och engelska.` },
  { q: "Vad kostar det?", a: "Det beror på omfattningen. Efter en kort genomgång får ni ett fast pris, så att ni vet kostnaden innan arbetet börjar." },
  { q: "Kan ni hjälpa en butik som redan finns?", a: "Ja. Vi tar över och vidareutvecklar befintliga Shopify-butiker och webbplatser. Vi börjar alltid med en genomgång av det som finns." },
];

export default function HomePage() {
  return (
    <>
      <section className="container-site grid items-center gap-10 pt-14 sm:pt-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Shopify · Webb · SEO</p>
          <h1 className="h1 mt-4">Shopify-butiker, webbplatser och SEO för svenska företag</h1>
          <p className="lead mt-5">
            Vi bygger och förbättrar webbutiker och företagssajter, och ser till att de syns i Google. Ni får ett fast pris
            efter genomgång och regelbundna avstämningar via video.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/kontakta-oss" className="btn-primary">Berätta om ert projekt</Link>
            <Link href="/referenser" className="btn-ghost">Se tidigare arbeten</Link>
          </div>
          <p className="mt-5 text-sm text-ink-muted">{SITE.location}</p>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-line">
          <Image src="/img/homepage-hero.png" alt="Arbete med webbutik och statistik på skärm" fill priority sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="container-site mt-24" id="tjanster">
        <p className="eyebrow">Tjänster</p>
        <h2 className="h2 mt-3">Det här hjälper vi till med</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/tjanster/${s.slug}`} className="card transition-colors hover:border-brand">
              <h3 className="text-lg font-bold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.short}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand">Läs mer →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-site mt-24" id="referenser">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Referenser</p>
            <h2 className="h2 mt-3">Ett urval av våra projekt</h2>
          </div>
          <Link href="/referenser" className="text-sm font-semibold text-brand">Alla referenser →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VISIBLE_PROJECTS.slice(0, 3).map((p) => (
            <article key={p.name} className="card !p-0 overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={p.image} alt={`${p.name} – ${p.type}`} fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-brand">{p.type}</p>
                <h3 className="mt-1 font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site mt-24">
        <p className="eyebrow">Arbetssätt</p>
        <h2 className="h2 mt-3">Så går ett projekt till</h2>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.t} className="card">
              <span className="text-sm font-bold text-brand">0{i + 1}</span>
              <h3 className="mt-2 font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-ink-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="container-site"><FaqList items={FAQ} /></div>
      <CtaBand />
    </>
  );
}
