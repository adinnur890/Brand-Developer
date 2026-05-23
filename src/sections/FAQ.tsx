"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { faqItems } from "@/lib/data";
import { useLang } from "@/lib/langStore";
import { localeText } from "@/lib/locale";

export default function FAQ() {
  const { lang } = useLang();
  const t = localeText[lang];
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-10 w-44 h-44 rounded-full bg-purple-600/15 blur-3xl" />
      <div className="absolute bottom-0 right-10 w-56 h-56 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          badge={t.faq.badge}
          titleFirst={t.faq.titleFirst}
          titleAccent={t.faq.titleAccent}
          description={t.faq.description}
        />

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.question.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-[2rem] border border-white/10 bg-[#08080f]/80 shadow-[0_20px_70px_rgba(124,58,237,0.1)] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActive(active === index ? -1 : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-white hover:bg-white/5 transition-all"
              >
                <span className="font-semibold">{item.question[lang]}</span>
                <ChevronDown className={`transition-transform ${active === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {active === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/10"
                  >
                    {item.answer[lang]}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
