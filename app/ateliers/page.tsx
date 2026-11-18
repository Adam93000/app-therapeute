import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ateliers de groupe",
  description:
    "Ateliers collectifs thématiques pour explorer et partager dans un cadre bienveillant.",
};

export default function AteliersPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold text-text-dark sm:text-4xl">
        Ateliers de groupe
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-dark/80">
        Calendrier des prochains ateliers collectifs, thématiques abordées et
        informations d&apos;inscription.
      </p>
    </section>
  );
}

