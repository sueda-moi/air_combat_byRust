// layout.tsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "air combat",
  description: "air combat is a web3 game built on Solana",
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

          {children}

      </body>
    </html>
  );
}
