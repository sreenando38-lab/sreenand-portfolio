"use client";

import React from "react";
import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/5 bg-[#030508] text-center">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-xs tracking-wider text-white">
            Sreenand O<span className="text-cyan-400">.ai</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>STATUS: ALL NODES OPERATIONAL</span>
        </div>

        <p className="text-[11px] font-mono text-slate-500">
          © 2026 Sreenand O. Engineered for production.
        </p>
      </div>
    </footer>
  );
}