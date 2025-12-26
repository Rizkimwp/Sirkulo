'use client';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import { useAuth } from '@/providers/AuthProvider';

const LoginAuth = () => {
  const { loginManual, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await loginManual({ email, password });
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] relative overflow-hidden px-4 mt-20">
      {/* Background Decorative Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full z-10"
      >
        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
          {/* Logo & Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-200 mb-4">
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

            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              Sign in to start making an impact
            </p>
          </div>

          {/* Google Login */}
          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-gray-200 rounded-2xl bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-semibold text-gray-700 shadow-sm"
          >
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>

          <div className="relative flex items-center justify-center my-8">
            <div className="border-t w-full border-gray-100"></div>
            <span className="absolute bg-[#fdfdfd] px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
              Or Email
            </span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all placeholder:text-gray-400"
              />
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-emerald-600 shadow-lg shadow-gray-200 hover:shadow-emerald-200 transition-all duration-300 transform active:scale-[0.98]"
            >
              {loading ? "Loading..." : "Go to Dashboard"}
            </button>
          </form>

          <p className="mt-8 text-sm text-gray-500 text-center font-medium">
            New to Sirkulo?{" "}
            <a
              href="/en/register"
              className="text-emerald-600 font-bold hover:underline underline-offset-4"
            >
              Create a Free Account
            </a>
          </p>
        </div>

        {/* Footer info */}
        <p className="text-center text-gray-400 text-xs mt-8">
          &copy; 2025 Sirkulo Indonesia. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default LoginAuth;
