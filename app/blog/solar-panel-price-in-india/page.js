import BlogArticle from "../../../components/BlogArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Solar Panel Price in India 2026: Cost & Subsidy",
  description:
    "2026 solar panel prices in India: 1–10 kW system costs, PM Surya Ghar subsidy slabs, net cost after subsidy, and Tata vs Adani vs Waaree.",
  keywords: [
    "solar panel price in india",
    "solar panel price india 2026",
    "1kw solar system price india",
    "pm surya ghar subsidy",
  ],
  alternates: {
    canonical: "https://solarcalculatorhub.com/blog/solar-panel-price-in-india/",
  },
  openGraph: {
    title: "Solar Panel Price in India 2026: Cost & Subsidy | Solar Calculator Hub",
    description:
      "System costs by size, PM Surya Ghar subsidy, net price after subsidy, and the big three Indian panel brands compared.",
    url: "https://solarcalculatorhub.com/blog/solar-panel-price-in-india/",
  },
};

const faqs = [
  {
    q: "What is the 1 kW solar system price in India in 2026?",
    a: "A 1 kW on-grid system typically costs ₹60,000–75,000 installed. After the PM Surya Ghar subsidy of ₹30,000, the net cost drops to roughly ₹30,000–45,000.",
  },
  {
    q: "How much is the PM Surya Ghar subsidy?",
    a: "₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and above. The subsidy is credited directly to the beneficiary's bank account after installation and inspection.",
  },
  {
    q: "Which is better: Tata, Adani or Waaree solar panels?",
    a: "All three are strong domestic manufacturers. Tata Power Solar leads on service network and warranty support, Adani (Mundra Solar) offers competitive pricing on high-wattage modules, and Waaree is the largest manufacturer by capacity with wide availability. Compare efficiency, warranty terms, and local dealer support rather than brand name alone.",
  },
  {
    q: "Is the subsidy available for hybrid systems with batteries?",
    a: "The PM Surya Ghar subsidy applies to on-grid rooftop systems; batteries are an extra cost on top. If you want backup power, add battery costs separately to your budget.",
  },
  {
    q: "How long does the subsidy take to arrive?",
    a: "Typically 30–90 days after the installation is inspected and net metering is approved, credited directly to your bank account. Your vendor usually handles the application paperwork.",
  },
  {
    q: "How much rooftop space does a 5 kW system need?",
    a: "About 400–500 sq ft of shade-free space with 580W-class panels (roughly 9 panels). Add margin if your roof is not optimally oriented.",
  },
  {
    q: "Is solar worth it in India without the subsidy?",
    a: "Yes, in most states. Grid tariffs of ₹6–10 per unit give a payback of 4–6 years even without subsidy. The subsidy shortens it to 2–4 years — one of the best residential paybacks anywhere in the world.",
  },
];

