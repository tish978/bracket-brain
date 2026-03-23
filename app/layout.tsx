import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BracketBrain — March Madness Trivia",
  description: "Think you're a real March Madness fan? Prove it. 5 questions. No excuses.",
  openGraph: {
    title: "BracketBrain — March Madness Trivia",
    description: "Think you're a real March Madness fan? Prove it. 5 questions. No excuses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white flex flex-col min-h-screen" style={{ fontFamily: "var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif" }}>
        <GrainOverlay />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
