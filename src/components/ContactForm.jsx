"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { trackEvent } from "@/lib/tracking";

// Vercel: egen API (/api/contact). GitHub Pages: FormSubmit (NEXT_PUBLIC_FORM_ENDPOINT).
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

const CONTACT_WAYS = [
  { value: "epost", label: "E-post" },
  { value: "telefon", label: "Telefon" },
  { value: "video", label: "Videomöte" },
];

const SERVICE_OPTIONS = [...SERVICES.map((s) => ({ value: s.slug, label: s.name })), { value: "annat", label: "Annat" }];

const label = (list, v, fallback) => list.find((x) => x.value === v)?.label || fallback;

// Svenska och internationella nummer: siffror, mellanslag, +, -, (). Minst 7 siffror.
const validPhone = (p) => /^[+\d\s\-()]{7,20}$/.test(p) && p.replace(/\D/g, "").length >= 7;
const validEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function toFormSubmit(form) {
  const service = label(SERVICE_OPTIONS, form.service, "Annat");
  return {
    Namn: form.name,
    "E-post": form.email,
    Telefon: form.phone || "—",
    "Vill bli kontaktad via": label(CONTACT_WAYS, form.contactWay, "E-post"),
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

const EMPTY = {
  name: "", email: "", phone: "", contactWay: "epost", company: "", website: "",
  service: "", message: "", company_site: "", consent: false,
};

function Pills({ name, options, value, onChange }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <label key={o.value}
          className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${value === o.value ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-brand"}`}>
          <input type="radio" name={name} value={o.value} checked={value === o.value} onChange={() => onChange(o.value)} className="sr-only" />
          {o.label}
        </label>
      ))}
    </div>
  );
}

