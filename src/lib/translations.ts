import "server-only";

const locales = ["es", "en"] as const;
const defaultLocale = "es" as const;

type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, () => Promise<Record<string, unknown>>> = {
  es: () => import("@/translations/es.json").then((m) => m.default),
  en: () => import("@/translations/en.json").then((m) => m.default),
};

function hasLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

async function getDictionary(locale: string) {
  if (!hasLocale(locale)) {
    return dictionaries[defaultLocale]();
  }
  return dictionaries[locale]();
}

export { locales, defaultLocale, hasLocale, getDictionary };
export type { Locale };
