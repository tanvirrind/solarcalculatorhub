import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <strong style={{ color: "var(--ink)" }}>Solar Calculator Hub</strong>
          <div>Do the math before you sign.</div>
        </div>
        <div className="footer-links">
          <Link href="/calculators/" style={{ color: "inherit" }}>Calculators</Link>
          <Link href="/blog/" style={{ color: "inherit" }}>Blog</Link>
          <Link href="/about" style={{ color: "inherit" }}>About</Link>
          <Link href="/contact" style={{ color: "inherit" }}>Contact</Link>
          <Link href="/privacy-policy" style={{ color: "inherit" }}>Privacy</Link>
          <Link href="/terms" style={{ color: "inherit" }}>Terms</Link>
        </div>
        <div>© {new Date().getFullYear()} Solar Calculator Hub. All rights reserved.</div>
      </div>
    </footer>
  );
}
