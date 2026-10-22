"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, User, Cpu, Sparkles, FolderGit2, Mail, X } from "lucide-react";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const items = [
    { label: "About Sreenand O", href: "#about", icon: User, category: "Navigation" },
    { label: "Agentic Pipeline Architecture", href: "#pipeline", icon: Cpu, category: "Architecture" },
    { label: "Technical Arsenal & Skills", href: "#skills", icon: Sparkles, category: "Proficiencies" },
    { label: "Featured AI Systems", href: "#projects", icon: FolderGit2, category: "Projects" },
    { label: "Interactive Neural Terminal", href: "#terminal", icon: Terminal, category: "Interactive" },
    { label: "Dispatch Transmission (Contact)", href: "#contact", icon: Mail, category: "Uplink" },
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const navigateTo = (href: string) => {
    setOpen(false);
    setQuery("");
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Shortcut Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0b0e17]/80 hover:bg-[#0b0e17] border border-white/10 hover:border-cyan-500/40 text-xs text-slate-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-200"
      >
        <Search className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-slate-400">Quick Search</span>
        <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/10 border border-white/10 text-cyan-300">
          Ctrl K
        </kbd>
      </button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg rounded-2xl bg-[#0b0e17] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden"
            >
              {/* Search Bar Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#07090e]">
                <Search className="w-4 h-4 text-cyan-400 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a section or keyword..."
                  className="w-full bg-transparent text-xs sm:text-sm text-white outline-none placeholder:text-slate-500 font-mono"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Filtered Action List */}
              <div className="max-h-72 overflow-y-auto p-2 space-y-1">
                {filtered.length > 0 ? (
                  filtered.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => navigateTo(item.href)}
                        className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent text-left group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 text-slate-400 group-hover:text-cyan-400 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 group-hover:text-cyan-300">
                          {item.category}
                        </span>
                      </button>
                    );
                  })
                ) : (
                  <p className="p-6 text-center text-xs text-slate-500 font-mono">
                    No matching protocol found.
                  </p>
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#07090e] border-t border-white/5 text-[10px] font-mono text-slate-500">
                <span>Navigate using clicks or ESC to close</span>
                <span className="text-cyan-400">Sreenand O Command Hub</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}