"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Search, 
  BrainCircuit, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Layers 
} from "lucide-react";

interface Step {
  id: number;
  name: string;
  short: string;
  icon: React.ComponentType<{ className?: string }>;
  tech: string[];
  description: string;
  specs: { [key: string]: string };
}

export default function AgentPipelineVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(2);

  const pipelineSteps: Step[] = [
    {
      id: 0,
      name: "1. Prompt Ingestion & Guardrails",
      short: "Input & Guardrails",
      icon: Terminal,
      tech: ["Pydantic", "NeMo Guardrails", "Regex"],
      description: "Sanitizes incoming prompts, checks token bounds, validates schema constraints, and executes semantic safety filters before computation.",
      specs: { Latency: "< 15ms", "Schema Validation": "Strict JSON", Filtering: "Toxic / Jailbreak Defense" }
    },
    {
      id: 1,
      name: "2. Hybrid Semantic Retrieval",
      short: "Vector Retrieval",
      icon: Search,
      tech: ["Qdrant", "ChromaDB", "Cross-Encoders", "HuggingFace"],
      description: "Combines dense vector similarity search with BM25 keyword matching and cross-encoder re-ranking for ultra-precise context grounding.",
      specs: { "Top-K Selection": "K=5", "Reranker Model": "bge-reranker-large", "Index Health": "Synchronized" }
    },
    {
      id: 2,
      name: "3. Agent Reasoning Engine",
      short: "Reasoning (ReAct)",
      icon: BrainCircuit,
      tech: ["LangChain", "LlamaIndex", "Claude / GPT-4o", "Fine-tuned LLaMA"],
      description: "Executes iterative Chain-of-Thought (CoT) and ReAct loops. Breaks down compound queries into actionable task trees.",
      specs: { Architecture: "ReAct Loop", "Context Window": "128k Tokens", "Decision Accuracy": "96.4%" }
    },
    {
      id: 3,
      name: "4. Tool & API Execution",
      short: "Tool Execution",
      icon: Wrench,
      tech: ["FastAPI", "Python Sandbox", "gRPC", "Docker"],
      description: "Dispatches authenticated function calls to external databases, specialized microservices, computational sandboxes, and web crawlers.",
      specs: { "Execution Environment": "Isolated Container", "Retry Logic": "Exponential Backoff", Protocol: "Async REST" }
    },
    {
      id: 4,
      name: "5. Synthesis & Verification",
      short: "Synthesis & Output",
      icon: CheckCircle2,
      tech: ["Self-Correction", "Structured Output", "Streaming Engine"],
      description: "Verifies factual grounding against retrieved documents, eliminates hallucination risks, and streams the verified output in real time.",
      specs: { Grounding: "Faithfulness 98%", "Streaming Protocol": "Server-Sent Events (SSE)", "Output Format": "Markdown / JSON" }
    }
  ];

  const current = pipelineSteps[activeStep];
  const Icon = current.icon;

  return (
    <section id="pipeline" className="relative py-24 px-4 border-t border-white/5 bg-[#05070b]/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            // Interactive Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Autonomous <span className="text-gradient">Agent Pipeline</span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mt-4">
            Interactive breakdown of how Sreenand O builds resilient, multi-step agentic systems. Click any node to inspect execution details.
          </p>
        </div>

        {/* Pipeline Step Selector Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-[#0b0e17]/80 border border-white/10 mb-8 max-w-4xl mx-auto">
          {pipelineSteps.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <StepIcon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
                <span className="hidden sm:inline">{step.short}</span>
                <span className="sm:hidden">{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Node Inspection Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-6 md:p-8 rounded-3xl bg-[#0b0e17] border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.1)] backdrop-blur-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {current.name}
                    </h3>
                    <p className="text-xs text-cyan-400 mt-0.5">Execution Phase 0{current.id + 1} of 05</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {current.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-300 mt-6 leading-relaxed font-light">
                {current.description}
              </p>

              {/* Spec parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
                {Object.entries(current.specs).map(([key, val], i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">{key}</p>
                    <p className="text-xs font-semibold text-white mt-1">{val}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}