import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { Icon, icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Made by Me — Freelance Web Development",
  description: "Elegant custom websites and client portals for creative businesses. Based in Antwerp. Built with clarity, performance, and purpose.",
  keywords: ["freelance web developer", "custom client portal", "web design Antwerp", "madebyme.dev", "frontend developer Belgium"],
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://madebyme.dev/" />
      </head>
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} ${quicksand.variable} antialiased text-white`}
      >
        <div className="fixed inset-0 -z-10">
          <div className="w-full h-full bg-[url('/gradient-hp-bg.jpg')] bg-cover bg-top bg-no-repeat"></div>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        <Navbar />
        <div className="relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

