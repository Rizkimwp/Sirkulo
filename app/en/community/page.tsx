"use client";

import { motion } from 'framer-motion';
import {
  MessageCircle,
  Trophy,
  Calendar,
  ArrowRight,
  Heart,
  Users,
  Share2,
} from 'lucide-react';
import Image from 'next/image';
import CommunityFeatures from '@/features/community/ComunityFeature';

// --- Mock Data ---
const stats = [
  { label: 'Active Members', value: '12.4K', icon: Users, color: 'text-blue-600' },
  { label: 'Items Circulated', value: '45K+', icon: Share2, color: 'text-green-600' },
  { label: 'Waste Reduced', value: '5.2 Tons', icon: Heart, color: 'text-emerald-600' },
];

const leaders = [
  { name: 'Aditya Pratama', points: 2840, role: 'Top Donor', initial: 'A' },
  { name: 'Siska Millenia', points: 2150, role: 'Eco Warrior', initial: 'S' },
  { name: 'Rahmat Hidayat', points: 1920, role: 'Daily Swapper', initial: 'R' },
];

export default function CommunityPage() {
  return (
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
              #SirkuloSquad Community
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
              One Action, <br />
              <span className="text-green-600">Thousands of Impacts.</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-xl">
              Join Indonesia’s most active circular barter community. Exchange items,
              reduce waste, and build meaningful connections.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-green-600 transition-all shadow-xl shadow-gray-200">
                Join Discord <MessageCircle size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                View Events
              </button>
            </div>
          </motion.div>

          {/* Mosaic Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-10">
              <div className="h-60 rounded-[2.5rem] bg-gray-200 overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600"
                  className="w-full h-full object-cover"
                  height={200}
                  width={200}
                  alt="people"
                />
              </div>
              <div className="h-40 rounded-[2.5rem] bg-green-100 flex items-center justify-center p-8">
                <p className="text-green-700 font-bold text-center italic">
                  &quot;Barter is a new way to care for the planet&quot;
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-40 rounded-[2.5rem] bg-blue-100 flex items-center justify-center overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600"
                  className="w-full h-full object-cover"
                  height={200}
                  width={200}
                  alt="community"
                />
              </div>
              <div className="h-60 rounded-[2.5rem] bg-gray-200 overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600"
                  className="w-full h-full object-cover"
                  height={200}
                  width={200}
                  alt="interaction"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className={`w-12 h-12 ${stat.color} bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
              >
                <stat.icon size={24} />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMMUNITY FEATURES --- */}
      <CommunityFeatures />

      {/* --- LEADERBOARD & EVENTS --- */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Leaderboard */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
                <Trophy size={24} />
              </div>
              <h2 className="text-3xl font-black text-gray-900">
                Circular Heroes
              </h2>
            </div>

            <div className="space-y-4">
              {leaders.map((user, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-green-100/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-black text-gray-200 w-6">
                      0{i + 1}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold">
                      {user.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{user.name}</h4>
                      <p className="text-xs font-bold text-green-600 uppercase tracking-wider">
                        {user.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-gray-900">
                      {user.points}
                    </p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      Impact Points
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                <Calendar size={24} />
              </div>
              <h2 className="text-3xl font-black text-gray-900">
                Upcoming Events
              </h2>
            </div>

            <div className="bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="relative z-10 space-y-10">
                <div className="group cursor-pointer">
                  <span className="text-green-400 font-bold text-sm tracking-widest uppercase">
                    June 24, 2024
                  </span>
                  <h4 className="text-xl font-bold mt-2 group-hover:text-green-400 transition-colors">
                    Sirkulo Offline Meetup: Jakarta
                  </h4>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    Upcycling workshop and live item exchange at GBK Urban Forest.
                  </p>
                </div>

                <div className="h-px bg-white/10 w-full" />

                <div className="group cursor-pointer">
                  <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">
                    July 2, 2024
                  </span>
                  <h4 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors">
                    Webinar: Decluttering 101
                  </h4>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    Practical tips to organize your home without sending waste to landfills,
                    with @EcoMinimalist.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-green-600 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-green-200">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Be Part of the Change?
          </h2>
          <p className="text-green-50 mb-10 text-lg">
            Take your first small step today by joining 12,000+ members.
          </p>
          <button className="px-10 py-5 bg-white text-green-700 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all flex items-center gap-3 mx-auto shadow-xl">
            Sign Up Now <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}
