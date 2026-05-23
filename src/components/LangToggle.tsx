"use client";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLang } from "@/lib/langStore";

export default function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 hover:border-purple-500/30 transition-all text-xs font-semibold"
    >
      <Languages size={13} className="text-purple-400" />
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        className="text-zinc-300"
      >
        {lang === "id" ? "ID" : "EN"}
      </motion.span>
    </motion.button>
  );
}
