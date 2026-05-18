import { pillars } from "@/data/portfolio";
import type { PillarItem } from "@/types";

function PillarCard({ pillar }: { pillar: PillarItem }) {
  const { icon: Icon, title, description, tags } = pillar;

  return (
    <div className="group relative p-7 rounded-xl border border-[#1e293b] bg-[#111827] hover:border-[#00f0ff]/50 hover:bg-[#162235] transition-all duration-300 flex flex-col animate-scale-in">
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-6 right-6 h-px bg-[#00f0ff]/0 group-hover:bg-[#00f0ff]/40 transition-all duration-300 rounded-full" />

      {/* Icon */}
      <div className="mb-5 inline-flex p-3 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 w-fit">
        <Icon size={22} className="text-[#00f0ff]" />
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-white text-xl mb-3">
        {title}
      </h3>
      <p className="text-[#94a3b8] text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-xs rounded-md bg-[#0d1224] border border-[#1e293b] text-[#94a3b8] font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PillarsSection() {
  return (
    <section id="pilares" className="py-24 relative">
      {/* Subtle center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(0,240,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#00f0ff]" />
            <span className="text-[#00f0ff] text-xs font-heading font-medium uppercase tracking-widest">
              Especialización
            </span>
            <div className="h-px w-10 bg-[#00f0ff]" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Mis Pilares
          </h2>
          <p className="text-[#94a3b8] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Tres dominios de especialización profunda que convergen para
            entregar soluciones de software integrales, seguras y escalables.
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
