import BrandIcon from "@/components/BrandIcon";

const TOOLS = ["Google Search Console", "Google Analytics 4", "Semrush", "Ahrefs", "WordPress", "Shopify", "Next.js", "PageSpeed Insights"];

// I stället för en partnerlogotyp-rad: verktyg vi faktiskt använder (inga påstådda partnerskap).
export default function ToolsStrip({ title = "Verktyg vi arbetar med" }) {
  return (
    <section className="border-y border-line bg-white py-8">
      <div className="container-site">
        <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">{title}</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TOOLS.map((t) => (
            <span key={t} className="flex items-center gap-2 text-[15px] font-bold text-ink/55">
              <span className="text-ink/45"><BrandIcon name={t} size={20} mono /></span>{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
