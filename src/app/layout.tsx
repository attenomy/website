import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";
import LoadingSpinner from "@/components/contexts/LoadingSpinner";

export const metadata: Metadata = {
  title: "Attenomy | Innovative Solutions for an Everchanging World",
  description: "Developing innovative solutions for an everchanging world.",
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