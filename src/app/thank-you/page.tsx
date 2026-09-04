"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  Sparkles,
  Download,
  Mail,
  Video,
  ArrowRight,
  Shield,
  Star,
  Zap,
  Crown,
  Check,
  RefreshCw,
  MessageCircle,
} from "lucide-react";
import { getGoogleCalendarUrl, getICSFileContent, CalendarEvent } from "@/lib/calendar";
import CheckoutModal from "@/components/CheckoutModal";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Valued Attendee";
  const email = searchParams.get("email") || "emdeveloperankit@gmail.com";
  const paymentId = searchParams.get("paymentId") || searchParams.get("payment_id") || "PAY_CONFIRMED";

  const [upsellModal, setUpsellModal] = useState<{
    isOpen: boolean;
    price: number;
    title: string;
  }>({
    isOpen: false,
    price: 1999,
    title: "VIP Upgrade: 4-Week AI Mastery Cohort + 1:1 Mentorship",
  });

  const [resendingEmail, setResendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const webinarTitle =
    process.env.NEXT_PUBLIC_WEBINAR_TITLE ||
    "AIWAY CHALLENGE: 10x Your Productivity Just By Using AI Masterclass";
  const startTime =
    process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-09-06T11:00:00+05:30";
  const duration = parseInt(
    process.env.NEXT_PUBLIC_WEBINAR_DURATION_MINS || "120",
    10
  );
  const meetUrl =
    process.env.NEXT_PUBLIC_WEBINAR_MEET_URL ||
    "https://meet.google.com/abc-defg-hij";

  const event: CalendarEvent = {
    title: webinarTitle,
    description: `Live AI Masterclass: 25+ AI tools to 10x your productivity & career with Ankit Singh.\n\nJoin Link: ${meetUrl}`,
    location: meetUrl,
    startTime: startTime,
    durationMinutes: duration,
  };

  const googleCalendarUrl = getGoogleCalendarUrl(event);

  const downloadICS = () => {
    const icsContent = getICSFileContent(event);
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "AIWAY-Masterclass-Invite.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResendEmail = async () => {
    setResendingEmail(true);
    setEmailStatus(null);
    try {
      const res = await fetch("/api/resend/resend-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          paymentId,
          amount: 99,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setEmailStatus("✓ Ticket resent successfully! Please check your Inbox and Spam folder.");
      } else {
        setEmailStatus(`Notice: ${data.error || "Please check your spam/promotions folder."}`);
      }
    } catch {
      setEmailStatus("Notice: Check your spam or promotions tab for the ticket.");
    } finally {
      setResendingEmail(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#090804] text-[#fef3c7] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#ffd700] selection:text-black">
      {/* Ambient Luxury Gold Light Blooms */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#ffd700]/15 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#f5c542]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* ---------------------------------------------------- */}
        {/* 1. SUCCESS CONFIRMATION CARD (Luxury Golden Theme) */}
        {/* ---------------------------------------------------- */}
        <div className="bg-gradient-to-b from-[#1a1505] via-[#120e03] to-[#0d0a02] border-2 border-[#f5c542]/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(245,197,66,0.18)] relative overflow-hidden mb-10">
          <div className="text-center max-w-2xl mx-auto">
            {/* Gold Checkmark Badge */}
            <div className="h-16 w-16 bg-[#ffd700]/15 border-2 border-[#ffd700]/50 text-[#ffd700] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(255,215,0,0.3)]">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffd700] bg-[#ffd700]/15 border border-[#ffd700]/40 px-3.5 py-1 rounded-full">
              Registration Confirmed
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 font-mono tracking-tight">
              You're In, <span className="text-[#ffd700]">{name}</span>! 🚀
            </h1>
            <p className="text-[#e2d5b4] text-sm sm:text-base mt-2">
              We have dispatched your live ticket, Google Meet access, and calendar invite to:{" "}
              <strong className="text-[#ffd700] underline decoration-[#ffd700]/50">{email}</strong>
            </p>
          </div>

          {/* Email Notification & Resend Button */}
          <div className="mt-6 p-4 rounded-xl bg-[#141003] border border-[#f5c542]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#e2d5b4]">
              <Mail className="w-4 h-4 text-[#ffd700] flex-shrink-0" />
              <span>
                <strong>Email Delivery Note:</strong> Check your <strong>Spam</strong> or <strong>Promotions</strong> folder if the ticket doesn't appear in your Primary inbox.
              </span>
            </div>
            <button
              onClick={handleResendEmail}
              disabled={resendingEmail}
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#ffd700]/15 hover:bg-[#ffd700]/25 text-[#ffd700] border border-[#ffd700]/40 font-bold transition-all cursor-pointer text-xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${resendingEmail ? "animate-spin" : ""}`} />
              <span>{resendingEmail ? "Sending..." : "Resend Email"}</span>
            </button>
          </div>
          {emailStatus && (
            <p className="mt-2 text-xs font-semibold text-[#ffd700] text-center animate-fade-in">
              {emailStatus}
            </p>
          )}

          {/* Action Boxes: Calendar, Meet, and ICS */}
          <div className="mt-7 p-6 bg-[#161205] border border-[#f5c542]/30 rounded-2xl">
            <h3 className="text-sm sm:text-base font-bold text-white mb-4 flex items-center gap-2 font-mono">
              <Calendar className="w-4 h-4 text-[#ffd700]" />
              <span>Step 1: Never Miss The Session (Add to Calendar)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Primary Gold: Add to Google Calendar */}
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#f5c542] via-[#ffd700] to-[#e6b800] text-[#0a0a0a] text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(245,197,66,0.4)] hover:shadow-[0_0_45px_rgba(245,197,66,0.7)] hover:brightness-105 active:scale-95"
              >
                <Calendar className="w-4 h-4 stroke-[2.5]" />
                <span>Add to Calendar (1-Click)</span>
              </a>

              {/* Direct Meet Link */}
              <a
                href={meetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#1f1906] hover:bg-[#ffd700] text-[#ffd700] hover:text-[#0a0a0a] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all border-2 border-[#ffd700] shadow-[0_0_20px_rgba(245,197,66,0.2)] active:scale-95"
              >
                <Video className="w-4 h-4" />
                <span>Direct Google Meet Link</span>
              </a>

              {/* Download Apple / Outlook (.ics) */}
              <button
                onClick={downloadICS}
                className="px-5 py-3.5 rounded-xl bg-[#141003] hover:bg-[#221b06] text-[#e2d5b4] hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all border border-[#f5c542]/40 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#ffd700]" />
                <span>Download .ics File</span>
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#b8a984] gap-2 border-t border-[#2a2107] pt-4 font-mono">
            <span>Payment ID: <code className="text-[#ffd700] font-bold">{paymentId}</code></span>
            <span>Date &amp; Time: Sunday, 6th Sept • 11:00 AM IST</span>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. COURSE UPGRADE 1: ₹1,999 4-Week AI Mastery Cohort */}
        {/* ---------------------------------------------------- */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#1e1705] via-[#120e03] to-[#0a0802] border-2 border-[#f5c542]/60 p-6 sm:p-10 shadow-[0_0_60px_rgba(245,197,66,0.2)] overflow-hidden mb-10">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ffd700] to-[#f5c542] text-[#0a0a0a] text-[11px] font-black uppercase tracking-wider py-1.5 px-6 rounded-bl-2xl shadow-lg">
            ⚡ Special One-Time Offer • Save 80%
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ffd700]/15 border border-[#ffd700]/40 text-[#ffd700] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COHORT UPGRADE EXPERIENCE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-serif">
              Want 1:1 Mentorship &amp; Deep-Dive Mastery? Upgrade to the{" "}
              <span className="text-[#ffd700] underline decoration-[#ffd700]/40">
                4-Week AI Mastery Cohort (₹1,999)
              </span>
            </h2>

            <p className="text-[#d8cca8] text-sm sm:text-base mt-3 leading-relaxed">
              While the ₹99 masterclass gives you the high-level roadmap, the
              <strong className="text-[#ffd700]"> 4-Week AI Mastery Cohort</strong> gives you personalized 1:1 project
              reviews, custom resume overhaul, and private weekly masterminds with Ankit Singh.
            </p>

            {/* Value Stack in Golden Glass */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#141003]/90 border border-[#f5c542]/30 flex items-start gap-3">
                <div className="p-1 rounded bg-[#ffd700]/20 text-[#ffd700] mt-0.5">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    1:1 AI Resume &amp; Portfolio Audit
                  </h4>
                  <p className="text-[11px] text-[#b8a984]">
                    Personalized feedback to get shortlisted for high-paying remote roles.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141003]/90 border border-[#f5c542]/30 flex items-start gap-3">
                <div className="p-1 rounded bg-[#ffd700]/20 text-[#ffd700] mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    4 Live Weekly Build Sessions
                  </h4>
                  <p className="text-[11px] text-[#b8a984]">
                    Build 4 full-stack AI applications and autonomous agents together.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141003]/90 border border-[#f5c542]/30 flex items-start gap-3">
                <div className="p-1 rounded bg-[#ffd700]/20 text-[#ffd700] mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Private VIP Community Access
                  </h4>
                  <p className="text-[11px] text-[#b8a984]">
                    Direct access to ask questions anytime and network with high performers.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141003]/90 border border-[#f5c542]/30 flex items-start gap-3">
                <div className="p-1 rounded bg-[#ffd700]/20 text-[#ffd700] mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Full AI Source Code Vault
                  </h4>
                  <p className="text-[11px] text-[#b8a984]">
                    GitHub repos and automation workflows ready to deploy commercially.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4.5 bg-[#141003] border-2 border-[#f5c542]/40 rounded-2xl">
              <div>
                <p className="text-xs text-[#b8a984]">Regular Cohort Fee: <span className="line-through">₹9,999</span></p>
                <p className="text-2xl font-black text-white font-mono flex items-baseline gap-2">
                  <span className="text-[#ffd700]">₹1,999</span>
                  <span className="text-xs text-[#0a0a0a] font-bold bg-[#ffd700] px-2.5 py-0.5 rounded-full">
                    Save 80% (Today Only)
                  </span>
                </p>
              </div>

              <button
                onClick={() =>
                  setUpsellModal({
                    isOpen: true,
                    price: 1999,
                    title: "4-Week AI Mastery Cohort & 1:1 Implementation Mentorship",
                  })
                }
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-black text-[#0a0a0a] bg-gradient-to-r from-[#f5c542] via-[#ffd700] to-[#e6b800] hover:brightness-110 transition-all shadow-[0_0_35px_rgba(245,197,66,0.4)] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider active:scale-95"
              >
                <span>Upgrade to 4-Week Cohort for ₹1,999</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 3. COURSE UPGRADE 2: ₹4,999 Elite Advanced Agents Mastermind */}
        {/* ---------------------------------------------------- */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#261d05] via-[#140f03] to-[#0a0802] border-2 border-[#ffd700]/70 p-6 sm:p-10 shadow-[0_0_70px_rgba(255,215,0,0.25)] overflow-hidden mb-12">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ffd700] via-[#f5c542] to-[#d4af37] text-[#0a0a0a] text-[11px] font-black uppercase tracking-wider py-1.5 px-6 rounded-bl-2xl shadow-lg flex items-center gap-1.5">
            <Crown className="w-3.5 h-3.5" />
            <span>ELITE ADVANCED COURSE</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ffd700]/20 border border-[#ffd700]/50 text-[#ffd700] mb-4">
              <Crown className="w-3.5 h-3.5" />
              <span>THE TOP 1% ADVANCED AI ENGINEER TRACK</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-serif">
              Become an AI Architect: Enroll in the{" "}
              <span className="text-[#ffd700] underline decoration-[#ffd700]/50">
                Autonomous Agents &amp; Multi-Agent Swarms Mastermind (₹4,999)
              </span>
            </h2>

            <p className="text-[#d8cca8] text-sm sm:text-base mt-3 leading-relaxed">
              Designed for serious developers, founders, and tech professionals. Master enterprise-grade AI agent systems, autonomous swarms with LangGraph, custom fine-tuned LLMs, and multi-tenant RAG systems.
            </p>

            {/* Advanced Value Stack */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#161205]/95 border border-[#ffd700]/30 flex items-start gap-3">
                <div className="p-1 rounded bg-[#ffd700]/25 text-[#ffd700] mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Multi-Agent Swarm Architectures
                  </h4>
                  <p className="text-[11px] text-[#b8a984]">
                    Orchestrate autonomous agent systems with LangGraph, AutoGen &amp; CrewAI.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#161205]/95 border border-[#ffd700]/30 flex items-start gap-3">
                <div className="p-1 rounded bg-[#ffd700]/25 text-[#ffd700] mt-0.5">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    2 Private 1-on-1 Code Audits
                  </h4>
                  <p className="text-[11px] text-[#b8a984]">
                    Dedicated 60-minute architecture review &amp; code teardowns directly with Ankit Singh.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#161205]/95 border border-[#ffd700]/30 flex items-start gap-3">
                <div className="p-1 rounded bg-[#ffd700]/25 text-[#ffd700] mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    High-Scale Vector RAG &amp; Fine-Tuning
                  </h4>
                  <p className="text-[11px] text-[#b8a984]">
                    Build production RAG pipelines with hybrid search, re-ranking &amp; domain adapters.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#161205]/95 border border-[#ffd700]/30 flex items-start gap-3">
                <div className="p-1 rounded bg-[#ffd700]/25 text-[#ffd700] mt-0.5">
                  <Crown className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    ₹50k+ Agency Commercial Playbook
                  </h4>
                  <p className="text-[11px] text-[#b8a984]">
                    Client pitch decks, contract templates, and exact pricing scopes for AI consulting.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4.5 bg-[#141003] border-2 border-[#ffd700]/50 rounded-2xl">
              <div>
                <p className="text-xs text-[#b8a984]">Regular Mastermind Fee: <span className="line-through">₹24,999</span></p>
                <p className="text-2xl font-black text-white font-mono flex items-baseline gap-2">
                  <span className="text-[#ffd700]">₹4,999</span>
                  <span className="text-xs text-[#0a0a0a] font-bold bg-[#ffd700] px-2.5 py-0.5 rounded-full">
                    Save 80% (Limited Seats)
                  </span>
                </p>
              </div>

              <button
                onClick={() =>
                  setUpsellModal({
                    isOpen: true,
                    price: 4999,
                    title: "Elite Autonomous AI Agents & Enterprise LLM Engineering Mastermind",
                  })
                }
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-black text-[#0a0a0a] bg-gradient-to-r from-[#ffd700] via-[#f5c542] to-[#d4af37] hover:brightness-110 transition-all shadow-[0_0_40px_rgba(255,215,0,0.45)] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider active:scale-95"
              >
                <span>Enroll in Advanced Course for ₹4,999</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8 pb-12">
          <Link
            href="/"
            className="text-xs text-[#b8a984] hover:text-[#ffd700] transition-colors font-mono tracking-wider"
          >
            ← Back to Main Masterclass Page
          </Link>
        </div>

        {/* Dynamic Course Upgrade Checkout Modal */}
        <CheckoutModal
          isOpen={upsellModal.isOpen}
          onClose={() => setUpsellModal((prev) => ({ ...prev, isOpen: false }))}
          price={upsellModal.price}
          planTitle={upsellModal.title}
        />
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#090804] text-[#ffd700] flex items-center justify-center font-mono">
          Loading your confirmation details...
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
