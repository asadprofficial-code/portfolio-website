import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";
import { VISIBLE_PROJECTS } from "@/data/projects";
import Img from "@/components/Img";
import ToolsStrip from "@/components/sections/ToolsStrip";
import ProjectsFilter from "@/components/sections/ProjectsFilter";
import TechTabs from "@/components/sections/TechTabs";
import RichSection from "@/components/RichSection";
import FaqList from "@/components/FaqList";

// Startsidan följer Techknights startsida: ljus centrerad hero → partnerrad → "allt samlat" + 4 kort →
// 6 bildkort → SEO-text → siffror → 4 stora tjänstekort → tjänstelänkar → projekt med filter →
// tekniker med flikar → FAQ. (Kundcitat och blogg läggs till när det finns riktiga sådana.)

export const metadata = { alternates: { canonical: "/" } };

const ICON_PATHS = {
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4.35-4.35",
  chart: "M4 19h16M7 15l4-4 3 3 5-6",
  monitor: "M4 5h16v11H4zM9 20h6M12 16v4",
  wrench: "M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-.6-.6-2.6 2.6-2.5Z",
};

function LineIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

const FEATURES = [
  { t: "SEO-analys", icon: "search", d: "Se vad som stoppar sajten och vad som ska göras först." },
  { t: "Löpande SEO", icon: "chart", d: "Sökord, teknik, texter och länkar – med rapport varje månad." },
  { t: "Ny hemsida", icon: "monitor", d: "Snabb, mobilanpassad och byggd för Google från start." },
  { t: "Underhåll", icon: "wrench", d: "Uppdateringar, säkerhetskopior och ändringar när ni behöver." },
];

const CARDS = [
  { t: "SEO-analys", d: "Teknik, innehåll, sökord och länkar granskas – ni får en prioriterad åtgärdslista.", img: "/img/seo-dashboard.png", href: "/tjanster/seo#seo-analys-det-har-tittar-vi-pa" },
  { t: "Teknisk SEO", d: "Laddtid, indexering, struktur och schema som gör sajten lätt för Google att förstå.", img: "/img/web-dev-workspace.png", href: "/tjanster/seo#teknisk-seo-det-har-ingar" },
  { t: "Lokal SEO", d: "Google Företagsprofil, omdömen och sidor för området där era kunder finns.", img: "/img/about-hero.png", href: "/tjanster/seo#lokal-seo-och-google-foretagsprofil" },
  { t: "Hemsida för småföretag", d: "En tydlig sajt som visar vad ni gör och gör det enkelt att ta kontakt.", img: "/img/homepage-hero.png", href: "/tjanster/webbdesign#det-har-kan-vi-bygga-at-er" },
  { t: "WordPress-hemsida", d: "En sajt ni kan uppdatera själva, med SEO-grunden på plats från början.", img: "/img/content-writing-workspace.png", href: "/tjanster/webbdesign#det-har-kan-vi-bygga-at-er" },
  { t: "Webbutik", d: "Försäljning online i Shopify eller WooCommerce, med betalning och frakt.", img: "/img/shopify-dashboard.png", href: "/tjanster/webbdesign#det-har-kan-vi-bygga-at-er" },
];

