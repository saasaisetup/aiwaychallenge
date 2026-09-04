import React from "react";
import { Gift, FileText, Database, Video, Award, Check } from "lucide-react";

export default function Bonuses() {
  const bonuses = [
    {
      icon: FileText,
      tag: "Bonus #1",
      title: "50+ Copy-Paste Mega-Prompts Vault",
      desc: "Battle-tested prompts for Claude, ChatGPT & Gemini for research, resume optimization, coding, and presentations.",
      value: "₹1,499 Value",
    },
    {
      icon: Database,
      tag: "Bonus #2",
      title: "2026 AI Tools Directory & Direct Bookmarks",
      desc: "Curated collection of 100+ categorized AI tools with free-tier notes, links, and productivity ratings.",
      value: "₹999 Value",
    },
    {
      icon: Video,
      tag: "Bonus #3",
      title: "Full Session Recording & Slide Deck",
      desc: "Lifetime access to the complete 2-hour recording and presentation slides so you can rewatch anytime.",
      value: "₹1,999 Value",
    },
    {
      icon: Award,
      tag: "Bonus #4",
      title: "Certificate of Participation",
      desc: "A verified digital certificate you can showcase directly on your LinkedIn profile and resume.",
      value: "₹500 Value",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 border border-pink-500/30 text-pink-400 mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>EXCLUSIVE VALUE STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Free Bonuses Included With Your ₹99 Ticket
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            You get immediate access to over <strong className="text-white">₹4,999 worth of resources</strong> the moment you attend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex gap-5 items-start"
              >
                <div className="h-12 w-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-pink-400 uppercase tracking-wider">
                      {b.tag}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/40 px-2 py-0.5 rounded">
                      {b.value} (FREE)
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
