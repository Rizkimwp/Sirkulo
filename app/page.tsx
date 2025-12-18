import { Metadata } from "next";
import LandingPage from "../features/landing/LandingPage";


export const metadata: Metadata = {
  title: "Barang Bekas Jadi Cerita Baru",
};

export default function Home() {
  return <LandingPage />;
}