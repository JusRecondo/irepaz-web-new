import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Head from "next/head";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ire Paz",
  description: "Ire Paz es músique, poeta y artista visual. Es fundamentalista de la canción y de la ternura como arma principal para enfrentar este mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script src="https://unpkg.com/hydra-synth"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
        <Footer />
        <canvas id="hydraCanvas"></canvas>
       <Script src="/hydra.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
