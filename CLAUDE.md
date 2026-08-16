# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

EzWeb es el sitio público de **Anomalit Team**: un escaparate de los proyectos
del equipo. Hoy contiene un único producto, **EazyShot**, la app de capturas de
pantalla para macOS.

El nombre cambió en agosto de 2026 (antes *Fairy Dream Studio*, y brevemente
*Anomalit Future* y *Anomaly Team*): nombre, dominio y correo se movieron a la
vez, y ahora los tres dicen `anomalitteam`. Si te encuentras `fairydreamstudio`,
`anomalitfuture` o `anomalyteam` en algún sitio —el remoto de git de una copia
local, un marcador, la ficha del App Store— es un resto de esa migración y hay
que corregirlo, no conservarlo.

- Repo de despliegue: `anomalitteam/anomalitteam.github.io` — organización y
  repo se llaman igual, y **eso no es cosmético**: es lo único que hace que
  GitHub lo sirva en la raíz del dominio, y por eso `next.config.ts` no necesita
  `basePath` ni `assetPrefix`. Si dejan de coincidir, Pages lo publica como
  project page bajo `/<repo>/` mientras el HTML sigue pidiendo sus assets en
  `/_next/…`: la página carga sin estilos ni JavaScript. Pasó en agosto de 2026
  con el repo llamado `anomalyteam.github.io` dentro de la organización
  `anomalitteam`
- Sitio estático puro (`output: "export"`): sin API, sin base de datos, sin
  lógica de servidor
- Bilingüe ES/EN con un contexto de React propio, y tema claro/oscuro

```
/                      escaparate del estudio (hero + rejilla de proyectos)
/eazyshot              landing del producto, con navegación por anclas
/eazyshot/privacy      política de privacidad
/eazyshot/support      soporte
/privacy               puente → /eazyshot/privacy
/support               puente → /eazyshot/support
```

### Cómo se añade un producto

1. Una entrada en `PRODUCTS` (`lib/products.ts`) con su slug, icono, plataforma
   y `appStoreUrl` (vacía si aún no ha salido), y añadirla a `PRODUCT_LIST`
2. Sus textos de escaparate en `studio.products[id]`, en las dos ramas de
   `translations.ts` — el `Record<ProductId, …>` del tipo obliga a ello
3. Una carpeta `src/app/<slug>/` con su `layout.tsx` (navegación propia) y su
   `page.tsx`

Con eso aparece solo en la rejilla de la home y en la navegación del estudio.
**Lo que aún no está resuelto** es la landing en sí: las secciones de
`components/sections/` (`Hero`, `Features`, `Comparison`, `Pricing`, `Faq`)
leen `t.hero`, `t.features`… y están escritas para EazyShot. Parametrizarlas por
producto se dejó deliberadamente para cuando exista el segundo y se sepa qué
varía de verdad; hasta entonces, un producto nuevo necesita sus propias
secciones o una generalización acordada con el autor.

### Las páginas-puente no son decorativas

`/privacy` y `/support` están registradas en App Store Connect como las URLs de
EazyShot. Cuando el contenido se mudó a `/eazyshot/*`, esas rutas se quedaron
como puentes (`components/layout/RedirectBridge.tsx`): un `meta refresh` más el
`canonical` al destino y `noindex`. GitHub Pages sirve archivos estáticos y no
admite redirecciones de servidor — esto es el equivalente. **No borrarlas**
mientras la ficha del App Store apunte ahí.

### El código fuente de la app vive en el repo hermano

`../easyZshot` (target `EZShot`, módulo Swift `EazyShot`) tiene su propio
`CLAUDE.md`. **Cualquier afirmación de la web sobre lo que hace la app debe
contrastarse contra ese repo**, no contra el spec de diseño ni contra lo que ya
hay escrito aquí. Ver "Desajustes con la app real" más abajo: los que hay hoy
salieron justo de no hacerlo.

Datos de la app relevantes para el contenido de la web:

- macOS **15.2+**, sandboxed, bundle `TheWizardKing.EZShot`
- Cinco modos: región, EZ región, pantalla completa, EZ pantalla completa y
  color picker
