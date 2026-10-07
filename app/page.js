import Link from "next/link";
import { faqJsonLd } from "../components/Faq";
import JsonLd from "../components/JsonLd";
import { posts } from "../lib/posts";

export const metadata = {
  title: "Solar Calculator Hub: Free Solar Sizing, Cost & ROI Tools",
  description:
    "Free solar calculators for sizing, costs, ROI, payback and battery backup — for the USA, UK, India, Australia, Pakistan and the Philippines.",
  keywords: [
    "solar calculator",
    "solar panel cost calculator",
    "solar system calculator",
    "solar roi calculator",
    "solar payback calculator",
    "solar battery calculator",
  ],
  alternates: { canonical: "https://solarcalculatorhub.com/" },
  openGraph: {
    title: "Solar Calculator Hub: Free Solar Sizing, Cost & ROI Tools | Solar Calculator Hub",
    description:
      "Size your system, estimate installation cost, payback and battery backup — free solar calculators for 6 countries.",
    url: "https://solarcalculatorhub.com/",
  },
};

const faqs = [
  {
    q: "How do I calculate what size solar system I need?",
    a: "Divide your monthly electricity bill by your rate per kWh to get monthly usage, divide by 30 for daily kWh, then divide by your area's peak sun hours times 0.78 (system losses). A US home with a $150 bill at $0.17/kWh uses ~29 kWh/day and needs roughly a 9 kW system. The country calculators above do this math for you.",
  },
  {
    q: "How much does a solar panel system cost in 2026?",
    a: "Installed residential prices run about $2.50–$3.50 per watt in the US (a 6 kW system ≈ $15,000–$21,000 before the 30% federal tax credit), £1.20–£1.50/W in the UK, ~₹60,000/kW in India before subsidy, ~A$1.00–$1.10/W in Australia, ~Rs 140–160/W in Pakistan and ~₱70–90/W in the Philippines.",
  },
  {
    q: "What is the payback period for home solar?",
    a: "Most residential systems pay back in 4–8 years depending on electricity rates, sun hours and incentives. High-rate regions (UK, Australia, Philippines) pay back fastest. After payback, the electricity is essentially free for the remaining 15–20 years of panel life.",
  },
  {
    q: "How many solar panels do I need?",
    a: "Divide your target system size in watts by the panel wattage. A 6,000 W system with 410 W panels needs 15 panels (6,000 / 410 = 14.6, rounded up). Each panel needs about 2 m² of roof space including spacing.",
  },
  {
    q: "Do I need batteries with solar panels?",
    a: "Not necessarily. Grid-tied systems without batteries are cheapest and use net metering to credit surplus power. Add batteries if you face outages, have time-of-use rates, or want backup power — the solar system calculator sizes both the inverter and the battery bank.",
  },
  {
    q: "How long do solar panels last?",
    a: "Most panels carry a 25-year performance warranty and degrade about 0.5% per year, still producing ~87% of rated output at year 25. Inverters typically last 10–15 years; lithium batteries 10+ years.",
  },
  {
    q: "Is solar worth it if my roof is shaded?",
    a: "Heavy shading can cut output 25–50%, which stretches payback. A site survey with a shade analysis tells you the real number — if one roof face is clear, panels go there. Ground mounts are an option when the roof doesn't cooperate.",
  },
  {
    q: "What is net metering?",
    a: "Net metering credits you for surplus electricity your panels send to the grid, offsetting what you draw at night. Policies differ by country and utility — some pay full retail rate, others a lower export rate — and the terms directly affect your payback period.",
  },
];

const features = [
  {
    title: "Accurate calculations",
    text: "Sizing math based on your location's peak sun hours, electricity rate and real system losses — not generic rules of thumb.",
  },
  {
    title: "Savings estimates",
    text: "Monthly and annual savings, 25-year projections with price escalation, payback period and net profit on every estimate.",
  },
  {
    title: "Global data",
    text: "Localized calculators for the USA, UK, India, Australia, Pakistan and the Philippines — local currency, rates and incentives.",
  },
  {
    title: "Off-grid tools",
    text: "Planning an RV, cabin or backup setup? Size your inverter and battery bank for the outage hours you actually need.",
  },
];

