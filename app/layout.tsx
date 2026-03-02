import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading"
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "AllMiles | Turn Spending Into Global Adventures",
  description:
    "AllMiles is a modern fintech travel app that transforms everyday spending into miles you can redeem for flights directly inside the app."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
