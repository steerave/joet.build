import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Design",
  description:
    "Senior digital leader delivering complex programs at scale. Building AI systems to transform how digital systems are designed and executed.",
  openGraph: {
    title: "Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Design",
    description:
      "Senior digital leader delivering complex programs at scale. Building AI systems to transform how digital systems are designed and executed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${newsreader.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
