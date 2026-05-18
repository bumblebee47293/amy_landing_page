import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Amy Teaches | Soft Learning. Thoughtful Growth.",
    template: "%s | Amy Teaches",
  },
  description:
    "Soft learning, thoughtful growth, and digital resources for a calmer life. Discover celestial-inspired tools for gentle self-development.",
  keywords: [
    "learning",
    "productivity",
    "language learning",
    "self-development",
    "education",
    "creator",
    "digital products",
    "study planners",
    "journaling",
    "mindful learning",
    "soft growth",
  ],
  authors: [{ name: "Amy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Amy Teaches",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-cream antialiased">{children}</body>
    </html>
  );
}
