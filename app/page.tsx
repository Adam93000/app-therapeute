import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-2xl space-y-6">
        <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-text-dark">
          Accompagnement &amp; Écoute
        </span>

        <h1 className="font-serif text-4xl font-semibold leading-tight text-text-dark sm:text-5xl">
          Un espace serein pour retrouver équilibre et clarté.
        </h1>

        <p className="text-base leading-relaxed text-text-dark/80 sm:text-lg">
          Séances de thérapie individuelle et ateliers collectifs pensés pour
          vous accompagner à votre rythme, dans la confiance et la bienveillance.
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
          <Link
            href="/consultations"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Découvrir les consultations
          </Link>
          <Link
            href="/ateliers"
            className="inline-flex items-center justify-center rounded-md border border-secondary bg-secondary/20 px-6 py-3 text-sm font-medium text-text-dark transition-colors hover:bg-secondary/40"
          >
            Voir les ateliers
          </Link>
        </div>
      </div>
    </section>
  );
}
