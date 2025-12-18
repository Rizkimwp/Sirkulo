
import DonationHero from "./DonationHero"
import DonationSection from "./DonationSection";

const DonationPage = () => {

    return (
        <section id="donation" className="py-16 px-4 bg-gradient-to-b from-green-50 to-white min-h-screen mt-20">
            <DonationHero />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
                <DonationSection />

            </div>
        </section>
    )
}

export default DonationPage;