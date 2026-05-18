import { Github } from "lucide-react";
import { writeupCards } from "@/data/portfolio";
import type { WriteupCard } from "@/types";

function WriteupCardComponent({ card }: { card: WriteupCard }) {
  const { icon: Icon, tag, title, description } = card;

  return (
    <div className="group relative p-8 rounded-xl border border-[#1e293b] bg-[#111827] hover:border-[#00f0ff]/40 hover:bg-[#162235] transition-all duration-300 flex flex-col animate-on-scroll">
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-8 right-8 h-px bg-[#00f0ff]/0 group-hover:bg-[#00f0ff]/40 transition-all duration-300 rounded-full" />

      {/* Icon + tag */}
      <div className="flex items-start gap-4 mb-5">
        <div className="flex-shrink-0 p-3 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20">
          <Icon size={24} className="text-[#00f0ff]" />
        </div>
        <div>
          <span className="text-[#00f0ff] text-xs font-heading font-medium uppercase tracking-widest">
            {tag}
          </span>
          <h3 className="font-heading font-bold text-white text-xl mt-1.5">
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#94a3b8] text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-6">
        <a
          href="https://github.com/henri-dpd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1e293b] text-[#94a3b8] text-xs font-medium hover:border-[#00f0ff]/40 hover:text-[#00f0ff] transition-all duration-200"
        >
          <Github size={13} />
          Ver en GitHub
        </a>
      </div>
    </div>
  );
}

export default function BlogSection() {
  return (
    <section id="writeups" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,240,255,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#00f0ff]" />
            <span className="text-[#00f0ff] text-xs font-heading font-medium uppercase tracking-widest">
              Conocimiento
            </span>
            <div className="h-px w-10 bg-[#00f0ff]" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Producción Técnica
          </h2>
          <p className="text-[#94a3b8] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Contenido técnico especializado en seguridad ofensiva/defensiva y
            arquitecturas cloud modernas.
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
