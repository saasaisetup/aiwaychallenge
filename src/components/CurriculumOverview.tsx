import React from "react";
import {
  Compass,
  Sliders,
  Workflow,
  BarChart3,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function CurriculumOverview() {
  const modules = [
    {
      icon: Compass,
      title: "AI Foundations",
      desc: "Understand how modern AI systems work, no coding required. Build real intuition for LLMs, diffusion models, and agents.",
      tag: "Module 1",
    },
    {
      icon: Sliders,
      title: "Prompt Engineering",
      desc: "Master advanced prompting techniques (RTFC framework) that turn ChatGPT, Claude, and Gemini into reliable productivity powerhouses.",
      tag: "Module 2",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      desc: "Build end-to-end AI workflows that automate repetitive tasks and reclaim 15+ hours per week, starting day one.",
      tag: "Module 3",
    },
    {
      icon: BarChart3,
      title: "AI for Data & Research",
      desc: "Analyse markets, synthesise 50-page research papers, and generate insights in minutes using AI-powered data tools like NotebookLM & Perplexity.",
      tag: "Module 4",
    },
    {
      icon: Sparkles,
      title: "Content & Creativity",
      desc: "Produce professional-grade writing, visuals, and presentations at a pace that feels almost unfair with Gamma, Napkin AI & ElevenLabs.",
      tag: "Module 5",
    },
    {
      icon: TrendingUp,
      title: "Career Strategy",
      desc: "Position yourself as the AI-fluent expert every hiring manager and client is desperately looking for right now with optimized resumes & portfolios.",
      tag: "Module 6",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white text-[#1F1511] border-t border-[#EAE2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-[#FAF5F0] text-[#5A453B] border border-[#E7DDD5] mb-3">
            Curriculum Overview
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1511] tracking-tight">
            Everything you need to{" "}
            <span className="font-serif-italic font-normal">master AI</span>
          </h2>

          <p className="mt-4 text-[#6A574E] text-sm sm:text-base leading-relaxed">
            Six focused modules. Zero fluff. Practical skills you can apply this week.
          </p>
        </div>

        {/* 6 Minimalist Clean White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <div
                key={i}
                className="bg-[#FAF8F5] border border-[#EDE5DE] hover:border-[#D6C7BC] rounded-[24px] p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#1E1410]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-[#E5DAD1] text-[#2E1F18] flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-[#3D281E]" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#8C6D58] bg-white px-2.5 py-1 rounded-full border border-[#E8DED6]">
                      {mod.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1E1410] mb-2.5">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#665348] leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE1D7] flex items-center justify-between text-[11px] text-[#8C6D58] font-medium">
                  <span>Live 2-Hour Coverage</span>
                  <span>Included ✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
