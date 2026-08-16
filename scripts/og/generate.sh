#!/usr/bin/env bash
#
# Regenera la imagen Open Graph de EazyShot a partir de `eazyshot.tsx`.
#
# Solo la de EazyShot: la Open Graph de la home (`src/app/opengraph-image.png`) y
# el favicon del equipo (`src/app/icon.png`) son artes propias del autor, no se
# generan aquí y este script no debe tocarlas.
#
# Por qué el rodeo de copiar la fuente a `app/` en vez de dejarla ahí: `next/og`
# emite la imagen en una ruta sin extensión (`out/eazyshot/opengraph-image`), y
# GitHub Pages decide el Content-Type por la extensión — la serviría como
# octet-stream y los scrapers de WhatsApp, Slack o X la descartarían. Así que lo
# que se versiona es el PNG ya cocinado.
#
# Uso: pnpm og
set -euo pipefail
cd "$(dirname "$0")/../.."

echo "→ activando la fuente dentro de app/"
cp scripts/og/eazyshot.tsx src/app/eazyshot/opengraph-image.tsx
rm -f src/app/eazyshot/opengraph-image.png

cleanup() {
  rm -f src/app/eazyshot/opengraph-image.tsx
}
trap cleanup EXIT

echo "→ generando"
pnpm build >/dev/null

cp out/eazyshot/opengraph-image src/app/eazyshot/opengraph-image.png
cleanup
trap - EXIT

echo "→ reconstruyendo con el PNG ya estático"
pnpm build >/dev/null

echo "listo:"
ls -l src/app/eazyshot/opengraph-image.png
