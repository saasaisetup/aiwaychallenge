export interface SlideCard {
  title: string;
  desc: string;
  icon?: string;
  tag?: string;
  badge?: string;
  stat?: string;
  statLabel?: string;
  bulletPoints?: string[];
  codeSnippet?: string;
  accent?: "blue" | "white" | "yellow" | "green";
}

export interface SlideData {
  id: number;
  pillSection: "Home" | "Why" | "Learn" | "Curriculum" | "Pricing" | "RSVP";
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  layout: 
    | "hero-cover"
    | "stats-cards"
    | "before-after"
    | "modules-grid"
    | "model-quadrant"
    | "framework-steps"
    | "code-prompts"
    | "live-sprint"
    | "upgrade-offer"
    | "upgrade-compare"
    | "thank-you"
    | "social-hub";
  cards?: SlideCard[];
  stats?: { label: string; value: string }[];
  beforeAfter?: {
    beforeTitle: string;
    beforeItems: string[];
    afterTitle: string;
    afterItems: string[];
  };
  ctaText?: string;
  ctaAction?: string;
  notes?: string;
}

export const SLIDES_DATA: SlideData[] = [
  // -------------------------------------------------------------
  // SLIDE 1: COVER & HERO
  // -------------------------------------------------------------
  {
    id: 1,
    pillSection: "Home",
    badge: "LIVE ONLINE • 2 HOURS",
    title: "Neural Methods",
    titleHighlight: "Live AI Workshop",
    subtitle: "A focused live masterclass for teams, professionals, and builders who want to actually use AI at work. Build your prompting system, your first live software, and your own autonomous assistant in one live session.",
    layout: "hero-cover",
    ctaText: "Start Masterclass",
    notes: "Welcome everyone! Introduce Ankit Singh, the mission of AIWAY Challenge, and set expectations for 100% practical live building.",
    stats: [
      { label: "LIVE ATTENDEES", value: "480+" },
      { label: "WORKSHOP DURATION", value: "120 Mins" },
      { label: "PRACTICAL TOOLS", value: "25+ Stack" },
      { label: "RATED BY STUDENTS", value: "4.9/5.0" }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 2: THE BROKEN STATUS QUO
  // -------------------------------------------------------------
  {
    id: 2,
    pillSection: "Why",
    badge: "THE STATUS QUO • 2026 REALITY",
    title: "Why 95% of People",
    titleHighlight: "Use AI Completely Wrong",
    subtitle: "Most professionals open ChatGPT like a glorified Google search box. They type vague queries, receive generic answers, and assume AI isn't ready for real work.",
    layout: "stats-cards",
    stats: [
      { label: "TIME SPENT IN BUSYWORK", value: "80%" },
      { label: "AVERAGE PROMPT RETRIES", value: "6.4x" },
      { label: "WEEKLY CONTEXT SWITCHING", value: "21 Hrs" },
      { label: "PROMPTS ABANDONED", value: "72%" }
    ],
    cards: [
      {
        tag: "THE TRAP",
        title: "The Single-Turn Prompting Trap",
        desc: "Asking AI to 'write an article' or 'summarize this' without system parameters guarantees bland, repetitive hallucinations.",
        icon: "Zap"
      },
      {
        tag: "THE LEAK",
        title: "The Context Starvation Deficit",
        desc: "AI doesn't lack intelligence; it lacks your context. Without your role, constraints, and target schema, it guesses blind.",
        icon: "Layers"
      },
      {
        tag: "THE OUTCOME",
        title: "The Illusion of Productivity",
        desc: "Spending 20 minutes rewriting an AI draft is NOT leverage. True 10x output means zero-edit production assets on Run #1.",
        icon: "CheckCircle2"
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 3: BEFORE VS AFTER
  // -------------------------------------------------------------
  {
    id: 3,
    pillSection: "Why",
    badge: "THE 10X TRANSFORMATION",
    title: "Before and After",
    titleHighlight: "The Neural Methods System",
    subtitle: "See what happens when you transition from reactive ad-hoc prompting to a structured, autonomous growth engine.",
    layout: "before-after",
    beforeAfter: {
      beforeTitle: "Before the System",
      beforeItems: [
        "Endless manual copy-pasting between browser tabs",
        "Staring at blank documents waiting for inspiration",
        "Chasing short-term answers with zero reusability",
        "Spending 15+ hours weekly on presentations and emails",
        "Feeling overwhelmed by 100 new AI tools launching daily",
        "Zero scalable leverage: If you stop typing, work stops"
      ],
      afterTitle: "After Neural Methods",
      afterItems: [
        "Permanent Context Stacking: AI understands your voice instantly",
        "Full websites and client tools deployed in under 10 minutes",
        "Executive pitch decks and visual boards in 60 seconds flat",
        "Autonomous multi-step task chains operating 24/7",
        "One consolidated 4-model arsenal that handles 99% of work",
        "10x Career Velocity: Finish an 8-hour workday in 45 minutes"
      ]
    }
  },

  // -------------------------------------------------------------
  // SLIDE 4: THE 6 WORKSHOP MODULES
  // -------------------------------------------------------------
  {
    id: 4,
    pillSection: "Curriculum",
    badge: "MASTERCLASS ARCHITECTURE",
    title: "What You'll Learn",
    titleHighlight: "Inside This Live Workshop",
    subtitle: "Two hours of high-density practical leverage. Every single concept is paired with an immediate live build on screen.",
    layout: "modules-grid",
    cards: [
      {
        tag: "MODULE 01 • 25 MINS",
        title: "The 10x Operator Mindset & Core AI Stack",
        desc: "Master the 3 core context workflows and weaponize Claude, GPT-4o, Gemini & Perplexity for maximum throughput.",
        icon: "Cpu"
      },
      {
        tag: "MODULE 02 • 25 MINS",
        title: "Building Full Web Apps in Under 10 Mins",
        desc: "Prompt-to-production pipelines. Deploy live responsive websites, client portals, and landing pages with zero coding.",
        icon: "Globe2"
      },
      {
        tag: "MODULE 03 • 20 MINS",
        title: "60-Second Executive Slides & Visual Decks",
        desc: "Turn rough bullet notes into polished, boardroom presentations and investor decks on the first run.",
        icon: "Presentation"
      },
      {
        tag: "MODULE 04 • 25 MINS",
        title: "No-Code Custom Apps & Task Chains",
        desc: "Assemble custom calculators, interactive tools, and automated task chains that handle emails, sheets, and leads.",
        icon: "Layers"
      },
      {
        tag: "MODULE 05 • 15 MINS",
        title: "The Career & Academic Hyper-Multiplier",
        desc: "Synthesize 500-page textbooks, master complex topics in minutes, and automate daily routine tasks.",
        icon: "BookOpen"
      },
      {
        tag: "MODULE 06 • 10 MINS",
        title: "Live Q&A, Prompt Vault & Toolkit Unlock",
        desc: "Direct personalized teardowns with Ankit Singh, plus immediate access to the 25+ production prompt sheets.",
        icon: "Sparkles"
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 5: MODULE 1 - THE CORE STACK
  // -------------------------------------------------------------
  {
    id: 5,
    pillSection: "Learn",
    badge: "MODULE 01 • THE TOOL ARSENAL",
    title: "Deploying the Right Weapon",
    titleHighlight: "For the Right Job",
    subtitle: "Stop using one AI for everything. Elite operators deploy specialized foundational models based on architectural strengths.",
    layout: "model-quadrant",
    cards: [
      {
        badge: "REASONING & CODE",
        title: "Claude 3.5 Sonnet",
        desc: "Unmatched for architectural reasoning, nuanced long-form writing, and zero-shot code generation.",
        bulletPoints: [
          "Artifacts for real-time live preview",
          "Highest benchmark for Python & TypeScript",
          "Clean tone without sycophantic fluff"
        ],
        accent: "blue"
      },
      {
        badge: "GENERALIST & VISION",
        title: "OpenAI GPT-4o",
        desc: "The multi-modal workhorse. Best for instant voice dialogue, image analysis, and quick daily workflows.",
        bulletPoints: [
          "Native vision and diagram translation",
          "Advanced data analysis for CSVs & Excel",
          "Massive ecosystem & Custom GPTs"
        ],
        accent: "white"
      },
      {
        badge: "INFINITE CONTEXT",
        title: "Google Gemini 2.0 / 1.5 Pro",
        desc: "The context monster. 2 Million tokens of memory. Ingest entire book libraries and 2-hour videos in one prompt.",
        bulletPoints: [
          "2M token active context window",
          "Analyzes full raw video & audio natively",
          "Seamless Google Workspace integration"
        ],
        accent: "blue"
      },
      {
        badge: "REAL-TIME RESEARCH",
        title: "Perplexity AI",
        desc: "Live search with verifiable academic and web citations. Replaces 45 minutes of manual Google surfing.",
        bulletPoints: [
          "Real-time web verification & sources",
          "Academic filter for published research papers",
          "Pro Search multi-step inquiry chains"
        ],
        accent: "white"
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 6: MODULE 1 - C.R.A.F.T. FRAMEWORK
  // -------------------------------------------------------------
  {
    id: 6,
    pillSection: "Learn",
    badge: "MODULE 01 • CONTEXT ARCHITECTURE",
    title: "The C.R.A.F.T. Prompting Protocol",
    titleHighlight: "Never Hallucinate Again",
    subtitle: "The 5-part engineering formula that turns vague requests into boardroom-grade deliverables on the first try.",
    layout: "framework-steps",
    cards: [
      {
        tag: "STEP 1: CONTEXT",
        title: "C — Context Grounding",
        desc: "Set the domain, background history, audience, and exact project objective. Anchor the boundary conditions.",
        bulletPoints: ["Target audience profile", "Project background & goals", "Domain vocabulary"]
      },
      {
        tag: "STEP 2: ROLE",
        title: "R — Role & Seniority",
        desc: "Specify exact professional caliber. Don't say 'marketer'; say 'VP of Growth at a B2B SaaS startup'.",
        bulletPoints: ["Specific domain expertise", "Level of critical skepticism", "Tone and perspective"]
      },
      {
        tag: "STEP 3: ACTION",
        title: "A — Action Directive",
        desc: "Provide explicit step-by-step sequential instructions with chain-of-thought verification.",
        bulletPoints: ["Sequential micro-steps", "Think before outputting", "State rationale first"]
      },
      {
        tag: "STEP 4: FORMAT",
        title: "F — Format & Schema",
        desc: "Enforce strict deliverable shapes: JSON schema, Markdown tables, executive memo, or slides.",
        bulletPoints: ["Clear column headers", "Explicit character limits", "No preamble or conversational filler"]
      },
      {
        tag: "STEP 5: TARGET",
        title: "T — Target & Negative Rules",
        desc: "Define strict boundaries of what NOT to do. Negative constraints are 3x more effective than positive ones.",
        bulletPoints: ["Banned cliché words (e.g. 'delve', 'testament')", "Strict factual bounds", "No assumptions"]
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 7: MODULE 1 - PRODUCTION PROMPTS
  // -------------------------------------------------------------
  {
    id: 7,
    pillSection: "Learn",
    badge: "MODULE 01 • COPY-PASTE TOOLS",
    title: "The Production Prompt Vault",
    titleHighlight: "4 High-Velocity Templates",
    subtitle: "Tested across hundreds of client campaigns. These blueprints eliminate 20+ hours of drafting every week.",
    layout: "code-prompts",
    cards: [
      {
        tag: "PROMPT A: STRATEGY",
        title: "The Executive Decision Memo",
        desc: "Transforms chaotic bullet points into an executive briefing document with pros, cons, financial impact, and recommendations.",
        codeSnippet: `ACT AS: Principal Management Consultant.
CONTEXT: We are deciding whether to [Decision X].
OBJECTIVE: Generate a 1-page Decision Memo.
SECTIONS:
1. Executive Summary (Max 3 sentences)
2. Strategic Advantages vs Downside Risks (Table)
3. Immediate 30-Day Execution Milestones
RULES: No fluff, rigorous commercial skepticism.`
      },
      {
        tag: "PROMPT B: RESEARCH",
        title: "The 10-Minute Deep Research Distiller",
        desc: "Pours through lengthy whitepapers or competitors to produce an actionable matrix with gap analysis.",
        codeSnippet: `ANALYZE THE FOLLOWING DATA: [Paste text / URL]
ROLE: Lead Market Intelligence Analyst.
OUTPUT REQUIRED:
- 3 Core Unfair Advantages of this model
- 3 Hidden Operational Vulnerabilities
- Actionable Gap Matrix for our positioning
FORMAT: Markdown table + 3 bullet recommendations.`
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 8: LIVE SPRINT 1
  // -------------------------------------------------------------
  {
    id: 8,
    pillSection: "Learn",
    badge: "LIVE SPRINT 01 • DEMONSTRATION",
    title: "Live Sprint 01:",
    titleHighlight: "50-Page Report to Decision Memo",
    subtitle: "Watch Ankit ingest an entire quarterly industry filing and extract high-conviction strategic insights in 90 seconds.",
    layout: "live-sprint",
    cards: [
      {
        tag: "INPUT",
        title: "Raw Data Source",
        desc: "48-page quarterly PDF with balance sheets, dense charts, and market commentary.",
        icon: "FileText"
      },
      {
        tag: "PROCESSING",
        title: "Gemini / Claude Pipeline",
        desc: "Context stack filters out marketing noise, cross-examines cash burn against customer growth.",
        icon: "Cpu"
      },
      {
        tag: "DELIVERABLE",
        title: "Boardroom Summary",
        desc: "A single clean Notion page highlighting 3 vulnerabilities and exact counter-moves.",
        icon: "CheckCircle2"
      }
    ],
    notes: "Run live on screen. Show Gemini 1.5 Pro / Claude analyzing an actual PDF document live."
  },

  // -------------------------------------------------------------
  // SLIDE 9: MODULE 2 - AI WEB APPS
  // -------------------------------------------------------------
  {
    id: 9,
    pillSection: "Learn",
    badge: "MODULE 02 • THE NEW WEB PARADIGM",
    title: "Building Full Web Apps",
    titleHighlight: "In Under 10 Minutes",
    subtitle: "Software development is no longer locked behind syntax memorization. The interface between thought and working software is now plain English.",
    layout: "stats-cards",
    stats: [
      { label: "TRADITIONAL DEV TIME", value: "4 Weeks" },
      { label: "AI BUILD TIME", value: "8 Mins" },
      { label: "AGENCY INVOICE SAVED", value: "$4,500+" },
      { label: "CODE REQUIRED", value: "0 Lines" }
    ],
    cards: [
      {
        tag: "THE SHIFT",
        title: "From Code-First to Prompt-First",
        desc: "You direct the layout, psychology, and design tokens; AI translates intent into clean, production-ready React & Tailwind code.",
        icon: "Code2"
      },
      {
        tag: "REAL UTILITY",
        title: "Functional, Not Static Mockups",
        desc: "We are not building Figma pictures. We are deploying live, clickable web applications connected to databases and forms.",
        icon: "Globe2"
      },
      {
        tag: "COMMERCIAL VALUE",
        title: "Instant Client Prototyping",
        desc: "Win high-ticket deals by pitching clients with a working prototype built in 15 minutes before the sales call.",
        icon: "Award"
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 10: MODULE 2 - THE AI WEB STACK
  // -------------------------------------------------------------
  {
    id: 10,
    pillSection: "Learn",
    badge: "MODULE 02 • ARCHITECTURE",
    title: "The Modern AI Web Stack",
    titleHighlight: "Industrial-Grade Infrastructure",
    subtitle: "The exact four-layer toolchain professional AI builders use to deploy web applications at lightning speed.",
    layout: "framework-steps",
    cards: [
      {
        tag: "LAYER 1: UI GENERATION",
        title: "v0.dev / Bolt.new",
        desc: "Translates human language prompts into responsive Tailwind CSS and modern React components.",
        bulletPoints: ["Component-level refinement", "Clean mobile layouts", "Direct preview"]
      },
      {
        tag: "LAYER 2: AGENTIC IDE",
        title: "Cursor AI Composer",
        desc: "Multi-file AI editor that understands your entire repository, dependencies, and business logic.",
        bulletPoints: ["Edits 10 files simultaneously", "Fixes terminal errors instantly", "Context-aware code edits"]
      },
      {
        tag: "LAYER 3: MODERN FRAMEWORK",
        title: "Next.js & Tailwind CSS",
        desc: "Fast, SEO-optimized, industry-standard stack used by OpenAI, Vercel, and modern tech unicorns.",
        bulletPoints: ["Server-side speed", "Pixel-perfect styling", "Reusable design systems"]
      },
      {
        tag: "LAYER 4: INSTANT CLOUD",
        title: "Vercel / Supabase",
        desc: "1-Click global deployment with free SSL, database storage, and edge speed across 100+ global data centers.",
        bulletPoints: ["Zero server management", "Instant public URLs", "Automated scaling"]
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 11: MODULE 2 - 4-STEP PIPELINE
  // -------------------------------------------------------------
  {
    id: 11,
    pillSection: "Learn",
    badge: "MODULE 02 • STEP-BY-STEP RECIPE",
    title: "The 4-Step Prompt to Live URL Pipeline",
    titleHighlight: "How to Ship Today",
    subtitle: "A foolproof, repeatable formula you can use tonight to build client landing pages, portfolio sites, or SaaS MVPs.",
    layout: "framework-steps",
    cards: [
      {
        tag: "STEP 01",
        title: "1. The Spec Prompt",
        desc: "Define the visual mood, target audience, conversion CTA, and key sections before touching a tool.",
        bulletPoints: ["Primary brand colors", "Key conversion headline", "Section flow order"]
      },
      {
        tag: "STEP 02",
        title: "2. Component Scaffolding",
        desc: "Generate the core layout, hero section, and interactive elements using AI UI synthesis.",
        bulletPoints: ["Responsive grid system", "Modern cards and typography", "Interactive state hooks"]
      },
      {
        tag: "STEP 03",
        title: "3. Content & Polish",
        desc: "Inject high-converting copy, clean imagery, testimonials, and dynamic pricing models.",
        bulletPoints: ["High-contrast CTA buttons", "Benefit-first subheaders", "Social proof integration"]
      },
      {
        tag: "STEP 04",
        title: "4. Global Cloud Deploy",
        desc: "Push to GitHub and link to Vercel for a live `.vercel.app` production link ready for clients.",
        bulletPoints: ["Instant live domain", "Automated HTTPS certificate", "Mobile responsive test"]
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 12: LIVE SPRINT 2
  // -------------------------------------------------------------
  {
    id: 12,
    pillSection: "Learn",
    badge: "LIVE SPRINT 02 • DEMONSTRATION",
    title: "Live Sprint 02:",
    titleHighlight: "Building & Deploying a Live Web Page",
    subtitle: "Watch Ankit Singh build an interactive conversion landing page and push it live to the web in under 8 minutes.",
    layout: "live-sprint",
    cards: [
      {
        tag: "MINUTE 0 - 2",
        title: "Prompting Layout & Design",
        desc: "Feeding the design tokens, headline, and component architecture into the AI engine.",
        icon: "Terminal"
      },
      {
        tag: "MINUTE 3 - 5",
        title: "Iterating & Refining UI",
        desc: "Adjusting micro-interactions, mobile drawer, and checkout modal styling live.",
        icon: "Layers"
      },
      {
        tag: "MINUTE 6 - 8",
        title: "Production Deployment",
        desc: "Deploying live to Vercel and opening the website on a real phone to verify performance.",
        icon: "Rocket"
      }
    ],
    notes: "Demonstrate live creation of a webpage using Cursor or v0, showing instant cloud deployment."
  },

  // -------------------------------------------------------------
  // SLIDE 13: MODULE 3 - 60-SEC SLIDES
  // -------------------------------------------------------------
  {
    id: 13,
    pillSection: "Learn",
    badge: "MODULE 03 • VISUAL STORYTELLING",
    title: "60-Second Executive Slides",
    titleHighlight: "The Death of PowerPoint Nights",
    subtitle: "How modern founders, consultants, and leaders generate boardroom-ready presentations from rough notes in 60 seconds.",
    layout: "stats-cards",
    stats: [
      { label: "TIME TO CREATE 10 SLIDES", value: "60 Sec" },
      { label: "HOURS SAVED PER DECK", value: "4.5 Hrs" },
      { label: "RETENTION INCREASE", value: "3.2x" },
      { label: "DESIGN EXPENSES", value: "$0" }
    ],
    cards: [
      {
        tag: "THE SECRET",
        title: "Narrative Arc Before Pixels",
        desc: "AI structures your core arguments, thesis statement, and supporting proof points before styling a single shape.",
        icon: "FileText"
      },
      {
        tag: "AUTOMATED DESIGN",
        title: "Visual Hierarchy & Layout Harmony",
        desc: "No more nudging text boxes or fixing mismatched font sizes. AI balances margins, colors, and layout rhythm automatically.",
        icon: "Presentation"
      },
      {
        tag: "UNIVERSAL EXPORT",
        title: "Export to PowerPoint, PDF, or Web",
        desc: "Editable slide files you can customize, present live in Google Meet, or share as responsive web decks.",
        icon: "Share2"
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 14: MODULE 3 - PRESENTATION TOOLCHAIN
  // -------------------------------------------------------------
  {
    id: 14,
    pillSection: "Learn",
    badge: "MODULE 03 • THE SLIDE STACK",
    title: "The AI Presentation Toolchain",
    titleHighlight: "Gamma, Beautiful.ai & Claude",
    subtitle: "The optimal combination of AI engines to produce presentations that command authority and close deals.",
    layout: "model-quadrant",
    cards: [
      {
        badge: "FLUID WEB SLIDES",
        title: "Gamma App",
        desc: "The fastest prompt-to-presentation engine in the world. Generates visual cards, embeds, and diagrams in 30 seconds.",
        bulletPoints: ["Interactive visual blocks", "One-click palette redesign", "Direct PowerPoint & PDF export"],
        accent: "blue"
      },
      {
        badge: "EXECUTIVE POLISH",
        title: "Beautiful.ai",
        desc: "Smart templates that adapt as you type. Guarantees strict corporate design guidelines and clean data charts.",
        bulletPoints: ["Dynamic smart charts", "Grid alignment locking", "Corporate branding compliance"],
        accent: "white"
      },
      {
        badge: "NARRATIVE ENGINE",
        title: "Claude 3.5 Sonnet",
        desc: "The brains behind the deck. Formulates the storyline, slide-by-slide titles, and punchy speaker notes.",
        bulletPoints: ["Storytelling arc optimization", "High-impact one-liner headings", "Data point distillation"],
        accent: "blue"
      },
      {
        badge: "BESPOKE VISUALS",
        title: "Midjourney & Recraft",
        desc: "Generate bespoke 3D icons, illustrations, and photorealistic backdrops that make your slides stand out.",
        bulletPoints: ["Unique brand visual assets", "Vector SVG illustration output", "Consistent style prompting"],
        accent: "white"
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 15: LIVE SPRINT 3
  // -------------------------------------------------------------
  {
    id: 15,
    pillSection: "Learn",
    badge: "LIVE SPRINT 03 • DEMONSTRATION",
    title: "Live Sprint 03:",
    titleHighlight: "From 5 Bullets to Pitch Deck",
    subtitle: "Watch Ankit transform 5 unstructured rough notes into a 10-slide high-converting investor presentation in real-time.",
    layout: "live-sprint",
    cards: [
      {
        tag: "STEP 1: BULLET INPUT",
        title: "Raw Thoughts",
        desc: "Unformatted notes on market opportunity, product vision, and unit economics.",
        icon: "FileText"
      },
      {
        tag: "STEP 2: STORY STRUCTURING",
        title: "Narrative Arc Extraction",
        desc: "AI organizes into Hook → Villain → Solution → Traction → Ask.",
        icon: "Layers"
      },
      {
        tag: "STEP 3: 60-SEC GENERATION",
        title: "Boardroom Presentation",
        desc: "Polished slides with imagery, bold data cards, and cohesive colors.",
        icon: "Presentation"
      }
    ],
    notes: "Demonstrate live generation in Gamma / Claude on screen."
  },

  // -------------------------------------------------------------
  // SLIDE 16: MODULE 4 - NO-CODE APPS & AUTOMATION
  // -------------------------------------------------------------
  {
    id: 16,
    pillSection: "Learn",
    badge: "MODULE 04 • AUTONOMOUS WORKFLOWS",
    title: "No-Code Custom Apps &",
    titleHighlight: "24/7 Digital Workchains",
    subtitle: "Why hire an army of assistants when you can build autonomous task chains that work with zero human intervention?",
    layout: "stats-cards",
    stats: [
      { label: "DAILY REPETITIVE TASKS", value: "100%" },
      { label: "HUMAN INTERVENTION", value: "0 Mins" },
      { label: "LEAD RESPONSE TIME", value: "< 5 Sec" },
      { label: "MONTHLY HOURS SAVED", value: "45+ Hrs" }
    ],
    cards: [
      {
        tag: "MICRO-APPS",
        title: "Custom Calculators & Portals",
        desc: "Build client onboarding forms, ROI calculators, and personalized assessment tools in a morning.",
        icon: "Cpu"
      },
      {
        tag: "TASK CHAINS",
        title: "Automated Communication",
        desc: "Incoming emails, tickets, or leads are parsed, categorized, scored, and answered instantly.",
        icon: "Zap"
      },
      {
        tag: "CRM SYNC",
        title: "Zero-Data-Entry Workflows",
        desc: "Automatically sync contacts, notes, and calendar events without opening a spreadsheet.",
        icon: "CheckCircle2"
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 17: MODULE 4 - AUTOMATION BLUEPRINT
  // -------------------------------------------------------------
  {
    id: 17,
    pillSection: "Learn",
    badge: "MODULE 04 • SYSTEM DESIGN",
    title: "The Autonomous Agent Pipeline",
    titleHighlight: "How AI Interacts with the World",
    subtitle: "Understanding how triggers, LLM intelligence nodes, and external APIs combine into an unstoppable workflow.",
    layout: "framework-steps",
    cards: [
      {
        tag: "NODE 1: TRIGGER",
        title: "1. Real-World Event",
        desc: "A customer fills a website form, sends an email, or submits a payment.",
        bulletPoints: ["Webhook capture", "Form listener", "Instant event payload"]
      },
      {
        tag: "NODE 2: REASONING",
        title: "2. AI Brain & Classification",
        desc: "GPT-4o or Claude analyzes context, evaluates urgency, and extracts structured fields.",
        bulletPoints: ["Intent classification", "Sentiment analysis", "Custom response drafting"]
      },
      {
        tag: "NODE 3: ACTION ROUTER",
        title: "3. Multi-Tool Execution",
        desc: "The system branches based on AI decision: updates database, creates calendar meeting.",
        bulletPoints: ["Conditional routing", "Database write", "Calendar room creation"]
      },
      {
        tag: "NODE 4: DELIVERY",
        title: "4. Customer Communication",
        desc: "Sends personalized confirmation email via Resend and drops message in WhatsApp.",
        bulletPoints: ["Instant delivery", "Dynamic personalization", "Zero human delay"]
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 18: LIVE SPRINT 4
  // -------------------------------------------------------------
  {
    id: 18,
    pillSection: "Learn",
    badge: "LIVE SPRINT 04 • DEMONSTRATION",
    title: "Live Sprint 04:",
    titleHighlight: "The 24/7 Automated Inbound Machine",
    subtitle: "Watch Ankit trigger an automated workflow: From form submission to instant AI qualification and automated email dispatch.",
    layout: "live-sprint",
    cards: [
      {
        tag: "TRIGGER",
        title: "New Lead Submission",
        desc: "Attendee signs up on the website with custom requirements and budget.",
        icon: "Globe2"
      },
      {
        tag: "INTELLIGENCE",
        title: "Instant AI Scoring",
        desc: "System evaluates deal size, crafts personalized value proposition in 2 seconds.",
        icon: "Cpu"
      },
      {
        tag: "CONFIRMATION",
        title: "Email & Calendar Invite Sent",
        desc: "User receives Google Meet link and calendar file automatically via Resend.",
        icon: "CheckCircle2"
      }
    ],
    notes: "Show the real-time workflow log triggering and delivering an actual email to an attendee."
  },

  // -------------------------------------------------------------
  // SLIDE 19: MODULE 5 - CAREER HYPER-MULTIPLIER
  // -------------------------------------------------------------
  {
    id: 19,
    pillSection: "Learn",
    badge: "MODULE 05 • CAREER ACCELERATION",
    title: "The Career Hyper-Multiplier",
    titleHighlight: "For Students & Professionals",
    subtitle: "How top performers use AI to finish 8 hours of analytical work in 45 minutes and out-compete their peers.",
    layout: "stats-cards",
    stats: [
      { label: "WORKDAY FINISHED IN", value: "45 Mins" },
      { label: "LEARNING SPEED MULTIPLIER", value: "10x" },
      { label: "CAREER ACCELERATION", value: "Top 1%" },
      { label: "BURNOUT REDUCTION", value: "90%" }
    ],
    cards: [
      {
        tag: "THE 45-MIN WORKDAY",
        title: "Eliminating Administrative Drudgery",
        desc: "Turn messy meeting audio into executive memos, extract action items, and draft responses before the meeting ends.",
        icon: "Clock"
      },
      {
        tag: "IRREPLACEABLE VALUE",
        title: "Becoming the AI Systems Operator",
        desc: "The world doesn't pay for manual typing anymore. It pays for people who orchestrate high-leverage AI systems.",
        icon: "Award"
      },
      {
        tag: "ACADEMIC SPEED",
        title: "Socratic Textbook Mastery",
        desc: "Digest semester-long curriculums in a weekend by turning AI into an interactive Nobel-prize-winning private tutor.",
        icon: "BookOpen"
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 20: MODULE 5 - 10X LEARNING PROTOCOL
  // -------------------------------------------------------------
  {
    id: 20,
    pillSection: "Learn",
    badge: "MODULE 05 • THE FEYNMAN-AI METHOD",
    title: "Mastering Any Complex Subject",
    titleHighlight: "In Under 7 Days",
    subtitle: "The 4-stage interactive Socratic learning framework used to master difficult programming languages, finance, or business strategy.",
    layout: "framework-steps",
    cards: [
      {
        tag: "STAGE 1",
        title: "1. The Socratic Inversion",
        desc: "Prompt AI: 'Explain this concept to me as if I am 12, then as a Senior Engineer. Highlight the 3 core principles that matter most.'",
        bulletPoints: ["Eliminates jargon", "Identifies first-principles", "Creates mental anchors"]
      },
      {
        tag: "STAGE 2",
        title: "2. Analogical Mapping",
        desc: "Force AI to map foreign technical concepts to mental models you already understand (e.g. APIs explained as restaurant kitchens).",
        bulletPoints: ["Bridges knowledge gaps", "Immediate intuitive grasp", "High memorability"]
      },
      {
        tag: "STAGE 3",
        title: "3. Active Interrogation",
        desc: "Turn the tables: instruct AI to quiz you with challenging scenario questions and rigorously correct your misunderstandings.",
        bulletPoints: ["Active recall testing", "Exposes false confidence", "Instant error correction"]
      },
      {
        tag: "STAGE 4",
        title: "4. The Micro-Build Sprint",
        desc: "Never read without building. Solidify theory by building one functional micro-project within 24 hours.",
        bulletPoints: ["Permanent muscle memory", "Portfolio asset created", "Zero knowledge decay"]
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 21: MODULE 5 - DAILY ROUTINE
  // -------------------------------------------------------------
  {
    id: 21,
    pillSection: "Learn",
    badge: "MODULE 05 • ANKIT'S OPERATING SYSTEM",
    title: "The Daily Executive Operating System",
    titleHighlight: "How I Run My Day",
    subtitle: "A peek inside Ankit Singh's personal daily AI routine from morning inbox triage to evening strategic synthesis.",
    layout: "framework-steps",
    cards: [
      {
        tag: "08:00 AM • MORNING",
        title: "Inbox Zero & Priority Matrix",
        desc: "AI scans 50+ incoming emails, highlights 3 that require strategic action, and drafts one-click reply choices.",
        bulletPoints: ["Time: 12 minutes", "Zero email anxiety", "Clear daily mission"]
      },
      {
        tag: "01:00 PM • AFTERNOON",
        title: "Meeting Distillation & Delegation",
        desc: "Zoom / Meet transcripts are processed. Action items are assigned with pre-drafted specs into task manager.",
        bulletPoints: ["Time: 8 minutes", "No manual minutes", "100% accountability"]
      },
      {
        tag: "05:00 PM • EVENING",
        title: "Deep Work Synthesis & Build",
        desc: "Reviewing code commits, market intelligence, and writing client proposals with AI copilot assistance.",
        bulletPoints: ["Time: 25 minutes", "Ship 3x daily output", "Log off on time"]
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 22: MODULE 6 - RESOURCE UNLOCKS
  // -------------------------------------------------------------
  {
    id: 22,
    pillSection: "Curriculum",
    badge: "MODULE 06 • RESOURCE UNLOCK",
    title: "The Complete Implementation Bundle",
    titleHighlight: "Everything in Your Hands",
    subtitle: "You don't leave this workshop with empty theory. You leave with the exact production templates, prompt vaults, and starter repos.",
    layout: "stats-cards",
    stats: [
      { label: "MEGA-PROMPT SHEETS", value: "25+" },
      { label: "STARTER REPOSITORIES", value: "6 Deployed" },
      { label: "AI TOOL CHEATSHEETS", value: "100% Free" },
      { label: "COMMUNITY SUPPORT", value: "Lifetime" }
    ],
    cards: [
      {
        tag: "RESOURCE 01",
        title: "The 25+ Production Mega-Prompt Sheets",
        desc: "Copy-paste prompts for copywriting, coding, financial modeling, presentation slide generation, and executive memos.",
        icon: "FileText"
      },
      {
        tag: "RESOURCE 02",
        title: "No-Code Starter Kit & Codebase Vault",
        desc: "Clean Next.js + Tailwind starter templates with pre-configured payment modals and email automation.",
        icon: "Code2"
      },
      {
        tag: "RESOURCE 03",
        title: "The Secret Free-Tier AI Directory",
        desc: "A curated master list of the best AI tools with proven free-tier workarounds to build without huge subscription bills.",
        icon: "Award"
      }
    ]
  },

  // -------------------------------------------------------------
  // SLIDE 23: COURSE UPGRADE 01 (PROMOTION)
  // -------------------------------------------------------------
  {
    id: 23,
    pillSection: "Pricing",
    badge: "SPECIAL ATTENDEE UPGRADE • OPTION 1",
    title: "4-Week AI Mastery Cohort",
    titleHighlight: "& 1:1 Implementation Mentorship",
    subtitle: "Take what you learned today and turn it into permanent career leverage with direct 1:1 guidance and weekly project reviews from Ankit Singh.",
    layout: "upgrade-offer",
    cards: [
      {
        tag: "WEEKLY LIVE BUILDS",
        title: "4 Live Weekly Intensive Build Sessions",
        desc: "Every weekend, we build a brand-new production tool together live, from scratch to public deployment.",
        icon: "Rocket"
      },
      {
        tag: "CAREER RESTRUCTURING",
        title: "1:1 AI Resume & Portfolio Overhaul",
        desc: "Personal review by Ankit to position you as the irreplaceable 'Top 1% AI Operator' for high-paying roles.",
        icon: "Award"
      },
      {
        tag: "VIP COMMUNITY",
        title: "Private Founder & Builder Mastermind",
        desc: "Direct access to high-agency peers, shared prompt libraries, and immediate answers to your technical blockers.",
        icon: "Users"
      },
      {
        tag: "PRODUCTION CODE",
        title: "Complete Enterprise Codebase Vault",
        desc: "Full source code for commercial micro-SaaS, customer support bots, and internal workflow automations.",
        icon: "Code2"
      }
    ],
    stats: [
      { label: "REGULAR COHORT FEE", value: "₹9,999" },
      { label: "WORKSHOP EXCLUSIVE", value: "₹1,999" },
      { label: "DISCOUNT SAVINGS", value: "80% OFF" },
      { label: "SEATS RESERVED TODAY", value: "30 Max" }
    ],
    ctaText: "Enroll in 4-Week Cohort for ₹1,999",
    ctaAction: "/thank-you"
  },

  // -------------------------------------------------------------
  // SLIDE 24: COURSE UPGRADE 02 (PROMOTION)
  // -------------------------------------------------------------
  {
    id: 24,
    pillSection: "Pricing",
    badge: "ENTERPRISE TECHNICAL TRACK • OPTION 2",
    title: "Autonomous AI Agents",
    titleHighlight: "& Multi-Agent Swarms Mastermind",
    subtitle: "Designed for software engineers, technical builders, and agency founders who want to build, monetize, and deploy commercial multi-agent swarms.",
    layout: "upgrade-offer",
    cards: [
      {
        tag: "AGENT ORCHESTRATION",
        title: "Multi-Agent Swarms (LangGraph & CrewAI)",
        desc: "Master hierarchical multi-agent architectures where specialist agents plan, write, test, and deploy autonomously.",
        icon: "Cpu"
      },
      {
        tag: "VECTOR PIPELINES",
        title: "Production Vector RAG & Fine-Tuning",
        desc: "Build private knowledge-base search systems using embeddings, hybrid search, and domain adaptation.",
        icon: "Layers"
      },
      {
        tag: "1:1 CODE AUDITS",
        title: "2 Private 60-Min Architecture Audits",
        desc: "Sit down 1:1 with Ankit Singh to review your code, optimize agent costs, and debug production bottlenecks.",
        icon: "Terminal"
      },
      {
        tag: "COMMERCIAL SCOPES",
        title: "₹50,000+ AI Agency Client Contracts",
        desc: "Battle-tested statement-of-work templates, proposal decks, and pricing playbooks to sign paying business clients.",
        icon: "Award"
      }
    ],
    stats: [
      { label: "REGULAR ENTERPRISE FEE", value: "₹24,999" },
      { label: "WORKSHOP EXCLUSIVE", value: "₹4,999" },
      { label: "DISCOUNT SAVINGS", value: "80% OFF" },
      { label: "SEATS RESERVED TODAY", value: "15 Max" }
    ],
    ctaText: "Enroll in Advanced Track for ₹4,999",
    ctaAction: "/thank-you"
  },

  // -------------------------------------------------------------
  // SLIDE 25: UPGRADE COMPARISON (PROMOTION)
  // -------------------------------------------------------------
  {
    id: 25,
    pillSection: "Pricing",
    badge: "DECISION MATRIX • CHOOSE YOUR PATH",
    title: "Which Implementation Track",
    titleHighlight: "Is Right For You?",
    subtitle: "Both tracks include our 100% Risk-Free 14-Day Money-Back Guarantee. If you don't save 15+ hours weekly, get a full refund.",
    layout: "upgrade-compare",
    cards: [
      {
        badge: "BEST FOR OPERATORS & STUDENTS",
        title: "4-Week AI Mastery Cohort",
        desc: "For non-technical professionals, marketers, students, and freelancers wanting 10x daily speed and personal mentorship.",
        stat: "₹1,999",
        statLabel: "One-Time (Regular: ₹9,999)",
        bulletPoints: [
          "4 Live Interactive Weekend Builds",
          "1:1 AI Resume & Career Audit",
          "Private Mastermind Community Access",
          "Complete 25+ Prompt Vault & Templates",
          "100% Money-Back Guarantee"
        ],
        accent: "white"
      },
      {
        badge: "BEST FOR ENGINEERS & FOUNDERS",
        title: "Autonomous Agents Mastermind",
        desc: "For developers and agency owners who want to write Python agent code, deploy LangGraph swarms, and close enterprise deals.",
        stat: "₹4,999",
        statLabel: "One-Time (Regular: ₹24,999)",
        bulletPoints: [
          "Everything in 4-Week Cohort Included",
          "LangGraph, AutoGen & CrewAI Architecture",
          "Production Vector RAG & Fine-Tuning Code",
          "2 Private 60-Minute 1:1 Audits with Ankit",
          "₹50,000+ Agency Client Proposal SOWs"
        ],
        accent: "blue"
      }
    ],
    ctaText: "Lock In 80% Workshop Discount Now",
    ctaAction: "/thank-you"
  },

  // -------------------------------------------------------------
  // SLIDE 26: THANK YOU
  // -------------------------------------------------------------
  {
    id: 26,
    pillSection: "RSVP",
    badge: "WORKSHOP COMPLETION",
    title: "Thank You & Congratulations!",
    titleHighlight: "You Are Ahead of 99%",
    subtitle: "You didn't just watch theoretical AI hype today. You built live tools, mastered context stacking, and unlocked permanent leverage.",
    layout: "thank-you",
    cards: [
      {
        tag: "RULE #1",
        title: "Build Within 24 Hours",
        desc: "Knowledge decays at 80% per week without application. Take one prompt and build one real workflow before you sleep tonight.",
        icon: "Clock"
      },
      {
        tag: "RULE #2",
        title: "Never Do It Twice Manually",
        desc: "Whenever you catch yourself doing repetitive writing, data formatting, or copy-pasting, turn it into an automated prompt chain.",
        icon: "Zap"
      },
      {
        tag: "RULE #3",
        title: "Share Your Breakthroughs",
        desc: "Post your deployed websites, automated apps, and time-saving wins in our official community to inspire fellow builders.",
        icon: "Users"
      }
    ],
    notes: "Express gratitude, reinforce the commitment to student success, and open the floor for the final community wrap-up."
  },

  // -------------------------------------------------------------
  // SLIDE 27: SOCIAL LINKS & COMMUNITY
  // -------------------------------------------------------------
  {
    id: 27,
    pillSection: "RSVP",
    badge: "STAY CONNECTED WITH ANKIT SINGH",
    title: "Join the Official Inner Circle",
    titleHighlight: "Let's Keep Building Together",
    subtitle: "Connect across social platforms for daily prompt drops, free AI tool teardowns, live coding streams, and event announcements.",
    layout: "social-hub",
    cards: [
      {
        badge: "OFFICIAL COMMUNITY",
        title: "VIP WhatsApp Community",
        desc: "Instant live session links, presentation slides, bonus prompt sheets, and direct community discussion.",
        tag: "chat.whatsapp.com/JNxvFNnkxOSHlqYPvSH4PG",
        icon: "MessageCircle",
        accent: "green"
      },
      {
        badge: "PROFESSIONAL NETWORK",
        title: "Connect on LinkedIn",
        desc: "Daily breakdowns of agent architectures, productivity frameworks, and high-impact career case studies.",
        tag: "linkedin.com/in/ankit-singh-63022b3a5/",
        icon: "Linkedin",
        accent: "blue"
      },
      {
        badge: "DAILY BREAKDOWNS",
        title: "Twitter / X (@shipxankit)",
        desc: "Bite-sized AI micro-SaaS teardowns, prompt experiments, and unfiltered build logs.",
        tag: "x.com/shipxankit",
        icon: "Twitter",
        accent: "white"
      },
      {
        badge: "DIRECT PORTAL",
        title: "AIWAY Challenge Official Site",
        desc: "Upcoming cohorts, workshops, resource directories, and live production tools.",
        tag: "aiwaychallenge.vercel.app",
        icon: "Globe2",
        accent: "blue"
      }
    ],
    ctaText: "Join WhatsApp Community Now",
    ctaAction: "https://chat.whatsapp.com/JNxvFNnkxOSHlqYPvSH4PG"
  }
];
