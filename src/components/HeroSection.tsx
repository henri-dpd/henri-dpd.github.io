import TerminalWidget from "./TerminalWidget";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,240,255,0.10)_0%,transparent_65%)] pointer-events-none" />
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
              <span className="text-[#00f0ff] text-xs font-heading font-medium tracking-widest uppercase">
                Sistemas Resilientes
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight">
                <span className="bg-gradient-to-br from-white via-white to-[#00f0ff] bg-clip-text text-transparent">
                  Henri
                </span>
                <br />
                <span className="bg-gradient-to-br from-white via-white to-[#00f0ff] bg-clip-text text-transparent">
                  Daniel
                </span>
                <br />
                <span className="text-white">Peña</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-[#94a3b8] text-base sm:text-lg font-medium leading-relaxed max-w-lg">
              Lic. en Ciencia de la Computación &nbsp;·&nbsp; Ingeniero de
              Software &amp; Especialista en Ciberseguridad
            </p>

            {/* Description */}
            <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-lg">
              Estructura y diseño de plataformas de alto rendimiento que
              unifican Ingeniería de Software, Arquitectura Cloud y
              Ciberseguridad con resiliencia total.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="#experiencia"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#00f0ff] text-[#0b0f19] font-heading font-bold text-sm tracking-wide hover:bg-[#00f0ff]/90 transition-all duration-200 shadow-[0_0_24px_rgba(0,240,255,0.35)]"
              >
                Ver Proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-[#1e293b] text-[#94a3b8] font-heading font-semibold text-sm hover:border-[#00f0ff]/40 hover:text-white transition-all duration-200"
              >
                Contactar
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 pt-2 border-t border-[#1e293b]">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-heading font-bold text-white">
                  5+
                </div>
                <div className="text-xs text-[#94a3b8] mt-0.5">
                  Años de exp.
                </div>
              </div>
              <div className="w-px h-10 bg-[#1e293b]" />
              <div className="text-center sm:text-left">
                <div className="text-2xl font-heading font-bold text-white">
                  6
                </div>
                <div className="text-xs text-[#94a3b8] mt-0.5">
                  Empresas intl.
                </div>
              </div>
              <div className="w-px h-10 bg-[#1e293b]" />
              <div className="text-center sm:text-left">
                <div className="text-2xl font-heading font-bold text-white">
                  3
                </div>
                <div className="text-xs text-[#94a3b8] mt-0.5">
                  Pilares técnicos
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Terminal widget */}
          <div className="hidden lg:flex justify-center items-center">
            <TerminalWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
