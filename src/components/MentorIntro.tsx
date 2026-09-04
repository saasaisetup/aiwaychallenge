"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Code2, Sparkles, ArrowRight } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
    </svg>
  );
}

export default function MentorIntro() {
  return (
    <section className="py-16 sm:py-24 bg-[#05090C] text-white border-t border-slate-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black text-[#00E575] uppercase tracking-widest bg-emerald-950/80 px-4 py-1 rounded-full border border-emerald-500/40">
            MEET YOUR HOST & INSTRUCTOR
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
            Hi, I'm <span className="grad2 font-black">Ankit Singh</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium">
            AI Technologist, Productivity Architect & Founder
          </p>
        </div>

        <div className="bg-[#0C1217] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(0,229,117,0.15)] flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Ankit Photo Container */}
          <div className="relative flex-shrink-0">
            <div className="w-44 h-48 sm:w-52 sm:h-56 rounded-3xl overflow-hidden border-2 border-[#00E575] shadow-[0_0_30px_rgba(0,229,117,0.4)] bg-slate-900 relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                alt="Ankit Singh"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-md rounded-xl py-1 px-2 border border-emerald-500/40 text-center">
                <span className="text-[10px] font-extrabold text-[#00E575] uppercase tracking-wider">
                  Lead Instructor
                </span>
              </div>
            </div>

            {/* LinkedIn Verification Badge */}
            <a
              href="https://www.linkedin.com/in/ankit-singh-63022b3a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0077B5] text-white text-[11px] font-bold shadow-lg hover:scale-105 transition-transform"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Ankit Story & Value Delivery */}
          <div className="flex-1 text-left space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              I'm here to show you how to do{" "}
              <span className="text-[#00E575]">8 hours of work in 45 minutes</span> using AI.
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Over the last few years, I have helped thousands of students and working professionals eliminate the boring, repetitive grind in their daily lives. Most people use AI like a glorified search engine — asking questions and getting generic paragraphs.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              In this live masterclass, I will teach you the exact mental models, prompt architectures, and autonomous AI workflows I use every day to build full websites in 10 minutes, generate professional presentation decks in 60 seconds, write clean code, and learn complex topics 10x faster.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black/50 border border-slate-800">
                <Zap className="w-4 h-4 text-[#00E575] flex-shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">10x Speed for Everyday Work</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black/50 border border-slate-800">
                <Code2 className="w-4 h-4 text-[#00e5ff] flex-shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">Build Apps & Sites Without Code</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black/50 border border-slate-800">
                <Sparkles className="w-4 h-4 text-[#00ff9d] flex-shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">Executive Presentations & Reports</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black/50 border border-slate-800">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">100% Practical Live Building</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
