export interface Story {
  id: string;
  name: string;
  age: number;
  city: string;
  avatar: string;
  earned: string;
  tasksCompleted: number;
  role: string;
  quote: string;
  badge: string;
}

export interface TaskCategory {
  id: string;
  name: string;
  count: string;
  payoutRange: string;
  accentColor: 'violet' | 'yellow' | 'coral' | 'sky' | 'green';
  description: string;
  iconName: string;
  popularBrands: string[];
}

export interface LadderTier {
  tier: string;
  level: string;
  badgeColor: string;
  bgGradient: string;
  minTasks: string;
  avgEarnings: string;
  perks: string[];
  active?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BrandService {
  title: string;
  subtitle: string;
  accent: 'violet' | 'yellow' | 'coral' | 'sky' | 'green';
  metrics: string;
  deliverables: string[];
}

export interface CaseStudy {
  brand: string;
  category: string;
  objective: string;
  results: { label: string; value: string }[];
  tagline: string;
  logoInitial: string;
}
