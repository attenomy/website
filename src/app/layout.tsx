import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";
import LoadingSpinner from "@/components/contexts/LoadingSpinner";

export const metadata: Metadata = {
  metadataBase: new URL("https://attenomy.com"),
  title: {
    default: "Attenomy | Innovative Solutions for an Everchanging World",
    template: "%s | Attenomy",
  },
  description: "Developing innovative solutions for an everchanging world. Transforming ideas into reality with cutting-edge technology.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Attenomy | Innovative Solutions for an Everchanging World",
    description: "Developing innovative solutions for an everchanging world. Transforming ideas into reality with cutting-edge technology.",
    url: "https://attenomy.com",
    siteName: "Attenomy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attenomy | Innovative Solutions for an Everchanging World",
    description: "Developing innovative solutions for an everchanging world. Transforming ideas into reality with cutting-edge technology.",
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
  icons: {
    icon: [
      { url: "/attenomy-squircle.svg", type: "image/svg+xml" },
      { url: "/attenomy-squircle-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/attenomy-squircle-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/favicon.ico",
    apple: "/attenomy-squircle-light.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>
          <LoadingSpinner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}