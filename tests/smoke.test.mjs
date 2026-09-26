import { test, describe, before } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * Comprobaciones sobre el sitio ya construido (`out/`).
 *
 * No prueban componentes: prueban el HTML que acaba en GitHub Pages, que es lo
 * único que ve un visitante o un rastreador. Cada caso de aquí nació de un fallo
 * real —la home se quedó sin `og:image` al partir el layout raíz en dos, el FAQ
 * se exportaba sin respuestas, los CTA salían sin `href`—, y todos se detectaron
 * a mano. Esto los caza antes de desplegar.
 *
 *   pnpm build && pnpm test
 */

const OUT = "out";
const APP_STORE = "apps.apple.com/app/id6795760394";

const PAGES = {
  "index.html": { lang: "es", path: "" },
  "en.html": { lang: "en", path: "/en" },
  "eazyshot.html": { lang: "es", path: "/eazyshot" },
  "en/eazyshot.html": { lang: "en", path: "/en/eazyshot" },
  "eazyshot/privacy.html": { lang: "es", path: "/eazyshot/privacy" },
  "en/eazyshot/privacy.html": { lang: "en", path: "/en/eazyshot/privacy" },
  "eazyshot/support.html": { lang: "es", path: "/eazyshot/support" },
  "en/eazyshot/support.html": { lang: "en", path: "/en/eazyshot/support" },
};

const html = (file) => readFileSync(join(OUT, file), "utf8");

before(() => {
  assert.ok(
    existsSync(OUT),
    "No existe out/. Ejecuta `pnpm build` antes que los tests.",
  );
});

