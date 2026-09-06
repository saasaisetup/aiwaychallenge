"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SLIDES_DATA,
  SlideData,
  SlideCard,
} from "@/data/slidesData";
import {
  ArrowRight,
  ArrowLeft,
  Maximize2,
  Minimize2,
  Grid,
  Sparkles,
  Zap,
  Cpu,
  Globe2,
  Presentation,
  Layers,
  BookOpen,
  CheckCircle2,
  Check,
  Award,
  Users,
  Code2,
  Terminal,
  FileText,
  Share2,
  Rocket,
  Clock,
  MessageCircle,
  ExternalLink,
  Copy,
  Info,
  X,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Helper for rendering icons dynamically
function RenderIcon({ name, className }: { name?: string; className?: string }) {
  const iconClass = className || "w-5 h-5";
  switch (name) {
    case "Zap": return <Zap className={iconClass} />;
    case "Cpu": return <Cpu className={iconClass} />;
    case "Globe2": return <Globe2 className={iconClass} />;
    case "Presentation": return <Presentation className={iconClass} />;
    case "Layers": return <Layers className={iconClass} />;
    case "BookOpen": return <BookOpen className={iconClass} />;
    case "CheckCircle2": return <CheckCircle2 className={iconClass} />;
    case "Award": return <Award className={iconClass} />;
    case "Users": return <Users className={iconClass} />;
    case "Code2": return <Code2 className={iconClass} />;
    case "Terminal": return <Terminal className={iconClass} />;
    case "FileText": return <FileText className={iconClass} />;
    case "Share2": return <Share2 className={iconClass} />;
    case "Rocket": return <Rocket className={iconClass} />;
    case "Clock": return <Clock className={iconClass} />;
    case "MessageCircle": return <MessageCircle className={iconClass} />;
    case "Linkedin": return <LinkedinIcon className={iconClass} />;
    case "Twitter": return <TwitterIcon className={iconClass} />;
    default: return <Sparkles className={iconClass} />;
  }
}

export default function SlidesPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const totalSlides = SLIDES_DATA.length;
  const currentSlide: SlideData = SLIDES_DATA[currentSlideIndex];

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setIsGridOpen(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      } else if (e.key.toLowerCase() === "g") {
        e.preventDefault();
        setIsGridOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === "n") {
        e.preventDefault();
        setShowNotes((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsGridOpen(false);
        setShowNotes(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, totalSlides]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const copyPrompt = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Top pill navigation section targets
  const pillSections = [
    { label: "Home", slideIndex: 0 },
    { label: "Why", slideIndex: 1 },
    { label: "Learn", slideIndex: 4 },
    { label: "Curriculum", slideIndex: 3 },
    { label: "Pricing", slideIndex: 22 },
    { label: "RSVP", slideIndex: 25 },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#031049] text-white selection:bg-[#1a56ff] selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* ------------------------------------------------------------- */}
      {/* CROWDED METHODS RADIANT BLUE GRADIENT BACKDROP                */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep Royal to Radiant Electric Blue Radial Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(135%_120%_at_50%_0%,#1e56ff_0%,#0c32e2_40%,#031464_100%)]" />
        
        {/* Soft Vignette Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_50%,rgba(2,8,40,0.6)_100%)]" />
        
        {/* Subtle Ambient Light Glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-400/25 blur-[120px] rounded-full" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TOP PROGRESS BAR                                              */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          initial={{ width: 0 }}
          animate={{
            width: `${((currentSlideIndex + 1) / totalSlides) * 100}%`,
          }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* FLOATING CROWDED PILL NAVBAR (MATCHES SCREENSHOT)             */}
      {/* ------------------------------------------------------------- */}
      <header className="relative z-40 w-full pt-4 sm:pt-6 pb-2 px-4 flex items-center justify-between max-w-6xl mx-auto">
        {/* Left: Brand / Home Link */}
        <Link
          href="/"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20"
        >
          <span>←</span>
          <span>Exit to Site</span>
        </Link>

        {/* Center: The Signature White Capsule Navbar */}
        <nav className="mx-auto bg-white/95 text-neutral-900 shadow-2xl backdrop-blur-md rounded-full px-2 sm:px-3 py-1.5 border border-white/60 flex items-center gap-1 sm:gap-1.5">
          {pillSections.map((item) => {
            const isActive = currentSlide.pillSection === item.label;
            return (
              <button
                key={item.label}
                onClick={() => goToSlide(item.slideIndex)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0a0a0a] text-white shadow-md font-semibold"
                    : "text-neutral-700 hover:text-black hover:bg-neutral-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Slide Counter Badge */}
        <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono font-bold bg-white/10 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full border border-white/20">
          <span className="text-white">
            {String(currentSlideIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-white/40">/</span>
          <span className="text-white/70">{String(totalSlides).padStart(2, "0")}</span>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* MAIN SLIDE STAGE                                              */}
      {/* ------------------------------------------------------------- */}
      <main className="relative z-20 flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 16, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col justify-center"
          >
            {/* Slide Header: Spaced Badge + Editorial Serif Headline */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              {/* Spaced Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase border border-white/25 shadow-sm mb-4">
                <span>{currentSlide.badge}</span>
              </div>

              {/* Editorial Serif Heading */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-editorial tracking-tight text-white leading-[1.08]">
                {currentSlide.title}{" "}
                {currentSlide.titleHighlight && (
                  <span className="italic block sm:inline font-normal">
                    {currentSlide.titleHighlight}
                  </span>
                )}
              </h1>

              {/* Subheading / Description */}
              <p className="mt-4 text-sm sm:text-base md:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto font-light">
                {currentSlide.subtitle}
              </p>

              {/* Primary Pill Button if on Slide 1 */}
              {currentSlide.ctaText && currentSlide.layout === "hero-cover" && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={nextSlide}
                    className="bg-[#0a0a0a] text-white hover:bg-black hover:scale-105 active:scale-95 transition-all px-7 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 cursor-pointer border border-white/10"
                  >
                    <span>{currentSlide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* ------------------------------------------------------- */}
            {/* SLIDE CONTENT LAYOUTS                                   */}
            {/* ------------------------------------------------------- */}

            {/* LAYOUT: HERO STATS (Slide 1) */}
            {currentSlide.layout === "hero-cover" && currentSlide.stats && (
              <div className="mt-4 max-w-4xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {currentSlide.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/95 text-neutral-900 rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/60 text-center flex flex-col justify-center"
                  >
                    <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-blue-700">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-neutral-500 mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* LAYOUT: STATS + CARDS (e.g. Slide 2, 9, 13, 16, 19, 22) */}
            {currentSlide.layout === "stats-cards" && (
              <div className="space-y-6 max-w-5xl mx-auto w-full">
                {/* Stats Row */}
                {currentSlide.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {currentSlide.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white/95 text-neutral-900 rounded-2xl p-5 sm:p-6 shadow-xl border border-white/60 text-center"
                      >
                        <span className="text-2xl sm:text-4xl font-black font-mono tracking-tight text-neutral-950">
                          {stat.value}
                        </span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-neutral-500 mt-1 block">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Cards Row */}
                {currentSlide.cards && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                    {currentSlide.cards.map((card, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl text-neutral-900 border border-neutral-100 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                              {card.tag || `INSIGHT 0${i + 1}`}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-blue-700">
                              <RenderIcon name={card.icon} className="w-4 h-4" />
                            </div>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold font-editorial text-neutral-900 leading-snug">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* LAYOUT: BEFORE AND AFTER (Slide 3) */}
            {currentSlide.layout === "before-after" && currentSlide.beforeAfter && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
                {/* Before: White Card */}
                <div className="bg-white text-neutral-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100">
                  <div className="flex items-center gap-2 text-red-600 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 border border-red-200">
                      The Old Way
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-editorial font-normal text-neutral-950 mb-4">
                    {currentSlide.beforeAfter.beforeTitle}
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-neutral-600">
                    {currentSlide.beforeAfter.beforeItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After: Radiant Blue / Dark Card with Glow */}
                <div className="bg-gradient-to-br from-[#1034c7] via-[#09228d] to-[#041254] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/20 blur-3xl rounded-full" />
                  <div className="flex items-center gap-2 text-emerald-300 mb-4 relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40">
                      The 10x Neural Way
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-editorial font-normal text-white mb-4 relative z-10">
                    {currentSlide.beforeAfter.afterTitle}
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-blue-100 relative z-10">
                    {currentSlide.beforeAfter.afterItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* LAYOUT: MODULES GRID (Slide 4) */}
            {currentSlide.layout === "modules-grid" && currentSlide.cards && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
                {currentSlide.cards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white text-neutral-900 rounded-2xl p-5 sm:p-6 shadow-xl border border-neutral-100 flex flex-col justify-between hover:shadow-2xl transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                          {card.tag}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-blue-700">
                          <RenderIcon name={card.icon} className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold font-editorial text-neutral-950 leading-snug">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* LAYOUT: MODEL QUADRANT (Slide 5, 14) */}
            {currentSlide.layout === "model-quadrant" && currentSlide.cards && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto w-full">
                {currentSlide.cards.map((card, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl p-6 shadow-xl border ${
                      card.accent === "blue"
                        ? "bg-gradient-to-br from-white via-white to-blue-50 text-neutral-900 border-blue-200"
                        : "bg-white text-neutral-900 border-neutral-100"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-300 inline-block mb-3">
                      {card.badge}
                    </span>
                    <h3 className="text-lg font-bold font-editorial text-neutral-950">
                      {card.title}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 mb-3">
                      {card.desc}
                    </p>
                    {card.bulletPoints && (
                      <ul className="space-y-1.5 text-xs text-neutral-700 border-t border-neutral-100 pt-3">
                        {card.bulletPoints.map((pt, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* LAYOUT: FRAMEWORK STEPS (Slide 6, 10, 11, 17, 20, 21) */}
            {currentSlide.layout === "framework-steps" && currentSlide.cards && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
                {currentSlide.cards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white text-neutral-900 rounded-2xl p-5 sm:p-6 shadow-xl border border-neutral-100 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 inline-block mb-3">
                        {card.tag}
                      </span>
                      <h3 className="text-base font-bold font-editorial text-neutral-950">
                        {card.title}
                      </h3>
                      <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    {card.bulletPoints && (
                      <ul className="mt-4 pt-3 border-t border-neutral-100 space-y-1 text-[11px] text-neutral-700">
                        {card.bulletPoints.map((pt, j) => (
                          <li key={j} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* LAYOUT: CODE / PROMPT TEMPLATES (Slide 7) */}
            {currentSlide.layout === "code-prompts" && currentSlide.cards && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
                {currentSlide.cards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-[#0c1228] text-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/20 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                          {card.tag}
                        </span>
                        {card.codeSnippet && (
                          <button
                            onClick={() => copyPrompt(card.codeSnippet!)}
                            className="text-xs text-white/70 hover:text-white flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full cursor-pointer transition-colors"
                          >
                            <Copy className="w-3.5 h-3.5" />
                            <span>
                              {copiedCode === card.codeSnippet ? "Copied!" : "Copy"}
                            </span>
                          </button>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-neutral-300 mb-3">
                        {card.desc}
                      </p>
                      {card.codeSnippet && (
                        <pre className="bg-[#050914] text-emerald-300 p-3.5 rounded-xl text-[11px] font-mono leading-relaxed overflow-x-auto border border-white/10">
                          {card.codeSnippet}
                        </pre>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* LAYOUT: LIVE SPRINT PIPELINE (Slide 8, 12, 15, 18) */}
            {currentSlide.layout === "live-sprint" && currentSlide.cards && (
              <div className="max-w-4xl mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentSlide.cards.map((card, i) => (
                    <div
                      key={i}
                      className="bg-white text-neutral-900 rounded-2xl p-6 shadow-2xl border border-neutral-100 relative flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                            {card.tag}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-blue-700">
                            <RenderIcon name={card.icon} className="w-4 h-4" />
                          </div>
                        </div>
                        <h3 className="text-base font-bold font-editorial text-neutral-950">
                          {card.title}
                        </h3>
                        <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>

                      {i < 2 && (
                        <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center text-blue-600">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 text-xs font-bold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>LIVE DEMONSTRATION IN PROGRESS • WATCH THE SCREEN</span>
                  </div>
                </div>
              </div>
            )}

            {/* LAYOUT: UPGRADE PROMOTION OFFER (Slide 23, 24) */}
            {currentSlide.layout === "upgrade-offer" && (
              <div className="max-w-4xl mx-auto w-full space-y-6">
                {/* Highlights Grid */}
                {currentSlide.cards && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentSlide.cards.map((card, i) => (
                      <div
                        key={i}
                        className="bg-white text-neutral-900 rounded-2xl p-5 sm:p-6 shadow-xl border border-neutral-100 flex items-start gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center flex-shrink-0">
                          <RenderIcon name={card.icon} className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                            {card.tag}
                          </span>
                          <h4 className="text-sm font-bold font-editorial text-neutral-950 mt-0.5">
                            {card.title}
                          </h4>
                          <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pricing & CTA Card */}
                {currentSlide.stats && (
                  <div className="bg-gradient-to-r from-white via-white to-blue-50 text-neutral-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="text-center sm:text-left">
                      <div className="flex items-center gap-3 justify-center sm:justify-start">
                        <span className="text-xs line-through text-neutral-400">
                          {currentSlide.stats[0]?.value}
                        </span>
                        <span className="text-3xl sm:text-4xl font-black font-mono text-neutral-950">
                          {currentSlide.stats[1]?.value}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                          {currentSlide.stats[2]?.value}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-1">
                        Exclusive Attendee Pricing • {currentSlide.stats[3]?.value}
                      </p>
                    </div>

                    <Link
                      href={currentSlide.ctaAction || "/thank-you"}
                      className="w-full sm:w-auto bg-[#0a0a0a] hover:bg-black text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold shadow-xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{currentSlide.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* LAYOUT: UPGRADE COMPARISON (Slide 25) */}
            {currentSlide.layout === "upgrade-compare" && currentSlide.cards && (
              <div className="max-w-4xl mx-auto w-full space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {currentSlide.cards.map((card, i) => (
                    <div
                      key={i}
                      className={`rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between ${
                        card.accent === "blue"
                          ? "bg-gradient-to-br from-[#1034c7] via-[#09228d] to-[#041254] text-white border-2 border-white/40"
                          : "bg-white text-neutral-900 border border-neutral-100"
                      }`}
                    >
                      <div>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3 ${
                            card.accent === "blue"
                              ? "bg-white/20 text-white border border-white/30"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {card.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-editorial font-normal leading-tight">
                          {card.title}
                        </h3>
                        <p
                          className={`text-xs mt-1.5 mb-4 leading-relaxed ${
                            card.accent === "blue" ? "text-blue-100" : "text-neutral-600"
                          }`}
                        >
                          {card.desc}
                        </p>

                        <div className="my-4 pt-4 border-t border-neutral-200/40">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black font-mono">
                              {card.stat}
                            </span>
                            <span
                              className={`text-xs ${
                                card.accent === "blue" ? "text-blue-200" : "text-neutral-500"
                              }`}
                            >
                              {card.statLabel}
                            </span>
                          </div>
                        </div>

                        {card.bulletPoints && (
                          <ul
                            className={`space-y-2 text-xs mb-6 ${
                              card.accent === "blue" ? "text-blue-100" : "text-neutral-700"
                            }`}
                          >
                            {card.bulletPoints.map((pt, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <Check
                                  className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 stroke-[2.5] ${
                                    card.accent === "blue" ? "text-emerald-400" : "text-blue-600"
                                  }`}
                                />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <Link
                        href="/thank-you"
                        className={`w-full py-3.5 px-6 rounded-full text-xs font-bold text-center transition-all flex items-center justify-center gap-2 ${
                          card.accent === "blue"
                            ? "bg-white text-blue-900 hover:bg-neutral-100 shadow-xl"
                            : "bg-[#0a0a0a] text-white hover:bg-black shadow-lg"
                        }`}
                      >
                        <span>Upgrade Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LAYOUT: THANK YOU (Slide 26) */}
            {currentSlide.layout === "thank-you" && currentSlide.cards && (
              <div className="max-w-4xl mx-auto w-full space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentSlide.cards.map((card, i) => (
                    <div
                      key={i}
                      className="bg-white text-neutral-900 rounded-2xl p-6 shadow-2xl border border-neutral-100 flex flex-col justify-between text-center"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 mx-auto flex items-center justify-center mb-3">
                          <RenderIcon name={card.icon} className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">
                          {card.tag}
                        </span>
                        <h3 className="text-base font-bold font-editorial text-neutral-950 mt-1">
                          {card.title}
                        </h3>
                        <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <p className="text-xs text-blue-200 font-mono">
                    "The best way to predict the future is to build it with AI." — Ankit Singh
                  </p>
                </div>
              </div>
            )}

            {/* LAYOUT: SOCIAL HUB & COMMUNITY (Slide 27) */}
            {currentSlide.layout === "social-hub" && currentSlide.cards && (
              <div className="max-w-4xl mx-auto w-full space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentSlide.cards.map((card, i) => (
                    <a
                      key={i}
                      href={
                        card.tag?.startsWith("http")
                          ? card.tag
                          : `https://${card.tag}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-neutral-900 rounded-2xl p-6 shadow-xl border border-neutral-100 hover:shadow-2xl hover:scale-[1.02] transition-all flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <RenderIcon name={card.icon} className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">
                          {card.badge}
                        </span>
                        <h4 className="text-base font-bold font-editorial text-neutral-950 mt-0.5 flex items-center justify-between">
                          <span>{card.title}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-600" />
                        </h4>
                        <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                          {card.desc}
                        </p>
                        <span className="text-[11px] font-mono text-blue-600 mt-2 block font-semibold truncate">
                          {card.tag}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="text-center pt-2">
                  <a
                    href="https://chat.whatsapp.com/JNxvFNnkxOSHlqYPvSH4PG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-wider"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Join the Official VIP WhatsApp Community →</span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ------------------------------------------------------------- */}
      {/* BOTTOM PRESENTATION CONTROLS BAR                              */}
      {/* ------------------------------------------------------------- */}
      <footer className="relative z-40 w-full py-4 px-4 max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Quick Slide Thumbnails Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsGridOpen(true)}
            className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20"
            title="Press 'G' for Grid View"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">All Slides (G)</span>
          </button>

          {currentSlide.notes && (
            <button
              onClick={() => setShowNotes((p) => !p)}
              className={`backdrop-blur-md px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                showNotes
                  ? "bg-white text-blue-900 border-white"
                  : "bg-white/10 hover:bg-white/20 text-white border-white/20"
              }`}
              title="Press 'N' for Speaker Notes"
            >
              <Info className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Notes (N)</span>
            </button>
          )}
        </div>

        {/* Center: Prev / Next Capsule Controls */}
        <div className="bg-white/95 text-neutral-900 shadow-2xl backdrop-blur-md rounded-full px-2 py-1 border border-white/60 flex items-center gap-1">
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-2 rounded-full hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer text-neutral-900"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="px-3 font-mono text-xs font-bold text-neutral-900 select-none">
            {String(currentSlideIndex + 1).padStart(2, "0")} / {totalSlides}
          </span>

          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            className="p-2 rounded-full hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer text-neutral-900"
            title="Next (Right Arrow / Space)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md p-2.5 rounded-full text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer border border-white/20"
          title="Press 'F' for Fullscreen"
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4" />
          ) : (
            <Maximize2 className="w-4 h-4" />
          )}
        </button>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* SPEAKER NOTES DRAWER (TOGGLED BY 'N')                          */}
      {/* ------------------------------------------------------------- */}
      {showNotes && currentSlide.notes && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#0a0a0a]/95 text-white p-4 rounded-2xl max-w-xl w-[90%] shadow-2xl border border-white/30 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
              🎙️ Speaker Cue • Slide {currentSlide.id}
            </span>
            <button
              onClick={() => setShowNotes(false)}
              className="text-white/60 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-neutral-200 leading-relaxed font-sans">
            {currentSlide.notes}
          </p>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SLIDE GRID DRAWER / MODAL (TOGGLED BY 'G')                     */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isGridOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-6 overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold font-editorial text-white">
                    Masterclass Slide Navigator
                  </h2>
                  <p className="text-xs text-neutral-400">
                    Click any slide to jump directly or press Esc to close
                  </p>
                </div>
                <button
                  onClick={() => setIsGridOpen(false)}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {SLIDES_DATA.map((slide, index) => {
                  const isCurrent = currentSlideIndex === index;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(index)}
                      className={`text-left p-3 rounded-xl transition-all cursor-pointer border flex flex-col justify-between h-28 ${
                        isCurrent
                          ? "bg-blue-600 text-white border-white shadow-xl scale-105"
                          : "bg-white/10 hover:bg-white/15 text-white/80 border-white/15"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[10px] font-mono font-bold">
                          #{String(slide.id).padStart(2, "0")}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/30">
                          {slide.pillSection}
                        </span>
                      </div>
                      <p className="text-[11px] font-bold font-editorial line-clamp-2 leading-tight">
                        {slide.title}
                      </p>
                      <span className="text-[9px] text-white/60 truncate">
                        {slide.layout}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
