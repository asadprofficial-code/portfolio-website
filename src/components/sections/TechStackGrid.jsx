import SectionHead from "./SectionHead";
import BrandIcon from "@/components/BrandIcon";

export default function TechStackGrid({ eyebrow = "Teknik och verktyg", title, intro, items }) {
  if (!items?.length) return null;
  return (
    <section className="bg-white py-24">
      <div className="container-site">
        <SectionHead eyebrow={eyebrow} title={title} intro={intro} center />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.name} className="flex flex-col items-center rounded-2xl border border-line p-5 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white"><BrandIcon name={it.name} size={30} /></span>
              <span className="mt-3 text-sm font-bold">{it.name}</span>
              {it.text && <span className="mt-1 text-xs text-ink-muted">{it.text}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
