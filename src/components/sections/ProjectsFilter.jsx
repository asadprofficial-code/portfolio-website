"use client";

import { useState } from "react";
import Img from "@/components/Img";

// Projekt med filterflikar (samma upplägg som Techknights startsida).
export default function ProjectsFilter({ projects }) {
  const tags = ["Alla", ...Array.from(new Set(projects.flatMap((p) => p.type.split(" · ").filter((t) => t !== "Sverige"))))];
  const [active, setActive] = useState("Alla");
  const list = active === "Alla" ? projects : projects.filter((p) => p.type.includes(active));
  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrera projekt">
        {tags.map((t) => (
          <button key={t} type="button" role="tab" aria-selected={active === t} onClick={() => setActive(t)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${active === t ? "bg-brand text-white" : "border border-line bg-white text-ink hover:border-brand"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article key={p.name} className="group overflow-hidden rounded-3xl border border-line bg-white">
            <div className="relative aspect-[16/10] bg-ink">
              <Img src={p.image} alt={`${p.name} – ${p.type}`} fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs font-bold text-brand">{p.type}</p>
              <h3 className="mt-1 text-lg font-extrabold">{p.name}</h3>
              <p className="mt-2 text-sm text-ink-muted">{p.text}</p>
              {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-bold text-brand">Besök sajten →</a>}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
