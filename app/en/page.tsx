import LandingPage from "@/features/landing/en/LandingPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "From Waste to Real Value.",
};

export default function Home() {
  return <LandingPage />;
}