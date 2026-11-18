import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import cabinetImage from "@/assets/images/image-cabinet.png";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div className="space-y-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-dark/70 sm:text-xs">
              Un temps pour soi &middot; Saint-Francois, Guadeloupe
            </p>

            <h1 className="font-serif text-[2.5rem] font-normal leading-[1.12] text-text-dark sm:text-5xl">
              Un espace pour vous retrouver.
            </h1>

            <p className="max-w-md text-base leading-relaxed text-text-dark/75 sm:text-lg">
              Vous n&rsquo;avez pas à tout traverser seul&middot;e.
              <br />
              Je vous accompagne avec douceur,
              <br />à votre rythme, sans jugement.
            </p>

            <div className="pt-1">
              <Link
                href="#accompagnements"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4E5F54] px-6 py-4 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-8"
              >
                <span>Voir les accompagnements</span>
                <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src={cabinetImage}
              alt="Le cabinet de thérapie baigné de lumière naturelle"
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-primary/20 px-4 py-12 sm:px-6 sm:py-20">
        <div className="space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-dark/70 sm:text-xs">
            Faisons connaissance
          </p>
          <h2 className="font-serif text-[2rem] font-normal leading-[1.15] text-text-dark sm:text-4xl">
            Une rencontre,
            <br />
            avant tout.
          </h2>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-primary/25 bg-primary/15 text-sm text-text-dark/60">
            Photo à venir (Catalina Pedrero)
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-normal text-text-dark sm:text-3xl">
              Je suis Catalina.
            </h3>
            <p className="text-base leading-relaxed text-text-dark/75">
              Psychopraticienne, je vous accueille tel&middot;le que vous êtes.
              Mon approche humaniste place l&rsquo;écoute, la bienveillance et
              votre singularité au cœur de chaque rencontre.
            </p>
            <div className="pt-1">
              <Link
                href="/consultations"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4E5F54] transition-opacity hover:opacity-80"
              >
                <span>En savoir plus</span>
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="accompagnements"
        className="mx-auto max-w-5xl scroll-mt-24 border-t border-primary/20 px-4 py-12 sm:px-6 sm:py-20"
      >
        <div className="max-w-xl space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4E5F54] sm:text-xs">
            Les accompagnements
          </p>
          <h2 className="font-serif text-[2rem] font-normal leading-[1.15] text-text-dark sm:text-4xl">
            À chaque chemin,
            <br />
            son accompagnement.
          </h2>
          <p className="text-base leading-relaxed text-text-dark/75">
            Un soutien qui s&rsquo;adapte à vous,
            <br />
            en individuel ou avec le groupe.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              eyebrow: "01 / Un espace à vous",
              title: "Thérapie Individuelle",
              description:
                "Déposer ce qui pèse, mieux vous comprendre et retrouver vos ressources.",
              href: "/consultations",
              cta: "Découvrir la thérapie",
              cardBg: "bg-[#E9EFEA]",
              accentColor: "text-[#4E5F54]",
            },
            {
              eyebrow: "02 / La force du collectif",
              title: "Ateliers de Groupe",
              description:
                "Partager, se sentir soutenu·e et explorer de nouvelles façons d'être ensemble.",
              href: "/ateliers",
              cta: "Explorer les ateliers",
              cardBg: "bg-[#F4EAE2]",
              accentColor: "text-[#9B634B]",
            },
          ].map((item) => (
            <article
              key={item.href}
              className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 ${item.cardBg}`}
            >
              <div className="space-y-3">
                <p
                  className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${item.accentColor}`}
                >
                  {item.eyebrow}
                </p>
                <h3 className="font-serif text-2xl font-normal text-text-dark sm:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-dark/75 sm:text-base">
                  {item.description}
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 ${item.accentColor}`}
                >
                  <span>{item.cta}</span>
                  <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
