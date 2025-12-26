import MarketPage from "@/features/market/en/MarketPage";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Marketplace",
};


export default function Market () {
    return (
        <MarketPage/>
    )
}