"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyCantYou() {
  const steps = [
    {
      num: "Step 1",
      side: "right",
      text: "Auditing & Eliminating Time-Draining Tasks in Your Daily Work",
      isHighlighted: false,
    },
    {
      num: "Step 2",
      side: "left",
      text: "Mastering Prompt Engineering & Context Chains Without Coding",
      isHighlighted: false,
    },
    {
      num: "Step 3",
      side: "right",
      text: "Building AI-Powered Websites, Apps & Executive Slides in Minutes",
      isHighlighted: false,
    },
    {
      num: "Step 4",
      side: "left",
      text: "Automating 80% of Routine Workflows, Research & Documentation",
      isHighlighted: false,
    },
    {
      num: "Step 5",
      side: "right",
      text: "[REVEALED IN WORKSHOP: THE 10X PROTOCOL]",
      isHighlighted: true,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#0a0a0a] text-white border-b border-[#2a2a2a] relative overflow-hidden">
      {/* Ambient background glow - Yellow, Zero Green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#faff69]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Headings with smooth reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-[#faff69] uppercase tracking-widest bg-[#1a1a1a] px-3.5 py-1 rounded-full border border-[#2a2a2a]">
            THE 10X PROTOCOL
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-1.5px] mt-4">
            Top Performers Are Achieving <br className="hidden sm:inline" />
            <span className="text-[#faff69]">10x Productivity & Output</span> Using AI
          </h2>

          <p className="text-xl sm:text-3xl font-extrabold text-[#cccccc] mt-3 italic tracking-tight">
            "Why Can't You?"
          </p>
        </motion.div>

        {/* Vertical Timeline Process */}
        <div className="mt-16 relative max-w-xl mx-auto">
          {/* Vertical Yellow Line down center */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-[#faff69]"
          />

          <div className="space-y-10 sm:space-y-12 relative z-10">
            {steps.map((s, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: s.side === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between w-full"
              >
                {/* Left Column Box */}
                <div className="w-[45%] text-right pr-4 sm:pr-6">
                  {s.side === "left" && (
                    <div className="p-4 sm:p-5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-slate-100 text-xs sm:text-sm font-bold shadow-md hover:border-[#faff69]/70 transition-all duration-200">
                      {s.text}
                    </div>
                  )}
                </div>

                {/* Center Node with Step Number */}
                <div className="relative flex flex-col items-center justify-center z-20">
                  <span className="text-[10px] font-mono font-bold text-slate-400 mb-1 uppercase tracking-wider whitespace-nowrap">
                    {s.num}
                  </span>
                  <div className="w-4 h-4 rounded-full bg-[#faff69] shadow-[0_0_15px_#faff69] border-2 border-black" />
                </div>

                {/* Right Column Box */}
                <div className="w-[45%] text-left pl-4 sm:pl-6">
                  {s.side === "right" && (
                    <div
                      className={`p-4 sm:p-5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all duration-200 ${
                        s.isHighlighted
                          ? "bg-[#faff69] text-[#0a0a0a] shadow-[0_0_30px_rgba(250,255,105,0.4)] border border-white"
                          : "bg-[#1a1a1a] border border-[#2a2a2a] text-slate-100 hover:border-[#faff69]/70"
                      }`}
                    >
                      {s.text}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
