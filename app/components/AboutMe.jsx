import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section id="ueber" className="bg-[#F2EBD9]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* Portrait / Profilbild */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/25">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/WhatsApp%20Image%202025-12-20%20at%2001.33.11.jpeg"
                  alt="Porträt des Holzhandwerkers"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(242,235,217,0.22),transparent_55%)]" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/75">
                    Robert &amp; Woodman
                  </p>
                  <p className="mt-1 text-xl font-semibold text-[#F2EBD9]">
                    Holzhandwerk aus der Werkstatt
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-black/55">
              Tipp: Wenn du schon Maße/Ideen hast, schreib sie direkt mit in die
              Anfrage – das spart Zeit.
            </p>
          </div>

          {/* Text */}
          <div className="md:col-span-7">
            

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black/90 sm:text-4xl">
              Ich arbeite gern mit Holz, weil es ehrlich ist.
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Jedes Brett, jede Kante, jede Oberfläche fühlt sich anders an – und
              genau das macht den Reiz aus. Ich fertige Stücke, die ruhig wirken,
              sauber verarbeitet sind und im Alltag bestehen.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white/20 p-4">
                <p className="text-md font-semibold text-black/85">Saubere Details</p>
                <p className="mt-1 text-sm leading-6 text-black/60">
                  Präzise Kanten, stimmige Proportionen, ruhige Oberfläche.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/20 p-4">
                <p className="text-md font-semibold text-black/85">Langlebig gedacht</p>
                <p className="mt-1 text-sm leading-6 text-black/60">
                  Stabil gebaut, pflegeleicht, für viele Jahre gemacht.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/20 p-4">
                <p className="text-md font-semibold text-black/85">Einzelstücke</p>
                <p className="mt-1 text-sm leading-6 text-black/60">
                  Maße, Holzart und Finish passend zu deinem Zuhause.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/20 p-4">
                <p className="text-md font-semibold text-black/85">Ruhige Ästhetik</p>
                <p className="mt-1 text-sm leading-6 text-black/60">
                  Keine Effekte – nur Material, Handwerk und Linie.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/kontakt"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#325453] px-6 py-3 text-sm font-medium text-[#F2EBD9] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/40 sm:w-auto"
              >
                Projekt anfragen
              </Link>

              <Link
                href="/#produkte"
                className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/30 px-6 py-3 text-sm font-medium text-black/75 hover:bg-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/25 sm:w-auto"
              >
                Arbeiten ansehen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}