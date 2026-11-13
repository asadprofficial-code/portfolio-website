import { SITE } from "@/lib/site";

export const metadata = {
  title: "Integritetspolicy",
  description: "Hur vi behandlar personuppgifter som du lämnar via kontaktformuläret och hur vi använder cookies.",
  alternates: { canonical: "/integritetspolicy" },
};

export default function IntegritetspolicyPage() {
  return (
    <section className="container-site max-w-3xl pt-14 sm:pt-20">
      <h1 className="h1">Integritetspolicy</h1>
      <div className="prose-site mt-8">
        <h2 className="h2 mb-3 mt-8 !text-xl">Personuppgiftsansvarig</h2>
        <p>{SITE.legalName} ansvarar för behandlingen av de personuppgifter som beskrivs här. Kontakt: <a className="text-brand" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>

        <h2 className="h2 mb-3 mt-8 !text-xl">Vilka uppgifter vi samlar in</h2>
        <p>När du använder kontaktformuläret sparar vi namn, e-postadress, företag, webbplats och det du skriver i meddelandet. Uppgifterna skickas till vår e-post.</p>

        <h2 className="h2 mb-3 mt-8 !text-xl">Varför och med vilken rätt</h2>
        <p>Vi använder uppgifterna för att besvara din förfrågan och, om du vill, för att lämna ett förslag. Den rättsliga grunden är ditt samtycke och vårt berättigade intresse av att svara på förfrågningar.</p>

        <h2 className="h2 mb-3 mt-8 !text-xl">Hur länge vi sparar uppgifterna</h2>
        <p>Förfrågningar som inte leder till ett uppdrag raderas senast 12 månader efter sista kontakt.</p>

        <h2 className="h2 mb-3 mt-8 !text-xl">Mottagare</h2>
        <p>Uppgifterna lagras hos vår e-postleverantör och vår webbhotelltjänst. Vi säljer aldrig personuppgifter.</p>

        <h2 className="h2 mb-3 mt-8 !text-xl">Cookies och statistik</h2>
        <p>Vi använder Google Analytics för att se hur sajten används. Statistikcookies sätts bara om du godkänner dem i cookierutan. Du kan ändra ditt val genom att rensa webbläsarens lagrade data för sajten.</p>

        <h2 className="h2 mb-3 mt-8 !text-xl">Dina rättigheter</h2>
        <p>Du har rätt att begära utdrag, rättelse eller radering av dina uppgifter och att invända mot behandlingen. Kontakta oss via e-post. Du kan också lämna klagomål till Integritetsskyddsmyndigheten (IMY).</p>
      </div>
    </section>
  );
}
