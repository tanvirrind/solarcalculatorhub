import Link from "next/link";
import SolarCountryCalculator from "../../../components/SolarCountryCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "India Solar Calculator — Size, Cost & PM Surya Ghar",
  description:
    "Size a rooftop solar system from your electricity bill: kW, panel count, cost after the PM Surya Ghar subsidy, and payback. Free India solar calculator.",
  keywords: [
    "india solar calculator",
    "rooftop solar calculator india",
    "pm surya ghar subsidy calculator",
    "solar panel cost india per kw",
    "solar payback india",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/calculators/solar-calculator-india/" },
  openGraph: {
    title: "India Solar Calculator — Size, Cost & PM Surya Ghar | Solar Calculator Hub",
    description:
      "From your electricity bill to system size, panel count and cost after the PM Surya Ghar subsidy — sized for Indian rates and 5.3 peak sun hours.",
    url: "https://solarcalculatorhub.com/calculators/solar-calculator-india/",
  },
};

const faqs = [
  {
    q: "How many solar panels do I need for my home in India?",
    a: "At ₹8/kWh and 5.3 peak sun hours, a ₹3,000/month bill needs about a 3.3 kW system — roughly 6 × 545 W panels covering ~12 m² of shadow-free roof.",
  },
  {
    q: "What is the PM Surya Ghar subsidy for rooftop solar?",
    a: "The PM Surya Ghar scheme pays a subsidy directly into your bank account for grid-connected rooftop systems — up to ₹78,000 for 3 kW and above. The calculator applies a 20% effective reduction on gross cost to approximate it.",
  },
  {
    q: "What does rooftop solar cost in India in 2026?",
    a: "About ₹60 per watt installed before subsidy. A 1 kW system runs ~₹60,000; a 3 kW system ~₹1,96,200 gross, ~₹1,56,960 net after the 20% subsidy offset.",
  },
  {
    q: "What is the payback period for solar in India?",
    a: "Around 4.4 years at current rates. A ₹3,000/month bill saves ₹36,000 a year against a ₹1,56,960 net cost — among the fastest paybacks in the world thanks to high sun hours.",
  },
  {
    q: "How much roof area does a 3 kW system need in India?",
    a: "About 12 m² of shadow-free roof for 6 × 545 W panels, at ~2 m² per panel including spacing and maintenance walkways.",
  },
  {
    q: "Can I sell extra solar power to the grid in India?",
    a: "Yes — most states offer net metering or gross metering for rooftop systems up to defined capacity limits. Check your state DISCOM's current net metering cap before oversizing.",
  },
  {
    q: "How much CO₂ does a 3 kW rooftop system avoid?",
    a: "About 0.7 kg per kWh. A 3.3 kW system generating ~4,900 kWh a year offsets roughly 3.5 tons of CO₂ annually.",
  },
  {
    q: "Is on-grid or off-grid better for an Indian home?",
    a: "On-grid with net metering wins on cost where supply is reliable. If your area sees frequent power cuts, pair panels with batteries — size the inverter and bank on the solar system calculator.",
  },
];

const sizeTable = [
  { bill: "₹2,000", kw: "2.18", panels: "4", net: "₹1,04,640", payback: "4.4 years" },
  { bill: "₹3,000", kw: "3.27", panels: "6", net: "₹1,56,960", payback: "4.4 years" },
  { bill: "₹6,000", kw: "6.54", panels: "12", net: "₹3,13,920", payback: "4.4 years" },
];

export default function SolarCalculatorIndiaPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "India Solar Calculator",
            url: "/calculators/solar-calculator-india/",
            description:
              "Free India solar calculator: rooftop system size, panel count and cost after the PM Surya Ghar subsidy, from your electricity bill.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "India Solar Calculator" },
          ])}
        />
        <div className="kicker">India · PM Surya Ghar subsidy · net metering</div>
        <h1 className="h2">India solar calculator</h1>
        <p className="sub">
          Size a rooftop solar system from your electricity bill — kW, panel
          count, cost after the PM Surya Ghar subsidy, and payback.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> At ₹8/kWh and
            5.3 peak sun hours, a ₹3,000/month bill needs about{" "}
            <strong>3.3 kW — 6 × 545 W panels</strong> on ~12 m². Gross cost
            is ~₹1,96,200; after the PM Surya Ghar subsidy it lands near{" "}
            <strong>₹1,56,960 net</strong>, paying back in ~4.4 years.
          </p>
        </div>
        <SolarCountryCalculator countryKey="india" />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Sized at 78% real-world
          output with the Indian sun-hour average and an indicative 20%
          subsidy offset — confirm the current PM Surya Ghar slab rates and
          your DISCOM&apos;s net metering rules with a local vendor.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Typical Indian rooftop sizes by monthly bill</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Monthly bill</th><th>System size</th><th>Panels (545 W)</th><th>Net cost after subsidy</th><th>Payback</th></tr>
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
            Computed at ₹8/kWh, 5.3 peak sun hours, ₹60/W installed and a 20%
            PM Surya Ghar offset. Run your exact bill above.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Need backup during power cuts? The{" "}
          <Link href="/calculators/solar-system-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            solar system calculator
          </Link>{" "}
          sizes your inverter and battery bank. Comparing vendor quotes? The{" "}
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
