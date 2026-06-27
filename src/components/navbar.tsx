"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ArrowRightIcon } from "./ui/icons";
import { LanguageSwitcher } from "./language-switcher";
import type { Dict } from "./types";

export function Navbar({ dict, locale, variant = "light" }: { dict: Dict; locale: string; variant?: "light" | "dark" }) {
  const t = dict.nav as Record<string, string>;
  const isDark = variant === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const path = window.location.pathname;
    const isHome = path === "/" || path === `/${locale}` || path === `/${locale}/`;

    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [locale]);

  const showGlass = scrolled && !menuOpen;
  const linkColor = showGlass || isDark ? "text-brand-foreground" : "text-white";
  const logoDark = (showGlass || isDark) && !menuOpen;

  return (
    <>
      <nav className={`flex items-center justify-between px-8 sm:px-8 sm:py-3 ${menuOpen ? "text-white" : isDark ? "text-brand-foreground" : "text-white"} fixed top-4 left-1/2 -translate-x-1/2 w-full z-50 rounded-full transition-all duration-300 ${showGlass ? "max-w-[90vw] bg-white/20 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}>

        <Link href="/" className="hidden sm:block">
          <img
            className={`w-32 ${logoDark ? "brightness-0" : ""}`}
            src="/logos/intrepid-logotipo-white.svg"
            alt="Intrepid"
          />
        </Link>

        <Link href="/" className="sm:hidden">
          <img
            className={`w-20 h-20 ${logoDark ? "brightness-0" : ""}`}
            src="/logos/intrepid-logotipo-white.svg"
            alt="Intrepid"
          />
        </Link>

        <ul className="hidden sm:flex gap-6 items-center">
          <li>
            <Link
              href="/#about"
              onClick={(e) => scrollToSection(e, "about")}
              className={`${linkColor} hover:text-brand transition-colors`}
            >
              {t.about}
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              onClick={(e) => scrollToSection(e, "services")}
              className={`${linkColor} hover:text-brand transition-colors`}
            >
              {t.services}
            </Link>
          </li>
        </ul>

        <div className="hidden sm:flex items-center gap-3">

          <Link
            href="/contacto"
            className="group inline-flex items-center gap-1 font-heading"
          >
            <span className="flex items-center justify-center gap-2.5 px-8 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-md group-hover:bg-[#B3B716] transition-colors duration-300">
              {t.contact}
            </span>
            <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-primary text-primary-foreground group-hover:bg-[#B3B716] overflow-hidden transition-colors duration-300">
              <span className="block group-hover:animate-arrow-shift">
                <ArrowRightIcon />
              </span>
            </span>
          </Link>

          <LanguageSwitcher locale={locale} textColor={linkColor} />
        </div>

        <button
          className="sm:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="size-6 text-white" />
          ) : (
            <Menu className={`size-6 ${linkColor}`} />
          )}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10 transition-all duration-300 sm:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <Link href="/" className="text-white text-2xl font-heading" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/#about" className="text-white text-2xl font-heading" onClick={(e) => { scrollToSection(e, "about"); setMenuOpen(false); }}>
          {t.about}
        </Link>
        <Link href="/#services" className="text-white text-2xl font-heading" onClick={(e) => { scrollToSection(e, "services"); setMenuOpen(false); }}>
          {t.services}
        </Link>
        <Link href="/contacto" className="text-white text-2xl font-heading" onClick={() => setMenuOpen(false)}>
          {t.contact}
        </Link>

        <div className="flex gap-6 mt-4">
          <a href="https://www.linkedin.com/in/intrepid-logistics-25240a417/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/intrepid.logistics/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" /></svg>
          </a>
        </div>
      </div>
    </>
  );
}
