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
export NEXT_PUBLIC_FORM_ENDPOINT="${NEXT_PUBLIC_FORM_ENDPOINT:-https://formsubmit.co/ajax/f04c3d7e32d88098c28c863849241b4}"
(cd "$ROOT" && rm -rf .next out && npx next build)
touch "$ROOT/out/.nojekyll"          # annars ignorerar GitHub Pages mappen _next
# Gamla .html-adresser → nya sidor (meta refresh + canonical)
declare -A OLD=(
  [services.html]=tjanster/ [shopify-development.html]=tjanster/shopify-utveckling/
  [web-development.html]=tjanster/webbutveckling/ [seo.html]=tjanster/seo/
  [social-media-marketing.html]=tjanster/sociala-medier/ [content-writing.html]=tjanster/innehall/
  [ecommerce-optimization.html]=tjanster/e-handelsoptimering/ [portfolio.html]=referenser/
  [about.html]=om-oss/ [team.html]=om-oss/ [blog.html]=""
)
for f in "${!OLD[@]}"; do
  to="$NEXT_PUBLIC_SITE_URL/${OLD[$f]}"
  printf '<!DOCTYPE html><html lang="sv"><head><meta charset="utf-8"><title>Flyttad</title><link rel="canonical" href="%s"><meta http-equiv="refresh" content="0; url=%s"></head><body><a href="%s">Sidan har flyttat</a></body></html>\n' "$to" "$to" "$to" > "$ROOT/out/$f"
done
echo "Klart: ./out"
