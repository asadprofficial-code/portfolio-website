import Link from "next/link";
import Img from "@/components/Img";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";
import HeroImage from "@/components/sections/HeroImage";
import SectionHead from "@/components/sections/SectionHead";
import ImageText from "@/components/sections/ImageText";
import StatsBand from "@/components/StatsBand";
import SupportBand from "@/components/sections/SupportBand";
import FaqList from "@/components/FaqList";

export const metadata = {
  title: "Om oss – SEO och webbdesign för småföretag",
  description: "Vi är en liten byrå som arbetar med SEO och webbdesign för småföretag i hela Sverige. Tydlig offert, direktkontakt och möten via video.",
  alternates: { canonical: "/om-oss" },
};

// Bara uppgifter som är sanna i dag. Lägg till org.nr, grundår m.m. när de finns.
const FACTS = [
  ["Verksamhet", "SEO och webbdesign"],
  ["Kunder", "Småföretag i hela Sverige"],
  ["Arbetssätt", "På distans, möten via video"],
  ["Språk", "Svenska och engelska"],
  ["Plattformar", "WordPress, Shopify, WooCommerce och Next.js"],
  ["Svarstid", "Inom en arbetsdag"],
];

const TEAM = [
  { name: "Asad Amin", role: "Grundare – webbdesign och innehåll", image: "/img/asad-amin.webp", text: "Bygger hemsidor och webbutiker och skriver texter som är anpassade för Google. Kundernas kontaktperson genom hela projektet." },
  { name: "Aqsa", role: "Medgrundare – SEO", image: "/img/AQSA.webp", text: "Ansvarar för SEO-analyser, teknisk SEO och struktur – så att sajterna blir lätta för Google att förstå." },
];

const VALUES = [
  { t: "Ärlighet", d: "Vi lovar aldrig placeringar i Google. Vi lovar ett tydligt arbetssätt och visar vad som har gjorts." },
  { t: "Tydlig offert", d: "Ni får en skriftlig offert innan vi börjar – inga överraskningar på fakturan." },
  { t: "Närhet", d: "Ni pratar direkt med dem som gör jobbet, inte via en säljare." },
];

const FAQ = [
  { q: "Var finns ni?", a: `${SITE.location} Alla möten sker via video.` },
  { q: "Vilka kunder arbetar ni med?", a: "Främst småföretag – tjänsteföretag, webbutiker och lokala verksamheter – i hela Sverige." },
  { q: "Hur snabbt svarar ni?", a: "Inom en arbetsdag, oftast med ett förslag på tid för ett kort videomöte." },
];

export default function OmOssPage() {
  return (
    <>
      <HeroImage
        image="/img/about-hero.webp"
        crumbs={[{ href: "/", label: "Hem" }, { label: "Om oss" }]}
        title="Om oss"
        tagline="En liten byrå för SEO och webbdesign."
        description="Vi hjälper småföretag i hela Sverige att synas på Google och få en hemsida som ger förfrågningar – med tydlig offert och direktkontakt."
        primary={{ href: "/kontakta-oss", label: "Kontakta oss" }}
        secondary={{ href: "#fakta", label: "Fakta om oss" }}
        tall={false}
      />

      <section className="bg-white py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <SectionHead eyebrow="Vilka vi är" title="Byråns arbetssätt med en frilansares närhet." />
          <div className="prose-site">
            <p>Vi startade för att småföretag ofta hamnar mellan två stolar: stora byråer är för dyra, och billiga lösningar ger en hemsida som ingen hittar.</p>
            <p>Hos oss får ni en tydlig process, en skriftlig offert och samma kontaktperson från första mötet till lansering – och efteråt om ni vill fortsätta med SEO.</p>
          </div>
        </div>
      </section>

      <section id="fakta" className="scroll-mt-20 bg-[#f8f7fc] py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHead eyebrow="Fakta" title="Fakta om oss" />
          <div className="overflow-hidden rounded-3xl border border-line bg-white">
            <table className="w-full text-left text-[15px]">
              <tbody>
                {FACTS.map(([k, v]) => (
                  <tr key={k} className="border-b border-line last:border-0">
                    <th className="w-2/5 px-5 py-4 font-bold">{k}</th>
                    <td className="px-5 py-4 text-ink-muted">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHead eyebrow="Vad vi gör" title="Tjänster som hjälper er växa." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/tjanster/${s.slug}`} className="card transition-colors hover:border-brand">
                <p className="text-xl font-extrabold">{s.h1}</p>
                <p className="mt-2 text-ink-muted">{s.short}</p>
                <span className="mt-4 inline-block font-bold text-brand">Läs mer →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHead eyebrow="Värderingar" title="Det vi tror på." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.t} className="card"><h3 className="text-lg font-bold">{v.t}</h3><p className="mt-2 text-ink-muted">{v.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <ImageText
        image="/img/web-dev-workspace.webp"
        title="Varför välja oss."
        bullets={[
          "Ett team för både hemsida och SEO – inga glapp mellan leverantörer.",
          "Offert och tidsplan skriftligt.",
          "Ni äger allt vi bygger.",
          "Rapporter på svenska som visar vad som har gjorts.",
        ]}
        cta={{ href: "/kontakta-oss", label: "Kontakta oss" }}
        muted
      />

      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHead eyebrow="Teamet" title="Personerna bakom arbetet." center />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {TEAM.map((m) => (
              <article key={m.name} className="card text-center">
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full">
                  <Img src={m.image} alt={m.name} fill sizes="112px" className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{m.name}</h3>
                <p className="text-sm font-semibold text-brand">{m.role}</p>
                <p className="mt-2 text-sm text-ink-muted">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-site mx-auto max-w-3xl"><FaqList items={FAQ} title="Har ni frågor? Vi har svar." /></div>
      </section>

      <SupportBand title="Vill ni arbeta med oss?" />
    </>
  );
}
