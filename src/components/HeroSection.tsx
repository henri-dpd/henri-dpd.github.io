"use client";

import { useTranslation } from "react-i18next";
import TerminalWidget from "./TerminalWidget";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-glow-top pointer-events-none" />
      {/* Grid texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid-texture" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 animate-border-glow">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-heading font-medium tracking-widest uppercase">
                {t("hero.badge")}
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-fore via-accent to-fore bg-clip-text text-transparent animate-shimmer">
                  Henri Peña
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-muted text-base sm:text-lg font-medium leading-relaxed max-w-lg">
              {t("hero.subtitle")}
            </p>

            {/* Description */}
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg">
              {t("hero.description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="#experiencia"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-accent text-on-accent font-heading font-bold text-sm tracking-wide hover:bg-accent/90 transition-all duration-200 shadow-[0_0_24px_var(--p-shadow-accent)] animate-glow-pulse"
              >
                {t("hero.cta1")}
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-edge text-muted font-heading font-semibold text-sm hover:border-accent/40 hover:text-fore transition-all duration-200"
              >
                {t("hero.cta2")}
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 pt-2 border-t border-edge">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-heading font-bold text-fore">5+</div>
                <div className="text-xs text-muted mt-0.5">{t("hero.stat1")}</div>
              </div>
              <div className="w-px h-10 bg-edge" />
              <div className="text-center sm:text-left">
                <div className="text-2xl font-heading font-bold text-fore">6</div>
                <div className="text-xs text-muted mt-0.5">{t("hero.stat2")}</div>
              </div>
              <div className="w-px h-10 bg-edge" />
              <div className="text-center sm:text-left">
                <div className="text-2xl font-heading font-bold text-fore">3</div>
                <div className="text-xs text-muted mt-0.5">{t("hero.stat3")}</div>
              </div>
            </div>
          </div>

          {/* Right column — Terminal widget */}
          <div className="flex justify-center lg:justify-end">
            <TerminalWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
