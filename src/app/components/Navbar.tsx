"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Send } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Pipeline", href: "#pipeline" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Terminal", href: "#terminal" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0e17]/85 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#0b0e17]/50 backdrop-blur-md border-white/5"
        }`}
      >
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            Sreenand O<span className="text-cyan-400">.ai</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <a
          href="#contact"
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500/20 to-violet-500/20 hover:from-cyan-500/40 hover:to-violet-500/40 border border-cyan-500/30 hover:border-cyan-400 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Send className="w-3.5 h-3.5 text-cyan-400" />
          <span>Contact</span>
        </a>
      </nav>
    </motion.header>
  );
}   