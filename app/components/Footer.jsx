import Link from "next/link";

const navLinks = [
  { label: "Über mich", href: "/#ueber" },
  { label: "Produkte", href: "/#produkte" },
  { label: "Warum Handarbeit?", href: "/#handarbeit" },
  { label: "Kontakt", href: "/kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/10 bg-[#F2EBD9]">
      {/* subtle decoration like the rest of the site */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(50,84,83,0.18),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(0,0,0,0.06),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          {/* Brand / CTA */}
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-black/10 bg-white/35 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-10 w-1.5 rounded-full bg-[#325453]" />
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/60">
                    Robert &amp; Woodman
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-black/90">
                    Handarbeit aus Holz.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/65">
                    Windspiele, Schneidebretter und Einzelstücke – sauber
                    verarbeitet, langlebig gedacht und mit ruhiger Ästhetik.
                  </p>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href="/kontakt"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#325453] px-6 py-3 text-sm font-medium text-[#F2EBD9] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/40 sm:w-auto"
                    >
                      Projekt anfragen <span aria-hidden>→</span>
                    </Link>

                    <Link
                      href="/#produkte"
                      className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/35 px-6 py-3 text-sm font-medium text-black/75 hover:bg-white/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/30 sm:w-auto"
                    >
                      Produkte ansehen
                    </Link>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-black/55">
                    Antwort meist innerhalb von 24–48 Stunden.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/60">
              Navigation
            </p>
            <ul className="mt-4 grid gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-black/70 hover:text-black transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/60">
              Kontakt
            </p>

            <div className="mt-4 rounded-3xl border border-black/10 bg-white/25 p-5">
              <div className="grid gap-3 text-sm text-black/75">
                <a
                  className="hover:text-black transition-colors"
                  href="mailto:info@robertwoodman.de"
                >
                  info@robertwoodman.de
                </a>
                <a
                  className="hover:text-black transition-colors"
                  href="tel:+49123456789"
                >
                  +49 123 456 789
                </a>
                <div className="text-xs text-black/55">Mo–Fr · 09:00–17:00</div>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <SocialIcon href="#" label="Instagram">
                  <InstagramIcon />
                </SocialIcon>
                <SocialIcon href="#" label="Facebook">
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon href="#" label="TikTok">
                  <TikTokIcon />
                </SocialIcon>
              </div>

              <div className="mt-5 border-t border-black/10 pt-4">
                <p className="text-xs text-black/55">
                  Rechtliches:{" "}
                  {legalLinks.map((l, idx) => (
                    <span key={l.href}>
                      <Link
                        href={l.href}
                        className="text-black/70 hover:text-black transition-colors"
                      >
                        {l.label}
                      </Link>
                      {idx < legalLinks.length - 1 ? (
                        <span className="px-2 text-black/35">•</span>
                      ) : null}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-black/55">
            © {year} Robert &amp; Woodman. Alle Rechte vorbehalten.
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-black/55">
            <Link href="/#ueber" className="hover:text-black transition-colors">
              Über mich
            </Link>
            <span className="text-black/30">•</span>
            <Link href="/#produkte" className="hover:text-black transition-colors">
              Produkte
            </Link>
            <span className="text-black/30">•</span>
            <a href="#" className="hover:text-black transition-colors">
              Nach oben
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/35 text-black/70 hover:bg-white/55 hover:text-black transition-colors"
    >
      <span className="sr-only">{label}</span>
      <span className="h-5 w-5">{children}</span>
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9A4.75 4.75 0 0 1 16.5 21.25h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 16.25A4.25 4.25 0 1 0 12 7.75a4.25 4.25 0 0 0 0 8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M17.25 6.75h.01"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M14 8.5h2V6h-2c-2 0-3.5 1.6-3.5 3.6V12H8v2.5h2.5V21H13v-6.5h2.6L16 12h-3v-2c0-.9.4-1.5 1-1.5Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M14.2 3c.4 2.3 1.8 3.9 4 4.3v2.3c-1.6-.1-3.1-.7-4.2-1.7v7c0 3-2.4 5.4-5.4 5.4S3.2 17.9 3.2 15s2.4-5.4 5.4-5.4c.4 0 .8 0 1.2.1v2.5c-.4-.2-.8-.2-1.2-.2-1.6 0-2.9 1.3-2.9 3s1.3 3 2.9 3 2.9-1.3 2.9-3V3h2.5Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}