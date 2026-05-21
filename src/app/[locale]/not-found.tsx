import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

const messages: Record<string, { title: string; cta: string }> = {
  es: { title: "Error. Esta página no está disponible.", cta: "volver al inicio" },
  en: { title: "Error. This page is not available.", cta: "back to home" },
};

export default async function NotFound({ params }: { params?: Promise<{ locale: string }> }) {
  const p = params ? await params : null;
  const locale = p?.locale ?? "es";
  const t = messages[locale] ?? messages.es;

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-6">
      <div className="flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl sm:text-6xl font-thin leading-tight font-heading max-w-lg">
          {t.title}
        </h1>
        <Link
          href={`/${locale}`}
          className="group inline-flex items-center gap-1 font-heading"
        >
          <span className="flex items-center justify-center gap-2.5 px-8 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-md group-hover:bg-[#8BC34A] transition-colors duration-300">
            {t.cta}
          </span>
          <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-primary text-primary-foreground group-hover:bg-[#8BC34A] overflow-hidden transition-colors duration-300">
            <span className="block group-hover:animate-arrow-shift">
              <ArrowRightIcon />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
