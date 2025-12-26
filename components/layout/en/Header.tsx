'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search, Heart, LayoutGrid, Users, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const lang = pathname.startsWith('/id') ? 'id' : 'en';
  
  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Marketplace', href: '/en/market', icon: Search },
    { name: 'How It Works', href: '/en/faq', icon: LayoutGrid },
    { name: 'Donations', href: '/en/donation', icon: Heart, badge: 'New' },
    { name: 'Community', href: '/en/community', icon: Users },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
          ? 'py-3 bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-white/20'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">

        {/* Brand / Logo */}
        <Link href="/en" className="group flex items-center gap-2.5">
          <div className="bg-green-600 p-1.5 rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-green-600 transition-colors">
            Sirkulo<span className="text-green-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 pr-6 border-r border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold text-gray-600 hover:text-green-600 transition-colors py-2"
              >
                {link.name}
                {link.badge && (
                  <span className="absolute -top-1.5 -right-6 px-1.5 py-0.5 bg-green-500 text-[9px] text-white font-black rounded-md animate-bounce">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/en/login"
              className="px-5 py-2.5 text-sm font-bold text-gray-700 hover:text-green-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/en/register"
              className="px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-gray-200 active:scale-95 flex items-center gap-2"
            >
              Get Started <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/id"
              className={`px-2 py-1 text-xs font-bold rounded ${lang === 'id' ? 'bg-green-600 text-white' : 'text-gray-500'
                }`}
            >
              ID
            </Link>
            <Link
              href="/en"
              className={`px-2 py-1 text-xs font-bold rounded ${lang === 'en' ? 'bg-green-600 text-white' : 'text-gray-500'
                }`}
            >
              EN
            </Link>
          </div>

        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 bg-gray-50 rounded-xl text-gray-900 hover:bg-green-50 hover:text-green-600 transition-all"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white p-8 lg:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-black text-gray-900">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 bg-gray-50 rounded-full text-gray-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between text-lg font-bold text-gray-800 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                        <link.icon size={20} />
                      </div>
                      {link.name}
                    </div>
                    {link.badge && (
                      <span className="px-2 py-0.5 bg-green-500 text-[10px] text-white rounded-full uppercase tracking-widest">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              <div className="absolute bottom-10 left-8 right-8 space-y-4">
                <Link
                  href="/login"
                  className="block w-full text-center py-4 font-bold text-gray-700 bg-gray-50 rounded-2xl"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="block w-full text-center py-4 font-bold text-white bg-green-600 rounded-2xl shadow-lg shadow-green-100 transition-transform active:scale-95"
                >
                  Create Account
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
