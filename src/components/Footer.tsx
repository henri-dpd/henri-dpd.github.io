import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#0b0f19]">
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
            <span className="text-[#94a3b8] text-sm">
              © 2026 Henri Daniel Peña. Todos los derechos reservados.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/henri-dpd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors duration-200"
            >
              <Github size={19} />
            </a>
            <a
              href="https://linkedin.com/in/henri-pena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors duration-200"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
