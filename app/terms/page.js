export const metadata = {
  title: "Terms of Use - Solar Calculator Hub",
  description:
    "Terms of use for Solar Calculator Hub: estimates are for planning only, not professional advice.",
  alternates: { canonical: "https://solarcalculatorhub.com/terms/" },
  openGraph: {
    title: "Terms of Use - Solar Calculator Hub | Solar Calculator Hub",
    description: "Estimates are planning tools, not professional advice.",
    url: "https://solarcalculatorhub.com/terms/",
  },
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Legal</div>
        <h1 className="h2">Terms of Use</h1>
        <p className="sub">Last updated: October 2026</p>
        <div style={{ maxWidth: 720, lineHeight: 1.75, fontSize: 17 }}>
          <h2>Estimates, not advice</h2>
          <p>
            All calculators and articles on Solar Calculator Hub are
            planning tools for general information only. They are not
            engineering, financial, tax or legal advice. System sizing,
            costs, savings and payback figures are estimates based on
            published averages and the inputs you provide — actual results
            depend on your roof, shading, equipment, installer pricing and
            local regulations.
          </p>
          <h2>Verify before you buy</h2>
          <p>
            Always get a professional site survey and written quotes from
            licensed installers before purchasing a solar system. Incentive
            programs, tax credits and net metering rules change; confirm
            current terms with your utility and tax advisor.
          </p>
          <h2>Acceptable use</h2>
          <p>
            You may use the site for personal, non-commercial planning. Do
            not scrape the site aggressively, misrepresent its output as a
            professional quote, or use it in a way that disrupts service
            for others.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            The site is provided &quot;as is&quot; without warranties of any
            kind. To the fullest extent permitted by law, we are not liable
            for decisions made based on its estimates.
          </p>
        </div>
      </div>
    </section>
  );
}
