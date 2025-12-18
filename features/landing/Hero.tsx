
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import bottle from '@/public/assets/image/bottle.png';
import cardboard from '@/public/assets/image/cardbox.png';
import can from '@/public/assets/image/trash.png';
import tv from '@/public/assets/image/tv.png';


const  Hero = ()=> {
    return (
    
      <section className="relative min-h-screen flex items-center pt-5 mt-20 lg:mt-0 md:mt-0 sm:mt-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/50 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-green-200/30 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-bold mb-6">
            <Sparkles size={16} /> <span>Re-use, Re-love, Re-cycle</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
            Barang Bekas Jadi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
              Cerita Baru.
            </span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
            Platform barter modern yang mengubah barang di gudangmu menjadi poin berharga untuk mendapatkan barang yang kamu butuhkan.
          </p>
          <div className="flex flex-wrap gap-4">
            <button  className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-green-600 transition-all shadow-xl shadow-gray-200 active:scale-95">
              Mulai Barter <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-95">
              Jelajahi Market
            </button>
          </div>

          {/* Social Proof Mini */}
          <div className="mt-12 flex items-center gap-4 border-t border-gray-100 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              <span className="text-gray-900 font-bold">1,200+</span> Orang sudah bertukar barang hari ini
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative w-72 h-72 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Main Container */}
          <div className="relative z-10 bg-gradient-to-tr from-emerald-600 to-green-400 rounded-[3.5rem] p-1 w-full h-full flex items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
            <div className="bg-white w-full h-full rounded-[3.2rem] overflow-hidden relative flex items-center justify-center p-10">

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-20 h-20 border-4 border-emerald-900 rounded-full" />
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-emerald-900 rounded-2xl rotate-45" />
              </div>

              {/* Asset Utama di Tengah Container (TV / Elektronik) */}
              <motion.img
                src={tv.src}
                alt="Electronic Waste"
                className="w-32 h-32 object-contain z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />

              {/* Recycle Icon Overlay */}
              <div className="absolute bottom-4 bg-emerald-500 text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase z-20">
                Eco-Cycle
              </div>
            </div>
          </div>

          {/* --- ASSET GAMBAR TAMBAHAN (FLOATING) --- */}

          {/* Asset: Botol Plastik */}
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-12 -left-16 z-20 filter drop-shadow-lg"
          >
            <Image src={bottle} alt="Bottle" className="w-20 h-20 object-contain rotate-[-15deg]" />
          </motion.div>

          {/* Asset: Kardus/Kertas */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-20 -right-20 z-20 filter drop-shadow-lg"
          >
            <Image src={cardboard} alt="Cardboard" className="w-24 h-24 object-contain" />
          </motion.div>

          {/* Asset: Kaleng Alumunium */}
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-16 right-4 z-20 filter drop-shadow-lg"
          >
            <Image src={can} alt="Can" className="w-16 h-16 object-contain rotate-[20deg]" />
          </motion.div>

          {/* --- UI CARDS --- */}

          {/* Floating Card UI - Poin */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-9 -left-24 bg-white p-4 rounded-2xl shadow-2xl z-30 flex items-center gap-3 border border-emerald-50"
          >
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
              <Star fill="currentColor" size={18} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Reward</p>
              <p className="text-lg font-black text-gray-900">+450 Poin</p>
            </div>
          </motion.div>

          {/* Floating Card UI - Weight Info */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
            className="absolute -top-10 -right-25 bg-emerald-900 p-3 rounded-2xl shadow-xl z-30 flex items-center gap-4 border border-emerald-700/50 backdrop-blur-sm"
          >
            {/* Icon Verified Modern */}
            <div className="relative">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* Efek radar halus di belakang icon */}
              <div className="absolute inset-0 w-12 h-12 bg-emerald-500 rounded-full animate-ping opacity-20" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-[0.15em]">Status</p>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              </div>
              <p className="text-lg font-black text-white leading-tight">Lulus Kurasi</p>
              <p className="text-[9px] text-emerald-400/80 font-medium italic">Siap dijemput</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    );
}

export default Hero;