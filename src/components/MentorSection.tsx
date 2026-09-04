"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
    </svg>
  );
}

export default function MentorSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#0a0a0a] text-white border-b border-[#2a2a2a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-[#faff69] uppercase tracking-widest bg-[#1a1a1a] px-3.5 py-1 rounded-full border border-[#2a2a2a]">
            YOUR WORKSHOP INSTRUCTOR
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-1.5px] mt-4">
            Know Your Mentor <br />
            <span className="text-[#faff69]">Ankit Singh</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#cccccc] font-normal">
            AI Technologist, Systems Architect & Founder of AIWAY Challenge
          </p>
        </motion.div>

        {/* Sole Mentor Card: Ankit Singh with User's Photo & ClickHouse Card System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 sm:p-10 shadow-[0_0_50px_rgba(250,255,105,0.1)]"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-6">
            {/* Real User Photo with clean border */}
            <div className="w-40 h-44 sm:w-48 sm:h-52 rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#0a0a0a] flex-shrink-0 relative">
              <img
                src="/ankit-singh.jpg"
                alt="Ankit Singh - AI Mentor"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#faff69] text-[10px] font-bold text-[#0a0a0a] font-mono uppercase">
                Founder
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Ankit Singh</h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#faff69] mt-0.5">
                    AI Systems Architect & Applied GenAI Specialist
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/ankit-singh-63022b3a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0077B5] hover:bg-[#006097] text-white text-xs font-bold transition-all shadow-md self-center sm:self-start hover:scale-105 active:scale-95"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed mt-4">
                Hi, I'm <strong className="text-white">Ankit Singh</strong>. I'm an AI technologist dedicated to bridging the gap between theoretical AI hype and real, practical leverage. Over the past few years, I have architected custom autonomous agent systems, AI workflows, and software tools that eliminate the endless daily grind.
              </p>

              <div className="my-5 pt-3 border-t border-[#2a2a2a] flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="text-xs font-mono text-[#cccccc] bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-md">
                  ⚡ 10x Daily Productivity
                </span>
                <span className="text-xs font-mono text-[#cccccc] bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-md">
                  🌐 AI Websites & Apps in 10 Mins
                </span>
                <span className="text-xs font-mono text-[#cccccc] bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-md">
                  📊 60-Second Slide Generation
                </span>
                <span className="text-xs font-mono text-[#cccccc] bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-md">
                  🎓 10x Accelerated Learning
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                I designed the <strong className="text-white">AIWAY Challenge</strong> specifically for students and working professionals who don't have months to learn coding or complex machine learning math. In just 2 hours, you will watch me build live applications, generate executive presentations, and automate daily tasks that would otherwise take days of manual labor.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] text-xs sm:text-sm font-medium text-[#cccccc] flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#faff69] flex-shrink-0" />
            <span>
              100% practical execution, zero boring fluff. You walk away with ready-to-use AI workflows you can plug into your studies or job immediately.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
