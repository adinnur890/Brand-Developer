"use client";
import { GitBranch, Share2, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socials = [
  { icon: GitBranch, href: "https://github.com/", label: "GitHub" },
  { icon: Share2, href: "https://instagram.com/", label: "Instagram" },
  { icon: LinkIcon, href: "https://linkedin.com/", label: "LinkedIn" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const WA_LINK = "https://wa.me/6283879204375";
  const EMAIL = "mailto:hello@branddeveloper.id";

  return (
    <footer className="bg-[#06060c] border-t border-white/10 py-16 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[38px] h-[38px] rounded-2xl bg-[#0a0a14] border border-white/10 flex items-center justify-center overflow-hidden">
                <Image src="/brand-developer.svg" alt="Brand Developer Logo" width={38} height={38} className="object-contain" priority />
              </div>
              <div>
                <p className="text-sm text-zinc-400 uppercase tracking-[0.24em]">Brand Developer</p>
                <h3 className="text-xl font-bold text-white">Premium Web Studio</h3>
              </div>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Kami membantu bisnis, UMKM, startup, dan personal brand memiliki website modern, cepat, elegan, dan profesional.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-[0.18em] mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-[0.18em] mb-4">Kontak</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <a href={WA_LINK} className="block hover:text-white transition-colors">WhatsApp: 0838 7920 4375</a>
              <a href={EMAIL} className="block hover:text-white transition-colors">Email: hello@branddeveloper.id</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-[0.18em] mb-4">Social</h4>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-11 h-11 rounded-3xl glass border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-500/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">© 2026 Brand Developer. All rights reserved.</p>
          <p className="text-xs text-zinc-500">Premium Full Stack Developer Agency</p>
        </div>
      </div>
    </footer>
  );
}