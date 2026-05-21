import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { getDictionary, hasLocale } from "@/lib/translations";
import { notFound } from "next/navigation";

export default async function PoliticasPage({ params }: PageProps<"/[locale]/politicas">) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict as Record<string, unknown>;
  const politicas = t.politicas as Record<string, string>;

  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <div className="p-2">
        <Navbar dict={t} locale={locale} />
      </div>

      <main className="flex-1 p-6 sm:px-12 sm:py-16 max-w-[1000px] mx-auto">
        <h1 className="text-4xl sm:text-6xl font-thin leading-tight font-heading mb-8">{politicas.title}</h1>
        <p className="text-foreground font-light font-body mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-foreground font-light font-body mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-foreground font-light font-body mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p className="text-foreground font-light font-body mb-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </main>

      <SiteFooter dict={t} />
    </div>
  );
}
