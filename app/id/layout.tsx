import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ".././globals.css";

import Providers from "@/providers/SessionProvider";
import TanStackProvider from "@/providers/TanstackProvider";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/providers/AuthProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
        <Providers>
          <TanStackProvider>


            <Header />

            <main className="flex-grow ">
              <Toaster

                position="top-center"
                toastOptions={{
                  duration: 3000,
                }}
              />
              <AuthProvider>
                {children}
              </AuthProvider> {/* ← INI pengganti Outlet */}
            </main>

            <Footer />
          </TanStackProvider>
        </Providers>
      </body>
    </html>
  );
}
