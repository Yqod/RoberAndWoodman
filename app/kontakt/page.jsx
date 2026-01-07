"use client";

import { useMemo, useState } from "react";

import Link from "next/link";

const initial = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
};

export default function KontaktPage() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: "idle", message: "" }); // idle | sending | success | error

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.email.trim().length >= 5 &&
      form.message.trim().length >= 10 &&
      form.consent === true &&
      status.state !== "sending"
    );
  }, [form, status.state]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        state: "error",
        message:
          "EmailJS ist nicht konfiguriert. Bitte prüfe .env.local (SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY).",
      });
      return;
    }

    try {
      // Diese Keys müssen zu deinem EmailJS Template passen:
      // z.B. {{from_name}}, {{from_email}}, {{phone}}, {{message}}
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
        consent: form.consent ? "yes" : "no",
      };

      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      setStatus({ state: "success", message: "Danke! Deine Nachricht wurde gesendet." });
      setForm(initial);
    } catch (err) {
      setStatus({
        state: "error",
        message: "Senden fehlgeschlagen. Bitte versuche es erneut.",
      });
    }
  }

  return (
    <main className="bg-[#F2EBD9]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/60">
              Kontakt
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black/90">
              Schreib mir dein Anliegen
            </h1>
            <p className="mt-4 text-sm leading-6 text-black/65">
              Ich melde mich in der Regel innerhalb von 24–48 Stunden zurück.
            </p>

            <div className="mt-8 rounded-3xl border border-black/10 bg-white/35 p-6 backdrop-blur">
              <div className="grid gap-2 text-sm text-black/75">
                <a className="hover:text-black transition-colors" href="mailto:info@robertwoodman.de">
                  info@robertwoodman.de
                </a>
                <a className="hover:text-black transition-colors" href="tel:+49123456789">
                  +49 123 456 789
                </a>
                <div className="text-xs text-black/55">Mo–Fr · 09:00–17:00</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-3xl border border-black/10 bg-white/35 p-6 backdrop-blur">
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-2 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                      placeholder="Max Mustermann"
                      required
                      className="h-11 w-full rounded-2xl border border-black/10 bg-white/60 px-4 text-sm text-black/80 outline-none placeholder:text-black/40 focus:border-[#325453]/30 focus:ring-4 focus:ring-[#325453]/10"
                    />
                  </Field>

                  <Field label="E-Mail" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                      placeholder="max@mail.de"
                      required
                      className="h-11 w-full rounded-2xl border border-black/10 bg-white/60 px-4 text-sm text-black/80 outline-none placeholder:text-black/40 focus:border-[#325453]/30 focus:ring-4 focus:ring-[#325453]/10"
                    />
                  </Field>
                </div>

                <Field label="Telefon (optional)" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    placeholder="+49 …"
                    className="h-11 w-full rounded-2xl border border-black/10 bg-white/60 px-4 text-sm text-black/80 outline-none placeholder:text-black/40 focus:border-[#325453]/30 focus:ring-4 focus:ring-[#325453]/10"
                  />
                </Field>

                <Field label="Nachricht" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Worum geht es? Maße, Holzart, Zeitrahmen…"
                    required
                    className="w-full resize-y rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black/80 outline-none placeholder:text-black/40 focus:border-[#325453]/30 focus:ring-4 focus:ring-[#325453]/10"
                  />
                  <p className="mt-1 text-xs text-black/50">Mindestens 10 Zeichen.</p>
                </Field>

                <label className="mt-1 flex items-start gap-3 rounded-2xl border border-black/10 bg-white/45 p-4 text-sm text-black/70">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm((s) => ({ ...s, consent: e.target.checked }))}
                    className="mt-1 h-4 w-4 accent-[#325453]"
                    required
                  />
                  <span>
                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert und verarbeitet werden.
                  </span>
                </label>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex items-center justify-center rounded-full bg-[#325453] px-6 py-3 text-sm font-medium text-[#F2EBD9] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/40 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status.state === "sending" ? "Sende…" : "Nachricht senden"}
                  </button>

                  {status.state === "success" ? (
                    <p className="text-sm text-black/70">{status.message}</p>
                  ) : status.state === "error" ? (
                    <p className="text-sm text-red-700">{status.message}</p>
                  ) : (
                    <p className="text-xs text-black/50">
                      Mit dem Absenden akzeptierst du die{" "}
                      <Link className="underline underline-offset-4 hover:text-black" href="/datenschutz">
                        Datenschutzerklärung
                      </Link>
                      .
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium uppercase tracking-[0.22em] text-black/60"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}