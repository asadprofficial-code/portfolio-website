/** @type {import('next').NextConfig} */
// GH_PAGES=1 → statisk export för GitHub Pages (ingen server: /api/contact ersätts av FormSubmit).
// Utan GH_PAGES → vanlig Next.js-server (Vercel) med /api/contact som hos Techknight.
const isPages = process.env.GH_PAGES === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const redirects = async () => [
  // Gamla HTML-adresser → nya svenska sidor
  { source: "/index.html", destination: "/", permanent: true },
  { source: "/services.html", destination: "/tjanster", permanent: true },
  { source: "/shopify-development.html", destination: "/tjanster/shopify-utveckling", permanent: true },
  { source: "/web-development.html", destination: "/tjanster/webbutveckling", permanent: true },
  { source: "/seo.html", destination: "/tjanster/seo", permanent: true },
  { source: "/social-media-marketing.html", destination: "/tjanster/sociala-medier", permanent: true },
  { source: "/content-writing.html", destination: "/tjanster/innehall", permanent: true },
  { source: "/ecommerce-optimization.html", destination: "/tjanster/e-handelsoptimering", permanent: true },
  { source: "/portfolio.html", destination: "/referenser", permanent: true },
  { source: "/about.html", destination: "/om-oss", permanent: true },
  { source: "/team.html", destination: "/om-oss", permanent: true },
  { source: "/blog.html", destination: "/", permanent: true },
  { source: "/kontakt", destination: "/kontakta-oss", permanent: true },
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
