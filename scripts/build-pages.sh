#!/usr/bin/env bash
# Bygger en statisk version för GitHub Pages till ./out
# Användning: bash scripts/build-pages.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
# API-rutten kan inte exporteras statiskt: flytta undan den under bygget och lägg tillbaka efteråt
API="$ROOT/src/app/api"; PARK="$ROOT/.api-parked"
restore() { [ -d "$PARK" ] && mv "$PARK" "$API"; }
trap restore EXIT
mv "$API" "$PARK"
export GH_PAGES=1
export NEXT_PUBLIC_BASE_PATH="${NEXT_PUBLIC_BASE_PATH:-/portfolio-website}"
export NEXT_PUBLIC_SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://asadprofficial-code.github.io/portfolio-website}"
export NEXT_PUBLIC_GSC_VERIFICATION="${NEXT_PUBLIC_GSC_VERIFICATION:-}"
export NEXT_PUBLIC_FORM_ENDPOINT="${NEXT_PUBLIC_FORM_ENDPOINT:-https://formsubmit.co/ajax/asadprofficial@gmail.com}"
(cd "$ROOT" && rm -rf .next out && npx next build)
touch "$ROOT/out/.nojekyll"          # annars ignorerar GitHub Pages mappen _next
# Gamla .html-adresser → nya sidor (meta refresh + canonical)
declare -A OLD=(
  [services.html]=tjanster/ [shopify-development.html]=tjanster/webbdesign/
  [web-development.html]=tjanster/webbdesign/ [seo.html]=tjanster/seo/
  [social-media-marketing.html]=tjanster/ [content-writing.html]=tjanster/seo/
  [ecommerce-optimization.html]=tjanster/webbdesign/ [portfolio.html]=referenser/
  [tjanster/shopify-utveckling/index.html]=tjanster/webbdesign/ [tjanster/webbutveckling/index.html]=tjanster/webbdesign/
  [tjanster/e-handelsoptimering/index.html]=tjanster/webbdesign/ [tjanster/innehall/index.html]=tjanster/seo/
  [tjanster/sociala-medier/index.html]=tjanster/
  [about.html]=om-oss/ [team.html]=om-oss/ [blog.html]=""
)
for f in "${!OLD[@]}"; do
  to="$NEXT_PUBLIC_SITE_URL/${OLD[$f]}"
  mkdir -p "$ROOT/out/$(dirname "$f")"
  printf '<!DOCTYPE html><html lang="sv"><head><meta charset="utf-8"><title>Flyttad</title><link rel="canonical" href="%s"><meta http-equiv="refresh" content="0; url=%s"></head><body><a href="%s">Sidan har flyttat</a></body></html>\n' "$to" "$to" "$to" > "$ROOT/out/$f"
done
echo "Klart: ./out"
