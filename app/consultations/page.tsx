import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import BookingWidget from "@/components/layout/BookingWidget";

export const metadata: Metadata = {
  title: "Consultations individuelles",
  description:
    "Séances de thérapie individuelle au cabinet à Saint-François ou en visioconférence. Prenez rendez-vous en ligne.",
};

const steps = [
  {
    number: "01",
    title: "Faire connaissance",
    description:
      "Lors du premier rendez-vous, nous prenons le temps de parler de vos besoins et de vos attentes.",
  },
  {
    number: "02",
    title: "Explorer à votre rythme",
    description:
      "La parole et des exercices adaptés vous aident à accueillir vos émotions, dans un cadre bienveillant.",
  },
  {
    number: "03",
    title: "Avancer avec confiance",
    description:
      "Nous faisons le point ensemble et ajustons le suivi selon votre cheminement.",
  },
];

const consultationOptions = [
  {
    title: "Consultation individuelle",
    subtitle: "Adolescents, Adultes",
    pricing: "70 € (1h) · 80 € (1h30)",
  },
  {
    title: "Consultation individuelle",
    subtitle: "Enfants",
    pricing: "70 € (1h)",
  },
  {
    title: "Sophrologie",
    subtitle: null,
    pricing: "70 € (1h)",
  },
  {
    title: "Thérapie de couple",
    subtitle: null,
    pricing: "120 € (1h30)",
  },
];

export default function ConsultationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#E9EFEA] py-10 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#4E5F54] transition-opacity hover:opacity-80"
          >
            <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Accueil</span>
          </Link>

          <div className="mt-8 max-w-2xl space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4E5F54] sm:text-xs">
              Thérapie individuelle
            </p>
            <h1 className="font-serif text-[2.25rem] font-normal leading-[1.15] text-text-dark sm:text-5xl">
              Retrouver votre
              <br />
              équilibre intérieur.
            </h1>
            <p className="text-base leading-relaxed text-text-dark/75 sm:text-lg">
              Un temps pour déposer vos émotions, éclairer ce que vous traversez
              et avancer vers ce qui vous fait du bien.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-lg bg-background px-4 py-2 text-xs font-medium text-[#4E5F54] sm:text-sm">
                Au cabinet
              </span>
              <span className="rounded-lg bg-background px-4 py-2 text-xs font-medium text-[#4E5F54] sm:text-sm">
                En visio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4E5F54] sm:text-xs">
            Comment ça se passe ?
          </p>
          <h2 className="font-serif text-[2rem] font-normal leading-[1.15] text-text-dark sm:text-4xl">
            Pas à pas, ensemble.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4 md:flex-col">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E9EFEA] text-xs font-semibold text-[#4E5F54]">
                {step.number}
              </span>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-normal text-text-dark sm:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-dark/75 sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing & Frame Section */}
      <section className="mx-auto max-w-5xl border-t border-primary/20 px-4 py-12 sm:px-6 sm:py-20">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4E5F54] sm:text-xs">
            Le cadre des séances
          </p>
          <h2 className="font-serif text-[2rem] font-normal leading-[1.15] text-text-dark sm:text-4xl">
            Simple et transparent.
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {consultationOptions.map((option) => (
            <div
              key={`${option.title}-${option.subtitle ?? "default"}`}
              className="flex flex-col justify-between rounded-2xl border border-primary/25 bg-[#FDFCF9] p-6 sm:p-8"
            >
              <div>
                <h3 className="font-serif text-xl font-normal text-text-dark sm:text-2xl">
                  {option.title}
                </h3>
                {option.subtitle && (
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#4E5F54]">
                    {option.subtitle}
                  </p>
                )}
                <p className="mt-4 font-serif text-2xl font-normal text-[#4E5F54] sm:text-3xl">
                  {option.pricing}
                </p>
              </div>

              <div className="mt-6 border-t border-primary/20 pt-4 text-sm text-text-dark/80">
                <p>Au cabinet à Saint-François ou en visio</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-text-dark/65 sm:text-sm">
          Un espace confidentiel, dans le respect de votre rythme et de vos
          besoins.
        </p>
      </section>

      {/* Booking / Cal.com Placeholder Section */}
      <section className="bg-[#E9EFEA] py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4E5F54] sm:text-xs">
              Prendre rendez-vous
            </p>
            <h2 className="font-serif text-[2rem] font-normal leading-[1.15] text-text-dark sm:text-4xl">
              Votre premier pas
              <br />
              commence ici.
            </h2>
            <p className="text-base leading-relaxed text-text-dark/75">
              Choisissez le moment qui vous convient.
              <br />
              Vous recevrez une confirmation par e-mail.
            </p>
          </div>

          <div className="mt-8">
            <BookingWidget
              calLink="catalinapedrero"
              namespace="consultations"
            />
          </div>
        </div>
      </section>
    </>
  );
}
