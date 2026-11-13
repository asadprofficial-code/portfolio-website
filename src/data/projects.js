// Referenser. Bara riktiga projekt. Inga siffror som inte kan styrkas.
// show:false = visas inte förrän kunden har godkänt att namnet används.
export const PROJECTS = [
  {
    name: "EMIRAFIX",
    type: "Shopify",
    image: "/img/EMIRAFIX.png",
    url: "https://emirafix.com/",
    text: "E-handelsbutik i Shopify med eget tema, mobilanpassning, snabbare laddtid och tydliga produktsidor.",
    show: true,
  },
  {
    name: "INDIQART",
    type: "Shopify",
    image: "/img/indiqart-wallet-store.png",
    url: "https://indiqart.in/",
    text: "Shopify-butik för plånböcker med fokus på produktpresentation, prestanda och ett enkelt köpflöde.",
    show: true,
  },
  {
    name: "Zavya Scents",
    type: "Shopify · SEO · Butiksdrift",
    image: "/img/shopify-dashboard.png",
    url: "https://zavyascents.store/",
    text: "Parfymbutik i Shopify: design, löpande butiksdrift och SEO.",
    show: true,
  },
  {
    name: "Riwaje",
    type: "Shopify",
    image: "/img/ecommerce-dashboard.png",
    url: "https://riwaje.com/",
    text: "Shopify-butik för herrkläder med mobilanpassad produktvisning och förenklad kassa.",
    show: true,
  },
  {
    name: "Consen",
    type: "WordPress",
    image: "/img/consen-business-growth.png",
    url: "",
    text: "Webbplats för ett finans- och konsultföretag i WordPress och Elementor Pro med formulärintegration.",
    show: true,
  },
  {
    name: "DZZENIC",
    type: "Webbutveckling · SEO",
    image: "/img/dezzenic-agency.png",
    url: "https://dzzenic.netlify.app/",
    text: "Byråwebbplats i egen HTML/CSS med löpande SEO och prestandaförbättringar.",
    show: true,
  },
  {
    name: "TheNextDevs",
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
    text: "Löpande SEO för ett IT-konsultbolag i Kista, Stockholm.",
    show: false,
  },
  {
    name: "Nytt Tak i Stockholm",
    type: "SEO · Sverige",
    image: "/img/nytta-roofing.png",
    url: "https://www.nytttakisthlm.se/",
    text: "Lokal SEO för en takläggare i Stockholm.",
    show: false,
  },
];

export const VISIBLE_PROJECTS = PROJECTS.filter((p) => p.show);
