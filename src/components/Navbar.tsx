"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none`}
    >
      <div
        className={`rounded-full border border-white/10 transition-all duration-300 pointer-events-auto
        ${isScrolled ? "scale-95 shadow-md" : "scale-100"}
        w-full max-w-5xl mx-4
        bg-zinc-900/80 md:bg-white/10/5
        md:shadow-lg md:glass-premium md:neon-glow md:shadow-premium`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group select-none">
              <div className="relative w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_16px_rgba(139,92,246,0.25)]">
                <Image
                  src="/brand-developer.svg"
                  alt="Brand Developer"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white font-extrabold text-xl md:text-2xl tracking-tight group-hover:text-purple-300 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.15)]">
                Brand Developer
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-5 py-2 rounded-full font-medium text-sm text-zinc-200 hover:text-white transition-all duration-200 group/navlink overflow-hidden focus:outline-none"
                >
                  <span className="z-10 relative">
                    {link.name}
                  </span>
                  <span className="absolute inset-0 opacity-0 group-hover/navlink:opacity-100 transition-all duration-300 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-400/10 blur-lg rounded-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/6283879204375?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
              >
                <Sparkles size={14} className="animate-pulse" />
                Konsultasi Gratis
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/5 backdrop-blur-xl border-t border-white/10 rounded-b-3xl"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/6283879204375?text=Halo%2C%20saya%20tertarik%20untuk%20konsultasi%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-semibold hover:scale-[1.02] transition-all duration-300 mt-4"
              >
                <Sparkles size={14} />
                Konsultasi Gratis
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}