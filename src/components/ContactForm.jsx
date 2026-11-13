"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { trackEvent } from "@/lib/tracking";

// Vercel: egen API (/api/contact). GitHub Pages: FormSubmit (NEXT_PUBLIC_FORM_ENDPOINT).
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

function toFormSubmit(form) {
  const service = SERVICES.find((s) => s.slug === form.service)?.name || "Annat";
  return {
    Namn: form.name,
    "E-post": form.email,
    Företag: form.company || "—",
    Webbplats: form.website || "—",
    Tjänst: service,
    Meddelande: form.message,
    _replyto: form.email,
    _subject: `Ny förfrågan från webbplatsen — ${service}`,
    _template: "table",
    _captcha: "false",
    _honey: form.company_site,
    _autoresponse:
      "Tack för ditt meddelande! Vi har tagit emot din förfrågan och återkommer inom en arbetsdag. Med vänliga hälsningar, ASAD",
  };
}

const EMPTY = { name: "", email: "", company: "", website: "", service: "", message: "", company_site: "", consent: false };

export default function ContactForm({ defaultService = "" }) {
  const [form, setForm] = useState({ ...EMPTY, service: defaultService });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });
    try {
      if (form.company_site) throw new Error("Något gick fel. Försök igen.");
      if (!form.consent) throw new Error("Godkänn att vi behandlar dina uppgifter för att kunna svara.");
      const res = await fetch(FORM_ENDPOINT || "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(FORM_ENDPOINT ? toFormSubmit(form) : form),
      });
      const data = await res.json().catch(() => ({}));
      const failed = !res.ok || data.success === "false" || data.success === false;
      if (failed) throw new Error(data.error || "Något gick fel. Försök igen eller mejla oss.");
      // generate_lead skickas BARA när förfrågan har kommit fram (samma som Techknight).
      // Markera endast generate_lead som nyckelhändelse i GA4 → Admin → Events.
      trackEvent("generate_lead", { form_name: "kontaktformular", service: form.service || "annat" });
      setForm({ ...EMPTY, service: defaultService });
      setStatus({ state: "sent", message: "Tack! Vi har tagit emot ditt meddelande och återkommer inom en arbetsdag." });
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4" noValidate={false}>
      {/* Honeypot – dolt för människor, fylls i av botar */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Lämna tomt<input tabIndex={-1} autoComplete="off" value={form.company_site} onChange={set("company_site")} /></label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Namn *
          <input className="field mt-1.5" value={form.name} onChange={set("name")} required maxLength={100} autoComplete="name" placeholder="För- och efternamn" />
        </label>
        <label className="block text-sm font-semibold">E-post *
          <input className="field mt-1.5" type="email" value={form.email} onChange={set("email")} required maxLength={200} autoComplete="email" placeholder="namn@foretag.se" />
        </label>
        <label className="block text-sm font-semibold">Företag
          <input className="field mt-1.5" value={form.company} onChange={set("company")} maxLength={150} autoComplete="organization" />
        </label>
        <label className="block text-sm font-semibold">Webbplats
          <input className="field mt-1.5" value={form.website} onChange={set("website")} maxLength={200} placeholder="https://" />
        </label>
      </div>

      <label className="block text-sm font-semibold">Vad gäller det?
        <select className="field mt-1.5" value={form.service} onChange={set("service")}>
          <option value="">Välj tjänst</option>
          {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
          <option value="annat">Annat</option>
        </select>
      </label>

      <label className="block text-sm font-semibold">Meddelande *
        <textarea className="field mt-1.5 min-h-[140px]" value={form.message} onChange={set("message")} required maxLength={5000} placeholder="Beskriv kort vad ni behöver hjälp med." />
      </label>

      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-[#0f6b7d]" checked={form.consent} onChange={set("consent")} required />
        <span>Jag godkänner att mina uppgifter används för att besvara förfrågan, enligt <Link href="/integritetspolicy" className="text-brand underline">integritetspolicyn</Link>.</span>
      </label>

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Skickar…" : "Skicka förfrågan"}
      </button>

      {status.message && (
        <p role="status" className={`rounded-xl p-3 text-sm ${status.state === "error" ? "bg-red-50 text-red-700" : "bg-brand-light text-brand-dark"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
