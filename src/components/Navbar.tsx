"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const WA_LINK = "https://wa.me/6283879204375?text=Halo%20Brand%20Developer%2C%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website.";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl bg-black/60 border-b border-white/5 shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-[38px] h-[38px] rounded-2xl bg-[#0a0a14] border border-white/10 flex items-center justify-center overflow-hidden">
              <Image
                src="/brand-developer.svg"
                alt="Brand Developer Logo"
                width={38}
                height={38}
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 8px #7C3AED) drop-shadow(0 0 2px #3B82F6)" }}
                priority
              />
            </div>
            <span className="text-sm font-bold gradient-text hidden sm:inline">Brand Developer</span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-sm font-semibold rounded-full bg-linear-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity"
            >
              Mulai Proyek
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-sm text-zinc-300 hover:text-white">
                {link.label}
              </Link>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex-1 py-2 text-sm font-semibold text-center rounded-full bg-linear-to-r from-purple-600 to-blue-600"
            >
              Mulai Proyek
            </a>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}