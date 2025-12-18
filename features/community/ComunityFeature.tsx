"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, BookOpen, ShieldCheck, Gift, MessageSquare } from 'lucide-react';

const communityFeatures = [
  {
    icon: Users,
    title: 'Koneksi Eco-Warrior',
    description: 'Bertemu dan berdiskusi dengan ribuan orang yang memiliki visi yang sama untuk bumi.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Zap,
    title: 'Akses Early-Bird',
    description: 'Dapatkan akses pertama untuk barang-barang langka di katalog sebelum dipublikasikan secara umum.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: BookOpen,
    title: 'Workshop Upcycling',
    description: 'Belajar cara memperbaiki atau mengubah barang lama menjadi karya baru yang bernilai tinggi.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: ShieldCheck,
    title: 'Sistem Barter Aman',
    description: 'Verifikasi anggota komunitas yang ketat menjamin setiap transaksi barter berjalan jujur dan aman.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Gift,
    title: 'Bonus Poin Mingguan',
    description: 'Member aktif di forum komunitas mendapatkan tambahan poin Sirkulo setiap minggunya.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: MessageSquare,
    title: 'Forum Diskusi 24/7',
    description: 'Tanyakan apa saja, mulai dari tips merawat barang hingga rekomendasi jasa pengiriman.',
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function CommunityFeatures() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-[0.3em] mb-3">
              Perks & Benefits
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Lebih Banyak Alasan Untuk <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Bergabung Bersama Kami
              </span>
            </h3>
          </div>
          <p className="text-gray-500 text-lg md:max-w-xs leading-relaxed border-l-4 border-green-100 pl-6">
            Menjadi bagian dari Sirkulo bukan hanya soal barang, tapi soal gaya hidup berkelanjutan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2.5rem] bg-gray-50 border border-transparent hover:bg-white hover:border-green-100 hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                <feature.icon size={28} />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {feature.title}
              </h4>
              
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-gray-300 group-hover:text-green-500 transition-colors">
                <span>Learn more</span>
                <div className="w-8 h-[2px] bg-current"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}