import Link from "next/link";

export const metadata = { title: "Sidan hittades inte" };

export default function NotFound() {
  return (
    <section className="container-site py-24 text-center">
      <h1 className="h1">Sidan hittades inte</h1>
      <p className="lead mt-4">Adressen finns inte längre eller är felstavad.</p>
      <Link href="/" className="btn-primary mt-8">Till startsidan</Link>
    </section>
  );
}
