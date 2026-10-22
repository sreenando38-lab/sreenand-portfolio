"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Network, TerminalSquare, ShieldCheck } from "lucide-react";
import ProfileTiltCard from "./ProfileTiltCard";

export default function AboutSection() {
  const stats = [
    { label: "Architectures Built", value: "10+", detail: "RAG & Agentic Systems" },
    { label: "P99 Target Latency", value: "<150ms", detail: "Inference Optimization" },
    { label: "Core Competency", value: "End-to-End", detail: "Data to Deployment" },
  ];

  const highlights = [
    {
      icon: Brain,
      title: "Generative AI & LLM Systems",
      desc: "Specialized in fine-tuning foundation models, context retrieval, and designing autonomous reasoning agents with tool-use capabilities.",
    },
    {
      icon: Network,
      title: "Vector Search & Knowledge Graphs",
      desc: "Implementing hybrid search and dense semantic vector embeddings using ChromaDB, Qdrant, and Pinecone.",
    },
    {
      icon: TerminalSquare,
      title: "Production-Grade Pipelines",
      desc: "Deploying resilient microservices and low-latency inference APIs with Python, FastAPI, Docker, and GPU orchestration.",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden border-t border-white/5">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            // System Origin
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Sreenand O</span>
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3D Tilt Card */}
          <div className="lg:col-span-5 flex justify-center">
            <ProfileTiltCard />
          </div>

          {/* Right Column: Bio Narrative & Technical Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              I am an AI Engineer committed to transitioning cutting-edge machine learning research
              into reliable, autonomous systems. My focus centers on building resilient{" "}
              <strong className="text-white font-medium">agentic workflows</strong>, scalable{" "}
              <strong className="text-white font-medium">retrieval-augmented generation (RAG)</strong>,
              and full-stack AI architectures that solve complex computational problems.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all"
                  >
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-cyan-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-500 hidden sm:block">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}