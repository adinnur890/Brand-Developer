"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Star, ShoppingCart, ChevronDown, Eye, MessageCircle } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    title: "UI/UX Portofolio Design Kit",
    rating: 4.9,
    reviews: 340,
    views: 1800,
    author: "UI/UX Expert",
    description: "UI kit portofolio dengan design system, auto layout, dan Prototype",
    tags: ["Figma", "Design System", "Auto Layout", "Landing portofolio", "Komponen reusable", "Prototype"],
    price: 59000,
    originalPrice: 100000,
    image: "/Nexora-ai.png",
  },
  {
    id: 2,
    title: "UI/UX Landing Page Company Design Kit",
    rating: 4.9,
    reviews: 340,
    views: 1800,
    author: "UI/UX Expert",
    description: "UI kit landing page dengan design system, auto layout dan Prototype",
    tags: ["Figma", "Design System", "Auto Layout", "Landing portofolio", "Komponen reusable", "Prototype"],
    price: 59000,
    originalPrice: 100000,
    image: "/Nexora-ai.png",
  },
  {
    id: 3,
    title: "Machine Learning Dasar Klasifikasi Buah",
    rating: 4.9,
    reviews: 120,
    views: 860,
    author: "Data Scientist",
    description: "Pipeline klasifikasi buah dengan preprocessing, evaluasi akurasi, dan confusion matrix",
    tags: ["Python", "Scikit-learn", "Pandas", "Preprocessing data", "Klasifikasi & evaluasi", "Confusion matrix"],
    price: 99000,
    originalPrice: 200000,
    image: "/tododin-preview.jpg",
  },
  {
    id: 4,
    title: "Machine Learning Dasar Klasifikasi Penyakit Kulit Kucing",
    rating: 4.9,
    reviews: 120,
    views: 860,
    author: "Data Scientist",
    description: "Pipeline klasifikasi penyakit kulit kucing dengan preprocessing, evaluasi akurasi, dan confusion matrix",
    tags: ["Python", "Scikit-learn", "Pandas", "Preprocessing data", "Klasifikasi & evaluasi", "Confusion matrix"],
    price: 120000,
    originalPrice: 200000,
    image: "/tododin-preview.jpg",
  },
  {
    id: 5,
    title: "Website Sederhana HTML, CSS, dan JavaScript dasar",
    rating: 4.9,
    reviews: 75,
    views: 540,
    author: "Web Developer",
    description: "Template website sederhana dengan HTML, CSS, dan JavaScript dasar",
    tags: ["HTML", "CSS", "JavaScript", "Struktur HTML", "Styling CSS", "Interaksi JS"],
    price: 99000,
    originalPrice: 150000,
    image: "/Nexora-ai.png",
  },
  {
    id: 6,
    title: "Website Sederhana HTML, CSS, dan PHP dasar",
    rating: 4.9,
    reviews: 75,
    views: 540,
    author: "Web Developer",
    description: "Template website sederhana dengan HTML, CSS, dan PHP dasar",
    tags: ["HTML", "CSS", "PHP", "Struktur HTML", "Styling CSS", "Interaksi PHP"],
    price: 99000,
    originalPrice: 150000,
    image: "/Nexora-ai.png",
  },
  {
    id: 7,
    title: "Aplikasi Login + CRUD (Flutter + MySQL)",
    rating: 4.9,
    reviews: 64,
    views: 520,
    author: "Mobile Developer",
    description: "Aplikasi Flutter dengan autentikasi dan CRUD terhubung ke MySQL via API",
    tags: ["Flutter", "MySQL", "REST API", "Auth", "CRUD", "Login & Register", "CRUD data", "API MySQL (PHP)"],
    price: 199000,
    originalPrice: 500000,
    image: "/tododin-preview.jpg",
  },
  {
    id: 8,
    title: "Aplikasi Login + CRUD (ReactNative + MySQL)",
    rating: 4.9,
    reviews: 64,
    views: 520,
    author: "Mobile Developer",
    description: "Aplikasi ReactNative dengan autentikasi dan CRUD terhubung ke MySQL via API",
    tags: ["ReactNative", "MySQL", "REST API", "Auth", "CRUD", "Login & Register", "CRUD data", "API MySQL (PHP)"],
    price: 199000,
    originalPrice: 500000,
    image: "/tododin-preview.jpg",
  },
  {
    id: 9,
    title: "Aplikasi Kasir POS Desktop (NEXT.js + Electron)",
    rating: 4.9,
    reviews: 8,
    views: 10,
    author: "Full Stack Developer",
    description: "Aplikasi kasir desktop berbasis Next.js + Electron dengan kelola produk/kategori, penjualan, cetak struk, dan laporan.",
    tags: ["Next.js", "Electron", "TypeScript", "Prisma", "React Query", "Kelola produk & kategori", "Penjualan POS (diskon & kembalian)", "Cetak struk thermal", "Laporan pemasukan & pengeluaran"],
    price: 250000,
    originalPrice: 350000,
    image: "/Nexora-ai.png",
  },
];

const categories = [
  { name: "Semua", count: 9 },
  { name: "Mobile App", count: 2 },
  { name: "Website", count: 3 },
  { name: "Datasience", count: 2 },
  { name: "UI/UX", count: 2 },
];

const sortOptions = ["Terpopuler", "Harga Terendah", "Harga Tertinggi", "Terbaru"];

const formatRupiah = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [sortBy, setSortBy] = useState("Terpopuler");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Marketplace <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Produk Digital</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Temukan template, aplikasi, dan solusi IT siap pakai untuk mempercepat project Anda
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
            <input
              type="text"
              placeholder="Cari produk, tag, atau deskripsi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors text-base"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.name
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat.name}
                <span className="ml-2 opacity-60 text-xs">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Sort & Results */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="text-zinc-400 text-sm">
              Menampilkan <span className="text-white font-semibold">{filteredProducts.length}</span> dari <span className="text-white font-semibold">{products.length}</span> produk
            </div>
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-colors"
              >
                Urutkan: <span className="text-purple-400 font-semibold">{sortBy}</span>
                <ChevronDown size={16} className={`transition-transform ${showSortDropdown ? "rotate-180" : ""}`} />
              </button>
              {showSortDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-[#0a0a0a] border border-white/10 shadow-xl z-10 overflow-hidden">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm hover:bg-white/5 transition-colors ${
                        sortBy === option ? "text-purple-400 bg-purple-500/10" : "text-zinc-400"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                {/* Product Content */}
                <div className="p-5">
                  {/* Author */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
                      {product.author.charAt(0)}
                    </div>
                    <span className="text-xs text-zinc-500">{product.author}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-zinc-500 mb-4 line-clamp-2">{product.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.slice(0, 5).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {product.tags.length > 5 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-500">
                        +{product.tags.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between mb-4 text-xs text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={12} />
                      <span className="text-white font-semibold">{product.rating}</span>
                      <span className="text-zinc-600">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={12} />
                      <span>{product.views}</span>
                    </div>
                  </div>

                  {/* Price & Buy */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-black text-white">{formatRupiah(product.price)}</div>
                      <div className="text-xs text-zinc-500 line-through">{formatRupiah(product.originalPrice)}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                        <MessageCircle size={16} />
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity">
                        <ShoppingCart size={14} />
                        Beli
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">Produk tidak ditemukan</h3>
              <p className="text-zinc-500">Coba kata kunci pencarian lain</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}