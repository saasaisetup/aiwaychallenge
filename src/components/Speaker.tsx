import React from "react";
import { Sparkles, CheckCircle2, Award, Users } from "lucide-react";

export default function Speaker() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900 to-purple-950/40 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Avatar / Photo placeholder with glow */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-white font-extrabold text-3xl">
                  AS
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-1.5 rounded-lg border-2 border-slate-900 shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Bio Details */}
            <div className="text-center sm:text-left flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Meet Your Instructor
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Ankit Singh
              </h3>
              <p className="text-indigo-300 text-sm font-medium">
                Founder, AI Creative Studio & Tech Educator
              </p>

              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                Passionate about democratizing artificial intelligence for students,
                engineers, and professionals. Specializes in building agentic AI
                workflows, prompt architecture, and practical productivity systems that
                save real hours every week.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-lg">
                  <Users className="w-3.5 h-3.5 text-indigo-400" /> 1,000+ Mentees
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-lg">
                  <Award className="w-3.5 h-3.5 text-purple-400" /> 25+ Production AI Tools
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Live Hands-On Focus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