export default function Post() {
  return (
    <BlogArticle
      title="Solar Panel Price in India 2026: Complete Guide with Subsidy"
      description="1 kW to 10 kW system prices, the PM Surya Ghar subsidy slabs, and Tata vs Adani vs Waaree panel comparison."
      slug="solar-panel-price-in-india"
      category="Prices"
      calculatorHref="/calculators/solar-calculator-india/"
      calculatorLabel="Calculate my system cost"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Blog", href: "/blog/" },
          { name: "Solar Panel Price in India" },
        ])}
      />

      <h2>The short answer</h2>
      <p>
        In 2026, a residential on-grid solar system in India costs roughly{" "}
        <strong>₹60,000–70,000 per kW</strong> installed. The PM Surya Ghar:
        Muft Bijli Yojana subsidizes ₹30,000 (1 kW), ₹60,000 (2 kW) and
        ₹78,000 (3 kW+), credited directly to your bank account — which
        brings the net cost of a 3 kW system down to around ₹1.1–1.3 lakh.
        Payback after subsidy is typically 2–4 years, among the fastest in
        the world.
      </p>

      <h2>System prices by size (2026, before subsidy)</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>System size</th><th>Installed cost (₹)</th><th>Approx. panels (580W)</th></tr>
        </thead>
        <tbody>
          <tr><td>1 kW</td><td className="num">₹60,000–75,000</td><td className="num">2</td></tr>
          <tr><td>2 kW</td><td className="num">₹1,15,000–1,35,000</td><td className="num">4</td></tr>
          <tr><td>3 kW</td><td className="num">₹1,65,000–1,90,000</td><td className="num">6</td></tr>
          <tr><td>5 kW</td><td className="num">₹2,60,000–3,00,000</td><td className="num">9</td></tr>
          <tr><td>10 kW</td><td className="num">₹5,00,000–5,80,000</td><td className="num">18</td></tr>
        </tbody>
      </table>
      <p>
        These are typical all-in quotes using domestic (DCR-compliant) panels
        and branded inverters — DCR modules are mandatory for the subsidy.
        Imported non-DCR panels can be cheaper but don&apos;t qualify.
      </p>

      <h2>PM Surya Ghar subsidy: the slabs and your net cost</h2>
      <p>
        The subsidy is the centerpiece of Indian residential solar economics.
        It is fixed by capacity and paid directly to the beneficiary after
        installation and inspection:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Capacity</th><th>Subsidy</th><th>Net cost after subsidy (est.)</th></tr>
        </thead>
        <tbody>
          <tr><td>1 kW</td><td className="num">₹30,000</td><td className="num">₹30,000–45,000</td></tr>
          <tr><td>2 kW</td><td className="num">₹60,000</td><td className="num">₹55,000–75,000</td></tr>
          <tr><td>3 kW</td><td className="num">₹78,000</td><td className="num">₹87,000–1,12,000</td></tr>
          <tr><td>5 kW</td><td className="num">₹78,000</td><td className="num">₹1,82,000–2,22,000</td></tr>
          <tr><td>10 kW</td><td className="num">₹78,000</td><td className="num">₹4,22,000–5,02,000</td></tr>
        </tbody>
      </table>
      <p>
        Note the subsidy caps at ₹78,000 — it covers a larger share of small
        systems, which is why 2–3 kW is the sweet spot for most homes. The
        process: apply on the national portal, get feasibility approval from
        your DISCOM, install through a registered vendor, pass inspection,
        then receive the subsidy in your bank account, usually within
        30–90 days.
      </p>

      <h2>Tata vs Adani vs Waaree: the big three compared</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Factor</th><th>Tata Power Solar</th><th>Adani (Mundra Solar)</th><th>Waaree</th></tr>
        </thead>
        <tbody>
          <tr><td>Manufacturing scale</td><td>Large, integrated</td><td>Large, integrated</td><td className="num">India&apos;s largest by capacity</td></tr>
          <tr><td>Panel efficiency (top lines)</td><td className="num">~21–22%</td><td className="num">~21–22%</td><td className="num">~21–22%</td></tr>
          <tr><td>Service network</td><td>Widest, EPC arm</td><td>Growing</td><td>Wide dealer network</td></tr>
          <tr><td>Price positioning</td><td className="num">Premium</td><td className="num">Competitive</td><td className="num">Competitive</td></tr>
          <tr><td>Performance warranty</td><td className="num">25–30 yrs</td><td className="num">25–30 yrs</td><td className="num">25–30 yrs</td></tr>
        </tbody>
      </table>
      <p>
        Honestly, all three make excellent panels and all three qualify for
        the subsidy. Choose on local dealer support, warranty paperwork, and
        price — a great local Waaree dealer beats a distant Tata EPC on
        service response every time. Also compare the inverter brand in the
        quote; the panel brand matters less than people think.
      </p>

      <h2>State-level notes</h2>
      <ul>
        <li>
          <strong>Net metering caps vary.</strong> Most states allow net
          metering up to the sanctioned load; a few have shifted to gross
          metering or net billing for larger systems — check your
          DISCOM&apos;s current policy before sizing above 3 kW.
        </li>
        <li>
          <strong>High-tariff states pay back fastest.</strong> Maharashtra,
          Karnataka, Delhi and Tamil Nadu tariffs make sub-3-year paybacks
          common after subsidy.
        </li>
        <li>
          <strong>DISCOM timelines differ.</strong> Feasibility approval and
          meter installation can take 2 weeks in efficient DISCOMs and 2+
          months in slower ones — ask your vendor for realistic timelines in
          your area.
        </li>
      </ul>
      <p>
        For the step-by-step process from survey to switch-on, see our{" "}
        <a href="/blog/solar-installation-guide/">solar installation guide</a>,
        and for the full payback math read our{" "}
        <a href="/blog/solar-energy-for-home-benefits-guide/">homeowner benefits guide</a>.
        To price your own system, use the{" "}
        <a href="/calculators/solar-calculator-india/">India solar cost calculator</a>.
      </p>

      <Faq items={faqs} heading="India solar price FAQ" />
    </BlogArticle>
  );
}
