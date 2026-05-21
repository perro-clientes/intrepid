import { Poppins, Roboto } from "next/font/google";
import { getDictionary, hasLocale } from "@/lib/translations";
import { TranslationProvider } from "@/components/translation-provider";
import { notFound } from "next/navigation";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export async function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <div
      className={`${poppins.variable} ${roboto.variable} min-h-full flex flex-col antialiased`}
      lang={locale}
    >
      <TranslationProvider dict={dict}>
        {children}
      </TranslationProvider>
    </div>
  );
}
