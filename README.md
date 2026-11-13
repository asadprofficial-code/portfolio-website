# ASAD – svensk webbplats (Next.js, samma upplägg som Techknight)

Stack: Next.js 16 · React 19 · Tailwind 3 · nodemailer (`/api/contact`) · GA4 med Consent Mode.

## Kör lokalt
```bash
npm install
cp .env.example .env.local   # fyll i dina värden
npm run dev                   # http://localhost:3000
```

## Publicera på Vercel
1. vercel.com → Add New Project → välj repot och branchen `nextjs-sv`.
2. Settings → Environment Variables: lägg in allt från `.env.example` (SMTP-lösenordet bara här, aldrig i koden).
3. Deploy → Settings → Domains: koppla domänen och sätt `NEXT_PUBLIC_SITE_URL` till samma adress.
4. Testa formuläret på `/kontakta-oss`: mejlet ska komma till `CONTACT_RECEIVER_EMAILS` och avsändaren ska få ett autosvar.
5. GA4 → Admin → Events: markera `generate_lead` som nyckelhändelse.

## Var saker finns
| Vad | Fil |
|---|---|
| Företagsuppgifter (e-post, WhatsApp, bokningslänk) | `src/lib/site.js` |
| Tjänstesidor (text, meta, FAQ) | `src/data/services.js` |
| Referenser (`show:false` tills kunden godkänt) | `src/data/projects.js` |
| Formulär → e-post | `src/app/api/contact/route.js`, `src/lib/mail.js` |
| Gamla .html-adresser → nya (301/308) | `next.config.mjs` |
| Sitemap / robots | `src/app/sitemap.js`, `src/app/robots.js` |
