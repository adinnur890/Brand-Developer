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
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "mx-4 max-w-[calc(100%-2rem)]"
          : "mx-4 max-w-[calc(100%-2rem)]"
      }`}
    >
      <div className={`rounded-full backdrop-blur-2xl border transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 border-white/15 shadow-lg shadow-purple-500/10"
          : "bg-white/5 border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/brand-developer.svg"
                  alt="Brand Developer"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white font-bold text-lg md:text-xl group-hover:text-purple-300 transition-colors duration-300">
                Brand Developer
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium"
                >
                  {link.name}
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