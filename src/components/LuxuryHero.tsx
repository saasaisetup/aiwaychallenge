"use client";

import React, { useState } from "react";
import { Play, Sparkles, X } from "lucide-react";

interface LuxuryHeroProps {
  onOpenCheckout: () => void;
  onOpenToolsPreview: () => void;
}

export default function LuxuryHero({
  onOpenCheckout,
  onOpenToolsPreview,
}: LuxuryHeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[1340px] mx-auto px-3 sm:px-6 pt-4 pb-12">
      {/* Main White Card Canvas */}
      <div className="relative bg-white rounded-[32px] sm:rounded-[44px] shadow-[0_20px_60px_rgba(26,18,14,0.15)] border border-[#EDE5DE] overflow-hidden p-4 sm:p-8 lg:p-12">
        {/* Subtle grid pattern inside card matching screenshot */}
        <div className="absolute inset-0 bg-mosaic-pattern opacity-60 pointer-events-none" />

        {/* 1. Floating Pill Navigation Bar */}
        <nav className="relative z-20 max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="bg-white/95 backdrop-blur-md border border-[#E7DDD5] rounded-full px-5 py-2.5 shadow-sm flex items-center justify-between">
            {/* Logo / Name */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base tracking-tight text-[#1E1410]">
                Ankit Singh
              </span>
              <span className="hidden sm:inline-block text-[10px] text-[#8C6D58] font-semibold bg-[#F7F2EE] px-2 py-0.5 rounded-full">
                AI Studio
              </span>
            </div>

            {/* Right Nav Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1.5 text-xs text-[#5C4538] font-medium bg-[#FAF6F2] px-2.5 py-1 rounded-full border border-[#EFE8E1]">
                <span>🇮🇳</span>
                <span className="text-[11px] font-semibold">English / Hindi</span>
              </div>

              <button
                onClick={onOpenCheckout}
                className="bg-[#231713] hover:bg-[#382620] text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-full transition-all active:scale-95 shadow-md shadow-[#231713]/10 cursor-pointer"
              >
                Register Now
              </button>
            </div>
          </div>
        </nav>

        {/* 2. Announcement Pill Badge */}
        <div className="relative z-10 text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-[#4A382F] bg-[#FAF5F0] border border-[#E8DED6] shadow-xs">
            <span>🎁</span>
            <span>
              <strong>LIVE Masterclass</strong> for ₹99 |{" "}
              <span className="text-[#8C6D58]">500+ students & pros enrolled!</span>
            </span>
          </div>
        </div>

        {/* 3. Hero Headlines matching two-tier typography */}
        <div className="relative z-10 text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold text-[#1F1511] tracking-tight leading-[1.12]">
            Build AI skills that companies <br className="hidden sm:inline" />
            <span className="font-serif-italic font-normal text-[#1F1511] block sm:inline mt-1 sm:mt-0">
              Actually Hire For
            </span>
          </h1>

          <p className="mt-5 text-[#635147] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            AI is changing every industry, but ambitious students and working professionals
            are evolving with it. Learn practical AI workflows, build standout projects,
            and stay ahead of the competition.
          </p>

          {/* 4. Dual Call To Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onOpenCheckout}
              className="px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-[#231713] hover:bg-[#3B2822] transition-all shadow-lg shadow-[#231713]/20 active:scale-95 cursor-pointer"
            >
              Book your seat now!
            </button>

            <button
              onClick={onOpenToolsPreview}
              className="px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-[#2E1F18] bg-white hover:bg-[#FAF6F2] border border-[#D9CBC1] transition-all shadow-xs flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span className="text-xs">▶</span>
              <span>See demo classes</span>
            </button>
          </div>
        </div>

        {/* 5. Hero Video Preview Container with Frosted Glass Play Button */}
        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          <div
            onClick={() => setIsVideoOpen(true)}
            className="group relative w-full aspect-[16/9] sm:aspect-[2.1/1] rounded-[24px] sm:rounded-[32px] overflow-hidden border-4 border-white shadow-[0_25px_60px_-15px_rgba(35,23,19,0.25)] bg-[#1A120E] cursor-pointer"
          >
            {/* Background Studio Educator Image */}
            <img
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=85"
              alt="Live AI Masterclass Studio Session"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />

            {/* Subtle dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Frosted Glass Play Button matching screenshot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/35 backdrop-blur-md border border-white/60 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:bg-white/45 transition-all duration-300">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Bottom Floating Pill inside Video */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex items-center justify-between text-white/90 text-xs">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold text-[11px]">Live 2-Hour Hands-on Masterclass</span>
              </div>
              <span className="hidden sm:inline-block bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] text-stone-300 border border-white/10">
                Click to preview trailer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Preview */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#1A120E] border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Masterclass Quick Trailer & Tool Tour</h3>
              <p className="text-stone-400 text-xs mb-4">
                Watch how we will demonstrate NotebookLM, Cursor, Gamma, v0.dev, and Napkin AI live.
              </p>
              <div className="aspect-video bg-stone-900 rounded-xl flex items-center justify-center border border-stone-800 p-4">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#8C6D58]/20 border border-[#8C6D58]/40 text-[#D8BDB0] flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-semibold text-stone-200">
                    Live Session Preview Ready
                  </p>
                  <p className="text-xs text-stone-400 mt-1 max-w-md mx-auto">
                    Full live demonstration will be hosted on Google Meet for all registered participants.
                  </p>
                  <button
                    onClick={() => {
                      setIsVideoOpen(false);
                      onOpenCheckout();
                    }}
                    className="mt-5 px-6 py-2.5 rounded-full bg-[#8C6D58] hover:bg-[#A37F66] text-white font-semibold text-xs transition-all cursor-pointer"
                  >
                    Reserve Seat for ₹99 Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
