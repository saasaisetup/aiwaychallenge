# ⚡ AI Business Challenge Workshop (₹99 Landing Page & Funnel)

A 1-to-1 high-converting clone and implementation of **aibusinesschallenge.in** built with **Next.js 16**, **Tailwind CSS**, **Razorpay Payments API (₹99 Ticket)**, **Resend Email Automation**, and **Google Calendar 1-Click Sync**.

---

## 🚀 Sections Included (Matching the 7-Page PDF)

1. **Page 1: Hero Section (`CyberHero.tsx`)**:
   - `ABC: AI Masterclass Workshop Reveals` top pill
   - Electric green/cyan highlighted headline: *"How To Start An AI Business And Start Selling It To Premium Clients Without actually being technical, Coder or AI Expert."*
   - Poster card with AI orb, date/time pills (Upcoming, 7:00 PM, Sunday, Hinglish)
   - Glowing Green CTA: `REGISTER AT JUST ₹99 ₹1499/-`

2. **Page 2: Process Roadmap & 3 AI Builds (`WhyCantYou.tsx` & `WhatYouCanBuild.tsx`)**:
   - Vertical timeline: *"Why Can't You?"* (Step 1 to Step 5: `[REVEALED IN WORKSHOP]`)
   - 3 Cyberpunk Cards:
     1. AI Voice Calling Agents
     2. AI-Powered Websites & Applications
     3. AI-Generated Product Ads & Creatives

3. **Page 3: Comparison & Curriculum (`ComparisonSection.tsx` & `LearnInsideWorkshop.tsx`)**:
   - Traditional Skills (Old Method) vs AI Business Model
   - What You'll Learn Inside This Workshop (8 robot-bulleted takeaways)

4. **Page 4: Transformation & 3 Secrets (`BeforeAfterSection.tsx`)**:
   - Before Joining the Workshop (Red) vs After Joining (Green)
   - 3 Secrets Most Coaches Won't Tell You (Secret 3 locked behind registration)

5. **Page 5: Target Audience & Guarantee (`WhoShouldJoin.tsx`)**:
   - 7 persona criteria with green robot icons
   - Bouncing green arrow
   - No-Risk Workshop: 100% Money Back Guarantee

6. **Page 6: Mentor Authority (`MentorSection.tsx`)**:
   - Mentor Ankit Singh & Guest AI Specialists
   - Brand logos: MX Player, Snapdeal, Red Bull, Prime Video, Jio

7. **Page 7: Reviews & FAQs (`ReviewsAndFAQ.tsx`)**:
   - 5-Star verified review cards
   - 5 Accordion questions matching the live website

8. **Floating Sticky CTA (`StickyGreenCTA.tsx`)**:
   - Prominent glowing green button `REGISTER AT JUST ₹99 ₹1499/-` fixed to screen bottom.

9. **Backend Integrations**:
   - `/api/razorpay/create-order` (Creates ₹99 order)
   - `/api/razorpay/verify` (Verifies HMAC signature and triggers email)
   - `src/lib/resend.ts` (Sends Google Meet link + 1-Click Google Calendar button + `.ics` invite)
   - `/thank-you` (Thank you & ₹999 VIP Upsell page)

---

## 🏃‍♂️ How to Run Locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)
