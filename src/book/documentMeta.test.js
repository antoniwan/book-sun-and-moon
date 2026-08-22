import { beforeEach, expect, test } from "vitest";
import { SEO, SITE_CANONICAL, SITE_IMAGE } from "./content";
import { applyDocumentMeta, buildJsonLd } from "./documentMeta";

beforeEach(() => {
  document.head.innerHTML = `
    <meta name="description" content="" />
    <meta name="application-name" content="" />
    <meta name="apple-mobile-web-app-title" content="" />
    <link rel="canonical" href="" />
    <link rel="alternate" hreflang="en" href="" />
    <link rel="alternate" hreflang="es" href="" />
    <link rel="alternate" hreflang="x-default" href="" />
    <meta property="og:url" content="" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:locale" content="" />
    <meta property="og:image" content="" />
    <meta property="og:image:secure_url" content="" />
    <meta property="og:image:alt" content="" />
    <meta name="twitter:title" content="" />
    <meta name="twitter:description" content="" />
    <meta name="twitter:image" content="" />
    <meta name="twitter:image:alt" content="" />
    <script type="application/ld+json">{}</script>
  `;
  document.documentElement.lang = "en";
  document.title = "";
});

test("buildJsonLd includes free Book offer and author Person", () => {
  const graph = buildJsonLd("en")["@graph"];
  const person = graph.find((node) => node["@type"] === "Person");
  const book = graph.find((node) => node["@type"] === "Book");
  expect(person.name).toMatch(/Antonio/);
  expect(book.isAccessibleForFree).toBe(true);
  expect(book.offers.price).toBe("0");
  expect(book.numberOfPages).toBe(10);
  expect(book.image).toContain(SITE_IMAGE);
});

test("applyDocumentMeta switches Spanish strings", () => {
  applyDocumentMeta("es");
  expect(document.title).toBe(SEO.title.es);
  expect(document.documentElement.lang).toBe("es");
  expect(document.querySelector('meta[name="description"]').content).toBe(
    SEO.description.es
  );
  expect(document.querySelector('meta[property="og:locale"]').content).toBe(
    SEO.locale.es
  );
  expect(document.querySelector('link[rel="canonical"]').href).toBe(
    SITE_CANONICAL
  );
  const jsonLd = JSON.parse(
    document.querySelector('script[type="application/ld+json"]').textContent
  );
  const book = jsonLd["@graph"].find((node) => node["@type"] === "Book");
  expect(book.name).toBe(SEO.title.es);
  expect(book.description).toBe(SEO.description.es);
});
