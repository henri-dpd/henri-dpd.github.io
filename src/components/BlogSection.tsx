"use client";

import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";
import { writeupCards } from "@/data/portfolio";
import type { WriteupCard } from "@/types";

function WriteupCardComponent({ card }: { card: WriteupCard }) {
  const { id, icon: Icon } = card;
  const { t } = useTranslation();

  return (
    <div className="group relative p-8 rounded-xl border border-edge bg-card hover:border-accent/40 hover:bg-card-hi transition-all duration-300 flex flex-col animate-on-scroll">
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-8 right-8 h-px bg-accent/0 group-hover:bg-accent/40 transition-all duration-300 rounded-full" />

      {/* Icon + tag */}
      <div className="flex items-start gap-4 mb-5">
        <div className="flex-shrink-0 p-3 rounded-xl bg-accent/10 border border-accent/20">
          <Icon size={24} className="text-accent" />
        </div>
        <div>
          <span className="text-accent text-xs font-heading font-medium uppercase tracking-widest">
            {t(`blog.cards.${id}.tag`)}
          </span>
          <h3 className="font-heading font-bold text-fore text-xl mt-1.5">
            {t(`blog.cards.${id}.title`)}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed flex-1">
        {t(`blog.cards.${id}.description`)}
      </p>

      {/* CTA */}
      <div className="mt-6">
        <a
          href="https://github.com/henri-dpd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-edge text-muted text-xs font-medium hover:border-accent/40 hover:text-accent transition-all duration-200"
        >
          <Github size={13} />
          {t("blog.cta")}
        </a>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const { t } = useTranslation();
  return (
    <section id="writeups" className="py-24 relative">
      <div className="absolute inset-0 bg-glow-bottom pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-accent text-xs font-heading font-medium uppercase tracking-widest">
              {t("blog.label")}
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fore">
            {t("blog.heading")}
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            {t("blog.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writeupCards.map((card) => (
            <WriteupCardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
