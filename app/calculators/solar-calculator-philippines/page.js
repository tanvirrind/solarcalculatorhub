import Link from "next/link";
import SolarCountryCalculator from "../../../components/SolarCountryCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Philippines Solar Calculator — Size, Cost & Payback",
  description:
    "Size a Philippine home solar system from your Meralco bill: kW, panel count, cost with net metering, and payback. Free Philippines solar calculator.",
  keywords: [
    "philippines solar calculator",
    "solar panel calculator philippines",
    "solar system price philippines 2026",
    "meralco net metering solar",
    "solar payback philippines",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/calculators/solar-calculator-philippines/" },
  openGraph: {
    title: "Philippines Solar Calculator — Size, Cost & Payback | Solar Calculator Hub",
    description:
      "From your Meralco bill to system size, panel count, cost with net metering and payback — sized for Philippine rates and 4.7 peak sun hours.",
    url: "https://solarcalculatorhub.com/calculators/solar-calculator-philippines/",
  },
};

const faqs = [
  {
    q: "How many solar panels do I need in the Philippines?",
    a: "At ₱12/kWh and 4.7 peak sun hours, an ₱8,000/month bill needs about a 6.6 kW system — roughly 12 × 550 W panels covering ~24 m² of roof.",
  },
  {
    q: "What does residential solar cost in the Philippines in 2026?",
    a: "Residential installs run ~₱70–90 per watt. A 6 kW system lands around ₱4,53,750 gross at the ₱75/W default — with no national subsidy, net cost equals gross.",
  },
  {
    q: "What is the payback period for solar in the Philippines?",
    a: "Around 5 years at Meralco rates. An ₱8,000/month bill saves ₱96,000 a year against a ₱4,95,000 net cost, paying back in ~5.2 years — high local rates do the heavy lifting.",
  },
  {
    q: "How does net metering work in the Philippines?",
    a: "Under the DOE's distributed energy resources rules, qualified end-users can export surplus power and get credited against their bill. Apply through your distribution utility before commissioning.",
  },
  {
    q: "How much roof space does a Philippine home system need?",
    a: "About 2 m² per panel including spacing. A 12-panel system needs roughly 24 m² of unshaded roof — check typhoon-rated mounting and roof anchoring with your installer.",
  },
  {
    q: "How much CO₂ does Philippine home solar avoid?",
    a: "About 0.7 kg per kWh. A 6.6 kW system generating ~8,800 kWh a year offsets roughly 6.2 tons of CO₂ annually.",
  },
  {
    q: "Is solar worth it with Meralco's high rates?",
    a: "Those high rates are exactly why the math works: at ₱12/kWh, every self-consumed kWh is worth double what it is in most markets, which compresses payback to ~5 years even without subsidies.",
  },
  {
    q: "Do I need batteries in the Philippines?",
    a: "Not for savings, but yes for typhoon-season outages — on-grid systems shut down when the grid fails. Size a hybrid inverter and battery bank on the solar system calculator.",
  },
];

const sizeTable = [
  { bill: "₱5,000", kw: "3.85", panels: "7", net: "₱2,88,750", payback: "4.8 years" },
  { bill: "₱8,000", kw: "6.60", panels: "12", net: "₱4,95,000", payback: "5.2 years" },
  { bill: "₱12,000", kw: "9.35", panels: "17", net: "₱7,01,250", payback: "4.9 years" },
];

export default function SolarCalculatorPhilippinesPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Philippines Solar Calculator",
            url: "/calculators/solar-calculator-philippines/",
            description:
              "Free Philippines solar calculator: system size, panel count, cost with net metering and payback, from your Meralco bill.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Philippines Solar Calculator" },
          ])}
        />
        <div className="kicker">Philippines · Meralco rates · DOE net metering</div>
        <h1 className="h2">Philippines solar calculator</h1>
        <p className="sub">
          Size a home solar system from your Meralco bill — kW, panel count,
          cost with net metering, and payback.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> At ₱12/kWh and
            4.7 peak sun hours, an ₱8,000/month bill needs about{" "}
            <strong>6.6 kW — 12 × 550 W panels</strong> on ~24 m². Installs
            run ~₱70–90 per watt, landing the system near{" "}
            <strong>₱4,95,000</strong> with a payback around 5.2 years.
          </p>
        </div>
        <SolarCountryCalculator countryKey="philippines" />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Sized at 78% real-world
          output with the Philippine sun-hour average — confirm shading,
          typhoon-rated mounting and your utility&apos;s net metering
          process with a local installer before buying.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Typical Philippine system sizes by monthly bill</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Monthly bill</th><th>System size</th><th>Panels (550 W)</th><th>Net cost</th><th>Payback</th></tr>
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
            Computed at ₱12/kWh, 4.7 peak sun hours and ₱75/W installed with
            DOE net metering. Run your exact bill above.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Riding through typhoon outages needs batteries. The{" "}
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
