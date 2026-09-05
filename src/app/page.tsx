"use client";

import React, { useState } from "react";
import TopStickyNavbar from "@/components/TopStickyNavbar";
import CyberHero from "@/components/CyberHero";
import WhyCantYou from "@/components/WhyCantYou";
import WhatYouCanBuild from "@/components/WhatYouCanBuild";
import ComparisonSection from "@/components/ComparisonSection";
import LearnInsideWorkshop from "@/components/LearnInsideWorkshop";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import MentorSection from "@/components/MentorSection";
import ReviewsAndFAQ from "@/components/ReviewsAndFAQ";
import CheckoutModal from "@/components/CheckoutModal";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#faff69] selection:text-black">
      {/* Sticky Top Bar: Countdown Timer on Left, Join Now 99 on Right */}
      <TopStickyNavbar onOpenCheckout={() => setIsCheckoutOpen(true)} />

      {/* 1. Hero Section with Headline & Subtitle */}
      <CyberHero onOpenCheckout={() => setIsCheckoutOpen(true)} />

      {/* 2. Process Timeline: "Why Can't You?" (Electric Yellow, No Green) */}
      <WhyCantYou />

      {/* 3. "After This Workshop, You'll Be Able To Build" (Websites, Slides, Apps, 10x Learning) */}
      <WhatYouCanBuild />

      {/* Strategic Mid-Page CTA #1 with Electric Yellow Button (No Green) */}
      <section className="bg-[#0a0a0a] py-8 border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#faff69]/50 transition-colors rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-mono font-bold text-[#faff69] uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#faff69]" />
                <span>LIMITED SEATS FOR LIVE Q&A</span>
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Want To Build Websites, Slides & Micro-Apps Like This?
              </h3>
              <p className="text-xs sm:text-sm text-[#cccccc] mt-0.5">
                Learn the complete context stacking framework live with Ankit Singh this Sunday.
              </p>
            </div>
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full sm:w-auto py-3 px-7 rounded-lg text-sm font-bold bg-[#faff69] text-[#0a0a0a] hover:bg-[#e6eb52] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(250,255,105,0.4)] flex-shrink-0 active:scale-95 cursor-pointer uppercase tracking-wider"
            >
              <span>RESERVE SEAT • ₹5</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. "The 10x AI Productivity Protocol" Comparison */}
      <ComparisonSection />

      {/* 5. "What You'll Learn Inside This Workshop" Curriculum Breakdown */}
      <LearnInsideWorkshop />

      {/* 6. "From Overwhelmed To A 10x AI Power Performer" + 3 Secrets */}
      <BeforeAfterSection />

      {/* 7. "Should You Join This Workshop?" + Triple Chevron + Yellow Line + 100% Guarantee */}
      <WhoShouldJoin />

      {/* 8. "Know Your Mentor: Ankit Singh" Dedicated Showcase & LinkedIn Profile */}
      <MentorSection />

      {/* 9. Exactly 3 Testimonials + Mid-FAQ CTA + 8 Frequently Asked Questions */}
      <ReviewsAndFAQ onOpenCheckout={() => setIsCheckoutOpen(true)} />

      {/* Pre-Footer Register Button in ClickHouse Electric Yellow with Ambient Voltage Glow */}
      <div className="relative max-w-xl mx-auto px-4 py-16 text-center">
        {/* Ambient Voltage Glow Bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-36 bg-[#faff69]/25 blur-[90px] rounded-full pointer-events-none" />

        <button
          onClick={() => setIsCheckoutOpen(true)}
          className="relative z-10 w-full py-4.5 px-8 rounded-xl text-base sm:text-xl font-black bg-[#faff69] text-[#0a0a0a] hover:bg-[#f6fb4a] transition-all duration-300 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_55px_rgba(250,255,105,0.6),0_0_100px_rgba(250,255,105,0.25)] hover:shadow-[0_0_80px_rgba(250,255,105,0.9)] active:scale-95 ring-2 ring-[#faff69]/60"
        >
          <span>REGISTER AT JUST ₹5</span>
          <span className="line-through text-[#0a0a0a]/60 text-sm font-normal">₹1499/-</span>
          <ArrowRight className="w-5 h-5 stroke-[3] ml-1" />
        </button>
        <p className="relative z-10 text-xs text-[#aaaaaa] mt-4 font-mono flex items-center justify-center gap-2">
          <span>Sunday, 6th September</span>
          <span className="w-1 h-1 rounded-full bg-[#faff69] shadow-[0_0_6px_#faff69]" />
          <span>11:00 AM IST</span>
          <span className="w-1 h-1 rounded-full bg-[#faff69] shadow-[0_0_6px_#faff69]" />
          <span>100% Money Back Guarantee</span>
        </p>
      </div>

      {/* Razorpay Payment Modal (₹5 Test with Resend Email Delivery & Calendar Sync) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        price={5}
        planTitle="10x Your Productivity Just By Using AI Masterclass"
      />

      {/* Footer */}
      <footer className="py-12 border-t border-[#2a2a2a] bg-[#0a0a0a] text-center text-xs text-[#888888]">
        <p>© 2026 AIWAY CHALLENGE • Mentored by Ankit Singh. All rights reserved.</p>
        <p className="mt-1">
          Secured by Razorpay 256-Bit SSL • Automated Delivery via Resend & Google Meet
        </p>
      </footer>
    </main>
  );
}
