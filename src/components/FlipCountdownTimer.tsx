"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Volume2, VolumeX, ShieldCheck } from "lucide-react";

interface FlipDigitProps {
  current: string;
  previous: string;
  label: string;
  size?: "sm" | "md" | "lg";
}

/**
 * 3D Mechanical Split-Flap Single Card
 * Exactly matches the user's uploaded screenshot with:
 * - Crisp, bold PURE WHITE numerals
 * - Pixel-perfect horizontal equatorial split across the digits (top & bottom math identical)
 * - Deep charcoal/slate matte card body (#181921 top, #13141b bottom)
 * - Left and right semi-circular cutout notches with mechanical hinge tabs
 * - Smooth 3D perspective folding animation
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
      ? "w-16 h-[72px] sm:w-20 sm:h-[88px] md:w-24 md:h-[104px]"
      : size === "lg"
      ? "w-24 h-[106px] sm:w-32 sm:h-[140px] md:w-40 md:h-[172px]"
      : "w-20 h-[88px] sm:w-28 sm:h-[122px] md:w-32 md:h-[140px] lg:w-36 lg:h-[156px]";

  const fontSizes =
    size === "sm"
      ? "text-3xl sm:text-4xl md:text-5xl"
      : size === "lg"
      ? "text-5xl sm:text-7xl md:text-8xl"
      : "text-4xl sm:text-6xl md:text-7xl";

  return (
    <div className="flex flex-col items-center select-none">
      {/* 3D Card Stage with Perspective */}
      <div className={`relative ${cardDimensions} perspective-[1200px]`}>
        {/* Left Outer Hinge Strip (Positioned on the outer flank, not inside the card face) */}
        <div className="absolute -left-1.5 sm:-left-2 top-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-4 sm:h-5 rounded-[2px] bg-[#2d303f] border border-white/15 z-40 shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center pointer-events-none">
          <div className="w-full h-[1px] bg-black/75" />
        </div>

        {/* Right Outer Hinge Strip (Positioned on the outer flank, not inside the card face) */}
        <div className="absolute -right-1.5 sm:-right-2 top-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-4 sm:h-5 rounded-[2px] bg-[#2d303f] border border-white/15 z-40 shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center pointer-events-none">
          <div className="w-full h-[1px] bg-black/75" />
        </div>

        {/* Outer Card Shell with 3D Depth & Specular Top Hairline */}
        <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#14151c] border border-[#272936] shadow-[0_16px_36px_rgba(0,0,0,0.9),0_2px_8px_rgba(0,0,0,0.6)]">
          
          {/* ============================================================ */}
          {/* LAYER 1: STATIC TOP FLAP (Shows Incoming/Current Value)      */}
          {/* Sits at top: 0, height: 50%, child has top: 0, height: 200% */}
          {/* ============================================================ */}
          <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b from-[#21232d] to-[#181922] border-b border-[#0b0c10]">
            {/* Top specular hairline edge */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/[0.14] pointer-events-none" />

            <div className="absolute top-0 left-0 right-0 h-[200%] flex items-center justify-center">
              <span
                className={`${fontSizes} font-bold font-sans tracking-tight text-white leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]`}
              >
                {displayCurrent}
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* LAYER 2: STATIC BOTTOM FLAP (Shows Outgoing/Previous Value)  */}
          {/* Sits at bottom: 0, height: 50%, child has -top-full, h: 200% */}
          {/* Exactly identical coordinate space to Layer 1                */}
          {/* ============================================================ */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-xl sm:rounded-b-2xl bg-gradient-to-b from-[#14151c] to-[#0f1015] border-t border-[#0b0c10]">
            {/* Soft inner shadow along top split */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

            <div className="absolute -top-full left-0 right-0 h-[200%] flex items-center justify-center">
              <span
                className={`${fontSizes} font-bold font-sans tracking-tight text-white leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]`}
              >
                {displayPrevious}
              </span>
            </div>
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
              className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b from-[#21232d] to-[#181922] border-b border-[#0b0c10] z-20"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/[0.14] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[200%] flex items-center justify-center">
                <span
                  className={`${fontSizes} font-bold font-sans tracking-tight text-white leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]`}
                >
                  {displayPrevious}
                </span>
              </div>
              {/* Dynamic darkening shadow as top flap rotates down */}
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
              className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-xl sm:rounded-b-2xl bg-gradient-to-b from-[#14151c] to-[#0f1015] border-t border-[#0b0c10] z-20"
            >
              <div className="absolute -top-full left-0 right-0 h-[200%] flex items-center justify-center">
                <span
                  className={`${fontSizes} font-bold font-sans tracking-tight text-white leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]`}
                >
                  {displayCurrent}
                </span>
              </div>
              {/* Dynamic lightening shadow clearing as bottom flap lands */}
              <motion.div
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.28, delay: 0.26, ease: "easeOut" }}
                className="absolute inset-0 bg-black pointer-events-none"
              />
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* MECHANICAL SPLIT: Center Slit Dividing Upper & Lower Flaps   */}
          {/* Note: strips have been moved to the outer sides as requested */}
          {/* ============================================================ */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-[#090a0d] z-30 shadow-[0_1px_2px_rgba(0,0,0,0.95)]" />
        </div>
      </div>

      {/* Label Underneath (DAYS, HOURS, MINUTES, SECONDS) */}
      <span className="mt-3 sm:mt-3.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#6b6f80] font-sans">
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
  targetDate?: string;
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export default function FlipCountdownTimer({
  title = "Enrollment Closes In",
  subtitle,
  onOpenCheckout,
  showCTA = true,
  ctaText = "CLAIM SEAT BEFORE EXPIRY • ₹199",
  priceText = "Regular Fee ₹1,499",
  variant = "section",
  size,
  targetDate,
  initialDays = 2,
  initialHours = 21,
  initialMinutes = 18,
  initialSeconds = 22,
}: FlipCountdownTimerProps) {
  const cardSize = size || (variant === "slides" || variant === "card" ? "sm" : "md");

  const getTargetTimestamp = () => {
    const webinarDate =
      targetDate || process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-09-09T11:00:00+05:30";
    return new Date(webinarDate).getTime();
  };

  const calculateTotalSeconds = () => {
    const target = getTargetTimestamp();
    const diff = Math.floor((target - Date.now()) / 1000);
    if (diff > 0 && !isNaN(diff)) return diff;
    return initialDays * 86400 + initialHours * 3600 + initialMinutes * 60 + initialSeconds;
  };

  const [secondsRemaining, setSecondsRemaining] = useState(
    initialDays * 86400 + initialHours * 3600 + initialMinutes * 60 + initialSeconds
  );
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Subtle mechanical split-flap click synthesizer
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

      // Primary Flap Release Tick
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(900, now);
      osc1.frequency.exponentialRampToValueAtTime(140, now + 0.035);
      gain1.gain.setValueAtTime(0.08, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.04);

      // Flap Impact Slap
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(320, now + 0.025);
      osc2.frequency.exponentialRampToValueAtTime(60, now + 0.055);
      gain2.gain.setValueAtTime(0.06, now + 0.025);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.025);
      osc2.stop(now + 0.06);
    } catch {
      // Audio policy safe fallback
    }
  };

  useEffect(() => {
    // Immediately synchronize to live target date on mount
    setSecondsRemaining(calculateTotalSeconds());

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        const live = calculateTotalSeconds();
        if (live <= 0) return 0;
        playMechanicalClick();
        return live;
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
      : "bg-[#0a0a0c] py-12 sm:py-16";

  return (
    <section className={`relative overflow-hidden ${containerBg} text-white`}>
      {/* Subtle Dark Vignette & Soft Ambient Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] bg-white/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Headline Exactly as Uploaded Screenshot */}
        <div
          className={`text-center max-w-2xl mx-auto ${
            variant === "slides" || variant === "card" ? "mb-6 sm:mb-8" : "mb-8 sm:mb-12"
          }`}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-white tracking-tight leading-tight"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2.5 text-xs sm:text-sm text-[#888c9e] font-normal leading-relaxed max-w-lg mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* ============================================================ */}
        {/* THE 4 FLIP CLOCK CARDS (DAYS, HOURS, MINUTES, SECONDS)       */}
        {/* ============================================================ */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6 lg:gap-7">
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

        {/* Sound Effect Toggle & Action Section */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14151c] hover:bg-[#1c1d27] border border-[#272936] text-[11px] font-mono text-[#787c8e] hover:text-white transition-all cursor-pointer shadow-sm"
              title="Toggle authentic mechanical split-flap click sound"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-white font-medium">Mechanical Audio: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#5e6170]" />
                  <span>Mechanical Audio: Muted</span>
                </>
              )}
            </button>
          </div>

          {/* High Converting Action CTA */}
          {showCTA && onOpenCheckout && (
            <div className="w-full max-w-md mx-auto mt-2">
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 sm:py-4.5 px-6 rounded-xl text-base sm:text-lg font-black bg-[#faff69] text-[#0a0a0a] hover:bg-[#f6fb4a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(250,255,105,0.45)] hover:shadow-[0_0_60px_rgba(250,255,105,0.7)] ring-2 ring-[#faff69]/40"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-3 text-xs text-[#7d8296] font-mono">
                <span className="line-through text-[#66687a]">{priceText}</span>
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
