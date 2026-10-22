"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Activity } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Autonomous Multi-Agent System",
      badge: "Agentic ReAct Framework",
      metric: "96.4% Acc",
      desc: "Coordinated multi-agent architecture utilizing specialized LLM worker nodes for deep semantic retrieval, source verification, and synthesized report compilation.",
      tech: ["LangChain", "FastAPI", "ChromaDB", "Python"],
      github: "https://github.com",
      live: "#",
    },
    {
      title: "Real-Time Vision & Defect Detection",
      badge: "Edge AI / TensorRT",
      metric: "8.2ms Latency",
      desc: "High-throughput computer vision pipeline engineered to detect micro-defects in high-speed visual data streams. Quantized and compiled for edge hardware.",
      tech: ["PyTorch", "YOLOv8", "TensorRT", "OpenCV"],
      github: "https://github.com",
      live: "#",
    },
    {
      title: "Enterprise Hybrid Semantic RAG",
      badge: "Vector Clustering",
      metric: "98.1% Recall",
      desc: "Industrial-scale retrieval-augmented generation engine combining dense vector embeddings with BM25 keyword ranking and cross-encoder contextual reranking.",
      tech: ["Qdrant", "Hugging Face", "FastAPI", "Docker"],
      github: "https://github.com",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            // Production Deployments
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">AI Systems</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-4">
            Intelligent architectures engineered, evaluated, and deployed by Sreenand O.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-3xl bg-[#0b0e17] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/25 text-cyan-300">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    {proj.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono font-semibold text-emerald-400">
                    <Activity className="w-3.5 h-3.5" />
                    <span>{proj.metric}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-300 font-light mt-3 leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/10 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all"
                  >
                    Source Code
                  </a>
                  <a
                    href={proj.live}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 hover:from-cyan-500/40 hover:to-violet-500/40 border border-cyan-500/40 text-xs font-medium text-cyan-300 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}