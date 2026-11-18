import type { Metadata, Viewport } from "next";
import { Chewy, Nunito } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/lib/siteUrl";

const display = Chewy({ weight: "400", subsets: ["latin"], variable: "--font-chewy", display: "swap" });
const body = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });


const title = `${site.name} | Youth entrepreneurship in ${site.location}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [
    "youth entrepreneurship",
    "student business program",
    "Woodstock GA",
    "Cherokee County schools",
    "middle school business club",
    "high school pitch competition",
    "Atlanta",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    url: "/",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "An illustrated lemonade stand with the words: Every big business starts with a lemonade stand." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffd93b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
