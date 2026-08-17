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
pnpm test       # comprobaciones sobre out/ — requiere haber hecho build
pnpm og         # regenera la Open Graph de EazyShot (ver más abajo)
```

### Los tests miran el HTML publicado, no los componentes

`tests/smoke.test.mjs` (con `node --test`, sin framework) recorre `out/` y
comprueba lo que llega a Pages: las ocho rutas de contenido, el `lang` de cada
árbol, canonical y `hreflang`, que **cada `og:image` apunte a un archivo que
existe**, que los CTA lleven la insignia de Apple con enlace real, que el FAQ
exporte sus ocho respuestas, que no reaparezca la palabra "blur" ni un nombre
antiguo del estudio, y que ninguna imagen pase de 300 KB.

Cada caso nació de un fallo real de agosto de 2026, y todos se detectaron a mano
—uno de ellos ya en producción—. **Al arreglar algo que solo se ve en el HTML
final, añade el caso aquí**: es el único sitio del proyecto donde queda fijado.

`deploy.yml` ejecuta `typecheck`, `lint`, `build` y `test` antes de publicar, así
que un fallo detiene el despliegue en lugar de salir a producción.

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
│   ├── globals.css · favicon.ico · icon.png · opengraph-image.jpg
│   ├── sitemap.ts · robots.ts
│   ├── (es)/                    root layout con <html lang="es">
│   │   ├── (studio)/            → "/"          escaparate
│   │   ├── eazyshot/            → "/eazyshot"  landing, privacy, support
│   │   ├── privacy/ support/    puentes a /eazyshot/*
│   └── (en)/                    root layout con <html lang="en">
│       └── en/
│           ├── (studio)/        → "/en"
│           └── eazyshot/        → "/en/eazyshot" + privacy, support
├── components/
│   ├── layout/     Navbar, Footer, StudioChrome, ProductChrome, RedirectBridge
│   ├── pages/      StudioHome, EazyShotLanding, PrivacyContent, SupportContent
│   ├── sections/   StudioHero, ProjectGrid · Hero, Features, HowItWorks,
│   │               Comparison, Pricing, Faq
│   └── ui/         Button, DownloadButton, ProjectCard, BrandMark, Badge,
│                   Accordion, SectionHeading, ScrollReveal, ThemeToggle,
│                   LanguageToggle
└── lib/
    ├── constants.ts      SITE — el estudio (nombre, url, trialDays)
    ├── products.ts       PRODUCTS / PRODUCT_LIST — un registro por producto
    └── i18n/             context.tsx · routes.ts · translations.ts · types.ts
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

En `Hero` y `Pricing` el CTA es `ui/AppStoreBadge.tsx`: la **insignia oficial**
de Apple, descargada de su Marketing Tools a `public/badges/` en cuatro variantes
(dos idiomas × negro y blanco). No es una recreación, y no debe serlo — Apple
exige sus propios assets. Los dos colores existen porque el negro desaparece
sobre el fondo oscuro; se alternan por CSS (`dark:hidden`), no por JavaScript,
para que no parpadeen al hidratar. Si un producto no tiene `appStoreUrl`, la
insignia cae al botón de "Próximamente": la marca de Apple solo puede acompañar
a un enlace real a la tienda.

`Navbar` conserva `ui/DownloadButton.tsx` —texto corto, que es lo que cabe en la
barra—, y ambos reciben el producto por props. El destino de cada uno vive en un solo sitio: `PRODUCTS[id].appStoreUrl`
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

### El hero: texto arriba, mock debajo

En agosto de 2026 se probó a poner el mock de fondo a sangre completa con el
texto encima y un velo para dar contraste. **Se descartó**: para que el texto
fuese legible había que cubrir la imagen tanto que el mock dejaba de verse, y
bajando el velo el contraste quedaba a merced de lo que hubiera en la foto. Si
vuelve a plantearse, ese es el motivo por el que no está así.

La composición actual separa las dos cosas: bloque de texto centrado y, debajo,
el mock. Va **sin marco, sombra ni `rounded`** porque la imagen ya trae el
portátil recortado sobre fondo transparente, y cualquier borde rectangular
delataría el recorte. Lleva `priority` —es el elemento LCP y Next le añade su
`<link rel="preload">`— y `width`/`height` reales (2000×1300) para que no haya
salto de maquetación.

### Imágenes de marca: dos orígenes distintos

| Archivo | De dónde sale |
|---|---|
| `src/app/(es)/opengraph-image.jpg` · `(en)/` | **Arte del autor.** No se genera. Una copia por idioma |
| `src/app/icon.png` · `src/app/favicon.ico` | **Arte del autor.** El `.ico` es su versión cuadrada de 256 px |
| `src/app/eazyshot/opengraph-image.png` | Generada con `pnpm og` desde `scripts/og/eazyshot.tsx` |
| `src/app/eazyshot/icon.png` | Copia del icono de la app |
| `public/images/brand/logotipo.webp` | Recorte del original de la Open Graph, para el hero del escaparate |

**El logotipo del hero va enmarcado a propósito.** Es el mismo arte de la Open
Graph recortado a la caja del lettering (`extract` 74,143 1187×563, quitando el
margen que solo servía para la tarjeta social), y se pinta con `rounded-2xl` y
`border-border`. No está recortado contra transparencia porque no se puede
hacer limpiamente: el fondo no es un gris plano —va de `#dedede` a `#e8e8e8`— y
el glitch tiene bordes de ruido, así que un umbral deja halo y se come las
astillas rojas. Y aunque saliera, el lettering es negro y desaparecería en
oscuro: haría falta una segunda versión del arte con el texto en blanco, que hay
que dibujar (invertir la imagen vuelve el carmesí en cian). Con el marco, el
fondo gris se lee como parte de la obra en los dos temas. Es el elemento LCP de
la home del estudio, de ahí su `priority`.

