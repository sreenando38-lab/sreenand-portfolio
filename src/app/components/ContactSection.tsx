"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#06b6d4", "#8b5cf6", "#10b981"],
    });

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            // Direct Uplink
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Initiate <span className="text-gradient">Transmission</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto mt-3">
            Open for AI/ML engineering roles, research collaborations, and production consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#0b0e17] border border-white/10 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4">Transmission Coordinates</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:sreenando38@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</p>
                    <p className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                      sreenando38@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase">Base Station</p>
                    <p className="text-xs sm:text-sm font-medium text-white">Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Typically responds within <strong className="text-cyan-300 font-medium">24 hours</strong> for technical inquiries and opportunities.
              </p>
            </div>
          </div>

          {/* Form Box */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0b0e17] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-3"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Transmission Dispatched</h3>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Your packet has been delivered to Sreenand O. Expect a return connection soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 transition-all"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                      Sender Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Alex Vance"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs outline-none focus:border-cyan-400 focus:bg-cyan-500/[0.02] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@research-lab.org"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs outline-none focus:border-cyan-400 focus:bg-cyan-500/[0.02] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                      Message Payload
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discussing an autonomous agents architecture..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs outline-none focus:border-cyan-400 focus:bg-cyan-500/[0.02] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs font-semibold hover:opacity-95 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Dispatch Payload</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}