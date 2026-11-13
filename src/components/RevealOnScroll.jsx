"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Tonar in rubriker och kort när de scrollas fram. Märker själv upp element – inga ändringar på sidorna behövs.
const TARGETS = "main section h2, main .eyebrow, main .lead, main .card, main article, main a.group, main table, main details";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const els = Array.from(document.querySelectorAll(TARGETS)).filter((el) => !el.closest(".hero-anim"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => {
      if (el.hasAttribute("data-reveal")) return;
      // Kort i samma rad kommer in efter varandra
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      const idx = Math.min(siblings.indexOf(el), 5);
      el.style.setProperty("--reveal-delay", `${Math.max(idx, 0) * 90}ms`);
      el.setAttribute("data-reveal", "");
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-visible");
      else io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
