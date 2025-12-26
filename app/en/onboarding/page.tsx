"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { User, MapPin, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // Simulasi API Call
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-4 overflow-hidden relative">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-green-100/50 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[440px]"
      >
        {/* Progress Bar Sederhana */}
        <div className="flex gap-2 mb-8 justify-center">
          <div className="h-1.5 w-12 bg-green-500 rounded-full" />
          <div className="h-1.5 w-12 bg-gray-200 rounded-full" />
          <div className="h-1.5 w-12 bg-gray-200 rounded-full" />
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 relative">
          {/* Ikon Melayang */}
          <div className="absolute -top-6 -right-4 bg-yellow-400 p-3 rounded-2xl shadow-lg rotate-12">
            <Sparkles className="text-white w-6 h-6" />
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
              Lengkapi Profilmu ♻️
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Bantu kami mengenalmu lebih dekat untuk mulai <br /> 
              <span className="font-bold text-green-600">sirkulasi kebaikan</span> hari ini.
            </p>
          </div>

          <div className="space-y-6">
            {/* Input Username */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">
                Nama Pengguna
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors w-5 h-5" />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none font-semibold text-gray-700 transition-all"
                  placeholder="e.g. budisantoso"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* Input Kota */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">
                Lokasi Domisili
              </label>
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors w-5 h-5" />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none font-semibold text-gray-700 transition-all"
                  placeholder="e.g. Jakarta Selatan"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            {/* Tombol Submit */}
            <button
              onClick={handleSubmit}
              disabled={!username || !city || loading}
              className="w-full group relative overflow-hidden bg-gray-900 disabled:bg-gray-200 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-gray-200 hover:bg-green-600 transition-all duration-300 active:scale-[0.98]"
            >
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Menyiapkan Dashboard...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2"
                  >
                    Mulai Kontribusi <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mini Footer */}
          <p className="text-center mt-8 text-[11px] text-gray-400 font-medium px-4">
            Dengan melanjutkan, kamu setuju untuk menjadi bagian dari komunitas yang menjaga bumi.
          </p>
        </div>

        {/* Floating Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full border border-white mx-auto w-fit"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
            ))}
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">
            Bergabung dengan 12k+ sirkulo squad
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}