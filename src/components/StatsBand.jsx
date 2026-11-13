import { STATS } from "@/lib/site";
import CountUp from "@/components/CountUp";

// Statistikband med uppräknande siffror. dark = mörk bakgrund (tjänste- och om oss-sidor), annars ljus (startsidan).
export default function StatsBand({ dark = true }) {
  return (
    <section className={dark ? "bg-[#110d1f] text-white" : "border-y border-line bg-white"}>
      <div className="container-site grid gap-10 py-16 text-center sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="text-6xl font-extrabold tracking-[-0.05em] sm:text-7xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className={`mt-3 text-[15px] ${dark ? "text-white/70" : "text-ink-muted"}`}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
