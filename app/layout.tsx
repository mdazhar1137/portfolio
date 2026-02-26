import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio — Creative Director & Visual Storyteller",
  description:
    "Award-level creative portfolio spanning video editing, cinematography, UX design, motion graphics, DI, and Gen AI-assisted workflows. 8+ years of cinematic storytelling.",
  keywords: [
    "portfolio",
    "video editing",
    "cinematographer",
    "UX designer",
    "motion graphics",
    "DI artist",
    "Gen AI",
  ],
  openGraph: {
    title: "Portfolio — Creative Director & Visual Storyteller",
    description: "Cinematic. Intentional. Premium.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="grain-overlay bg-[#121212] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
