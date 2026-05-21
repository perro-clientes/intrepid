"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Languages, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const LOCALES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="inline-flex items-center gap-1.5 text-white text-sm hover:text-brand transition-colors font-heading font-medium outline-none cursor-pointer">
        <Languages className="size-4" />
        <span>{current.label}</span>
        <ChevronDown className={`size-4 transition-transform duration-300 ${isOpen ? '-rotate-90' : ''}`} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        {LOCALES.map((lang) => {
          const otherPath = pathname.replace(`/${locale}`, `/${lang.code}`);
          const isActive = lang.code === locale;

          return (
            <DropdownMenuItem
              key={lang.code}
              disabled={isActive}
              onClick={() => {
                document.cookie = `NEXT_LOCALE=${lang.code}; path=/; max-age=31536000; SameSite=Lax`;
                window.location.href = otherPath;
              }}
            >
              {lang.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
