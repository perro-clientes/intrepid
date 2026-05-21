"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./ui/icons";
import { LanguageSwitcher } from "./language-switcher";
import type { Dict } from "./types";

export function Navbar({ dict, locale, variant = "light" }: { dict: Dict; locale: string; variant?: "light" | "dark" }) {
  const t = dict.nav as Record<string, string>;
  const isDark = variant === "dark";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`flex items-center justify-between px-6 sm:px-8 py-3 ${isDark ? "text-brand-foreground" : "text-white"} fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-[1500px] z-50 rounded-full transition-all duration-300 ${scrolled ? "bg-white/20 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}>
      <Link href="/">
        <img
          className={`w-32 ${scrolled || isDark ? "brightness-0" : ""}`}
          src="/logos/intrepid-logotipo-white.svg"
          alt="Intrepid"
        />
      </Link>

      <ul className="hidden sm:flex gap-6 items-center">
        <li>
          <Link
            href="/#about"
            className={`${scrolled || isDark ? "text-brand-foreground" : "text-white"} hover:text-brand transition-colors`}
          >
            {t.about}
          </Link>
        </li>
        <li>
          <Link
            href="/#services"
            className={`${scrolled || isDark ? "text-brand-foreground" : "text-white"} hover:text-brand transition-colors`}
          >
            {t.services}
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        
        <Link
          href="/contacto"
          className="group inline-flex items-center gap-1 font-heading"
        >
          <span className="flex items-center justify-center gap-2.5 px-8 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-md group-hover:bg-[#8BC34A] transition-colors duration-300">
            {t.contact}
          </span>
          <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-primary text-primary-foreground group-hover:bg-[#8BC34A] overflow-hidden transition-colors duration-300">
            <span className="block group-hover:animate-arrow-shift">
              <ArrowRightIcon />
            </span>
          </span>
        </Link>

        <LanguageSwitcher locale={locale} />
      </div>
    </nav>
  );
}
