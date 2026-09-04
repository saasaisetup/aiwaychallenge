"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Sparkles, Check, ArrowRight } from "lucide-react";

export default function BeforeAfterSection() {
  const secrets = [
    {
      num: "01",
      title: "It's Never About 1,000 Tools — It's About The 3 Master Workflow Chains",
      desc: "95% of new AI tools are just wrappers around the same core engines. In this workshop, you master the 3 fundamental context workflows that replace dozens of expensive apps.",
      tag: "FOUNDATION",
    },
    {
      num: "02",
      title: "AI Can Build Websites & Executive Slide Decks If You Stack Context",
      desc: "Single-line prompts give rookie output. You will learn the exact 'Role-Context-Constraint' framework that generates production web apps and CEO-ready presentations on the first run.",
      tag: "FRAMEWORK",
    },
    {
      num: "03",
      title: "The Autonomous Daily Schedule That Saves 20+ Hours Every Week",
      desc: "How top-tier AI operators automate their inbox, research, slides, and code before breakfast. Unlocked live during the masterclass.",
      tag: "LOCKED SECRET",
      locked: true,
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
            INSIDER LEVERAGE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-1.5px] mt-4">
            3 Secrets Most Coaches <br />
            <span className="text-[#faff69]">Won't Tell You About AI</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#cccccc]">
            Why 99% of people fail to get real productivity from AI, and how you will jump into the top 1%.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secrets.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-[#1a1a1a] border ${
                s.locked ? "border-[#faff69]/40 bg-[#14140c]" : "border-[#2a2a2a]"
              } hover:border-[#faff69] rounded-xl p-6 sm:p-8 transition-all duration-200 flex flex-col justify-between relative`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl sm:text-5xl font-black font-mono text-[#faff69] tracking-tight">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#faff69] bg-[#0a0a0a] px-2.5 py-1 rounded border border-[#2a2a2a]">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2a2a2a] flex items-center justify-between text-xs font-semibold">
                {s.locked ? (
                  <div className="flex items-center gap-2 text-[#faff69]">
                    <Lock className="w-4 h-4" />
                    <span>Unlocked Live in Workshop</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-white">
                    <Check className="w-4 h-4 text-[#faff69]" />
                    <span>Core Masterclass Pillar</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
