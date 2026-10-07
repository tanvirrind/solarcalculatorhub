import Link from "next/link";
import SolarRoiCalculator from "../../../components/SolarRoiCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Solar ROI Calculator — Payback & 25-Year Savings",
  description:
    "Check your solar payback: enter net system cost and monthly savings, get payback years, 25-year cumulative savings and profit. Free ROI calculator.",
  keywords: [
    "solar roi calculator",
    "solar payback calculator",
    "solar panel return on investment",
    "25 year solar savings calculator",
    "is solar worth it calculator",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/calculators/solar-roi-calculator/" },
  openGraph: {
    title: "Solar ROI Calculator — Payback & 25-Year Savings | Solar Calculator Hub",
    description:
      "Payback years, 25-year cumulative savings and net profit from your net system cost and monthly bill savings — in six currencies.",
    url: "https://solarcalculatorhub.com/calculators/solar-roi-calculator/",
  },
};

const faqs = [
  {
    q: "How do you calculate solar payback?",
    a: "Divide net system cost by annual bill savings. A $12,000 net system saving $150/month ($1,800/year) pays back in 6.7 years. The calculator then compounds savings at your electricity price growth rate for the 25-year picture.",
  },
  {
    q: "What are the 25-year savings on a typical US system?",
    a: "With $1,800 a year of first-year savings and 3% annual price growth, cumulative 25-year savings reach about $65,627 — a net profit near $53,627 on a $12,000 net system.",
  },
  {
    q: "Does electricity price growth really matter that much?",
    a: "Yes — it back-loads the earnings. Year 1 saves $1,800 but year 25 saves about $3,660, so the second half of a panel's life produces most of the profit. The milestone table above shows it year by year.",
  },
  {
    q: "What is a good solar payback period?",
    a: "Under 8 years is strong in high-rate markets, 8–12 years is typical in the US and UK, and anything under the 25-year panel warranty is still technically profitable — shorter is just better.",
  },
  {
    q: "Should I include panel degradation in ROI?",
    a: "Panels lose ~0.5% output a year — over 25 years that shaves a few percent off lifetime savings. The calculator's simple compounding is slightly optimistic; treat it as an upper bound.",
  },
  {
    q: "Does ROI include the inverter replacement?",
    a: "The simple version here does not. Budget one inverter replacement around year 12–15 — a few thousand dollars — against the lifetime profit.",
  },
  {
    q: "Is solar still worth it if I might move house?",
    a: "Often yes: studies consistently show owned solar adds resale value close to its remaining payback value. Just confirm the system is fully owned, not leased.",
  },
  {
    q: "How does financing change the payback math?",
    a: "Loans stretch payback by the interest paid — a $12,000 system at typical solar-loan rates can cost $15,000–$18,000 all-in. Enter the total financed cost as the system cost above.",
  },
];

const milestoneTable = [
  { year: "5", savings: "$9,556" },
  { year: "10", savings: "$20,635" },
  { year: "15", savings: "$33,478" },
  { year: "20", savings: "$48,367" },
  { year: "25", savings: "$65,627" },
];

export default function SolarRoiCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Solar ROI Calculator",
            url: "/calculators/solar-roi-calculator/",
            description:
              "Free solar ROI calculator: payback years, 25-year cumulative savings and net profit from net system cost and monthly savings.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Solar ROI Calculator" },
          ])}
        />
        <div className="kicker">Payback math · price escalation · 25-year view</div>
        <h1 className="h2">Solar ROI calculator</h1>
        <p className="sub">
          Check your solar payback — enter net system cost and monthly
          savings, get payback years, 25-year cumulative savings and profit.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> A $12,000 net
            system saving $150/month pays back in{" "}
            <strong>6.7 years</strong>. With 3% annual price growth, 25-year
            cumulative savings reach <strong>$65,627</strong> — about
            $53,627 of net profit after the system is paid off.
          </p>
        </div>
        <SolarRoiCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Simple payback ignores
          panel degradation (~0.5%/yr) and one inverter replacement —
          treat the 25-year figure as an upper bound.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>How $1,800/year of savings compounds at 3% growth</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Year</th><th>Cumulative savings</th><th>What&apos;s happening</th></tr>
            </thead>
            <tbody>
              {milestoneTable.map((m) => (
                <tr key={m.year}>
                  <td className="num">{m.year}</td>
                  <td className="num">{m.savings}</td>
                  <td>
                    {m.year === "5" && "Approaching payback on a $12,000 system"}
                    {m.year === "10" && "Pure profit territory begins"}
                    {m.year === "15" && "Budget an inverter replacement around here"}
                    {m.year === "20" && "Savings now exceed 4× the system cost"}
                    {m.year === "25" && "End of panel warranty — still generating ~88%"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Price escalation back-loads earnings: year 1 saves $1,800, but
            year 25 saves about $3,660. Switch currency above for your
            market.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Need the net cost first? The{" "}
          <Link href="/calculators/solar-cost-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar cost calculator
          </Link>{" "}
          prices any system size after credits. Sizing the array? The{" "}
          <Link href="/calculators/solar-calculator-usa/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            country calculators
          </Link>{" "}
          size panels from your bill, and the{" "}
          <Link href="/calculators/solar-system-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar system calculator
          </Link>{" "}
          handles batteries and inverters.
        </p>
      </div>
    </section>
  );
}
