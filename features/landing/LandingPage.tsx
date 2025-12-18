'use client';
import CTA from "./Cta";
import Feature from "./Feature";
import Hero from "./Hero";
export default function LandingPage() {
    return (
        <div className="bg-white overflow-hidden">
            <Hero />
            <Feature/>
            <CTA/>
        </div>
    )
}