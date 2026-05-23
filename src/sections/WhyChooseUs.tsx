"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Sparkles, GitBranch } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "@/lib/langStore";
import { localeText } from "@/lib/locale";

const reasons = [
  {
    icon: Sparkles,
    title: { id: "Desain Modern & Premium", en: "Modern & Premium Design" },
    description: {
      id: "Tampilan website clean, modern, responsive, dan nyaman di semua device agar bisnis Anda terlihat lebih profesional.",
      en: "Clean, modern, responsive website design that looks great on every device and makes your business appear more professional.",
    },
  },
  {
    icon: Rocket,
    title: { id: "Cepat & Responsive", en: "Fast & Responsive" },
    description: {
      id: "Website dibangun dengan teknologi modern sehingga loading cepat, ringan, dan optimal untuk pengguna mobile maupun desktop.",
      en: "Built with modern technology for fast load times, lightweight performance, and optimized mobile and desktop experiences.",
    },
  },
  {
    icon: GitBranch,
    title: { id: "Mudah Dikembangkan", en: "Easy to Scale" },
    description: {
      id: "Struktur website rapi dan scalable sehingga mudah dikembangkan untuk kebutuhan bisnis di masa depan.",
      en: "Clean, scalable structure that makes the website easy to expand for future business needs.",
    },
  },
  {
    icon: ShieldCheck,
    title: { id: "Support & Konsultasi", en: "Support & Consultation" },
    description: {
      id: "Bingung mulai dari mana? Kami siap membantu konsultasi dan memberikan solusi terbaik untuk website Anda.",
      en: "Need direction? We're ready to provide consultation and the best website solution for your business.",
    },
  },
  {
    icon: Rocket,
    title: { id: "Proses Cepat", en: "Fast Process" },
    description: {
      id: "Pengerjaan lebih cepat, komunikasi mudah, dan revisi sesuai kebutuhan client.",
      en: "Faster delivery, easy communication, and revisions tailored to client needs.",
    },
  },
];

export default function WhyChooseUs() {
  const { lang } = useLang();
  const t = localeText[lang];

  return (
    <section id="why" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t.whyChoose.badge}
          titleFirst={t.whyChoose.titleFirst}
          titleAccent={t.whyChoose.titleAccent}
          description={t.whyChoose.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="glass rounded-[2rem] p-8 border border-white/10 shadow-xl shadow-black/20 transition-all"
              >
                <div className="w-14 h-14 rounded-3xl bg-purple-600/10 text-purple-300 flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">{item.title[lang]}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description[lang]}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
