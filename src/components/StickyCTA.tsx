"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface StickyCTAProps {
  onOpenCheckout: () => void;
}

export default function StickyCTA({ onOpenCheckout }: StickyCTAProps) {
  return (
    <aside
      aria-label="Quick Registration Bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#2a2a2a] shadow-[0_-10px_35px_rgba(0,0,0,0.85)] px-4 py-3 sm:py-3.5 transition-all"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        {/* Desktop / Tablet Live Information */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#faff69] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#faff69]"></span>
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-white tracking-tight">
                AI Masterclass (Live 2-Hour)
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0a0a0a] bg-[#faff69] px-2 py-0.5 rounded-full">
                Sunday 11:00 AM IST
              </span>
            </div>
            <p className="text-xs text-[#a0a0a0] flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3 h-3 text-[#faff69]" />
              <span>100% Money Back Guarantee • Instant Meet Link via Email</span>
            </p>
          </div>
        </div>

        {/* Mobile & Desktop Glowing Button */}
        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl text-sm sm:text-base font-black bg-[#faff69] text-[#0a0a0a] hover:bg-[#f6fb4a] transition-all duration-300 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(250,255,105,0.65),0_0_70px_rgba(250,255,105,0.25)] hover:shadow-[0_0_50px_rgba(250,255,105,0.9)] active:scale-95 ring-2 ring-[#faff69]/60"
          >
            <span>REGISTER AT JUST ₹99</span>
            <span className="line-through text-[#0a0a0a]/60 text-xs sm:text-sm font-normal">
              ₹1499/-
            </span>
            <ArrowRight className="w-4 h-4 stroke-[3] ml-1" />
          </button>
        </div>
      </div>
    </aside>
  );
}
