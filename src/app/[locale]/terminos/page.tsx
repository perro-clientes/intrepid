import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { getDictionary, hasLocale } from "@/lib/translations";
import { notFound } from "next/navigation";

export default async function TerminosPage({ params }: PageProps<"/[locale]/terminos">) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict as Record<string, unknown>;
  const terminos = t.terminos as Record<string, string>;

  return (
    <div className="flex flex-col bg-muted min-h-screen p-2">
      <div className="p-2">
        <Navbar dict={t} locale={locale} variant="dark" />
      </div>

      <main className="flex-1 p-6 sm:px-12 sm:py-16 max-w-[1000px] mx-auto">
        <h1 className="text-4xl sm:text-6xl font-thin leading-tight font-heading mb-8">{terminos.title}</h1>
        <p className="text-foreground font-light font-body mb-4 whitespace-pre-line">{terminos.description}</p>
      </main>

      <SiteFooter dict={t} />
    </div>
  );
}
