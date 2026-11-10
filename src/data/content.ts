import { Story, TaskCategory, LadderTier, FAQItem, BrandService, CaseStudy } from '../types';

export const TEEN_STORIES: Story[] = [
  {
    id: 'story-1',
    name: 'Aarav Sharma',
    age: 16,
    city: 'Delhi NCR',
    avatar: '/src/assets/images/teen_creator_delhi_1794344945892.jpg',
    earned: '₹18,450',
    tasksCompleted: 42,
    role: 'App Testing & Feedback',
    quote: 'I bought my own mechanical keyboard and paid for my Python course with money I earned on Funngro during summer breaks. Direct UPI transfer within hours!',
    badge: 'Gold Teen Groer',
  },
  {
    id: 'story-2',
    name: 'Diya Patel',
    age: 17,
    city: 'Surat, Gujarat',
    avatar: '/src/assets/images/teen_creator_surat_1794344947016.jpg',
    earned: '₹24,800',
    tasksCompleted: 67,
    role: 'Fintech & User Research',
    quote: 'Being financially aware before college gives you massive confidence. My parents were surprised to see UPI credits into my account without any joining fee or scam risk.',
    badge: 'Platinum Groer',
  },
  {
    id: 'story-3',
    name: 'Ritwik Banerjee',
    age: 15,
    city: 'Kolkata, West Bengal',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Ritwik&backgroundColor=ffd5dc',
    earned: '₹12,200',
    tasksCompleted: 29,
    role: 'Game Testing & Bug Hunt',
    quote: 'Testing upcoming casual mobile games and submitting short screen recordings paid for my cricket kit. It never felt like a chore.',
    badge: 'Silver Groer',
  },
  {
    id: 'story-4',
    name: 'Ananya Deshmukh',
    age: 18,
    city: 'Pune, Maharashtra',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Ananya&backgroundColor=d1d4f9',
    earned: '₹31,500',
    tasksCompleted: 88,
    role: 'Brand Advocate & UGC',
    quote: 'Started with simple ₹150 surveys and now I create short reel reviews for D2C brands. Funngro taught me deadlines, quality, and independent earning.',
    badge: 'Platinum Groer',
  },
  {
    id: 'story-5',
    name: 'Tanmay Verma',
    age: 16,
    city: 'Bengaluru, Karnataka',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Tanmay&backgroundColor=c0aede',
    earned: '₹15,900',
    tasksCompleted: 35,
    role: 'Product Feedback & Surveys',
    quote: 'No fake points that take months to redeem. You complete the brand checklist, GroReview verifies it, and boom—money is in your linked UPI handle.',
    badge: 'Gold Groer',
  },
];

export const TASK_CATEGORIES: TaskCategory[] = [
  {
    id: 'register',
    name: 'App Installs & Signup',
    count: '65+ Live Tasks',
    payoutRange: '₹80 – ₹350 per task',
    accentColor: 'violet',
    description: 'Download verified partner apps, create your trial profile, and submit quick in-app screenshots.',
    iconName: 'Smartphone',
    popularBrands: ['Swiggy', 'Zomato', 'Cred', 'FamPay'],
  },
  {
    id: 'games',
    name: 'Game Testing & Feedback',
    count: '40+ Live Tasks',
    payoutRange: '₹150 – ₹600 per game',
    accentColor: 'coral',
    description: 'Play beta builds for 10 minutes, test FPS drops, and submit what you loved or found buggy.',
    iconName: 'Gamepad2',
    popularBrands: ['Nazara', 'Krafton', 'WinZO', 'Dream11'],
  },
  {
    id: 'fintech',
    name: 'Fintech & Pocket Money',
    count: '35+ Live Tasks',
    payoutRange: '₹200 – ₹850 per task',
    accentColor: 'sky',
    description: 'Try youth debit cards, test KYC flows, and learn smart budgeting while earning rewards.',
    iconName: 'Wallet',
    popularBrands: ['FamPay', 'Fi Money', 'Jupiter', 'Slice'],
  },
  {
    id: 'survey',
    name: 'Youth Surveys & Opinions',
    count: '90+ Live Tasks',
    payoutRange: '₹50 – ₹300 per survey',
    accentColor: 'yellow',
    description: 'Share your genuine opinions on college fashion, study gadgets, music apps, and snack trends.',
    iconName: 'ClipboardCheck',
    popularBrands: ['boAt', 'Puma', 'Licious', 'Noise'],
  },
];

