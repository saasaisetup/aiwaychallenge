"use client";

import React, { useState, useEffect } from "react";
import { Clock, IndianRupee } from "lucide-react";

interface TopStickyNavbarProps {
  onOpenCheckout: () => void;
}

export default function TopStickyNavbar({ onOpenCheckout }: TopStickyNavbarProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 3,
    minutes: 27,
    seconds: 13,
  });

  useEffect(() => {
    const calculateTime = () => {
      const webinarDate = process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-09-06T11:00:00+05:30";
      const target = new Date(webinarDate).getTime();
      let diff = target - Date.now();
      if (diff <= 0 || isNaN(diff)) {
        diff = (2 * 86400 + 3 * 3600 + 27 * 60 + 13) * 1000;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTime());
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]/70">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        {/* Left Side: Countdown Timer */}
        <div className="flex items-center gap-2 text-[#faff69]">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#faff69] flex-shrink-0 animate-pulse" />
          <span className="font-mono font-bold text-xs sm:text-sm md:text-base tracking-wider drop-shadow-[0_0_8px_rgba(250,255,105,0.35)]">
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
          </span>
        </div>

        {/* Right Side: Join Now ₹99 with Indian Rupee icon */}
        <button
          onClick={onOpenCheckout}
          className="border-2 border-[#faff69] text-[#faff69] hover:bg-[#faff69] hover:text-[#0a0a0a] font-mono font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl transition-all duration-200 uppercase tracking-wider shadow-[0_0_15px_rgba(250,255,105,0.25)] hover:shadow-[0_0_25px_rgba(250,255,105,0.6)] active:scale-95 cursor-pointer flex-shrink-0 inline-flex items-center gap-1"
        >
          <span>JOIN NOW</span>
          <span className="inline-flex items-center font-black">
            <IndianRupee className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
            <span>5</span>
          </span>
        </button>
      </div>
    </header>
  );
}