- Publicada en el **Mac App Store** (Apple ID `6795760394`) y **la descarga es
  gratuita**: se prueba 3 días y la compra única se hace después, dentro de la
  app, vía StoreKit 2. Por eso "Descargar prueba gratis" es el copy correcto —
  no hay que pagar para instalarla
- Bilingüe ES/EN también en la app, vía `L10n.loc("texto es", "text en")`

## Comandos

```bash
pnpm dev        # servidor de desarrollo
pnpm build      # export estático → out/
pnpm lint       # eslint
pnpm typecheck  # tsc --noEmit
pnpm og         # regenera las imágenes Open Graph y el favicon (ver más abajo)
```

`pnpm` es obligatorio: el workflow instala con `--frozen-lockfile` contra
`pnpm-lock.yaml`, y `pnpm-workspace.yaml` declara los `allowBuilds` (`sharp`,
`unrs-resolver`) que npm/yarn ignorarían.

**Typecheck y lint están a cero errores y merece la pena mantenerlo así**: el
workflow de despliegue no los ejecuta, así que un error de tipos no rompe el
deploy — sale a producción.

### Despliegue

`.github/workflows/deploy.yml` corre en cada push a `main`: pnpm 10 + Node 22,
`pnpm build`, y sube `out/` a GitHub Pages. No hay entorno de staging ni preview
por PR: lo que entra en `main` es lo que está publicado.

## Arquitectura

```
src/
├── app/
│   ├── layout.tsx        solo providers (tema + idioma) y metadata base
│   ├── (studio)/         route group: layout con la navegación del estudio
│   │   ├── layout.tsx
│   │   └── page.tsx      → "/"  escaparate
│   ├── eazyshot/
│   │   ├── layout.tsx    navegación del producto + CTA de descarga
│   │   ├── page.tsx      landing
│   │   ├── privacy/      page.tsx (server, metadata) + PrivacyContent.tsx (cliente)
│   │   └── support/      idem
│   ├── privacy/          puente
│   ├── support/          puente
│   └── globals.css
├── components/
│   ├── layout/     Navbar, Footer, RedirectBridge
│   ├── sections/   StudioHero, ProjectGrid · Hero, Features, HowItWorks,
│   │               Comparison, Pricing, Faq
│   └── ui/         Button, DownloadButton, ProjectCard, BrandMark, Badge,
│                   Accordion, SectionHeading, ScrollReveal, ThemeToggle,
│                   LanguageToggle
└── lib/
    ├── constants.ts      SITE — el estudio (nombre, url, trialDays)
    ├── products.ts       PRODUCTS / PRODUCT_LIST — un registro por producto
    └── i18n/             context.tsx · translations.ts · types.ts
```

### Navbar y Footer no deciden sus enlaces

Ambos reciben `links` por props, y cada layout arma los suyos: el del estudio
lista los productos del registro, el de EazyShot las anclas de su landing
(`/eazyshot#features`, no `#features` — desde `/eazyshot/privacy` un ancla suelta
no llevaría a ninguna parte). `Navbar` solo muestra el CTA de descarga si recibe
un `product`.

Las páginas legales son server components que exportan `metadata` y delegan el
contenido en un `*Content.tsx` cliente. Es el único modo de tener título propio
en una página que necesita `useT()`.

### Todo el contenido vive en `lib/i18n/translations.ts`

Es con diferencia el archivo más grande del proyecto. Los componentes no
contienen texto: cada uno llama a `useT()` y lee su rama (`t.hero`, `t.pricing`,
`t.studio`…). `types.ts` describe la forma completa, así que **añadir una cadena
obliga a tocar tres sitios**: el tipo, la rama `es` y la rama `en`. Si falta una,
`pnpm typecheck` lo caza.

El reparto con `products.ts` es deliberado: allí van los datos estructurales
(slug, icono, URL del App Store), aquí solo lo que se traduce.

Un detalle que no es evidente: los iconos y las imágenes también salen de
`translations.ts` como *strings* (`icon: "MousePointer2"`, `image:
"/images/eazyshot/funcion-1.png"`), y `Features.tsx` los resuelve con un
`iconMap`. Un icono mal escrito no falla en compilación — la tarjeta se queda
sin icono.

