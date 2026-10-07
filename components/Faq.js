export default function Faq({ items, heading = "Questions people actually ask" }) {
  return (
    <div style={{ marginTop: 56, maxWidth: 780 }}>
      <h2 className="h2" style={{ marginBottom: 8 }}>
        {heading}
      </h2>
      <p className="sub" style={{ marginBottom: 24 }}>
        Straight answers, no fluff. Then run your own numbers above.
      </p>
      {items.map((f) => (
        <div
          key={f.q}
          className="card"
          style={{ marginBottom: 14, padding: "22px 26px" }}
        >
          <h3 style={{ fontSize: 19, margin: "0 0 8px" }}>{f.q}</h3>
          <p style={{ color: "var(--ink-soft)", margin: 0, lineHeight: 1.65 }}>
            {f.a}
          </p>
        </div>
      ))}
    </div>
  );
}

export function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
