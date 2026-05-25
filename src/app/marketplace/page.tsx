"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowLeft, Star, ShoppingCart, ChevronDown, Eye } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    title: "UI/UX Portofolio Design Kit",
    rating: 4.9,
    reviews: 340,
    views: 1800,
    author: "UI/UX Expert",
    category: "UI/UX",
    description: "UI kit portofolio dengan design system, auto layout, dan Prototype",
    tags: ["Figma", "Design System", "Auto Layout", "Landing portofolio", "Komponen reusable", "Prototype"],
    price: 59000,
    originalPrice: 100000,
  },
  {
    id: 2,
    title: "UI/UX Landing Page Company Design Kit",
    rating: 4.9,
    reviews: 340,
    views: 1800,
    author: "UI/UX Expert",
    category: "UI/UX",
    description: "UI kit landing page dengan design system, auto layout dan Prototype",
    tags: ["Figma", "Design System", "Auto Layout", "Landing portofolio", "Komponen reusable", "Prototype"],
    price: 59000,
    originalPrice: 100000,
  },
  {
    id: 3,
    title: "Landing Page Website Bisnis",
    rating: 4.9,
    reviews: 120,
    views: 860,
    author: "Full Stack Developer",
    category: "Website",
    description: "Landing page profesional untuk bisnis dengan desain modern, responsif, dan SEO-friendly",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Responsive", "Fast Loading", "Contact Form"],
    price: 149000,
    originalPrice: 300000,
  },
  {
    id: 4,
    title: "Website Toko Online / E-Commerce",
    rating: 4.9,
    reviews: 95,
    views: 720,
    author: "Full Stack Developer",
    category: "Website",
    description: "Website e-commerce lengkap dengan fitur katalog produk, keranjang, checkout, dan payment gateway",
    tags: ["Next.js", "MySQL", "Payment Gateway", "Admin Panel", "Keranjang", "Checkout"],
    price: 299000,
    originalPrice: 600000,
  },
  {
    id: 5,
    title: "Website Company Profile",
    rating: 4.9,
    reviews: 75,
    views: 540,
    author: "Full Stack Developer",
    category: "Website",
    description: "Website company profile profesional untuk perusahaan dengan desain elegan dan fitur lengkap",
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "SEO", "Contact Form"],
    price: 199000,
    originalPrice: 400000,
  },
  {
    id: 6,
    title: "Website Blog / Berita",
    rating: 4.9,
    reviews: 60,
    views: 450,
    author: "Full Stack Developer",
    category: "Website",
    description: "Website blog atau berita dengan CMS sederhana, kategori, dan fitur komentar",
    tags: ["PHP", "MySQL", "CMS", "Kategori", "Komentar", "Responsive"],
    price: 179000,
    originalPrice: 350000,
  },
];

const categories = [
  { name: "Semua", count: 6 },
  { name: "Website", count: 4 },
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
    const matchesCategory = activeCategory === "Semua" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Kembali</span>
            </Link>
            <h1 className="text-xl font-bold text-white">Marketplace</h1>
          </div>
        </div>
      </header>

      {/* Search & Filters */}
      <section className="px-6 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar with Sort */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
              <input
                type="text"
                placeholder="Cari produk, tag, atau deskripsi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors text-base"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  <span className="text-zinc-400">Urutkan:</span> <span className="text-purple-400 font-semibold">{sortBy}</span>
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
              <div className="text-zinc-400 text-sm whitespace-nowrap">
                Menampilkan <span className="text-white font-semibold">{filteredProducts.length}</span> dari <span className="text-white font-semibold">{products.length}</span> produk
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-xl border border-white/5 p-5 hover:border-purple-500/20 transition-all duration-300"
              >
                {/* Header: Author + Title */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0">
                      {product.author.charAt(0)}
                    </div>
                    <span className="text-xs text-zinc-500">{product.author}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white line-clamp-2 hover:text-purple-300 transition-colors">
                    {product.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-500 mb-3 line-clamp-2">{product.description}</p>

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

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
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

                {/* Footer: Price + Buy */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div>
                    <div className="text-base font-black text-white">{formatRupiah(product.price)}</div>
                    <div className="text-xs text-zinc-500 line-through">{formatRupiah(product.originalPrice)}</div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity">
                    Beli
                  </button>
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