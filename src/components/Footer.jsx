import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-[#110d1f] text-white">
      <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-extrabold">{SITE.name}<span className="text-[#a78bfa]">.</span></p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">SEO och webbdesign för småföretag i hela Sverige. {SITE.location}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Tjänster</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link className="hover:text-white" href={`/tjanster/${s.slug}`}>{s.name}</Link></li>
            ))}
            <li><Link className="hover:text-white" href="/tjanster">Alla tjänster</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Företaget</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link className="hover:text-white" href="/om-oss">Om oss</Link></li>
            <li><Link className="hover:text-white" href="/referenser">Referenser</Link></li>
            <li><Link className="hover:text-white" href="/kontakta-oss">Kontakta oss</Link></li>
            <li><Link className="hover:text-white" href="/integritetspolicy">Integritetspolicy</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Kontakt</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><a className="hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            {SITE.whatsapp && <li><a className="hover:text-white" href={`https://wa.me/${SITE.whatsapp}`}>WhatsApp</a></li>}
            <li><a className="hover:text-white" href={SITE.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
            <li className="text-white/50">{SITE.responseTime}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-site py-6 text-xs text-white/45">© {new Date().getFullYear()} {SITE.legalName}</p>
      </div>
    </footer>
  );
}
