import { posts } from "../lib/posts";

const SITE_URL = "https://solarcalculatorhub.com";

// Public, indexable routes.
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/calculators/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/solar-calculator-usa/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/solar-calculator-uk/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/solar-calculator-india/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/solar-calculator-australia/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/solar-calculator-pakistan/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/solar-calculator-philippines/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/solar-system-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/solar-cost-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/solar-roi-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog/", priority: 0.8, changeFrequency: "weekly" },
  ...posts.map((p) => ({
    path: `/blog/${p.slug}/`,
    priority: 0.8,
    changeFrequency: "monthly",
  })),
  { path: "/about/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy-policy/", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap() {
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
