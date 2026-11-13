import { NextResponse } from "next/server";
import { sendMail, getReceiverEmails, escapeHtml, renderEmailLayout, renderDetailRows } from "@/lib/mail";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";

const LIMITS = { name: 100, email: 200, phone: 20, company: 150, website: 200, message: 5000 };
const CONTACT_WAYS = { epost: "E-post", telefon: "Telefon", video: "Videomöte" };
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map(); // enkel spärr per IP (per serverinstans)

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function tooManyRequests(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function clean(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ogiltig förfrågan." }, { status: 400 });
  }

  // Honeypot: fältet är dolt för människor. Är det ifyllt är det en bot – svara "ok" utan att skicka.
  if (clean(body.company_site, 200)) return NextResponse.json({ ok: true });

  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "okänd";
  if (tooManyRequests(ip)) {
    return NextResponse.json({ error: "För många försök. Vänta en stund och försök igen." }, { status: 429 });
  }

  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const phone = clean(body.phone, LIMITS.phone);
  const contactWay = CONTACT_WAYS[clean(body.contactWay, 20)] || "E-post";
  const company = clean(body.company, LIMITS.company);
  const website = clean(body.website, LIMITS.website);
  const message = clean(body.message, LIMITS.message);
  const serviceSlug = clean(body.service, 60);
  const service = SERVICES.find((s) => s.slug === serviceSlug)?.name || "Annat";

  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Namn och en giltig e-postadress krävs." }, { status: 400 });
  }
  if (contactWay === "Telefon" && phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ error: "Skriv ett telefonnummer så att vi kan ringa." }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Skriv några rader om vad du behöver hjälp med." }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: "Godkänn att vi behandlar dina uppgifter för att kunna svara." }, { status: 400 });
  }

  const receivers = getReceiverEmails();
  if (!receivers.length || !process.env.SMTP_HOST) {
    console.error("Contact form: SMTP or receiver e-mail is not configured.");
    return NextResponse.json({ error: "Kunde inte skicka meddelandet. Mejla oss direkt i stället." }, { status: 500 });
  }

  try {
    await sendMail({
      to: receivers,
      replyTo: email,
      subject: `Ny förfrågan från webbplatsen — ${service}`,
      html: renderEmailLayout({
        preheader: `Ny förfrågan från ${name} — ${service}`,
        heading: "Ny förfrågan från kontaktformuläret",
        bodyHtml: `${renderDetailRows([
          ["Namn", escapeHtml(name)],
          ["E-post", `<a href="mailto:${escapeHtml(email)}" style="color:#0f6b7d;text-decoration:none;">${escapeHtml(email)}</a>`],
          ["Telefon", phone ? `<a href="tel:${escapeHtml(phone.replace(/[^+\d]/g, ""))}" style="color:#5b21b6;text-decoration:none;">${escapeHtml(phone)}</a>` : "—"],
          ["Vill bli kontaktad via", escapeHtml(contactWay)],
          ["Företag", escapeHtml(company || "—")],
          ["Webbplats", escapeHtml(website || "—")],
          ["Tjänst", escapeHtml(service)],
        ])}
        <p style="margin:24px 0 8px;font-weight:700;color:#0e1f23;">Meddelande</p>
        <p style="margin:0;white-space:pre-line;">${escapeHtml(message)}</p>`,
      }),
    });

    // Autosvar är en artighet. Misslyckas det har leadet ändå kommit fram – visa inget fel.
    await sendMail({
      to: email,
      subject: `Tack för ditt meddelande — ${SITE.name}`,
      html: renderEmailLayout({
        preheader: "Vi har tagit emot ditt meddelande och återkommer inom en arbetsdag.",
        heading: `Tack för ditt meddelande, ${name}!`,
        bodyHtml: `<p style="margin:0 0 16px;">Vi har tagit emot din förfrågan och återkommer inom en arbetsdag, oftast med ett förslag på ett kort videomöte.</p>
        <p style="margin:0;">Med vänliga hälsningar,<br><strong style="color:#0e1f23;">${escapeHtml(SITE.name)}</strong></p>`,
      }),
    }).catch((err) => console.error("Auto-reply failed (lead was delivered):", err));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact form email:", err);
    return NextResponse.json({ error: "Kunde inte skicka meddelandet. Försök igen senare eller mejla oss." }, { status: 500 });
  }
}
