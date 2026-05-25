"use client";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Star, ArrowRight, Code, Palette, Database } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: "250+", label: "Proyek Selesai", color: "text-green-400" },
  { icon: Star, value: "100%", label: "Kepuasan Terjamin", color: "text-yellow-400" },
  { icon: Zap, value: "A+", label: "Hasil Berkualitas", color: "text-purple-400" },
  { icon: Zap, value: "24/7", label: "Support", color: "text-blue-400" },
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
    project: "E-Commerce",
    date: "15 Jun 2024",
    rating: "10/10",
    text: "Website e-commerce full stack yang modern dan lengkap dengan fitur payment gateway. Penjualan online kami meningkat drastis!",
    icon: Database,
  },
  {
    project: "Dashboard",
    date: "28 Mei 2024",
    rating: "10/10",
    text: "Dashboard full stack yang dibuat sangat informatif dan real-time. Backend API yang solid dan frontend yang responsif.",
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
    project: "Web App",
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
  { icon: Code, title: "Full Stack Dev", desc: "React, Node.js" },
  { icon: Palette, title: "UI/UX Design", desc: "Figma, Proto" },
  { icon: Database, title: "Database", desc: "MySQL, MongoDB" },
];

export default function Stats() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_6s_ease_infinite]">
              Klien
            </span>
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Testimoni & Kepercayaan
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-premium rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center"
            >
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={28} />
              <div className="text-2xl md:text-3xl font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 font-medium uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full glass-premium border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <service.icon className="text-purple-400" size={18} />
              <div>
                <div className="text-sm font-semibold text-white">{service.title}</div>
                <div className="text-xs text-zinc-500">{service.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Marquee */}
        <div className="relative mb-16 overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="overflow-hidden mb-6">
            <motion.div 
              className="flex gap-4 w-max"
              animate={{ x: [0, -33.33] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
                <motion.div
                  key={`r1-${index}`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="glass-premium rounded-2xl p-5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 w-72 md:w-80 flex-shrink-0"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                      <testimonial.icon size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{testimonial.project}</h4>
                      <p className="text-xs text-zinc-500">{testimonial.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={12} />
                    ))}
                    <span className="text-white font-bold text-xs ml-1">{testimonial.rating}</span>
                  </div>

                  <p className="text-sm text-zinc-400 italic line-clamp-2">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-4 w-max"
              animate={{ x: [-33.33, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonials.slice(3), ...testimonials.slice(3)].map((testimonial, index) => (
                <motion.div
                  key={`r2-${index}`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="glass-premium rounded-2xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 w-72 md:w-80 flex-shrink-0"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                      <testimonial.icon size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{testimonial.project}</h4>
                      <p className="text-xs text-zinc-500">{testimonial.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={12} />
                    ))}
                    <span className="text-white font-bold text-xs ml-1">{testimonial.rating}</span>
                  </div>

                  <p className="text-sm text-zinc-400 italic line-clamp-2">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 font-bold text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2"
            >
              Mulai Proyek Anda
              <ArrowRight size={18} />
            </motion.a>
            
            <motion.a
              href="/marketplace"
              whileHover={{ scale: 1.02 }}
              className="px-8 py-4 rounded-full glass-premium font-bold text-white hover:bg-white/10 transition-all border border-white/10 backdrop-blur-xl"
            >
              Lihat Marketplace
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}