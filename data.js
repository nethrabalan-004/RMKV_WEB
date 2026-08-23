// FINFEST '26 Comprehensive Event Data Source
// Extracted and curated from Finfest '26 Rule Book & Finfest '25 Invitation

const FINFEST_DATA = {
  college: {
    name: "Ramakrishna Mission Vivekananda College",
    status: "Autonomous",
    shift: "Evening Shift - 2",
    location: "Mylapore, Chennai - 600 004",
    affiliate: "Unit of Ramakrishna Mission Vidyapith, Chennai (Branch Centre of Belur Math)",
    department: "Post Graduate Department of Accounting & Finance",
    motto: "“We are what our thoughts have made us; so take care of what you think.” — Swami Vivekananda",
    description: "The Ramakrishna Mission Vivekananda College has been endeavouring for more than 75 years to impart man-making and character-building education as envisaged by Swami Vivekananda, nurturing intellectual, moral, and spiritual growth."
  },
  
  meta: {
    eventName: "FINFEST '26",
    tagline: "An Inter-Collegiate Academic Meet",
    theme: "Where Financial Acumen Meets Strategic Vision",
    date: "10th October 2026", // Target festival date
    regDeadline: "2026-09-03T23:59:59", // 03-09-2026 registration closing date
    reportTime: "Prior to 9:00 AM",
    totalEvents: 6,
    registrationUrl: "#register",
    whatsappGroupUrl: "https://chat.whatsapp.com/finfest26",
    ruleBookUrl: "data/Finfest'26 Rule Book.pdf"
  },

  dignitaries: [
    {
      name: "Swami Dhyanagamyanandaji Maharaj",
      designation: "Secretary",
      institution: "Ramakrishna Mission Vidyapith",
      role: "Patron Blessings"
    },
    {
      name: "Brahmachari Akhandachaitanyaji Maharaj",
      designation: "In-Charge",
      institution: "Evening Shift - 2",
      role: "Benediction"
    },
    {
      name: "Dr. S. Kumaresan",
      designation: "Principal",
      institution: "Ramakrishna Mission Vivekananda College",
      role: "Institutional Head"
    },
    {
      name: "Dr. R. Sriram",
      designation: "Shift - 2 Coordinator",
      institution: "Ramakrishna Mission Vivekananda College",
      role: "Administration"
    },
    {
      name: "Dr. V. Manikantan",
      designation: "Head of the Department & Shift-2 Joint Coordinator",
      institution: "P.G. Department of Accounting & Finance",
      role: "Convener"
    }
  ],

  chiefGuests: [
    {
      type: "Inauguration Chief Guest",
      name: "Dr. Soma Valliappan",
      title: "Renowned Author, Speaker & Corporate Trainer",
      organization: "Menmai Management Consultancy Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
      bio: "Prolific writer on finance, investment, self-development, and corporate leadership with decades of executive consulting experience."
    },
    {
      type: "Valediction Chief Guest",
      name: "Mr. Selvaraj",
      title: "Senior Vice President & Regional Sales Head (TN & Kerala)",
      organization: "Bandhan AMC Ltd.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      bio: "Veteran asset management leader shaping mutual fund distribution and investment strategies across South India."
    }
  ],

  panelists: [
    {
      name: "CA. (Mrs.) B.V. Lakshmi Malini",
      role: "Partner",
      firm: "Lakshmimalini & Co, Chartered Accountants",
      domain: "Auditing & Corporate Taxation"
    },
    {
      name: "CA. Srivathson Ramesh",
      role: "Partner",
      firm: "RCAS & Associates LLP",
      domain: "Direct Taxes & Forensic Audits"
    },
    {
      name: "CA. Krishnamoorthy V",
      role: "Partner",
      firm: "RCAS & Associates LLP",
      domain: "Financial Advisory & Corporate Valuation"
    },
    {
      name: "Mr. Ashwin Ramesh",
      role: "Manager",
      firm: "Equitas Small Finance Bank",
      domain: "Commercial Banking & Risk Management"
    },
    {
      name: "Mrs. Maria Vishalini S.",
      role: "Founder & Woman Entrepreneur",
      firm: "Venture Innovations",
      domain: "Startup Ecosystem & Business Growth"
    },
    {
      name: "Mr. L Anston Gehard",
      role: "Corporate Lawyer & Advocate",
      firm: "Legal Advisory Chambers",
      domain: "Corporate Law & Financial Litigation"
    }
  ],

  generalRules: [
    {
      category: "Eligibility",
      icon: "graduation-cap",
      title: "Academic Eligibility",
      text: "Open to all registered Undergraduate (UG) and Postgraduate (PG) students from recognized colleges and universities."
    },
    {
      category: "Registration",
      icon: "clipboard-check",
      title: "Individual & Team Registration",
      text: "Registration shall be done online via Google Form on or before 03-09-2026. Each participant must register separately at the individual level."
    },
    {
      category: "Event Limit",
      icon: "layers",
      title: "Participation Cap",
      text: "One candidate can participate in a maximum of 3 events across the meet. Please ensure events do not have conflicting concurrent slots."
    },
    {
      category: "Reporting",
      icon: "clock",
      title: "Mandatory Reporting by 9:00 AM",
      text: "All participants of FINFEST '26, regardless of their individual event timings, must report at the registration desk prior to 9:00 AM."
    },
    {
      category: "Identity",
      icon: "id-card",
      title: "College ID Verification",
      text: "Valid original College ID cards must be produced at the registration desk without fail for credential verification."
    },
    {
      category: "College Cap",
      icon: "users",
      title: "Department & College Limits",
      text: "A maximum of 2 teams is permitted from a single department, and an overall maximum of 8 teams from a single institution/college."
    },
    {
      category: "Code of Conduct",
      icon: "shield-alert",
      title: "Fair Play & Ethics",
      text: "Any sort of malpractice, such as attempting to influence judges or using unauthorized aids, will lead to immediate disqualification."
    },
    {
      category: "Dress Code",
      icon: "user-check",
      title: "Modest & Formal Attire",
      text: "Participants of all genders must refrain from wearing round-neck T-shirts or hoodies. Strictly modest, formal/semi-formal attire is required."
    },
    {
      category: "Discipline",
      icon: "slash",
      title: "Decorum & Conduct",
      text: "Vulgarity and obscenity in any form are strictly prohibited on campus premises and will result in instant disqualification."
    },
    {
      category: "Arbitration",
      icon: "award",
      title: "Judges' Decision & Trophy",
      text: "The decision of the judges is final and binding in all cases, including tie-breaks. Overall Winners trophy will be awarded to the college with maximum cumulative points."
    }
  ],

  events: [
    {
      id: "stock-wars",
      title: "Stock Wars",
      tagline: "The Ultimate Live Market & Portfolio Simulation",
      category: "Market Simulation",
      badge: "Flagship Event",
      icon: "trending-up",
      color: "#00F0FF",
      accentGlow: "rgba(0, 240, 255, 0.4)",
      venue: "RKN Hall",
      timing: "1:00 PM – 3:30 PM",
      duration: "2 Hours",
      teamSize: "2 Participants per Team",
      teamsPerCollege: "Max 2 Teams per College",
      overview: "Stock Wars is an intense, fast-paced investment strategy competition simulating real-world stock market dynamics. Participants assume the mantle of hedge fund portfolio managers, managing virtual capital through live-action market shifts, corporate announcements, and high-volatility financial events. Test your risk modeling, rapid asset allocation, and nerve under pressure.",
      format: [
        {
          phase: "Stage 1: Capital Inflow & Market Primer",
          desc: "Each team receives an identical corpus of virtual funds along with a curated watchlist of equities, bonds, derivatives, and macroeconomic briefs."
        },
        {
          phase: "Stage 2: Live Trading & News Shocks",
          desc: "Execute buy, sell, and hedge decisions across dynamic trading sessions with live breaking financial news flashes and sector movements."
        },
        {
          phase: "Stage 3: Portfolio Audit & Risk Adjustment",
          desc: "Navigate sudden interest rate swings and corporate earnings surprises to safeguard returns and adjust beta exposure."
        },
        {
          phase: "Stage 4: Final P&L & Strategy Defense",
          desc: "Portfolio performance is liquidated and assessed against risk-adjusted return benchmarks and diversification metrics."
        }
      ],
      criteria: [
        { label: "Portfolio Returns", weight: "40%", desc: "Net generated alpha and overall capital growth." },
        { label: "Strategic Allocation", weight: "25%", desc: "Logical distribution of capital across sectors and asset classes." },
        { label: "Risk Management", weight: "20%", desc: "Hedging efficiency and preservation of capital during downturns." },
        { label: "Scenario Agility", weight: "15%", desc: "Speed and rational response to sudden macroeconomic news shocks." }
      ],
      rules: [
        "Each team must consist of exactly 2 members. Max 2 teams per college.",
        "All transactions are executed strictly using virtual money — no real capital is involved.",
        "Teams must operate strictly within the allotted virtual capital boundary.",
        "All investment orders must be placed within designated trading windows.",
        "Teams must maintain their own ledger of transactions, allocations, and holding weights.",
        "Personal calculators, mobile phones, or smart wearables may be restricted as instructed by invigilators.",
        "Any collusion, price fixing, or inter-team communication results in immediate expulsion.",
        "The highest qualifying risk-adjusted portfolio valuation is declared the winner."
      ]
    },
    {
      id: "business-proposal",
      title: "Business Proposal",
      tagline: "Venture Pitching, Feasibility & Shark Tank Showcase",
      category: "Business Strategy",
      badge: "High Stakes",
      icon: "briefcase",
      color: "#FFD700",
      accentGlow: "rgba(255, 215, 0, 0.4)",
      venue: "Sarada Hall",
      timing: "2:20 PM – 5:00 PM",
      duration: "10 Minutes per Team (8m Pitch + 2m Q&A)",
      teamSize: "Max 2 Members per Team",
      teamsPerCollege: "2 Teams per Department",
      overview: "Business Proposal bridges the gap between academic theory and real-world venture capital. Transform innovative business concepts into bankable, market-ready enterprise blueprints. Present your customer acquisition engine, financial unit economics, revenue architecture, and scalability models before a panel of seasoned Chartered Accountants and corporate venture specialists.",
      format: [
        {
          phase: "Phase 1: Pitch Deck Submission",
          desc: "Submit your comprehensive business pitch in both PPT and PDF formats before the scheduled submission window."
        },
        {
          phase: "Phase 2: The 8-Minute Venture Pitch",
          desc: "Deliver an 8-minute pitch covering market problem, UVP, go-to-market plan, 3-year cash flow projections, and valuation."
        },
        {
          phase: "Phase 3: The 2-Minute Investor Q&A",
          desc: "Face rigorous questioning by the CA & entrepreneur jury on valuation assumptions, customer churn, and regulatory hurdles."
        }
      ],
      criteria: [
        { label: "Creativity & Originality", weight: "20%", desc: "Novelty and market need of the core business proposition." },
        { label: "Financial Feasibility", weight: "25%", desc: "Robustness of revenue models, margins, CAC:LTV, and breakeven point." },
        { label: "Market & Consumer Depth", weight: "20%", desc: "Clear understanding of TAM, target segments, and competitive moats." },
        { label: "Presentation & Visuals", weight: "15%", desc: "Clarity of delivery, slide design, charts, and graph efficacy." },
        { label: "Confidence & Q&A Response", weight: "20%", desc: "Poise, analytical defense, and domain mastery during jury interrogation." }
      ],
      rules: [
        "Each team must consist of a maximum of 2 participants.",
        "The proposed business idea must be original and fully compliant with ethical standards.",
        "Presentation files (PPT & PDF) must be handed over in advance on the registration USB desk.",
        "Each team is allotted exactly 10 minutes (8 min presentation + 2 min Q&A).",
        "A warning bell will ring at the 7-minute mark; presentation must conclude by 8 minutes.",
        "Exceeding the time limit incurs an automatic mark deduction penalty.",
        "Plagiarism, offensive material, or false claims will lead to instant disqualification."
      ]
    },
    {
      id: "forensic-treasure-hunt",
      title: "Forensic Treasure Hunt",
      tagline: "Forensic Accounting & Corporate Fraud Investigation",
      category: "Investigation",
      badge: "Campus Wide",
      icon: "search",
      color: "#00E676",
      accentGlow: "rgba(0, 230, 118, 0.4)",
      venue: "In Campus (Multi-Location)",
      timing: "2:20 PM – 5:00 PM",
      duration: "5 Progressive Stages",
      teamSize: "2 - 3 Members per Team",
      teamsPerCollege: "2 Teams per College",
      overview: "Step into the shoes of forensic auditors and financial intelligence detectives. In this 5-stage campus-wide investigation, uncover corporate embezzlement schemes, decode cooked balance sheets, trace offshore shell entities, and follow cryptic audit clues hidden across campus to build an ironclad case against corporate fraud.",
      format: [
        {
          phase: "Stage 1: Forensic Screening",
          desc: "Answer a rapid-fire series of forensic accounting and logic puzzles to unlock the initial detective dossier."
        },
        {
          phase: "Stage 2: Evidence Analysis",
          desc: "Audit tampered ledger entries, fictitious invoices, and bank trail anomalies to decipher coordinates for physical clues."
        },
        {
          phase: "Stage 3: Investigation Hunt",
          desc: "Navigate campus checkpoints following encrypted forensic trails; solve each riddle to reveal the next suspect's location."
        },
        {
          phase: "Stage 4: Final Case Dossier",
          desc: "Synthesize all forensic evidence, calculate the embezzled sum, identify the mastermind, and present a written report."
        }
      ],
      criteria: [
        { label: "Accuracy of Forensic Audit", weight: "35%", desc: "Pinpointing the exact financial manipulation and misappropriation." },
        { label: "Speed & Checkpoint Completion", weight: "25%", desc: "Elapsed time in solving cryptic location trails." },
        { label: "Dossier Quality & Evidence Chain", weight: "25%", desc: "Logical documentation and cross-verification of clues." },
        { label: "Teamwork & Reasoning", weight: "15%", desc: "Deductive logic and systematic methodology." }
      ],
      rules: [
        "Strictly no on-the-spot registration; only pre-registered candidates are permitted.",
        "Pen and investigation worksheets will be provided by event organizers.",
        "Mobile phones, internet search, smartwatches, and electronic devices are strictly prohibited.",
        "Personal belongings and bags must be deposited at the registration holding room.",
        "Teams must assemble all clues into a final audit report before presenting to judges.",
        "Tampering with clues or misleading other teams results in immediate disqualification."
      ]
    },
    {
      id: "finance-quiz",
      title: "Finance Quiz (Fin-Q)",
      tagline: "Corporate Finance, Global Markets & Buzzer Showdown",
      category: "Analytical Challenge",
      badge: "Brain Buster",
      icon: "help-circle",
      color: "#9D00FF",
      accentGlow: "rgba(157, 0, 255, 0.4)",
      venue: "G-55",
      timing: "2:20 PM – 5:00 PM",
      duration: "Prelims + 4 On-Stage Rounds",
      teamSize: "2 Members per Team",
      teamsPerCollege: "2 Teams per Department",
      overview: "A masterclass in financial trivia and intellectual combat. Fin-Q tests participants on central banking policies, fiscal regulations, mergers & acquisitions history, crypto-economics, corporate balance sheet jargon, stock ticker acronyms, and global financial crises from the 1929 Great Depression to contemporary fintech revolutions.",
      format: [
        {
          phase: "Round 1: Written Prelims",
          desc: "30 rapid-fire multiple choice and numerical reasoning questions to shortlist the top 6 finalist teams."
        },
        {
          phase: "Round 2: Central Bank & M&A Arena",
          desc: "Direct questions on fiscal policy, RBI guidelines, historic corporate buyouts, and balance sheet ratios."
        },
        {
          phase: "Round 3: Visual & Audio Clues",
          desc: "Identify legendary finance moguls, scam whistleblowers, corporate logos, and historical financial charts."
        },
        {
          phase: "Round 4: High-Stakes Negative Buzzer Round",
          desc: "Speed-buzzer round with +10 for correct answers and -5 for incorrect answers or false triggers."
        }
      ],
      criteria: [
        { label: "Knowledge Depth", weight: "40%", desc: "Mastery across corporate finance, economics, and tax laws." },
        { label: "Buzzer Speed", weight: "30%", desc: "Reaction time during high-pressure buzzer face-offs." },
        { label: "Calculation Accuracy", weight: "20%", desc: "Correct computation of financial metrics without aids." },
        { label: "Risk Strategy", weight: "10%", desc: "Judicious betting during the negative marking showdown." }
      ],
      rules: [
        "Teams consist of 2 participants.",
        "No electronic gadgets or smartphones are allowed during both prelims and finals.",
        "In the buzzer round, passing questions is permitted; negative marks apply on wrong buzzer attempts.",
        "Quizmaster's decisions regarding answer acceptability and score tallying are final."
      ]
    },
    {
      id: "crisis-management",
      title: "Crisis Management Challenge",
      tagline: "Corporate PR, Turnaround Strategy & Boardroom Defense",
      category: "Case Study",
      badge: "Executive Trial",
      icon: "alert-triangle",
      color: "#FF4081",
      accentGlow: "rgba(255, 64, 129, 0.4)",
      venue: "S-19",
      timing: "2:20 PM – 5:00 PM",
      duration: "Case Study + 12m Simulation",
      teamSize: "2 Members per Team",
      teamsPerCollege: "2 Teams per College",
      overview: "When a multi-billion-dollar corporation plunges into a catastrophic liquidity crisis, accounting fraud disclosure, or hostile takeover bid, the board turns to you. In this immersive simulation, formulate a rapid emergency recovery blueprint, manage media backlash, restructure debt covenants, and defend your survival plan before a ruthless board of inquiry.",
      format: [
        {
          phase: "Phase 1: Emergency Briefing",
          desc: "Receive a live confidential dossier detailing a company's catastrophic financial collapse and stakeholder revolt."
        },
        {
          phase: "Phase 2: Strategy Formulation (45 mins)",
          desc: "Formulate a concrete turnaround plan addressing liquidity injections, debt restructuring, PR damage control, and regulatory compliance."
        },
        {
          phase: "Phase 3: Hostile Press Conference & Board Defense",
          desc: "Deliver your crisis address and withstand tough cross-examination from aggressive reporters and skeptical investors."
        }
      ],
      criteria: [
        { label: "Turnaround Feasibility", weight: "30%", desc: "Practicality and financial viability of the restructuring solution." },
        { label: "Crisis Leadership & Poise", weight: "25%", desc: "Composure and command under aggressive adversarial grilling." },
        { label: "Stakeholder Management", weight: "25%", desc: "Balancing the interests of creditors, shareholders, employees, and regulators." },
        { label: "PR & Communication", weight: "20%", desc: "Effectiveness of public statements and transparency handling." }
      ],
      rules: [
        "Teams must comprise 2 members.",
        "Strict 45-minute preparation time following the release of the crisis scenario.",
        "Each team gets 8 minutes to present their turnaround strategy followed by 4 minutes of jury interrogation.",
        "Teams will be judged on strategic depth, regulatory awareness, and financial realism."
      ]
    },
    {
      id: "fintech-innovation",
      title: "FinTech Innovation & Strategy",
      tagline: "AI in Wealthtech, Green Finance & Algorithmic Models",
      category: "Next-Gen Finance",
      badge: "Emerging Frontier",
      icon: "cpu",
      color: "#00B0FF",
      accentGlow: "rgba(0, 176, 255, 0.4)",
      venue: "Commerce Lab",
      timing: "2:20 PM – 5:00 PM",
      duration: "Presentation + Model Demo",
      teamSize: "2 Members per Team",
      teamsPerCollege: "2 Teams per Department",
      overview: "Finance is evolving with generative AI, decentralized ledgers, ESG carbon credits, and algorithmic high-frequency systems. Pitch cutting-edge solutions addressing financial inclusion, automated robo-advisory, smart contract micro-lending, or blockchain cross-border remittances.",
      format: [
        {
          phase: "Stage 1: Architecture Pitch",
          desc: "Present the technological architecture, user experience flow, and regulatory compliance (RBI Sandbox standards)."
        },
        {
          phase: "Stage 2: Economic & Scalability Model",
          desc: "Demonstrate monetization mechanisms, cybersecurity safeguards, fraud mitigation, and projected CAGR."
        },
        {
          phase: "Stage 3: Interactive Demo & Defense",
          desc: "Showcase prototype wireframes, code logic, or simulated stress test data before our technology and finance jury."
        }
      ],
      criteria: [
        { label: "Technological Ingenuity", weight: "30%", desc: "Innovative use of modern fintech frameworks and protocols." },
        { label: "Regulatory Compliance", weight: "25%", desc: "Alignment with RBI, SEBI, and data privacy safeguards." },
        { label: "Commercial Viability", weight: "25%", desc: "Monetization clarity, unit economics, and scalability." },
        { label: "Presentation & Prototype", weight: "20%", desc: "Clarity of wireframes, prototype flow, and Q&A handling." }
      ],
      rules: [
        "Team size: 2 members.",
        "Prototypes, Figma wireframes, or slide decks are welcomed for the presentation.",
        "Time limit: 8 minutes pitch + 3 minutes technical evaluation.",
        "Ideas must adhere to ethical banking and consumer data privacy standards."
      ]
    }
  ],

  schedule: [
    {
      time: "09:00 AM – 10:00 AM",
      title: "Participant Reporting & Desk Verification",
      venue: "Main College Foyer / Registration Desk",
      type: "Admin",
      desc: "Mandatory check-in for all participating colleges. ID verification, event kit handover, and breakfast briefing."
    },
    {
      time: "01:00 PM – 03:30 PM",
      title: "Stock Wars: Live Market Trading Arena",
      venue: "RKN Hall",
      type: "Event",
      desc: "Flagship live portfolio trading simulation across multiple market sectors with volatile news triggers."
    },
    {
      time: "01:15 PM – 02:15 PM",
      title: "Grand Inauguration Ceremony",
      venue: "Main Auditorium",
      type: "Ceremony",
      desc: "College Prayer, Welcome Address, Benedictory Address by Swamiji, Principal Address, and Keynote Address by Chief Guest Dr. Soma Valliappan."
    },
    {
      time: "02:20 PM – 05:00 PM",
      title: "Concurrent Academic Competitions",
      venue: "Multiple Department Halls",
      type: "Event",
      details: [
        "Business Proposal (Sarada Hall)",
        "Forensic Accounting Treasure Hunt (Campus Wide)",
        "Finance Quiz Fin-Q (Hall G-55)",
        "Crisis Management Challenge (Hall S-19)",
        "FinTech Innovation & Strategy (Commerce Lab)"
      ],
      desc: "Concurrent high-intensity academic battles across multiple specialized finance domains."
    },
    {
      time: "05:30 PM – 07:00 PM",
      title: "Valedictory Ceremony & Overall Trophy Presentation",
      venue: "Main Auditorium",
      type: "Ceremony",
      desc: "Welcome Address, Shift-2 Coordinator's Address, Chief Guest Address by Mr. Selvaraj (Bandhan AMC), Prize Distribution, Overall Champions Trophy award, and Vote of Thanks."
    }
  ],

  coordinators: {
    faculty: [
      {
        name: "Dr. V. Manikantan",
        designation: "Head of the Department & Shift-2 Joint Coordinator",
        phone: "+91 94440 00000",
        email: "hod.acctfin@rkmvc.ac.in"
      },
      {
        name: "Dr. R. Sriram",
        designation: "Shift - 2 Coordinator",
        phone: "+91 98400 00000",
        email: "coordinator.s2@rkmvc.ac.in"
      }
    ],
    student: [
      {
        name: "Secretary - Student Council",
        role: "Overall Student Coordinator",
        phone: "+91 91234 56789",
        email: "finfest26@rkmvc.ac.in"
      },
      {
        name: "Joint Secretary - Finfest '26",
        role: "Event Logistics & Registrations",
        phone: "+91 98765 43210",
        email: "registration.finfest@rkmvc.ac.in"
      }
    ]
  },

  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "About College", href: "#about" },
    { label: "General Rules", href: "#rules" },
    { label: "All 6 Events", href: "#events" },
    { label: "Schedule", href: "#schedule" },
    { label: "Guests & Panelists", href: "#guests" },
    { label: "Register", href: "#register" }
  ]
};
