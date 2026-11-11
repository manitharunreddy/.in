export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'POS & Offline' | 'Multi-Tenant SaaS' | 'GovTech' | 'Desktop & Hardware' | 'F&B Tech';
  description: string;
  technologies: string[];
  keyFeatures: string[];
  architectureDetails: {
    overview: string;
    keyChallenge: string;
    solution: string;
    impact: string;
  };
  metrics?: { label: string; value: string }[];
  iconName: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  bulletPoints: {
    category: string;
    text: string;
  }[];
  keyProjects: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    isPrimary?: boolean;
    tag?: string;
  }[];
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  numericVal: number;
  description: string;
  iconName: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization: string;
  location: string;
  duration: string;
  highlights: string[];
}