export default function ContactForm({ defaultService = "" }) {
  const [form, setForm] = useState({ ...EMPTY, service: defaultService });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };
  const set = (key) => (e) => update(key, e.target.type === "checkbox" ? e.target.checked : e.target.value);

  function validate() {
    const er = {};
    if (!form.name.trim()) er.name = "Skriv ditt namn.";
    if (!validEmail(form.email.trim())) er.email = "Skriv en giltig e-postadress.";
    const needsPhone = form.contactWay === "telefon";
    if (needsPhone && !form.phone.trim()) er.phone = "Skriv ett telefonnummer så att vi kan ringa.";
    else if (form.phone.trim() && !validPhone(form.phone.trim())) er.phone = "Kontrollera numret, t.ex. 070-123 45 67.";
    if (!form.message.trim()) er.message = "Skriv några rader om vad ni behöver hjälp med.";
    if (!form.consent) er.consent = "Godkänn att vi använder uppgifterna för att svara.";
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (form.company_site) return; // honeypot
    if (!validate()) {
      setStatus({ state: "error", message: "Kontrollera de markerade fälten." });
      return;
    }
    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch(FORM_ENDPOINT || "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(FORM_ENDPOINT ? toFormSubmit(form) : form),
      });
      const data = await res.json().catch(() => ({}));
      const failed = !res.ok || data.success === "false" || data.success === false;
      if (failed) {
        if (/activat/i.test(data.message || "")) {
          throw new Error("Formuläret väntar på aktivering. Mejla oss direkt så länge – vi svarar inom en arbetsdag.");
        }
        throw new Error(data.error || data.message || "Något gick fel. Försök igen eller mejla oss.");
      }
      // generate_lead skickas BARA när förfrågan har kommit fram. Markera den som nyckelhändelse i GA4.
      trackEvent("generate_lead", { form_name: "kontaktformular", service: form.service || "annat", contact_way: form.contactWay });
      setForm({ ...EMPTY, service: defaultService });
      setErrors({});
      const how = form.contactWay === "telefon" ? "ringer dig" : form.contactWay === "video" ? "föreslår en tid för ett videomöte" : "svarar via e-post";
      setStatus({ state: "sent", message: `Tack! Vi har tagit emot ditt meddelande och ${how} inom en arbetsdag.` });
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  }

  const err = (k) => errors[k] && <p className="mt-1.5 text-sm text-red-600">{errors[k]}</p>;
  const fieldCls = (k) => `field mt-1.5 ${errors[k] ? "!border-red-400" : ""}`;

  if (status.state === "sent") {
    return (
      <div className="card text-center" role="status">
        <p className="text-4xl">✓</p>
        <p className="mt-3 text-xl font-extrabold">Tack för ditt meddelande!</p>
        <p className="mt-2 text-ink-muted">{status.message}</p>
        <button type="button" className="btn-ghost mt-6" onClick={() => setStatus({ state: "idle", message: "" })}>Skicka ett till</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5" noValidate>
      {/* Honeypot – dolt för människor, fylls i av botar */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Lämna tomt<input tabIndex={-1} autoComplete="off" value={form.company_site} onChange={set("company_site")} /></label>
      </div>

      <div>
        <p className="text-sm font-semibold">Vad gäller det?</p>
        <Pills name="Tjänst" options={SERVICE_OPTIONS} value={form.service} onChange={(v) => update("service", v)} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Namn *
          <input className={fieldCls("name")} value={form.name} onChange={set("name")} maxLength={100} autoComplete="name" placeholder="För- och efternamn" aria-invalid={!!errors.name} />
          {err("name")}
        </label>
        <label className="block text-sm font-semibold">E-post *
          <input className={fieldCls("email")} type="email" inputMode="email" value={form.email} onChange={set("email")} maxLength={200} autoComplete="email" placeholder="namn@foretag.se" aria-invalid={!!errors.email} />
          {err("email")}
        </label>
        <label className="block text-sm font-semibold">Telefon {form.contactWay === "telefon" ? "*" : <span className="font-normal text-ink-muted">(valfritt)</span>}
          <input className={fieldCls("phone")} type="tel" inputMode="tel" value={form.phone} onChange={set("phone")} maxLength={20} autoComplete="tel" placeholder="070-123 45 67" aria-invalid={!!errors.phone} />
          {err("phone")}
        </label>
        <label className="block text-sm font-semibold">Företag <span className="font-normal text-ink-muted">(valfritt)</span>
          <input className="field mt-1.5" value={form.company} onChange={set("company")} maxLength={150} autoComplete="organization" />
        </label>
      </div>

      <div>
        <p className="text-sm font-semibold">Hur vill du bli kontaktad?</p>
        <Pills name="Kontaktsätt" options={CONTACT_WAYS} value={form.contactWay} onChange={(v) => update("contactWay", v)} />
      </div>

      <label className="block text-sm font-semibold">Webbplats <span className="font-normal text-ink-muted">(valfritt)</span>
        <input className="field mt-1.5" type="url" inputMode="url" value={form.website} onChange={set("website")} maxLength={200} placeholder="https://" />
      </label>

      <label className="block text-sm font-semibold">Meddelande *
        <textarea className={`${fieldCls("message")} min-h-[130px]`} value={form.message} onChange={set("message")} maxLength={5000} placeholder="Beskriv kort vad ni behöver hjälp med." aria-invalid={!!errors.message} />
        {err("message")}
      </label>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-muted">
          <input type="checkbox" className="mt-1 h-4 w-4 accent-[#5b21b6]" checked={form.consent} onChange={set("consent")} aria-invalid={!!errors.consent} />
          <span>Jag godkänner att mina uppgifter används för att besvara förfrågan, enligt <Link href="/integritetspolicy" className="text-brand underline">integritetspolicyn</Link>.</span>
        </label>
        {err("consent")}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Skickar…" : "Skicka förfrågan"}
      </button>
      <p className="text-xs text-ink-muted">Vi svarar inom en arbetsdag. Fält med * måste fyllas i.</p>

      {status.state === "error" && status.message && (
        <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{status.message}</p>
      )}
    </form>
  );
}
