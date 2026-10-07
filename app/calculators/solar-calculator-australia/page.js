import Link from "next/link";
import SolarCountryCalculator from "../../../components/SolarCountryCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Australia Solar Calculator — Size, STCs & Payback",
  description:
    "Size an Australian home solar system from your power bill: kW, panel count, cost after STCs, and payback. Free Australia solar calculator.",
  keywords: [
    "australia solar calculator",
    "solar panel calculator australia",
    "stc solar rebate calculator",
    "solar cost per watt australia",
    "solar payback australia",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/calculators/solar-calculator-australia/" },
  openGraph: {
    title: "Australia Solar Calculator — Size, STCs & Payback | Solar Calculator Hub",
    description:
      "From your power bill to system size, panel count and cost after STCs — sized for Australian rates, 4.8 peak sun hours and feed-in tariffs.",
    url: "https://solarcalculatorhub.com/calculators/solar-calculator-australia/",
  },
};

const faqs = [
  {
    q: "How many solar panels do I need in Australia?",
    a: "At A$0.33/kWh and 4.8 peak sun hours, an A$250/month bill needs about a 7 kW system — roughly 16 × 440 W panels covering ~32 m² of roof.",
  },
  {
    q: "What are STCs and how much do they save?",
    a: "Small-scale Technology Certificates are a federal incentive created at install time — typically worth ~30% of the system price. On a 7 kW system costing A$7,392 gross, STCs cut about A$2,218, leaving A$5,174 net.",
  },
  {
    q: "How much does solar cost in Australia in 2026?",
    a: "About A$1.05 per watt installed before STCs — among the cheapest in the world. A 6.6 kW system runs roughly A$6,900 gross, A$4,830 net after STCs.",
  },
  {
    q: "What is the payback period for Australian solar?",
    a: "Often under 2 years on paper — an A$250/month bill saves A$3,000 a year against a A$5,174 net cost, paying back in ~1.7 years. Real bills vary with feed-in tariffs and self-consumption.",
  },
  {
    q: "What is a feed-in tariff in Australia?",
    a: "What your retailer pays you per kWh exported — typically 5–12 cents depending on state and retailer. Higher tariffs favour bigger systems; low ones favour batteries.",
  },
  {
    q: "How much roof space does Australian solar need?",
    a: "About 2 m² per panel including spacing. A 16-panel system needs roughly 32 m² of unshaded, north-facing (or east/west) roof.",
  },
  {
    q: "How much CO₂ does Australian home solar avoid?",
    a: "About 0.7 kg per kWh. A 7 kW system generating ~9,600 kWh a year offsets roughly 6.7 tons of CO₂ annually.",
  },
  {
    q: "Should I add a battery to my Australian solar system?",
    a: "If your feed-in tariff is under ~8c and you use power in the evening, batteries often beat exporting cheap and buying at 33c. Size the bank on the solar system calculator.",
  },
];

const sizeTable = [
  { bill: "A$150", kw: "4.40", panels: "10", net: "A$3,234", payback: "1.8 years" },
  { bill: "A$250", kw: "7.04", panels: "16", net: "A$5,174", payback: "1.7 years" },
  { bill: "A$400", kw: "11.00", panels: "25", net: "A$8,085", payback: "1.7 years" },
];

export default function SolarCalculatorAustraliaPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Australia Solar Calculator",
            url: "/calculators/solar-calculator-australia/",
            description:
              "Free Australia solar calculator: system size, panel count, cost after STCs and payback, from your power bill.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Australia Solar Calculator" },
          ])}
        />
        <div className="kicker">Australia · STC rebate · feed-in tariffs</div>
        <h1 className="h2">Australia solar calculator</h1>
        <p className="sub">
          Size a home solar system from your power bill — kW, panel count,
          cost after STCs, and payback with Australian feed-in tariffs.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> At A$0.33/kWh
            and 4.8 peak sun hours, an A$250/month bill needs about{" "}
            <strong>7 kW — 16 × 440 W panels</strong> covering ~32 m². STCs
            cut ~30% off the sticker price, landing the net cost near{" "}
            <strong>A$5,174</strong> with a payback around 1.7 years.
          </p>
        </div>
        <SolarCountryCalculator countryKey="australia" />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Sized at 78% real-world
          output with the Australian sun-hour average — confirm shading,
          roof orientation and your retailer&apos;s feed-in tariff with a
          local installer before buying.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Typical Australian system sizes by monthly bill</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Monthly bill</th><th>System size</th><th>Panels (440 W)</th><th>Net cost after STCs</th><th>Payback</th></tr>
            </thead>
            <tbody>
              {sizeTable.map((r) => (
                <tr key={r.bill}>
                  <td className="num">{r.bill}</td>
                  <td className="num">{r.kw} kW</td>
                  <td className="num">{r.panels}</td>
                  <td className="num">{r.net}</td>
                  <td className="num">{r.payback}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            Computed at A$0.33/kWh, 4.8 peak sun hours, A$1.05/W installed
            and a 30% STC reduction. Run your exact bill above.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Batteries to beat low feed-in tariffs? The{" "}
          <Link href="/calculators/solar-system-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar system calculator
          </Link>{" "}
          sizes your inverter and battery bank. Comparing quotes? The{" "}
          <Link href="/calculators/solar-cost-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar cost calculator
          </Link>{" "}
          breaks down cost per watt, and the{" "}
          <Link href="/calculators/solar-roi-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar ROI calculator
          </Link>{" "}
          maps your payback year by year.
        </p>
      </div>
    </section>
  );
}
