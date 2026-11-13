import Link from "next/link";
import { SERVICES } from "@/data/services";

export default function RelatedServices({ current, title = "Fler tjänster" }) {
  const others = SERVICES.filter((s) => s.slug !== current);
  if (!others.length) return null;
  return (
    <section className="bg-white py-20">
      <div className="container-site">
        <h2 className="h2">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {others.map((s) => (
            <Link key={s.slug} href={`/tjanster/${s.slug}`} className="card transition-colors hover:border-brand">
              <p className="text-lg font-extrabold">{s.h1}</p>
              <p className="mt-2 text-sm text-ink-muted">{s.tagline}</p>
              <span className="mt-4 inline-block text-sm font-bold text-brand">Läs mer →</span>
            </Link>
          ))}
          <Link href="/kontakta-oss" className="card transition-colors hover:border-brand">
            <p className="text-lg font-extrabold">Osäker på vad ni behöver?</p>
            <p className="mt-2 text-sm text-ink-muted">Beskriv läget så föreslår vi ett upplägg.</p>
            <span className="mt-4 inline-block text-sm font-bold text-brand">Kontakta oss →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
