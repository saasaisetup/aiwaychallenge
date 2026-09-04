import React from "react";
import { Star } from "lucide-react";

export default function SocialStatsDark() {
  const stats = [
    { number: "500+", label: "Students enrolled", hasStar: false },
    { number: "4.9", label: "Average rating", hasStar: true },
    { number: "98%", label: "Completion rate", hasStar: false },
    { number: "25+", label: "Tools & Workflows", hasStar: false },
  ];

  return (
    <section className="relative w-full bg-[#0B0F19] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Subtitle */}
        <p className="text-center text-xs sm:text-sm font-medium text-slate-400 italic tracking-wide mb-8">
          Trusted by students & professionals from
        </p>

        {/* Company Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300 mb-14">
          <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-300">
            Skillshare
          </span>
          <div className="flex items-center gap-1 font-bold text-lg sm:text-xl tracking-tight text-slate-300">
            <span className="h-3 w-3 rounded-full bg-indigo-500 inline-block"></span>
            <span>coursera</span>
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-300">
            LinkedIn
          </span>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-300">
            ûdemy
          </span>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-300">
            edX
          </span>
        </div>

        {/* 4 Big Metrics Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-8 border-t border-slate-800/80">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-1.5 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                {stat.hasStar && (
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 fill-amber-400 -mt-1" />
                )}
                <span>{stat.number}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