describe("rutas generadas", () => {
  for (const file of Object.keys(PAGES)) {
    test(`existe ${file}`, () => {
      assert.ok(existsSync(join(OUT, file)), `falta ${file}`);
    });
  }

  test("los puentes de las URLs registradas en App Store Connect siguen ahí", () => {
    for (const [file, destino] of [
      ["privacy.html", "/eazyshot/privacy"],
      ["support.html", "/eazyshot/support"],
    ]) {
      const page = html(file);
      assert.match(
        page,
        new RegExp(`http-equiv="refresh"[^>]*url=${destino}`),
        `${file} deberia reenviar a ${destino}`,
      );
      assert.match(page, /name="robots" content="noindex/, `${file} sin noindex`);
    }
  });

  test("sitemap y robots se publican", () => {
    const sitemap = html("sitemap.xml");
    for (const { path } of Object.values(PAGES)) {
      assert.ok(
        sitemap.includes(`${path || "/"}<`) || sitemap.includes(`${path}</loc>`),
        `el sitemap no incluye ${path || "/"}`,
      );
    }
    assert.match(html("robots.txt"), /Sitemap: https:\/\//);
  });
});

describe("idioma", () => {
  for (const [file, { lang }] of Object.entries(PAGES)) {
    test(`${file} declara lang="${lang}"`, () => {
      assert.match(html(file), new RegExp(`<html lang="${lang}"`));
    });
  }

  test("el inglés está en el HTML servido, no solo tras hidratar", () => {
    assert.match(html("en.html"), /Apps that do things well/);
    assert.match(html("en/eazyshot.html"), /requires macOS 15\.2/i);
  });

  test("cada página declara sus traducciones", () => {
    for (const file of Object.keys(PAGES)) {
      const page = html(file);
      assert.match(page, /rel="canonical"/, `${file} sin canonical`);
      for (const lang of ["es", "en", "x-default"]) {
        assert.match(
          page,
          new RegExp(`hrefLang="${lang}"`, "i"),
          `${file} sin hreflang ${lang}`,
        );
      }
    }
  });
});

describe("metadatos sociales", () => {
  for (const file of Object.keys(PAGES)) {
    test(`${file} tiene og:image`, () => {
      const page = html(file);
      const match = page.match(/property="og:image" content="([^"?]+)/);
      assert.ok(match, `${file} sin og:image`);

      // La URL debe corresponder a un archivo que exista de verdad: al partir el
      // layout raíz en dos, el meta apuntó un tiempo a un PNG que ya no se
      // generaba.
      const rel = match[1].replace(/^https?:\/\/[^/]+\//, "");
      assert.ok(existsSync(join(OUT, rel)), `og:image apunta a ${rel}, que no existe`);
    });
  }

  test("los iconos existen", () => {
    for (const f of ["favicon.ico", "icon.png"]) {
      assert.ok(existsSync(join(OUT, f)), `falta ${f}`);
    }
  });
});

describe("contenido", () => {
  test("los CTA enlazan al App Store en los dos idiomas", () => {
    for (const file of ["eazyshot.html", "en/eazyshot.html"]) {
      const page = html(file);
      const enlaces = page.split(APP_STORE).length - 1;
      assert.ok(enlaces >= 3, `${file} tiene ${enlaces} CTA con enlace, se esperaban 3+`);
      assert.doesNotMatch(
        page,
        /<button[^>]*>\s*Descargar|<button[^>]*>\s*Download/,
        `${file} tiene un CTA sin destino`,
      );
    }
  });

  test("las respuestas del FAQ están en el HTML, no solo en el JS", () => {
    for (const file of ["eazyshot.html", "en/eazyshot.html"]) {
      const paneles = html(file).split('role="region"').length - 1;
      assert.equal(paneles, 8, `${file} exporta ${paneles} respuestas de FAQ, se esperaban 8`);
    }
  });

  test("los CTA usan la insignia oficial de Apple", () => {
    for (const [file, lang] of [
      ["eazyshot.html", "es"],
      ["en/eazyshot.html", "en"],
    ]) {
      const page = html(file);
      for (const color of ["black", "white"]) {
        const badge = `/badges/mac-app-store-${lang}-${color}.svg`;
        assert.ok(page.includes(badge), `${file} no usa ${badge}`);
        assert.ok(existsSync(join(OUT, badge)), `falta el archivo ${badge}`);
      }
    }
  });

  test("el logotipo del estudio se sirve en la home de los dos idiomas", () => {
    for (const file of ["index.html", "en.html"]) {
      const page = html(file);
      const match = page.match(/src="(\/images\/brand\/[^"]+)"/);
      assert.ok(match, `${file} no muestra el logotipo del estudio`);
      assert.ok(
        existsSync(join(OUT, match[1])),
        `el logotipo apunta a ${match[1]}, que no existe`,
      );
      // Va con alt traducido: sin él, el nombre del estudio solo existiría en el
      // navbar para quien use lector de pantalla.
      assert.match(page, /alt="[^"]*Anomalit Team[^"]*"/, `${file} sin alt en el logotipo`);
    }
  });

  test("la 404 lleva la marca y una salida, no la de fábrica", () => {
    const page = html("404.html");
    assert.doesNotMatch(page, /This page could not be found/);
    assert.match(page, /Anomalit/);
    assert.match(page, /href="\/eazyshot"/);
  });

  test('no se promete "blur": la app tapa con un bloque opaco', () => {
    for (const file of Object.keys(PAGES)) {
      assert.doesNotMatch(html(file), /\bblur\b/i, `${file} menciona blur`);
    }
  });

  test("la tarjeta de precio no repite el número ni el texto de la prueba", () => {
    // La tarjeta pintaba `{SITE.trialDays} {section.trial}` sobre una cadena que
    // ya traía el número —"3 3 días de prueba…"— y justo debajo repetía la misma
    // frase completa. Salió así a producción en los dos idiomas.
    for (const [file, trial] of [
      ["eazyshot.html", "días de prueba gratuita con todas las funciones"],
      ["en/eazyshot.html", "day free trial with all features"],
    ]) {
      // React separa los nodos de texto con comentarios; sin quitarlos, el
      // número duplicado no se ve como "3 3".
      const texto = html(file).replace(/<!-- -->/g, "");
      assert.doesNotMatch(
        texto,
        /(\d+) \1[- ](día|day)/,
        `${file} repite el número de días de prueba`,
      );
      // Una vez en la tarjeta de precio y otra en la respuesta del FAQ.
      const veces = texto.split(trial).length - 1;
      assert.equal(veces, 2, `${file} dice "${trial}" ${veces} veces, se esperaban 2`);
    }
  });

  test("ningún importe se anuncia como precio cerrado", () => {
    // Apple convierte el precio por país y no da la misma cifra en todos, así que
    // la página no puede prometer una: todo importe va marcado como aproximado y
    // la landing dice de qué depende. La comprobación no fija la cifra —cambiará—
    // sino la forma de presentarla.
    for (const [file, pista] of [
      ["eazyshot.html", /país/],
      ["en/eazyshot.html", /country/],
    ]) {
      const page = html(file).replace(/<!-- -->/g, "");
      for (const importe of page.match(/.\$\d[\d.,]*\s?(MXN|USD)/g) ?? []) {
        assert.ok(
          importe.startsWith("~"),
          `${file} anuncia "${importe.slice(1)}" como precio cerrado`,
        );
      }
      assert.match(page, pista, `${file} no avisa de que el precio depende del país`);
    }
  });

  test("el nombre del estudio es el actual en todas las páginas", () => {
    for (const file of Object.keys(PAGES)) {
      const page = html(file);
      assert.doesNotMatch(page, /Fairy Dream|anomalitfuture|anomalyteam/i, `${file} arrastra un nombre antiguo`);
    }
  });
});

