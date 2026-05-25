"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Zap, Shield, Globe } from "lucide-react";

export default function Hero() {
  const particles = useMemo(
    () => [
      { top: "10%", left: "15%", delay: "0s", duration: "4s" },
      { top: "25%", left: "80%", delay: "1s", duration: "5s" },
      { top: "60%", left: "20%", delay: "2s", duration: "3s" },
      { top: "80%", left: "70%", delay: "0.5s", duration: "6s" },
      { top: "40%", left: "90%", delay: "1.5s", duration: "4s" },
    ],
    []
  );

  return (
    <section id="home" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background Orbs - Subtle */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid overlay - Subtle */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/20 rounded-full animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-purple-400" />
          <span>Full Stack Developer Agency</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
        >
          Bangun Website{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Premium
          </span>
          <br />
          Untuk Bisnis Anda
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Brand Developer membantu bisnis, UMKM, startup, dan personal brand 
          memiliki website modern, cepat, elegan, dan profesional.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-white text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Code2 size={18} />
            Pesan Jasa
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="/marketplace"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full bg-white/5 font-semibold text-white text-sm hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-sm"
          >
            Program Siap Pakai
          </motion.a>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-8 mb-16"
        >
          {[
            { icon: Zap, color: "text-yellow-400", label: "Cepat" },
            { icon: Shield, color: "text-green-400", label: "Aman" },
            { icon: Globe, color: "text-blue-400", label: "Modern" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className={`p-3 rounded-full bg-white/5 border border-white/10 ${item.color}`}>
                <item.icon size={20} />
              </div>
              <span className="text-xs text-zinc-500">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "50+", label: "Proyek Selesai" },
            { value: "30+", label: "Klien Puas" },
            { value: "24/7", label: "Support" },
            { value: "100%", label: "Kepuasan" },
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="text-2xl md:text-3xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 mt-1 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}