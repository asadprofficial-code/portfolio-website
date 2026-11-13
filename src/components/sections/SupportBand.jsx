import Link from "next/link";
import { SITE } from "@/lib/site";

export default function SupportBand({ title = "Redo att växa online?", text }) {
  return (
    <section className="relative overflow-hidden bg-[#110d1f] py-24 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.35),transparent_60%)]" aria-hidden />
      <div className="container-site relative z-10 mx-auto max-w-2xl">
        <h2 className="text-[32px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[52px]">{title}</h2>
        <p className="mt-5 text-lg text-white/70">{text || `Berätta vad ni behöver så får ni ett förslag och ett fast pris. ${SITE.responseTime}`}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/kontakta-oss" className="btn bg-white text-brand hover:bg-brand-light">Kontakta oss</Link>
          <a href={`mailto:${SITE.email}`} className="btn border border-white/30 text-white hover:bg-white/10">{SITE.email}</a>
        </div>
      </div>
    </section>
  );
}
