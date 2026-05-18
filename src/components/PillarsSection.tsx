"use client";

import { useTranslation } from "react-i18next";
import { pillars } from "@/data/portfolio";
import type { PillarItem } from "@/types";

function PillarCard({ pillar }: { pillar: PillarItem }) {
  const { id, icon: Icon, tags } = pillar;
  const { t } = useTranslation();

  return (
    <div className="group relative p-7 rounded-xl border border-edge bg-card hover:border-accent/50 hover:bg-card-hi transition-all duration-300 flex flex-col animate-scale-in">
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-6 right-6 h-px bg-accent/0 group-hover:bg-accent/40 transition-all duration-300 rounded-full" />

      {/* Icon */}
      <div className="mb-5 inline-flex p-3 rounded-xl bg-accent/10 border border-accent/20 w-fit">
        <Icon size={22} className="text-accent" />
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-fore text-xl mb-3">
        {t(`pillars.${id}.title`)}
      </h3>
      <p className="text-muted text-sm leading-relaxed flex-1">
        {t(`pillars.${id}.description`)}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-xs rounded-md bg-navy border border-edge text-muted font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PillarsSection() {
  const { t } = useTranslation();
  return (
    <section id="pilares" className="py-24 relative">
      {/* Subtle center glow */}
      <div className="absolute inset-0 bg-glow-center pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-accent text-xs font-heading font-medium uppercase tracking-widest">
              {t("pillars.label")}
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fore">
            {t("pillars.heading")}
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            {t("pillars.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
