import React from "react";
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // you can add other weights if needed
});

export const metadata: Metadata = {
  title: "House of Berry",
  description: "Made with Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
