import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Saad Filali | AI & Data Engineer",
    template: "%s | Saad Filali",
  },
  description:
    "Ingénieur Data & Intelligence Artificielle spécialisé en LLM, RAG, AI Agents, NLP, Machine Learning et Data Engineering.",
  keywords: [
    "AI Engineer",
    "Data Engineer",
    "Machine Learning Engineer",
    "LLM Engineer",
    "RAG",
    "AI Agents",
    "Data Scientist",
    "NLP",
    "Saad Filali",
  ],
  authors: [{ name: "Saad Filali" }],
  creator: "Saad Filali",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: "Saad Filali | AI & Data Engineer",
    description:
      "Des pipelines de données aux systèmes IA en production : LLM, RAG, agents, NLP et Data Engineering.",
    siteName: "Saad Filali — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Filali | AI & Data Engineer",
    description:
      "Ingénieur Data & IA spécialisé en LLM, RAG, AI Agents, NLP et Data Engineering.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Aller au contenu
        </a>
        <noscript>
          <style>{`[style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
