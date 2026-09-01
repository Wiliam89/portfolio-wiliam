import type { Metadata } from "next";
import { Barlow, Oswald } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

// Oswald: condensada, cara de cartaz de show. Só para títulos.
const display = Oswald({
  variable: "--fonte-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Barlow: largura normal, desenho levemente quadrado. Para leitura.
const corpo = Barlow({
  variable: "--fonte-corpo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.titulo,
    // Páginas internas viram "Arauto — Wiliam Oliveira".
    template: `%s — ${site.nome}`,
  },
  description: site.descricao,
  authors: [{ name: site.nome, url: site.github }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    title: site.titulo,
    description: site.descricao,
    siteName: site.nome,
  },
  twitter: {
    card: "summary_large_image",
    title: site.titulo,
    description: site.descricao,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${corpo.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
