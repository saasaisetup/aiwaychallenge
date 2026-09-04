"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Clock, ShieldCheck, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenCheckout: () => void;
}

export default function Navbar({ onOpenCheckout }: NavbarProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-1.5 px-4 text-xs font-medium text-center flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span>
          ⚡ <strong>LIMITED SEATS:</strong> ₹99 Early Bird Pricing Ends in{" "}
          <span className="font-mono font-bold bg-black/20 px-1.5 py-0.5 rounded">
            {String(timeLeft.hours).padStart(2, "0")}:
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </span>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-white">
              AI<span className="text-indigo-400">Masterclass</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs text-slate-400 border border-slate-700/60 rounded px-1.5 py-0.5">
              Live Workshop
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Instant Google Meet & Calendar Invite</span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-indigo-500/25 active:scale-95 cursor-pointer"
          >
            <span>Book Seat for ₹99</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
}
