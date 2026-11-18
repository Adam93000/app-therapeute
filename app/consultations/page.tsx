import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultations individuelles",
  description:
    "Séances de thérapie individuelle adaptées à vos besoins et à votre rythme.",
};

export default function ConsultationsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold text-text-dark sm:text-4xl">
        Consultations individuelles
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-dark/80">
        Présentation de l&apos;approche thérapeutique, du déroulement des
        séances et des modalités de prise de rendez-vous.
      </p>
    </section>
  );
}

