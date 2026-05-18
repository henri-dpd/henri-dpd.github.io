"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { navLinks } from "@/data/portfolio";
import { useTheme } from "@/components/Providers";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const next = i18n.language.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(next);
  };

  const currentLang = i18n.language.startsWith("es") ? "es" : "en";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-navy/90 border-b border-edge"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <Image
              src="/icons/icon-128.png"
              alt="Henri Peña"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <span className="font-heading font-bold text-base text-fore tracking-tight">
              Henri Peña
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-fore transition-colors duration-200 font-medium"
              >
                {t(`nav.${link.id}`)}
              </a>
            ))}
          </div>

          {/* Controls: lang toggle + theme toggle + CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-mono font-semibold text-muted hover:text-accent transition-colors duration-200"
            >
              <Globe size={13} />
              <span>{currentLang === "en" ? "ES" : "EN"}</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 rounded-lg text-muted hover:text-accent transition-colors duration-200"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a
              href="#contacto"
              className="hidden md:inline-flex items-center px-4 py-1.5 rounded-lg border border-accent/60 text-accent text-sm font-medium font-heading hover:bg-accent/10 transition-all duration-200"
            >
              {t("nav.cta")}
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1 text-muted hover:text-fore transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-edge bg-navy/95 backdrop-blur-md px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-2 py-2.5 text-muted hover:text-fore text-sm font-medium transition-colors rounded-lg hover:bg-edge/50"
            >
              {t(`nav.${link.id}`)}
            </a>
          ))}
          <div className="pt-2 border-t border-edge">
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center px-4 py-2.5 rounded-lg border border-accent/60 text-accent text-sm font-medium font-heading"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
