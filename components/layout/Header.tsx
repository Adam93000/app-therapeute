"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/consultations", label: "Prendre RDV" },
  { href: "/ateliers", label: "Ateliers" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex flex-col"
        >
          <span className="font-serif text-2xl font-normal tracking-tight text-text-dark sm:text-[26px]">
            Catalina Pedrero
          </span>
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-text-dark/70 sm:text-[11px]">
            Psychopraticienne
          </span>
        </Link>

        {/* Tablet & Desktop navigation */}
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-text-dark/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="rounded-xl border border-primary/40 bg-background px-4 py-2 text-sm font-medium text-text-dark transition-colors hover:border-primary hover:bg-primary/10 md:hidden"
        >
          {isMenuOpen ? "Fermer" : "Menu"}
        </button>
      </div>

      {/* Mobile navigation dropdown */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigation mobile"
          className="border-t border-primary/20 bg-background px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
                      isActive ? "bg-primary/15 text-primary" : "text-text-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
