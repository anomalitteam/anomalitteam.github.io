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
    assert.match(html("en.html"), /Apps that do one thing well/);
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

  test("el nombre del estudio es el actual en todas las páginas", () => {
    for (const file of Object.keys(PAGES)) {
      const page = html(file);
      assert.doesNotMatch(page, /Fairy Dream|anomalitfuture|anomalyteam/i, `${file} arrastra un nombre antiguo`);
    }
  });
});

describe("peso", () => {
  test("ninguna imagen publicada pasa de 300 KB", () => {
    const dir = join(OUT, "images/eazyshot");
    for (const f of readdirSync(dir)) {
      const kb = statSync(join(dir, f)).size / 1024;
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
