import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: { default: "Sanctra — Repository to production-ready infrastructure", template: "%s — Sanctra" },
  description: "Sanctra analyzes your GitHub repository and delivers reviewable pull requests with production-ready CI/CD, Dockerfiles, and deployment configuration.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
