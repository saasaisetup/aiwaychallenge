"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Presentation, Layers, BookOpen, ArrowRight, Zap } from "lucide-react";

export default function WhatYouCanBuild() {
  const cards = [
    {
      icon: Globe2,
      tag: "10-MIN DEPLOY",
      title: "AI-Powered Websites & Web Pages",
      desc: "Generate full responsive websites, conversion landing pages, and portfolio sites from plain English prompts without writing HTML, CSS, or JavaScript.",
      deliverable: "Live web app link ready to show clients or employers.",
    },
    {
      icon: Presentation,
      tag: "60-SEC GENERATION",
      title: "AI-Powered Presentation Slides & Decks",
      desc: "Turn rough bullet notes into polished, executive pitch decks, charts, and boardroom presentations in 60 seconds with cohesive layouts and visual styling.",
      deliverable: "Exportable PowerPoint / Keynote / PDF slides.",
    },
    {
      icon: Layers,
      tag: "NO-CODE TOOLS",
      title: "AI-Powered Custom Apps & Tools",
      desc: "Build automated calculators, task dashboards, custom AI chatbots, and software prototypes using agentic AI tools that automate internal business workflows.",
      deliverable: "Interactive micro-software apps running in the browser.",
    },
    {
      icon: BookOpen,
      tag: "CAREER MULTIPLIER",
      title: "10x Learning for Students & Pros",
      desc: "Synthesize 500-page textbooks, master complex topics in minutes, automate routine emails, spreadsheets, and reports to complete 8 hours of work in 45 mins.",
      deliverable: "Personal autonomous daily workflow engine.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#0a0a0a] text-white border-b border-[#2a2a2a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ClickHouse Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-[#faff69] uppercase tracking-widest bg-[#1a1a1a] px-3.5 py-1 rounded-full border border-[#2a2a2a]">
            TANGIBLE OUTPUTS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-1.5px] mt-4">
            After This Workshop, You'll Be <br />
            <span className="text-[#faff69]">Able To Build & 10x</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#cccccc]">
            Real skills you will learn, see built live, and use every single day in your career.
          </p>
        </motion.div>

        {/* ClickHouse Feature Cards Grid: 2x2 with #1a1a1a surface and #2a2a2a hairline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#faff69]/60 rounded-xl p-6 sm:p-8 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] flex items-center justify-center text-[#faff69] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#faff69] bg-[#0a0a0a] px-2.5 py-1 rounded border border-[#2a2a2a]">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#faff69] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#cccccc] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2a2a2a] flex items-center justify-between text-xs font-semibold text-[#888888] group-hover:text-white transition-colors">
                  <span>{card.deliverable}</span>
                  <ArrowRight className="w-4 h-4 text-[#faff69] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
