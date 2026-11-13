import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Kontakta oss – få ett förslag och fast pris",
  description: "Berätta om ert projekt så återkommer vi inom en arbetsdag med ett förslag. Möten sker via video.",
  alternates: { canonical: "/kontakta-oss" },
};

export default function KontaktaOssPage() {
  return (
    <section className="container-site grid gap-12 pt-14 sm:pt-20 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <p className="eyebrow">Kontakt</p>
        <h1 className="h1 mt-4">Kontakta oss</h1>
        <p className="lead mt-5">Beskriv kort vad ni behöver hjälp med. {SITE.responseTime}</p>
        <div className="mt-8 space-y-4 text-[15px]">
          <p><span className="font-semibold">E-post:</span>{" "}<a className="text-brand hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          {SITE.whatsapp && <p><span className="font-semibold">WhatsApp:</span>{" "}<a className="text-brand hover:underline" href={`https://wa.me/${SITE.whatsapp}`}>Skriv till oss</a></p>}
          {SITE.bookingUrl && <p><a className="btn-ghost" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">Boka ett videomöte</a></p>}
          <p className="text-ink-muted">{SITE.location} Vi svarar på svenska och engelska.</p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
