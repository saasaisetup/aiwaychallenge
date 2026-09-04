"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react";

interface SuccessStoriesProps {
  onOpenCheckout: () => void;
}

export default function SuccessStories({ onOpenCheckout }: SuccessStoriesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: "Michael Johnson",
      role: "Data Scientist at Insight",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      quote:
        "Learning NotebookLM & Cursor gave me the edge during campus placements. Replaced manual analysis in minutes.",
    },
    {
      name: "James Wilson",
      role: "ML Engineer at TechNova AI",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      quote:
        "The prompt architecture framework completely changed how I build prototypes with Claude and Gemini.",
    },
    {
      name: "Sophia Martinez",
      role: "AI Product Engineer at FutureMind",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
      quote:
        "I built our team's entire marketing presentation stack with Gamma and v0 in one weekend.",
    },
    {
      name: "Olivia Bennett",
      role: "Generative AI Lead",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      quote:
        "This masterclass isn't theoretical jargon. It gives you actionable workflows you apply on Monday morning.",
    },
    {
      name: "Aarav Patel",
      role: "Product Analyst at TechScale",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      quote:
        "The ATS resume prompt alone got me 4 interview callbacks within two weeks. Absolutely worth every rupee.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F2] text-[#1E1410] overflow-hidden border-t border-[#EAE2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-[#EFE8E0] text-[#5A453B] border border-[#DDD3C7] mb-3">
            Student Success Stories
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1511] tracking-tight">
            From learning AI to building{" "}
            <span className="font-serif-italic font-normal">real careers</span>
          </h2>

          <p className="mt-4 text-[#68554B] text-sm sm:text-base leading-relaxed">
            Meet learners who turned practical AI skills into real opportunities
            across startups, enterprises, and high-growth tech companies.
          </p>
        </div>

        {/* Stories Grid / Cards Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stories.slice(0, 4).map((story, i) => (
            <div
              key={i}
              className="group relative h-[380px] rounded-[24px] overflow-hidden shadow-lg border border-[#E7DDD5] bg-[#1E1410]"
            >
              {/* Image */}
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay matching screenshot */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {story.name}
                </h3>
                <p className="text-xs text-stone-300 font-medium flex items-center gap-1 mt-0.5">
                  <Briefcase className="w-3 h-3 text-[#D8BDB0]" />
                  <span>{story.role}</span>
                </p>
                <p className="text-[11px] text-stone-300/80 mt-2 line-clamp-2 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA & Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#D9CBC1] bg-white hover:bg-[#F3ECE5] text-[#2E1F18] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCheckout}
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#231713] hover:bg-[#3B2822] transition-all shadow-md shadow-[#231713]/20 active:scale-95 cursor-pointer"
          >
            Book your seat now!
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#D9CBC1] bg-white hover:bg-[#F3ECE5] text-[#2E1F18] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
            aria-label="Next story"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
