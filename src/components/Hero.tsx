"use client";

import React from "react";
import {
  Calendar,
  Clock,
  Sparkles,
  Zap,
  CheckCircle2,
  Users,
  Shield,
  Laptop,
  ArrowRight,
} from "lucide-react";

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  const webinarDate =
    process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-09-06T11:00:00+05:30";

  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Glow Effects Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            LIVE 2-HOUR MASTERCLASS
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            25+ LIVE AI TOOLS & DEMOS
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            🎯 FOR STUDENTS & WORKING PROS
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-5xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.15] max-w-5xl mx-auto">
          10x Your Career & Productivity{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Using 25+ Cutting-Edge AI Tools
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Skip the theory and fluff. Learn the exact prompt frameworks, rapid
          prototyping stacks, and automated workflows top tech professionals and
          smart students use to save 15+ hours every single week.
        </p>

        {/* Event Quick Info Pill Box */}
        <div className="mt-8 inline-grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-900/80 border border-slate-800 rounded-2xl max-w-3xl mx-auto text-left shadow-2xl backdrop-blur-sm">
          <div className="flex items-center gap-3 p-2">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Date
              </p>
              <p className="text-xs sm:text-sm font-bold text-white">
                Upcoming Weekend
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Time & Duration
              </p>
              <p className="text-xs sm:text-sm font-bold text-white">
                11:00 AM IST (2 Hrs)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Platform
              </p>
              <p className="text-xs sm:text-sm font-bold text-white">
                Google Meet (Live)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Slots Left
              </p>
              <p className="text-xs sm:text-sm font-bold text-pink-400 animate-pulse">
                Only 14 Seats Left
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Anchor & Hero CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <div className="flex items-baseline gap-3">
            <span className="text-sm sm:text-base text-slate-400 line-through">
              Standard Price: ₹1,999
            </span>
            <span className="text-3xl sm:text-4xl font-extrabold text-white">
              ₹99{" "}
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                95% OFF Today
              </span>
            </span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 transition-all shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Register & Reserve Seat for ₹99</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 mt-2">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant
              Google Meet Link
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> One-Click
              Google Calendar Sync
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Recording +
              Slide Deck Included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
