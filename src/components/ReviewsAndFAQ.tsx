"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Star, ArrowRight, Sparkles } from "lucide-react";

interface ReviewsAndFAQProps {
  onOpenCheckout?: () => void;
}

export default function ReviewsAndFAQ({ onOpenCheckout }: ReviewsAndFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  // Exactly 3 Testimonials
  const reviews = [
    {
      author: "Rohan Mehta",
      role: "Final Year B.Tech Student, IIT Delhi",
      rating: 5,
      title: "Synthesized 400-Page Textbook in 15 Minutes",
      text: "I used to drown in heavy technical documentation and textbooks before exams. Ankit's prompting workflow allowed me to extract key proofs and core architectures in minutes, which directly helped me ace my technical interviews.",
      tag: "STUDENT • PLACEMENT PREP",
    },
    {
      author: "Sneha Kulkarni",
      role: "Senior Product Marketing Lead",
      rating: 5,
      title: "Executive Pitch Decks in 60 Seconds",
      text: "Building slide decks used to eat up my entire weekend. In this workshop, Ankit showed the exact Role-Context-Constraint framework. I created an 18-slide quarterly review deck in 60 seconds that my VP praised.",
      tag: "MARKETING • EXECUTIVE DECKS",
    },
    {
      author: "Aman Verma",
      role: "Full-Stack Freelance Developer",
      rating: 5,
      title: "Built 3 Client Landing Pages in 1 Weekend",
      text: "I used to spend 15-20 hours styling CSS and debugging responsive layouts. With the AI tools Ankit taught, I turned plain text briefs into live responsive sites in under 10 minutes. 10x output is 100% real.",
      tag: "FREELANCER • WEB DEV",
    },
  ];

  const faqs = [
    {
      q: "1. Do I need any coding, programming, or technical background to attend?",
      a: "No! Absolutely zero technical or coding experience is required. The masterclass is built specifically for students, non-technical professionals, and creators using intuitive natural language prompts and modern no-code AI tools.",
    },
    {
      q: "2. How and when will I receive the Google Meet link?",
      a: "Immediately upon registering for ₹99, our automated system via Resend delivers a confirmation email with your exclusive Google Meet access link, calendar invite (.ics), and 1-click Google Calendar button. We also send a reminder 1 hour before the session.",
    },
    {
      q: "3. What if I register but can't attend the live session on Sunday at 11 AM?",
      a: "All registered attendees receive full access to the high-definition masterclass recording, session transcripts, and the downloadable prompt vault within 24 hours of the workshop ending.",
    },
    {
      q: "4. How is this masterclass different from free YouTube videos and tutorials?",
      a: "Free YouTube tutorials usually show toy examples or push expensive tool subscriptions. In this masterclass, you get battle-tested production frameworks, context stacking architecture, and you will watch Ankit build live websites, 60-second slides, and micro-tools from scratch.",
    },
    {
      q: "5. Will I actually be able to build websites, slides, and apps during the 2 hours?",
      a: "Yes! Ankit builds live in front of you and provides step-by-step templates so you can follow along on your own computer. You will walk away with working prototypes ready to show immediately.",
    },
    {
      q: "6. Is this workshop useful for college students or only working professionals?",
      a: "It is engineered for both! Students learn how to synthesize 500-page textbooks, write clean research papers, and stand out in placements. Professionals learn how to eliminate 80% of daily emails, spreadsheet data entry, status reports, and presentation design.",
    },
    {
      q: "7. What specific AI tools and frameworks will be covered?",
      a: "You will learn modern LLM context stacking, rapid web builders (v0, bolt, cursor patterns), automated presentation engines (Gamma, Beautiful.ai architecture), document synthesis tools, and autonomous prompt workflow chains.",
    },
    {
      q: "8. What is the 100% Money-Back Guarantee policy?",
      a: "You are 100% protected. If you attend the masterclass and feel you didn't receive at least 10x the value of your ₹99 investment, simply email us within 24 hours for an instant, no-questions-asked refund.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#0a0a0a] text-white border-b border-[#2a2a2a] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            PART 1: 3 TESTIMONIALS (ClickHouse Surface Card Grid - Zero Green)
        ========================================================================= */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-xs font-semibold text-[#faff69] uppercase tracking-widest bg-[#1a1a1a] px-3.5 py-1 rounded-full border border-[#2a2a2a]">
              STUDENT & PRO SUCCESS STORIES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-1.5px] mt-4">
              Proven Results From <br />
              <span className="text-[#faff69]">Real Attendees</span>
            </h2>
            <p className="mt-3 text-sm text-[#cccccc]">
              Here is how students and working professionals are saving 15-20 hours every week using Ankit's frameworks.
            </p>
          </motion.div>

          {/* Exactly 3 ClickHouse Cards: 3-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#faff69]/60 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Rating & Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-3.5 h-3.5 text-[#faff69] fill-[#faff69]"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#faff69] bg-[#0a0a0a] px-2 py-0.5 rounded border border-[#2a2a2a]">
                      {rev.tag}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    "{rev.title}"
                  </h4>
                  <p className="text-xs text-[#cccccc] leading-relaxed">
                    {rev.text}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#2a2a2a]">
                  <p className="text-xs font-bold text-white">{rev.author}</p>
                  <p className="text-[11px] text-[#888888]">{rev.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Strategic Mid-Section Electric Yellow CTA Callout (Zero Green) */}
          {onOpenCheckout && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-[#121212] border border-[#2a2a2a] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
            >
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold text-[#faff69] mb-1">
                  <Sparkles className="w-4 h-4 text-[#faff69]" />
                  <span>JOIN 2,000+ HIGH-OUTPUT LEARNERS</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Ready To 10x Your Productivity With AI?
                </h3>
                <p className="text-xs sm:text-sm text-[#cccccc] mt-1">
                  Sunday, 6th September • 11:00 AM IST • Live hands-on masterclass with Ankit Singh
                </p>
              </div>
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto py-3 px-7 rounded-lg text-sm font-bold bg-[#faff69] text-[#0a0a0a] hover:bg-[#e6eb52] transition-all cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 flex-shrink-0 active:scale-95 shadow-[0_0_25px_rgba(250,255,105,0.45)]"
              >
                <span>REGISTER FOR ₹99</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </motion.div>
          )}
        </div>

        {/* =========================================================================
            PART 2: 8 FREQUENTLY ASKED QUESTIONS (ClickHouse Accordion - Zero Green)
        ========================================================================= */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-xs font-semibold text-[#faff69] uppercase tracking-widest bg-[#1a1a1a] px-3.5 py-1 rounded-full border border-[#2a2a2a]">
              CLEAR ANSWERS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-[-1.5px] mt-4">
              Frequently Asked <br />
              <span className="text-[#faff69]">Questions (8)</span>
            </h2>
            <p className="mt-3 text-sm text-[#cccccc]">
              Everything you need to know about the session, delivery, and guarantee.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.q}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] flex items-center justify-center text-[#faff69] flex-shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#cccccc] leading-relaxed border-t border-[#2a2a2a]/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
