"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { useLang } from "@/lib/langStore";
import { localeText, whatsappMessages } from "@/lib/locale";

export default function Hero() {
  const { lang } = useLang();
  const t = localeText[lang];
  const WA_LINK = `https://wa.me/6283879204375?text=${encodeURIComponent(whatsappMessages[lang])}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      {/* Floating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float-1 absolute top-20 left-10 w-4 h-4 rounded-full bg-purple-500/40 blur-sm" />
        <div className="float-2 absolute top-40 right-20 w-6 h-6 rounded-full bg-blue-500/30 blur-sm" />
        <div className="float-3 absolute bottom-32 left-1/4 w-3 h-3 rounded-full bg-violet-400/50 blur-sm" />
        <div className="float-1 absolute bottom-20 right-1/3 w-5 h-5 rounded-full bg-blue-400/30 blur-sm" />
        <div className="float-2 absolute top-1/3 right-10 w-2 h-2 rounded-full bg-purple-300/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-purple-300 mb-8 border border-purple-500/20"
        >
          <Code2 size={12} />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black leading-tight mb-6"
        >
          {t.hero.titleFirst} <span className="gradient-text">{t.hero.titleAccent}</span>
          <br />
          {t.hero.titleLast}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            {t.hero.primaryButton}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full glass font-semibold text-sm hover:bg-white/10 transition-all border border-white/10"
          >
            {t.hero.secondaryButton}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex justify-center gap-12 text-center"
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
