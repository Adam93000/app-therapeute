import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background py-8 text-sm text-text-dark/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p>© 2026 Cabinet de Thérapie. Tous droits réservés.</p>

        <div className="flex gap-6">
          <Link href="/consultations" className="hover:text-primary">
            Consultations
          </Link>
          <Link href="/ateliers" className="hover:text-primary">
            Ateliers
          </Link>
        </div>
      </div>
    </footer>
  );
}
