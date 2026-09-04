"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface StickyCTAProps {
  onOpenCheckout: () => void;
}

export default function StickyCTA({ onOpenCheckout }: StickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-3 sm:p-4 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-extrabold text-sm text-white">
              AI Masterclass (Live 2-Hour)
            </span>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full">
              ₹99 Only
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Instant Google Meet & Calendar Invite via Email
          </p>
        </div>

        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3">
          <div className="sm:hidden">
            <p className="text-[10px] text-slate-400">Early Bird Special</p>
            <p className="text-lg font-extrabold text-white">₹99</p>
          </div>

          <button
            onClick={onOpenCheckout}
            className="flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 transition-all shadow-lg shadow-indigo-500/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Reserve Seat for ₹99</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
