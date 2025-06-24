import React from "react";

import type { Metadata } from "next";
import { playfairFont, sloopFont, bodoniFont } from "@/css/fonts";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html
      lang="en"
      className={`${playfairFont.variable} ${sloopFont.variable} ${bodoniFont.variable} font-sans`}
    >
      <body>
        <Header />
        <main className="flex flex-col items-center min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
