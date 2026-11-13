import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import SectionHead from "@/components/sections/SectionHead";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Kontakta oss – få ett förslag och en offert",
  description: "Berätta om ert projekt så återkommer vi inom en arbetsdag med ett förslag. Vi arbetar med SEO och webbdesign för småföretag i hela Sverige.",
  alternates: { canonical: "/kontakta-oss" },
};

const NEXT = [
  "Vi läser er förfrågan och svarar inom en arbetsdag.",
  "Vi föreslår en tid för ett kort videomöte.",
  "Ni får ett skriftligt förslag med offert.",
];

const WHO = [
  { t: "Hemsida eller webbutik", d: "Ny hemsida, ny design eller en webbutik.", p: "Asad Amin" },
  { t: "SEO", d: "SEO-analys, löpande SEO eller lokal SEO.", p: "Aqsa" },
  { t: "Allt annat", d: "Frågor om pris, avtal eller samarbete.", p: "Asad Amin" },
];

const FAQ = [
  { q: "Hur snabbt svarar ni?", a: "Inom en arbetsdag." },
  { q: "Kan vi ses på plats?", a: "Vi arbetar på distans och har alla möten via video. Det gör att vi kan hjälpa företag i hela Sverige." },
  { q: "Kan vi skriva på engelska?", a: "Ja. Vi svarar på svenska och engelska." },
];

function InfoCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-muted">{title}</p>
      <div className="mt-1.5 text-[15px] font-semibold">{children}</div>
    </div>
  );
}

export default function KontaktaOssPage() {
  return (
    <>
      <section className="bg-[#110d1f] pb-40 pt-20 text-white">
        <div className="container-site"><div className="max-w-3xl">
          <p className="eyebrow !text-[#c4b5fd]">Kontakt</p>
          <h1 className="mt-3 text-[40px] font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-[60px]">Kontakta oss</h1>
          <p className="mt-5 text-lg text-white/70">Berätta vad ni behöver hjälp med så får ni ett förslag och en offert. {SITE.responseTime}</p>
        </div></div>
      </section>

      <section className="-mt-28 pb-24">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-4">
            <InfoCard title="E-post"><a className="text-brand hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></InfoCard>
            <InfoCard title="Svarstid">{SITE.responseTime}</InfoCard>
            <InfoCard title="Möten">Via video – Google Meet eller Teams</InfoCard>
            <InfoCard title="Var">{SITE.location}</InfoCard>
            {SITE.bookingUrl && <a className="btn-primary w-full" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">Boka ett videomöte</a>}
          </div>
          <div>
            <div className="rounded-3xl bg-white p-1 shadow-xl">
              <div className="px-6 pt-6"><h2 className="text-2xl font-extrabold tracking-tight">Skicka ett meddelande</h2></div>
              <div className="[&_.card]:border-0"><ContactForm /></div>
            </div>
            <div className="mt-6 rounded-2xl bg-[#f8f7fc] p-6">
              <p className="font-bold">Det här händer sedan</p>
              <ul className="mt-3 space-y-2">
                {NEXT.map((n) => <li key={n} className="flex gap-3 text-ink-muted"><span className="font-bold text-brand">✓</span>{n}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7fc] py-24">
        <div className="container-site">
          <SectionHead title="Vem ska jag kontakta?" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {WHO.map((w) => (
              <div key={w.t} className="card">
                <h3 className="text-lg font-bold">{w.t}</h3>
                <p className="mt-2 text-ink-muted">{w.d}</p>
                <p className="mt-4 text-sm font-semibold text-brand">{w.p} · <a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site mx-auto max-w-3xl"><FaqList items={FAQ} title="Snabba svar på vanliga frågor." /></div>
      </section>
    </>
  );
}
