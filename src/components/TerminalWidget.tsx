export default function TerminalWidget() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Ambient glow */}
      <div className="absolute -inset-6 bg-[#00f0ff]/5 rounded-3xl blur-2xl pointer-events-none" />

      <div className="relative rounded-xl border border-[#1e293b] bg-[#0d1224] overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e293b] bg-[#0b0f19]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-[#94a3b8] font-mono select-none">
            ~ portfolio.sh
          </span>
        </div>

        {/* Body */}
        <div className="p-5 font-mono text-xs sm:text-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[#00f0ff] select-none">❯</span>
            <span className="text-[#94a3b8]">portfolio</span>
            <span className="text-[#00f0ff]">--status</span>
          </div>

          <div className="pl-4 space-y-1.5 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-[#94a3b8] w-32">Full Stack Engineer</span>
              <span className="text-[#00f0ff]">[ACTIVE]</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-[#94a3b8] w-32">Cloud Architecture</span>
              <span className="text-[#00f0ff]">[ACTIVE]</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-[#94a3b8] w-32">Cybersecurity</span>
              <span className="text-[#00f0ff]">[ACTIVE]</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-[#94a3b8] w-32">AI Integration</span>
              <span className="text-[#00f0ff]">[ACTIVE]</span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-[#00f0ff] select-none">❯</span>
            <span className="text-[#94a3b8]">experience</span>
            <span className="text-[#00f0ff]">--summary</span>
          </div>

          <div className="pl-4 space-y-1 text-xs">
            <div>
              <span className="text-[#94a3b8]">years: </span>
              <span className="text-white font-semibold">5+</span>
            </div>
            <div>
              <span className="text-[#94a3b8]">stack: </span>
              <span className="text-[#00f0ff]">AWS · Node.js · Next.js · C#</span>
            </div>
            <div>
              <span className="text-[#94a3b8]">focus: </span>
              <span className="text-white">Serverless · Security · DDD</span>
            </div>
            <div>
              <span className="text-[#94a3b8]">location: </span>
              <span className="text-white">Remote · Global</span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-[#00f0ff] select-none">❯</span>
            <span className="text-white animate-pulse">▋</span>
          </div>
        </div>
      </div>
    </div>
  );
}