describe("accesibilidad", () => {
  /** Los `<img …>` de una página, uno por elemento. */
  const imagenes = (page) => page.match(/<img\b[^>]*>/g) ?? [];

  test("la insignia del App Store lleva texto alternativo en los dos temas", () => {
    // Las dos variantes de color se alternan con `dark:hidden`, que es
    // `display: none`: la oculta sale del árbol de accesibilidad. Si solo una
    // lleva `alt`, en el tema contrario el CTA principal es un enlace sin texto.
    for (const [file, lang] of [
      ["eazyshot.html", "es"],
      ["en/eazyshot.html", "en"],
    ]) {
      const page = html(file);
      for (const color of ["black", "white"]) {
        const badge = `/badges/mac-app-store-${lang}-${color}.svg`;
        const imgs = imagenes(page).filter((img) => img.includes(badge));
        assert.ok(imgs.length > 0, `${file} no pinta ${badge}`);
        for (const img of imgs) {
          assert.match(img, /alt="[^"]+"/, `${file}: la insignia ${color} tiene alt vacío`);
        }
      }
    }
  });

  test("la tabla comparativa no deja celdas sin texto", () => {
    // Las columnas de sí/no son iconos. Sin texto equivalente, un lector de
    // pantalla anuncia once filas de celdas vacías: la sección que más
    // información condensa queda ilegible.
    for (const file of ["eazyshot.html", "en/eazyshot.html"]) {
      const page = html(file);
      const tabla = page.slice(page.indexOf("<table"), page.indexOf("</table>"));
      assert.ok(tabla.length > 0, `${file} no tiene tabla comparativa`);
      assert.match(tabla, /<th[^>]*scope="col"/, `${file}: los <th> no declaran scope`);
      assert.doesNotMatch(
        tabla,
        /<td[^>]*>\s*<svg/,
        `${file}: hay celdas cuyo único contenido es un icono`,
      );
    }
  });

  test("las capturas de Cómo funciona se describen, no repiten el título del paso", () => {
    for (const file of ["eazyshot.html", "en/eazyshot.html"]) {
      const page = html(file);
      const titulos = (page.match(/<h3[^>]*>([^<]+)<\/h3>/g) ?? []).map((h) =>
        h.replace(/<[^>]+>/g, ""),
      );
      const capturas = imagenes(page).filter((img) => img.includes("/funcion-"));
      assert.equal(capturas.length, 4, `${file} pinta ${capturas.length} capturas, se esperaban 4`);
      for (const img of capturas) {
        const alt = img.match(/alt="([^"]*)"/)?.[1] ?? "";
        assert.ok(alt.length > 0, `${file}: una captura sin alt`);
        assert.ok(
          !titulos.includes(alt),
          `${file}: el alt "${alt}" repite el encabezado que ya está al lado`,
        );
      }
    }
  });

  test("el CSS publicado atiende prefers-reduced-motion", () => {
    // El sitio anima el scroll y revela cada tarjeta al entrar en pantalla. Quien
    // haya pedido menos movimiento en el sistema debe recibir el sitio quieto.
    const recorrer = (dir) =>
      readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
        e.isDirectory() ? recorrer(join(dir, e.name)) : [join(dir, e.name)],
      );
    const hojas = recorrer(join(OUT, "_next/static")).filter((f) => f.endsWith(".css"));
    assert.ok(hojas.length > 0, "no se publicó ninguna hoja de estilos");
    const css = hojas.map((f) => readFileSync(f, "utf8")).join("\n");
    assert.match(css, /prefers-reduced-motion/, "el CSS no contempla prefers-reduced-motion");
  });
});

describe("peso", () => {
  test("ninguna imagen publicada pasa de 300 KB", () => {
    // Recorre `images/` entero: hay una carpeta por producto y otra de marca, y
    // limitarlo a una sola dejaba las demás sin vigilar.
    const recorrer = (dir) =>
      readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
        e.isDirectory() ? recorrer(join(dir, e.name)) : [join(dir, e.name)],
      );

    for (const f of recorrer(join(OUT, "images"))) {
      const kb = statSync(f).size / 1024;
      assert.ok(kb < 300, `${f} pesa ${Math.round(kb)} KB`);
    }
  });

  test("la Open Graph cabe en el límite de los scrapers", () => {
    // WhatsApp descarta las imágenes grandes y la tarjeta sale sin ilustración.
    const og = html("index.html").match(/property="og:image" content="([^"?]+)/)[1];
    const rel = og.replace(/^https?:\/\/[^/]+\//, "");
    const kb = statSync(join(OUT, rel)).size / 1024;
    assert.ok(kb < 300, `la og:image pesa ${Math.round(kb)} KB`);
  });
});
