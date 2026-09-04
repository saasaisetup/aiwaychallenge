"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How will I join the live masterclass?",
      a: "As soon as your ₹99 payment is complete, you will receive an instant confirmation email via Resend containing the direct Google Meet link and a 1-click 'Add to Google Calendar' button. We will also send you reminder emails before we go live!",
    },
    {
      q: "I am a student with no coding experience. Will I understand this?",
      a: "Absolutely! 80% of the tools covered (like NotebookLM, Gamma App, Perplexity, Napkin AI, ElevenLabs) require zero coding knowledge. For coding tools like v0 and Bolt.new, we show how to generate apps using simple English prompts.",
    },
    {
      q: "What if I miss the live session or have an emergency?",
      a: "Don't worry! All registered participants will get full access to the complete 2-hour HD recording and presentation slide deck so you can watch at your own pace.",
    },
    {
      q: "Why is this masterclass priced at only ₹99?",
      a: "Our mission is to make high-impact AI skills accessible to every student and professional in India. The ₹99 nominal fee ensures serious attendees who show up live, while keeping it affordable for everyone.",
    },
    {
      q: "Will I get the bonuses and prompt templates?",
      a: "Yes! The 50+ Mega-Prompt Vault, AI Tools Directory, and Certificate will be distributed directly to your registered email.",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] text-[#1E1410] border-t border-[#EAE2D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-[#FAF5F0] text-[#5A453B] border border-[#E7DDD5] mb-3">
            Got Questions?
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1511] tracking-tight">
            Frequently Asked{" "}
            <span className="font-serif-italic font-normal">Questions</span>
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#EDE5DE] rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50"
                >
                  <span className="font-bold text-[#1F1511] text-sm sm:text-base">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#8C6D58] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-[#635147] text-xs sm:text-sm leading-relaxed border-t border-[#F0E8E1] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
