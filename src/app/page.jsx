import Link from "next/link";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";
import HeroImage from "@/components/sections/HeroImage";
import ToolsStrip from "@/components/sections/ToolsStrip";
import SectionHead from "@/components/sections/SectionHead";
import ImageText from "@/components/sections/ImageText";
import Steps from "@/components/sections/Steps";
import ProjectsDark from "@/components/sections/ProjectsDark";
import TechStackGrid from "@/components/sections/TechStackGrid";
import SupportBand from "@/components/sections/SupportBand";
import StatsBand from "@/components/StatsBand";
import FaqList from "@/components/FaqList";
import Img from "@/components/Img";

export const metadata = { alternates: { canonical: "/" } };

const FAQ = [
  { q: "Var finns ni?", a: `${SITE.location} Alla möten sker via video, och vi svarar på svenska och engelska.` },
  { q: "Vad kostar det?", a: "Det beror på omfattningen. Efter en kort genomgång får ni en skriftlig offert, så att ni vet kostnaden innan arbetet börjar." },
  { q: "Kan ni förbättra en hemsida som redan finns?", a: "Ja. Vi tar över och förbättrar befintliga hemsidor och webbutiker. Vi börjar alltid med en genomgång av det som finns." },
  { q: "Arbetar ni med både SEO och hemsidor?", a: "Ja. Vi bygger hemsidor med SEO från start och kan sedan fortsätta med löpande SEO, så att ni bara har en leverantör." },
];

const TECH = [
  { name: "WordPress" }, { name: "Shopify" }, { name: "Next.js" }, { name: "WooCommerce" },
  { name: "Search Console" }, { name: "Analytics 4" }, { name: "Semrush" }, { name: "Ahrefs" },
];

export default function HomePage() {
  return (
    <>
      <HeroImage
        image="/img/homepage-hero.png"
        title="SEO och webbdesign för småföretag i hela Sverige"
        tagline="Hemsidor som syns i Google – och ger förfrågningar."
        description="Vi bygger hemsidor och webbutiker och arbetar med SEO för småföretag. Ni får en tydlig offert efter en kort genomgång och pratar direkt med dem som gör jobbet."
        primary={{ href: "/kontakta-oss", label: "Kontakta oss" }}
        secondary={{ href: "#tjanster", label: "Våra tjänster" }}
      />
      <ToolsStrip />

      <section className="bg-white py-24">
        <div className="container-site mx-auto max-w-3xl text-center">
          <p className="eyebrow">SEO · Webbdesign</p>
          <h2 className="mt-3 text-[30px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[48px]">Mer synlighet. Fler kunder. Tydliga villkor.</h2>
          <p className="lead mt-5">
            De flesta småföretag har en hemsida som ingen hittar. Vi bygger sajter som är tydliga, snabba och optimerade för Google från början –
            och hjälper er sedan att klättra i sökresultaten med SEO.
          </p>
        </div>
      </section>

      <section id="tjanster" className="scroll-mt-20 bg-[#f8f7fc] py-24">
        <div className="container-site">
          <SectionHead eyebrow="Tjänster" title="Det här hjälper vi till med" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/tjanster/${s.slug}`} className="group overflow-hidden rounded-3xl border border-line bg-white transition-colors hover:border-brand">
                <div className="relative aspect-[16/9]">
                  <Img src={s.heroImage || s.image} alt="" fill sizes="(min-width:768px) 560px, 100vw" className="object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-extrabold tracking-tight">{s.h1}</h3>
                  <p className="mt-2 text-ink-muted">{s.short}</p>
                  <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                    {s.bullets.slice(0, 3).map((b) => <li key={b} className="flex gap-2"><span className="font-bold text-brand">✓</span>{b}</li>)}
                  </ul>
                  <span className="mt-5 inline-block font-bold text-brand">Läs mer om {s.name.toLowerCase() === "seo" ? "SEO" : "webbdesign"} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <ImageText
        image="/img/seo-dashboard.png"
        title="Därför väljer småföretag oss"
        bullets={[
          "Ni pratar direkt med dem som gör jobbet.",
          "Skriftlig offert innan vi börjar.",
          "SEO ingår från start när vi bygger.",
          "Inga löften om förstaplatser – bara ett tydligt arbetssätt.",
          "Svar inom en arbetsdag.",
        ]}
        cta={{ href: "/kontakta-oss", label: "Få ett förslag" }}
      />

      <Steps
        title="Så kommer ni igång"
        steps={[
          { title: "Videomöte", text: "Vi går igenom er verksamhet, er hemsida och vad ni vill uppnå." },
          { title: "Förslag och offert", text: "Ni får ett skriftligt förslag med vad som ingår, tidsplan och offert." },
          { title: "Start", text: "Vi sätter igång och stämmer av löpande tills allt är klart." },
        ]}
      />

      <ProjectsDark title="Ett urval av våra projekt" />
      <TechStackGrid title="Plattformar och verktyg vi använder" intro="Vi bygger och mäter med etablerade verktyg – inga låsta specialsystem." items={TECH} />

      <section className="bg-white pb-20">
        <div className="container-site mx-auto max-w-3xl"><FaqList items={FAQ} title="Vanliga frågor" /></div>
      </section>

      <SupportBand />
    </>
  );
}
