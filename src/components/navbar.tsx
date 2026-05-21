"use client";

import { useState, useEffect } from "react";
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
              className={`${linkColor} hover:text-brand transition-colors`}
            >
              {t.about}
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
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
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10 transition-all duration-300 sm:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link href="/" className="text-white text-2xl font-heading" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/#about" className="text-white text-2xl font-heading" onClick={() => setMenuOpen(false)}>
          {t.about}
        </Link>
        <Link href="/#services" className="text-white text-2xl font-heading" onClick={() => setMenuOpen(false)}>
          {t.services}
        </Link>
        <Link href="/contacto" className="text-white text-2xl font-heading" onClick={() => setMenuOpen(false)}>
          {t.contact}
        </Link>

        <div className="flex gap-6 mt-4">
          <a href="https://www.facebook.com/intrepid" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path fill="none" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/intrepid" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"/></svg>
          </a>
        </div>
      </div>
    </>
  );
}
