'use client';
import React from 'react';
import { CheckCircle2, XCircle, Info, ShieldCheck, Camera, Package, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const standards = [
  {
    category: "Kondisi Fisik",
    icon: Sparkles,
    points: [
      { text: "Fungsi utama berjalan 100% normal", status: "pass" },
      { text: "Tidak ada kerusakan permanen (pecah/patah)", status: "pass" },
      { text: "Kebersihan terjaga (tidak berjamur/bau tajam)", status: "pass" },
      { text: "Lecet halus pemakaian wajar (maksimal 20%)", status: "pass" },
    ]
  },
  {
    category: "Kelengkapan Asset",
    icon: Package,
    points: [
      { text: "Aksesori utama wajib ada (misal: kabel power)", status: "pass" },
      { text: "Box original (Opsional, tapi menambah poin)", status: "info" },
      { text: "Bukan barang imitasi/KW (Khusus kategori tertentu)", status: "pass" },
    ]
  }
];

const StandardKelayakan: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6"
          >
            <ShieldCheck className="text-emerald-600" size={20} />
            <span className="text-xs font-black text-emerald-700 uppercase tracking-widest">Quality Control Standard</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Standar Kelayakan <span className="text-emerald-600">Kurasi</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Kami menjaga ekosistem Sirkulo tetap berkualitas. Pastikan barangmu memenuhi kriteria di bawah ini agar mendapatkan poin maksimal.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {standards.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-800">
                  <group.icon size={24} />
                </div>
                <h3 className="text-xl font-black text-gray-800">{group.category}</h3>
              </div>
              
              <ul className="space-y-4">
                {group.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-3">
                    {point.status === 'pass' ? (
                      <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                    ) : (
                      <Info className="text-blue-500 shrink-0" size={20} />
                    )}
                    <span className="text-gray-600 font-medium text-sm leading-relaxed">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Dos and Don'ts Section */}
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="flex items-center gap-2 text-emerald-400 font-black uppercase tracking-widest text-sm mb-6">
                <CheckCircle2 size={18} /> Tips Lolos Cepat
              </h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">1</span>
                  Foto di tempat terang dengan background polos.
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">2</span>
                  Tunjukkan detail minus (lecet/gores) secara jujur.
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="flex items-center gap-2 text-red-400 font-black uppercase tracking-widest text-sm mb-6">
                <XCircle size={18} /> Pasti Ditolak
              </h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs shrink-0">!</span>
                  Barang pecah belah yang sudah retak parah.
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs shrink-0">!</span>
                  Pakaian dalam bekas atau barang sanitasi.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 text-white rounded-2xl font-black hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 transform active:scale-95">
            <Camera size={20} /> Mulai Foto Barang
          </button>
          <p className="mt-4 text-gray-400 text-xs font-bold uppercase tracking-widest pointer-events-none">
            Proses kurasi membutuhkan waktu 1-2 hari kerja
          </p>
        </div>

      </div>
    </div>
  );
};

export default StandardKelayakan;