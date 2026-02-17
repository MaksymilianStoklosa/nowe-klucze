import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOWE KLUCZE - Dorabianie kluczy Czechowice-Dziedzice",
  description:
    "Ekspresowe dorabianie kluczy domowych i samochodowych, wymiana zamków, ostrzenie noży, usługi zegarmistrzowskie. Czechowice-Dziedzice, ul. marsz. Józefa Piłsudskiego 18. Tel: 728 899 217",
  keywords: [
    "klucze",
    "klucze czechowice",
    "dorabianie kluczy",
    "dorabiania kluczy czechowice-dziedzice",
    "dorabianie kluczy czechowice",
    "zamki do drzwi",
    "kłódki",
    "zamki do drzwi czechowice",
    "klucze czechowice-dziedzice",
    "wymiana zamków",
    "ostrzenie noży",
    "usługi zegarmistrzowskie",
    "kopiowanie breloków",
    "pieczątki",
    "klucze samochodowe",
    "wkładki do zamków",
  ],
  authors: [{ name: "NOWE KLUCZE" }],
  creator: "NOWE KLUCZE",
  publisher: "NOWE KLUCZE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nowe-klucze.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOWE KLUCZE - Dorabianie kluczy Czechowice-Dziedzice",
    description:
      "Ekspresowe dorabianie kluczy domowych i samochodowych, wymiana zamków, ostrzenie noży, usługi zegarmistrzowskie w Czechowicach-Dziedzicach.",
    url: "https://nowe-klucze.pl",
    siteName: "NOWE KLUCZE",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
