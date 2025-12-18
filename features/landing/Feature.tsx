
import FeatureCard from "@/components/ui/FeatureCard";
import { CheckCircle, Leaf, RefreshCcw, Users } from "lucide-react"

const Feature = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Mengapa Memilih Sirkulo?</h2>
                    <p className="text-gray-500">Sistem cerdas untuk gaya hidup berkelanjutan yang lebih hemat dan berdampak bagi bumi.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard icon={RefreshCcw} title="Poin Sirkular" description="Nilai barang tetap berputar, bukan terbuang menjadi sampah." index={1} />
                    <FeatureCard icon={CheckCircle} title="Kurasi Ketat" description="Setiap barang dicek kualitasnya agar Anda menerima yang terbaik." index={2} />
                    <FeatureCard icon={Users} title="Peer-to-Peer" description="Transaksi langsung antar pengguna, lebih cepat dan transparan." index={3} />
                    <FeatureCard icon={Leaf} title="Eco-Impact" description="Kurangi jejak karbon dengan memperpanjang usia pakai barang." index={4} />
                </div>
            </div>
        </section>
    )
}

export default Feature;