import Link from "next/link";
import SolarSystemCalculator from "../../../components/SolarSystemCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Solar System Calculator — Inverter & Battery Sizer",
  description:
    "Size the inverter and battery bank for backup power: enter your backup load and outage hours, get kW, kWh storage and module count. Free calculator.",
  keywords: [
    "solar system calculator",
    "solar inverter size calculator",
    "solar battery size calculator",
    "off grid solar system sizing",
    "hybrid inverter battery calculator",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/calculators/solar-system-calculator/" },
  openGraph: {
    title: "Solar System Calculator — Inverter & Battery Sizer | Solar Calculator Hub",
    description:
      "From backup load and outage hours to inverter kW, battery kWh and module count — sized for lithium or lead-acid batteries.",
    url: "https://solarcalculatorhub.com/calculators/solar-system-calculator/",
  },
};

const faqs = [
  {
    q: "How do I size an inverter for my home?",
    a: "Add up the watts of everything you want backed up, then add 25% headroom for motor start-up surges. A 1,500 W backup load needs about a 1.9 kW inverter — round up to the nearest standard size, typically 2 kW or 3 kW.",
  },
  {
    q: "How many kWh of battery do I need?",
    a: "Multiply backup watts by outage hours, then divide by usable depth and inverter efficiency. A 1,500 W load for 6 hours needs about 10.5 kWh of lithium storage (90% usable) or 18.9 kWh of lead-acid (50% usable).",
  },
  {
    q: "Lithium or lead-acid batteries for solar backup?",
    a: "Lithium (LiFePO₄) costs more upfront but gives 90% usable depth and thousands of cycles. Lead-acid is cheap but only 50% usable — discharging below half destroys its life — so you need nearly double the bank for the same backup.",
  },
  {
    q: "What is the difference between grid-tie, hybrid and off-grid systems?",
    a: "Grid-tie has panels plus a grid inverter and no batteries — it shuts down in outages. Hybrid adds batteries and keeps working. Off-grid has no utility connection at all and needs days of battery autonomy plus a backup generator for cloudy stretches.",
  },
  {
    q: "How many 5.12 kWh battery modules do I need?",
    a: "Divide your target storage by 5.12 and round up. The default 1,500 W / 6 hour example needs ~10.5 kWh of lithium storage, which is 3 × 5.12 kWh modules.",
  },
  {
    q: "What are days of autonomy?",
    a: "How many cloudy days your battery bank covers with no solar input. One day suits grid-tied backup; true off-grid setups use 2–3 days plus a generator.",
  },
  {
    q: "Can I run an air conditioner on a solar backup system?",
    a: "Yes, but it dominates sizing. A 1.5-ton AC draws ~1,500–1,800 W running with a large start-up surge — budget its watts honestly in the load input or it will trip the inverter.",
  },
  {
    q: "How many solar panels recharge this battery bank?",
    a: "As a rule of thumb, size the array at 2–5 kW per 10 kWh of battery so the bank refills on a normal solar day. The country calculators size panels from your electricity bill.",
  },
];

const batteryTable = [
  { type: "Lithium (LiFePO₄)", usable: "90%", cycles: "3,000–6,000", best: "Daily cycling, backup, off-grid" },
  { type: "Lead-acid / AGM", usable: "50%", cycles: "500–1,200", best: "Occasional outages, tight budgets" },
  { type: "Tubular lead-acid", usable: "50%", cycles: "1,000–1,500", best: "Common in South Asia for inverter backup" },
];

export default function SolarSystemCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Solar System Size Calculator",
            url: "/calculators/solar-system-calculator/",
            description:
              "Free solar system calculator: inverter kW, battery kWh and module count from your backup load and outage hours.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Solar System Calculator" },
          ])}
        />
        <div className="kicker">Hybrid · off-grid · grid-tie with backup</div>
        <h1 className="h2">Solar system calculator</h1>
        <p className="sub">
          Size the inverter and battery bank for backup power — enter your
          backup load and outage hours, get kW, kWh storage and module
          count.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> A 1,500 W
            backup load for 6 hours a day needs about a{" "}
            <strong>1.9 kW inverter</strong> (25% headroom for surges) and{" "}
            <strong>10.5 kWh of lithium storage</strong> — that&apos;s 3 ×
            5.12 kWh modules. The same backup in lead-acid needs ~18.9 kWh
            of bank.
          </p>
        </div>
        <SolarSystemCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Real loads vary — measure
          your critical appliances with a kill-a-watt meter before buying,
          and have an installer confirm wire gauges and breaker sizing.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Battery types at a glance</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Battery type</th><th>Usable depth</th><th>Typical cycles</th><th>Best for</th></tr>
            </thead>
            <tbody>
              {batteryTable.map((b) => (
                <tr key={b.type}>
                  <td>{b.type}</td>
                  <td className="num">{b.usable}</td>
                  <td className="num">{b.cycles}</td>
                  <td>{b.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Usable depth is the fraction of nameplate capacity you can
            actually draw. The calculator already applies it, so its kWh
            output is the bank size to buy, not the energy you use.
          </p>
        </div>

        <div className="card" style={{ marginTop: 20, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Grid-tie vs hybrid vs off-grid</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Setup</th><th>Batteries</th><th>Works in outage</th><th>Best for</th></tr>
            </thead>
            <tbody>
              <tr><td>Grid-tie</td><td className="num">None</td><td className="num">No</td><td>Cutting the bill where the grid is reliable</td></tr>
              <tr><td>Hybrid</td><td className="num">Yes</td><td className="num">Yes</td><td>Savings plus load-shedding / outage backup</td></tr>
              <tr><td>Off-grid</td><td className="num">Yes, 2–3 days</td><td className="num">Yes</td><td>No grid access at all</td></tr>
            </tbody>
          </table>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Sizing the panels too? The{" "}
          <Link href="/calculators/solar-calculator-usa/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            country solar calculators
          </Link>{" "}
          size the array from your bill. Then the{" "}
          <Link href="/calculators/solar-cost-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar cost calculator
          </Link>{" "}
          prices the whole job, and the{" "}
          <Link href="/calculators/solar-roi-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar ROI calculator
          </Link>{" "}
          checks whether it pays back.
        </p>
      </div>
    </section>
  );
}
