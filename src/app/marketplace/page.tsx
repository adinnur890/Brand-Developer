"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowLeft, Star, ShoppingCart, ChevronDown, Eye, X, Check, MessageCircle, User, Phone, Mail, Send } from "lucide-react";
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
  {
    id: 7,
    title: "Sistem Informasi Akademik",
    rating: 4.9,
    reviews: 85,
    views: 620,
    author: "Full Stack Developer",
    category: "Website",
    description: "Sistem informasi akademik lengkap dengan manajemen siswa, guru, nilai, dan laporan",
    tags: ["Laravel", "MySQL", "Bootstrap", "Admin Panel", "Report", "User Management"],
    price: 249000,
    originalPrice: 500000,
  },
  {
    id: 8,
    title: "Aplikasi Kasir / Point of Sale",
    rating: 4.9,
    reviews: 110,
    views: 890,
    author: "Full Stack Developer",
    category: "Website",
    description: "Aplikasi kasir berbasis web dengan fitur transaksi, stok, laporan, dan cetak struk",
    tags: ["Node.js", "Express", "MySQL", "POS", "Print", "Inventory"],
    price: 279000,
    originalPrice: 550000,
  },
  {
    id: 9,
    title: "Sistem Manajemen Proyek",
    rating: 4.9,
    reviews: 55,
    views: 380,
    author: "Full Stack Developer",
    category: "Website",
    description: "Sistem manajemen proyek dengan task tracking, timeline, dan kolaborasi tim",
    tags: ["Next.js", "Node.js", "MongoDB", "Kanban", "Gantt Chart", "Team"],
    price: 349000,
    originalPrice: 700000,
  },
  {
    id: 10,
    title: "Website Reservasi / Booking",
    rating: 4.9,
    reviews: 70,
    views: 510,
    author: "Full Stack Developer",
    category: "Website",
    description: "Website sistem reservasi online untuk restoran, hotel, atau layanan lainnya",
    tags: ["PHP", "Laravel", "MySQL", "Booking", "Calendar", "Email"],
    price: 229000,
    originalPrice: 450000,
  },
];

const categories = [
  { name: "Semua", count: 10 },
  { name: "Website", count: 8 },
  { name: "UI/UX", count: 2 },
];

const sortOptions = ["Terpopuler", "Harga Terendah", "Harga Tertinggi", "Terbaru"];

const adminWhatsApp = "6283879204375";

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
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [orderForm, setOrderForm] = useState({ name: "", whatsapp: "", email: "", message: "" });

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "Semua" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Harga Terendah":
        return a.price - b.price;
      case "Harga Tertinggi":
        return b.price - a.price;
      case "Terbaru":
        return b.id - a.id;
      case "Terpopuler":
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <main className="min-h-screen bg-[#050816] relative overflow-hidden">
      {/* Marketplace-specific Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Main glow */}
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-blue-600/12 to-cyan-600/12 rounded-full blur-[120px] animate-[ambientPulse_15s_ease-in-out_infinite]" />
        
        {/* Secondary orbs */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cyan-600/8 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-purple-600/6 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Mesh gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.05),transparent_60%)] pointer-events-none" />

      {/* Grid overlay */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Header with Back Button */}
      <header className="sticky top-0 z-50 bg-[#050816]/95 backdrop-blur-xl border-b border-white/10">
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
            {sortedProducts.map((product, index) => (
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
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Beli
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
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
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>

                  {/* Preview Badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold mb-4">
                    <Star size={12} className="fill-purple-400" />
                    Preview
                  </div>
                  <div className="text-xs text-zinc-500 mb-2">Coming Soon</div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-2">{selectedProduct.title}</h2>
                  <p className="text-sm text-zinc-400 mb-4">{selectedProduct.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <span className="text-white font-semibold">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-zinc-500 text-sm">({selectedProduct.reviews} reviews)</span>
                  </div>

                  {/* Discount Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-semibold mb-3">
                    -{Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}%
                  </div>

                  {/* Price */}
                  <div className="mb-5">
                    <div className="text-2xl font-black text-white">{formatRupiah(selectedProduct.price)}</div>
                    <div className="text-sm text-zinc-500 line-through">{formatRupiah(selectedProduct.originalPrice)}</div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {selectedProduct.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white mb-3">Benefit:</h3>
                    <ul className="space-y-2">
                      {selectedProduct.tags.slice(0, 4).map((benefit, i) => (
                        <li key={i} className="text-sm text-zinc-300 flex items-center gap-2">
                          <Check className="text-green-400" size={14} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Chat Admin */}
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

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${adminWhatsApp}?text=Halo, saya tertarik dengan ${encodeURIComponent(selectedProduct.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors mb-4"
                  >
                    <MessageCircle size={18} />
                    Chat WhatsApp Sekarang
                  </a>

                  {/* Divider */}
                  <div className="relative mb-5">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs text-zinc-500">
                      <span className="px-4 bg-[#0a0a0a]">Atau Isi Data Anda</span>
                    </div>
                  </div>

                  {/* Order Form */}
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

                  {/* Tip */}
                  <div className="mt-4 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                    <p className="text-xs text-yellow-400">
                      💡 <strong>Tips:</strong> Untuk respon lebih cepat, gunakan WhatsApp langsung. Admin akan membalas dalam 1-2 jam kerja.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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