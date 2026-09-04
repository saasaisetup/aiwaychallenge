"use client";

import React, { useState } from "react";
import { X, Sparkles, Check, ArrowRight } from "lucide-react";

interface ToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export default function ToolsModal({
  isOpen,
  onClose,
  onOpenCheckout,
}: ToolsModalProps) {
  const [activeTab, setActiveTab] = useState("all");

  if (!isOpen) return null;

  const categories = [
    { id: "all", label: "All 25+ Tools" },
    { id: "research", label: "Research & Learning" },
    { id: "coding", label: "Coding & Dev" },
    { id: "design", label: "Design & Slides" },
    { id: "media", label: "Video & Audio" },
  ];

  const tools = [
    {
      name: "NotebookLM",
      cat: "research",
      tag: "Google AI",
      desc: "Converts long PDFs and lecture notes into interactive 2-host audio podcasts.",
    },
    {
      name: "Perplexity AI",
      cat: "research",
      tag: "Deep Search",
      desc: "Real-time web-grounded research with academic citations.",
    },
    {
      name: "Claude 3.5 Sonnet",
      cat: "research",
      tag: "Anthropic",
      desc: "Top-ranked LLM for complex logical reasoning, synthesis, and code.",
    },
    {
      name: "Cursor AI",
      cat: "coding",
      tag: "IDE",
      desc: "AI code editor that understands your entire codebase and edits multi-files.",
    },
    {
      name: "v0.dev",
      cat: "coding",
      tag: "Vercel",
      desc: "Generates production-grade React & Tailwind UI directly from plain text.",
    },
    {
      name: "Bolt.new",
      cat: "coding",
      tag: "Full-Stack",
      desc: "Builds, installs dependencies, and deploys full-stack apps in-browser.",
    },
    {
      name: "Gamma App",
      cat: "design",
      tag: "Presentations",
      desc: "Generates polished 10-slide keynote decks and webpages in 30 seconds.",
    },
    {
      name: "Napkin AI",
      cat: "design",
      tag: "Visuals",
      desc: "Turns raw bullet points into editable infographic diagrams instantly.",
    },
    {
      name: "ElevenLabs",
      cat: "media",
      tag: "Voice AI",
      desc: "Studio-grade voice cloning and emotional AI text-to-speech.",
    },
    {
      name: "Opus Clip",
      cat: "media",
      tag: "Video",
      desc: "Turns 1 long YouTube video into 10 viral vertical short reels with subtitles.",
    },
  ];

  const filtered =
    activeTab === "all" ? tools : tools.filter((t) => t.cat === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E7DDD5] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FAF5F0] text-[#5A453B] border border-[#E7DDD5] mb-2">
            Live Demo Curriculum
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1410]">
            AI Tools Demonstrated Live
          </h3>
          <p className="text-xs sm:text-sm text-[#6A574E] mt-1">
            Every tool is demonstrated with real problem-solving workflows during the 2-hour session.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === c.id
                  ? "bg-[#231713] text-white"
                  : "bg-[#F7F2EE] text-[#5A453B] hover:bg-[#EFE8E0]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Tool Cards Scroll */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filtered.map((t, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE7DF] flex items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm text-[#1E1410]">{t.name}</h4>
                  <span className="text-[10px] font-semibold text-[#8C6D58] bg-white px-2 py-0.5 rounded-full border border-[#E5DAD1]">
                    {t.tag}
                  </span>
                </div>
                <p className="text-xs text-[#6A574E] mt-1">{t.desc}</p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex-shrink-0">
                Live Demo ✓
              </span>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-[#EAE2D9] flex items-center justify-between gap-4">
          <div className="text-xs text-[#6A574E]">
            Ticket Price: <strong className="text-[#1E1410] text-sm">₹99 Only</strong>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#231713] hover:bg-[#3B2822] transition-all cursor-pointer shadow-sm"
          >
            Register for ₹99 Now
          </button>
        </div>
      </div>
    </div>
  );
}
