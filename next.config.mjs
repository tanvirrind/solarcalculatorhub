/** @type {import('next').NextConfig} */

// Legacy WordPress URLs redirect permanently to their new Next.js homes.
// Both slash variants are listed so /slug and /slug/ land on the canonical
// destination with trailing slash (trailingSlash: true matches the old
// site's URL convention).
const legacyRedirects = {
  // Top-level calculator pages -> /calculators/*
  "/solar-calculator-usa": "/calculators/solar-calculator-usa/",
  "/solar-calculator-uk": "/calculators/solar-calculator-uk/",
  "/solar-calculator-india": "/calculators/solar-calculator-india/",
  "/solar-calculator-australia": "/calculators/solar-calculator-australia/",
  "/solar-calculator-pakistan": "/calculators/solar-calculator-pakistan/",
  "/solar-calculator-philippines": "/calculators/solar-calculator-philippines/",
  // Old typo URL (solar-calculator-phillipines) -> correct spelling
  "/solar-calculator-phillipines": "/calculators/solar-calculator-philippines/",
  "/solar-system-calculator": "/calculators/solar-system-calculator/",
  "/solar-cost-calculator": "/calculators/solar-cost-calculator/",
  "/solar-roi-calculator": "/calculators/solar-roi-calculator/",
  // Old posts -> /blog/*
  "/installation-guide": "/blog/solar-installation-guide/",
  "/solar-panel-price-in-pakistan": "/blog/solar-panel-price-in-pakistan/",
  "/solar-panel-price-in-india": "/blog/solar-panel-price-in-india/",
  "/solar-energy-for-home-top-benefits-ultimate-guide-2025":
    "/blog/solar-energy-for-home-benefits-guide/",
  // Old category archives -> blog hub
  "/category/price": "/blog/",
  "/category/guides": "/blog/",
  "/category": "/blog/",
};

const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return Object.entries(legacyRedirects).flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
  },
};

export default nextConfig;
