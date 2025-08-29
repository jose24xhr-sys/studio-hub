import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_Dirt } from "next/font/google";
import "./globals.css";

const rubikDirt = Rubik_Dirt({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-dirt",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "Studio Hub",
  description: "Sitio de Studio Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubikDirt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
