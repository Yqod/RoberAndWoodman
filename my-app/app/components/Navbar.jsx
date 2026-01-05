"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Über mich", href: "/#ueber" },
  { label: "Produkte", href: "/#produkte" },
  { label: "Warum Handarbeit?", href: "/#handarbeit" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Menü schließen, wenn man navigiert (z.B. Anchor klickt)
  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-black/10 bg-[#F2EBD9]/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-white/60 ring-1 ring-black/5">
              <Image
                src="vercel.svg"
                alt="Robert & Woodman"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className="text-sm font-medium tracking-wide text-black/80">
              Robert &amp; Woodman
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-black/70 hover:text-black transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: Kontakt + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/kontakt"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-[#325453] px-4 py-2 text-sm font-medium text-[#F2EBD9] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/40"
            >
              Kontakt
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/40 px-3 py-2 text-sm text-black/80 hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325453]/40 md:hidden"
              aria-label="Menü öffnen"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menü</span>
              <div className="grid gap-1.5">
                <span className="block h-0.5 w-5 bg-black/70" />
                <span className="block h-0.5 w-5 bg-black/70" />
                <span className="block h-0.5 w-5 bg-black/70" />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
            <div className="rounded-2xl border border-black/10 bg-white/45 p-3 backdrop-blur">
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-sm text-black/80 hover:bg-white/60"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 border-t border-black/10 pt-3">
                <div className="text-xs text-black/60">
                  Direkt anfragen:
                  <div className="mt-1 text-sm text-black/80">
                    info@robertwoodman.de
                  </div>
                </div>

                <Link
                  href="/kontakt"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#325453] px-4 py-2.5 text-sm font-medium text-[#F2EBD9] hover:brightness-110"
                  onClick={() => setOpen(false)}
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}