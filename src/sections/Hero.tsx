"use client";
import { useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Zap, Shield, Globe } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = (e.target as Element)?.closest('section');
      if (rect) {
        const { left, top, width, height } = rect.getBoundingClientRect();
        mouseX.set(((e.clientX - left) / width - 0.5) * 40);
        mouseY.set(((e.clientY - top) / height - 0.5) * 40);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useMotionValue('radial-gradient(600px circle at 0px 0px, rgba(124, 58, 237, 0.06), transparent)'),
          backgroundPosition: useTransform(springX, x => `calc(50% + ${x}px) calc(50% + ${springY.get()}px)`),
        }}
      />

      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        {/* Additional animated orbs */}
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20"
        style={{ y, opacity }}
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-premium border border-purple-500/20 text-purple-300 text-xs font-semibold mb-8 backdrop-blur-xl animate-glow"
        >
          <Sparkles size={14} className="text-purple-400 animate-pulse" />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-bold">
            Full Stack Developer Agency
          </span>
          <Zap size={14} className="text-yellow-400 animate-pulse" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
        >
          Bangun Website{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Premium
          </span>
          <br />
          <span className="text-white">Untuk Bisnis Anda</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
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
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 font-bold text-white text-base hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-[length:200%_auto] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Code2 size={20} className="relative z-10" />
            <span className="relative z-10">Pesan Jasa</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="/marketplace"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 rounded-full glass-premium font-bold text-white text-base hover:bg-white/10 transition-all duration-300 border border-white/20 backdrop-blur-xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Program Siap Pakai
          </motion.a>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex justify-center gap-8 mb-16"
        >
          {[
            { icon: Zap, color: "text-yellow-400", label: "Cepat" },
            { icon: Shield, color: "text-green-400", label: "Aman" },
            { icon: Globe, color: "text-blue-400", label: "Modern" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2"
            >
              <div className={`p-3 rounded-full glass-premium ${item.color} animate-glow`}>
                <item.icon size={24} />
              </div>
              <span className="text-xs text-zinc-500 font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "50+", label: "Proyek Selesai", color: "from-purple-400 to-blue-400" },
            { value: "30+", label: "Klien Puas", color: "from-pink-400 to-purple-400" },
            { value: "24/7", label: "Support", color: "from-cyan-400 to-blue-400" },
            { value: "100%", label: "Kepuasan", color: "from-green-400 to-cyan-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-premium rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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