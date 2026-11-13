export default function SectionHead({ eyebrow, title, intro, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2 mt-3">{title}</h2>
      {intro && <p className="lead mt-4">{intro}</p>}
    </div>
  );
}
