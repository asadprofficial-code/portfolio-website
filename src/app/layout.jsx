import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SITE, absoluteUrl } from "@/lib/site";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SEO och webbdesign för småföretag i hela Sverige | ASAD",
    template: `%s | ${SITE.name}`,
  },
  description:
    "SEO och webbdesign för småföretag i hela Sverige. Hemsidor som syns i Google, tydlig offert efter genomgång och direktkontakt med dem som gör jobbet.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "sv_SE", siteName: SITE.name, images: [absoluteUrl("/img/homepage-hero.png")] },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  url: SITE.url,
  email: SITE.email,
  sameAs: [SITE.linkedin, SITE.fiverr].filter(Boolean),
  areaServed: "SE",
  knowsLanguage: ["sv", "en"],
};

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
