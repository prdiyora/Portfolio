"use client";

import { useRef, useState } from "react";

// Google Form "Portfolio Contact" -> linked private Sheet in Drive/Portfolio
const FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdSXB5Rzki_Vil0Dt0KybAavjqC89v7Mi9akF8oOGKtoKmOyw/formResponse";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const pendingRef = useRef(false);
  const formRef = useRef(null);

  return (
    <div className="max-w-xl mx-auto mt-10 text-left">
      {sent ? (
        <div className="card !shadow-none p-6 text-center">
          <p className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>Thank you!</p>
          <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
            Your message was submitted. I usually reply within a day - if you don&apos;t hear back, please email me directly at{" "}
            <a href="mailto:az.priyankdiyora@gmail.com" style={{ color: "var(--accent-deep)", fontWeight: 600 }}>az.priyankdiyora@gmail.com</a>.
          </p>
        </div>
      ) : (
        <form
          ref={formRef}
          action={FORM_ACTION}
          method="POST"
          target="hidden-form-iframe"
          onSubmit={() => { pendingRef.current = true; }}
          className="card !shadow-none p-6 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Name *</span>
              <input required name="entry.244368649" type="text" placeholder="Your name" className="form-field" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Email *</span>
              <input required name="entry.986818282" type="email" placeholder="you@example.com" className="form-field" />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Phone (optional)</span>
            <input name="entry.1679339751" type="tel" placeholder="+91 ..." className="form-field" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Message *</span>
            <textarea required name="entry.1013417603" rows={4} placeholder="What would you like to discuss?" className="form-field" />
          </label>
          <button type="submit" className="btn-primary self-center mt-2">Send message</button>
        </form>
      )}
      <iframe
        name="hidden-form-iframe"
        title="form-submit-target"
        style={{ display: "none" }}
        onLoad={() => {
          if (pendingRef.current) {
            pendingRef.current = false;
            setSent(true);
            formRef.current?.reset();
          }
        }}
      />
    </div>
  );
}

export default ContactForm;
