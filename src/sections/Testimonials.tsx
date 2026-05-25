"use client";
import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    project: "Website POS",
    rating: "10/10",
    text: "Tim sangat profesional dan responsif. Website POS yang dibuat sesuai dengan kebutuhan bisnis kami. Highly recommended!",
    verified: true,
    date: "12 Agu 2025",
  },
  {
    project: "Aplikasi Android",
    rating: "10/10",
    text: "Aplikasi mobile yang dibuat sangat user-friendly dan performanya smooth. Terima kasih atas kerja kerasnya!",
    verified: true,
    date: "3 Jul 2025",
  },
  {
    project: "ML Face Recognition",
    rating: "10/10",
    text: "Luar biasa! Sistem face recognition yang dibuat akurasinya tinggi dan integrasinya mudah. Perfect!",
    verified: true,
    date: "19 Sep 2025",
  },
  {
    project: "E-Commerce Website",
    rating: "10/10",
    text: "Website e-commerce yang modern dan lengkap dengan fitur payment gateway. Penjualan online kami meningkat drastis!",
    verified: true,
    date: "15 Jun 2025",
  },
  {
    project: "Dashboard Analytics",
    rating: "10/10",
    text: "Dashboard yang dibuat sangat informatif dan real-time. Membantu sekali dalam monitoring bisnis kami.",
    verified: true,
    date: "28 Mei 2025",
  },
  {
    project: "API Integration",
    rating: "10/10",
    text: "Integrasi API berjalan lancar dan dokumentasinya lengkap. Tim sangat membantu dalam proses implementasi.",
    verified: true,
    date: "10 Apr 2025",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Testimoni"
          titleFirst="Apa Kata"
          titleAccent="Klien"
          description="Testimoni & Kepercayaan - 🌟 Dipercaya oleh ratusan klien! Lihat apa kata mereka tentang kualitas layanan dan hasil kerja kami yang memuaskan."
        />

        {/* Trust Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="text-center px-6 py-3">
            <div className="text-2xl font-black text-purple-400">250+</div>
            <div className="text-xs text-zinc-500">Proyek Selesai</div>
          </div>
          <div className="text-center px-6 py-3">
            <div className="text-2xl font-black text-purple-400">100%</div>
            <div className="text-xs text-zinc-500">Kepuasan Terjamin</div>
          </div>
          <div className="text-center px-6 py-3">
            <div className="text-2xl font-black text-purple-400">A+</div>
            <div className="text-xs text-zinc-500">Hasil Berkualitas</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl border border-white/10 p-6 hover:border-purple-500/20 transition-all"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <Quote size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{testimonial.project}</div>
                    <div className="text-xs text-zinc-500">{testimonial.date}</div>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center gap-1 text-green-400 text-xs">
                    <ShieldCheck size={14} />
                    <span>Verified</span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-2 text-sm font-bold text-white">{testimonial.rating}</span>
              </div>

              {/* Text */}
              <p className="text-sm text-zinc-400 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}