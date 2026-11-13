"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cookie-consent-v1";

// Google Consent Mode v2: analys är avstängd tills besökaren tackar ja.
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let saved = null;
    try { saved = window.localStorage.getItem(KEY); } catch { /* blockerad lagring */ }
    if (saved === "granted" && typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "granted" });
    }
    if (!saved) setVisible(true);
  }, []);

  function choose(value) {
    try { window.localStorage.setItem(KEY, value); } catch { /* ignore */ }
    if (typeof window.gtag === "function") window.gtag("consent", "update", { analytics_storage: value });
    setVisible(false);
  }

  if (!visible) return null;
  return (
    <div role="dialog" aria-label="Cookies" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-line bg-white p-5 shadow-xl">
      <p className="text-sm leading-relaxed text-ink-muted">
        Vi använder Google Analytics för att se hur sajten används. Statistiken aktiveras bara om du godkänner.{" "}
        <Link href="/integritetspolicy" className="text-brand underline">Läs mer</Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn-primary !py-2" onClick={() => choose("granted")}>Godkänn</button>
        <button type="button" className="btn-ghost !py-2" onClick={() => choose("denied")}>Neka</button>
      </div>
    </div>
  );
}
