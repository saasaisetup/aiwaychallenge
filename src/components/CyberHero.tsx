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

  const navItems = [
    { label: "Home", href: "#home", active: true },
    { label: "Why", href: "#why" },
    { label: "Learn", href: "#learn" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <section className="relative pt-3 sm:pt-5 pb-16 sm:pb-24 text-center text-white overflow-hidden bg-[#031049]">
      {/* ============================================================ */}
      {/* 1. CROWDED / NEURAL METHODS RADIANT ROYAL BLUE GRADIENT       */}
      {/* Matches user uploaded screenshot & Framer PDF with precision */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Royal to Radiant Electric Blue Radial Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(135%_120%_at_50%_0%,#1e56ff_0%,#0c32e2_42%,#031464_100%)]" />

        {/* Soft Vignette Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_40%,rgba(2,8,40,0.65)_100%)]" />

        {/* Ambient Top Light Flare */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[950px] h-[460px] bg-blue-400/30 blur-[130px] rounded-full" />

        {/* Smooth Bottom Transition to Dark Site Background */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-transparent" />
      </div>

      <div className="w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============================================================ */}
        {/* 2. SIGNATURE FLOATING WHITE CAPSULE NAVBAR                   */}
        {/* Exactly matches media_1788678802609.png                      */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-2 sm:pt-4 pb-8 sm:pb-12 flex justify-center"
        >
          <nav className="inline-flex items-center bg-white/95 text-neutral-900 shadow-2xl backdrop-blur-md rounded-full p-1 sm:p-1.5 border border-white/60 gap-1 sm:gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  item.active
                    ? "bg-[#0a0a0a] text-white shadow-md font-semibold"
                    : "text-neutral-700 hover:text-black hover:bg-neutral-100"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onOpenCheckout}
              className="px-3.5 sm:px-4.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-all cursor-pointer"
            >
              RSVP
            </button>
          </nav>
        </motion.div>

        {/* ============================================================ */}
        {/* 3. EYEBROW BADGE: 9TH SEPTEMBER • 2 HOURS                    */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-[11px] sm:text-xs font-mono font-medium uppercase tracking-[0.22em] mb-4 sm:mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#faff69] shadow-[0_0_8px_#faff69] animate-pulse" />
          <span>LIVE ONLINE · 9TH SEPTEMBER · 2 HOURS</span>
        </motion.div>

        {/* ============================================================ */}
        {/* 4. HEADLINE: HEDVIG LETTERS SERIF (MATCHES SCREENSHOT)       */}
        {/* "Neural Methods Live AI Workshop"                            */}
        {/* ============================================================ */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-hedvig text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal text-white tracking-tight leading-[1.08] max-w-4xl mx-auto drop-shadow-sm"
        >
          Neural Methods
          <br />
          Live AI Workshop
        </motion.h1>

        {/* ============================================================ */}
        {/* 5. SUBTITLE (MATCHES USER SCREENSHOT COPY)                   */}
        {/* ============================================================ */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-5 text-blue-100/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans"
        >
          A focused online workshop for people who want to actually use AI at work. Build your prompting system, your first workflow, and your own assistant in one live session.
        </motion.p>

        {/* ============================================================ */}
        {/* 6. BLACK PILL CTA BUTTON (MATCHES SCREENSHOT)               */}
        {/* "Reserve your seat →"                                        */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-7 sm:mt-8 flex flex-col items-center gap-3"
        >
          <button
            onClick={onOpenCheckout}
            className="group px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-[#0a0a0a] text-white hover:bg-neutral-900 transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2.5 border border-white/20 ring-4 ring-white/10"
          >
            <span>Reserve your seat</span>
            <span className="text-[#faff69] font-bold text-sm">• ₹199</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-3 text-xs text-blue-200/80 font-sans">
            <span className="line-through text-blue-200/50">Regular ₹1,499</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-[#faff69]" />
              100% Money-Back Guarantee
            </span>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 7. PREVIEW VIDEO CARD CONTAINER                              */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-[880px] mx-auto mt-8 sm:mt-12"
        >
          <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#070e2b] border border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.6)] group">
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
                className="relative w-full h-full cursor-pointer flex items-center justify-center bg-[#070e2b]"
              >
                <img
                  src="/hero-video-poster.png"
                  alt="Neural Methods Live AI Workshop Preview"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 8. EVENT METADATA BADGES (UPDATED TO 9TH SEPTEMBER)          */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-2xl sm:max-w-3xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium text-white/90"
        >
          <div className="flex items-center justify-center gap-2 py-3 px-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 shadow-sm">
            <Calendar className="w-4 h-4 text-[#faff69]" />
            <span>9th Sept</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-3 px-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 shadow-sm">
            <Clock className="w-4 h-4 text-[#faff69]" />
            <span>11:00 AM IST</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-3 px-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 shadow-sm">
            <Monitor className="w-4 h-4 text-[#faff69]" />
            <span>Wednesday Live</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-3 px-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 shadow-sm">
            <Globe className="w-4 h-4 text-[#faff69]" />
            <span>Hinglish</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
