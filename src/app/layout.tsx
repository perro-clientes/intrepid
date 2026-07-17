import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Intrepid | Logística Internacional y Comercio Exterior",
  description:
    "Soluciones logísticas integrales en comercio exterior. Transporte aéreo, marítimo, terrestre, despacho aduanero, seguros de carga y asesorías especializadas.",
  icons: {
    icon: [
      { url: "/logos/favicon-color.png" },
      { url: "/logos/favicon-white.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
