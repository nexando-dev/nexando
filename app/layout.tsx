import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Nexando – Modern Innovation Ecosystem",
  description:
    "A premium innovation ecosystem focused on future-oriented ideas, digital experiences, creative ventures, and scalable innovation.",
  keywords: [
    "innovation",
    "future-tech",
    "digital experiences",
    "creative ventures",
    "ecosystem",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Nexando – Modern Innovation Ecosystem",
    description:
      "A premium innovation ecosystem focused on future-oriented ideas, digital experiences, creative ventures, and scalable innovation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
