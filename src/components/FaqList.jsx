export default function FaqList({ items, title = "Vanliga frågor" }) {
  if (!items?.length) return null;
  return (
    <section className="mt-16">
      {title && <h2 className="h2">{title}</h2>}
      <div className="mt-6 divide-y divide-line rounded-2xl border border-line">
        {items.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="cursor-pointer list-none font-semibold marker:hidden">
              <span className="flex items-start justify-between gap-4">
                {f.q}
                <span className="text-brand transition-transform group-open:rotate-45" aria-hidden>+</span>
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-ink-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
