import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/brand-developer.svg"
                  alt="Brand Developer"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg">Brand Developer</span>
            </div>
            <p className="text-sm text-zinc-500 mb-4">
              Jasa IT Profesional untuk Mahasiswa. Bantu tugas, project, dan deadline IT dengan cepat, rapi, dan terpercaya.
            </p>
          </div>

          {/* Layanan */}
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

          {/* Kontak */}
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
                <span className="text-zinc-500 text-sm">Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#faq" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/marketplace" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Marketplace
                </a>
              </li>
            </ul>
          </div>

          {/* Ikuti Kami */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.tiktok.com/@din_development?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://brand-developer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Globe size={14} />
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} Brand Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}