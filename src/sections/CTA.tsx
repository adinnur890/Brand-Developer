"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Users } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Gimana, sudah yakin?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Yuk pesan layanan kami sekarang juga dan jadikan kami sebagai mitra terbaikmu dalam menghadirkan solusi IT yang hebat!
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                <Zap size={16} />
                <span>671+ Project</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                <Zap size={16} />
                <span>Response Cepat</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                <Users size={16} />
                <span>Tim Profesional</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/6283879204375?text=Halo%2C%20saya%20sudah%20yakin%20dan%20siap%20untuk%20memulai%20proyek!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-purple-600 font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Pesan Sekarang
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}