**`opengraph-image` va junto al layout, no en `app/`.** Next asocia esa imagen al
segmento que tiene layout, y desde que hay dos root layouts (uno por idioma)
`app/` ya no tiene ninguno: el archivo se seguía generando, pero ninguna página
lo enlazaba y la home se quedó sin `og:image` —con `twitter:card` cayendo a
`summary`— hasta que se detectó **en producción**. Por eso hay una copia en
`(es)/` y otra en `(en)/`. Los iconos sí se heredan desde `app/`; la Open Graph
no. Al añadir un idioma, copiar también la imagen.

Tres cosas más que costaron un rato averiguar y conviene no repetir:

- **No dupliques estos archivos dentro de `(studio)/`.** Un `icon.png` o un
  `opengraph-image.*` en el route group tiene prioridad sobre el de `app/` para
  la home, y si en `app/` hay otro con el mismo nombre base Next les añade un
  sufijo (`opengraph-image-1t4p6s.png`). Al cambiar el de `app/` a `.jpg`, las
  metaetiquetas siguieron apuntando al `.png` sufijado del route group, que ya no
  se generaba: `og:image` a un 404. Una sola copia, en `src/app/`.
- **`favicon.ico` tiene que existir**, aunque haya `icon.png` y su `<link>`. Los
  navegadores piden `/favicon.ico` por su cuenta; cuando se borró el de la
  plantilla, esa petición pasó a devolver 404 y la pestaña mostraba el icono
  genérico. El actual lleva **seis resoluciones** (16→256) para que el navegador
  coja la que necesita en lugar de reescalar una de 256 hasta emborronarla, y
  todas van cuadradas (el arte original es 542×444 y se deformaba). Se
  reconstruye desde `assets-src/brand/icon-original.png`; **los PNG que van
  dentro del `.ico` deben ser RGBA** o Turbopack falla el build con
  *"The PNG is not in RGBA format"* — con `sharp`, `.flatten()` los deja en RGB y
  hay que encadenar `.ensureAlpha()`.
- **La Open Graph no debe pasar de ~300 KB.** WhatsApp descarta las más pesadas y
  la tarjeta sale sin imagen; el PNG original del autor pesaba 978 KB y en JPEG
  de calidad 88 son 60 KB sin diferencia visible. El original está en
  `assets-src/brand/`.

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

### i18n con rutas reales: español en la raíz, inglés bajo `/en`

