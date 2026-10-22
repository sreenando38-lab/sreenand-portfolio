"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, FileDown } from "lucide-react";
import TelemetryHUD from "./TelemetryHUD";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-28 pb-16 overflow-hidden">
      {/* Ambient gradient glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[400px] h-[300px] bg-violet-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Glowing Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-medium mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for AI/ML Roles & Research</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
            Sreenand O
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          AI & Machine Learning Engineer architecting{" "}
          <span className="text-cyan-300 font-medium">Autonomous Agents</span>,{" "}
          <span className="text-violet-300 font-medium">RAG Pipelines</span>, and production-grade{" "}
          <span className="text-emerald-300 font-medium">Deep Learning Systems</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium text-sm hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(6,182,212,0.4)]"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#terminal"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-200 font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Launch Terminal</span>
          </a>

          {/* Direct Resume Download Link */}
          <a
            href="/resume.pdf"
            download="Sreenand_O_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <FileDown className="w-4 h-4 text-violet-400" />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Telemetry HUD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <TelemetryHUD />
        </motion.div>
      </div>
    </section>
  );
}