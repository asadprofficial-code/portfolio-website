import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CtaBand({ title = "Berätta vad ni behöver hjälp med", text }) {
  return (
    <section className="container-site mt-20">
      <div className="rounded-3xl bg-brand px-6 py-12 text-center text-white sm:px-12">
        <h2 className="h2">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/85">
          {text || `Skicka en kort beskrivning så återkommer vi med ett förslag och en offert. ${SITE.responseTime}`}
        </p>
        <Link href="/kontakta-oss" className="btn mt-7 bg-white text-brand hover:bg-brand-light">Kontakta oss</Link>
      </div>
    </section>
  );
}
