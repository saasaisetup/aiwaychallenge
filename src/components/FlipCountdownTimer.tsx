"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Volume2, VolumeX, ShieldCheck, Zap } from "lucide-react";

interface FlipDigitProps {
  current: string;
  previous: string;
  label: string;
  size?: "sm" | "md" | "lg";
  isTickingUnit?: boolean;
}

/**
 * Ultra-Premium 3D Mechanical Split-Flap Single Card
 * Crafted with obsidian brushed carbon plates, ClickHouse Electric Voltage Yellow typography,
 * precision-milled center groove with cutout notches, and mechanical hinge rivets.
 */
function FlipCard({
  current,
  previous,
  label,
  size = "md",
  isTickingUnit = false,
}: FlipDigitProps) {
  const [flipping, setFlipping] = useState(false);
  const [displayPrevious, setDisplayPrevious] = useState(previous);
  const [displayCurrent, setDisplayCurrent] = useState(current);

  useEffect(() => {
    if (current !== displayCurrent) {
      setDisplayPrevious(displayCurrent);
      setDisplayCurrent(current);
      setFlipping(true);

      const timer = setTimeout(() => {
        setFlipping(false);
        setDisplayPrevious(current);
      }, 550);

      return () => clearTimeout(timer);
    }
  }, [current, displayCurrent]);

  const cardDimensions =
    size === "sm"
      ? "w-16 h-22 sm:w-20 sm:h-28 md:w-22 md:h-30"
      : size === "lg"
      ? "w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-52"
      : "w-20 h-28 sm:w-28 sm:h-36 md:w-32 md:h-42 lg:w-36 lg:h-46";

  const fontSizes =
    size === "sm"
      ? "text-3xl sm:text-4xl md:text-5xl"
      : size === "lg"
      ? "text-5xl sm:text-7xl md:text-8xl"
      : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl";

  return (
    <div className="flex flex-col items-center group">
      {/* 3D Card Container with ClickHouse Voltage Aura */}
      <div className={`relative ${cardDimensions} select-none perspective-[1200px]`}>
        {/* Ambient Voltage Glow beneath card */}
        <div className="absolute inset-0 rounded-2xl bg-[#faff69]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Outer Obsidian Frame with Hairline Border */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0e0e11] border border-[#2a2a2a] group-hover:border-[#faff69]/50 shadow-[0_20px_45px_rgba(0,0,0,0.95),0_0_25px_rgba(250,255,105,0.06)] transition-all duration-300">
          
          {/* ============================================================ */}
          {/* LAYER 1: STATIC TOP FLAP (Shows Incoming/Current Value)      */}
          {/* ============================================================ */}
          <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#1f1f25] via-[#16161c] to-[#111115] border-b border-[#060608]">
            {/* Top Specular Hairline Highlight */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Subtle Diagonal Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-0 left-0 right-0 h-[200%] flex items-center justify-center">
              <span
                className={`${fontSizes} font-black font-sans tracking-tight text-[#faff69] drop-shadow-[0_0_16px_rgba(250,255,105,0.45)]`}
              >
                {displayCurrent}
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* LAYER 2: STATIC BOTTOM FLAP (Shows Outgoing/Previous Value)  */}
          {/* ============================================================ */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#0f0f13] to-[#08080a] border-t border-[#060608]">
            <div className="absolute bottom-0 left-0 right-0 h-[200%] flex items-center justify-center">
              <span
                className={`${fontSizes} font-black font-sans tracking-tight text-[#faff69] drop-shadow-[0_0_16px_rgba(250,255,105,0.45)]`}
              >
                {displayPrevious}
              </span>
            </div>
            {/* Deep Mechanical Inset Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* ============================================================ */}
          {/* LAYER 3: FLIPPING TOP FLAP (Folds Down from 0° to -90°)     */}
          {/* ============================================================ */}
          {flipping && (
            <motion.div
              key={`top-${displayPrevious}-${displayCurrent}`}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: -90 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              style={{
                transformOrigin: "bottom",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
              className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#1f1f25] via-[#16161c] to-[#111115] border-b border-[#060608] z-20"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[200%] flex items-center justify-center">
                <span
                  className={`${fontSizes} font-black font-sans tracking-tight text-[#faff69] drop-shadow-[0_0_16px_rgba(250,255,105,0.45)]`}
                >
                  {displayPrevious}
                </span>
              </div>
              {/* Dynamic Cast Shadow darkening as flap rotates away from light */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ duration: 0.28, ease: "easeIn" }}
                className="absolute inset-0 bg-black pointer-events-none"
              />
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* LAYER 4: FLIPPING BOTTOM FLAP (Folds Down from 90° to 0°)    */}
          {/* ============================================================ */}
          {flipping && (
            <motion.div
              key={`bottom-${displayPrevious}-${displayCurrent}`}
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 0.28, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transformOrigin: "top",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
              className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#0f0f13] to-[#08080a] border-t border-[#060608] z-20"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[200%] flex items-center justify-center">
                <span
                  className={`${fontSizes} font-black font-sans tracking-tight text-[#faff69] drop-shadow-[0_0_16px_rgba(250,255,105,0.45)]`}
                >
                  {displayCurrent}
                </span>
              </div>
              {/* Lightening Shadow clearing as flap lands */}
              <motion.div
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.28, delay: 0.26, ease: "easeOut" }}
                className="absolute inset-0 bg-black pointer-events-none"
              />
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* PRECISION HARDWARE: Center Slit, Notches & Titanium Rivets  */}
          {/* ============================================================ */}
          {/* Center Split Milled Groove */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[3px] bg-[#050507] z-30 shadow-[0_2px_4px_rgba(0,0,0,0.95)] border-y border-black/80" />

          {/* Left Semi-Circular Cutout Notch */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] z-40 border border-[#2a2a2a] shadow-inner" />
          {/* Left Titanium Hinge Bracket with Yellow Accent Dot */}
          <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-3.5 rounded-[2px] bg-gradient-to-b from-[#3a3a44] via-[#24242c] to-[#181820] border border-[#faff69]/30 z-40 shadow-sm flex items-center justify-center">
            <span className="w-0.5 h-0.5 rounded-full bg-[#faff69]" />
          </div>

          {/* Right Semi-Circular Cutout Notch */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] z-40 border border-[#2a2a2a] shadow-inner" />
          {/* Right Titanium Hinge Bracket with Yellow Accent Dot */}
          <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-3.5 rounded-[2px] bg-gradient-to-b from-[#3a3a44] via-[#24242c] to-[#181820] border border-[#faff69]/30 z-40 shadow-sm flex items-center justify-center">
            <span className="w-0.5 h-0.5 rounded-full bg-[#faff69]" />
          </div>
        </div>
      </div>

      {/* Luxury Monospace Label Underneath with Website Voltage Typography */}
      <div className="mt-3.5 sm:mt-4 flex items-center gap-1.5">
        {isTickingUnit && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#faff69] shadow-[0_0_6px_#faff69] animate-pulse" />
        )}
        <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.24em] text-[#888888] group-hover:text-[#faff69] transition-colors">
          {label}
        </span>
      </div>
    </div>
  );
}

interface FlipCountdownTimerProps {
  title?: string;
  subtitle?: string;
  onOpenCheckout?: () => void;
  showCTA?: boolean;
  ctaText?: string;
  priceText?: string;
  variant?: "fullscreen" | "section" | "card" | "slides";
  size?: "sm" | "md" | "lg";
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export default function FlipCountdownTimer({
  title = "Enrollment Closes In",
  subtitle = "Workshop exclusive fee & bonus prompt libraries lock permanently when the countdown reaches zero.",
  onOpenCheckout,
  showCTA = true,
  ctaText = "CLAIM SEAT BEFORE EXPIRY • ₹199",
  priceText = "Regular Fee ₹1,499",
  variant = "section",
  size,
  initialDays = 3,
  initialHours = 18,
  initialMinutes = 45,
  initialSeconds = 4,
}: FlipCountdownTimerProps) {
  const cardSize = size || (variant === "slides" || variant === "card" ? "sm" : "md");

  // Real seconds calculation starting from exact screenshot numbers: 03d 18h 45m 04s
  const totalStartingSeconds =
    initialDays * 86400 + initialHours * 3600 + initialMinutes * 60 + initialSeconds;

  const [secondsRemaining, setSecondsRemaining] = useState(totalStartingSeconds);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // High-fidelity dual-click synthesizer for authentic Solari split-flap click
  const playMechanicalClick = () => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const now = ctx.currentTime;

      // 1. Primary Flap Release Tick
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(1400, now);
      osc1.frequency.exponentialRampToValueAtTime(320, now + 0.025);
      gain1.gain.setValueAtTime(0.09, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.028);

      // 2. Secondary Flap Land Slap
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(480, now + 0.03);
      osc2.frequency.exponentialRampToValueAtTime(80, now + 0.06);
      gain2.gain.setValueAtTime(0.07, now + 0.03);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.03);
      osc2.stop(now + 0.065);
    } catch {
      // Audio policy safe fallback
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 0) return 0;
        playMechanicalClick();
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [soundEnabled]);

  // Previous numbers tracking for clean flap animation
  const prevTimeRef = useRef({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  const days = Math.floor(secondsRemaining / 86400);
  const hours = Math.floor((secondsRemaining % 86400) / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  const format2Digits = (num: number) => String(num).padStart(2, "0");

  const currentFormatted = {
    days: format2Digits(days),
    hours: format2Digits(hours),
    minutes: format2Digits(minutes),
    seconds: format2Digits(seconds),
  };

  const previousFormatted = {
    days: format2Digits(prevTimeRef.current.days),
    hours: format2Digits(prevTimeRef.current.hours),
    minutes: format2Digits(prevTimeRef.current.minutes),
    seconds: format2Digits(prevTimeRef.current.seconds),
  };

  // Update previous ref after current render
  useEffect(() => {
    prevTimeRef.current = { days, hours, minutes, seconds };
  }, [days, hours, minutes, seconds]);

  const containerBg =
    variant === "slides"
      ? "bg-[#070e2b]/95 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl"
      : variant === "card"
      ? "bg-transparent py-4"
      : "bg-[#0a0a0a] py-14 sm:py-20 border-y border-[#2a2a2a]";

  return (
    <section className={`relative overflow-hidden ${containerBg} text-white`}>
      {/* ClickHouse Electric Yellow Ambient Voltage Bloom (Matches Website Colors) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-b from-[#faff69]/15 via-[#faff69]/5 to-transparent blur-[160px] pointer-events-none rounded-full" />

      {/* Cyber Grid Texture Overlay */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Urgency Header in Website Brand Colors */}
        <div
          className={`text-center max-w-2xl mx-auto ${
            variant === "slides" || variant === "card" ? "mb-6 sm:mb-8" : "mb-8 sm:mb-12"
          }`}
        >
          {/* Pulsing Electric Yellow Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-[#faff69]/30 text-[11px] font-mono font-bold tracking-widest uppercase text-[#faff69] mb-4 shadow-[0_0_20px_rgba(250,255,105,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#faff69] animate-ping inline-block shadow-[0_0_8px_#faff69]" />
            <Zap className="w-3.5 h-3.5 text-[#faff69]" />
            <span>LIMITED REGISTRATION WINDOW • 87% SEATS CLAIMED</span>
          </div>

          {/* Exact Headline in ClickHouse Luxury Typography */}
          <h2
            className={`${
              variant === "slides"
                ? "text-2xl sm:text-4xl md:text-5xl font-editorial"
                : "text-3xl sm:text-5xl md:text-6xl font-extrabold font-sans"
            } text-white tracking-tight leading-tight`}
          >
            Enrollment <span className="text-[#faff69] italic">Closes In</span>
          </h2>

          {subtitle && (
            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#cccccc] font-normal leading-relaxed max-w-lg mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* ============================================================ */}
        {/* THE 4 FLIP CLOCK CARDS (DAYS, HOURS, MINUTES, SECONDS)       */}
        {/* ============================================================ */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-6 lg:gap-8">
          <FlipCard
            current={currentFormatted.days}
            previous={previousFormatted.days}
            label="DAYS"
            size={cardSize}
          />

          <FlipCard
            current={currentFormatted.hours}
            previous={previousFormatted.hours}
            label="HOURS"
            size={cardSize}
          />

          <FlipCard
            current={currentFormatted.minutes}
            previous={previousFormatted.minutes}
            label="MINUTES"
            size={cardSize}
          />

          <FlipCard
            current={currentFormatted.seconds}
            previous={previousFormatted.seconds}
            label="SECONDS"
            size={cardSize}
            isTickingUnit={true}
          />
        </div>

        {/* Sound Effect Toggle & Action Section */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] hover:bg-[#202020] border border-[#2a2a2a] hover:border-[#faff69]/40 text-[11px] font-mono text-[#888888] hover:text-[#faff69] transition-all cursor-pointer shadow-sm"
              title="Toggle authentic mechanical split-flap audio click"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#faff69]" />
                  <span className="text-white font-semibold">Mechanical Audio: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#666666]" />
                  <span>Mechanical Audio: Muted</span>
                </>
              )}
            </button>
          </div>

          {/* High Converting Action CTA in Website Electric Voltage Yellow */}
          {showCTA && onOpenCheckout && (
            <div className="w-full max-w-md mx-auto mt-2">
              <button
                onClick={onOpenCheckout}
                className="w-full py-4.5 px-6 rounded-xl text-base sm:text-lg font-black bg-[#faff69] text-[#0a0a0a] hover:bg-[#f6fb4a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_45px_rgba(250,255,105,0.55),0_0_90px_rgba(250,255,105,0.2)] hover:shadow-[0_0_65px_rgba(250,255,105,0.8)] ring-2 ring-[#faff69]/50"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-3 text-xs text-[#888888] font-mono">
                <span className="line-through text-[#666666]">{priceText}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#faff69]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Money-Back Guarantee
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
