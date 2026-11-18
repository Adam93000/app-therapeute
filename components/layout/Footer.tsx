import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3C4B3F] py-12 text-[#FAF9F6] sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="space-y-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#FAF9F6]/75">
            Avançons à votre rythme
          </p>
          <h2 className="font-serif text-3xl font-normal text-[#FAF9F6] sm:text-4xl">
            Et si nous en parlions ?
          </h2>
          <p className="text-sm leading-relaxed text-[#FAF9F6]/80 sm:text-base">
            Une question avant de vous lancer ?
            <br />
            Je vous réponds avec plaisir.
          </p>
        </div>

        <hr className="my-8 border-[#FAF9F6]/15" />

        <div className="space-y-4 text-sm text-[#FAF9F6]/85 sm:text-base">
          <p className="font-medium text-[#FAF9F6]">
            Catalina Pedrero &middot; Psychopraticienne
          </p>

          <div className="space-y-1">
            <p>
              <a
                href="mailto:bonjour@catalinapedrero.fr"
                className="transition-opacity hover:opacity-80"
              >
                bonjour@catalinapedrero.fr
              </a>
            </p>
            <p>
              <a
                href="tel:+590612345678"
                className="transition-opacity hover:opacity-80"
              >
                06 12 34 56 78
              </a>
            </p>
          </div>

          <p className="text-[#FAF9F6]/80">
            6 allée Cabri section Sèze 97118 Saint-François
          </p>
        </div>

        <div className="mt-8 space-y-2 text-xs text-[#FAF9F6]/70 sm:text-sm">
          <p className="flex flex-wrap items-center gap-2">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-[#FAF9F6]"
            >
              Mentions légales
            </Link>
            <span aria-hidden="true">&middot;</span>
            <Link
              href="/confidentialite"
              className="transition-colors hover:text-[#FAF9F6]"
            >
              Confidentialité
            </Link>
          </p>
          <p className="text-[#FAF9F6]/60">&copy; 2026 Catalina Pedrero</p>
        </div>
      </div>
    </footer>
  );
}
