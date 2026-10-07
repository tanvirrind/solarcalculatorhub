import Link from "next/link";
import SolarCostCalculator from "../../../components/SolarCostCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Solar Cost Calculator — Price Any System Size",
  description:
    "Price a solar system in 6 countries: enter kW and cost per watt, add batteries, apply tax credits, and get gross and net cost. Free calculator.",
  keywords: [
    "solar cost calculator",
    "solar panel cost calculator",
    "cost per watt solar 2026",
    "how much does solar cost",
    "solar battery add-on cost",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/calculators/solar-cost-calculator/" },
  openGraph: {
    title: "Solar Cost Calculator — Price Any System Size | Solar Calculator Hub",
    description:
      "Equipment cost, battery add-ons, gross and net after credits — priced in USD, GBP, INR, AUD, PKR or PHP for any system size.",
    url: "https://solarcalculatorhub.com/calculators/solar-cost-calculator/",
  },
};

const faqs = [
  {
    q: "How much does a 6 kW solar system cost?",
    a: "It depends on the market: about $16,913 gross in the US ($11,839 net after the 30% ITC), £8,505 in the UK (0% VAT), ₹3,92,400 in India (₹3,13,920 net after the PM Surya Ghar offset), A$6,468 in Australia (A$4,528 net after STCs), Rs 9,65,250 in Pakistan and ₱4,53,750 in the Philippines.",
  },
  {
    q: "What does cost per watt include?",
    a: "Everything turnkey: panels, inverter, racking, wiring, labor, permits and inspections. That is why quotes per watt are the cleanest way to compare installers — the calculator prices the same way.",
  },
  {
    q: "How much does adding batteries cost?",
    a: "A 10 kWh lithium add-on typically runs a few thousand dollars/euros on top of the panel system — enter the add-on figure and the calculator folds it into gross and net cost.",
  },
  {
    q: "What drives solar cost up or down?",
    a: "Roof complexity (steep, multi-plane, tile), panel and inverter tier, distance from the installer, permitting fees, and whether batteries are included. The equipment itself is now the minority of the installed price in most markets.",
  },
  {
    q: "Why does the actual kW differ from what I typed?",
    a: "Panels come in fixed wattages, so the calculator rounds up to whole panels. Typing 6 kW with 410 W panels gives 15 panels = 6.15 kW — and prices the 6.15 kW you actually buy.",
  },
  {
    q: "Are solar tax credits guaranteed?",
    a: "No — incentive policy changes. The US ITC, UK 0% VAT, Indian subsidies and Australian STCs are all subject to legislation, so verify current rates before signing, not after.",
  },
  {
    q: "Is the cheapest quote always the best?",
    a: "Not if it uses no-name panels with weak warranties or skips proper flashing and monitoring. Compare $/W or local-currency-per-watt across quotes with the same equipment tier — 10–15% spreads are normal.",
  },
  {
    q: "Does the cost calculator include maintenance?",
    a: "No — it prices the install only. Budget occasional panel cleaning and one inverter replacement over 25 years; panels themselves carry 25-year performance warranties.",
  },
];

const costTable = [
  { country: "USA", perWatt: "$2.75", kw6: "$16,913 gross / $11,839 net", note: "30% ITC" },
  { country: "UK", perWatt: "£1.35", kw6: "£8,505", note: "0% VAT, no credit" },
  { country: "India", perWatt: "₹60", kw6: "₹3,92,400 gross / ₹3,13,920 net", note: "20% PM Surya Ghar offset" },
  { country: "Australia", perWatt: "A$1.05", kw6: "A$6,468 gross / A$4,528 net", note: "30% STC reduction" },
  { country: "Pakistan", perWatt: "Rs 150", kw6: "Rs 9,65,250", note: "Net metering, no subsidy" },
  { country: "Philippines", perWatt: "₱75", kw6: "₱4,53,750", note: "DOE net metering, no subsidy" },
];

export default function SolarCostCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Solar Cost Calculator",
            url: "/calculators/solar-cost-calculator/",
            description:
              "Free solar cost calculator: equipment cost, battery add-ons, gross and net after credits in 6 countries.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Solar Cost Calculator" },
          ])}
        />
        <div className="kicker">USD · GBP · INR · AUD · PKR · PHP</div>
        <h1 className="h2">Solar cost calculator</h1>
        <p className="sub">
          Price a solar system in six countries — enter kW and cost per
          watt, add batteries, apply tax credits, and get gross and net
          cost.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> A 6 kW
            residential system runs about <strong>$16,913 gross in the US —
            $11,839 after the 30% ITC</strong>, £8,505 in the UK, and
            A$6,468 in Australia (A$4,528 after STCs). Switch the currency
            above to price your market.
          </p>
        </div>
        <SolarCostCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Installed cost per watt
          varies by roof, equipment tier and installer — get three quotes
          and compare them on a per-watt basis.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>6 kW system cost across markets</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Country</th><th>Installed cost/W</th><th>6 kW system</th><th>Incentive</th></tr>
            </thead>
            <tbody>
              {costTable.map((r) => (
                <tr key={r.country}>
                  <td>{r.country}</td>
                  <td className="num">{r.perWatt}</td>
                  <td className="num">{r.kw6}</td>
                  <td>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Computed with each market&apos;s preset cost per watt, panel
            wattage and incentive. Actual kW rounds up to whole panels, so
            figures reflect 6.05–6.54 kW as bought.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got a net cost? The{" "}
          <Link href="/calculators/solar-roi-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar ROI calculator
          </Link>{" "}
          turns it into a payback timeline. Sizing batteries too? The{" "}
          <Link href="/calculators/solar-system-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar system calculator
          </Link>{" "}
          sizes your inverter and bank, and the{" "}
          <Link href="/calculators/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            country calculators
          </Link>{" "}
          size panels from your bill.
        </p>
      </div>
    </section>
  );
}
