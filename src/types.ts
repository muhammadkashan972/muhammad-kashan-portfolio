export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  statusBadge?: string;
  accentColor: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: string[];
  badgeVariant: 'primary' | 'emerald' | 'amber' | 'violet';
}

export interface LanguageItem {
  name: string;
  nativeName: string;
  level: string;
  percentage: number;
  description: string;
  status: string;
}

export interface Certification {
  title: string;
  issuer: string;
  badge: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
