"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const faqItems = [
  {
    question: "Berapa lama proyek dikerjakan?",
    answer: "Durasi pengerjaan bervariasi tergantung kompleksitas proyek. Untuk website sederhana 3-7 hari, aplikasi mobile 1-3 minggu, dan sistem custom 2-4 minggu. Timeline detail akan dibahas saat konsultasi.",
  },
  {
    question: "Apakah bisa di-refund?",
    answer: "Ya, kami menyediakan kebijakan refund sesuai kesepakatan. Jika terjadi keterlambatan dari sisi kami atau hasil tidak sesuai spesifikasi yang disepakati, Anda berhak mendapatkan refund penuh atau sebagian.",
  },
  {
    question: "Apakah ada jatah revisi?",
    answer: "Setiap paket sudah termasuk 3x revisi mayor dan unlimited revisi minor. Revisi mayor adalah perubahan layout/fitur, sedangkan minor adalah perubahan teks/warna kecil.",
  },
  {
    question: "Apakah ada garansi perbaikan bug?",
    answer: "Ya, semua proyek mendapatkan garansi bug 30 hari setelah delivery. Jika ditemukan bug/error yang bukan disebabkan oleh perubahan dari klien, kami perbaiki gratis.",
  },
  {
    question: "Apakah bisa custom sesuai kebutuhan saya?",
    answer: "Tentu! Kami menerima pesanan custom. Silakan konsultasikan kebutuhan spesifik Anda melalui WhatsApp atau form kontak. Tim kami akan memberikan penawaran sesuai kebutuhan.",
  },
  {
    question: "Bagaimana metode pembayaran?",
    answer: "Kami menerima pembayaran via transfer bank (BCA, Mandiri, BNI), e-wallet (GoPay, OVO, Dana), dan QRIS. Pembayaran dilakukan 50% di awal, 50% setelah proyek selesai.",
  },
  {
    question: "Apakah ada support setelah proyek selesai?",
    answer: "Ya, kami menyediakan free support 30 hari untuk konsultasi teknis. Untuk maintenance jangka panjang, tersedia paket maintenance bulanan dengan harga terjangkau.",
  },
  {
    question: "Keamanan data dan akses bagaimana?",
    answer: "Kami menjamin kerahasiaan data Anda. Semua akses dan credentials akan dihapus setelah proyek selesai. Kami juga bersedia menandatangani NDA jika diperlukan.",
  },
  {
    question: "Teknologi apa yang biasa digunakan?",
    answer: "Kami menggunakan teknologi modern: React/Next.js untuk frontend, Node.js/Laravel untuk backend, MySQL/PostgreSQL/MongoDB untuk database, dan Flutter/React Native untuk mobile apps.",
  },
  {
    question: "Bagaimana cara memulai?",
    answer: "Klik tombol 'Pesan Sekarang' atau hubungi WhatsApp kami. Ceritakan kebutuhan Anda, kami akan berikan estimasi harga dan timeline. Setelah deal, proyek langsung dikerjakan!",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="FAQ"
          titleFirst="Pertanyaan"
          titleAccent="Umum"
          description="Masih bingung? Tenang, kami siap membantumu. Jika ada pertanyaan lain yang belum ada di sini, boleh tanyakan dan konsultasikan langsung dengan tim ahli kami."
        />

        {/* Consultation Banner */}
        <div className="glass rounded-2xl border border-purple-500/20 p-6 mb-12 text-center">
          <MessageCircle className="mx-auto mb-4 text-purple-400" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Konsultasi Gratis</h3>
          <p className="text-sm text-zinc-400 mb-4">Tim support kami siap membantu 24/7 untuk menjawab semua pertanyaan Anda</p>
          <a
            href="https://wa.me/6283879204375"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Hubungi Kami Sekarang
          </a>
        </div>

        {/* FAQ Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-black text-purple-400">24/7</div>
            <div className="text-xs text-zinc-500">Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-purple-400">100%</div>
            <div className="text-xs text-zinc-500">Gratis</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-purple-400">{`<1h`}</div>
            <div className="text-xs text-zinc-500">Respon</div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="glass rounded-xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-purple-400 flex-shrink-0" size={20} />
                  <span className="text-sm font-semibold text-white">{item.question}</span>
                </div>
                <ChevronDown
                  className={`text-zinc-500 transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 pl-14">
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}