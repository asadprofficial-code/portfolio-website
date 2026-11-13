/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  async redirects() {
    // Gamla HTML-adresser → nya svenska sidor (behåller ev. länkar och indexering)
    return [
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
  },
};

export default nextConfig;
