"use client";

import { useState } from "react";
import BrandIcon from "@/components/BrandIcon";

export default function TechTabs({ groups }) {
  const [active, setActive] = useState(groups[0].title);
  const items = groups.find((g) => g.title === active)?.items || [];
  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Teknikområden">
        {groups.map((g) => (
          <button key={g.title} type="button" role="tab" aria-selected={active === g.title} onClick={() => setActive(g.title)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${active === g.title ? "bg-brand text-white" : "border border-line bg-white text-ink hover:border-brand"}`}>
            {g.title}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((it) => (
          <div key={it} className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 text-center">
            <BrandIcon name={it} size={34} />
            <span className="mt-3 text-sm font-bold">{it}</span>
          </div>
        ))}
      </div>
    </>
  );
}
