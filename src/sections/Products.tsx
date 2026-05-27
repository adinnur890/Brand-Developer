"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const digitalProducts = [
  {
    title: "Nexora AI",
    subtitle: "AI SaaS Platform",
    description: "Platform AI chat modern dengan dukungan multi-chat, history otomatis, dan rendering markdown.",
    features: [
      "AI Chat powered by Gemini 2.0 Flash",
      "Support sending images to AI",
      "Multi-chat with auto-saved history",
      "Markdown & math formula rendering",
      "Authentication with Supabase Auth",
      "Modern animated UI, responsive, full dark mode",
    ],
    tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "Framer Motion", "Supabase"],
    image: "/Nexora-ai.png",
    url: "https://wa.me/6283879204375?text=Halo%2C%20saya%20tertarik%20dengan%20Nexora%20AI",
  },
  {
    title: "Tododin Premium",
    subtitle: "Task Management System",
    description: "Sistem manajemen tugas dengan panel admin, role-based access, dan statistik todo.",
    features: [
      "Add, edit & delete todos",
      "Todo status (Done / Not Done)",
      "Todo detail per item (subtask)",
      "Register & Login system",
      "Role-based access (Admin & User)",
      "Dedicated admin panel",
    ],
    tech: ["React + Vite", "Tailwind CSS", "PHP Laravel", "MySQL"],
    image: "/tododin-preview.jpg",
    url: "https://wa.me/6283879204375?text=Halo%2C%20saya%20tertarik%20dengan%20Tododin%20Premium",
  },
];

import { memo } from "react";

function Products() {
  return (
    <section id="products" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Digital Products"
          titleFirst="Produk Digital"
          titleAccent="Premium"
          description="Solusi digital siap pakai untuk bisnis Anda. Setiap produk dibangun dengan teknologi modern dan dapat dikustomisasi sesuai kebutuhan."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {digitalProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="text-xs text-purple-400 uppercase tracking-[0.2em] mb-2">{product.subtitle}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-4">{product.description}</p>

                <ul className="space-y-2 mb-4">
                  {product.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="text-xs text-zinc-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full glass text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} />
                  Tanya Produk Ini
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default memo(Products);