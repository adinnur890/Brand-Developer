"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLang } from "@/lib/langStore";
import { localeText, whatsappMessages } from "@/lib/locale";
import { pricingPlans } from "@/lib/data";

import { memo } from "react";

function Pricing() {
  const { lang } = useLang();
  const t = localeText[lang];
  const WA_LINK = `https://wa.me/6283879204375?text=${encodeURIComponent(whatsappMessages[lang])}`;

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t.pricing.badge}
          titleFirst={t.pricing.titleFirst}
          titleAccent={t.pricing.titleAccent}
          description={t.pricing.description}
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.article
              key={plan.name.en}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`glass rounded-[2rem] p-8 border border-white/10 shadow-xl shadow-black/20 transition-all ${
                plan.highlight ? "bg-gradient-to-br from-purple-950/80 via-blue-950/70 to-slate-950/80 border-purple-500/20" : "bg-zinc-950/80"
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-sm uppercase tracking-[0.25em] text-purple-300">{plan.type[lang]}</span>
                {plan.highlight && <span className="text-xs uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-purple-500/15 text-purple-200">{t.pricing.popular}</span>}
              </div>
              <h3 className="text-3xl font-black mb-3 text-white">{plan.name[lang]}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">{plan.description[lang]}</p>
              <div className="text-4xl font-black gradient-text mb-8">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features[lang].map((feature) => (
                  <li key={feature} className="text-sm text-zinc-400 leading-relaxed">• {feature}</li>
                ))}
              </ul>
              <WhatsAppButton label={t.pricing.button} href={WA_LINK} className="w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default memo(Pricing);
