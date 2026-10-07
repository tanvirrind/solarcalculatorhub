import Link from "next/link";
import SolarCountryCalculator from "../../../components/SolarCountryCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Pakistan Solar Calculator — Size, Cost & Backup",
  description:
    "Size a Pakistani home solar system from your electricity bill: kW, panel count, cost with net metering, and battery backup for load-shedding. Free tool.",
  keywords: [
    "pakistan solar calculator",
    "solar panel calculator pakistan",
    "solar system price pakistan 2026",
    "net metering pakistan solar",
    "solar load shedding backup pakistan",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/calculators/solar-calculator-pakistan/" },
  openGraph: {
    title: "Pakistan Solar Calculator — Size, Cost & Backup | Solar Calculator Hub",
    description:
      "From your electricity bill to system size, panel count, cost with net metering and load-shedding backup sizing — built for Pakistani rates and sun.",
    url: "https://solarcalculatorhub.com/calculators/solar-calculator-pakistan/",
  },
};

const faqs = [
  {
    q: "How many solar panels do I need for my home in Pakistan?",
    a: "At Rs 60/kWh and 5.4 peak sun hours, a Rs 25,000/month bill needs about a 3.5 kW system — roughly 6 × 585 W panels covering ~12 m² of shadow-free roof.",
  },
  {
    q: "What does solar cost in Pakistan in 2026?",
    a: "On-grid installs run ~Rs 140–160 per watt. A 6.4 kW system lands around Rs 9,65,250 gross — with no national subsidy, the calculator shows net cost equal to gross.",
  },
  {
    q: "What is the payback period for solar in Pakistan?",
    a: "Around 1.8 years at current tariffs. A Rs 25,000/month bill saves Rs 3,00,000 a year against a Rs 5,26,500 net cost — rising grid prices keep shortening payback.",
  },
  {
    q: "How does net metering work in Pakistan?",
    a: "A bi-directional meter tracks what you import and export; surplus units offset your bill at the prevailing rate. A net metering licence from your DISCO is required before the system goes live.",
  },
  {
    q: "Can solar keep my home running during load-shedding?",
    a: "An on-grid system alone shuts down during outages for safety. Add a hybrid inverter and batteries sized for your critical loads — size the bank on the solar system calculator.",
  },
  {
    q: "How much roof space does a Pakistani home system need?",
    a: "About 2 m² per panel including spacing. A 6-panel system needs roughly 12 m² of shadow-free, south-facing roof with no water tanks or structures blocking it.",
  },
  {
    q: "How much CO₂ does home solar avoid in Pakistan?",
    a: "About 0.7 kg per kWh. A 3.5 kW system generating ~5,400 kWh a year offsets roughly 3.8 tons of CO₂ annually.",
  },
  {
    q: "What size inverter do I need for a 3.5 kW system?",
    a: "Match or slightly exceed the panel capacity — a 4 kW hybrid inverter is the common pairing, with 25% headroom for motor start-up surges on fridges and pumps.",
  },
];

const sizeTable = [
  { bill: "Rs 15,000", kw: "2.34", panels: "4", net: "Rs 3,51,000", payback: "1.9 years" },
  { bill: "Rs 25,000", kw: "3.51", panels: "6", net: "Rs 5,26,500", payback: "1.8 years" },
  { bill: "Rs 50,000", kw: "7.02", panels: "12", net: "Rs 10,53,000", payback: "1.8 years" },
];

export default function SolarCalculatorPakistanPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Pakistan Solar Calculator",
            url: "/calculators/solar-calculator-pakistan/",
            description:
              "Free Pakistan solar calculator: system size, panel count, cost with net metering and load-shedding backup sizing, from your electricity bill.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Pakistan Solar Calculator" },
          ])}
        />
        <div className="kicker">Pakistan · net metering · load-shedding backup</div>
        <h1 className="h2">Pakistan solar calculator</h1>
        <p className="sub">
          Size a home solar system from your electricity bill — kW, panel
          count, cost with net metering, and battery backup for
          load-shedding.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> At Rs 60/kWh
            and 5.4 peak sun hours, a Rs 25,000/month bill needs about{" "}
            <strong>3.5 kW — 6 × 585 W panels</strong> on ~12 m². On-grid
            installs run ~Rs 140–160 per watt, landing near{" "}
            <strong>Rs 5,26,500</strong> with a payback around 1.8 years.
          </p>
        </div>
        <SolarCountryCalculator countryKey="pakistan" />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Sized at 78% real-world
          output with the Pakistan sun-hour average — confirm shading, roof
          structure and your DISCO&apos;s net metering rules with a local
          installer before buying.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Typical Pakistani system sizes by monthly bill</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Monthly bill</th><th>System size</th><th>Panels (585 W)</th><th>Net cost</th><th>Payback</th></tr>
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
            Computed at Rs 60/kWh, 5.4 peak sun hours and Rs 150/W installed
            with net metering. Run your exact bill above.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Beating load-shedding needs batteries, not just panels. The{" "}
          <Link href="/calculators/solar-system-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar system calculator
          </Link>{" "}
          sizes your hybrid inverter and battery bank. Comparing quotes? The{" "}
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
