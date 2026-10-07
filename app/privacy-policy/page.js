export const metadata = {
  title: "Privacy Policy - Solar Calculator Hub",
  description:
    "Privacy policy for Solar Calculator Hub: what data we collect (almost none), how calculators work in your browser, and cookies.",
  alternates: { canonical: "https://solarcalculatorhub.com/privacy-policy/" },
  openGraph: {
    title: "Privacy Policy - Solar Calculator Hub | Solar Calculator Hub",
    description: "What we collect (almost nothing) and why.",
    url: "https://solarcalculatorhub.com/privacy-policy/",
  },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Legal</div>
        <h1 className="h2">Privacy Policy</h1>
        <p className="sub">Last updated: October 2026</p>
        <div style={{ maxWidth: 720, lineHeight: 1.75, fontSize: 17 }}>
          <h2>Calculator data stays in your browser</h2>
          <p>
            Every calculator on this site runs entirely in your browser.
            The numbers you enter — your electricity bill, system size,
            location — are never sent to our servers, stored, or shared.
            Close the tab and they&apos;re gone.
          </p>
          <h2>Contact form</h2>
          <p>
            If you use the contact form, your message opens in your own
            email app addressed to us. We receive only what you choose to
            send, and we use it solely to reply.
          </p>
          <h2>Analytics and cookies</h2>
          <p>
            We may use privacy-respecting analytics to understand which
            pages are useful. We do not run advertising trackers, sell data,
            or build profiles. If analytics are enabled, they collect
            aggregate page views only — no personal identifiers.
          </p>
          <h2>Third parties</h2>
          <p>
            We do not share personal information with third parties. Links
            to external sites are governed by those sites&apos; own privacy
            policies.
          </p>
          <h2>Changes</h2>
          <p>
            If this policy changes materially, we&apos;ll update the date
            above. Continued use of the site after changes means you accept
            the updated policy.
          </p>
        </div>
      </div>
    </section>
  );
}
