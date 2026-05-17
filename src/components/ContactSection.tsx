"use client";

import { useState } from "react";
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[#0d1224] border border-[#1e293b] text-white placeholder-[#94a3b8]/40 text-sm font-sans focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/20 transition-colors";

  return (
    <section id="contacto" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#00f0ff]" />
            <span className="text-[#00f0ff] text-xs font-heading font-medium uppercase tracking-widest">
              Contacto
            </span>
            <div className="h-px w-10 bg-[#00f0ff]" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            ¿Hablamos?
          </h2>
          <p className="text-[#94a3b8] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Disponible para proyectos corporativos, consultorías técnicas y
            colaboraciones remotas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div className="p-8 rounded-xl border border-[#1e293b] bg-[#111827]">
            <h3 className="font-heading font-semibold text-white text-lg mb-6">
              Envía un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#94a3b8] text-xs font-medium uppercase tracking-wider mb-2"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#94a3b8] text-xs font-medium uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#94a3b8] text-xs font-medium uppercase tracking-wider mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  <span>¡Mensaje enviado correctamente!</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  <span>Hubo un error. Por favor, inténtalo de nuevo.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#00f0ff] text-[#0b0f19] font-heading font-bold text-sm tracking-wide hover:bg-[#00f0ff]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
              >
                <Send size={15} />
                {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6 lg:pt-2">
            <div>
              <h3 className="font-heading font-bold text-white text-2xl mb-2">
                Contacto Directo
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Para consultorías, proyectos corporativos o simplemente conectar
                profesionalmente. Respondo en menos de 24 horas.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:henridanielpenadequero@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#1e293b] bg-[#111827] hover:border-[#00f0ff]/30 hover:bg-[#162235] transition-all duration-200 group"
              >
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                  <Mail size={18} className="text-[#00f0ff]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[#94a3b8] text-xs mb-0.5">Email</div>
                  <div className="text-white text-sm font-medium group-hover:text-[#00f0ff] transition-colors truncate">
                    henridanielpenadequero@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/henri-pena"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#1e293b] bg-[#111827] hover:border-[#00f0ff]/30 hover:bg-[#162235] transition-all duration-200 group"
              >
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                  <Linkedin size={18} className="text-[#00f0ff]" />
                </div>
                <div>
                  <div className="text-[#94a3b8] text-xs mb-0.5">LinkedIn</div>
                  <div className="text-white text-sm font-medium group-hover:text-[#00f0ff] transition-colors">
                    linkedin.com/in/henri-pena
                  </div>
                </div>
              </a>
            </div>

            {/* Availability notice */}
            <div className="p-4 rounded-xl border border-[#00f0ff]/20 bg-[#00f0ff]/5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[#00f0ff] text-xs font-heading font-medium">
                  Disponibilidad Actual
                </span>
              </div>
              <p className="text-[#94a3b8] text-xs leading-relaxed">
                Abierto a proyectos remotos y consultorías freelance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
