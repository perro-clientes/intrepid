import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { getDictionary, hasLocale } from "@/lib/translations";
import { notFound } from "next/navigation";

export default async function ContactoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict as Record<string, unknown>;
  const contacto = t.contacto as Record<string, unknown>;
  const hero = contacto.hero as Record<string, string>;
  const form = contacto.form as Record<string, string>;

  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <div className="p-2">
        <div className="relative p-6 py-24 lg:py-6 sm:px-12 rounded-4xl min-h-[400px] lg:h-[80vh] flex flex-col lg:flex-row justify-center items-start lg:items-center gap-15 bg-cover bg-center bg-no-repeat" style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, #000000c5 100%), url('/image-4.jpg') lightgray 50% / cover no-repeat" }}>
          <Navbar dict={t} locale={locale} />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1 text-white">
              <h1 className="text-4xl md:text-8xl font-thin leading-tight font-heading">{hero.title}</h1>
              <p className="text-md font-thin font-body max-w-lg">{hero.subtitle}</p>
            </div>
          </div>

          <ContactForm form={form} successMessage={form.successMessage} />
        </div>
      </div>

      <SiteFooter dict={t} />
    </div>
  );
}
