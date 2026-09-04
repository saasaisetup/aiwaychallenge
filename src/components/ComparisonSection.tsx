"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function ComparisonSection() {
  const traditional = [
    "8+ hours a day stuck in manual, repetitive daily grunt work",
    "Struggling for hours to design slides and format documents",
    "Writing code from scratch with frustrating syntax bugs",
    "Overwhelmed reading 500-page textbooks and research reports",
    "Endless back-and-forth emails and spreadsheet cleanup",
    "Constant burnout with zero time left for high-leverage growth",
    "Steep learning curves taking 6-12 months of trial and error",
    "Risk of getting left behind as AI accelerates everywhere",
  ];

  const aiModel = [
    "Action-first approach — automate your first workflow in 45 minutes",
    "Generate executive-grade presentation decks in 60 seconds",
    "Build live websites and interactive tools without writing syntax",
    "Synthesize and master massive textbooks in minutes",
    "Automate 80% of routine emails, data entry, and status reports",
    "Reclaim 15-20 hours every week to focus on career acceleration",
    "Prompt architectures that deliver production results on first try",
    "You become the indispensable 10x operator who leads the pack",
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#0a0a0a] text-white border-b border-[#2a2a2a] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ClickHouse Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-[#faff69] uppercase tracking-widest bg-[#1a1a1a] px-3.5 py-1 rounded-full border border-[#2a2a2a]">
            THE LEVERAGE GAP
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-1.5px] mt-4">
            You Don't Need Months To Master AI. <br />
            <span className="text-[#faff69]">You Can 10x Output Immediately.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#cccccc]">
            The difference between working hard and operating with high-performance ClickHouse-grade AI leverage.
          </p>
        </motion.div>

        {/* Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-6 sm:p-8"
          >
            <div className="pb-4 mb-6 border-b border-[#2a2a2a]">
              <h3 className="text-base sm:text-lg font-bold text-slate-200">
                Old Manual Method (Slow & Exhausting)
              </h3>
            </div>

            <ul className="space-y-4">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#888888]">
                  <div className="mt-0.5 h-4 w-4 rounded-full bg-red-950/80 border border-red-800 text-red-400 flex items-center justify-center flex-shrink-0">
                    <X className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AI Productivity Protocol Column: ClickHouse Featured Card style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1a1a1a] border-2 border-[#faff69] rounded-xl p-6 sm:p-8 shadow-[0_0_40px_rgba(250,255,105,0.15)] relative overflow-hidden"
          >
            <div className="pb-4 mb-6 border-b border-[#2a2a2a] flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-[#faff69]">
                The 10x AI Productivity Protocol
              </h3>
              <span className="text-[10px] font-mono bg-[#faff69] text-[#0a0a0a] px-2 py-0.5 rounded font-bold uppercase">
                Fast Track
              </span>
            </div>

            <ul className="space-y-4">
              {aiModel.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white font-medium">
                  <div className="mt-0.5 h-4 w-4 rounded-full bg-[#faff69] text-[#0a0a0a] flex items-center justify-center flex-shrink-0 font-bold">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
