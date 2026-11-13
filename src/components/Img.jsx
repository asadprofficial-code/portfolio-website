import NextImage from "next/image";

// Lägger till basePath (t.ex. /portfolio-website på GitHub Pages) på lokala bilder.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Img({ src, alt = "", ...rest }) {
  const full = typeof src === "string" && src.startsWith("/") ? `${BASE_PATH}${src}` : src;
  return <NextImage src={full} alt={alt} {...rest} />;
}
