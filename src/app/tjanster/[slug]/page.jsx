import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/data/services";
import { SITE, absoluteUrl } from "@/lib/site";
import HeroImage from "@/components/sections/HeroImage";
import ToolsStrip from "@/components/sections/ToolsStrip";
import TechStackGrid from "@/components/sections/TechStackGrid";
import ImageText from "@/components/sections/ImageText";
import Steps from "@/components/sections/Steps";
import CenteredText from "@/components/sections/CenteredText";
import ProjectsDark from "@/components/sections/ProjectsDark";
import RelatedServices from "@/components/sections/RelatedServices";
import SupportBand from "@/components/sections/SupportBand";
import RichSection from "@/components/RichSection";
import FaqList from "@/components/FaqList";
import ContactForm from "@/components/ContactForm";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/tjanster/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, images: [absoluteUrl(s.heroImage || s.image)] },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.h1,
      serviceType: s.name,
      description: s.metaDescription,
      url: absoluteUrl(`/tjanster/${s.slug}`),
      areaServed: { "@type": "Country", name: "Sverige" },
      provider: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Tjänster", item: absoluteUrl("/tjanster") },
        { "@type": "ListItem", position: 3, name: s.name, item: absoluteUrl(`/tjanster/${s.slug}`) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HeroImage
        image={s.heroImage}
        crumbs={[{ href: "/", label: "Hem" }, { href: "/tjanster", label: "Tjänster" }, { label: s.name }]}
        title={s.h1}
        tagline={s.tagline}
        description={s.intro}
        primary={{ href: "/kontakta-oss", label: "Kontakta oss" }}
        secondary={{ href: "#sa-fungerar-det", label: "Så fungerar det" }}
      />

      {/* Huvudtexten – samma placering som Techknights tjänstesidor */}
      <section className="bg-white py-16">
        <div className="container-site mx-auto max-w-3xl">
          <ul className="space-y-3 rounded-3xl bg-[#f8f7fc] p-6 sm:p-8">
            {s.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-ink"><span className="font-bold text-brand">✓</span>{b}</li>
            ))}
          </ul>
          {s.sections.map((sec) => <RichSection key={sec.h2} sec={sec} />)}
        </div>
      </section>

      <ToolsStrip />
      <TechStackGrid title={s.techTitle} intro={s.techIntro} items={s.tech} />
      <ImageText image={s.whyImage} title={s.whyTitle} bullets={s.why} muted />
      <Steps id="sa-fungerar-det" title={s.stepsTitle} steps={s.steps} />
      {s.alts.map((a, i) => (
        <ImageText key={a.title} image={a.image} title={a.title} body={a.body} reverse={a.reverse}
          cta={{ href: "/kontakta-oss", label: "Få ett förslag" }} muted={i % 2 === 1} />
      ))}
      <CenteredText title={s.centeredTitle} body={s.centeredBody} />
      <ProjectsDark title={`Projekt där vi har arbetat med ${s.name === "SEO" ? "SEO" : "webbdesign"}`} />
      <RelatedServices current={s.slug} />

      <section className="bg-white pb-20">
        <div className="container-site mx-auto max-w-3xl"><FaqList items={s.faq} /></div>
      </section>

      <section id="kontakt" className="scroll-mt-20 bg-[#f8f7fc] py-20">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="h2">Berätta om ert projekt</h2>
          <p className="lead mt-3">Skicka några rader så återkommer vi inom en arbetsdag med ett förslag.</p>
          <div className="mt-6"><ContactForm defaultService={s.slug} /></div>
        </div>
      </section>

      <SupportBand title={`Hjälp med ${s.name === "SEO" ? "SEO" : "er hemsida"}?`} />
    </>
  );
}
