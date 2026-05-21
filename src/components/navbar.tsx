import Link from "next/link";
import { ArrowRightIcon } from "./ui/icons";
import { LanguageSwitcher } from "./language-switcher";
import type { Dict } from "./types";

export function Navbar({ dict, locale }: { dict: Dict; locale: string }) {
  const t = dict.nav as Record<string, string>;

  return (
    <nav className="flex items-center justify-between p-6 sm:px-12 py-8 text-white absolute top-0 left-0 right-0">
      <Link href="/">
        <img
          className="w-32"
          src="/logos/intrepid-logotipo-white.svg"
          alt="Intrepid"
        />
      </Link>

      <ul className="hidden sm:flex gap-6 items-center">
        <li>
          <Link
            href="/#about"
            className="text-white hover:text-brand transition-colors"
          >
            {t.about}
          </Link>
        </li>
        <li>
          <Link
            href="/#services"
            className="text-white hover:text-brand transition-colors"
          >
            {t.services}
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        
        <Link
          href="/contacto"
          className="inline-flex items-center gap-1 font-heading"
        >
          <span className="flex items-center justify-center gap-2.5 px-8 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-md">
            {t.contact}
          </span>
          <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-primary text-primary-foreground">
            <ArrowRightIcon />
          </span>
        </Link>

        <LanguageSwitcher locale={locale} />
      </div>
    </nav>
  );
}