export const LADDER_TIERS: LadderTier[] = [
  {
    tier: 'Bronze Groer',
    level: 'Tier 1 · Starter',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    bgGradient: 'from-amber-50 to-orange-50',
    minTasks: '0 – 5 Tasks Completed',
    avgEarnings: '₹500 – ₹1,500 / month',
    perks: [
      'Access to standard registration and survey tasks',
      'Daily GroSpin wheel token',
      'Standard UPI withdrawal within 48 hours',
    ],
  },
  {
    tier: 'Silver Groer',
    level: 'Tier 2 · Skilled',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    bgGradient: 'from-slate-50 to-zinc-50',
    minTasks: '6 – 20 Tasks Completed',
    avgEarnings: '₹2,000 – ₹5,000 / month',
    perks: [
      'Early access to high-reward game tests',
      '2x Daily GroSpin tokens',
      'Express UPI withdrawal within 24 hours',
      'Silver badge on community leaderboard',
    ],
  },
  {
    tier: 'Gold Groer',
    level: 'Tier 3 · Pro',
    badgeColor: 'bg-yellow-100 text-yellow-900 border-yellow-400',
    bgGradient: 'from-yellow-50 to-amber-50',
    minTasks: '21 – 50 Tasks Completed',
    avgEarnings: '₹6,000 – ₹12,000 / month',
    perks: [
      'Exclusive brand ambassador and UGC campaigns',
      'Instant UPI payout on verified tasks',
      'Priority task approval line',
      'Official Funngro Young Achiever Certificate',
    ],
    active: true,
  },
  {
    tier: 'Platinum Groer',
    level: 'Tier 4 · Elite',
    badgeColor: 'bg-violet-100 text-violet-900 border-violet-400',
    bgGradient: 'from-purple-50 to-indigo-50',
    minTasks: '50+ Verified Tasks',
    avgEarnings: '₹15,000 – ₹30,000 / month',
    perks: [
      'Direct paid internships and corporate gigs',
      'VIP brand preview drops & merchandise',
      'Instant 1-click UPI transfers with zero limits',
      'Direct mentorship from startup founders',
    ],
  },
];

export const TEENS_FAQ: FAQItem[] = [
  {
    question: 'How do I actually get paid, and do I need a bank account?',
    answer: 'You receive your earnings directly through any UPI ID (such as GPay, PhonePe, Paytm, or FamPay) or a verified domestic savings bank account. Teens can link their own youth account or a guardian-verified UPI ID. Payouts are credited within 24 hours of task approval.',
  },
  {
    question: 'Is there any joining fee or upfront deposit required?',
    answer: 'Absolutely zero. Funngro will never ask you for money, deposits, or registration charges. Any platform asking teens to pay money to earn is a scam. On Funngro, earning is 100% free and transparent.',
  },
  {
    question: 'What is the minimum age to start earning on Funngro?',
    answer: 'Funngro is designed for young people aged 14 to 25. For users under 18, we require simple parental or guardian consent during first withdrawal to maintain complete regulatory and digital safety standards.',
  },
  {
    question: 'What kind of work will I be doing?',
    answer: 'Tasks are varied and fun! You can test new mobile gaming apps, participate in brand surveys, test fintech apps, try new student software, review gadgets, or participate in creative user-generated social media campaigns. You can pick what suits your interests.',
  },
  {
    question: 'How does the GroMoney wallet, GroRank, and GroSpin work?',
    answer: 'Every completed task adds verified GroMoney to your in-app wallet. As you complete quality tasks on time, your GroRank climbs from Bronze to Platinum, unlocking higher-paying gigs. Daily check-ins give you GroSpin tokens to win cash boosts and streak multipliers.',
  },
  {
    question: 'Is Funngro safe and verified by authorities?',
    answer: 'Yes! Funngro was featured on Shark Tank India Season 2 and is backed by Sucseed Innovation Fund. All client brands on the platform are strictly vetted before their tasks go live to ensure teen privacy, data protection, and fair compensation.',
  },
];

