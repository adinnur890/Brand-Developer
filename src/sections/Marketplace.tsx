"use client";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Search, Filter } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const products = [
  {
    title: "Aplikasi Login + CRUD (Flutter + MySQL)",
    rating: 4.9,
    reviews: 64,
    views: 520,
    description: "Aplikasi Flutter dengan autentikasi dan CRUD terhubung ke MySQL via API",
    tags: ["Flutter", "MySQL", "REST API", "Auth", "CRUD"],
    price: 199000,
    originalPrice: 500000,
    image: "/Nexora-ai.png",
  },
  {
    title: "Website Sederhana HTML, CSS, dan JavaScript dasar",
    rating: 4.9,
    reviews: 75,
    views: 540,
    description: "Template website sederhana dengan HTML, CSS, dan JavaScript dasar",
    tags: ["HTML", "CSS", "JavaScript"],
    price: 99000,
    originalPrice: 150000,
    image: "/tododin-preview.jpg",
  },
  {
    title: "Machine Learning Dasar Klasifikasi Buah",
    rating: 4.9,
    reviews: 120,
    views: 860,
    description: "Pipeline klasifikasi buah dengan preprocessing, evaluasi akurasi, dan confusion matrix",
    tags: ["Python", "Scikit-learn", "Pandas"],
    price: 99000,
    originalPrice: 200000,
    image: "/Nexora-ai.png",
  },
  {
    title: "UI/UX Portofolio Design Kit",
    rating: 4.9,
    reviews: 340,
    views: 1800,
    description: "UI kit portofolio dengan design system, auto layout, dan Prototype",
    tags: ["Figma", "Design System", "Auto Layout"],
    price: 59000,
    originalPrice: 100000,
    image: "/tododin-preview.jpg",
  },
  {
    title: "Aplikasi Kasir POS Desktop (NEXT.js + Electron)",
    rating: 4.9,
    reviews: 8,
    views: 10,
    description: "Aplikasi kasir desktop berbasis Next.js + Electron dengan kelola produk/kategori, penjualan, cetak struk, dan laporan.",
    tags: ["Next.js", "Electron", "TypeScript", "Prisma"],
    price: 250000,
    originalPrice: 350000,
    image: "/Nexora-ai.png",
  },
  {
    title: "Machine Learning Klasifikasi Penyakit Kulit Kucing",
    rating: 4.9,
    reviews: 120,
    views: 860,
    description: "Pipeline klasifikasi penyakit kulit kucing dengan preprocessing, evaluasi akurasi, dan confusion matrix",
    tags: ["Python", "Scikit-learn", "Pandas"],
    price: 120000,
    originalPrice: 200000,
    image: "/tododin-preview.jpg",
  },
];

const categories = [
  { name: "Semua", count: 9 },
  { name: "Mobile App", count: 2 },
  { name: "Website", count: 3 },
  { name: "Data Science", count: 2 },
  { name: "UI/UX", count: 2 },
];

export default function Marketplace() {
  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="marketplace" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Marketplace"
          titleFirst="Marketplace"
          titleAccent="Mahasiswa"
          description="Temukan template, aplikasi, dan solusi IT siap pakai untuk mempercepat project Anda"
        />

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="glass rounded-2xl p-4 text-center border border-white/5">
            <div className="text-2xl font-black text-purple-400">100+</div>
            <div className="text-xs text-zinc-500 mt-1">Template Siap Pakai</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center border border-white/5">
            <div className="text-2xl font-black text-purple-400">24/7</div>
            <div className="text-xs text-zinc-500 mt-1">Support</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center border border-white/5">
            <div className="text-2xl font-black text-purple-400">5</div>
            <div className="text-xs text-zinc-500 mt-1">Kategori</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center border border-white/5">
            <div className="text-2xl font-black text-purple-400">Cepat</div>
            <div className="text-xs text-zinc-500 mt-1">Instant Download</div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2 hover:bg-white/10 transition-colors">
            <Filter size={18} />
            Filter
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat.name}
              <span className="ml-2 opacity-60 text-xs">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-xs">
                  <Star className="text-yellow-400 fill-yellow-400" size={12} />
                  <span className="text-white font-medium">{product.rating}</span>
                  <span className="text-zinc-400">({product.reviews})</span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                  {product.title}
                </h3>
                <p className="text-xs text-zinc-500 mb-3 line-clamp-2">{product.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price & Buy */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-black text-white">{formatRupiah(product.price)}</div>
                    <div className="text-xs text-zinc-500 line-through">{formatRupiah(product.originalPrice)}</div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity">
                    <ShoppingCart size={14} />
                    Beli
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
            Lihat Semua Produk Marketplace
          </button>
        </div>
      </div>
    </section>
  );
}