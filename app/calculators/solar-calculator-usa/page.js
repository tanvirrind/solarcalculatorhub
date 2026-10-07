import Link from "next/link";
import SolarCountryCalculator from "../../../components/SolarCountryCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "US Solar Calculator — Size, Cost & 30% ITC Savings",
  description:
    "Size a US home solar system from your electric bill: kW, panel count, roof area, cost after the 30% tax credit, and payback. Free calculator.",
  keywords: [
    "us solar calculator",
    "solar panel calculator usa",
    "how many solar panels do i need",
    "solar cost calculator 30% tax credit",
    "solar payback calculator usa",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/calculators/solar-calculator-usa/" },
  openGraph: {
    title: "US Solar Calculator — Size, Cost & 30% ITC Savings | Solar Calculator Hub",
    description:
      "From your electric bill to system size, panel count, cost after the 30% federal tax credit, and payback — sized for US rates and sun.",
    url: "https://solarcalculatorhub.com/calculators/solar-calculator-usa/",
  },
};

const faqs = [
  {
    q: "How many solar panels do I need in the US?",
    a: "It follows your bill. At the national average of $0.17/kWh and 4.2 peak sun hours, a $200/month bill needs about a 12.3 kW system — roughly 30 × 410 W panels covering ~60 m² of roof.",
  },
  {
    q: "What does the 30% federal solar tax credit do to the cost?",
    a: "The Investment Tax Credit (ITC) cuts 30% off the gross system cost as a credit against your federal taxes. On a $33,825 gross 12.3 kW system, that is a $10,148 credit, leaving a net cost of about $23,678.",
  },
  {
    q: "What is the average payback period for US residential solar?",
    a: "Around 9–10 years at current national averages — a $200/month bill offsets $2,400 a year against a $23,678 net cost, paying back in about 9.9 years. With 3% annual rate growth, 25-year savings reach roughly $87,500.",
  },
  {
    q: "How much does US residential solar cost per watt in 2026?",
    a: "Installed cost averages $2.50–$3.50 per watt nationally. The calculator defaults to $2.75/W — a 6 kW system lands around $16,900 gross before the credit.",
  },
  {
    q: "Does net metering still exist in the US?",
    a: "Yes in most states, but the rules are thinning. California's NEM 3.0 and several other states now credit exports well below the retail rate, which makes batteries more attractive — size them on the solar system calculator.",
  },
  {
    q: "How much roof space does a US solar system need?",
    a: "About 2 m² per residential panel including spacing. A typical 30-panel system needs roughly 60 m² (~645 sq ft) of unshaded, south-facing (or east/west) roof.",
  },
  {
    q: "How much CO₂ does a home solar system avoid?",
    a: "About 0.7 kg per kWh generated. A 12.3 kW system producing ~14,700 kWh a year offsets roughly 10.3 tons of CO₂ annually — like taking two cars off the road.",
  },
  {
    q: "Is solar worth it if my bill is only $100 a month?",
    a: "The math scales: a $100 bill needs about 6.2 kW (15 panels) with a net cost near $11,800 after the credit — the payback stays around 9.9 years. Bills under ~$75 a month are the marginal zone.",
  },
];

const sizeTable = [
  { bill: "$100", kw: "6.15", panels: "15", net: "$11,839", payback: "9.9 years" },
  { bill: "$200", kw: "12.30", panels: "30", net: "$23,678", payback: "9.9 years" },
  { bill: "$300", kw: "18.04", panels: "44", net: "$34,727", payback: "9.6 years" },
];

export default function SolarCalculatorUsaPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "US Solar Calculator",
            url: "/calculators/solar-calculator-usa/",
            description:
              "Free US solar calculator: system size, panel count, roof area and cost after the 30% federal tax credit, from your electric bill.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "US Solar Calculator" },
          ])}
        />
        <div className="kicker">USA · 30% federal tax credit · net metering</div>
        <h1 className="h2">US solar calculator</h1>
        <p className="sub">
          Size a home solar system from your electric bill — kW, panel count,
          roof area, cost after the 30% federal tax credit, and payback.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> At $0.17/kWh
            and 4.2 peak sun hours, a $200/month bill needs about{" "}
            <strong>12.3 kW — 30 × 410 W panels</strong> covering ~60 m².
            Gross cost is ~$33,825; the 30% ITC credit brings it to{" "}
            <strong>$23,678 net</strong>, offsetting $2,400 a year for a ~9.9
            year payback.
          </p>
        </div>
        <SolarCountryCalculator countryKey="usa" />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Sized at 78% real-world
          output with the national sun-hour average — confirm shading, roof
          angle and your utility&apos;s net metering rules with a local
          installer before buying.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Typical US system sizes by monthly bill</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Monthly bill</th><th>System size</th><th>Panels (410 W)</th><th>Net cost after 30% ITC</th><th>Payback</th></tr>
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
            Computed at $0.17/kWh, 4.2 peak sun hours, $2.75/W installed and
            the 30% ITC. Run your exact bill above.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Adding batteries for backup or NEM 3.0 export rules? The{" "}
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
