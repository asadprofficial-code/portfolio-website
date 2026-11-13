export default function CenteredText({ title, body }) {
  return (
    <section className="bg-white py-24">
      <div className="container-site mx-auto max-w-3xl text-center">
        <h2 className="text-[30px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[48px]">{title}</h2>
        {[].concat(body || []).map((p) => <p key={p} className="lead mt-5">{p}</p>)}
      </div>
    </section>
  );
}
