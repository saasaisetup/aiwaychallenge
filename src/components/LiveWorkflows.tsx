import React from "react";
import { Workflow, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LiveWorkflows() {
  const workflows = [
    {
      badge: "Workflow #1: Deep Research Engine",
      title: "From 100-Page PDF to Executive Audio Brief & Visual Report in 4 Mins",
      tools: ["NotebookLM", "Perplexity AI", "Napkin AI"],
      desc: "Watch us ingest long research papers, generate a natural 2-person podcast conversation summarizing core insights, and output high-res infographic diagrams ready to present.",
      result: "Saves 4+ hours of manual reading & summarization per paper.",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/40",
    },
    {
      badge: "Workflow #2: Zero-Code Prototype",
      title: "From Rough Napkin Idea to Functional Full-Stack Web App in 5 Mins",
      tools: ["v0.dev", "Bolt.new", "Claude 3.5 Sonnet"],
      desc: "Watch us describe a business software tool in plain English, have AI build the entire frontend, wire up real state management, and deploy a live working link right in front of your eyes.",
      result: "Build and test MVPs in minutes without hiring expensive developers.",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/40",
    },
    {
      badge: "Workflow #3: 10x Content Machine",
      title: "From Raw Topic to Complete 10-Slide Deck + 3 Video Reels in 6 Mins",
      tools: ["Gamma App", "Recraft.ai", "ElevenLabs", "Opus Clip"],
      desc: "Watch us generate a polished 10-slide keynote presentation with custom AI imagery, create an emotional studio voiceover, and output 3 vertical video clips with animated captions.",
      result: "Replaces days of slide designing and manual video editing.",
      color: "from-amber-500/20 to-emerald-500/20",
      borderColor: "border-amber-500/40",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>REAL-WORLD APPLICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            3 Game-Changing Workflows Built Live
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Instead of just listing tools, you will see how to connect multiple
            AI tools together into automated end-to-end pipelines.
          </p>
        </div>

        <div className="space-y-8">
          {workflows.map((wf, i) => (
            <div
              key={i}
              className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${wf.color} border ${wf.borderColor} backdrop-blur-sm relative overflow-hidden`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-950/80 border border-indigo-700/50 px-3 py-1 rounded-full">
                    {wf.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
                    {wf.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                    {wf.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    <span className="text-xs text-slate-400 font-semibold">
                      Tools Used:
                    </span>
                    {wf.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-200"
                      >
                        ⚡ {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:text-right border-t lg:border-t-0 lg:border-l border-slate-700/60 pt-4 lg:pt-0 lg:pl-6 flex-shrink-0">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-3 py-1.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{wf.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
