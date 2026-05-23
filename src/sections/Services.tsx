"use client";
import { motion } from "framer-motion";
import { Monitor, Layout, ShoppingCart, LayoutDashboard, Palette, Code2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";
import { useLang } from "@/lib/langStore";
import { localeText } from "@/lib/locale";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Layout, ShoppingCart, LayoutDashboard, Palette, Code2,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const { lang } = useLang();
  const t = localeText[lang];

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-purple-500/50" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t.services.badge}
          titleFirst={t.services.titleFirst}
          titleAccent={t.services.titleAccent}
          description={t.services.description}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.title.id + s.title.en}
                variants={item}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-6 group cursor-pointer hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:from-purple-600/40 group-hover:to-blue-600/40 transition-all">
                  <Icon size={22} className="text-purple-400 group-hover:text-purple-300" />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">{s.title[lang]}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{s.desc[lang]}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
