import { terminalStatus, terminalSummary } from "@/data/portfolio";

export default function TerminalWidget() {
  return (
    <div className="relative w-full max-w-md mx-auto animate-float">
      {/* Ambient glow */}
      <div className="absolute -inset-6 bg-accent/5 rounded-3xl blur-2xl pointer-events-none" />

      <div className="relative rounded-xl border border-[#1e293b] bg-[#0d1224] overflow-hidden shadow-2xl animate-glow-pulse">
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
            <span className="text-accent select-none">❯</span>
            <span className="text-[#94a3b8]">portfolio</span>
            <span className="text-accent">--status</span>
          </div>

          <div className="pl-4 space-y-1.5 text-xs">
            {terminalStatus.map(({ label, status }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-[#94a3b8] w-36">{label}</span>
                <span className="text-accent">[{status}]</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-accent select-none">❯</span>
            <span className="text-[#94a3b8]">experience</span>
            <span className="text-accent">--summary</span>
          </div>

          <div className="pl-4 space-y-1 text-xs">
            <div>
              <span className="text-[#94a3b8]">years: </span>
              <span className="text-white font-semibold">{terminalSummary.years}</span>
            </div>
            <div>
              <span className="text-[#94a3b8]">stack: </span>
              <span className="text-accent">{terminalSummary.stack}</span>
            </div>
            <div>
              <span className="text-[#94a3b8]">focus: </span>
              <span className="text-white">{terminalSummary.focus}</span>
            </div>
            <div>
              <span className="text-[#94a3b8]">location: </span>
              <span className="text-white">{terminalSummary.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-accent select-none">❯</span>
            <span className="text-white animate-pulse">▋</span>
          </div>
        </div>
      </div>
    </div>
  );
}
