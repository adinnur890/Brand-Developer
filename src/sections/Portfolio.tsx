"use client";
import { motion } from "framer-motion";
import { memo } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "@/lib/langStore";
import { localeText } from "@/lib/locale";
import { portfolio } from "@/lib/data";

function Portfolio() {
  const { lang } = useLang();
  const t = localeText[lang];

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t.portfolio.badge}
          titleFirst={t.portfolio.titleFirst}
          titleAccent={t.portfolio.titleAccent}
          description={t.portfolio.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {portfolio.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-zinc-950/80 shadow-xl"
            >
              <div className={`relative h-56 bg-gradient-to-br ${p.color} overflow-hidden`}>
                {p.image ? (
                  <>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                    <span className="text-white/20 text-6xl font-black">{p.title.charAt(0)}</span>
                  </div>
                )}

                {p.url && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-200 text-xs font-semibold backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {t.portfolio.live}
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.desc[lang]}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((stackItem) => (
                    <span key={stackItem} className="text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full bg-white/10 text-zinc-300">{stackItem}</span>
                  ))}
                </div>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:opacity-90 transition-all"
                  >
                    <ExternalLink size={14} />
                    {t.portfolio.viewProject}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default memo(Portfolio);
