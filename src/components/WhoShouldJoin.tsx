"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Palette, Search, CheckCircle, ChevronDown, ShieldCheck } from "lucide-react";

export default function WhoShouldJoin() {
  const personas = [
    {
      icon: GraduationCap,
      title: "Students & Academic Researchers",
      desc: "If you want to study 10x faster, synthesize massive textbooks, write cleaner research papers, and stand out in college placements.",
    },
    {
      icon: Briefcase,
      title: "Working Professionals & Managers",
      desc: "If you want to eliminate 80% of mundane daily work (emails, spreadsheets, status reports) and generate executive slides in 60 seconds.",
    },
    {
      icon: Code,
      title: "Freelancers, Developers & Solopreneurs",
      desc: "If you want to build websites, web apps, and automated workflows in minutes instead of weeks, multiplying your output without burning out.",
    },
    {
      icon: Palette,
      title: "Content Creators & Digital Marketers",
      desc: "If you want to generate high-converting presentation decks, viral content ideas, and marketing assets without expensive software suites.",
    },
    {
      icon: Search,
      title: "Career Switchers & Job Seekers",
      desc: "If you want to future-proof your resume by becoming the indispensable 'AI-powered operator' every hiring manager is competing to hire.",
    },
    {
      icon: CheckCircle,
      title: "Complete AI Beginners",
      desc: "If you feel completely overwhelmed by tools, news, and jargon, and want a simple, practical, 100% no-code action blueprint.",
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
            TARGET AUDIENCE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-1.5px] mt-4">
            Should You Join <br />
            <span className="text-[#faff69]">This Workshop?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#cccccc]">
            If you want to save 15-20 hours every single week, this is built specifically for you.
          </p>

          {/* ClickHouse Electric Yellow Divider Line & Triple Chevrons */}
          <div className="flex flex-col items-center mt-6">
            <div className="w-24 h-1 bg-[#faff69] rounded-full shadow-[0_0_12px_#faff69]" />
            <div className="flex flex-col -space-y-2 mt-2 text-[#faff69]">
              <ChevronDown className="w-5 h-5 animate-bounce" />
              <ChevronDown className="w-5 h-5 animate-bounce delay-100" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#faff69]/60 rounded-xl p-6 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] flex items-center justify-center text-[#faff69] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ClickHouse Full-Bleed Yellow Guarantee Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-[#faff69] text-[#0a0a0a] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(250,255,105,0.25)]"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0a0a0a] text-[#faff69] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0a0a0a]">
                100% No-Risk Money-Back Guarantee
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-[#0a0a0a]/80 mt-0.5">
                If we don't deliver actionable productivity leverage in 2 hours, get an instant 100% refund.
              </p>
            </div>
          </div>
          <span className="font-mono text-xs font-black uppercase bg-[#0a0a0a] text-[#faff69] px-4 py-2 rounded-lg flex-shrink-0">
            ZERO RISK • ₹99 ONLY
          </span>
        </motion.div>
      </div>
    </section>
  );
}
