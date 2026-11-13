import BrandIcon from "@/components/BrandIcon";

const TOOLS = [
  // SEO och mätning
  "Google Search Console", "Google Analytics 4", "Semrush", "PageSpeed Insights",
  // Webbutveckling och design
  "WordPress", "Elementor", "WooCommerce", "Shopify", "Next.js", "React", "Tailwind", "Figma",
];

// I stället för en partnerlogotyp-rad: verktyg vi faktiskt använder (inga påstådda partnerskap).
export default function ToolsStrip({ title = "Verktyg vi arbetar med" }) {
  return (
    <section className="border-y border-line bg-white py-8">
      <div className="container-site">
        <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">{title}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {TOOLS.map((t) => (
            <span key={t} className="flex items-center gap-2 text-[15px] font-bold text-ink/70">
              <BrandIcon name={t} size={22} />{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
