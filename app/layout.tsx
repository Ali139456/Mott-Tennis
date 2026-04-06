import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blake Mott Tennis Advisory",
    template: "%s | Blake Mott Tennis Advisory",
  },
  description:
    "High-performance tennis advisory — elite coaching and mentoring from a former ATP-ranked professional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-full flex flex-col bg-background text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
