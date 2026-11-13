"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/referenser", label: "Referenser" },
  { href: "/om-oss", label: "Om oss" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          {SITE.name}<span className="text-brand">.</span>
        </Link>

        <nav aria-label="Huvudmeny" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium hover:text-brand ${isActive(item.href) ? "text-brand" : "text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/kontakta-oss" className="btn-primary !px-5 !py-2.5">Kontakta oss</Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav aria-label="Mobilmeny" className="border-t border-line bg-white md:hidden">
          <div className="container-site flex flex-col py-3">
            {[...NAV, { href: "/kontakta-oss", label: "Kontakta oss" }].map((item) => (
              <Link key={item.href} href={item.href} className="py-3 text-base font-medium" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
