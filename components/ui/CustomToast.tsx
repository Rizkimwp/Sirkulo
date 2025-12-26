"use client";

import { motion } from "framer-motion";
import { Toast } from "react-hot-toast";

type Props = {
  t: Toast;
  type: "success" | "error";
  message: string;
};

export function CustomToast({ t, type, message }: Props) {
  const isSuccess = type === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-4 px-5 py-4 rounded-2xl shadow-lg bg-white border
        ${isSuccess ? "border-emerald-200" : "border-red-200"}
      `}
    >
      {/* ICON */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center
          ${isSuccess ? "bg-emerald-100" : "bg-red-100"}
        `}
      >
        {isSuccess ? <CheckIcon /> : <CrossIcon />}
      </div>

      {/* TEXT */}
      <p className="text-sm font-semibold text-gray-800">
        {message}
      </p>
    </motion.div>
  );
}

/* ✅ Animasi Centang */
function CheckIcon() {
  return (
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10B981"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M20 6L9 17l-5-5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.svg>
  );
}

/* ❌ Animasi Silang */
function CrossIcon() {
  return (
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#EF4444"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M18 6L6 18"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        d="M6 6l12 12"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    </motion.svg>
  );
}
