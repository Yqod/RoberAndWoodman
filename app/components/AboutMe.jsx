import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section id="ueber" className="relative overflow-hidden">
      {/* Hintergrundbild wie in der Hero */}
      <Image
        src="/WindspielHolzBlur.jpeg"
        alt="Holzhandwerk – Hintergrund"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* ruhige Overlays (wie Hero) */}
      <div className="absolute inset-0 bg-[#F2EBD9]/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/20" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* Text */}
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/60">
              Über mich
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black/90 sm:text-4xl">
              Ich bin Robert.
            </h2>

            <p className="mt-4 text-base leading-7 text-black/65">
              Ich fertige Holzarbeiten in kleiner Stückzahl – ruhig im Design,
              sauber verarbeitet und gemacht für den Alltag. Neben der Werkstatt
              bin ich regelmäßig auf lokalen Märkten unterwegs: zum Kennenlernen,
              zum Anfassen und für gute Gespräche über Holz und das Leben.
            </p>

           

            

            {/* Tipp (beibehalten) */}
            <p className="mt-6 text-xs leading-5 text-black/55">
              Tipp: Du kannst mich auch persönlich auf Märkten treffen – oder du
              kommst in meine Werkstatt, und wir besprechen dein Projekt
              gemeinsam.
            </p>
          </div>

          {/* Bild / Profil */}
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/25 backdrop-blur">
              <div className="p-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-black/10">
                    <Image
                      src="/WhatsApp%20Image%202025-12-20%20at%2001.33.11.jpeg"
                      alt="Robert – Profilbild"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-black/90">
                      Robert
                    </p>
                    <p className="truncate text-xs text-black/60">
                      Werkstatt · Märkte · Manufaktur
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-black/10 pt-5">
                  <p className="text-sm leading-6 text-black/70">
                    „Am liebsten ist mir, wenn ein Stück nicht nur gut aussieht,
                    sondern sich auch gut anfühlt.“
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}