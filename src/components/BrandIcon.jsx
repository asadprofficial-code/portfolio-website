import {
  siWordpress, siShopify, siNextdotjs, siReact, siWoocommerce, siElementor, siTailwindcss, siHtml5,
  siGooglesearchconsole, siGoogleanalytics, siSemrush, siPagespeedinsights, siFigma, siLighthouse,
} from "simple-icons";

// Varumärkesikoner (simple-icons, CC0) för verktyg vi använder. Saknas ikon visas initialer.
const ICONS = {
  "WordPress": siWordpress,
  "Shopify": siShopify,
  "Next.js": siNextdotjs,
  "React": siReact,
  "WooCommerce": siWoocommerce,
  "Elementor": siElementor,
  "Tailwind": siTailwindcss,
  "HTML/CSS": siHtml5,
  "Search Console": siGooglesearchconsole,
  "Google Search Console": siGooglesearchconsole,
  "Analytics 4": siGoogleanalytics,
  "Google Analytics 4": siGoogleanalytics,
  "Semrush": siSemrush,
  "PageSpeed": siPagespeedinsights,
  "PageSpeed Insights": siPagespeedinsights,
  "Figma": siFigma,
  "Lighthouse": siLighthouse,
};

export const hasIcon = (name) => Boolean(ICONS[name]);

export default function BrandIcon({ name, size = 28, mono = false }) {
  const icon = ICONS[name];
  if (!icon) {
    return (
      <span className="flex items-center justify-center rounded-lg bg-brand-light font-extrabold text-brand" style={{ width: size, height: size, fontSize: size * 0.42 }}>
        {name.slice(0, 2)}
      </span>
    );
  }
  return (
    <svg role="img" aria-label={name} viewBox="0 0 24 24" width={size} height={size} fill={mono ? "currentColor" : `#${icon.hex}`}>
      <path d={icon.path} />
    </svg>
  );
}
