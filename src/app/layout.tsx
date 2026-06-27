import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
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
