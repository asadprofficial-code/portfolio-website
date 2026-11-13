/** @type {import('next').NextConfig} */
// GH_PAGES=1 → statisk export för GitHub Pages (ingen server: /api/contact ersätts av FormSubmit).
// Utan GH_PAGES → vanlig Next.js-server (Vercel) med /api/contact som hos Techknight.
const isPages = process.env.GH_PAGES === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const redirects = async () => [
  // Gamla HTML-adresser → nya svenska sidor
  { source: "/index.html", destination: "/", permanent: true },
  { source: "/services.html", destination: "/tjanster", permanent: true },
  { source: "/shopify-development.html", destination: "/tjanster/webbdesign", permanent: true },
  { source: "/web-development.html", destination: "/tjanster/webbdesign", permanent: true },
  { source: "/seo.html", destination: "/tjanster/seo", permanent: true },
  { source: "/social-media-marketing.html", destination: "/tjanster", permanent: true },
  { source: "/content-writing.html", destination: "/tjanster/seo", permanent: true },
  { source: "/ecommerce-optimization.html", destination: "/tjanster/webbdesign", permanent: true },
  { source: "/portfolio.html", destination: "/referenser", permanent: true },
  { source: "/about.html", destination: "/om-oss", permanent: true },
  { source: "/team.html", destination: "/om-oss", permanent: true },
  { source: "/blog.html", destination: "/", permanent: true },
  { source: "/kontakt", destination: "/kontakta-oss", permanent: true },
  // Tjänstesidor som slagits ihop till SEO och Webbdesign
  { source: "/tjanster/shopify-utveckling", destination: "/tjanster/webbdesign", permanent: true },
  { source: "/tjanster/webbutveckling", destination: "/tjanster/webbdesign", permanent: true },
  { source: "/tjanster/e-handelsoptimering", destination: "/tjanster/webbdesign", permanent: true },
  { source: "/tjanster/innehall", destination: "/tjanster/seo", permanent: true },
  { source: "/tjanster/sociala-medier", destination: "/tjanster", permanent: true },
];

const nextConfig = isPages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
      poweredByHeader: false,
    }
  : { compress: true, poweredByHeader: false, redirects };

export default nextConfig;
