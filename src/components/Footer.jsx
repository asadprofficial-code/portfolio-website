import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-[#f7f9fa]">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-extrabold">{SITE.name}<span className="text-brand">.</span></p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Shopify, webbutveckling och SEO för svenska företag. {SITE.location}
          </p>
        </div>
        <div>
          <p className="text-sm font-bold">Tjänster</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link className="hover:text-brand" href={`/tjanster/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold">Företaget</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            <li><Link className="hover:text-brand" href="/referenser">Referenser</Link></li>
            <li><Link className="hover:text-brand" href="/om-oss">Om oss</Link></li>
            <li><Link className="hover:text-brand" href="/kontakta-oss">Kontakta oss</Link></li>
            <li><Link className="hover:text-brand" href="/integritetspolicy">Integritetspolicy</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            <li><a className="hover:text-brand" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            {SITE.whatsapp && <li><a className="hover:text-brand" href={`https://wa.me/${SITE.whatsapp}`}>WhatsApp</a></li>}
            <li><a className="hover:text-brand" href={SITE.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-site py-5 text-xs text-ink-muted">© {new Date().getFullYear()} {SITE.legalName}</p>
      </div>
    </footer>
  );
}
