"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Users, X, MessageCircle, Mail, User, Phone, CheckCircle, Clock } from "lucide-react";

const adminWhatsApp = "6283879204375";

export default function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", whatsapp: "", sendEmail: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ingin konsultasi gratis%0A%0ANama: ${form.name}%0AWA: ${form.whatsapp}`;
    
    if (form.sendEmail) {
      // Send via email (open mail client)
      window.location.href = `mailto:admin@butuhsolusi.com?subject=Konsultasi Gratis - ${form.name}&body=Nama: ${form.name}%0D%0AWA: ${form.whatsapp}`;
      setShowSuccess(true);
    } else {
      // Open WhatsApp directly
      window.open(`https://wa.me/${adminWhatsApp}?text=${message}`, "_blank");
      setShowModal(false);
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Gimana, sudah yakin?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Yuk pesan layanan kami sekarang juga dan jadikan kami sebagai mitra terbaikmu dalam menghadirkan solusi IT yang hebat!
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                <Zap size={16} />
                <span>400+ Project</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                <Zap size={16} />
                <span>Response Cepat</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                <Users size={16} />
                <span>Tim Profesional</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-purple-600 font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Konsultasi Gratis
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Consultation Modal */}
      <AnimatePresence>
        {showModal && !showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Konsultasi Gratis</h3>
                <p className="text-sm text-zinc-400">Hubungi kami via WhatsApp</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Nama Lengkap</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Nomor WhatsApp Anda</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                    <input
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="08123456789 atau +6281234567890"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="sendEmail"
                    checked={form.sendEmail}
                    onChange={(e) => setForm({ ...form, sendEmail: e.target.checked })}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="sendEmail" className="text-xs text-zinc-400">
                    Kirim Email: Mengirim data konsultasi via email
                  </label>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    {form.sendEmail ? (
                      <>
                        <Mail size={16} />
                        Kirim Email
                      </>
                    ) : (
                      <>
                        <MessageCircle size={16} />
                        Buka WA
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Icon */}
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-400" size={32} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Pesanan Berhasil Dikirim!</h3>
              <p className="text-sm text-zinc-400 mb-6">
                Terima kasih! Admin akan menghubungi Anda segera melalui WhatsApp untuk konfirmasi pesanan layanan IT.
              </p>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${adminWhatsApp}?text=Halo, saya sudah mengirim email konsultasi. Nama: ${form.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors mb-4"
              >
                <MessageCircle size={18} />
                Chat WhatsApp
              </a>

              {/* Response Time */}
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-6">
                <Clock size={14} />
                <span>Respon dalam 5-10 menit</span>
              </div>

              {/* Free Consultation Info */}
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-6">
                <p className="text-xs text-purple-400">
                  💡 <strong>Konsultasi Gratis</strong> - Tanpa biaya apapun
                </p>
              </div>

              {/* Chat Admin Button */}
              <a
                href={`https://wa.me/${adminWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                Chat Admin Sekarang
              </a>

              {/* Close Button */}
              <button
                onClick={() => {
                  setShowSuccess(false);
                  setForm({ name: "", whatsapp: "", sendEmail: false });
                }}
                className="mt-4 text-zinc-500 hover:text-white transition-colors text-sm"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}