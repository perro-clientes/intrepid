import Link from "next/link";
import { ActionButton } from "./ui/action-button";

const navLinks = [
  { href: "/about", label: "Nosotros" },
  { href: "/services", label: "Servicios" },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-15 py-8 text-white absolute top-0 left-0 right-0">
      <Link href="/">
        <img
          className="w-32"
          src="/logos/intrepid-logotipo-white.svg"
          alt="Intrepid"
        />
      </Link>

      <ul className="hidden sm:flex gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white hover:text-[#CFD424] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <ActionButton
        label="contactanos"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path fill="none" d="M5 12h14m-7-7l7 7l-7 7"/></svg>
        }
      />
    </nav>
  );
}
