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

  const webinarTitle = (
    process.env.NEXT_PUBLIC_WEBINAR_TITLE ||
    process.env.WEBINAR_TITLE ||
    "AIWAY CHALLENGE: 10x Your Productivity Just By Using AI Masterclass"
  ).trim();
  const startTime = (
    process.env.NEXT_PUBLIC_WEBINAR_DATE ||
    process.env.WEBINAR_DATE ||
    "2026-09-09T11:00:00+05:30"
  ).trim();
  const duration = parseInt(
    (process.env.NEXT_PUBLIC_WEBINAR_DURATION_MINS ||
    process.env.WEBINAR_DURATION_MINS ||
    "120").trim(),
    10
  );
  const meetUrl = (
    process.env.NEXT_PUBLIC_WEBINAR_MEET_URL ||
    process.env.WEBINAR_MEET_URL ||
    "https://meet.google.com/abc-defg-hij"
  ).trim();
  const whatsappUrl = (
    process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL ||
    process.env.WHATSAPP_GROUP_URL ||
    "https://chat.whatsapp.com/JNxvFNnkxOSHlqYPvSH4PG"
  ).trim();

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
        {/* ==================================================== */}
        {/* CELEBRATION HEADER BANNER                           */}
        {/* ==================================================== */}
        <div className="bg-gradient-to-b from-[#1c1605] via-[#120e03] to-[#0a0802] border-2 border-[#ffd700]/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(255,215,0,0.2)] text-center relative overflow-hidden mb-10">
          <div className="h-16 w-16 bg-[#ffd700]/15 border-2 border-[#ffd700]/60 text-[#ffd700] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(255,215,0,0.35)]">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#ffd700] bg-[#ffd700]/15 border border-[#ffd700]/40 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PAYMENT VERIFIED • SEAT CONFIRMED</span>
          </span>

          <h1 className="text-2xl sm:text-4xl font-black text-white mt-4 font-mono tracking-tight">
            Welcome to AIWAY Challenge, <span className="text-[#ffd700]">{name}</span>! 🎉
          </h1>
          <p className="text-[#e2d5b4] text-sm sm:text-base mt-2 max-w-xl mx-auto">
            You are officially registered for the 10x AI Masterclass. Complete the{" "}
            <strong className="text-[#ffd700]">4 simple steps below</strong> to lock in your access.
          </p>

          {/* Attendee Info Badges */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-3 rounded-2xl bg-[#141003] border border-[#f5c542]/30 text-xs font-mono">
            <span className="text-[#b8a984]">
              Email: <strong className="text-[#ffd700]">{email}</strong>
            </span>
            <span className="hidden sm:inline text-[#f5c542]/40">•</span>
            <span className="text-[#b8a984]">
              Payment ID: <strong className="text-[#ffd700]">{paymentId}</strong>
            </span>
            <span className="hidden sm:inline text-[#f5c542]/40">•</span>
            <span className="text-[#b8a984]">
              Live Date: <strong className="text-white">Wednesday, 9th Sept • 11:00 AM IST</strong>
            </span>
          </div>
        </div>

        {/* ==================================================== */}
        {/* STEP 01: ADD TO CALENDAR & DIRECT MEET ACCESS       */}
        {/* ==================================================== */}
        <div className="bg-[#120e03] border-2 border-[#f5c542]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_35px_rgba(245,197,66,0.12)] mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ffd700] to-[#f5c542] text-[#0a0a0a] text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(255,215,0,0.4)]">
              STEP 01
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#ffd700]" />
              <span>Lock The Masterclass On Your Calendar</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#d4c7a5] mb-5">
            The session is live and will not have public recordings. Click below to add the Google Calendar invite or access the room link directly so you don't miss the 11:00 AM start.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {/* Primary Gold: Add to Google Calendar */}
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#f5c542] via-[#ffd700] to-[#e6b800] text-[#0a0a0a] text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(245,197,66,0.4)] hover:shadow-[0_0_40px_rgba(245,197,66,0.7)] hover:brightness-105 active:scale-95 uppercase tracking-wide"
            >
              <Calendar className="w-4 h-4 stroke-[2.5]" />
              <span>Add to Google Calendar</span>
            </a>

            {/* Direct Google Meet Link */}
            <a
              href={meetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-[#1a1405] hover:bg-[#ffd700] text-[#ffd700] hover:text-[#0a0a0a] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all border-2 border-[#ffd700] shadow-[0_0_20px_rgba(245,197,66,0.2)] active:scale-95"
            >
              <Video className="w-4 h-4" />
              <span>Direct Google Meet Link</span>
            </a>

            {/* Apple / Outlook .ics File */}
            <button
              onClick={downloadICS}
              className="px-5 py-3.5 rounded-xl bg-[#141003] hover:bg-[#221b06] text-[#e2d5b4] hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all border border-[#f5c542]/40 cursor-pointer active:scale-95"
            >
              <Download className="w-4 h-4 text-[#ffd700]" />
              <span>Download .ics File</span>
            </button>
          </div>
        </div>

        {/* ==================================================== */}
        {/* STEP 02: JOIN VIP WHATSAPP COMMUNITY                */}
        {/* ==================================================== */}
        <div className="bg-[#120e03] border-2 border-[#ffd700]/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(255,215,0,0.15)] mb-8 relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ffd700] to-[#f5c542] text-[#0a0a0a] text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(255,215,0,0.4)]">
              STEP 02 (MANDATORY)
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#ffd700] font-mono font-bold bg-[#ffd700]/10 border border-[#ffd700]/30 px-3 py-0.5 rounded-full">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>480+ Attendees Joined</span>
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 tracking-tight">
            <MessageCircle className="w-6 h-6 text-[#ffd700] flex-shrink-0" />
            <span>Join the Official VIP WhatsApp Community</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#d4c7a5] mt-2 mb-6 leading-relaxed">
            <strong className="text-white">Crucial Step:</strong> We drop the direct Google Meet join links, live Q&amp;A backup streams, the 25+ AI power prompt sheets, and session presentation slides inside this private WhatsApp group 15 minutes before we go live.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#f5c542] via-[#ffd700] to-[#e6b800] text-[#0a0a0a] text-sm sm:text-base font-black hover:brightness-110 transition-all shadow-[0_0_30px_rgba(245,197,66,0.45)] hover:shadow-[0_0_50px_rgba(255,215,0,0.7)] active:scale-95 uppercase tracking-wider cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 stroke-[2.5]" />
            <span>Join VIP WhatsApp Community (Instant Access) →</span>
          </a>
        </div>

        {/* ==================================================== */}
        {/* STEP 03: EMAIL TICKET VERIFICATION & RESEND         */}
        {/* ==================================================== */}
        <div className="bg-[#120e03] border-2 border-[#f5c542]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_35px_rgba(245,197,66,0.12)] mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ffd700] to-[#f5c542] text-[#0a0a0a] text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(255,215,0,0.4)]">
              STEP 03
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#ffd700]" />
              <span>Verify Your Ticket Receipt In Email</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#d4c7a5] mb-4">
            We have automatically triggered your ticket and calendar link to:{" "}
            <strong className="text-[#ffd700] underline decoration-[#ffd700]/50 font-mono">{email}</strong>
          </p>

          <div className="p-4 rounded-2xl bg-[#181305] border border-[#f5c542]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#e2d5b4]">
              <Mail className="w-4 h-4 text-[#ffd700] flex-shrink-0" />
              <span>
                <strong>Important:</strong> If not in Primary, please check your <strong>Spam</strong> or <strong>Promotions</strong> folder and mark as 'Important'.
              </span>
            </div>
            <button
              onClick={handleResendEmail}
              disabled={resendingEmail}
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ffd700]/15 hover:bg-[#ffd700]/25 text-[#ffd700] border border-[#ffd700]/40 font-bold transition-all cursor-pointer text-xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${resendingEmail ? "animate-spin" : ""}`} />
              <span>{resendingEmail ? "Sending..." : "Resend Email Ticket"}</span>
            </button>
          </div>
          {emailStatus && (
            <p className="mt-3 text-xs font-semibold text-[#ffd700] text-center">
              {emailStatus}
            </p>
          )}
        </div>

        {/* ==================================================== */}
        {/* STEP 04: EXCLUSIVE FAST-TRACK CAREER UPGRADES       */}
        {/* ==================================================== */}
        <div className="bg-[#120e03] border-2 border-[#ffd700]/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,215,0,0.18)] mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ffd700] to-[#f5c542] text-[#0a0a0a] text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(255,215,0,0.4)]">
              STEP 04
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
              <Crown className="w-5 h-5 text-[#ffd700]" />
              <span>Exclusive Attendee Career Upgrades (Save 80% Today)</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#d4c7a5] mb-6">
            You've secured your ₹99 masterclass foundation. Choose from our two advanced implementation tracks to fast-track your 10x career:
          </p>

          {/* DUAL GOLDEN COURSE UPGRADE CARDS */}
          <div className="space-y-6">
            {/* UPGRADE 1: ₹1,999 4-Week AI Mastery Cohort */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#1b1505] via-[#140f03] to-[#0d0a02] border-2 border-[#f5c542]/60 p-6 sm:p-7 shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ffd700] to-[#f5c542] text-[#0a0a0a] text-[10px] font-black uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-md">
                80% OFF • 1:1 MENTORSHIP
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#ffd700] mb-2 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OPTION 4A: 4-WEEK COHORT</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                4-Week AI Mastery Cohort &amp; 1:1 Implementation Mentorship
              </h3>
              <p className="text-xs sm:text-sm text-[#d8cca8] mt-2">
                Personalized 1:1 project feedback, resume overhaul, weekly live build sessions, and private mastermind community with Ankit Singh.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2 text-xs text-[#e2d5b4]">
                  <Check className="w-3.5 h-3.5 text-[#ffd700] flex-shrink-0" />
                  <span>1:1 AI Resume &amp; Portfolio Audit</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#e2d5b4]">
                  <Check className="w-3.5 h-3.5 text-[#ffd700] flex-shrink-0" />
                  <span>4 Live Weekly Project Build Sessions</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#e2d5b4]">
                  <Check className="w-3.5 h-3.5 text-[#ffd700] flex-shrink-0" />
                  <span>Private VIP Founder Community Access</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#e2d5b4]">
                  <Check className="w-3.5 h-3.5 text-[#ffd700] flex-shrink-0" />
                  <span>Production AI Codebase &amp; Prompt Vault</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2a2107]">
                <div>
                  <p className="text-[11px] text-[#b8a984]">
                    Regular Fee: <span className="line-through">₹9,999</span>
                  </p>
                  <p className="text-2xl font-black text-white font-mono flex items-baseline gap-2">
                    <span className="text-[#ffd700]">₹1,999</span>
                    <span className="text-[10px] text-[#0a0a0a] font-bold bg-[#ffd700] px-2 py-0.5 rounded-full">
                      SAVE 80%
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
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-[#0a0a0a] bg-gradient-to-r from-[#f5c542] via-[#ffd700] to-[#e6b800] hover:brightness-110 transition-all shadow-[0_0_25px_rgba(245,197,66,0.35)] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider active:scale-95"
                >
                  <span>Upgrade to 4-Week Cohort for ₹1,999</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>

            {/* UPGRADE 2: ₹4,999 Elite Autonomous AI Agents Mastermind */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#221a05] via-[#140f03] to-[#0a0802] border-2 border-[#ffd700]/80 p-6 sm:p-7 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ffd700] via-[#f5c542] to-[#d4af37] text-[#0a0a0a] text-[10px] font-black uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-md flex items-center gap-1">
                <Crown className="w-3 h-3" />
                <span>TOP 1% ADVANCED TRACK</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#ffd700] mb-2 font-mono">
                <Crown className="w-3.5 h-3.5" />
                <span>OPTION 4B: ADVANCED ENTERPRISE COURSE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Autonomous AI Agents &amp; Multi-Agent Swarms Mastermind
              </h3>
              <p className="text-xs sm:text-sm text-[#d8cca8] mt-2">
                Designed for engineers, technical founders, and builders. Master multi-agent swarms with LangGraph/AutoGen, high-scale vector RAG pipelines, and commercial agency client scopes.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2 text-xs text-[#e2d5b4]">
                  <Check className="w-3.5 h-3.5 text-[#ffd700] flex-shrink-0" />
                  <span>Multi-Agent Swarms (LangGraph, CrewAI, AutoGen)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#e2d5b4]">
                  <Check className="w-3.5 h-3.5 text-[#ffd700] flex-shrink-0" />
                  <span>2 Private 60-Min Code Audits with Ankit Singh</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#e2d5b4]">
                  <Check className="w-3.5 h-3.5 text-[#ffd700] flex-shrink-0" />
                  <span>Production Vector RAG &amp; Custom Fine-Tuning</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#e2d5b4]">
                  <Check className="w-3.5 h-3.5 text-[#ffd700] flex-shrink-0" />
                  <span>₹50,000+ AI Agency Scope &amp; Client Contracts</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2a2107]">
                <div>
                  <p className="text-[11px] text-[#b8a984]">
                    Regular Fee: <span className="line-through">₹24,999</span>
                  </p>
                  <p className="text-2xl font-black text-white font-mono flex items-baseline gap-2">
                    <span className="text-[#ffd700]">₹4,999</span>
                    <span className="text-[10px] text-[#0a0a0a] font-bold bg-[#ffd700] px-2 py-0.5 rounded-full">
                      SAVE 80% (LIMITED SEATS)
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
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-[#0a0a0a] bg-gradient-to-r from-[#ffd700] via-[#f5c542] to-[#d4af37] hover:brightness-110 transition-all shadow-[0_0_30px_rgba(255,215,0,0.4)] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider active:scale-95"
                >
                  <span>Enroll in Advanced Course for ₹4,999</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center pb-12">
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