const HOME_SECTIONS = [
  {
    h2: "Vad gör en byrå för SEO och webbdesign?",
    body: [
      "En byrå för SEO och webbdesign hjälper företag att få en hemsida som både ser bra ut och hittas i Google. Det handlar om två saker som hänger ihop: att bygga sajten rätt från början och att sedan arbeta löpande så att den klättrar i sökresultaten.",
      "För ett småföretag betyder det oftast färre leverantörer att hålla reda på. Samma team planerar sidorna, bygger dem och följer upp vilka sökord som ger besökare och förfrågningar.",
    ],
  },
  {
    h2: "Våra tjänster",
    body: ["Vi arbetar med två huvudområden:"],
    table: {
      head: ["Tjänst", "Det här ingår"],
      rows: [
        ["SEO", "SEO-analys, sökordsanalys, teknisk SEO, innehåll, länkbygge, lokal SEO och månadsrapport"],
        ["Webbdesign", "Hemsida för småföretag, WordPress-hemsida, landningssida, webbutik och underhåll"],
      ],
    },
  },
  {
    h2: "Varför behöver ett småföretag synas på Google?",
    body: [
      "När någon behöver en tjänst börjar de flesta med en sökning. Företagen som syns överst får klicken – resten blir aldrig ens jämförda. En hemsida som inte rankar fungerar som ett visitkort i en låda.",
      "Med SEO kommer besökarna utan att ni betalar per klick. Det tar längre tid än annonser, men effekten finns kvar så länge sidorna håller måttet.",
    ],
  },
  {
    h2: "Hur går ett samarbete till?",
    ordered: true,
    body: ["Alla uppdrag börjar på samma sätt:"],
    bullets: [
      "Ett kort videomöte om er verksamhet, er sajt och era mål.",
      "En genomgång av sajten och de företag som syns före er i dag.",
      "Ett skriftligt förslag med vad som ingår, tidsplan och offert.",
      "Arbetet startar med det som ger störst effekt först.",
      "Uppföljning varje månad med en rapport på svenska.",
    ],
  },
  {
    h2: "Vad kostar SEO och en ny hemsida?",
    body: [
      "Priset beror på hur stor sajten är, vilka funktioner som behövs och hur hård konkurrensen är i er bransch. Efter en kort genomgång får ni en skriftlig offert, så att ni vet kostnaden innan något arbete börjar.",
    ],
  },
  {
    h2: "Varför välja oss?",
    bullets: [
      "Ni pratar direkt med dem som gör jobbet – ingen säljare emellan.",
      "Hemsida och SEO från samma team, utan glapp mellan leverantörer.",
      "Inga löften om förstaplatser – bara ett tydligt arbetssätt och ärliga rapporter.",
      "Svar inom en arbetsdag och möten via video, var ni än finns i Sverige.",
    ],
  },
];

const TECH = [
  { title: "Webb", items: ["WordPress", "Elementor", "Next.js", "React", "Tailwind", "HTML/CSS", "Figma"] },
  { title: "E-handel", items: ["Shopify", "WooCommerce", "WordPress", "Elementor", "Analytics 4", "PageSpeed"] },
  { title: "SEO och mätning", items: ["Search Console", "Analytics 4", "Semrush", "PageSpeed", "Lighthouse", "Next.js"] },
];

const FAQ = [
  { q: "Vad gör ni?", a: "Vi arbetar med SEO och webbdesign för småföretag: SEO-analyser, löpande SEO, nya hemsidor, webbutiker och underhåll." },
  { q: "Var finns ni?", a: `${SITE.location} Alla möten sker via video, och vi svarar på svenska och engelska.` },
  { q: "Vad kostar det?", a: "Det beror på omfattningen. Efter en kort genomgång får ni en skriftlig offert innan arbetet börjar." },
  { q: "Kan ni förbättra en hemsida som redan finns?", a: "Ja. Vi tar över och förbättrar befintliga hemsidor och webbutiker och börjar alltid med en genomgång av det som finns." },
  { q: "Hur lång tid tar SEO?", a: "Tekniska förbättringar kan märkas efter några veckor, nytt innehåll tar oftast några månader. Vi mäter från första dagen." },
  { q: "Arbetar ni med både SEO och hemsidor?", a: "Ja. Vi bygger hemsidor med SEO från start och kan sedan fortsätta med löpande SEO, så att ni bara har en leverantör." },
];

