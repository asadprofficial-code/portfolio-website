import Script from "next/script";
// Typsnittet ligger på vår egen server (snabbare och inga anrop till Google Fonts – bättre för GDPR)
import "@fontsource-variable/inter";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SITE, absoluteUrl } from "@/lib/site";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const viewport = { themeColor: "#110d1f" };

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SEO och webbdesign för småföretag i hela Sverige | ASAD",
    template: `%s | ${SITE.name}`,
  },
  description:
    "SEO och webbdesign för småföretag i hela Sverige. Hemsidor som syns i Google, tydlig offert efter genomgång och direktkontakt med dem som gör jobbet.",
  applicationName: SITE.name,
  openGraph: { type: "website", locale: "sv_SE", siteName: SITE.name, images: [absoluteUrl("/img/homepage-hero.webp")] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: false },
  // Google Search Console: sätt NEXT_PUBLIC_GSC_VERIFICATION till koden från "HTML-tagg"-metoden
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } } : {}),
};

const organizationSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    email: SITE.email,
    description: "SEO och webbdesign för småföretag i hela Sverige.",
    sameAs: [SITE.linkedin, SITE.fiverr].filter(Boolean),
    areaServed: { "@type": "Country", name: "Sverige" },
    knowsLanguage: ["sv", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: absoluteUrl("/"),
    name: SITE.name,
    inLanguage: "sv-SE",
    publisher: { "@id": `${SITE.url}/#organization` },
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body suppressHydrationWarning>
        {GA_ID && (
          <>
            <Script id="ga-consent" strategy="beforeInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});`}
            </Script>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <Script id="google-analytics">{`gtag('js', new Date()); gtag('config', '${GA_ID}');`}</Script>
          </>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealOnScroll />
        {GA_ID && <CookieConsent />}
      </body>
    </html>
  );
}
