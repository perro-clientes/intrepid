import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { ActionButton } from "@/components/ui/action-button";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { HeroSection } from "@/components/ui/hero-section";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getDictionary, hasLocale } from "@/lib/translations";
import { notFound } from "next/navigation";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict as Record<string, unknown>;
  const home = t.home as Record<string, unknown>;
  const hero = home.hero as Record<string, string>;
  const about = home.about as Record<string, unknown>;
  const ctaBanner = home.ctaBanner as Record<string, string>;
  const services = home.services as Record<string, unknown>;
  const contact = home.contact as Record<string, unknown>;
  const contactForm = contact.form as Record<string, string>;
  const mission = about.mission as Record<string, string>;
  const vision = about.vision as Record<string, string>;
  const values = about.values as Record<string, string>;
  const serviceItems = services.items as Array<Record<string, string>>;
  const asesorias = services.asesorias as Record<string, unknown>;
  const asesoriasItems = asesorias.items as string[];

  return (
    <div className="flex min-h-screen flex-col bg-muted">

      <HeroSection className="h-[80vh]" background="linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, #000000c5 100%), url('/image-1.png') lightgray 50% / cover no-repeat">
      <div className="2xl:max-w-[1440px] 2xl:mx-auto">
        <Navbar dict={t} locale={locale} />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1 text-white">
            <h1 className="text-4xl sm:text-8xl font-thin leading-tight font-heading">{hero.title}</h1>
            <p className="text-md font-thin font-body max-w-lg">{hero.subtitle}</p>
          </div>
          <ActionButton label={hero.cta} icon={<ArrowRightIcon />} />
        </div>
      </div>

      </HeroSection>

      <main className="flex-1 p-2">
        <div id="about" className="p-6 sm:px-12 sm:py-20 flex flex-col items-center justify-center gap-8 max-w-[1440px] mx-auto relative">
          <SectionHeader
            chip={about.chip as string}
            heading={about.heading as string}
            description={about.description as string}
          />

          <div className="flex flex-wrap sm:flex-nowrap gap-8">
            <ServiceCard title={mission.title} description={mission.description} />
            <ServiceCard title={vision.title} description={vision.description} />
            <ServiceCard title={values.title} description={values.description} />
          </div>
        </div>

        <HeroSection className="max-w-[1500px] mx-auto" background="linear-gradient(-90deg, rgba(0, 0, 0, 0.00) 0%, #000000c5 100%), url('/image-1.png') lightgray 50% / cover no-repeat">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1 text-white">
              <h2 className="text-4xl sm:text-7xl font-thin leading-tight font-heading">{ctaBanner.title}</h2>
              <p className="text-md font-thin font-body max-w-lg">{ctaBanner.subtitle}</p>
            </div>
            <ActionButton label={ctaBanner.cta} icon={<ArrowRightIcon />} />
          </div>
        </HeroSection>

        <div id="services" className="p-6 sm:px-12 sm:py-20 flex flex-col items-center justify-center gap-8">
          <SectionHeader
            chip={services.chip as string}
            heading={services.heading as string}
            description={services.description as string}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl">
            {serviceItems.map((item, i) => (
              <ServiceCard key={i} title={item.title} description={item.description} />
            ))}

            <div className="p-6 bg-white rounded-4xl w-full flex flex-col sm:flex-row gap-8 sm:col-span-2">
              <div className="rounded-3xl w-full sm:max-w-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/image-16.png')" }}>
                <div className="aspect-[4/3]" />
              </div>
              <div>
                <h3 className="text-xl font-regular leading-tight font-heading">{asesorias.title as string}</h3>
                <p className="text-foreground font-light font-body">{asesorias.description as string}</p>
                <h4 className="text-foreground font-light font-body">{asesorias.includesLabel as string}</h4>
                <ul className="list-disc list-inside text-foreground font-light font-body space-y-1">
                  {asesoriasItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:px-12 sm:py-20 flex flex-col items-center justify-center gap-8">
          <SectionHeader
            chip={contact.chip as string}
            heading={contact.heading as string}
            description={contact.description as string}
          />

          <form action="" className="w-full max-w-3xl flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input type="text" name="name" placeholder={contactForm.name} className="bg-white min-h-[40px]" />
              <Input type="text" name="company" placeholder={contactForm.company} className="bg-white min-h-[40px]" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input type="email" name="email" placeholder={contactForm.email} className="bg-white min-h-[40px]" />
              <Input type="tel" name="phone" placeholder={contactForm.phone} className="bg-white min-h-[40px]" />
            </div>

            <Textarea name="message" rows={6} placeholder={contactForm.message} className="bg-white min-h-[40px]" />

            <ActionButton label={contactForm.submit} icon={<ArrowRightIcon />} />
          </form>
        </div>

      </main>
      <SiteFooter dict={t} />
    </div>
  );
}
