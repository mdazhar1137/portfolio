import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azhar Creative – Cinematic Visual Storytelling",
  description:
    "Premium branding, films & visual stories crafted with intent. 8+ years of cinematic storytelling.",

  keywords: [
    "Azhar Creative",
    "creative director portfolio",
    "video editing",
    "cinematography",
    "visual storytelling",
    "motion graphics",
    "DI artist",
    "Gen AI workflows",
  ],

  openGraph: {
    title: "Azhar Creative – Cinematic Visual Storytelling",
    description: "Cinematic. Intentional. Premium.",
    url: "https://www.azharcreative.com",
    siteName: "Azhar Creative",
    images: [
      {
        url: "https://www.azharcreative.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Azhar Creative – Cinematic Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Azhar Creative – Cinematic Visual Storytelling",
    description: "Cinematic. Intentional. Premium.",
    images: ["https://www.azharcreative.com/og-image.jpg"],
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