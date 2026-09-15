import { Project, SkillCategory, LanguageItem, Certification } from './types';

export const PERSONAL_INFO = {
  name: 'Muhammad Kashan Munawar',
  title: 'Web Developer & AI Solutions Engineer',
  role: 'Web Developer & AI Solutions Engineer | BS Robotics Student',
  headline: "Hi, I'm Muhammad Kashan Munawar",
  location: 'Lahore, Pakistan',
  hometown: 'Khanewal, Pakistan',
  education: 'BS Robotics - Superior University, Lahore',
  university: 'Superior University, Lahore',
  email: 'kashangillmuhammad@gmail.com',
  phone: '+923004812972',
  whatsappUrl: 'https://wa.me/923004812972',
  linkedinUrl: 'https://www.linkedin.com/in/muhammadkashan972/',
  githubUrl: 'https://github.com/muhammadkashan972',
  cvPath: 'files/muhammad_kashan_munawar_CV.pdf',
  imagePath: '/images/profile.png',
  bio: 'A passionate Web Developer & AI Solutions Engineer pursuing BS Robotics at Superior University, Lahore. Bridging the gap between rigorous hardware engineering logic and agile, modern AI-driven frontend web development. Dedicated to crafting responsive, high-converting e-commerce storefronts, high-impact business landing pages, and automated web workflows.',
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Generative AI in Practice',
    issuer: 'Professional Certification',
    badge: 'Certified',
    description: 'Applied LLM implementation, agentic workflows, API integration, and generative AI deployment.',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Specialist Certification',
    badge: 'Specialist',
    description: 'Advanced contextual prompting, few-shot conditioning, structured output generation, and optimization.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'web-ai',
    title: 'Web Development & AI',
    subtitle: 'Modern interfaces powered by AI efficiency',
    iconName: 'Code2',
    badgeVariant: 'primary',
    skills: [
      'AI-Powered Frontend Web Development',
      'HTML5 & Modern CSS3',
      'JavaScript (ES6+)',
      'Vercel & Netlify Deployment',
      'Google Search Indexing & SEO Basics',
      'Responsive UI Architecture',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & CMS',
    subtitle: 'High-converting commercial platforms',
    iconName: 'ShoppingBag',
    badgeVariant: 'emerald',
    skills: [
      'Shopify Store Creation',
      'Shopify Theme Customization',
      'WordPress Website Development',
      'Product Catalog Structuring',
      'Conversion-Focused Layouts',
      'Client Store Handover',
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    subtitle: 'Paid acquisition & traffic funnels',
    iconName: 'TrendingUp',
    badgeVariant: 'amber',
    skills: [
      'Facebook Ads Marketing',
      'Meta Ad Campaign Setup',
      'TikTok Marketing & Creatives',
      'Audience Targeting',
      'Campaign Performance Monitoring',
    ],
  },
  {
    id: 'learning',
    title: 'Currently Learning & Expanding',
    subtitle: 'Next-generation engineering horizons',
    iconName: 'Sparkles',
    badgeVariant: 'violet',
    skills: [
      'Backend Development (Node.js & APIs)',
      'Advanced Robotics Programming',
      'Microcontroller & Sensor Interfacing',
      'Full-Stack Architecture Patterns',
    ],
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    name: 'Urdu',
    nativeName: 'اردو',
    level: 'Native / Fluent',
    percentage: 100,
    description: 'Primary native language; proficient in speaking, reading, and formal professional communication.',
    status: 'Native Proficiency',
  },
  {
    name: 'Punjabi',
    nativeName: 'پنجابی',
    level: 'Native / Fluent',
    percentage: 100,
    description: 'Regional native tongue; fluent conversational fluency and cultural context mastery.',
    status: 'Native Proficiency',
  },
  {
    name: 'English',
    nativeName: 'English',
    level: 'Conversational',
    percentage: 70,
    description: 'Active professional learning and continuous daily communication improvement for global collaboration.',
    status: 'Learning & Improving',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'gill-farm',
    title: 'Gill Farm Official',
    category: 'Commercial Agriculture Website',
    description:
      'Official commercial agriculture and farm website built from the ground up, deployed on Vercel, and successfully indexed on Google Search engine for organic discoverability.',
    tags: ['Vercel', 'SEO / Google Indexing', 'Web Design', 'Responsive UI'],
    liveUrl: 'https://gill-farm-offical.vercel.app/',
    statusBadge: 'Live on Vercel',
    accentColor: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    id: 'hamza-bbq',
    title: 'Hamza BBQ (Restaurant Website)',
    category: 'Food Business & Dining',
    description:
      'A vibrant and responsive frontend website created for a food business / restaurant client, featuring interactive visual menu showcases, promotional highlights, and location details.',
    tags: ['Netlify', 'Interactive Menus', 'Responsive Frontend', 'Client Project'],
    liveUrl: 'https://69fe5d60afd562c8d5c2b548--gleaming-biscotti-d3a1d5.netlify.app/',
    statusBadge: 'Live Netlify Deployment',
    accentColor: 'from-orange-500/10 to-amber-500/10',
  },
  {
    id: 'stepzone',
    title: 'StepZone (Sneaker E-Commerce Concept)',
    category: 'Footwear & Retail Concept',
    description:
      'Clean, stylish modern footwear storefront frontend created for a university assignment project, demonstrating modern e-commerce visual standards, card grids, and product displays.',
    tags: ['Netlify', 'E-Commerce UI', 'Sneaker Storefront', 'University Project'],
    liveUrl: 'https://6a59f6f07d2e4e26282a6779--sparkly-frangollo-c5ef64.netlify.app/',
    statusBadge: 'Live Assignment Demo',
    accentColor: 'from-indigo-500/10 to-blue-500/10',
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant / Chatbot App',
    category: 'Artificial Intelligence Web UI',
    description:
      'Interactive AI chatbot application web interface with modern conversation flow styling, responsive speech bubbles, prompt inputs, and rapid frontend responsiveness.',
    tags: ['Netlify', 'AI Chatbot UI', 'Interactive Web App', 'Modern Design'],
    liveUrl: 'https://6a2ea136f09b32fc022691a6--frolicking-mooncake-00814a.netlify.app/',
    statusBadge: 'Live Web App',
    accentColor: 'from-purple-500/10 to-indigo-500/10',
  },
];
