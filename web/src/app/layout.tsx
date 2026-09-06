import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";
import LoadingSpinner from "@/components/contexts/LoadingSpinner";

const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-9596215709723960";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://attenomy.com"),
  title: {
    default: "Attenomy | Innovative Solutions for a Digital World",
    template: "%s | Attenomy",
  },
  description: "Developing innovative solutions for an everchanging world. Transforming ideas into reality with cutting-edge technology.",
    alternates: {
    canonical: "/",
    languages: {
      "en-US": "https://attenomy.com",
    },
  },
  openGraph: {
    title: "Attenomy | Innovative Solutions for an Everchanging World",
    description: "Developing innovative solutions for an everchanging world. Transforming ideas into reality with cutting-edge technology.",
    url: "https://attenomy.com",
    siteName: "Attenomy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://attenomy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Attenomy - Developing Innovative Solutions for an Everchanging World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Attenomy | Innovative Solutions for an Everchanging World",
    description: "Developing innovative solutions for an everchanging world. Transforming ideas into reality with cutting-edge technology.",
    images: ["https://attenomy.com/og-image.png"],
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
      { url: "/logos/attenomy-squircle.svg", type: "image/svg+xml" },
      { url: "/logos/attenomy-squircle-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/attenomy-squircle-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logos/attenomy-squircle-light.png",
  },
  other: {
    "google-adsense-account": adsenseClientId,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content={adsenseClientId} />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://attenomy.com/#organization",
                  "name": "Attenomy",
                  "url": "https://attenomy.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://attenomy.com/logos/attenomy-squircle.svg"
                  },
                  "description": "Developing innovative solutions for an everchanging world. Transforming ideas into reality with cutting-edge technology."
                },
                {
                  "@type": "WebSite",
                  "@id": "https://attenomy.com/#website",
                  "url": "https://attenomy.com",
                  "name": "Attenomy",
                  "publisher": {
                    "@id": "https://attenomy.com/#organization"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>
          <LoadingSpinner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