const calcs = [
  { name: "Solar calculator — USA", note: "Sizing, cost & savings in $", href: "/calculators/solar-calculator-usa/" },
  { name: "Solar calculator — UK", note: "Sizing, cost & savings in £", href: "/calculators/solar-calculator-uk/" },
  { name: "Solar calculator — India", note: "Sizing, subsidy & savings in ₹", href: "/calculators/solar-calculator-india/" },
  { name: "Solar calculator — Australia", note: "Sizing, STCs & savings in A$", href: "/calculators/solar-calculator-australia/" },
  { name: "Solar calculator — Pakistan", note: "Sizing, cost & savings in Rs", href: "/calculators/solar-calculator-pakistan/" },
  { name: "Solar calculator — Philippines", note: "Sizing, cost & savings in ₱", href: "/calculators/solar-calculator-philippines/" },
  { name: "Solar system calculator", note: "Inverter + battery sizing for backup", href: "/calculators/solar-system-calculator/" },
  { name: "Solar cost calculator", note: "Gross vs net installation cost", href: "/calculators/solar-cost-calculator/" },
  { name: "Solar ROI calculator", note: "Payback, 25-year savings & profit", href: "/calculators/solar-roi-calculator/" },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="kicker" style={{ color: "var(--accent)" }}>
            Free solar calculators
          </div>
          <h1>
            Solar <span className="hl">Calculator</span> Hub
          </h1>
          <p className="lead">
            Accurately estimate your solar panel needs, installation costs
            and potential savings. Plan your energy independence today —
            free, no signup.
          </p>
          <div className="hero-cta">
            <Link href="/calculators/solar-system-calculator/" className="btn btn-primary">
              Size my system
            </Link>
            <Link href="/calculators/" className="btn btn-ghost">
              All 9 calculators
            </Link>
          </div>
          <div className="hero-proof">
            <span>free forever</span>
            <span>no account needed</span>
            <span>6 countries localized</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <JsonLd data={faqJsonLd(faqs)} />
          <div className="kicker">Why this site</div>
          <h2 className="h2">Do the math before you sign</h2>
          <p className="sub">
            Solar quotes vary wildly. These tools give you an independent
            baseline — so you know a fair price when you see one.
          </p>
          <div className="grid3">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="calculate">
        <div className="wrap">
          <div className="kicker">Calculators</div>
          <h2 className="h2">Calculate your solar needs</h2>
          <p className="sub">
            Select a calculator below to get started with your solar journey.
          </p>
          <div className="grid3">
            {calcs.map((c) => (
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="kicker">From the blog</div>
          <h2 className="h2">Guides, prices & explainers</h2>
          <p className="sub">
            Practical guides and expert advice to help you navigate the
            transition to renewable energy with clarity and confidence.
          </p>
          <div className="grid3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}/`}
                className="card trade"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div>
                  <div className="t-note" style={{ textTransform: "uppercase", fontSize: 12, letterSpacing: ".08em" }}>{p.category}</div>
                  <div className="t-name" style={{ fontSize: 19 }}>{p.title}</div>
                  <div className="t-note">{p.note}</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/blog/" className="btn btn-ghost">
              All articles
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="kicker">About</div>
          <h2 className="h2">Independent solar math</h2>
          <p className="sub" style={{ maxWidth: 720 }}>
            Solar Calculator Hub is an independent resource providing
            transparent data for renewable energy. Our mission is to help you
            understand the math behind solar energy — from system sizing to
            ROI — so you can make an informed investment for your home or
            business. We don&apos;t sell panels; we just do the arithmetic.
          </p>
          <div style={{ marginTop: 20 }}>
            <Link href="/about/" className="btn btn-ghost">
              More about us
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap faq">
          <div className="kicker">FAQ</div>
          <h2 className="h2">Straight answers</h2>
          <div style={{ marginTop: 24, maxWidth: 780 }}>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
