"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "@/lib/langStore";
import { localeText, whatsappMessages } from "@/lib/locale";

export default function CTA() {
  const { lang } = useLang();
  const t = localeText[lang];
  const WA_LINK = `https://wa.me/6283879204375?text=${encodeURIComponent(whatsappMessages[lang])}`;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-violet-900/40 to-blue-900/60" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 border border-white/10 rounded-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-purple-300 mb-6 border border-purple-500/20">
              <Sparkles size={12} />
              {t.cta.badge}
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {t.cta.titleFirst}
              <br />
              <span className="gradient-text">{t.cta.titleAccent}</span>
            </h2>

            <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
              {t.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 transition-all"
              >
                {t.cta.buttonPrimary}
                <ArrowRight size={16} />
              </a>

              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-sm text-white hover:opacity-90 transition-all"
              >
                {t.cta.buttonSecondary}
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
