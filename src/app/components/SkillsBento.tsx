"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Server, Terminal, Shield, Workflow, Cpu } from "lucide-react";

export default function SkillsBento() {
  const categories = [
    {
      title: "Core AI & Deep Learning",
      icon: Brain,
      color: "border-cyan-500/30 shadow-cyan-500/10",
      skills: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn", "OpenCV", "Model Quantization", "CUDA / GPU Acceleration"],
      desc: "Mathematical foundations, neural network architectures, CNNs, Transformers, and custom model training.",
      span: "md:col-span-2"
    },
    {
      title: "Generative AI & Agentic Architectures",
      icon: Sparkles,
      color: "border-violet-500/30 shadow-violet-500/10",
      skills: ["LangChain", "LlamaIndex", "RAG Pipelines", "ChromaDB", "Pinecone", "Qdrant", "Ollama", "Prompt Engineering"],
      desc: "Autonomous reasoning agents, hybrid dense retrieval, structured JSON outputs, and vector database clustering.",
      span: "md:col-span-2"
    },
    {
      title: "High-Performance Backend & APIs",
      icon: Server,
      color: "border-emerald-500/30 shadow-emerald-500/10",
      skills: ["Python", "FastAPI", "Next.js", "TypeScript", "REST APIs", "Redis", "gRPC", "Docker"],
      desc: "Low-latency microservices, async concurrency, and streaming architectures.",
      span: "md:col-span-2"
    },
    {
      title: "MLOps & Developer Tooling",
      icon: Terminal,
      color: "border-cyan-500/30 shadow-cyan-500/10",
      skills: ["Git & GitHub", "Linux", "Cursor AI", "AWS EC2/S3", "Hugging Face Spaces", "Model Evaluation & Benchmarking"],
      desc: "CI/CD automation, cloud deployment, version control, and development acceleration.",
      span: "md:col-span-2"
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            // Core Proficiencies
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mt-4">
            Production-grade stack utilized by Sreenand O across research, training, and deployment.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${cat.span} p-6 sm:p-8 rounded-3xl bg-[#0b0e17] border ${cat.color} hover:border-cyan-400/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg backdrop-blur-xl relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full group-hover:bg-cyan-500/10 transition-colors" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed font-light">
                  {cat.desc}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/[0.03] border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}