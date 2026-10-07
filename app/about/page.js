export const metadata = {
  title: "About - Solar Calculator Hub",
  description:
    "About Solar Calculator Hub: an independent resource with free solar calculators for system sizing, cost, ROI and battery backup.",
  keywords: ["about solar calculator hub"],
  alternates: { canonical: "https://solarcalculatorhub.com/about/" },
  openGraph: {
    title: "About - Solar Calculator Hub | Solar Calculator Hub",
    description:
      "Independent, transparent solar math — free calculators, no panel sales.",
    url: "https://solarcalculatorhub.com/about/",
  },
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">About</div>
        <h1 className="h2">About Solar Calculator Hub</h1>
        <p className="sub" style={{ maxWidth: 700 }}>
          Independent solar math for homeowners and businesses.
        </p>
        <div style={{ maxWidth: 720, lineHeight: 1.75, fontSize: 17 }}>
          <p>
            Solar Calculator Hub is an independent resource providing
            transparent data for renewable energy. We offer localized solar
            calculators for the USA, UK, India, Australia, Pakistan and the
            Philippines, plus tools for system sizing, installation cost,
            ROI and battery backup planning.
          </p>
          <p>
            Our mission is to help you understand the math behind solar
            energy — from system sizing to return on investment — so you can
            make an informed decision for your home or business. Solar quotes
            vary enormously between installers; an independent estimate of
            system size, fair cost and payback period puts you in control of
            the conversation.
          </p>
          <h2>What we don&apos;t do</h2>
          <p>
            We don&apos;t sell solar panels, take installer commissions, or
            rank quotes. The calculators run entirely in your browser — your
            inputs never leave your device. Estimates are ballpark figures
            based on published averages; always confirm with a local
            installer and a proper site survey before signing anything.
          </p>
          <h2>How the numbers work</h2>
          <p>
            System sizing divides your daily electricity use by local peak
            sun hours and a 0.78 performance ratio (inverter, temperature and
            soiling losses). Costs use published 2026 installed-price
            averages per country, adjusted by the incentive you select.
            Savings projections assume electricity prices rise about 3% per
            year, the long-run historical average.
          </p>
        </div>
      </div>
    </section>
  );
}
