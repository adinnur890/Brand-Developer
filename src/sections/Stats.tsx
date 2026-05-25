"use client";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, Award } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: "400+", label: "Proyek Selesai", color: "text-green-400" },
  { icon: Zap, value: "10+", label: "Program Siap Pakai", color: "text-yellow-400" },
  { icon: Users, value: "Cepat", label: "Response", color: "text-blue-400" },
  { icon: Award, value: "Tim", label: "Berpengalaman", color: "text-purple-400" },
];

export default function Stats() {
  return (
    <section className="py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-purple-500/20 transition-all"
            >
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={28} />
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}