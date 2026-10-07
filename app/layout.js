import "./globals.css";
// Self-hosted fonts via Fontsource. next/font/google is intentionally NOT
// used: it fetches from fonts.googleapis.com at build time, which the
// Hostinger build sandbox blocks (build fails with a null-read in the
// Google font loader). npm registry access works, so fonts ride along
// with the dependencies instead.
import "@fontsource-variable/oswald";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

const SITE_URL = "https://solarcalculatorhub.com";
const SITE_NAME = "Solar Calculator Hub";
const DEFAULT_TITLE =
  "Solar Calculator Hub: Free Solar Sizing, Cost & ROI Tools";
const DEFAULT_DESC =
  "Free solar calculators for sizing, costs, ROI, payback and battery backup — for the USA, UK, India, Australia, Pakistan and the Philippines.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Solar Calculator Hub",
  },
  description: DEFAULT_DESC,
  keywords: [
    "solar calculator",
    "solar panel cost calculator",
    "solar system calculator",
    "solar roi calculator",
    "solar payback calculator",
    "solar battery calculator",
    "solar calculator usa",
    "solar calculator india",
    "solar calculator uk",
    "solar calculator pakistan",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  description: DEFAULT_DESC,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={websiteJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
