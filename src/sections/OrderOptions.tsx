"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2, ShoppingCart } from "lucide-react";

export default function OrderOptions() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Pilih Layanan
          </h2>
          <p className="text-zinc-400">
            Sesuaikan dengan kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pesan Jasa */}
          <motion.a
            href="https://wa.me/6283879204375?text=Halo%2C%20saya%20tertarik%20untuk%20pesan%20jasa%20pembuatan%20website"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6">
              <Code2 className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              Pesan Jasa
            </h3>
            <p className="text-sm text-zinc-400 mb-6">
              Custom website sesuai kebutuhan bisnis Anda. Konsultasikan ide Anda dan kami wujudkan menjadi website profesional.
            </p>
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
              Pesan Sekarang
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          {/* Program Siap Pakai */}
          <motion.a
            href="/marketplace"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mb-6">
              <ShoppingCart className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
              Program Siap Pakai
            </h3>
            <p className="text-sm text-zinc-400 mb-6">
              Template website dan UI kit yang siap digunakan. Lebih cepat dan hemat biaya.
            </p>
            <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
              Lihat Marketplace
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}