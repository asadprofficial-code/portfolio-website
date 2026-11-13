import SectionHead from "./SectionHead";

export default function Steps({ title, intro, steps, id }) {
  return (
    <section id={id} className="scroll-mt-20 bg-[#f8f7fc] py-24">
      <div className="container-site">
        <SectionHead title={title} intro={intro} />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="card">
              <span className="inline-flex h-9 items-center rounded-full bg-brand px-4 text-xs font-bold uppercase tracking-wider text-white">Steg {i + 1}</span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
