import React from "react";
import { GraduationCap, Briefcase, Code, Palette, Check } from "lucide-react";

export default function Audience() {
  const audiences = [
    {
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-500",
      title: "Students & Job Seekers",
      bullets: [
        "Digest 50-page research papers and textbooks into audio podcasts in 2 mins.",
        "Craft ATS-beating resumes and tailor bullets to any job description.",
        "Practice AI-powered mock interviews with real-time feedback.",
        "Build standout project prototypes without months of coding.",
      ],
    },
    {
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
      title: "Working Professionals & Managers",
      bullets: [
        "Automate meeting notes, action items & summaries across your team.",
        "Generate 10-slide executive presentations in under 60 seconds.",
        "Analyze messy Excel sheets and create data insights effortlessly.",
        "Save 15+ hours weekly to focus on strategic high-visibility work.",
      ],
    },
    {
      icon: Code,
      color: "from-emerald-500 to-teal-500",
      title: "Developers & Tech Enthusiasts",
      bullets: [
        "Master AI IDEs like Cursor to write, refactor, and fix code 5x faster.",
        "Convert ideas into responsive full-stack apps using v0.dev & Bolt.new.",
        "Automate repetitive API endpoints, test cases, and documentation.",
        "Integrate AI agentic workflows into your existing dev toolkit.",
      ],
    },
    {
      icon: Palette,
      color: "from-amber-500 to-orange-500",
      title: "Freelancers & Content Creators",
      bullets: [
        "Create custom voiceovers, AI avatars & videos without a camera.",
        "Repurpose 1 long YouTube video into 10 viral short clips with captions.",
        "Generate custom logos, vector graphics & marketing assets on demand.",
        "Automate client pitch proposals and onboarding sequences.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Tailored For Fast Impact
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Who Will Get The Highest ROI From This?
          </p>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Whether you are starting your career or looking to become the most
            productive person in your company, this masterclass gives you the
            exact playbook.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((aud, index) => {
            const Icon = aud.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 transition-all hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${aud.color} flex items-center justify-center text-white shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{aud.title}</h3>
                </div>

                <ul className="space-y-3">
                  {aud.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="mt-1 flex-shrink-0 h-4 w-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
