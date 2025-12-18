import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sirkulo",
    template: "Sirkulo | %s",
  },
  description: "Platform barter barang bekas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body
        className={`$${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />

        <main className="flex-grow ">
          {children} {/* ← INI pengganti Outlet */}
        </main>

        <Footer />
      </body>
    </html>
  );
}
