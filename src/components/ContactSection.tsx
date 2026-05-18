"use client";

import { useState } from "react";
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const { t } = useTranslation();
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
    "w-full px-4 py-3 rounded-lg bg-navy border border-edge text-fore placeholder-muted/40 text-sm font-sans focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors";

  return (
    <section id="contacto" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-accent text-xs font-heading font-medium uppercase tracking-widest">
              {t("contact.label")}
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fore">
            {t("contact.heading")}
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div className="p-8 rounded-xl border border-edge bg-card">
            <h3 className="font-heading font-semibold text-fore text-lg mb-6">
              {t("contact.formHeading")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-muted text-xs font-medium uppercase tracking-wider mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.namePlaceholder")}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-muted text-xs font-medium uppercase tracking-wider mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.emailPlaceholder")}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-muted text-xs font-medium uppercase tracking-wider mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.messagePlaceholder")}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-500 text-sm">
                  <CheckCircle size={16} />
                  <span>{t("contact.success")}</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle size={16} />
                  <span>{t("contact.error")}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-on-accent font-heading font-bold text-sm tracking-wide hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_20px_var(--p-shadow-accent-sm)]"
              >
                <Send size={15} />
                {status === "sending" ? t("contact.sending") : t("contact.send")}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6 lg:pt-2">
            <div>
              <h3 className="font-heading font-bold text-fore text-2xl mb-2">
                {t("contact.directTitle")}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {t("contact.directDesc")}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:henridanielpenadequero@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-edge bg-card hover:border-accent/30 hover:bg-card-hi transition-all duration-200 group"
              >
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-accent/10 border border-accent/20">
                  <Mail size={18} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-muted text-xs mb-0.5">Email</div>
                  <div className="text-fore text-sm font-medium group-hover:text-accent transition-colors truncate">
                    henridanielpenadequero@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/henri-pena"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-edge bg-card hover:border-accent/30 hover:bg-card-hi transition-all duration-200 group"
              >
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-accent/10 border border-accent/20">
                  <Linkedin size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-muted text-xs mb-0.5">LinkedIn</div>
                  <div className="text-fore text-sm font-medium group-hover:text-accent transition-colors">
                    linkedin.com/in/henri-pena
                  </div>
                </div>
              </a>
            </div>

            {/* Availability notice */}
            <div className="p-4 rounded-xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-accent text-xs font-heading font-medium">
                  {t("contact.label")}
                </span>
              </div>
              <p className="text-muted text-xs leading-relaxed">
                {t("contact.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
