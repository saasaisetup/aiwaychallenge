"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Monitor,
  Globe,
  ArrowRight,
  ShieldCheck,
  Play,
} from "lucide-react";

interface CyberHeroProps {
  onOpenCheckout: () => void;
  videoUrl?: string;
}

export default function CyberHero({
  onOpenCheckout,
  videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || "https://www.youtube.com/embed/dQw4w9WgXcQ",
}: CyberHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Convert standard watch links to embed links if necessary
  const getEmbedUrl = (url: string) => {
    if (!url) return "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    let formatted = url;
    if (formatted.includes("youtube.com/watch?v=")) {
      const id = formatted.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (formatted.includes("youtu.be/")) {
      const id = formatted.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (formatted.includes("vimeo.com/")) {
      const id = formatted.split("vimeo.com/")[1]?.split("?")[0];
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return formatted.includes("?") ? `${formatted}&autoplay=1` : `${formatted}?autoplay=1`;
  };

  const embedSrc = getEmbedUrl(videoUrl);

  return (
    <section className="relative pt-8 sm:pt-10 pb-14 sm:pb-20 text-center bg-[#0a0a0a] text-white overflow-hidden border-b border-[#2a2a2a]">
      {/* ClickHouse Electric Ambient Voltage Glow (Yellow, Zero Green) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-[#faff69]/20 to-transparent blur-[160px] rounded-full pointer-events-none"
      />

      <div className="w-full max-w-[1154px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Headline Matching Screenshot Exactly (Serif Elegance + Italic 10X with Brush Underline) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-[34px] sm:text-[54px] lg:text-[64px] font-normal text-white tracking-tight leading-[1.14] max-w-[772px] mx-auto pt-2 sm:pt-4"
        >
          Unlock Your{" "}
          <span className="relative inline-block font-sans font-black italic text-[#faff69] px-1">
            10X
            {/* Yellow Brush Underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3.5 text-[#faff69] pointer-events-none overflow-visible"
              viewBox="0 0 100 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 7C25 2 75 1 98 5C70 9 30 11 12 8"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <br />
          <span className="text-[#faff69]">Potential</span> with AI
        </motion.h1>

        {/* 2. Monospace Subtitle in All-Caps */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3.5 font-mono text-[13px] sm:text-[15px] text-[#cccccc] uppercase tracking-[0.14em] max-w-[580px] mx-auto"
        >
          THE PRACTICAL AI MASTERCLASS FOR STUDENTS &amp; PROFESSIONALS.
        </motion.p>

        {/* 3. The Video Container: Scaled cleanly with exact poster & glowing yellow border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full max-w-[864px] mx-auto my-6 sm:my-8"
        >
          <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0c0c0c] border-2 border-[#faff69] shadow-[0_0_40px_rgba(250,255,105,0.22)] transition-all duration-300">
            {isPlaying ? (
              <iframe
                src={embedSrc}
                title="Workshop Preview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div
                onClick={() => setIsPlaying(true)}
                className="group relative w-full h-full cursor-pointer flex items-center justify-center bg-[#0a0a0a]"
              >
                {/* Real Video Poster matching user upload */}
                <img
                  src="/hero-video-poster.png"
                  alt="Unlock Your 10X Potential With AI Video Preview"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />

                {/* Subtle Interactive Play Hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
            )}
          </div>
        </motion.div>

        {/* 4. 4 Event Metadata Cards: Sunday, 6th Sept & 11:00 AM IST */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl sm:max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium text-[#cccccc]"
        >
          <div className="flex items-center justify-center gap-2 py-3.5 px-3 bg-[#161616] rounded-xl border border-[#2a2a2a] shadow-sm">
            <Calendar className="w-4 h-4 text-[#faff69]" />
            <span>6th Sept</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-3.5 px-3 bg-[#161616] rounded-xl border border-[#2a2a2a] shadow-sm">
            <Clock className="w-4 h-4 text-[#faff69]" />
            <span>11:00 AM IST</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-3.5 px-3 bg-[#161616] rounded-xl border border-[#2a2a2a] shadow-sm">
            <Monitor className="w-4 h-4 text-[#faff69]" />
            <span>Sunday Live</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-3.5 px-3 bg-[#161616] rounded-xl border border-[#2a2a2a] shadow-sm">
            <Globe className="w-4 h-4 text-[#faff69]" />
            <span>Hinglish</span>
          </div>
        </motion.div>

        {/* 5. Big ClickHouse Electric Yellow CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 sm:mt-9 max-w-lg mx-auto"
        >
          <button
            onClick={onOpenCheckout}
            className="w-full py-4 sm:py-4.5 px-6 rounded-xl text-base sm:text-lg font-black bg-[#faff69] text-[#0a0a0a] hover:bg-[#e6eb52] transition-all duration-200 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(250,255,105,0.45)] hover:shadow-[0_0_55px_rgba(250,255,105,0.7)] active:scale-98"
          >
            <span>REGISTER AT JUST ₹199</span>
            <span className="line-through text-[#0a0a0a]/60 text-sm font-normal">₹1499/-</span>
            <ArrowRight className="w-5 h-5 stroke-[3] ml-1" />
          </button>

          {/* 100% Money-Back Guarantee directly underneath */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-[#888888]">
            <ShieldCheck className="w-4 h-4 text-[#faff69]" />
            <span>100% Money-Back Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
