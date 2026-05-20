import Link from "next/link";
import { ActionButton } from "./ui/action-button";
import { ArrowRightIcon } from "./ui/icons";

const navLinks = [
  { href: "/#about", label: "Nosotros" },
  { href: "/#services", label: "Servicios" },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 sm:px-12 py-8 text-white absolute top-0 left-0 right-0">
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
              className="text-white hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/contacto">
        <ActionButton
          label="contactanos"
          icon={<ArrowRightIcon />}
        />
      </Link>
    </nav>
  );
}
