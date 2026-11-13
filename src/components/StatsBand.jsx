import { SERVICES } from "@/data/services";
import { VISIBLE_PROJECTS } from "@/data/projects";

// Bara siffror som går att kontrollera på sajten – inga påhittade resultat.
export default function StatsBand() {
  const stats = [
    { value: `${VISIBLE_PROJECTS.length}`, label: "projekt visas under Referenser" },
    { value: `${SERVICES.length}`, label: "tjänster inom webb, e-handel och SEO" },
    { value: "1", label: "arbetsdag – så snabbt svarar vi" },
    { value: "2", label: "grundare som gör jobbet själva" },
  ];
  return (
    <section className="mt-24 bg-ink text-white">
      <div className="container-site grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-5xl font-extrabold tracking-[-0.04em]">{s.value}</p>
            <p className="mt-2 text-sm text-white/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
