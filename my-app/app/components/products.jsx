import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Schneidebretter",
    desc: "Massivholz, sauber geölt, alltagstauglich – jedes Stück mit eigener Maserung.",
    image: "/SchneidebrettHolz.jpeg",
    href: "/#produkte-schneidebretter",
  },
  {
    title: "Windspiele",
    desc: "Leicht, ruhig und präzise gearbeitet – Holz, das sich mit dem Wind bewegt.",
    image: "/WindspielHolz.jpeg",
    href: "/#produkte-windspiele",
  },
  {
    title: "Tische",
    desc: "Individuell nach Maß – klare Linien, stabile Konstruktion, ehrliches Material.",
    image: "/TischHolzPlaceholder.jpeg",
    href: "/#produkte-tische",
  },
];

export default function ProductsSection() {
  return (
    <section id="produkte" className="bg-[#F2EBD9]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/60">
            Arbeiten
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black/90 sm:text-4xl">
            Drei Produktwelten – klar, natürlich, handgemacht.
          </h2>
          <p className="mt-4 text-base leading-7 text-black/65">
            Ausgewähltes Holz, ruhige Formen und ein Finish, das sich gut anfühlt
            – gemacht für den Alltag.
          </p>
        </div>

        {/* Big image cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-black/10 bg-white/25 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-40px_rgba(0,0,0,0.45)]"
            >
              {/* Image dominates */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4] md:aspect-[4/5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* subtle overlays for readability/premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(242,235,217,0.25),transparent_55%)]" />

                {/* Text on image (clean, minimal) */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-xl font-semibold text-[#F2EBD9]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/80">
                    {item.desc}
                  </p>

                  <div className="mt-4">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#F2EBD9] hover:opacity-90"
                      aria-label={`${item.title} ansehen`}
                    >
                      Mehr ansehen
                      <span className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white/35 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-black/70">
              Du suchst etwas Spezielles? Ich fertige auch Einzelstücke nach
              Maß.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#325453] px-5 py-3 text-sm font-medium text-[#F2EBD9] hover:brightness-110"
            >
              Projekt anfragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}