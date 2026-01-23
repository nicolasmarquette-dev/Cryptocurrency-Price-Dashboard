import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeSwitch } from "@/components/common/theme-switch/ThemeSwitch";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cryptocurrency Price Dashboard",
  description:
    "This project was completed as part of the Blockchain.com recruitment process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeSwitch />
        {children}
      </body>
    </html>
  );
}
