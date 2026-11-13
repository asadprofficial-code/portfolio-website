const GROUPS = [
  { title: "E-handel", items: ["Shopify", "Liquid", "Shopify-appar", "WooCommerce"] },
  { title: "Webb", items: ["Next.js", "React", "WordPress", "Elementor", "HTML/CSS", "Tailwind"] },
  { title: "SEO och mätning", items: ["Google Search Console", "Google Analytics 4", "Semrush", "Ahrefs"] },
];

export default function TechStack() {
  return (
    <section className="container-site mt-24">
      <p className="eyebrow">Verktyg och teknik</p>
      <h2 className="h2 mt-3">Det här arbetar vi med</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {GROUPS.map((g) => (
          <div key={g.title} className="card">
            <h3 className="font-bold">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="rounded-full border border-line bg-brand-light px-3 py-1 text-sm font-medium text-brand-dark">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
