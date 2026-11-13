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

// GitHub Pages-bygget använder trailingSlash – adresserna i sitemap/canonical ska matcha.
const TRAILING = process.env.GH_PAGES === "1";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function absoluteUrl(path = "/") {
  if (/\.[a-z0-9]+$/i.test(path)) return `${SITE.url}${path}`; // filer, t.ex. bilder
  if (path === "/") return TRAILING ? `${SITE.url}/` : SITE.url;
  return `${SITE.url}${path}${TRAILING && !path.endsWith("/") ? "/" : ""}`;
}
