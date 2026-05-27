"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Zap, Shield, Globe } from "lucide-react";

export default function Hero() {
  // Reduced particles for mobile performance
  const particles = useMemo(
    () => [
      { top: "10%", left: "15%", delay: "0s", duration: "6s" },
      { top: "60%", left: "80%", delay: "2s", duration: "8s" },
      { top: "80%", left: "20%", delay: "4s", duration: "7s" },
    ],
    []
  );

  // Animation variants for mobile optimization
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Hero-specific Background Orbs - More vibrant */}
      <div className="absolute inset-0 -z-10">
        {/* Main spotlight glow - Enhanced */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-r from-violet-600/20 via-purple-600/15 to-blue-600/20 rounded-full blur-[140px] animate-[ambientPulse_8s_ease-in-out_infinite]" />
        
        {/* Secondary orbs - More vibrant */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-violet-600/15 to-purple-600/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-blue-600/15 to-cyan-600/10 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-pink-600/12 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: '3s' }} />
        {/* Extra accent orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/8 to-transparent rounded-full blur-[150px] animate-[ambientPulse_15s_ease-in-out_infinite]" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Mesh gradient overlay - Enhanced */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),rgba(59,130,246,0.05),transparent_70%)]" />

      {/* Grid overlay - More subtle */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-500/40 rounded-full animate-float"
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
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-premium border border-purple-500/20 text-purple-300 text-xs font-medium mb-8 animate-glow"
        >
          <Sparkles size={14} className="text-purple-400 animate-pulse" />
          <span className="font-semibold">Full Stack Developer Agency</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
        >
          Bangun Website{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_6s_ease_infinite]">
            Premium
          </span>
          <br />
          <span className="text-white">Untuk Bisnis Anda</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Brand Developer membantu bisnis, UMKM, startup, dan personal brand 
          memiliki website <span className="text-purple-400 font-semibold">modern</span>,{" "}
          <span className="text-blue-400 font-semibold">cepat</span>,{" "}
          <span className="text-cyan-400 font-semibold">elegan</span>, dan{" "}
          <span className="text-pink-400 font-semibold">profesional</span>.
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
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 font-bold text-white text-sm hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Code2 size={18} />
            Pesan Jasa
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="/marketplace"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full glass-premium font-bold text-white text-sm hover:bg-white/10 transition-all duration-300 border border-white/20 backdrop-blur-xl"
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
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -3 }}
              className="flex flex-col items-center gap-2"
            >
              <div className={`p-3 rounded-full glass-premium ${item.color} animate-glow`}>
                <item.icon size={20} />
              </div>
              <span className="text-xs text-zinc-500 font-medium">{item.label}</span>
            </motion.div>
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
            { value: "50+", label: "Proyek Selesai", color: "from-purple-400 to-blue-400" },
            { value: "30+", label: "Klien Puas", color: "from-pink-400 to-purple-400" },
            { value: "24/7", label: "Support", color: "from-cyan-400 to-blue-400" },
            { value: "100%", label: "Kepuasan", color: "from-green-400 to-cyan-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-premium rounded-2xl p-4 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
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
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 hover:border-purple-500/50 transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
          />
        </div>
      </motion.div>
    </section>
  );
}