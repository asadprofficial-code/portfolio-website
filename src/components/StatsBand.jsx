import { VISIBLE_PROJECTS } from "@/data/projects";

// Bara siffror som går att kontrollera på sajten – inga påhittade resultat.
export default function StatsBand() {
  const swedish = VISIBLE_PROJECTS.filter((p) => p.type.includes("Sverige")).length;
  const stats = [
    { value: `${swedish}`, label: "svenska företag vi gör SEO för" },
    { value: `${VISIBLE_PROJECTS.length}`, label: "projekt under Referenser" },
    { value: "1 dag", label: "så snabbt svarar vi (arbetsdagar)" },
    { value: "2", label: "grundare som gör jobbet själva" },
  ];
  return (
    <section className="bg-[#110d1f] text-white">
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
