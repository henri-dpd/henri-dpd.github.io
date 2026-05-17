"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[#0d1224]/90 border-b border-[#1e293b]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-1 group">
            <span className="font-heading font-bold text-xl text-white tracking-tight">
              Henri
            </span>
            <span className="font-heading font-bold text-xl text-[#00f0ff]">
              .
            </span>
            <span className="font-mono text-xs text-[#94a3b8] mt-1">dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center px-4 py-1.5 rounded-lg border border-[#00f0ff]/60 text-[#00f0ff] text-sm font-medium font-heading hover:bg-[#00f0ff]/10 transition-all duration-200"
            >
              Contactar
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1 text-[#94a3b8] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#1e293b] bg-[#0d1224]/95 backdrop-blur-md px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-2 py-2.5 text-[#94a3b8] hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-[#1e293b]/50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#1e293b]">
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center px-4 py-2.5 rounded-lg border border-[#00f0ff]/60 text-[#00f0ff] text-sm font-medium font-heading"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
