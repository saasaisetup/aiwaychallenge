"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Code2,
  FileText,
  Video,
  Cpu,
  UserCheck,
  ExternalLink,
} from "lucide-react";

export default function ToolsGrid() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All 25+ Tools" },
    { id: "research", label: "Research & Learning" },
    { id: "coding", label: "Coding & Dev" },
    { id: "design", label: "Design & Slides" },
    { id: "productivity", label: "Productivity & Auto" },
    { id: "media", label: "Video & Audio" },
    { id: "career", label: "Career & Placement" },
  ];

  const tools = [
    {
      name: "NotebookLM",
      category: "research",
      tag: "Google AI",
      desc: "Turn 50-page PDFs and notes into interactive AI podcasts and instant summaries.",
    },
    {
      name: "Perplexity AI",
      category: "research",
      tag: "Deep Search",
      desc: "Web-grounded conversational search engine with exact citations.",
    },
    {
      name: "Claude 3.5 Sonnet",
      category: "research",
      tag: "Anthropic",
      desc: "Highest IQ model for complex reasoning, long document synthesis, and code.",
    },
    {
      name: "Consensus",
      category: "research",
      tag: "Academic",
      desc: "Search 200M+ peer-reviewed scientific papers with consensus meters.",
    },
    {
      name: "Cursor AI",
      category: "coding",
      tag: "AI Code Editor",
      desc: "Whole-codebase AI assistant that edits multiple files simultaneously.",
    },
    {
      name: "v0.dev",
      category: "coding",
      tag: "Vercel",
      desc: "Generate production-ready React & Tailwind UI components from simple prompts.",
    },
    {
      name: "Bolt.new",
      category: "coding",
      tag: "Full-Stack Web",
      desc: "Prompt, build, and deploy entire full-stack web applications in your browser.",
    },
    {
      name: "Claude Artifacts",
      category: "coding",
      tag: "Interactive UI",
      desc: "Generate functional React widgets, charts, and games instantly in chat.",
    },
    {
      name: "Gamma App",
      category: "design",
      tag: "Presentations",
      desc: "Generate styled 10-slide decks and webpages from raw prompts in 30 seconds.",
    },
    {
      name: "Napkin AI",
      category: "design",
      tag: "Infographics",
      desc: "Turn bullet points and text into beautiful editable diagrams & charts.",
    },
    {
      name: "Recraft.ai",
      category: "design",
      tag: "Vector & 3D",
      desc: "Generate consistent vector graphics, SVGs, icons, and 3D illustrations.",
    },
    {
      name: "Canva Magic Studio",
      category: "design",
      tag: "Design Suite",
      desc: "AI-powered image resizing, object erasing, and automated social templates.",
    },
    {
      name: "Notion AI",
      category: "productivity",
      tag: "Workspace",
      desc: "Extract action items, generate meeting summaries, and organize project docs.",
    },
    {
      name: "Otter.ai / Fireflies",
      category: "productivity",
      tag: "Meetings",
      desc: "Auto-join Google Meet & Zoom to record, transcribe, and extract tasks.",
    },
    {
      name: "Make.com",
      category: "productivity",
      tag: "Automation",
      desc: "Connect AI to Gmail, Google Sheets, Slack, and Notion without writing code.",
    },
    {
      name: "ElevenLabs",
      category: "media",
      tag: "Voice AI",
      desc: "Industry-standard voice synthesis, voice cloning, and audio dubbing.",
    },
    {
      name: "Opus Clip",
      category: "media",
      tag: "Video Repurposing",
      desc: "Turn 1 long YouTube video into 10 viral short reels with dynamic captions.",
    },
    {
      name: "HeyGen",
      category: "media",
      tag: "AI Avatars",
      desc: "Create realistic video spokesperson videos from text scripts without a camera.",
    },
    {
      name: "Kling AI / Runway",
      category: "media",
      tag: "Generative Video",
      desc: "Create cinematic text-to-video and image-to-video animations.",
    },
    {
      name: "Suno AI",
      category: "media",
      tag: "Audio Generation",
      desc: "Generate full studio-quality music, background tracks, and vocals.",
    },
    {
      name: "Teal HQ",
      category: "career",
      tag: "Resume Optimization",
      desc: "AI resume tailoring that matches your profile against target job descriptions.",
    },
    {
      name: "Google Interview Warmup",
      category: "career",
      tag: "Mock Interviews",
      desc: "Practice interview questions with real-time AI feedback on your answers.",
    },
    {
      name: "Careerflow.ai",
      category: "career",
      tag: "LinkedIn AI",
      desc: "Optimize LinkedIn headline, summary, and experience to attract recruiters.",
    },
  ];

  const filteredTools =
    activeTab === "all"
      ? tools
      : tools.filter((t) => t.category === activeTab);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Curated 2026 Arsenal
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 25+ AI Tools You Will Master Live
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            No fluff or low-quality toys. We will cover only the highest-leverage
            tools tested and proven in real workflows.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              className="bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-5 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base text-white group-hover:text-indigo-400 transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {tool.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Live Demo Included</span>
                <span className="text-emerald-400 font-semibold">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
