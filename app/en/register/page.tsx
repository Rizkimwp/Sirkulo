'use client';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';

type SignUpAuthProps = {
  onSignUp: (email: string, password: string) => void;
  onGoogleSignUp: () => void;
};

const SignUpAuth: React.FC<SignUpAuthProps> = ({ onSignUp, onGoogleSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirmation do not match!");
      return;
    }
    onSignUp(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] relative overflow-hidden px-4 py-12 mt-20">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-blue-100 rounded-full blur-[100px] opacity-50" />
      <div className="absolute bottom-[5%] left-[-5%] w-[40%] h-[40%] bg-emerald-100 rounded-full blur-[120px] opacity-60" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full z-10"
      >
        <div className="bg-white/90 backdrop-blur-2xl p-10 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-white">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-2xl mb-4">
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
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                <path d="M3 3v5h5"/>
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
                <path d="M16 16h5v5"/>
              </svg>
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Create an Account
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              Join the Sirkulo revolution
            </p>
          </div>

          {/* Google Sign Up */}
          <button
            onClick={onGoogleSignUp}
            className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-gray-100 rounded-2xl bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-bold text-gray-700 shadow-sm"
          >
            <FcGoogle size={24} />
            <span>Sign up with Google</span>
          </button>

          <div className="relative flex items-center justify-center my-8">
            <div className="border-t w-full border-gray-100"></div>
            <span className="absolute bg-[#fdfdfd] px-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              Or Manually
            </span>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-black text-gray-400 uppercase tracking-wider mb-2 ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-wider mb-2 ml-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-5 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-wider mb-2 ml-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-5 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                />
              </div>
            </div>

            <div className="py-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  className="w-5 h-5 rounded-md border-gray-300 text-emerald-600 focus:ring-emerald-500 transition-all cursor-pointer"
                />
                <span className="text-xs text-gray-500 font-medium group-hover:text-gray-700">
                  I agree to the Terms & Conditions
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 text-white font-black py-4 rounded-2xl hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 transform active:scale-[0.98] mt-2"
            >
              Get Started
            </button>
          </form>

          <p className="mt-8 text-sm text-gray-500 text-center font-medium">
            Already a member?{' '}
            <a
              href="/en/login"
              className="text-emerald-600 font-black hover:underline underline-offset-4 transition-all"
            >
              Sign In
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpAuth;
