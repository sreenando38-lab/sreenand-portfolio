"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Bot } from "lucide-react";

export default function ProfileTiltCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  // Mouse coordinate motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth tilt effect
  const mouseX = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex items-center justify-center p-4" style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-3xl p-3 bg-gradient-to-b from-cyan-500/20 via-violet-500/10 to-transparent border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md group cursor-pointer"
      >
        {/* Glow halo behind photo */}
        <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        {/* Inner frame containing image */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#07090e] border border-white/10 flex items-center justify-center">
          {!imgError ? (
            <Image
              src="/profile.jpg"
              alt="Sreenand O"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              onError={() => setImgError(true)}
              priority
            />
          ) : (
            /* Fallback avatar if profile.jpg is missing */
            <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400">
              <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400">
                <Bot className="w-10 h-10" />
              </div>
              <p className="text-sm font-medium text-white">Sreenand O</p>
              <p className="text-xs text-slate-500 mt-1">Drop profile.jpg into /public</p>
            </div>
          )}

          {/* Holographic scanline overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.04] to-black/60 pointer-events-none" />

          {/* Floating Pill Badge */}
          <div
            style={{ transform: "translateZ(40px)" }}
            className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-[#0b0e17]/85 backdrop-blur-xl border border-white/10 shadow-lg"
          >
            <div>
              <p className="text-xs font-semibold text-white tracking-wide">Sreenand O</p>
              <p className="text-[11px] text-cyan-400">AI & ML Engineer</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-medium">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Verified Node</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}