#!/usr/bin/env bash
#
# Regenera las imágenes Open Graph a partir de las fuentes de este directorio.
#
# Por qué este rodeo: `next/og` genera la imagen en una ruta sin extensión
# (`out/opengraph-image`), y GitHub Pages decide el Content-Type por la
# extensión — la serviría como octet-stream y los scrapers de WhatsApp, Slack o
# X la descartarían. Así que las fuentes viven fuera de `app/`, se activan solo
# durante la generación, y lo que se versiona es el PNG ya cocinado.
#
# Uso: pnpm og
set -euo pipefail
cd "$(dirname "$0")/../.."

echo "→ activando las fuentes dentro de app/"
cp scripts/og/home.tsx src/app/opengraph-image.tsx
cp scripts/og/eazyshot.tsx src/app/eazyshot/opengraph-image.tsx
cp scripts/og/icon.tsx src/app/icon.tsx
rm -f src/app/opengraph-image.png src/app/eazyshot/opengraph-image.png src/app/icon.png

cleanup() {
  rm -f src/app/opengraph-image.tsx src/app/eazyshot/opengraph-image.tsx src/app/icon.tsx
}
trap cleanup EXIT

echo "→ generando"
pnpm build >/dev/null

cp out/opengraph-image src/app/opengraph-image.png
cp out/eazyshot/opengraph-image src/app/eazyshot/opengraph-image.png
cp out/icon src/app/icon.png
cleanup
trap - EXIT

echo "→ reconstruyendo con los PNG ya estáticos"
pnpm build >/dev/null

echo "listo:"
ls -l src/app/opengraph-image.png src/app/eazyshot/opengraph-image.png src/app/icon.png
