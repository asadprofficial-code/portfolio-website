// Central plats för företagsuppgifter. Fyll bara i det som är sant och bekräftat.
export const SITE = {
  name: "ASAD",
  legalName: "ASAD",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.se").replace(/\/$/, ""),
  email: "asadprofficial@gmail.com",
  // Lämna tomt tills rätt nummer finns – då visas inget WhatsApp-länk.
  whatsapp: "",
  // T.ex. en Cal.com- eller Calendly-länk för videomöten. Tomt = döljs.
  bookingUrl: "",
  linkedin: "https://www.linkedin.com/in/asad-amin-8544b2397/",
  fiverr: "https://www.fiverr.com/asadasghar25",
  location: "Vi arbetar på distans från Pakistan med kunder i hela Sverige.",
  responseTime: "Vi svarar inom en arbetsdag.",
};

export function absoluteUrl(path = "/") {
  return `${SITE.url}${path === "/" ? "" : path}`;
}
