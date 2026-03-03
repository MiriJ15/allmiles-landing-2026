import type { Metadata } from "next";
import { Archivo, Comfortaa } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const bodyFont = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const brandFont = Comfortaa({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AllTrips | Turn Spending Into Global Adventures",
  description:
    "AllTrips is a modern fintech travel app that transforms everyday spending into miles you can redeem for flights directly inside the app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${brandFont.variable} bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
