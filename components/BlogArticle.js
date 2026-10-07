import Link from "next/link";
import JsonLd from "./JsonLd";

const SITE_URL = "https://solarcalculatorhub.com";
const SITE_NAME = "Solar Calculator Hub";

// Shared shell for /blog articles: breadcrumb, headline, Article schema,
// and a CTA box pointing at the relevant calculator.
export default function BlogArticle({
  title,
  description,
  slug,
  category,
  updated = "2026-10-08",
  calculatorHref,
  calculatorLabel,
  children,
}) {
  const url = `${SITE_URL}/blog/${slug}/`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    inLanguage: "en-US",
    datePublished: "2026-10-08",
    dateModified: updated,
    articleSection: category,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <article className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <nav style={{ fontSize: 13, color: "var(--muted)", marginBottom: 18 }}>
          <Link href="/" style={{ color: "inherit" }}>Home</Link>
          {"  →  "}
          <Link href="/blog/" style={{ color: "inherit" }}>Blog</Link>
        </nav>
        <div className="kicker">{category}</div>
        <h1 className="h2" style={{ maxWidth: 760 }}>{title}</h1>
        <p className="sub" style={{ maxWidth: 680 }}>{description}</p>
        <div className="guide-body" style={{ maxWidth: 720, lineHeight: 1.75, fontSize: 17 }}>
          {children}
        </div>
        <div className="card" style={{ marginTop: 44, maxWidth: 720, padding: "28px 30px" }}>
          <h3 style={{ marginTop: 0 }}>Run your own numbers</h3>
          <p style={{ color: "var(--ink-soft)" }}>
            Reading is good. Math is better. Punch your bill and location into
            the free calculator and see what solar costs for you.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <Link href={calculatorHref} className="btn btn-primary">
              {calculatorLabel}
            </Link>
            <Link href="/calculators/" className="btn btn-ghost">
              All calculators
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
