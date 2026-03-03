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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alltrips.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AllTrips | Your Dreams, Our Routes",
  description:
    "AllTrips is a Baku-based travel agency that plans unforgettable trips to top destinations worldwide. Let us handle flights, hotels, and tours — you just enjoy the journey.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AllTrips",
    title: "AllTrips | Your Dreams, Our Routes",
    description:
      "AllTrips is a Baku-based travel agency that plans unforgettable trips to top destinations worldwide. Let us handle flights, hotels, and tours — you just enjoy the journey.",
    images: [
      {
        url: "/main_background.jpg",
        width: 1600,
        height: 900,
        alt: "AllTrips — travel agency based in Baku",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AllTrips | Your Dreams, Our Routes",
    description:
      "AllTrips is a Baku-based travel agency that plans unforgettable trips to top destinations worldwide.",
    images: ["/main_background.jpg"],
  },
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
