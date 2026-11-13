import { getServices } from "@/data/services";

// Sidor som finns på båda språken. Nyckeln används för att hitta motsvarande sida.
export const ROUTES = {
  home: { sv: "/", en: "/en" },
  services: { sv: "/tjanster", en: "/en/services" },
  references: { sv: "/referenser", en: "/en/references" },
  about: { sv: "/om-oss", en: "/en/about" },
  contact: { sv: "/kontakta-oss", en: "/en/contact" },
  privacy: { sv: "/integritetspolicy", en: "/en/privacy-policy" },
};

export function route(key, lang) {
  return ROUTES[key][lang];
}

export function serviceHref(slug, lang) {
  return `${ROUTES.services[lang]}/${slug}`;
}

/** Motsvarande adress på det andra språket (för språkväljare och hreflang). */
export function alternatePath(pathname, fromLang) {
  const to = fromLang === "sv" ? "en" : "sv";
  const clean = pathname.replace(/\/$/, "") || "/";
  for (const r of Object.values(ROUTES)) {
    if (r[fromLang] === clean) return r[to];
  }
  const base = ROUTES.services[fromLang];
  if (clean.startsWith(`${base}/`)) {
    const slug = clean.slice(base.length + 1);
    const s = getServices(fromLang).find((x) => x.slug === slug);
    if (s) return serviceHref(s.pairSlug, to);
  }
  return ROUTES.home[to];
}

/** Metadata-alternates med hreflang för en sida. */
export function languageAlternates(svPath, enPath, lang) {
  return {
    canonical: lang === "en" ? enPath : svPath,
    languages: { "sv-SE": svPath, en: enPath, "x-default": svPath },
  };
}

export const UI = {
  sv: {
    nav: { services: "Tjänster", references: "Referenser", about: "Om oss", contact: "Kontakta oss" },
    menuOpen: "Öppna meny",
    menuClose: "Stäng meny",
    switchLabel: "In English",
    switchShort: "EN",
    location: "Vi arbetar på distans från Pakistan med kunder i hela Sverige.",
    responseTime: "Vi svarar inom en arbetsdag.",
    footerAbout: "Shopify, webbutveckling och SEO för svenska företag.",
    footerServices: "Tjänster",
    footerCompany: "Företaget",
    footerContact: "Kontakt",
    privacy: "Integritetspolicy",
    readMore: "Läs mer →",
    visitSite: "Besök sajten →",
    allReferences: "Alla referenser →",
    faqTitle: "Vanliga frågor",
    ctaTitle: "Berätta vad ni behöver hjälp med",
    ctaText: "Skicka en kort beskrivning så återkommer vi med ett förslag och ett fast pris.",
    ctaButton: "Kontakta oss",
    breadcrumbHome: "Start",
    included: "Det här ingår",
    moreServices: "Fler tjänster",
    getProposal: "Få ett förslag",
    projectTitle: "Berätta om ert projekt",
    projectText: "Skicka några rader så återkommer vi inom en arbetsdag med ett förslag.",
    cookieText: "Vi använder Google Analytics för att se hur sajten används. Statistiken aktiveras bara om du godkänner.",
    cookieMore: "Läs mer",
    cookieAccept: "Godkänn",
    cookieDeny: "Neka",
    form: {
      name: "Namn", namePh: "För- och efternamn", email: "E-post", emailPh: "namn@foretag.se",
      company: "Företag", website: "Webbplats", service: "Vad gäller det?", chooseService: "Välj tjänst",
      other: "Annat", message: "Meddelande", messagePh: "Beskriv kort vad ni behöver hjälp med.",
      consentA: "Jag godkänner att mina uppgifter används för att besvara förfrågan, enligt ",
      consentLink: "integritetspolicyn", submit: "Skicka förfrågan", sending: "Skickar…",
      ok: "Tack! Vi har tagit emot ditt meddelande och återkommer inom en arbetsdag.",
      err: "Något gick fel. Försök igen eller mejla oss.",
      errConsent: "Godkänn att vi behandlar dina uppgifter för att kunna svara.",
      errActivation: "Formuläret väntar på aktivering. Mejla oss direkt så länge – vi svarar inom en arbetsdag.",
      subject: "Ny förfrågan från webbplatsen",
      autoresponse: "Tack för ditt meddelande! Vi har tagit emot din förfrågan och återkommer inom en arbetsdag. Med vänliga hälsningar, ASAD",
      honeypot: "Lämna tomt",
    },
  },
  en: {
    nav: { services: "Services", references: "References", about: "About us", contact: "Contact us" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchLabel: "På svenska",
    switchShort: "SV",
    location: "We work remotely from Pakistan with clients across Sweden and internationally.",
    responseTime: "We reply within one working day.",
    footerAbout: "Shopify, web development and SEO for businesses.",
    footerServices: "Services",
    footerCompany: "Company",
    footerContact: "Contact",
    privacy: "Privacy policy",
    readMore: "Read more →",
    visitSite: "Visit the site →",
    allReferences: "All references →",
    faqTitle: "Frequently asked questions",
    ctaTitle: "Tell us what you need help with",
    ctaText: "Send a short description and we will come back with a proposal and a fixed price.",
    ctaButton: "Contact us",
    breadcrumbHome: "Home",
    included: "What is included",
    moreServices: "More services",
    getProposal: "Get a proposal",
    projectTitle: "Tell us about your project",
    projectText: "Send a few lines and we will reply within one working day with a proposal.",
    cookieText: "We use Google Analytics to see how the site is used. Statistics are only enabled if you accept.",
    cookieMore: "Read more",
    cookieAccept: "Accept",
    cookieDeny: "Decline",
    form: {
      name: "Name", namePh: "First and last name", email: "Email", emailPh: "name@company.com",
      company: "Company", website: "Website", service: "What is it about?", chooseService: "Choose a service",
      other: "Other", message: "Message", messagePh: "Briefly describe what you need help with.",
      consentA: "I agree that my details are used to respond to my enquiry, according to the ",
      consentLink: "privacy policy", submit: "Send enquiry", sending: "Sending…",
      ok: "Thank you! We have received your message and will reply within one working day.",
      err: "Something went wrong. Please try again or email us.",
      errConsent: "Please accept that we process your details so we can reply.",
      errActivation: "The form is awaiting activation. Please email us directly in the meantime – we reply within one working day.",
      subject: "New enquiry from the website (EN)",
      autoresponse: "Thank you for your message! We have received your enquiry and will reply within one working day. Best regards, ASAD",
      honeypot: "Leave empty",
    },
  },
};
