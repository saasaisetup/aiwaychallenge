"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface StickyGreenCTAProps {
  onOpenCheckout: () => void;
}

export default function StickyGreenCTA({ onOpenCheckout }: StickyGreenCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label="Floating Registration Callout"
          className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-[#2a2a2a] shadow-2xl"
        >
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="hidden sm:flex w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] items-center justify-center text-[#faff69] flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-2 justify-center sm:justify-start">
                  <span>10x Your Productivity Just By Using AI</span>
                  <span className="text-[10px] font-mono bg-[#faff69] text-[#0a0a0a] px-2 py-0.5 rounded font-bold uppercase">
                    ₹99 ONLY
                  </span>
                </p>
                <p className="text-[11px] text-[#888888] hidden sm:block">
                  Sunday, 19th July • 7:00 PM • Live with Ankit Singh
                </p>
              </div>
            </div>

            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto py-2.5 px-6 rounded-lg text-sm sm:text-base font-bold bg-[#faff69] text-[#0a0a0a] hover:bg-[#e6eb52] transition-all duration-200 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(250,255,105,0.4)] active:scale-95 flex-shrink-0"
            >
              <span>REGISTER AT JUST ₹99</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
