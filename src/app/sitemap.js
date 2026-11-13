import { SERVICES } from "@/data/services";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/tjanster", priority: 0.9 },
    ...SERVICES.map((s) => ({ path: `/tjanster/${s.slug}`, priority: 0.8 })),
    { path: "/referenser", priority: 0.6 },
    { path: "/om-oss", priority: 0.5 },
    { path: "/kontakta-oss", priority: 0.7 },
    { path: "/integritetspolicy", priority: 0.2 },
  ];
  return routes.map((r) => ({ url: absoluteUrl(r.path), lastModified: now, changeFrequency: "monthly", priority: r.priority }));
}
