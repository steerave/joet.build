import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarun (Joe) Teeravechyan — Senior Digital Delivery Leader",
  description:
    "Senior digital leader delivering complex national programs across North America. Now focused on how AI lands inside organizational delivery: where it fits, how systems are designed around existing workflows, how teams adapt.",
  openGraph: {
    title: "Sarun (Joe) Teeravechyan — Senior Digital Delivery Leader",
    description:
      "Senior digital leader delivering complex national programs across North America. Now focused on how AI lands inside organizational delivery: where it fits, how systems are designed around existing workflows, how teams adapt.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
