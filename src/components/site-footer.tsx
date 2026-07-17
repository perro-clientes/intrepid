import Link from "next/link";
import Image from "next/image";
import type { Dict } from "./types";

export function SiteFooter({ dict }: { dict: Dict }) {
  const t = dict.footer as Record<string, string>;

  return (
    <footer className="p-2 text-white">
      <div className="bg-brand-foreground p-12 rounded-4xl">
        <div className="flex flex-col gap-8 max-w-[1440px] mx-auto">
          <div className="flex justify-between flex-col sm:flex-row gap-8 sm:gap-0">
            <div>
              <Image className="w-40 mb-10" src="/logos/intrepid-logotipo-white.svg" alt="Intrepid" width={160} height={48} unoptimized />
              <div className="flex flex-row flex-wrap gap-8">
                <div>
                  <p className="text-brand">{t.phoneLabel}</p>
                  <a href="tel:+088123456789" className="hover:text-brand transition-colors">{t.phone}</a>
                </div>

                <div>
                  <p className="text-brand">{t.emailLabel}</p>
                  <a href="mailto:info@intrepid-logistics.com" className="hover:text-brand transition-colors">{t.email}</a>
                </div>
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-8 sm:gap-14">
              <div className="flex flex-col gap-2">
                <p className="text-brand">{t.phoneLabel}</p>
                <Link href="/terminos" className="hover:text-brand transition-colors">{t.terms}</Link>
                <Link href="/politicas" className="hover:text-brand transition-colors">{t.privacy}</Link>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-brand">{t.others}</p>
                <a href="mailto:info@intrepid-logistics.com" className="hover:text-brand transition-colors">{t.contactLink}</a>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-brand">{t.social}</p>
                <div className="flex flex-row gap-4">
                  <a href="https://www.linkedin.com/in/intrepid-logistics-25240a417/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32px" height="32px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096a1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277c-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387c2.704 0 3.203 1.778 3.203 4.092v4.71z" fill="currentColor" /></svg>
                  </a>
                  <a href="https://www.instagram.com/intrepid.logistics/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32px" height="32px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216a4.61 4.61 0 0 0-2.633-2.633a6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42a4.607 4.607 0 0 0-2.633 2.633a6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419a4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" fill="currentColor" /><circle cx="11.994" cy="11.979" r="3.003" fill="currentColor" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="text-sm">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
