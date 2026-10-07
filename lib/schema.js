const SITE_URL = "https://solarcalculatorhub.com";

/** WebApplication structured data for a calculator page. */
export function appJsonLd({ name, url, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url: `${SITE_URL}${url}`,
    applicationCategory: "CalculatorApplication",
    operatingSystem: "Any",
    description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

/** BreadcrumbList structured data. items: array of {name, href?}. */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      ...items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: it.name,
        ...(it.href ? { item: `${SITE_URL}${it.href}` } : {}),
      })),
    ],
  };
}
