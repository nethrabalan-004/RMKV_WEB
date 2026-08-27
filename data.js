// FINFEST '26 Comprehensive Event Data Source
// Synchronized with Official Rule Book & Updated Form Registrations

const FINFEST_DATA = {
  college: {
    name: "Ramakrishna Mission Vivekananda Evening College",
    status: "Autonomous",
    shift: "Evening Shift - 2",
    location: "Mylapore, Chennai - 600 004",
    affiliate: "Unit of Ramakrishna Mission Vidyapith, Chennai (Branch Centre of Ramakrishna Mission, Belur Math, West Bengal)",
    department: "P. G. DEPARTMENT OF ACCOUNTING & FINANCE",
    motto: "“We are what our thoughts have made us; so take care of what you think.” — Swami Vivekananda",
    description: "The Ramakrishna Mission Vivekananda College is a unit of Ramakrishna Mission Vidyapith, Chennai, which is a branch center of Ramakrishna Mission, Belur Math, West Bengal. It occupies a place of pre-eminence among the Educational Institutions of the Mission in India. Imbued with the spiritual ambience, the institution has been endeavouring for more than 75 years to impart man-making and character-building education as envisaged by Swami Vivekananda, nurturing intellectual, moral, and spiritual excellence."
  },
  
  meta: {
    eventName: "FINFEST '26",
    tagline: "An Inter - Collegiate Academic Meet",
    subTagline: "THE ULTIMATE FINANCE CHALLENGE",
    theme: "6 Championship Events",
    date: "09-09-2026", // 09 September 2026
    dateDisplay: "09 SEP 2026",
    eventTime: "2:00 PM",
    eventStartIso: "2026-09-09T14:00:00", // Kickoff at 2:00 PM for countdown timer
    regDeadline: "2026-09-03T23:59:59", // Closes by 03-09-2026
    regDeadlineDisplay: "03-09-2026",
    reportTime: "Prior to 1:00 PM",
    venueDisplay: "College Campus, Mylapore, Chennai - 04",
    officialEmail: "finfest.26.rkmvc@gmail.com",
    totalEvents: 6,
    registrationUrl: "#register",
    ruleBookUrl: "data/Finfest'26 Rule Book.pdf"
  },

  dignitaries: [
    {
      name: "Swami Dhyanagamyanandaji Maharaj",
      designation: "Secretary",
      institution: "Ramakrishna Mission Vidyapith, Chennai",
      role: "Patron Blessings"
    },
    {
      name: "Brahmachari Akhandachaitanyaji Maharaj",
      designation: "In-Charge",
      institution: "Evening Shift - 2",
      role: "Benediction"
    },
    {
      name: "Dr. V. Manikantan",
      designation: "Head of the Department & Shift-2 Joint Coordinator",
      institution: "P. G. Department of Accounting & Finance",
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

  // General Rules from Official Rule Book
  generalRules: [
    {
      category: "Eligibility",
      icon: "graduation-cap",
      title: "Academic Eligibility",
      text: "Open to all undergraduate and postgraduate students from recognized colleges and universities."
    },
    {
      category: "Registration",
      icon: "clipboard-check",
      title: "Online Registration Deadline",
      text: "Registration shall be done online via the Google Form before the last date. Online registration will be closed by 03-09-2026."
    },
    {
      category: "Individual Level",
      icon: "users",
      title: "Separate Participant Registration",
      text: "Registration should be done at individual level (Each participant should register separately)."
    },
    {
      category: "Event Limit",
      icon: "layers",
      title: "Maximum 3 Events per Candidate",
      text: "One candidate can participate in a maximum of 3 events across FINFEST '26."
    },
    {
      category: "Reporting",
      icon: "clock",
      title: "Mandatory Reporting Prior to 1:00 PM",
      text: "All the participants of FINFEST '26, regardless of the event timings, have to report at the registration desk prior to 1:00 PM."
    },
    {
      category: "Identification",
      icon: "id-card",
      title: "College ID Card Mandatory",
      text: "College ID cards have to be produced at the registration desk without fail."
    },
    {
      category: "Contingent Quota",
      icon: "shield",
      title: "Department & College Team Limits",
      text: "A maximum of 2 teams is allowed from a department and 8 teams from a college."
    },
    {
      category: "Ethics",
      icon: "shield-alert",
      title: "Zero Tolerance for Malpractice",
      text: "Any sort of malpractice, like trying to influence the judges, will lead to immediate Disqualification."
    },
    {
      category: "Dress Code",
      icon: "user-check",
      title: "Modest Formal / Semi-Formal Attire",
      text: "Participants of all genders should refrain from wearing round neck T-shirts or hoodies, and should be modestly dressed."
    },
    {
      category: "Discipline",
      icon: "slash",
      title: "Decorum & Campus Conduct",
      text: "Vulgarity and obscenity in any form are strictly prohibited and will lead to immediate disqualification."
    },
    {
      category: "Judging",
      icon: "award",
      title: "Finality of Judges' Decision",
      text: "The decision of the judges is final and binding in all cases, including a tie break. Any argument with the judges will lead to disqualification."
    },
    {
      category: "Grievances",
      icon: "alert-circle",
      title: "Grievance Redressal Committee",
      text: "Any grievances regarding the on and off-stage events should be reported to the grievances committee before the announcement of the results."
    },
    {
      category: "Arbitration",
      icon: "check-circle",
      title: "Comfestia Arbitration Rights",
      text: "If any situation arises pertaining to any issue, the Comfestia team has all rights to arbitrate."
    }
  ],

  // 6 Official Challenges with exact Google Forms from User
  events: [
    {
      id: "forensic-accounting",
      title: "Forensic Treasure Hunt",
      subtitle: "The Treasure Hunt",
      tagline: "Uncover Financial Discrepancies, Crack Cryptic Clues & Build the Case",
      category: "Investigation",
      badge: "Campus-Wide Hunt",
      icon: "search",
      color: "#00E676",
      accentGlow: "rgba(0, 230, 118, 0.4)",
      venue: "Campus Wide (Multi-Location)",
      timing: "2:45 PM – 5:15 PM",
      duration: "5 Progressive Stages",
      teamSize: "2 - 3 Members per Team",
      teamsPerCollege: "Max 2 Teams per Dept (8 per College)",
      regFormUrl: "https://forms.gle/7gGtVhC7zxNmPN8N9",
      overview: "The event consists of five stages where participants identify financial errors, solve challenges, and use the clues obtained to proceed to the next stage. Step into the shoes of forensic auditors and fraud intelligence investigators to reconstruct financial paper trails across campus.",
      format: [
        {
          phase: "Stage 1 – Forensic Screening",
          desc: "Participants will answer a set of basic forensic and logical reasoning questions. Correct answers will qualify the team for the next stage."
        },
        {
          phase: "Stage 2 – Evidence Analysis",
          desc: "Teams will analyse the given forensic evidence and identify the relevant clues. The correct solution will lead them to the next stage."
        },
        {
          phase: "Stage 3 – Investigation Hunt",
          desc: "Teams will follow a series of forensic clues placed at designated campus locations. Each correctly solved clue will reveal the next step of the investigation."
        },
        {
          phase: "Stage 4 – Final Case",
          desc: "Qualified teams will analyse the collected clues and evidence to identify the final solution. The team with the highest score and best accuracy will be declared the winner."
        }
      ],
      criteria: [
        { label: "Accuracy of Forensic Audit", weight: "35%", desc: "Precision in identifying financial errors, forged documents, and irregularities." },
        { label: "Investigation Speed", weight: "25%", desc: "Time taken to solve checkpoint riddles and navigate campus locations." },
        { label: "Final Case Report Dossier", weight: "25%", desc: "Clarity, documentation, and logical structure of the submitted final investigation report." },
        { label: "Deductive Reasoning & Teamwork", weight: "15%", desc: "Collaborative problem-solving and systematic deduction." }
      ],
      rules: [
        "1. No on-the-spot registration.",
        "2. Pen and paper will be provided for calculations.",
        "3. Mobile phones, calculators, smart watches, and other electronic devices are strictly prohibited.",
        "4. Bags must be kept in the designated area.",
        "5. Participants must compile the collected clues/data and submit a final report to the judges.",
        "6. Participants may approach the event representatives for clarification at any stage.",
        "7. Violation of the rules may result in immediate disqualification."
      ]
    },
    {
      id: "finquizathon",
      title: "FinQuizathon",
      subtitle: "Think. Analyze. Conquer.",
      tagline: "Finance Quiz with a Twist — Physical Speed Challenges & Rapid Buzzer Arena",
      category: "Speed & Knowledge",
      badge: "High Octane",
      icon: "help-circle",
      color: "#9D00FF",
      accentGlow: "rgba(157, 0, 255, 0.4)",
      venue: "Hall G-55",
      timing: "2:45 PM – 5:15 PM",
      duration: "Prelims + Final Round",
      teamSize: "2 Members per Team",
      teamsPerCollege: "Max 2 Teams per Dept (8 per College)",
      regFormUrl: "https://forms.gle/91fjxE2CABFfWYoQA",
      overview: "Finance Quiz with a Twist is an engaging finance-based competition that combines financial knowledge, speed, physical challenges, visual recognition, and quick decision-making. Participants must complete physical challenges and answer finance and business-related questions to score points and advance through the competition.",
      format: [
        {
          phase: "Round 1 – Preliminary Round (Block Arrangement Race)",
          desc: "6 teams will compete at each table. A colour/pattern block arrangement will be displayed on the digital board. Teams must race to the designated table and arrange the blocks according to the displayed pattern. Every team that successfully completes the challenge receives 1 point. The team that completes first and presses the buzzer gets the first opportunity to answer. If the 1st team answers incorrectly, the opportunity passes to the 2nd team that finished the challenge. If the 2nd also fails, the question is closed. Top 2 teams from each table qualify for the Final Round."
        },
        {
          phase: "Final Round – Logo Identification (Paper Cup Pyramid)",
          desc: "5 teams will qualify for the Final Round. The physical challenge will be a Paper Cup Pyramid. A corporate logo and challenge pattern will be displayed on the digital board. Teams must complete the Paper Cup Pyramid according to the pattern. Buzzer follows a First-Come, First-Serve system. Only the first 3 teams to successfully complete the challenge receive the challenge point. 1st Team: 1 pt + 1st answer chance. 2nd Team: 1 pt + 2nd answer chance. 3rd Team: 1 pt (no answer chance)."
        }
      ],
      scoringMatrix: [
        { scenario: "Challenge completed successfully", points: "1 Point" },
        { scenario: "Challenge + Correct Answer", points: "3 Points Total" },
        { scenario: "Challenge + Wrong Answer", points: "1 Point" },
        { scenario: "Challenge not completed / Premature buzzer", points: "0 Points (No answering opportunity)" },
        { scenario: "4th & 5th Teams in Final Round", points: "0 Points" }
      ],
      criteria: [
        { label: "Financial Domain Knowledge", weight: "40%", desc: "Accuracy across corporate finance, commerce, economics, and corporate logos." },
        { label: "Physical Agility & Pattern Speed", weight: "30%", desc: "Speed in assembling color blocks and paper cup pyramids correctly." },
        { label: "Buzzer Reaction & Strategy", weight: "20%", desc: "Quick decision-making and avoiding premature buzzer penalties." },
        { label: "Team Coordination", weight: "10%", desc: "Flawless teamwork during physical races and question handling." }
      ],
      rules: [
        "1. Teams must follow all instructions given by the event coordinators.",
        "2. The physical challenge must be correctly completed before pressing the buzzer.",
        "3. Pressing the buzzer before completing the challenge results in 0 points and no answering opportunity.",
        "4. No mobile phones, internet searches or outside assistance are permitted.",
        "5. Teams must maintain discipline, teamwork and sportsmanship throughout the competition.",
        "6. Participants must follow the designated order and instructions during every challenge.",
        "7. If teams are tied for a qualifying position, a tie-breaker challenge/question will be conducted.",
        "8. The number of teams per table and qualification structure may be adjusted according to the total number of participants.",
        "9. Any cheating, misconduct or deliberate violation may result in disqualification.",
        "10. The moderator/judge’s decision will be final and binding."
      ]
    },
    {
      id: "business-proposal",
      title: "Business Proposal",
      subtitle: "Build. Pitch. Win.",
      tagline: "Venture Pitching, Market Feasibility, Revenue Modeling & Investor Defense",
      category: "Venture Strategy",
      badge: "Shark Tank Arena",
      icon: "briefcase",
      color: "#FFD700",
      accentGlow: "rgba(255, 215, 0, 0.4)",
      venue: "Sarada Hall",
      timing: "2:45 PM – 5:15 PM",
      duration: "10 Minutes per Team (8m Pitch + 2m Q&A)",
      teamSize: "Maximum of 2 Members per Team",
      teamsPerCollege: "Max 2 Teams per Dept (8 per College)",
      regFormUrl: "https://forms.gle/eLhDmkv7AEYRwPHAA",
      overview: "The event aims to provide students with hands-on exposure to business planning, entrepreneurship, and professional pitching. It enables participants to transform their ideas into practical business proposals while understanding market trends, target consumers, competition, revenue models, and financial feasibility. The event also provides an opportunity to interact with professionals and bridge the gap between classroom learning and industry practice.",
      format: [
        {
          phase: "Structure & Pitch Deck Submission",
          desc: "Participants must submit their business proposal in PPT and PDF formats in advance into the specified drive communicated after registration."
        },
        {
          phase: "The 8-Minute Executive Pitch",
          desc: "Each team is allotted 8 minutes for the presentation. A reminder bell will be given at the 7-minute mark. Participants will be notified at the 8-minute mark to conclude the presentation."
        },
        {
          phase: "The 2-Minute Investor Q&A",
          desc: "2 minutes will be allotted for the Q&A session. Face questioning by the jury panel of Chartered Accountants and corporate entrepreneurs on financial feasibility, unit economics, and market moats."
        }
      ],
      criteria: [
        { label: "Originality & Market Need", weight: "25%", desc: "Novelty of the business proposition and relevance to the proposed market." },
        { label: "Financial Feasibility & Revenue Model", weight: "25%", desc: "Unit economics, cash flow projections, margins, and monetization clarity." },
        { label: "Market Trends & Competitive Moats", weight: "20%", desc: "Target consumer definition, TAM/SAM/SOM, and competitive differentiation." },
        { label: "Visual Quality & Deck Design", weight: "15%", desc: "Use of supporting visuals, charts, graphs, and financial projections." },
        { label: "Q&A Handling & Poise", weight: "15%", desc: "Precision, domain mastery, and defense during judge interrogation." }
      ],
      rules: [
        "1. Each team must consist of Maximum of 2 members.",
        "2. The business idea presented must be original and relevant to the proposed market.",
        "3. Participants must submit their PPT and PDF within the specified submission deadline in the designated drive.",
        "4. The presentation must be prepared and presented by the registered participants only.",
        "5. Participants must strictly adhere to the 10-minute time limit (8 min pitch + 2 min Q&A).",
        "6. Exceeding the allotted presentation time may result in deduction of marks.",
        "7. Participants must be prepared to answer questions raised by the judges during the Q&A session.",
        "8. Use of offensive, inappropriate, or plagiarised content is strictly prohibited.",
        "9. Participants may use supporting visuals, charts, graphs, financial projections, and other relevant materials in their presentation.",
        "10. The decision of the judging panel will be final and binding.",
        "11. Failure to comply with the rules may result in disqualification."
      ]
    },
    {
      id: "stock-wars",
      title: "Stock Wars",
      subtitle: "Trade. Risk. Conquer.",
      tagline: "Live-Action Virtual Capital Allocation, Asset Optimization & Market Strategy",
      category: "Portfolio Simulation",
      badge: "Flagship Arena",
      icon: "trending-up",
      color: "#00F0FF",
      accentGlow: "rgba(0, 240, 255, 0.4)",
      venue: "RKN Hall",
      timing: "2:45 PM – 5:15 PM",
      duration: "Multi-Round Live Trading Simulation",
      teamSize: "2 Participants per Team",
      teamsPerCollege: "Only 2 Teams per College",
      regFormUrl: "https://forms.gle/fuy3anYpyzaYKaaM7",
      overview: "Stock Wars is an investment strategy competition that simulates real-world stock market dynamics. Participants take on the role of portfolio managers, using virtual funds to analyse market scenarios, allocate investments, and optimise their portfolios. The event tests financial knowledge, risk assessment, strategic thinking, and decision-making under time constraints.",
      format: [
        {
          phase: "Virtual Capital Inflow & Watchlist Setup",
          desc: "Each team receives a fixed amount of virtual funds at the beginning of the event. A curated list of stocks and market scenarios will be provided."
        },
        {
          phase: "Dynamic Live Trading Rounds",
          desc: "Teams must analyse available investment options, deploy capital, and build portfolios within the allotted time under changing macroeconomic conditions."
        },
        {
          phase: "Volatility Shocks & Market Events",
          desc: "Participants may be required to respond dynamically to changing market conditions, earnings surprises, and sector shifts during the event."
        },
        {
          phase: "Final Portfolio Evaluation",
          desc: "The final portfolio will be evaluated based on its profitability, diversification, and risk management parameters."
        }
      ],
      criteria: [
        { label: "Portfolio Returns", weight: "35%", desc: "Overall profitability generated from investments." },
        { label: "Strategic Allocation", weight: "25%", desc: "Effective distribution of funds across selected stocks and asset classes." },
        { label: "Risk Management", weight: "25%", desc: "Ability to balance high- and low-risk investments and hedge against volatility." },
        { label: "Decision-Making", weight: "15%", desc: "Ability to respond effectively and rationally to market scenarios under time constraints." }
      ],
      rules: [
        "1. Only 2 teams per college, with 2 participants per team, will be permitted.",
        "2. All transactions will be carried out using virtual funds only; no real money will be involved.",
        "3. Teams must operate within the virtual fund limit provided at the beginning of the event.",
        "4. Participants must make all investment decisions within the specified time limit.",
        "5. Teams must maintain their own record of investments, allocations, and portfolio performance.",
        "6. Mobile phones, calculators, or other electronic devices may be restricted as per the organisers' instructions during the competition.",
        "7. Participants must not communicate with or seek assistance from other teams during the event.",
        "8. Any attempt to manipulate, obtain unauthorised information, or interfere with another team's portfolio will result in disqualification.",
        "9. The team achieving the highest final portfolio value, while satisfying the evaluation criteria, will be declared the winner.",
        "10. The decision of the judges/event coordinators will be final and binding.",
        "11. The organisers reserve the right to modify the event format, timings, or rules based on operational requirements."
      ]
    },
    {
      id: "tughlaq-durbar",
      title: "Tughlaq Durbar",
      subtitle: "Strategy Meets Power",
      tagline: "Corporate-Political Crisis, Policy Warfare, Fiscal Diplomacy & Cabinet Defense",
      category: "Strategic Diplomacy",
      badge: "Imperial Assembly",
      icon: "crown",
      color: "#FF5722",
      accentGlow: "rgba(255, 87, 34, 0.4)",
      venue: "Hall S-19",
      timing: "2:45 PM – 5:15 PM",
      duration: "Imperial Cabinet Simulation",
      teamSize: "2 Participants per Team",
      teamsPerCollege: "Max 2 Teams per Dept (8 per College)",
      regFormUrl: "https://forms.gle/91fjxE2CABFfWYoQA",
      overview: "Strategy Meets Power. Step into the royal court of economic high command where fiscal policy meets high-stakes power politics. Participants assume the roles of strategic ministers, treasury heads, and crisis diplomats navigating imperial decrees, state treasury deficits, trade wars, public revolts, and geopolitical conflicts. Defend radical policy shifts before a scrutinizing assembly of lords and judges.",
      format: [
        {
          phase: "Phase 1 – The Imperial Decree & Crisis Dossier",
          desc: "Teams receive a high-stakes scenario involving acute treasury insolvency, currency revaluation, hyperinflation, or sudden geopolitical trade sanctions."
        },
        {
          phase: "Phase 2 – Durbar Policy Drafting & Cabinet Alliances",
          desc: "Formulate an emergency economic blueprint, manage factional interests, negotiate strategic coalitions with rival ministers, and draft executive decrees."
        },
        {
          phase: "Phase 3 – Floor Defense & Sovereign Arbitration",
          desc: "Defend your radical economic reforms under aggressive questioning from the Grand Vizier and judicial panel. Navigate surprise court disruptions."
        }
      ],
      criteria: [
        { label: "Strategic Foresight & Policy Depth", weight: "35%", desc: "Viability, historical/economic logic, and long-term consequences of proposed decrees." },
        { label: "Diplomatic Negotiation & Coalition Building", weight: "25%", desc: "Tactical acumen in brokering power deals and managing conflicting stakeholder factions." },
        { label: "Crisis Management & Composure", weight: "25%", desc: "Handling unexpected economic shocks and hostile cross-examination in the court." },
        { label: "Rhetoric & Oratory Defense", weight: "15%", desc: "Command, conviction, poise, and persuasiveness in presenting before the throne." }
      ],
      rules: [
        "1. Each team must consist of 2 participants.",
        "2. All teams must report prior to 1:00 PM; no on-the-spot registrations permitted.",
        "3. Preparation time and assembly speaking order will be strictly regulated by court marshals.",
        "4. Any unruly conduct, personal insults, or breach of assembly decorum will lead to immediate expulsion.",
        "5. Electronic devices and outside communication are strictly barred during the Durbar session.",
        "6. The decision of the Durbar Jury and Grand Vizier is final and unquestionable."
      ]
    },
    {
      id: "unofin",
      title: "UnoFin",
      subtitle: "The Uno Challenge",
      tagline: "UNO-Inspired Finance Strategy Game with Color Bowls & Special Powers",
      category: "Card Strategy",
      badge: "Card Battle",
      icon: "zap",
      color: "#00E5FF",
      accentGlow: "rgba(0, 229, 255, 0.4)",
      venue: "Commerce Lab",
      timing: "2:45 PM – 5:15 PM",
      duration: "Tournament Card Rounds",
      teamSize: "2 Participants per Team (Both Actively Playing)",
      teamsPerCollege: "Max 2 Teams per Dept (8 per College)",
      regFormUrl: "https://forms.gle/cehoSq8ZcCCmLvoH8",
      overview: "UNOFIN is a team-based finance strategy game inspired by UNO, designed to test participants’ financial knowledge, strategic thinking, teamwork, speed and decision-making. Teams must strategically play their cards and answer finance-related MCQs to eliminate all their cards and progress through the tournament.",
      format: [
        {
          phase: "Gameplay & Domain Color Bowls",
          desc: "Teams play UNO cards by matching the colour or number of the Open Card. After playing a normal card, the team answers an MCQ within 20 seconds from the corresponding colour bowl: 🟡 Yellow – Commerce | 🔴 Red – Accounting & Finance | 🟢 Green – Business Management | 🔵 Blue – Marketing."
        },
        {
          phase: "Turn Rules & Alternating Answers",
          desc: "Correct answer → Card is successfully played with no penalty. Wrong/No answer → Draw 2 cards, subject to special-card rules. Questions must be answered alternately by both team members. When one card remains, the team must declare “UNO!”"
        }
      ],
      specialPowers: [
        {
          power: "+2 – “TAX PENALTY”",
          effect: "Player skips the question. +2 can be stacked. If unable to stack, answer the top-card colour question: Correct → draw half penalty | Wrong → full penalty + 1 card."
        },
        {
          power: "+4 – “MARKET CRASH”",
          effect: "Choose a colour; no question. +4 can be stacked. If unable to stack: Correct → draw half penalty | Wrong → full penalty + 1 card."
        },
        {
          power: "SKIP – “BANK HOLIDAY”",
          effect: "Player skips the question and next team’s turn. Skipped team answers the Skip-card colour question: Correct → no penalty | Wrong → draw 2 cards."
        },
        {
          power: "COLOUR CHANGE",
          effect: "Change the colour and select a random team to answer from that colour bowl: Correct → no penalty | Wrong → draw 2 cards."
        },
        {
          power: "REVERSE – “MARKET REVERSAL”",
          effect: "Answer from the card’s colour: Correct → Reverse takes effect, no penalty | Wrong → Reverse takes effect + draw 2 cards."
        }
      ],
      criteria: [
        { label: "Card Elimination Speed", weight: "40%", desc: "Fastest team to shed all cards and win rounds." },
        { label: "Domain Accuracy across 4 Bowls", weight: "30%", desc: "Scoring correct answers across Commerce, Accounting, Management & Marketing." },
        { label: "Special Power Tactical Mastery", weight: "20%", desc: "Effective stacking, penalty evasion, and color redirection." },
        { label: "Turn Discipline & Team Synergy", weight: "10%", desc: "Adherence to 20s timers, alternate answering, and UNO call." }
      ],
      rules: [
        "1. Each team must consist of 2 participants, and both members must actively participate.",
        "2. Questions must be answered alternately by the two team members.",
        "3. Each question must be answered within 20 seconds.",
        "4. Mobile phones, internet searches and outside assistance are strictly prohibited.",
        "5. Teams must follow the official card, turn and special-power rules.",
        "6. A team with one card remaining must declare “UNO!” Failure to do so results in a 2-card penalty.",
        "7. +2 and +4 cards follow their respective accumulated-penalty rules.",
        "8. Maximum Card Limit: A team can hold a maximum of 18 cards. If a team reaches 18 cards, the team will be immediately eliminated from the game.",
        "9. No discussion or assistance from other teams is permitted during gameplay.",
        "10. Teams must maintain proper discipline and sportsmanship throughout the event.",
        "11. The tournament structure, number of teams per table and qualification criteria may be adjusted according to the number of participants.",
        "12. Any cheating, misconduct or violation of rules may result in immediate disqualification.",
        "13. The moderator/judge’s decision is final and binding regarding questions, penalties, disputes and gameplay.",
        "14. Detailed explanations of the +2, +4 and other special powers will be given by the moderator before the commencement of the game."
      ]
    }
  ],

  // Official Timeline based on Rule Book (Reporting Prior to 1:00 PM, Event Kickoff 2:00 PM)
  schedule: [
    {
      time: "01:00 PM – 02:00 PM",
      title: "Participant Reporting & Desk Verification",
      venue: "Main College Registration Desk",
      type: "Admin",
      desc: "Mandatory check-in for all participating contingents prior to 1:00 PM. Original College ID card verification, team verification, and delegate briefing."
    },
    {
      time: "02:00 PM – 02:45 PM",
      title: "Grand Inauguration Ceremony",
      venue: "Main Auditorium",
      type: "Ceremony",
      desc: "College Prayer, Welcome Address, Benedictory Address by Revered Swamiji, and Keynote Address by Chief Guest Dr. Soma Valliappan."
    },
    {
      time: "02:45 PM – 05:15 PM",
      title: "The 6 Championship Challenges (Simultaneous Arenas)",
      venue: "Designated Department Halls & Campus Grounds",
      type: "Event",
      details: [
        "Forensic Treasure Hunt: The Treasure Hunt (Campus Wide Multi-Location)",
        "FinQuizathon: Think. Analyze. Conquer. (Hall G-55)",
        "Business Proposal: Build. Pitch. Win. (Sarada Hall)",
        "Stock Wars: Trade. Risk. Conquer. (RKN Hall)",
        "Tughlaq Durbar: Strategy Meets Power (Hall S-19)",
        "UnoFin: The Uno Challenge (Commerce Lab)"
      ],
      desc: "High-intensity academic battles across 6 parallel competitive arenas testing financial wisdom, strategy, agile deduction, and tactical prowess."
    },
    {
      time: "05:30 PM – 07:00 PM",
      title: "Grand Valedictory Ceremony & Prize Distribution",
      venue: "Main Auditorium",
      type: "Ceremony",
      desc: "Welcome Address, Valedictory Address by Chief Guest Mr. Selvaraj (Bandhan AMC Ltd.), Distribution of Certificates & Cash Awards to Winners, and Vote of Thanks."
    }
  ],

  coordinators: {
    faculty: [
      {
        name: "Dr. V. Manikantan",
        designation: "Head of the Department & Shift-2 Joint Coordinator",
        phone: "+91 94440 00000",
        email: "finfest.26.rkmvc@gmail.com"
      }
    ],
    student: [
      {
        name: "Secretary - Student Council",
        role: "Overall Student Coordinator",
        phone: "+91 91234 56789",
        email: "finfest.26.rkmvc@gmail.com"
      },
      {
        name: "Joint Secretary - Finfest '26",
        role: "Event Logistics & Registrations",
        phone: "+91 98765 43210",
        email: "finfest.26.rkmvc@gmail.com"
      }
    ]
  },

  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "About College", href: "#about" },
    { label: "General Rules", href: "#rules" },
    { label: "6 Challenges", href: "#events" },
    { label: "Schedule", href: "#schedule" },
    { label: "Dignitaries & Guests", href: "#guests" },
    { label: "Register", href: "#register" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FINFEST_DATA;
}
