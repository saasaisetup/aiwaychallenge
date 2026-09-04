import React from "react";
import { Clock, CheckCircle } from "lucide-react";

export default function Curriculum() {
  const stages = [
    {
      time: "00:00 - 00:10 (10 Mins)",
      title: "Stage 1: Kickoff & The AI Landscape in 2026",
      desc: "Why traditional work methods are obsolete, and how the top 1% leverage AI tools as high-powered co-pilots.",
    },
    {
      time: "00:10 - 00:30 (20 Mins)",
      title: "Stage 2: The 'RTFC' Prompt Architecture",
      desc: "The universal prompt formula: Role, Task, Format, Constraints. Turn generic answers into executive-grade results.",
    },
    {
      time: "00:30 - 01:15 (45 Mins)",
      title: "Stage 3: The 25+ AI Tool Blitzkrieg (Live Hands-On)",
      desc: "Fast-paced, live demonstrations across Research, Coding, Presentation Design, Meeting Automation & Video creation.",
    },
    {
      time: "01:15 - 01:35 (20 Mins)",
      title: "Stage 4: 3 End-to-End Live Automated Workflows",
      desc: "Building a full research summary, zero-code web app, and presentation blitz in real-time.",
    },
    {
      time: "01:35 - 02:00 (25 Mins)",
      title: "Stage 5: Career Edge, Bonus Unlock & Live Q&A",
      desc: "Resume optimization tactics, portfolio strategy, prompt vault distribution, and live interactive Q&A.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Step-By-Step Run of Show
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 120-Minute Masterclass Agenda
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Every minute is packed with actionable insights. No wasted time.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-10 py-4">
          {stages.map((stage, i) => (
            <div key={i} className="relative pl-6 sm:pl-8 group">
              {/* Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors" />

              {/* Time pill */}
              <div className="sm:absolute sm:-left-32 sm:top-1 text-xs font-bold text-indigo-400 font-mono mb-1 sm:mb-0 sm:text-right sm:w-24">
                {stage.time}
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 group-hover:border-slate-700 transition-all">
                <h3 className="font-bold text-white text-base sm:text-lg">
                  {stage.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
