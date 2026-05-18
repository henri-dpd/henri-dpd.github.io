"use client";

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-edge bg-space">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/icon-128.png"
              alt="Henri Peña"
              width={24}
              height={24}
              className="rounded-sm opacity-80"
            />
            <span className="text-muted text-sm">
              {t("footer.rights")}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/henri-dpd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <Github size={19} />
            </a>
            <a
              href="https://linkedin.com/in/henri-pena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
