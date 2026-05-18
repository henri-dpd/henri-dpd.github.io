import { Terminal, Globe, Zap, Award } from "lucide-react";

const highlights = [
  {
    Icon: Terminal,
    label: "Ingeniería Serverless",
    description:
      "Diseño de sistemas escalables y resilientes en AWS sin infraestructura fija.",
  },
  {
    Icon: Globe,
    label: "Colaboración Global",
    description:
      "Experiencia remota con equipos en España, USA y América Latina.",
  },
  {
    Icon: Zap,
    label: "Integración de IA",
    description:
      "Automatización de flujos de trabajo y desarrollo asistido con modelos de lenguaje.",
  },
  {
    Icon: Award,
    label: "Seguridad por Diseño",
    description:
      "OWASP, modelado de amenazas y auditorías integradas desde el código.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px w-10 bg-[#00f0ff]" />
          <span className="text-[#00f0ff] text-xs font-heading font-medium uppercase tracking-widest">
            Sobre Mí
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left – Vision */}
          <div className="space-y-6 animate-on-scroll-left">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              No es solo código,
              <br />
              <span className="text-[#00f0ff]">es ingeniería resiliente.</span>
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              Diseño sistemas estables, serverless y ciberseguros pensados para
              catalizar la transformación digital, la eficiencia operacional y
              la resiliencia del negocio. Cada arquitectura está construida para
              escalar sin fricciones y defenderse sin comprometer la experiencia
              de usuario.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Con un perfil que combina Ciencia de la Computación, Ingeniería de
              Software y Ciberseguridad, ofrezco una visión holística que va
              desde el diseño de APIs hasta la auditoría de vulnerabilidades en
              producción.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-[#00f0ff] text-sm font-medium font-heading group hover:gap-3 transition-all duration-200"
            >
              Iniciemos una conversación
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Right – Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-2 animate-on-scroll-right">
            {highlights.map(({ Icon, label, description }) => (
              <div
                key={label}
                className="p-5 rounded-xl border border-[#1e293b] bg-[#111827] hover:border-[#00f0ff]/30 hover:bg-[#162235] transition-all duration-300 animate-scale-in"
              >
                <Icon size={20} className="text-[#00f0ff] mb-3" />
                <h3 className="text-white font-heading font-semibold text-sm mb-1.5">
                  {label}
                </h3>
                <p className="text-[#94a3b8] text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
