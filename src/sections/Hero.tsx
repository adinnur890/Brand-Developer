"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  const WA_LINK = "https://wa.me/6283879204375?text=Halo%20Brand%20Developer%2C%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website.";

  const particles = useMemo(
    () => [
      { top: "10%", left: "15%", delay: "0s", duration: "4s" },
      { top: "25%", left: "80%", delay: "1s", duration: "5s" },
      { top: "60%", left: "20%", delay: "2s", duration: "3s" },
      { top: "80%", left: "70%", delay: "0.5s", duration: "6s" },
      { top: "40%", left: "90%", delay: "1.5s", duration: "4s" },
      { top: "15%", left: "50%", delay: "2.5s", duration: "5s" },
      { top: "70%", left: "40%", delay: "3s", duration: "4s" },
      { top: "50%", left: "10%", delay: "0.8s", duration: "3s" },
      { top: "90%", left: "85%", delay: "1.2s", duration: "5s" },
      { top: "5%", left: "35%", delay: "2s", duration: "6s" },
      { top: "35%", left: "60%", delay: "0.3s", duration: "4s" },
      { top: "55%", left: "75%", delay: "1.8s", duration: "5s" },
      { top: "20%", left: "5%", delay: "2.2s", duration: "3s" },
      { top: "45%", left: "30%", delay: "0.7s", duration: "4s" },
      { top: "75%", left: "55%", delay: "1.4s", duration: "6s" },
      { top: "30%", left: "95%", delay: "2.8s", duration: "5s" },
      { top: "85%", left: "25%", delay: "0.9s", duration: "4s" },
      { top: "65%", left: "85%", delay: "1.6s", duration: "3s" },
      { top: "12%", left: "70%", delay: "2.4s", duration: "5s" },
      { top: "48%", left: "45%", delay: "0.4s", duration: "6s" },
    ],
    []
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        {/* Additional animated orbs */}
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid overlay with subtle animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium mb-8 border border-purple-500/20 backdrop-blur-sm"
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
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
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
          <a
            href="#contact"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-white text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 animate-glow"
          >
            <Code2 size={18} />
            Pesan Jasa
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/marketplace"
            className="px-8 py-4 rounded-full bg-white/5 font-semibold text-white text-sm hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-sm hover:border-purple-500/30"
          >
            Program Siap Pakai
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "50+", label: "Proyek Selesai" },
            { value: "30+", label: "Klien Puas" },
            { value: "24/7", label: "Support" },
            { value: "100%", label: "Kepuasan" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 mt-2 font-medium uppercase tracking-wider">
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
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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