```
/                 /en                    escaparate
/eazyshot         /en/eazyshot           landing
/eazyshot/privacy /en/eazyshot/privacy   legales
```

El español no lleva prefijo **porque sus URLs ya existían** y las de privacidad y
soporte están registradas en App Store Connect; prefijarlas las habría roto.

Tres piezas lo sostienen:

- **Dos root layouts**, `app/(es)/layout.tsx` y `app/(en)/layout.tsx`, y por eso
  **no existe `app/layout.tsx`**. Es la única forma de que `<html lang>` diga la
  verdad en cada rama: un layout raíz único solo puede emitir un idioma. El
  precio es que cambiar de idioma recarga la página entera, que es lo esperable.
- **`lib/i18n/routes.ts`** construye todas las rutas (`localePath`,
  `alternatePath`, `localeAlternates`). Ningún componente concatena `/en` a mano.
- **`LanguageProvider` recibe el idioma por props**, ya resuelto por la ruta. No
  detecta nada: antes lo hacía en un `useEffect` con `localStorage` y
  `navigator.language`, y eso dejaba el HTML exportado siempre en español —la
  mitad traducida del contenido no la indexaba nadie— además de provocar un
  parpadeo al hidratar en los navegadores en inglés.

Las páginas de los dos idiomas comparten componente (`components/pages/`) y
cromo (`StudioChrome`, `ProductChrome`); lo único que cambia en cada `page.tsx`
es la metadata. **Al añadir una página hay que crearla en las dos ramas**, o
existirá solo en un idioma.

No hay redirección automática por idioma del navegador: con export estático
implicaría un salto en cliente, y Google prefiere que el cambio sea explícito.
Quien entre a `/` ve español y tiene el conmutador en la barra.

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
- `ez` (`#bb0734`) es el carmesí de marca, tomado del logotipo del autor para que
  el `BrandMark` y el arte digan el mismo color. En claro llega a 6.6:1 sobre
  blanco, así que vale también para texto pequeño y `ez-text` comparte su valor;
  en oscuro ambos se aclaran a `#f83a6a` —mismo tono, subido hasta 4.5:1 sobre
  `bg-secondary`— porque el carmesí puro se queda en 2.56:1 y desaparecería en el
  footer. Los dos tokens siguen existiendo por si la distinción vuelve a hacer
  falta. Antes eran `#ff375f` / `#d70036`, un rosa que no era el del logotipo.

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
- **La palabra "blur" está desterrada del copy, y con motivo.** En la app,
  `drawBlur` rellena un rectángulo negro opaco —decisión deliberada y confirmada
  del autor: el bloque opaco es lo único irreversible al tapar una contraseña—,
  así que prometer un desenfoque era describir algo que no ocurre. Se dice
  "censura" / "bloque opaco" en español y *redaction* en inglés. Si alguien
  reintroduce "blur", está describiendo la herramienta de otra app.
- **La política de privacidad es vaga sobre la compra**: dice que se procesa
  "a través de la plataforma que elijas para adquirir la licencia"
  (`translations.ts`, sección *Compras y licencias*). Hay una sola plataforma y
  es el App Store.

## Estado conocido

Observaciones, no tareas asignadas. Confirmar antes de actuar.

- El estado "Próximamente" de `DownloadButton` ya no se usa (la app está
  publicada), pero se mantiene: es lo que necesitará el siguiente producto del
  escaparate antes de salir.
- **Metadata:** completa — `metadataBase`, canonical y `hreflang` por ruta,
  Open Graph con imagen, `twitter:card` grande, `sitemap.xml` con las
  traducciones declaradas y `robots.txt`.
- La **Open Graph es la misma en los dos idiomas** (la del arte del autor, y la
  generada de EazyShot en español). Es el siguiente detalle de i18n si importa la
  tarjeta al compartir desde `/en`.
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
- `src/app/not-found.tsx` trae su propio `<html>` y sus textos escritos a mano en
  los dos idiomas. No es un descuido: una URL inexistente no cuelga de ninguno de
  los dos root layouts, así que no puede heredar ni el idioma ni el proveedor de
  traducciones.
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
