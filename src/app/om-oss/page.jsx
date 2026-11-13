import Image from "next/image";
import { SITE } from "@/lib/site";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Om oss – vilka vi är och hur vi arbetar",
  description: "Två grundare med fokus på Shopify, webbutveckling, SEO och innehåll. Vi arbetar på distans med företag i hela Sverige.",
  alternates: { canonical: "/om-oss" },
};

const TEAM = [
  {
    name: "Asad Amin",
    role: "Grundare – Shopify, sociala medier och innehåll",
    image: "/img/asad-amin.jpg",
    text: "Asad arbetar med Shopify-butiker, marknadsföring i sociala medier och texter. Han är kundernas kontaktperson genom hela projektet.",
  },
  {
    name: "Aqsa",
    role: "Medgrundare – SEO och webbutveckling",
    image: "/img/AQSA.png",
    text: "Aqsa ansvarar för teknisk SEO och webbutveckling: snabba sajter med en struktur som gör det lättare att ranka.",
  },
];

const VALUES = [
  { t: "Ärliga löften", d: "Vi lovar inga placeringar i Google. Vi lovar ett tydligt arbetssätt och rapporter som visar vad som har gjorts." },
  { t: "Fast pris", d: "Efter genomgången får ni ett pris för det som ska göras, inte en öppen timräkning." },
  { t: "Tydlig kommunikation", d: "Videomöten, en delad att-göra-lista och svar inom en arbetsdag." },
];

export default function OmOssPage() {
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <p className="eyebrow">Om oss</p>
        <h1 className="h1 mt-4">En liten byrå med två grundare</h1>
        <p className="lead mt-5 max-w-3xl">
          Vi hjälper företag att bygga och växa online med Shopify, webbutveckling, SEO och innehåll. {SITE.location}
        </p>
      </section>

      <section className="container-site mt-14 grid gap-6 md:grid-cols-2">
        {TEAM.map((m) => (
          <article key={m.name} className="card flex gap-5">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
              <Image src={m.image} alt={m.name} fill sizes="96px" className="object-cover" />
            </div>
            <div>
              <h2 className="text-lg font-bold">{m.name}</h2>
              <p className="text-sm font-semibold text-brand">{m.role}</p>
              <p className="mt-2 text-sm text-ink-muted">{m.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="container-site mt-20">
        <h2 className="h2">Så arbetar vi</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.t} className="card"><h3 className="font-bold">{v.t}</h3><p className="mt-2 text-sm text-ink-muted">{v.d}</p></div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
