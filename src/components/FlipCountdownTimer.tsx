"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Volume2, VolumeX, ShieldCheck } from "lucide-react";

interface FlipDigitProps {
  current: string;
  previous: string;
  label: string;
  size?: "sm" | "md" | "lg";
}

/**
 * 3D Split-Flap Single Card Unit
 * Matches the uploaded screenshot with exact dark graphite cards,
 * horizontal split groove, left/right hinge notches, and realistic 3D flipping.
 */
function FlipCard({ current, previous, label, size = "md" }: FlipDigitProps) {
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
    <div className="flex flex-col items-center">
      {/* 3D Card Container */}
      <div className={`relative ${cardDimensions} select-none perspective-[1000px]`}>
        {/* Outer Bevel & Deep Ambient Shadow */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#16171f] border border-[#262835] shadow-[0_18px_38px_rgba(0,0,0,0.85),0_4px_12px_rgba(0,0,0,0.6)]">
          
          {/* ============================================================ */}
          {/* LAYER 1: STATIC TOP (Shows Incoming/Current Value)            */}
          {/* ============================================================ */}
          <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#1e202c] to-[#161720] border-b border-[#0b0c10]">
            <div className="absolute top-0 left-0 right-0 h-[200%] flex items-center justify-center">
              <span className={`${fontSizes} font-black font-sans tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]`}>
                {displayCurrent}
              </span>
            </div>
            {/* Top Gloss Highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent pointer-events-none" />
          </div>

          {/* ============================================================ */}
          {/* LAYER 2: STATIC BOTTOM (Shows Outgoing/Previous Value)         */}
          {/* ============================================================ */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#13141b] to-[#0f1016] border-t border-[#0b0c10]">
            <div className="absolute bottom-0 left-0 right-0 h-[200%] flex items-center justify-center">
              <span className={`${fontSizes} font-black font-sans tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]`}>
                {displayPrevious}
              </span>
            </div>
            {/* Bottom Inner Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          {/* ============================================================ */}
          {/* LAYER 3: FLIPPING TOP FLAP (Folds Down from 0° to -90°)       */}
          {/* ============================================================ */}
          {flipping && (
            <motion.div
              key={`top-${displayPrevious}-${displayCurrent}`}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: -90 }}
              transition={{ duration: 0.28, ease: "easeIn" }}
              style={{
                transformOrigin: "bottom",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
              className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#1e202c] to-[#161720] border-b border-[#0b0c10] z-20"
            >
              <div className="absolute top-0 left-0 right-0 h-[200%] flex items-center justify-center">
                <span className={`${fontSizes} font-black font-sans tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]`}>
                  {displayPrevious}
                </span>
              </div>
              {/* Darkening Shadow as Flap Rotates Away */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                transition={{ duration: 0.28, ease: "easeIn" }}
                className="absolute inset-0 bg-black pointer-events-none"
              />
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* LAYER 4: FLIPPING BOTTOM FLAP (Folds Down from 90° to 0°)      */}
          {/* ============================================================ */}
          {flipping && (
            <motion.div
              key={`bottom-${displayPrevious}-${displayCurrent}`}
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 0.28, delay: 0.27, ease: "easeOut" }}
              style={{
                transformOrigin: "top",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
              className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#13141b] to-[#0f1016] border-t border-[#0b0c10] z-20"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[200%] flex items-center justify-center">
                <span className={`${fontSizes} font-black font-sans tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]`}>
                  {displayCurrent}
                </span>
              </div>
              {/* Lightening Shadow as Flap Lands */}
              <motion.div
                initial={{ opacity: 0.55 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.28, delay: 0.27, ease: "easeOut" }}
                className="absolute inset-0 bg-black pointer-events-none"
              />
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* MECHANICAL HARDWARE: Center Slit & Left/Right Notches        */}
          {/* ============================================================ */}
          {/* Center Split Groove Line */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2.5px] bg-[#090a0d] z-30 shadow-[0_1px_2px_rgba(0,0,0,0.9)]" />

          {/* Left Cutout Notch */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0a0a0c] z-40 border border-black/40" />
          {/* Left Mechanical Metal Hinge Tab */}
          <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-3 rounded-[2px] bg-[#2a2c3a] border border-white/10 z-40 shadow-sm" />

          {/* Right Cutout Notch */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0a0a0c] z-40 border border-black/40" />
          {/* Right Mechanical Metal Hinge Tab */}
          <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-3 rounded-[2px] bg-[#2a2c3a] border border-white/10 z-40 shadow-sm" />
        </div>
      </div>

      {/* Label Underneath (DAYS, HOURS, MINUTES, SECONDS) */}
      <span className="mt-3.5 sm:mt-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#787c8e] font-sans">
        {label}
      </span>
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
  subtitle = "Special attendee pricing locks permanently when the clock hits zero.",
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
  const [mounted, setMounted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Audio click synthesizer for authentic mechanical split-flap click
  const playMechanicalClick = () => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.045);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) {
    return (
      <div className="py-12 flex justify-center items-center">
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>
    );
  }

  const containerBg =
    variant === "slides"
      ? "bg-[#070e2b]/90 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl"
      : variant === "card"
      ? "bg-transparent py-4"
      : "bg-[#0a0a0c] py-14 sm:py-20";

  return (
    <section className={`relative overflow-hidden ${containerBg} text-white`}>
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/[0.05] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Urgency Header */}
        <div className={`text-center max-w-2xl mx-auto ${variant === "slides" || variant === "card" ? "mb-6 sm:mb-8" : "mb-8 sm:mb-12"}`}>
          {/* Subtle Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[11px] font-mono font-semibold tracking-widest uppercase text-white/80 mb-3 sm:mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
            <span>LIVE REGISTRATION CLOSING WINDOW</span>
          </div>

          {/* Exact Headline from Uploaded Screenshot */}
          <h2 className={`${variant === "slides" ? "text-2xl sm:text-4xl md:text-5xl font-editorial" : "text-3xl sm:text-5xl md:text-6xl font-extrabold font-sans"} text-white tracking-tight leading-tight`}>
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#9fa3b4] font-normal leading-relaxed max-w-lg mx-auto">
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
          />
        </div>

        {/* Optional Sound Effect Toggle & Action Section */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[11px] font-mono text-[#8b8fa3] hover:text-white transition-colors cursor-pointer"
              title="Toggle authentic mechanical split-flap click sound"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Clock Audio: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#6c7082]" />
                  <span>Clock Audio: Muted</span>
                </>
              )}
            </button>
          </div>

          {/* High Converting Action CTA */}
          {showCTA && onOpenCheckout && (
            <div className="w-full max-w-md mx-auto mt-2">
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 px-6 rounded-xl text-sm sm:text-base font-black bg-[#faff69] text-[#0a0a0a] hover:bg-[#f5fa4f] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(250,255,105,0.45)] hover:shadow-[0_0_60px_rgba(250,255,105,0.7)] ring-2 ring-[#faff69]/40"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-3 text-xs text-[#7d8296] font-mono">
                <span>{priceText}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-400">
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