export default function HomePage() {
  const swedish = VISIBLE_PROJECTS.filter((p) => p.type.includes("Sverige")).length;
  const stats = [
    { v: "4+", l: "års erfarenhet av SEO och webb" },
    { v: `${VISIBLE_PROJECTS.length}`, l: "projekt under Referenser" },
    { v: `${swedish}`, l: "svenska företag vi gör SEO för" },
    { v: "24 h", l: "svarstid på vardagar" },
  ];

  return (
    <>
      {/* 1. Ljus centrerad hero */}
      <section className="bg-[#f8f7fc] pb-20 pt-20 sm:pt-28">
        <div className="container-site text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">{SITE.name} · SEO och webbdesign</p>
          <h1 className="mx-auto mt-6 max-w-4xl text-[44px] font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-[80px]">
            SEO och webbdesign för småföretag i hela Sverige
          </h1>
          <p className="lead mx-auto mt-7 max-w-2xl">
            Vi bygger hemsidor som syns i Google och hjälper småföretag att få fler kunder med SEO. Ni pratar direkt med dem som gör jobbet och får en skriftlig offert innan vi börjar.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/kontakta-oss" className="btn bg-ink text-white hover:bg-brand">Boka ett kort videomöte</Link>
            <Link href="#tjanster" className="btn-ghost">Se våra tjänster</Link>
          </div>
        </div>
      </section>

      {/* 2. Partnerrad → verktyg vi använder */}
      <ToolsStrip />

      {/* 3. Allt samlat + 4 kort */}
      <section className="bg-white py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">SEO + webbdesign</p>
            <h2 className="h2 mt-3">Allt ni behöver för att synas, samlat på ett ställe.</h2>
            <p className="lead mt-4">Från en ny hemsida till löpande SEO – med samma kontaktperson hela vägen.</p>
            <Link href="/tjanster" className="mt-6 inline-block font-bold text-brand">Alla tjänster →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.t} className="card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white"><LineIcon name={f.icon} /></span>
                <h3 className="mt-4 font-bold">{f.t}</h3>
                <p className="mt-1 text-sm text-ink-muted">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sex bildkort */}
      <section id="tjanster" className="scroll-mt-20 bg-white pb-24">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <Link key={c.t} href={c.href} className="group overflow-hidden rounded-3xl border border-line bg-white transition-colors hover:border-brand">
              <div className="relative aspect-[16/10] bg-ink">
                <Img src={c.img} alt="" fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-extrabold">{c.t}</h3>
                <p className="mt-1 text-sm text-ink-muted">{c.d}</p>
                <span className="mt-3 inline-block text-sm font-bold text-brand">Läs mer →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. SEO-text */}
      <section className="bg-white pb-16">
        <div className="container-site mx-auto max-w-3xl">
          {HOME_SECTIONS.map((sec) => <RichSection key={sec.h2} sec={sec} />)}
        </div>
      </section>

      {/* 6. Siffror (ljus) */}
      <section className="border-y border-line bg-white py-14">
        <div className="container-site grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="text-5xl font-extrabold tracking-[-0.04em]">{s.v}</p>
              <p className="mt-2 text-sm text-ink-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Stora tjänstekort */}
      <section className="bg-white py-24">
        <div className="container-site">
          <p className="eyebrow">Tjänster</p>
          <h2 className="h2 mt-3 max-w-2xl">Tjänster som täcker hela vägen till fler kunder.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/tjanster/${s.slug}`} className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl bg-ink">
                <Img src={s.heroImage || s.image} alt="" fill sizes="(min-width:768px) 560px, 100vw" className="object-cover opacity-60 transition-opacity group-hover:opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="relative z-10 p-7">
                  <h3 className="text-2xl font-extrabold text-white">{s.h1}</h3>
                  <p className="mt-2 max-w-md text-white/75">{s.tagline}</p>
                  <span className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-brand">Läs mer</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Utforska alla tjänster (länklista) */}
      <section className="bg-[#f8f7fc] py-24">
        <div className="container-site">
          <p className="eyebrow">Alla tjänster</p>
          <h2 className="h2 mt-3">Utforska alla våra tjänster.</h2>
          <div className="mt-10 grid gap-x-10 gap-y-2 md:grid-cols-2">
            {SERVICES.map((s) =>
              s.sections.slice(1, 10).map((sec) => (
                <Link key={sec.h2} href={`/tjanster/${s.slug}#${sec.h2.toLowerCase().replace(/[åä]/g, "a").replace(/ö/g, "o").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                  className="flex items-center justify-between border-b border-line py-3 text-[15px] font-semibold hover:text-brand">
                  <span><span className="text-ink-muted">{s.name} · </span>{sec.h2}</span><span aria-hidden>›</span>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 9. Projekt med filter */}
      <section className="bg-white py-24">
        <div className="container-site">
          <p className="eyebrow">Referenser</p>
          <h2 className="h2 mt-3">Projekt vi har arbetat med.</h2>
          <p className="lead mt-4 max-w-2xl">SEO för svenska företag och hemsidor och webbutiker åt kunder i flera länder.</p>
          <ProjectsFilter projects={VISIBLE_PROJECTS} />
        </div>
      </section>

      {/* 10. Tekniker med flikar */}
      <section className="bg-[#f8f7fc] py-24">
        <div className="container-site">
          <p className="eyebrow">Teknik</p>
          <h2 className="h2 mt-3">Teknikerna vi bygger och mäter med.</h2>
          <TechTabs groups={TECH} />
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-white py-24">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="h2 text-center">Vanliga frågor om SEO och webbdesign</h2>
          <FaqList items={FAQ} title="" />
        </div>
      </section>
    </>
  );
}
