import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { breadcrumbJsonLd } from "../../lib/schema";
import { posts } from "../../lib/posts";

export const metadata = {
  title: "Solar Energy Blog: Guides, Prices & Calculators",
  description:
    "Solar installation guides, 2026 panel prices for Pakistan & India, and home solar benefits — practical reading before you buy.",
  keywords: [
    "solar energy blog",
    "solar panel price guide",
    "solar installation guide",
    "home solar guide",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/blog/" },
  openGraph: {
    title: "Solar Energy Blog: Guides, Prices & Calculators | Solar Calculator Hub",
    description:
      "Installation guides, 2026 panel prices, subsidies and the homeowner case for solar.",
    url: "https://solarcalculatorhub.com/blog/",
  },
};

const groups = ["Prices", "Guides"];

export default function BlogHub() {
  return (
    <div className="section">
      <div className="wrap">
        <JsonLd data={breadcrumbJsonLd([{ name: "Blog" }])} />
        <div className="kicker">Blog</div>
        <h1 className="h2" style={{ maxWidth: 760 }}>
          Solar Energy Blog: Guides, Prices &amp; Calculators
        </h1>
        <p className="sub" style={{ maxWidth: 680 }}>
          Practical, numbers-first reading on residential solar — installation
          walkthroughs, 2026 panel prices for Pakistan and India, and the
          homeowner case for going solar. Pair any article with our free
          calculators to price your own system.
        </p>

        {groups.map((group) => (
          <section key={group} style={{ marginTop: 40 }}>
            <h2 className="h3" style={{ marginBottom: 18 }}>{group}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 18,
              }}
            >
              {posts
                .filter((p) => p.category === group)
                .map((p) => (
                  <article key={p.slug} className="card" style={{ padding: "24px 26px" }}>
                    <div className="kicker" style={{ fontSize: 12 }}>{p.category}</div>
                    <h3 style={{ fontSize: 20, margin: "10px 0 8px" }}>{p.title}</h3>
                    <p style={{ color: "var(--ink-soft)", margin: "0 0 14px", lineHeight: 1.65 }}>
                      {p.note}
                    </p>
                    <Link href={`/blog/${p.slug}/`} style={{ fontWeight: 600 }}>
                      Read more →
                    </Link>
                  </article>
                ))}
            </div>
          </section>
        ))}

        <section className="card" style={{ marginTop: 56, padding: "34px 36px", textAlign: "center" }}>
          <h2 className="h3" style={{ marginTop: 0 }}>Ready to run your own numbers?</h2>
          <p style={{ color: "var(--ink-soft)", maxWidth: 560, margin: "0 auto 8px" }}>
            Free calculators for 6+ countries — size your system, estimate costs,
            and check payback before you talk to any installer.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
            <Link href="/calculators/" className="btn btn-primary">
              Browse all 9 calculators
            </Link>
            <Link href="/calculators/solar-roi-calculator/" className="btn btn-ghost">
              Check my solar ROI
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
