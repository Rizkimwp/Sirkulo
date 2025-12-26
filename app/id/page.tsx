import LandingPage from "@/features/landing/LandingPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Barang Bekas Jadi Cerita Baru",
};

export default function Home() {
  return <LandingPage />;
}