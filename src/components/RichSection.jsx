// Samma sektionsformat som Techknights tjänstesidor: body, bullets (ordered), table, after.
const asList = (v) => (Array.isArray(v) ? v : v ? [v] : []);

export default function RichSection({ sec }) {
  const List = sec.ordered ? "ol" : "ul";
  return (
    <section className="mt-14">
      <h2 className="h2">{sec.h2}</h2>
      <div className="prose-site mt-5">
        {asList(sec.body).map((p) => <p key={p}>{p}</p>)}
      </div>
      {sec.bullets?.length > 0 && (
        <List className={`mt-2 space-y-3 ${sec.ordered ? "list-none" : ""}`}>
          {sec.bullets.map((b, i) => (
            <li key={b} className="flex gap-3 leading-relaxed text-ink-muted">
              <span className="mt-0.5 shrink-0 font-bold text-brand">{sec.ordered ? `${i + 1}.` : "✓"}</span>
              <span>{b}</span>
            </li>
          ))}
        </List>
      )}
      {sec.table && (
        <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[520px] text-left text-[15px]">
            <thead className="bg-brand-light">
              <tr>{sec.table.head.map((h) => <th key={h} className="px-4 py-3 font-bold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {sec.table.rows.map((row) => (
                <tr key={row[0]} className="border-t border-line align-top">
                  {row.map((c, i) => <td key={i} className={`px-4 py-3 ${i === 0 ? "font-semibold" : "text-ink-muted"}`}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {asList(sec.after).length > 0 && (
        <div className="prose-site mt-5">{asList(sec.after).map((p) => <p key={p}>{p}</p>)}</div>
      )}
    </section>
  );
}
