import Link from "next/link";
import { BASE_PATH } from "@/lib/site";

// Stor hero med bakgrundsbild och mörk toning (samma upplägg som Techknights tjänstesidor).
export default function HeroImage({ image, crumbs = [], title, tagline, description, primary, secondary, tall = true }) {
  const bg = image?.startsWith("/") ? `${BASE_PATH}${image}` : image;
  return (
    <section className={`relative flex items-center overflow-hidden bg-ink ${tall ? "min-h-[78vh]" : "min-h-[52vh]"}`}>
      <div className="hero-zoom absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-[#110d1f]/90 via-[#110d1f]/70 to-[#110d1f]/40" aria-hidden />
      <div className="container-site relative z-10 py-24">
        <div className="hero-anim max-w-[720px]">
          {crumbs.length > 0 && (
            <nav aria-label="Brödsmulor" className="mb-6 text-sm text-white/60">
              {crumbs.map((c, i) => (
                <span key={c.label}>
                  {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span className="text-white/85">{c.label}</span>}
                  {i < crumbs.length - 1 && <span className="mx-2">/</span>}
                </span>
              ))}
            </nav>
          )}
          <h1 className="text-[40px] font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-[62px]">{title}</h1>
          {tagline && <p className="mt-5 text-lg font-bold text-[#c4b5fd] sm:text-xl">{tagline}</p>}
          {description && <p className="mt-4 max-w-[580px] text-[17px] leading-relaxed text-white/75">{description}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            {primary && <Link href={primary.href} className="btn bg-white text-brand hover:bg-brand-light">{primary.label}</Link>}
            {secondary && <a href={secondary.href} className="btn border border-white/40 text-white hover:bg-white/10">{secondary.label}</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
