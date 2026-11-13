// Referenser. Bara riktiga projekt. Inga siffror som inte kan styrkas.
// show:false = visas inte förrän kunden har godkänt att namnet används.
export const PROJECTS = [
  {
    name: "Zavya Scents",
    typeEn: "Shopify · SEO · Store management",
    textEn: "Perfume store on Shopify: design, ongoing store management and SEO.",
    type: "Shopify · SEO · Butiksdrift",
    image: "/img/shopify-dashboard.png",
    url: "https://zavyascents.store/",
    text: "Parfymbutik i Shopify: design, löpande butiksdrift och SEO.",
    show: true,
  },
  {
    name: "Riwaje",
    typeEn: "Shopify",
    textEn: "Shopify store for menswear with mobile-friendly product views and a simplified checkout.",
    type: "Shopify",
    image: "/img/ecommerce-dashboard.png",
    url: "https://riwaje.com/",
    text: "Shopify-butik för herrkläder med mobilanpassad produktvisning och förenklad kassa.",
    show: true,
  },
  {
    name: "Consen",
    typeEn: "WordPress",
    textEn: "Website for a finance and consulting firm built with WordPress and Elementor Pro, with form integrations.",
    type: "WordPress",
    image: "/img/consen-business-growth.png",
    url: "",
    text: "Webbplats för ett finans- och konsultföretag i WordPress och Elementor Pro med formulärintegration.",
    show: true,
  },
  {
    name: "DZZENIC",
    typeEn: "Web development · SEO",
    textEn: "Agency website in custom HTML/CSS with ongoing SEO and performance improvements.",
    type: "Webbutveckling · SEO",
    image: "/img/dezzenic-agency.png",
    url: "https://dzzenic.netlify.app/",
    text: "Byråwebbplats i egen HTML/CSS med löpande SEO och prestandaförbättringar.",
    show: true,
  },
  {
    name: "TheNextDevs",
    typeEn: "SEO",
    textEn: "Ongoing SEO for an agency website.",
    type: "SEO",
    image: "/img/web-dev-workspace.png",
    url: "https://thenextdevs.com/",
    text: "Löpande SEO för en byråwebbplats.",
    show: true,
  },
  {
    name: "Techknight",
    type: "SEO · Sverige",
    image: "/img/techknight-agency.png",
    url: "https://techknight.se/",
    text: "Löpande SEO för ett IT-konsultbolag: sökordsanalys, tjänstesidor, teknisk SEO och uppföljning i Search Console.",
    show: true,
  },
  {
    name: "Nytt Tak i Stockholm",
    type: "SEO · Sverige",
    image: "/img/nytta-roofing.png",
    url: "https://nytttakisthlm.se/",
    text: "Lokal SEO för ett takläggningsföretag: tjänstesidor, lokal synlighet och uppföljning.",
    show: true,
  },
  {
    name: "Bilping",
    type: "SEO · Sverige",
    image: "/img/ecommerce-dashboard.png",
    url: "https://bilping.se/",
    text: "SEO för en svensk tjänst där privatpersoner och företag säljer sin bil via budgivning från handlare.",
    show: true,
  },
  {
    name: "Rut Assistans",
    type: "SEO · Sverige",
    image: "/img/seo-dashboard.png",
    url: "https://rutassistans.se/",
    text: "SEO för en anordnare av personlig assistans enligt LSS: sökordsanalys, guider och tjänstesidor.",
    show: true,
  },
];

// Svenska projekt först – de är mest relevanta för svenska kunder.
export const VISIBLE_PROJECTS = PROJECTS.filter((p) => p.show).sort(
  (a, b) => Number(b.type.includes("Sverige")) - Number(a.type.includes("Sverige"))
);

export function getProjects(lang = "sv") {
  return VISIBLE_PROJECTS.map((p) => (lang === "en" ? { ...p, type: p.typeEn, text: p.textEn } : p));
}