### Los CTA pasan todos por `DownloadButton`

Los botones de conversión (dos en `Navbar`, uno en `Hero`, uno en `Pricing`)
usan `ui/DownloadButton.tsx`, no `Button` directamente, y reciben el producto por
props. El destino de cada uno vive en un solo sitio: `PRODUCTS[id].appStoreUrl`
(`lib/products.ts`). Si esa URL está vacía, el botón se pinta deshabilitado con
`t.cta.comingSoon`; en cuanto se le pega la ficha, todos enlazan sin tocar ningún
componente. **No enlaces un CTA a mano desde una sección.**

`Button` decide la etiqueta según el `href`: `//` o `mailto:` salen como `<a>`
con `target="_blank"` y `rel="noopener noreferrer"`; el resto va por `<Link>`.
Sin `href`, o con `disabled`, sale como `<button>`.

### Las capturas se publican en JPEG, y el PNG original no se borra

`public/images/eazyshot/` contiene solo JPEG redimensionados; los PNG que salen
del Mac viven en **`assets-src/eazyshot/`, fuera de `public/`**, así que no se
publican pero tampoco se pierden.

El motivo es de peso: `funcion-3.png` pesaba 4,8 MB y ya se estaba sirviendo tal
cual en *Cómo funciona*. Con `output: "export"` no hay optimizador de imágenes
—de ahí el `unoptimized` obligatorio en cada `<Image>`—, así que lo que se pone
en `public/` es exactamente lo que descarga el visitante. Las cuatro capturas
sumaban 6,2 MB; ahora la carpeta entera son 636 KB, sin diferencia visible.

Para regenerar una captura tras sustituir su PNG (`sips` viene con macOS):

```bash
sips -s format jpeg -s formatOptions 85 -Z 1200 assets-src/eazyshot/funcion-1.png \
  --out public/images/eazyshot/funcion-1.jpg
```

**El hero es la excepción y va en WebP**: el mock del Mac tiene fondo
transparente, así que en JPEG saldría un rectángulo blanco o negro alrededor del
portátil —visible justo en el tema contrario— y en PNG pesa 2 MB. WebP conserva
el alfa en 74 KB. `sips` no sabe escribir WebP, pero `sharp` está en
`node_modules` como dependencia de Next:

```bash
SHARP=$(find node_modules/.pnpm -maxdepth 4 -type d -name sharp | head -1)
node -e "
require('./$SHARP')('assets-src/eazyshot/hero-mock.png')
  .resize({ width: 2000, withoutEnlargement: true })
  .webp({ quality: 82, alphaQuality: 90, effort: 6 })
  .toFile('public/images/eazyshot/hero.webp').then(i => console.log(i.size));
"
```

### El hero son tres capas

`Hero.tsx` monta el mock del Mac a sangre completa (`<Image fill>`), encima el
velo `.hero-veil` y encima el texto. `fill` es deliberado: así la imagen se
recorta sola por los lados en móvil, donde un mock apaisado entero se vería
diminuto, sin necesidad de una segunda maquetación.

`.hero-veil` (en `globals.css`) es lo que hace legible el texto sobre la imagen y
**se adapta al tema sin una sola regla `dark:`**: mezcla con `color-mix` contra
`--color-bg-primary`, así que tira a blanco en claro y a negro en oscuro. La
elipse central opaca es la que garantiza el contraste bajo el texto — si la
suavizas, el contraste pasa a depender de lo que haya en la foto. El degradado
vertical termina en el color de fondo opaco para fundir con *Funciones*.

La imagen lleva `priority`: es el elemento LCP de la landing y Next le añade su
`<link rel="preload">`.

### Imágenes de marca: dos orígenes distintos

| Archivo | De dónde sale |
|---|---|
| `src/app/opengraph-image.png` | **Arte del autor.** No se genera |
| `src/app/icon.png` | **Arte del autor.** No se genera |
| `src/app/eazyshot/opengraph-image.png` | Generada con `pnpm og` desde `scripts/og/eazyshot.tsx` |
| `src/app/eazyshot/icon.png` | Copia del icono de la app |

