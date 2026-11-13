import SectionHead from "./SectionHead";

export default function TechStackGrid({ eyebrow = "Teknik och verktyg", title, intro, items }) {
  if (!items?.length) return null;
  return (
    <section className="bg-white py-24">
      <div className="container-site">
        <SectionHead eyebrow={eyebrow} title={title} intro={intro} center />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.name} className="flex flex-col items-center rounded-2xl border border-line p-5 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-lg font-extrabold text-brand">{it.name.slice(0, 2)}</span>
              <span className="mt-3 text-sm font-bold">{it.name}</span>
              {it.text && <span className="mt-1 text-xs text-ink-muted">{it.text}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
