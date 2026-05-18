"use client";

import { useTranslation } from "react-i18next";
import { Terminal, Globe, Zap, Award } from "lucide-react";

export default function AboutSection() {
  const { t } = useTranslation();

  const highlights = [
    { id: "serverless", Icon: Terminal },
    { id: "global",     Icon: Globe },
    { id: "ai",         Icon: Zap },
    { id: "security",   Icon: Award },
  ];

  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px w-10 bg-accent" />
          <span className="text-accent text-xs font-heading font-medium uppercase tracking-widest">
            {t("about.label")}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left – Vision */}
          <div className="space-y-6 animate-on-scroll-left">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fore leading-tight">
              {t("about.heading1")}
              <br />
              <span className="text-accent">{t("about.heading2")}</span>
            </h2>
            <p className="text-muted leading-relaxed">{t("about.p1")}</p>
            <p className="text-muted leading-relaxed">{t("about.p2")}</p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-accent text-sm font-medium font-heading group hover:gap-3 transition-all duration-200"
            >
              {t("about.cta")}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right – Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-2 animate-on-scroll-right">
            {highlights.map(({ id, Icon }) => (
              <div
                key={id}
                className="p-5 rounded-xl border border-edge bg-card hover:border-accent/30 hover:bg-card-hi transition-all duration-300 animate-scale-in"
              >
                <Icon size={20} className="text-accent mb-3" />
                <h3 className="text-fore font-heading font-semibold text-sm mb-1.5">
                  {t(`about.highlights.${id}.label`)}
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  {t(`about.highlights.${id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
