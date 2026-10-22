"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from "lucide-react";

interface LogEntry {
  command: string;
  output: string | React.ReactNode;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    {
      command: "welcome",
      output: (
        <span className="text-slate-300">
          Initialized Sreenand O Neural Node v2.4. Type <span className="text-cyan-400 font-semibold">help</span> to view available system instructions.
        </span>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    let result: React.ReactNode = "";

    switch (cleanCmd) {
      case "help":
        result = (
          <div className="space-y-1 text-slate-300">
            <p><span className="text-cyan-400 font-mono">whoami</span> - Engineering philosophy of Sreenand O</p>
            <p><span className="text-cyan-400 font-mono">skills</span> - List primary AI & development stacks</p>
            <p><span className="text-cyan-400 font-mono">projects</span> - View active research and systems</p>
            <p><span className="text-cyan-400 font-mono">contact</span> - Access direct communication channels</p>
            <p><span className="text-cyan-400 font-mono">clear</span> - Flush terminal screen buffer</p>
          </div>
        );
        break;

      case "whoami":
        result = (
          <p className="text-slate-300 leading-relaxed">
            Sreenand O is an AI & Machine Learning Engineer focused on developing autonomous agent architectures, fine-tuning large language models, and constructing scalable retrieval pipelines for real-world production environments.
          </p>
        );
        break;

      case "skills":
        result = (
          <p className="text-slate-300">
            Core AI: PyTorch, Hugging Face, OpenCV, Scikit-learn<br />
            GenAI: LangChain, LlamaIndex, Vector DBs (Chroma/Qdrant/Pinecone), RAG<br />
            Backend: Python, FastAPI, Docker, Next.js, REST APIs
          </p>
        );
        break;

      case "projects":
        result = (
          <div className="space-y-1 text-slate-300">
            <p>1. Autonomous Multi-Agent Research System (LangChain, FastAPI)</p>
            <p>2. Edge Real-Time Computer Vision Pipeline (PyTorch, YOLO, TensorRT)</p>
            <p>3. Enterprise Hybrid Semantic RAG Engine (Hugging Face, Qdrant)</p>
          </div>
        );
        break;

      case "contact":
        result = (
          <p className="text-slate-300">
            Reach Sreenand O directly via the contact form below or through GitHub & LinkedIn.
          </p>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        result = (
          <span className="text-rose-400">
            Command not recognized: &quot;{cleanCmd}&quot;. Type &quot;help&quot; for active commands.
          </span>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, output: result }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
  };

  const quickChips = ["whoami", "skills", "projects", "contact", "clear"];

  return (
    <section id="terminal" className="relative py-24 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            // Command Line Interface
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Interactive <span className="text-gradient">Neural Node</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto mt-3">
            Directly query system status, bio, and proficiencies for Sreenand O.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-3xl bg-[#090b12] border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden">
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#0e121c] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>sreenand-o@neural-node:~</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              LIVE
            </span>
          </div>

          {/* Quick Command Chips */}
          <div className="flex flex-wrap items-center gap-2 px-5 py-3 bg-[#0c0f18] border-b border-white/5">
            <span className="text-[11px] font-mono text-slate-500">Quick run:</span>
            {quickChips.map((chip) => (
              <button
                key={chip}
                onClick={() => executeCommand(chip)}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Terminal Output Area */}
          <div className="p-6 font-mono text-xs sm:text-sm min-h-[260px] max-h-[380px] overflow-y-auto space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-slate-500">&gt;</span>
                  <span className="font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-white/10 py-0.5">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Prompt Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-3 px-5 py-4 bg-[#0c0f18] border-t border-white/10">
            <span className="text-cyan-400 font-mono text-sm font-bold">&gt;</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'whoami', 'skills')..."
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm outline-none placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 transition-colors"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}