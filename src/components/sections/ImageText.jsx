import Link from "next/link";
import Img from "@/components/Img";

// Bild + text bredvid varandra, kan speglas (Techknights "Alt"-sektioner).
export default function ImageText({ image, title, body, bullets, cta, reverse = false, muted = false }) {
  return (
    <section className={`py-20 ${muted ? "bg-[#f8f7fc]" : "bg-white"}`}>
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${reverse ? "lg:order-2" : ""}`}>
          <Img src={image} alt="" fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 className="h2">{title}</h2>
          {[].concat(body || []).map((p) => <p key={p} className="lead mt-4">{p}</p>)}
          {bullets?.length > 0 && (
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-ink-muted"><span className="font-bold text-brand">✓</span>{b}</li>
              ))}
            </ul>
          )}
          {cta && <Link href={cta.href} className="btn-primary mt-8">{cta.label}</Link>}
        </div>
      </div>
    </section>
  );
}
