import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/brand-developer.svg"
                  alt="Brand Developer"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl">Brand Developer</span>
            </div>
            <p className="text-sm text-zinc-500 mb-6">
              Jasa IT Profesional untuk Bisnis. Bantu bangun website modern, cepat, dan profesional.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/adinnur890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-sm font-semibold"
              >
                GH
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-sm font-semibold"
              >
                IG
              </a>
              <a
                href="https://www.tiktok.com/@din_development?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-sm font-semibold"
              >
                TT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/marketplace" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#services" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#faq" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Dokumentasi Sistem
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                <a href="https://wa.me/6283879204375" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  +62 838-792-04375 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                <a href="mailto:admin@butuhsolusi.com" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  admin@butuhsolusi.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-zinc-500 text-sm">
                  Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Brand Developer. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}