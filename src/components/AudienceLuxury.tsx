import React from "react";
import { GraduationCap, Briefcase, Code, Sparkles, Check } from "lucide-react";

export default function AudienceLuxury() {
  const personas = [
    {
      icon: GraduationCap,
      badge: "Students & Job Seekers",
      title: "Crack Campus Placements & Ace Academics",
      tools: ["NotebookLM", "Perplexity", "Teal AI"],
      desc: "Turn 50-page textbooks into audio podcasts, generate cited literature reviews in minutes, and optimize your resume for ATS filters to secure interviews.",
    },
    {
      icon: Briefcase,
      badge: "Working Professionals",
      title: "Save 15+ Hours Every Single Week",
      tools: ["Gamma App", "Notion AI", "Fireflies"],
      desc: "Auto-summarize executive meetings, generate 10-slide keynote decks in under 60 seconds, and automate weekly reporting without manual data crunching.",
    },
    {
      icon: Code,
      badge: "Software Developers",
      title: "Ship Products at 5x Development Velocity",
      tools: ["Cursor AI", "v0.dev", "Bolt.new"],
      desc: "Turn raw ideas into functional full-stack web applications right in your browser. Master AI-assisted refactoring and agentic coding workflows.",
    },
    {
      icon: Sparkles,
      badge: "Creators & Freelancers",
      title: "Produce Studio-Grade Content Effortlessly",
      tools: ["ElevenLabs", "Opus Clip", "Napkin AI"],
      desc: "Repurpose 1 video into 10 viral short clips with animated captions, create realistic voiceovers without a mic, and output infographic diagrams instantly.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white text-[#1F1511] border-t border-[#EAE2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-[#FAF5F0] text-[#5A453B] border border-[#E7DDD5] mb-3">
            Who must have this course
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1511] tracking-tight">
            Built for the ambitious and the{" "}
            <span className="font-serif-italic font-normal">curious!</span>
          </h2>

          <p className="mt-4 text-[#6A574E] text-sm sm:text-base leading-relaxed">
            Whether you want to accelerate your degree, land a higher-paying job,
            or 10x your output at your current company.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-[#FAF8F5] border border-[#EDE5DE] hover:border-[#D6C7BC] rounded-[24px] p-7 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#1E1410]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#231713] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D58]">
                        {p.badge}
                      </span>
                      <h3 className="text-lg font-bold text-[#1E1410]">
                        {p.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#665348] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE1D7] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#8C6D58]">
                    Featured Tools:
                  </span>
                  {p.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[#E0D5CB] text-[#3D281E]"
                    >
                      ⚡ {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
