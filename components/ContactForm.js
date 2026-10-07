"use client";

import { useState } from "react";
import { F } from "./Fields";

// No backend: composes a mailto: link with the message prefilled and opens
// the visitor's own email app. Honest and functional.
const CONTACT_EMAIL = "contact@cubicyardcalculator.site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Cubic Yard Calculator contact — ${name.trim() || "website"}`.slice(0, 100)
  )}&body=${encodeURIComponent(
    `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
  )}`;

  const valid =
    name.trim().length > 0 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim()) &&
    message.trim().length > 0;

  return (
    <div className="card" style={{ maxWidth: 680 }}>
      <h3 style={{ marginTop: 0 }}>Send a message</h3>
      <p style={{ color: "var(--muted)" }}>
        This site has no contact database — clicking send opens your own email
        app with the message addressed to{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          style={{ color: "var(--accent-deep)", fontWeight: 700 }}
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>
      <F label="Name" value={name} set={setName} type="text" />
      <F label="Email" value={email} set={setEmail} type="email" />
      <div className="field">
        <label>Message</label>
        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What dimensions did you enter? What material? What looks off?"
        />
      </div>
      <a
        href={valid ? href : undefined}
        className="btn btn-primary"
        aria-disabled={!valid}
        style={!valid ? { opacity: 0.45, pointerEvents: "none" } : undefined}
      >
        Compose email
      </a>
      {!valid && (
        <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 10 }}>
          Fill in your name, a valid email, and a message to enable sending.
        </div>
      )}
    </div>
  );
}
