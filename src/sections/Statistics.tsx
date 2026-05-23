"use client";
import { type ElementType, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Smartphone, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "@/lib/langStore";
import { localeText } from "@/lib/locale";

type StatItem = {
  icon: ElementType;
  target?: number;
  suffix?: string;
  label: { id: string; en: string };
  text?: { id: string; en: string };
};

const stats: StatItem[] = [
  {
    icon: Briefcase,
    target: 10,
    suffix: "+",
    label: { id: "Proyek", en: "Projects" },
  },
  {
    icon: Users,
    target: 5,
    suffix: "+",
    label: { id: "Klien", en: "Clients" },
  },
  {
    icon: Smartphone,
    target: 100,
    suffix: "%",
    label: { id: "Responsive", en: "Responsive" },
  },
  {
    icon: Zap,
    text: { id: "Fast Performance", en: "Fast Performance" },
    label: { id: "Performa Cepat", en: "Fast Performance" },
  },
];

export default function Statistics() {
  const { lang } = useLang();
  const t = localeText[lang];
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      if (!stat.target) return null;
      let current = 0;
      const step = Math.max(1, Math.floor(stat.target / 20));
      return window.setInterval(() => {
        current += step;
        if (current >= stat.target!) {
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = stat.target!;
            return updated;
          });
          window.clearInterval(intervals[index]!);
          return;
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 40);
    });

    return () => {
      intervals.forEach((interval) => {
        if (interval) window.clearInterval(interval);
      });
    };
  }, []);

  return (
    <section id="stats" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute -top-8 right-24 w-48 h-48 rounded-full bg-purple-600/15 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          badge={t.statistics.badge}
          titleFirst={t.statistics.titleFirst}
          titleAccent={t.statistics.titleAccent}
          description={t.statistics.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            const valueText = item.target !== undefined ? `${counts[index]}${item.suffix ?? ""}` : item.text?.[lang];
            return (
              <motion.div
                key={item.label.en}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_35px_90px_rgba(124,58,237,0.12)] hover:shadow-[0_45px_120px_rgba(124,58,237,0.24)] transition-all"
              >
                <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-purple-500/20 mb-6">
                  <Icon size={24} />
                </div>
                <div className="text-4xl font-black gradient-text mb-2">{valueText}</div>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.label[lang]}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
