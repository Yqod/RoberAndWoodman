import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="clip-hero relative h-screen w-full overflow-hidden">
      <Image
        src="/WhatsApp%20Image%202025-12-27%20at%2010.58.13.jpeg"
        alt="Holzarbeit in der Werkstatt"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F2EBD9]/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/25" />

      {/* Content: Mobile oben (items-start), Desktop zentriert (md:items-center) */}
      <div className="relative mx-auto flex h-full max-w-6xl items-start px-4 pt-64 sm:px-6 sm:pt-64 md:items-center md:pt-0">
        <div className="max-w-[38rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/70">
            Handarbeit aus Holz
          </p>

          <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-black/90 sm:text-5xl md:text-6xl">
            Mit Liebe zum Holz.
          </h1>
          <h2 className="mt-0 text-4xl font-semibold leading-[1.05] tracking-tight text-black/90 sm:text-5xl md:text-6xl">  
             Von Hand gefertigt.
          </h2>

          <p className="mt-4 text-base leading-7 text-black/60 sm:text-lg">
            Windspiele, Schneidebretter und individuelle Stücke – langlebig,
            nachhaltig und präzise gefertigt.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/kontakt"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#325453] px-6 py-3 text-sm font-medium text-[#F2EBD9] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/40 sm:w-auto"
            >
              Anfrage senden
            </Link>

            <Link
              href="/#produkte"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/35 px-6 py-3 text-sm font-medium text-black/75 hover:bg-white/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/30 sm:w-auto"
            >
              Produkte ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}