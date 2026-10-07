import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { breadcrumbJsonLd } from "../../lib/schema";

export const metadata = {
  title: "Solar Calculators: Size, Cost, ROI & Battery Tools",
  description:
    "Free solar calculators: size systems for 6 countries, price installs, check ROI payback, and size inverters and batteries. All in your browser.",
  keywords: [
    "solar calculators",
    "solar panel calculator",
    "solar cost calculator",
    "solar roi calculator",
    "solar battery calculator",
    "solar system size calculator",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/calculators/" },
  openGraph: {
    title: "Solar Calculators: Size, Cost, ROI & Battery Tools | Solar Calculator Hub",
    description:
      "Nine free solar tools: country sizing for the US, UK, India, Australia, Pakistan and the Philippines, plus cost, ROI and battery calculators.",
    url: "https://solarcalculatorhub.com/calculators/",
  },
};

const byCountry = [
  { name: "US solar calculator", note: "Size, 30% ITC cost & payback", href: "/calculators/solar-calculator-usa/" },
  { name: "UK solar calculator", note: "Size, 0% VAT cost & SEG payments", href: "/calculators/solar-calculator-uk/" },
  { name: "India solar calculator", note: "Size, PM Surya Ghar cost & payback", href: "/calculators/solar-calculator-india/" },
  { name: "Australia solar calculator", note: "Size, STC cost & feed-in tariffs", href: "/calculators/solar-calculator-australia/" },
  { name: "Pakistan solar calculator", note: "Size, net metering & backup sizing", href: "/calculators/solar-calculator-pakistan/" },
  { name: "Philippines solar calculator", note: "Size, Meralco rates & net metering", href: "/calculators/solar-calculator-philippines/" },
];

const byJob = [
  { name: "Solar system calculator", note: "Inverter kW & battery kWh for backup", href: "/calculators/solar-system-calculator/" },
  { name: "Solar cost calculator", note: "Price any system in 6 currencies", href: "/calculators/solar-cost-calculator/" },
  { name: "Solar ROI calculator", note: "Payback years & 25-year savings", href: "/calculators/solar-roi-calculator/" },
];

function CardGrid({ items }) {
  return (
    <div className="grid3">
      {items.map((c) => (
        <Link
          key={c.name}
          href={c.href}
          className="card trade"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>
            <div className="t-name">{c.name}</div>
            <div className="t-note">{c.note}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function CalculatorsHub() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
          ])}
        />
        <div className="kicker">Free solar calculators</div>
        <h1 className="h2">Every solar calculator in one place</h1>
        <p className="sub">
          Size your array from the electric bill, price it after local
          incentives, check the payback, and size batteries for backup —
          every tool is free and runs entirely in your browser.
        </p>

        <h2 className="h2" style={{ fontSize: 26, marginTop: 40, marginBottom: 16 }}>
          Calculators by country
        </h2>
        <CardGrid items={byCountry} />

        <h2 className="h2" style={{ fontSize: 26, marginTop: 44, marginBottom: 16 }}>
          Calculators by job
        </h2>
        <CardGrid items={byJob} />

        <p style={{ color: "var(--muted)", marginTop: 26, maxWidth: 640 }}>
          Start with your bill on a{" "}
          <Link href="/calculators/solar-calculator-usa/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            country calculator
          </Link>
          , price the system with the{" "}
          <Link href="/calculators/solar-cost-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            cost calculator
          </Link>
          , then confirm the investment with the{" "}
          <Link href="/calculators/solar-roi-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            ROI calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
