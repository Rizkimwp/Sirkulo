"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    Plus,
    Wallet,
    Package,
    Clock,
    ArrowUpRight,
    Leaf,
    ChevronRight,
    TrendingUp,
    LucideIcon
} from "lucide-react";
interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon; // Khusus untuk komponen ikon dari lucide-react
    color: string;    // Untuk class Tailwind seperti 'bg-green-500'
    detail: string;   // Teks tambahan di bawah angka
}
// --- Sub-komponen Card Statistik ---
const StatCard = ({ title, value, icon: Icon, color, detail }: StatCardProps) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl ${color} bg-opacity-10`}>
                <Icon className={color.replace('bg-', 'text-')} size={24} />
            </div>
            <span className="flex items-center text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                <TrendingUp size={12} className="mr-1" /> +12%
            </span>
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-3xl font-black text-gray-900 mt-1">{value}</h3>
            <p className="text-[11px] text-gray-400 mt-2 font-medium uppercase tracking-wider">{detail}</p>
        </div>
    </motion.div>
);

export default function DashboardPage() {
    const { data: session } = useSession();
    const router = useRouter();

    const myItems = [
        { name: "Botol Plastik Premium", status: "Menunggu Kurasi", date: "12 Des 2023", points: "+50", color: "text-yellow-600 bg-yellow-50" },
        { name: "Kardus Bekas TV 50 Inch", status: "Dikirim", date: "10 Des 2023", points: "+120", color: "text-blue-600 bg-blue-50" },
    ];

    return (
        <div className="min-h-screen bg-[#FBFBFE] pb-20">
            {/* Header Area */}
            <div className="bg-white border-b border-gray-100 pt-28 pb-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">👋</span>
                            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                                Halo, {session?.user?.name?.split(' ')[0] ?? "Teman Hijau"}!
                            </h1>
                        </div>
                        <p className="text-gray-500 font-medium">
                            Kamu telah menyelamatkan <span className="text-green-600 font-bold">2.4kg</span> emisi karbon bulan ini.
                        </p>
                    </motion.div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push("/upload")}
                        className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-xl shadow-gray-200"
                    >
                        <Plus size={20} /> Upload Barang
                    </motion.button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 -mt-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <StatCard
                        title="Total Poin"
                        value="1,240"
                        icon={Wallet}
                        color="bg-green-500"
                        detail="Poin Tersedia"
                    />
                    <StatCard
                        title="Barang Aktif"
                        value="03"
                        icon={Package}
                        color="bg-blue-500"
                        detail="Sedang Diproses"
                    />
                    <StatCard
                        title="Dampak Ekosistem"
                        value="Level 4"
                        icon={Leaf}
                        color="bg-emerald-500"
                        detail="Pahlawan Lingkungan"
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Recent Items List */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                                    <Clock size={20} className="text-gray-400" /> Barang Terbaru
                                </h2>
                                <button className="text-sm font-bold text-green-600 hover:underline">Lihat Semua</button>
                            </div>

                            <div className="space-y-4">
                                {myItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-bold group-hover:bg-white transition-colors">
                                                {item.name[0]}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-800 leading-none mb-1">{item.name}</h4>
                                                <p className="text-[11px] text-gray-400 font-medium">{item.date}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <div className="text-right hidden sm:block">
                                                <p className="font-black text-gray-900">{item.points}</p>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase">Points</p>
                                            </div>
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${item.color}`}>
                                                {item.status}
                                            </span>
                                            <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-900 transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Info/Tips */}
                    <div className="space-y-6">
                        <div className="bg-green-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-black text-xl mb-2">Tips Poin Melimpah! 🚀</h3>
                                <p className="text-green-100 text-sm leading-relaxed mb-6">
                                    Pastikan foto barangmu terang dan deskripsi lengkap untuk mempercepat proses kurasi.
                                </p>
                                <button className="w-full py-3 bg-white text-green-700 rounded-xl font-bold text-sm shadow-lg">
                                    Pelajari Tips
                                </button>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 blur-2xl rounded-full" />
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
                            <h3 className="font-black text-gray-900 mb-4">Butuh Bantuan?</h3>
                            <button className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-2xl text-sm font-bold text-gray-700 hover:bg-gray-100 transition-colors">
                                Hubungi Support <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}