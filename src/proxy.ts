import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SPANISH_COUNTRIES = [
  "ES", "MX", "AR", "CO", "CL", "PE", "UY", "BO", "EC",
  "GT", "CU", "DO", "HN", "SV", "NI", "CR", "PA", "PY", "VE", "GQ",
];

function getLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale === "es" || cookieLocale === "en") return cookieLocale;

  const geo = (request as unknown as Record<string, unknown>).geo as
    | { country?: string }
    | undefined;
  const country = geo?.country || "US";

  return SPANISH_COUNTRIES.includes(country) ? "es" : "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/es/") || pathname === "/es" ||
    pathname.startsWith("/en/") || pathname === "/en"
  ) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_next/data|api|favicon\\.ico|icon\\.svg|logos|image-.*\\.(?:png|jpg|jpeg|gif|svg|webp)$|file\\.svg|globe\\.svg|next\\.svg|vercel\\.svg|window\\.svg|robots\\.txt|sitemap\\.xml|wp-.*|\\.well-known).*)",
  ],
};