export const BRANDS_SERVICES: BrandService[] = [
  {
    title: 'App Installs & Authentic Activations',
    subtitle: 'High-intent installs with verified post-download actions',
    accent: 'green',
    metrics: '94% D7 retention benchmark',
    deliverables: [
      'First-time KYC completions',
      'In-app onboarding walkthroughs',
      'Real organic app store reviews',
    ],
  },
  {
    title: 'Youth Market Research & Rapid Surveys',
    subtitle: 'Tap the honest pulse of Gen Z and Gen Alpha in hours',
    accent: 'sky',
    metrics: '10,000+ responses in < 24 hrs',
    deliverables: [
      'Segmented by city tier, age, and college',
      'Audio and video open-ended feedback',
      'Pricing sensitivity and packaging tests',
    ],
  },
  {
    title: 'User-Generated Content & Social Buzz',
    subtitle: 'Real teens creating viral reels, shorts, and unboxing videos',
    accent: 'violet',
    metrics: '3.8x higher engagement vs standard ads',
    deliverables: [
      'Authentic student-led video testimonials',
      'Campus creator network syndication',
      'Full commercial content usage rights',
    ],
  },
  {
    title: 'Campus Ambassador & Offline Activations',
    subtitle: 'Grassroots reach across 1,200+ colleges and high schools',
    accent: 'coral',
    metrics: '500+ Indian cities covered',
    deliverables: [
      'College festival brand partnerships',
      'Peer-to-peer product sampling drives',
      'Hyperlocal city launch blitzes',
    ],
  },
  {
    title: 'Beta Testing & Quality Assurance',
    subtitle: 'Test your product across 200+ Android and iOS device models',
    accent: 'yellow',
    metrics: 'Zero emulator traffic guarantee',
    deliverables: [
      'Crash logs and UI glitch screen recordings',
      'Real device network load simulation',
      'UX friction heatmaps and feedback reports',
    ],
  },
];

export const BRAND_CASE_STUDIES: CaseStudy[] = [
  {
    brand: 'Fintech NeoBank',
    category: 'Fintech & Payments',
    objective: 'Drive verified student debit card signups and first UPI wallet load across Tier 1 and Tier 2 cities.',
    results: [
      { label: 'Verified Signups', value: '145,000+' },
      { label: 'Acquisition Cost', value: '42% lower vs Meta Ads' },
      { label: '30-Day Transacting', value: '68%' },
    ],
    tagline: 'Scale customer acquisition with zero bot waste.',
    logoInitial: 'F',
  },
  {
    brand: 'Audio & Wearables D2C',
    category: 'Consumer Electronics',
    objective: 'Gather feedback on bass tuning for teen gaming earbuds and create 500 authentic student unboxing videos.',
    results: [
      { label: 'UGC Reels Created', value: '820+' },
      { label: 'Organic Reel Views', value: '4.6 Million' },
      { label: 'Product Survey Size', value: '18,500 Teens' },
    ],
    tagline: 'Hyper-engaged youth sentiment at lightning speed.',
    logoInitial: 'B',
  },
  {
    brand: 'Gaming Studio',
    category: 'Mobile Gaming',
    objective: 'Stress test multi-player servers on low-spec budget smartphones before pan-India public launch.',
    results: [
      { label: 'Active Beta Testers', value: '25,000' },
      { label: 'Actionable Bugs Found', value: '318' },
      { label: 'Launch Day Rating', value: '4.6 Stars' },
    ],
    tagline: 'Real human device testing across India.',
    logoInitial: 'G',
  },
];

export const BRANDS_FAQ: FAQItem[] = [
  {
    question: 'How does Funngro prevent bot traffic, duplicate accounts, and fraud?',
    answer: 'Funngro enforces multi-layer verification: device fingerprinting, mobile OTP validation, human proof submission (screen recordings, task receipts), and automated fraud filters. In addition, our internal GroReview team manually spot-checks tasks before any payout is released.',
  },
  {
    question: 'What is the pricing model for brand campaigns?',
    answer: 'We operate primarily on a performance-based Pay-Per-Action (PPA) model. You only pay for verified, completed tasks that meet your precise campaign brief. Custom packages are available for managed UGC, large-scale research surveys, and campus activations.',
  },
  {
    question: 'How quickly can a campaign go live on Funngro?',
    answer: 'Standard task campaigns (surveys, app installs, simple feedback) can be reviewed, funded, and live on the mobile app within 4 to 8 hours. Custom creator briefs and campus drives typically launch in 2 to 3 business days.',
  },
  {
    question: 'Can we filter and target youth by specific demographics?',
    answer: 'Yes. You can target by age group (14-17, 18-21, 22-25), gender, city tier (Metro, Tier 2, Tier 3), mobile operating system, college stream (Engineering, Commerce, Arts), and active interests.',
  },
  {
    question: 'What reporting and deliverables do brands receive after campaign completion?',
    answer: 'Brands access a real-time analytics dashboard with live task submission logs, device breakdowns, geographical heatmaps, raw survey data export (CSV/Excel), and high-resolution UGC assets with commercial usage rights.',
  },
];

export const TRUST_METRICS = {
  activeUsers: '70 Lakh+',
  appRating: '4.2 ★',
  reviewsCount: '85,000+',
  totalPaidOut: '₹14+ Crore',
  citiesCovered: '500+ Indian Cities',
  brandsPartnered: '350+ Leading Brands',
};
