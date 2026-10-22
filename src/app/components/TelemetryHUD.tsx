"use client";

import React from "react";
import { Activity, Cpu, Zap, Database } from "lucide-react";

export default function TelemetryHUD() {
  const metrics = [
    { icon: Activity, label: "Cluster Status", value: "ONLINE", color: "text-emerald-400" },
    { icon: Zap, label: "P99 Latency", value: "118ms", color: "text-cyan-400" },
    { icon: Cpu, label: "Active Agents", value: "4 Workflows", color: "text-violet-400" },
    { icon: Database, label: "Vector DB", value: "SYNCED", color: "text-emerald-400" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 rounded-2xl bg-[#0b0e17]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
        {metrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors"
            >
              <div className="p-2 rounded-lg bg-white/5">
                <Icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-xs font-semibold text-white tracking-wide">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}