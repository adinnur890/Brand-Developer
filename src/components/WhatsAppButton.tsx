"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  label: string;
  href: string;
  variant?: "solid" | "ghost";
  className?: string;
};

export default function WhatsAppButton({ label, href, variant = "solid", className = "" }: Props) {
  const isSolid = variant === "solid";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
        isSolid
          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20 hover:opacity-95"
          : "glass border border-white/10 text-zinc-100 hover:bg-white/10"
      } ${className}`}
    >
      <span>{label}</span>
      <ArrowRight size={16} />
    </motion.a>
  );
}
