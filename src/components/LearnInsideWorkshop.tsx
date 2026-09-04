"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

export default function LearnInsideWorkshop() {
  const modules = [
    {
      step: "MODULE 01",
      title: "The 10x Operator Mindset & Core AI Stack",
      desc: "Stop using AI like a search engine. Master the 3 core context workflows that eliminate 20+ hours of repetitive weekly chores.",
    },
    {
      step: "MODULE 02",
      title: "Building Full Websites in Under 10 Minutes",
      desc: "Prompt-to-production workflows. Deploy live responsive websites, portfolios, and landing pages with zero coding experience.",
    },
    {
      step: "MODULE 03",
      title: "60-Second Executive Slides & Pitch Decks",
      desc: "Generate stunning boardroom presentations, visual charts, and investor decks from rough bullet points on the first run.",
    },
    {
      step: "MODULE 04",
      title: "No-Code Custom Apps & Workflow Automation",
      desc: "Assemble custom calculators, interactive tools, and automated task chains that handle emails, spreadsheets, and reporting.",
    },
    {
      step: "MODULE 05",
      title: "The Student & Professional Career Multiplier",
      desc: "Synthesize 500-page textbooks, master complex topics in minutes, automate routine emails, and finish an 8-hour day in 45 mins.",
    },
    {
      step: "MODULE 06",
      title: "Live Q&A, Prompt Vault & 10x Toolkit",
      desc: "Get direct answers from Ankit Singh, plus immediate access to the production prompt vault and autonomous tool templates.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#0a0a0a] text-white border-b border-[#2a2a2a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-[#faff69] uppercase tracking-widest bg-[#1a1a1a] px-3.5 py-1 rounded-full border border-[#2a2a2a]">
            CURRICULUM BREAKDOWN
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-1.5px] mt-4">
            What You'll Learn Inside <br />
            <span className="text-[#faff69]">This Live Masterclass</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#cccccc]">
            Two hours of pure, high-density practical leverage. No boring slides, 100% live building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#faff69]/60 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-semibold text-[#faff69] bg-[#0a0a0a] px-2.5 py-1 rounded border border-[#2a2a2a] inline-block mb-4">
                  {m.step}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {m.title}
                </h3>
                <p className="text-sm text-[#cccccc] leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2a2a2a] flex items-center gap-2 text-xs font-semibold text-[#888888]">
                <CheckCircle2 className="w-4 h-4 text-[#faff69]" />
                <span>Hands-on Live Demonstration</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
