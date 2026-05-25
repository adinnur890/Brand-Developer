"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star, Check, Zap, Shield, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    badge: "Terpopuler",
    title: "ERD, UML, Use Case, Activity, Sequence Diagram, UserFlow",
    projects: "261 Project",
    clients: "Klien Puas",
    description: "Dokumentasi sistem: ERD, Use Case, Activity, dan Sequence Diagram",
    price: 59000,
    priceLabel: "/ project",
    minPrice: "Harga Minimal",
    benefits: ["ERD", "Use Case", "Activity Diagram", "Sequence Diagram", "UserFlow"],
  },
  {
    badge: "Terpopuler",
    title: "Mobile App",
    projects: "43 Project",
    clients: "Klien Puas",
    description: "Pengembangan aplikasi Android/iOS yang user-friendly dan performa tinggi",
    price: 99000,
    priceLabel: "/ project",
    minPrice: "Harga Minimal",
    benefits: ["Source Code", "ERD", "Use Case", "Activity Diagram", "Sequence Diagram"],
  },
  {
    badge: "Terpopuler",
    title: "Website",
    projects: "89 Project",
    clients: "Klien Puas",
    description: "Website profesional, responsif, dan SEO-friendly untuk website Anda",
    price: 99000,
    priceLabel: "/ project",
    minPrice: "Harga Minimal",
    benefits: ["Source Code", "ERD", "Use Case", "Activity Diagram", "Sequence Diagram"],
  },
  {
    badge: "Terpopuler",
    title: "Data Science",
    projects: "73 Project",
    clients: "Klien Puas",
    description: "Machine Learning, Deep Learning, Analisis data, visualisasi, dan Olah Data untuk insight bisnis",
    price: 99000,
    priceLabel: "/ project",
    minPrice: "Harga Minimal",
    benefits: ["Machine Learning", "Deep Learning", "Olah Data"],
  },
  {
    badge: "Terpopuler",
    title: "UI/UX",
    projects: "33 Project",
    clients: "Klien Puas",
    description: "Desain antarmuka dan pengalaman pengguna yang modern serta konsisten",
    price: 99000,
    priceLabel: "/ project",
    minPrice: "Harga Minimal",
    benefits: ["Wireframe", "Prototype", "ERD", "Use Case", "Activity Diagram", "Sequence Diagram", "UserFlow"],
  },
  {
    badge: "Terpopuler",
    title: "PPT",
    projects: "27 Project",
    clients: "Klien Puas",
    description: "Presentasi profesional dengan desain modern, animasi halus, dan infografis menarik",
    price: 89000,
    priceLabel: "/ project",
    minPrice: "Harga Minimal",
    benefits: ["Template Custom", "Animasi", "Infografis", "Brand Guidelines"],
  },
];

const formatRupiah = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Layanan"
          titleFirst="Layanan"
          titleAccent="Jasa IT Profesional"
          description="Solusi teknologi terdepan untuk mengembangkan bisnis Anda dengan tim ahli berpengalaman dan track record terpercaya"
        />

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm">
            <Star size={14} className="fill-green-400" />
            <span>500+ Klien Puas</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 text-sm">
            <Star size={14} className="fill-yellow-400" />
            <span>Rating 5/5</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm">
            <Zap size={14} />
            <span>671+ Project Selesai</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold mb-4">
                <Star size={10} className="fill-white" />
                {service.badge}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <div className="text-xs text-zinc-500 mb-3">
                <span className="text-purple-400 font-semibold">{service.projects}</span>
                <span className="mx-2">•</span>
                <span>{service.clients}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 mb-6">{service.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">{formatRupiah(service.price)}</span>
                  <span className="text-zinc-500 text-sm">{service.priceLabel}</span>
                </div>
                <div className="text-xs text-zinc-500 mt-1">{service.minPrice}</div>
              </div>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-center gap-2">
                    <Check className="text-green-400" size={14} />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://wa.me/6283879204375?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20ini"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Pesan Sekarang
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}