Las dos primeras las aportó el autor en agosto de 2026 y sustituyeron a unas
generadas; el script se recortó entonces para no volver a pisarlas. **Si añades
un generador nuevo, no lo apuntes a esos dos archivos.**

Todo lo generado se versiona como PNG en lugar de dejarlo como ruta de Next. El
motivo: con la convención normal (`app/opengraph-image.tsx`), Next emite la
imagen **sin extensión** (`out/eazyshot/opengraph-image`), y GitHub Pages decide
el `Content-Type` por la extensión — la serviría como `application/octet-stream`
y los scrapers de WhatsApp, Slack o X la descartarían, dejando la tarjeta sin
imagen, que es justo lo que se venía a arreglar.

```bash
pnpm og     # copia la fuente a app/, construye, guarda el PNG y limpia
```

Cualquier ruta de metadata generada (`sitemap.ts`, `robots.ts`, `opengraph-image`)
necesita además `export const dynamic = "force-static"`, o `output: "export"`
falla al recolectarla. `sitemap.ts` se arma desde `PRODUCT_LIST`, así que un
producto nuevo entra solo; los puentes quedan fuera por ser `noindex`.

### i18n propio, no `next-intl` ni rutas por idioma

`LanguageProvider` (`lib/i18n/context.tsx`) monta siempre en `"es"`, y en un
`useEffect` lee `localStorage["eazyshot-language"]` o, en su defecto,
`navigator.language`. Consecuencia importante: **el HTML exportado está solo en
español**; el inglés aparece tras la hidratación, en el cliente. Ver "Estado
conocido".

### Tema y tokens de color

No hay `tailwind.config.ts` — es Tailwind 4 y toda la configuración vive en
`globals.css`: los tokens en `@theme`, y una variante custom
`@custom-variant dark (&:where(.dark, .dark *))` que se acopla al
`attribute="class"` de `next-themes`. Los colores se usan siempre por token
(`bg-bg-primary`, `text-text-secondary`, `text-accent`), nunca como hex suelto.

**Ese bloque no puede llevar `inline`.** Con `@theme inline` Tailwind mete el
valor dentro de cada utilidad (`.text-text-primary{color:#1d1d1f}`), de modo que
redefinir la variable en `.dark` no cambia nada: solo el `body` la leía y todo lo
que tuviera una clase de color explícita se quedaba con el tema claro sobre fondo
negro. Estuvo así hasta agosto de 2026. Si el modo oscuro vuelve a "no aplicarse",
lo primero que hay que mirar es si alguien reintrodujo `inline`; se comprueba
buscando `var(--color-` en el CSS de `out/`: si casi no aparece, es eso.

Tres pares de tokens que **no son intercambiables**:

- `accent` es para texto e iconos sobre el fondo de la página; `accent-surface`
  es el relleno de un botón y encima va `on-accent`. En oscuro el acento se
  aclara (`#2997ff`) para leerse sobre negro, y por eso deja de servir de fondo
  para texto blanco: ahí la superficie se oscurece (`#0068d1`).
- `muted` es para iconos y estados apagados. `border` es un gris de línea y no
  llega al 3:1 que necesita un elemento gráfico.
- `ez` (`#ff375f`) es el rosa de marca para superficies y texto grande;
  `ez-text` es su versión legible a tamaño pequeño (en claro baja a `#d70036`,
  porque el rosa sobre blanco se queda en 3.5:1).

`ThemeToggle` pinta un `<div>` vacío del mismo tamaño hasta que monta; sin eso
`next-themes` provoca un desajuste de hidratación.

### `output: "export"` condiciona tres cosas

1. **`next/image` necesita `unoptimized`** en cada imagen (no hay optimizador en
   Pages). Está repetido en cada `<Image>` en vez de en `next.config.ts`.
2. Nada de Route Handlers, Server Actions, `revalidate` ni middleware.
3. No hay redirecciones de servidor: mover una URL obliga a dejar un puente
   estático (ver arriba).

## Desajustes con la app real

Detectados al contrastar el contenido con `../easyZshot/CLAUDE.md`. **Son
afirmaciones incorrectas de la web, no cosas a "arreglar" en la app.** Confirmar
con el autor antes de reescribir el copy.

