"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle, Zap, Users, Award, Star, Quote, ArrowRight, Code, Palette, Database } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: "250+", label: "Proyek Selesai", color: "text-green-400", glow: "shadow-green-500/20" },
  { icon: Star, value: "100%", label: "Kepuasan Terjamin", color: "text-yellow-400", glow: "shadow-yellow-500/20" },
  { icon: Award, value: "A+", label: "Hasil Berkualitas", color: "text-purple-400", glow: "shadow-purple-500/20" },
  { icon: Zap, value: "24/7", label: "Support", color: "text-blue-400", glow: "shadow-blue-500/20" },
];

const testimonials = [
  {
    project: "Website POS",
    date: "12 Agu 2024",
    rating: "10/10",
    text: "Tim sangat profesional dan responsif. Website POS full stack yang dibuat sesuai dengan kebutuhan bisnis kami. Highly recommended!",
    icon: Code,
  },
  {
    project: "Full Stack E-Commerce",
    date: "15 Jun 2024",
    rating: "10/10",
    text: "Website e-commerce full stack yang modern dan lengkap dengan fitur payment gateway. Penjualan online kami meningkat drastis!",
    icon: Database,
  },
  {
    project: "Full Stack Dashboard",
    date: "28 Mei 2024",
    rating: "10/10",
    text: "Dashboard full stack yang dibuat sangat informatif dan real-time. Backend API yang solid dan frontend yang responsif. Membantu sekali dalam monitoring bisnis kami.",
    icon: Code,
  },
  {
    project: "API Integration",
    date: "10 Apr 2024",
    rating: "10/10",
    text: "Integrasi API full stack berjalan lancar dan dokumentasinya lengkap. Tim sangat membantu dalam proses implementasi.",
    icon: Database,
  },
  {
    project: "Full Stack Web App",
    date: "5 Mar 2024",
    rating: "10/10",
    text: "Aplikasi web full stack yang sangat handal. Backend Node.js dan frontend React yang dibuat sangat clean dan maintainable!",
    icon: Code,
  },
  {
    project: "Sistem Inventory",
    date: "20 Feb 2024",
    rating: "10/10",
    text: "Sistem inventory full stack dengan database MySQL yang solid. Fitur lengkap dan performa cepat. Sangat puas!",
    icon: Database,
  },
];

const services = [
  { icon: Code, title: "Full Stack Development", desc: "React, Node.js, PostgreSQL" },
  { icon: Palette, title: "UI/UX Design", desc: "Figma, Prototyping" },
  { icon: Database, title: "Database Design", desc: "ERD, MySQL, MongoDB" },
];

export default function Stats() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const scale = useTransform(scrollY, [0, 300], [0.95, 1]);
  const springOpacity = useSpring(opacity, { damping: 25, stiffness: 100 });
  const springScale = useSpring(scale, { damping: 25, stiffness: 100 });

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        style={{ opacity: springOpacity, scale: springScale }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500/50" />
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Klien
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4">
            Testimoni & Kepercayaan
          </p>
          
          <p className="text-sm text-zinc-500 max-w-lg mx-auto">
            🌟 Dipercaya oleh ratusan klien! Lihat apa kata mereka tentang kualitas layanan dan hasil kerja kami yang memuaskan.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-premium rounded-3xl p-6 md:p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${stat.glow}`} />
              
              <stat.icon className={`mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-500`} size={32} />
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full glass-premium border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <service.icon className="text-purple-400" size={20} />
              <div>
                <div className="text-sm font-semibold text-white">{service.title}</div>
                <div className="text-xs text-zinc-500">{service.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Marquee */}
        <div className="relative mb-20">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-20 pointer-events-none" />

          {/* Row 1 - Left */}
          <div className="overflow-hidden mb-8">
            <motion.div 
              className="flex gap-6 w-max"
              animate={{ x: [0, -50] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
                <motion.div
                  key={`row1-${index}`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-premium rounded-3xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 w-80 md:w-96 flex-shrink-0"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                        <testimonial.icon size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{testimonial.project}</h4>
                        <p className="text-xs text-zinc-500">{testimonial.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold">
                      <CheckCircle size={12} />
                      Verified
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
                    ))}
                    <span className="text-white font-bold text-sm ml-2">{testimonial.rating}</span>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-purple-500/20" size={24} />
                    <p className="text-sm text-zinc-300 italic leading-relaxed pl-4 border-l-2 border-purple-500/30">
                      "{testimonial.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Right */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6 w-max"
              animate={{ x: [-50, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonials.slice(3), ...testimonials.slice(3)].map((testimonial, index) => (
                <motion.div
                  key={`row2-${index}`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-premium rounded-3xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 w-80 md:w-96 flex-shrink-0"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                        <testimonial.icon size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{testimonial.project}</h4>
                        <p className="text-xs text-zinc-500">{testimonial.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold">
                      <CheckCircle size={12} />
                      Verified
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
                    ))}
                    <span className="text-white font-bold text-sm ml-2">{testimonial.rating}</span>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-cyan-500/20" size={24} />
                    <p className="text-sm text-zinc-300 italic leading-relaxed pl-4 border-l-2 border-cyan-500/30">
                      "{testimonial.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-premium border border-purple-500/20 text-purple-300 text-sm font-semibold mb-6">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span>Bergabunglah dengan 250+ klien puas kami</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 font-bold text-white hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Mulai Proyek Anda
              <ArrowRight size={18} />
            </motion.a>
            
            <motion.a
              href="/marketplace"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full glass-premium font-bold text-white hover:bg-white/10 transition-all duration-300 border border-white/20 backdrop-blur-xl"
            >
              Lihat Marketplace
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}