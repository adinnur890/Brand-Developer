"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "@/lib/langStore";
import { localeText } from "@/lib/locale";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const { lang } = useLang();
  const t = localeText[lang];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute -top-12 left-1/4 w-48 h-48 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          badge={t.testimonials.badge}
          titleFirst={t.testimonials.titleFirst}
          titleAccent={t.testimonials.titleAccent}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-[2rem] p-8 border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(124,58,237,0.14)] transition-all duration-500 hover:border-purple-400/30 hover:shadow-[0_40px_120px_rgba(124,58,237,0.22)]"
            >
              <div className="flex items-center gap-2 mb-5">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-8">&ldquo;{item.text[lang]}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg shadow-purple-500/20">
                  <div className="w-full h-full rounded-full bg-[#07070f] flex items-center justify-center text-sm font-semibold text-white">
                    {item.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{item.name}</div>
                  <div className="text-xs text-zinc-500">{item.role[lang]}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