- **El requisito de sistema es macOS 15.2 (Sequoia)**, tal y como dice la ficha
  del App Store. La web anunció macOS 14 (Sonoma) durante un tiempo; corregido
  en `translations.ts:196` y `:511`. Si vuelve a aparecer un "14" ahí, es que
  alguien lo copió del spec viejo.
- **"blur" no difumina.** La web lo menciona seis veces ("herramienta de blur",
  "blur para censurar"). En la app, `drawBlur` rellena un rectángulo negro
  opaco, y es una decisión deliberada y confirmada del autor: el bloque opaco es
  lo único irreversible al tapar una contraseña. El copy honesto es
  "censura"/"ocultar información sensible", no "blur".
- **La política de privacidad es vaga sobre la compra**: dice que se procesa
  "a través de la plataforma que elijas para adquirir la licencia"
  (`translations.ts`, sección *Compras y licencias*). Hay una sola plataforma y
  es el App Store.

## Estado conocido

Observaciones, no tareas asignadas. Confirmar antes de actuar.

- El estado "Próximamente" de `DownloadButton` ya no se usa (la app está
  publicada), pero se mantiene: es lo que necesitará el siguiente producto del
  escaparate antes de salir.
- **`layout.tsx:41` fija `lang="es"`** aunque el usuario cambie a inglés, y el
  HTML estático solo contiene español (verificable en `out/index.html`): la
  versión EN no es indexable y los lectores de pantalla anuncian el idioma
  equivocado. Con `output: export` la solución es una ruta `/en` real, no el
  toggle de cliente.
- **Metadata:** completa para lo esencial — `metadataBase`, canonical por ruta,
  Open Graph con imagen, `twitter:card` grande, `sitemap.xml` y `robots.txt`.
  Lo que falta es una OG en inglés, que depende de las rutas por idioma.
- **Parpadeo de idioma** para usuarios con navegador en inglés: el contenido se
  pinta en español y cambia al hidratar. El tema ya resuelve este mismo problema
  con un placeholder; el idioma no.
- **Los precios de ES y EN no son equivalentes**: `$69 MXN` frente a `$2.99 USD`
  (≈ $50 MXN), y la referencia de la competencia igual (`~$499 MXN` vs `~$29
  USD`). Puede ser precio regional deliberado del App Store; sin confirmar.
- Las imágenes se agrupan por producto (`public/images/<id>/`) para que la
  segunda app no colisione con la primera.
- Las variantes `secondary` y `ghost` de `Button` están definidas y no se usan
  en ningún sitio.
- **El panel del `Accordion` no se desmonta al cerrarse, y es a propósito.**
  Con `AnimatePresence` el `<p>` solo existía mientras estaba abierto, así que
  el HTML exportado tenía ocho preguntas y ninguna respuesta —todo el contenido
  del FAQ quedaba fuera del alcance de un buscador—. Ahora se queda montado,
  colapsado a `height: 0` desde el servidor (se ve en el `style` inline de
  `out/eazyshot.html`, así que tampoco hay flash antes de hidratar) y con
  `aria-hidden` para que los lectores de pantalla no anuncien lo colapsado.
  No volver a envolverlo en `AnimatePresence`.
- No hay tests de ningún tipo.
- `docs/specs/2026-07-14-ezweb-landing-design.md` es el spec original y está
  **desfasado**: llama al producto "EZShot", asume despliegue en Vercel,
  contenido en `lib/content.ts`, precio $9.99 USD, y lista i18n como *non-goal*
  cuando hoy es una pieza central. Sirve como registro de intención, no como
  descripción del código.

## Herramientas

`.claude/skills/` tiene dos skills instaladas localmente y aplicables a este
proyecto: `frontend-design` (dirección visual) y `vercel-react-best-practices`
(rendimiento en React/Next). **`.claude/` está en `.gitignore`** —igual que en
`../easyZshot`—, así que no viajan con el repo: si clonas en otra máquina hay
que reinstalarlas desde `anthropics/skills` y `vercel-labs/agent-skills`.
