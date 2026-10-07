import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact - Solar Calculator Hub",
  description:
    "Contact Solar Calculator Hub with questions, corrections, feedback or suggestions for the free solar calculator website.",
  keywords: ["contact solar calculator hub"],
  alternates: { canonical: "https://solarcalculatorhub.com/contact/" },
  openGraph: {
    title: "Contact - Solar Calculator Hub | Solar Calculator Hub",
    description:
      "Questions, corrections, feedback or suggestions for the free solar calculator website.",
    url: "https://solarcalculatorhub.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Send a message</div>
        <h1 className="h2">Contact — Solar Calculator Hub</h1>
        <p className="sub">
          Share feedback, report a calculation issue, or suggest a new
          solar calculator.
        </p>
        <ContactForm />
        <div style={{ maxWidth: 720, marginTop: 36 }}>
          <h2>What to include</h2>
          <p style={{ color: "var(--muted)" }}>
            If you are reporting a calculator result, include the inputs you
            entered (bill, rate, sun hours, system size) and which calculator
            you used. For general questions, mention your country — pricing
            and incentives are local.
          </p>
        </div>
      </div>
    </section>
  );
}
