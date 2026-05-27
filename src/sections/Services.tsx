"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Check, Zap, X, MessageCircle, User, Phone, Mail, Send, Eye, ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    badge: "Terpopuler",
    title: "Website Full Stack",
    projects: "89 Project",
    clients: "Klien Puas",
    description: "Website profesional, responsif, dan SEO-friendly dengan backend lengkap",
    price: 99000,
    priceLabel: "/ project",
    minPrice: "Harga Minimal",
    benefits: ["Source Code", "ERD", "Use Case", "Activity Diagram", "Sequence Diagram", "Database Design", "API Development"],
  },
  {
    badge: "Terpopuler",
    title: "UI/UX Design",
    projects: "33 Project",
    clients: "Klien Puas",
    description: "Desain antarmuka dan pengalaman pengguna yang modern serta konsisten",
    price: 99000,
    priceLabel: "/ project",
    minPrice: "Harga Minimal",
    benefits: ["Wireframe", "Prototype", "Design System", "Auto Layout", "Responsive Design", "User Flow"],
  },
  {
    badge: "Terpopuler",
    title: "ERD & Dokumentasi Sistem",
    projects: "261 Project",
    clients: "Klien Puas",
    description: "Dokumentasi sistem lengkap: ERD, Use Case, Activity, dan Sequence Diagram",
    price: 59000,
    priceLabel: "/ project",
    minPrice: "Harga Minimal",
    benefits: ["ERD", "Use Case Diagram", "Activity Diagram", "Sequence Diagram", "User Flow", "Documentation"],
  },
];

const formatRupiah = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

const adminWhatsApp = "6283879204375";

// Service to product mapping for modal
const serviceToProduct = (service: { title: string; description: string; benefits: string[]; price: number }) => ({
  id: Math.random(),
  title: service.title,
  rating: 4.9,
  reviews: Math.floor(Math.random() * 200) + 50,
  views: Math.floor(Math.random() * 1000) + 500,
  author: "Full Stack Developer",
  category: "Website",
  description: service.description,
  tags: service.benefits,
  price: service.price,
  originalPrice: service.price * 1.5,
});

import { memo } from "react";

function Services() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [orderForm, setOrderForm] = useState({ name: "", whatsapp: "", email: "", message: "" });
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Services-specific Background - More vibrant */}
      <div className="absolute inset-0 -z-10">
        {/* Main glow - Enhanced */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-r from-violet-600/15 via-purple-600/12 to-cyan-600/15 rounded-full blur-[140px] animate-[ambientPulse_12s_ease-in-out_infinite]" />
        
        {/* Secondary orbs - More vibrant */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-violet-600/12 to-purple-600/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-to-tl from-cyan-600/12 to-blue-600/10 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-pink-600/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        {/* Extra accent */}
        <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-blue-600/8 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Mesh gradient overlay - Enhanced */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.08),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.08),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.04),transparent_50%)]" />

      {/* Grid overlay - More subtle */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Layanan"
          titleFirst="Layanan"
          titleAccent="Full Stack Developer"
          description="Solusi teknologi terdepan untuk mengembangkan bisnis Anda dengan fokus pada Website dan UI/UX Design yang modern dan profesional"
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
            <span>400+ Project Selesai</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              <button
                onClick={() => setSelectedProduct(serviceToProduct(service))}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Pesan Sekarang
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <a
            href="/marketplace"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
          >
            Lihat Semua Produk Marketplace
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold mb-4">
                <Star size={12} className="fill-purple-400" />
                Preview
              </div>
              <div className="text-xs text-zinc-500 mb-2">Coming Soon</div>

              <h2 className="text-xl font-bold text-white mb-2">{selectedProduct.title}</h2>
              <p className="text-sm text-zinc-400 mb-4">{selectedProduct.description}</p>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="text-white font-semibold">{selectedProduct.rating}</span>
                </div>
                <span className="text-zinc-500 text-sm">({selectedProduct.reviews} reviews)</span>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-semibold mb-3">
                -{Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}%
              </div>

              <div className="mb-5">
                <div className="text-2xl font-black text-white">{formatRupiah(selectedProduct.price)}</div>
                <div className="text-sm text-zinc-500 line-through">{formatRupiah(selectedProduct.originalPrice)}</div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProduct.tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-3">Benefit:</h3>
                <ul className="space-y-2">
                  {selectedProduct.tags.slice(0, 4).map((benefit: string, i: number) => (
                    <li key={i} className="text-sm text-zinc-300 flex items-center gap-2">
                      <Check className="text-green-400" size={14} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="text-purple-400" size={16} />
                  <span className="text-sm font-semibold text-white">Chat Admin Langsung</span>
                </div>
                <a
                  href={`https://wa.me/${adminWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:text-purple-300"
                >
                  {adminWhatsApp.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3")}
                </a>
              </div>

              <a
                href={`https://wa.me/${adminWhatsApp}?text=Halo, saya tertarik dengan ${encodeURIComponent(selectedProduct.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors mb-4"
              >
                <MessageCircle size={18} />
                Chat WhatsApp Sekarang
              </a>

              <div className="relative mb-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs text-zinc-500">
                  <span className="px-4 bg-[#0a0a0a]">Atau Isi Data Anda</span>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const message = `Halo, saya ingin memesan ${selectedProduct.title}%0A%0ANama: ${orderForm.name}%0AWA: ${orderForm.whatsapp}%0AEmail: ${orderForm.email}%0APesan: ${orderForm.message}`;
                  window.open(`https://wa.me/${adminWhatsApp}?text=${message}`, "_blank");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Nama Lengkap *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                    <input
                      type="text"
                      required
                      value={orderForm.name}
                      onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                      placeholder="Masukkan nama Anda"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Nomor WhatsApp *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                    <input
                      type="tel"
                      required
                      value={orderForm.whatsapp}
                      onChange={(e) => setOrderForm({ ...orderForm, whatsapp: e.target.value })}
                      placeholder="08123456789"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Email (Opsional)</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                    <input
                      type="email"
                      value={orderForm.email}
                      onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Pesan Tambahan</label>
                  <textarea
                    value={orderForm.message}
                    onChange={(e) => setOrderForm({ ...orderForm, message: e.target.value })}
                    placeholder="Ceritakan kebutuhan spesifik Anda..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <Send size={18} />
                  Kirim Pesanan
                </button>
              </form>

              <div className="mt-4 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-xs text-yellow-400">
                  💡 <strong>Tips:</strong> Untuk respon lebih cepat, gunakan WhatsApp langsung. Admin akan membalas dalam 1-2 jam kerja.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
export default memo(Services);
