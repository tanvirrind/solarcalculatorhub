import Link from "next/link";
import SolarCountryCalculator from "../../../components/SolarCountryCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "UK Solar Calculator — Size, Cost & SEG Payments",
  description:
    "Size a UK home solar system from your electricity bill: kW, panel count, roof area, cost with 0% VAT, and payback with SEG export payments. Free tool.",
  keywords: [
    "uk solar calculator",
    "solar panel calculator uk",
    "how many solar panels do i need uk",
    "solar cost uk 0% vat",
    "seg export payments solar uk",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/calculators/solar-calculator-uk/" },
  openGraph: {
    title: "UK Solar Calculator — Size, Cost & SEG Payments | Solar Calculator Hub",
    description:
      "From your electricity bill to system size, panel count and cost with 0% VAT — sized for UK rates, 2.9 peak sun hours and SEG export payments.",
    url: "https://solarcalculatorhub.com/calculators/solar-calculator-uk/",
  },
};

const faqs = [
  {
    q: "How many solar panels do I need in the UK?",
    a: "At £0.24/kWh and 2.9 peak sun hours, a £150/month bill needs about a 9.2 kW system — roughly 22 × 420 W panels covering ~44 m² of roof.",
  },
  {
    q: "How much does solar cost in the UK in 2026?",
    a: "Residential installs run about £1.35 per watt. A typical 4 kW system costs £5,000–£6,000 installed, and all residential installs currently carry 0% VAT — the discount is already in installer quotes.",
  },
  {
    q: "What is the Smart Export Guarantee (SEG)?",
    a: "Licensed suppliers must pay you for surplus electricity you export. Rates vary by supplier and tariff — shop SEG rates alongside your system quote, since strong export payments shorten payback on oversized systems.",
  },
  {
    q: "What is the payback period for UK solar?",
    a: "Around 7 years at current rates. A £150/month bill offsets £1,800 a year against a £12,474 net cost, paying back in about 6.9 years — with 25-year savings near £65,600 at 3% annual price growth.",
  },
  {
    q: "Does the UK have enough sun for solar panels?",
    a: "Yes — panels run on daylight, not heat. Southern England averages about 2.9 peak sun hours; a 9.2 kW array still generates roughly 7,600 kWh a year there.",
  },
  {
    q: "How much roof space does UK solar need?",
    a: "About 2 m² per panel including spacing. A 22-panel system needs roughly 44 m² of unshaded roof — south-facing is ideal, east/west splits work well too.",
  },
  {
    q: "How much CO₂ does UK home solar avoid?",
    a: "About 0.7 kg per kWh. A 9.2 kW system generating ~7,600 kWh a year offsets roughly 5.3 tons of CO₂ annually.",
  },
  {
    q: "Should I add a battery in the UK?",
    a: "It depends on your SEG rate. If export payments are low, a battery that stores daytime surplus for evening use can beat selling cheap and buying dear — size the bank on the solar system calculator.",
  },
];

const sizeTable = [
  { bill: "£100", kw: "6.30", panels: "15", net: "£8,505", payback: "7.1 years" },
  { bill: "£150", kw: "9.24", panels: "22", net: "£12,474", payback: "6.9 years" },
  { bill: "£250", kw: "15.54", panels: "37", net: "£20,979", payback: "7.0 years" },
];

export default function SolarCalculatorUkPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "UK Solar Calculator",
            url: "/calculators/solar-calculator-uk/",
            description:
              "Free UK solar calculator: system size, panel count, roof area, cost with 0% VAT and payback with SEG export payments, from your electricity bill.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "UK Solar Calculator" },
          ])}
        />
        <div className="kicker">UK · 0% VAT · SEG export payments</div>
        <h1 className="h2">UK solar calculator</h1>
        <p className="sub">
          Size a home solar system from your electricity bill — kW, panel
          count, roof area, cost with 0% VAT, and payback with SEG export
          payments.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> At £0.24/kWh
            and 2.9 peak sun hours, a £150/month bill needs about{" "}
            <strong>9.2 kW — 22 × 420 W panels</strong> covering ~44 m². A 4
            kW system typically costs <strong>£5,000–£6,000 installed with 0%
            VAT</strong>, and the 9.2 kW system pays back in ~6.9 years.
          </p>
        </div>
        <SolarCountryCalculator countryKey="uk" />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Sized at 78% real-world
          output with the UK sun-hour average — confirm shading, roof
          orientation and your supplier&apos;s SEG tariff with a local
          installer before buying.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Typical UK system sizes by monthly bill</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Monthly bill</th><th>System size</th><th>Panels (420 W)</th><th>Net cost (0% VAT)</th><th>Payback</th></tr>
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
            Computed at £0.24/kWh, 2.9 peak sun hours and £1.35/W installed
            with 0% VAT. Run your exact bill above.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Want batteries to keep your SEG exports? The{" "}
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
