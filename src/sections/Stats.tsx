"use client";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, Award, Star, Quote } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: "250+", label: "Proyek Selesai", color: "text-green-400" },
  { icon: Star, value: "100%", label: "Kepuasan Terjamin", color: "text-yellow-400" },
  { icon: Award, value: "A+", label: "Hasil Berkualitas", color: "text-purple-400" },
  { icon: Zap, value: "24/7", label: "Support", color: "text-blue-400" },
];

const testimonials = [
  {
    project: "Website POS",
    date: "12 Agu 2024",
    rating: "10/10",
    text: "Tim sangat profesional dan responsif. Website POS full stack yang dibuat sesuai dengan kebutuhan bisnis kami. Highly recommended!",
  },
  {
    project: "Full Stack E-Commerce",
    date: "15 Jun 2024",
    rating: "10/10",
    text: "Website e-commerce full stack yang modern dan lengkap dengan fitur payment gateway. Penjualan online kami meningkat drastis!",
  },
  {
    project: "Full Stack Dashboard",
    date: "28 Mei 2024",
    rating: "10/10",
    text: "Dashboard full stack yang dibuat sangat informatif dan real-time. Backend API yang solid dan frontend yang responsif. Membantu sekali dalam monitoring bisnis kami.",
  },
  {
    project: "API Integration",
    date: "10 Apr 2024",
    rating: "10/10",
    text: "Integrasi API full stack berjalan lancar dan dokumentasinya lengkap. Tim sangat membantu dalam proses implementasi.",
  },
  {
    project: "Full Stack Web App",
    date: "5 Mar 2024",
    rating: "10/10",
    text: "Aplikasi web full stack yang sangat handal. Backend Node.js dan frontend React yang dibuat sangat clean dan maintainable!",
  },
  {
    project: "Sistem Inventory",
    date: "20 Feb 2024",
    rating: "10/10",
    text: "Sistem inventory full stack dengan database MySQL yang solid. Fitur lengkap dan performa cepat. Sangat puas!",
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 relative">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Klien</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-2">
            Testimoni & Kepercayaan
          </p>
          <p className="text-sm text-zinc-500">
            🌟 Dipercaya oleh ratusan klien! Lihat apa kata mereka tentang kualitas layanan dan hasil kerja kami yang memuaskan.
          </p>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-purple-500/20 transition-all hover:scale-105 duration-300"
            >
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={28} />
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-white font-semibold mb-1">{testimonial.project}</h4>
                  <p className="text-xs text-zinc-500">{testimonial.date}</p>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold">
                  <CheckCircle size={12} />
                  Verified
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
                ))}
                <span className="text-white font-bold text-sm ml-2">{testimonial.rating}</span>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-purple-500/20" size={24} />
                <p className="text-sm text-zinc-300 italic leading-relaxed pl-4 border-l-2 border-purple-500/30">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}