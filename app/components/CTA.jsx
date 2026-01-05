import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[#F2EBD9]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/25">
          {/* no gradients — only subtle, clean accents */}
          <div className="pointer-events-none absolute inset-0 bg-[#F2EBD9]/30" />
          <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#325453]/10 blur-2xl" />
          <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-black/5 blur-2xl" />

          <div className="relative grid gap-8 p-8 sm:p-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/60">
                Unverbindlich anfragen
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black/90 sm:text-4xl">
                Hast du eine Idee aus Holz?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
                Schreib mir kurz, was du suchst (Maße, Einsatz, Holzart wenn du
                schon weißt). Ich melde mich mit Rückfragen und einem klaren
                nächsten Schritt.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/kontakt"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#325453] px-6 py-3.5 text-sm font-medium text-[#F2EBD9] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/40"
                >
                  Jetzt anfragen
                </Link>

                <Link
                  href="/#produkte"
                  className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/30 px-6 py-3.5 text-sm font-medium text-black/75 hover:bg-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/25"
                >
                  Beispiele ansehen
                </Link>
              </div>

              <p className="mt-4 text-xs leading-5 text-black/55">
                Antwort meist innerhalb von 24–48 Stunden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}