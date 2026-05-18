"use client";

import { useState } from "react";
import { MapPin, Calendar, ChevronDown } from "lucide-react";
import { roles } from "@/data/portfolio";
import type { Role } from "@/types";

function RoleCard({
  role,
  isOpen,
  onToggle,
}: {
  role: Role;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`animate-on-scroll relative rounded-xl border transition-all duration-300 ${
        role.current
          ? "border-[#00f0ff]/30 bg-[#162235]"
          : isOpen
          ? "border-[#1e293b] bg-[#162235]"
          : "border-[#1e293b] bg-[#111827] hover:border-[#00f0ff]/20 hover:bg-[#111827]"
      }`}
    >
      {/* Clickable header */}
      <button
        onClick={onToggle}
        className="w-full text-left p-6 group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Active badge (inline for current role) */}
            {role.current && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
                <span className="text-[#00f0ff] text-xs font-heading font-medium">
                  Activo
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="font-heading font-bold text-white text-lg leading-snug mb-2">
              {role.title}
            </h3>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <span className="text-[#00f0ff] font-heading font-semibold text-sm">
                {role.company}
              </span>
              <div className="flex items-center gap-1 text-[#94a3b8] text-xs">
                <MapPin size={11} />
                <span>{role.location}</span>
              </div>
              <div className="flex items-center gap-1 text-[#94a3b8] text-xs">
                <Calendar size={11} />
                <span>{role.period}</span>
              </div>
            </div>
          </div>

          {/* Chevron */}
          <ChevronDown
            size={18}
            className={`flex-shrink-0 mt-1 text-[#94a3b8] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Expandable body — CSS grid trick for smooth height animation */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 space-y-4 border-t border-[#1e293b]/60">
            <p className="text-[#94a3b8] text-sm leading-relaxed pt-4">
              {role.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {role.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-0.5 text-xs rounded-md bg-[#0d1224] border border-[#1e293b] text-[#94a3b8] font-mono"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const currentRole = roles.find((r) => r.current);
  const [openId, setOpenId] = useState<string | null>(currentRole?.id ?? null);

  return (
    <section id="experiencia" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#00f0ff]" />
            <span className="text-[#00f0ff] text-xs font-heading font-medium uppercase tracking-widest">
              Trayectoria
            </span>
            <div className="h-px w-10 bg-[#00f0ff]" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Matriz de Experiencia
          </h2>
          <p className="text-[#94a3b8] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Roles de alto impacto en empresas internacionales con foco en
            arquitecturas cloud, ciberseguridad y liderazgo técnico.
          </p>
        </div>

        <div className="space-y-3">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              isOpen={openId === role.id}
              onToggle={() =>
                setOpenId((prev) => (prev === role.id ? null : role.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
