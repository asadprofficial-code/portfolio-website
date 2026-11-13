import Link from "next/link";
import Img from "@/components/Img";
import { VISIBLE_PROJECTS } from "@/data/projects";

export default function ProjectsDark({ title = "Projekt vi har arbetat med", limit = 3 }) {
  return (
    <section className="bg-[#f8f7fc] py-20">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="h2">{title}</h2>
          <Link href="/referenser" className="text-sm font-bold text-brand">Alla referenser →</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {VISIBLE_PROJECTS.slice(0, limit).map((p) => (
            <a key={p.name} href={p.url || "/referenser"} target={p.url ? "_blank" : undefined} rel="noopener noreferrer"
               className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-3xl bg-ink">
              <Img src={p.image} alt={`${p.name} – ${p.type}`} fill sizes="(min-width:768px) 360px, 100vw" className="object-cover opacity-60 transition-opacity group-hover:opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="relative z-10 p-5">
                <p className="text-xs font-bold text-[#c4b5fd]">{p.type}</p>
                <p className="mt-1 text-lg font-extrabold text-white">{p.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
