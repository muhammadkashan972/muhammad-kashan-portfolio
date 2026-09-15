import React from 'react';
import {
  Code2,
  ShoppingBag,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Flame,
  Search,
  Globe,
  Share2,
  Cpu,
  Server,
  Layers,
  Award,
  BadgeCheck,
} from 'lucide-react';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../data';

export const Skills: React.FC = () => {
  // Map icon names to lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return Code2;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'TrendingUp':
        return TrendingUp;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  const getBadgeStyle = (variant: string) => {
    switch (variant) {
      case 'emerald':
        return {
          cardBg: 'bg-white',
          border: 'border-emerald-100 hover:border-emerald-300',
          iconBg: 'bg-emerald-50 text-emerald-600',
          pillBg: 'bg-emerald-50 text-emerald-800 border-emerald-200/80 hover:bg-emerald-100',
          dotBg: 'bg-emerald-500',
          accent: 'text-emerald-700',
        };
      case 'amber':
        return {
          cardBg: 'bg-white',
          border: 'border-amber-100 hover:border-amber-300',
          iconBg: 'bg-amber-50 text-amber-600',
          pillBg: 'bg-amber-50 text-amber-900 border-amber-200/80 hover:bg-amber-100',
          dotBg: 'bg-amber-500',
          accent: 'text-amber-700',
        };
      case 'violet':
        return {
          cardBg: 'bg-white',
          border: 'border-violet-100 hover:border-violet-300',
          iconBg: 'bg-violet-50 text-violet-600',
          pillBg: 'bg-violet-50 text-violet-900 border-violet-200/80 hover:bg-violet-100',
          dotBg: 'bg-violet-500',
          accent: 'text-violet-700',
        };
      case 'primary':
      default:
        return {
          cardBg: 'bg-white',
          border: 'border-indigo-100 hover:border-indigo-300',
          iconBg: 'bg-indigo-50 text-indigo-600',
          pillBg: 'bg-indigo-50 text-indigo-900 border-indigo-200/80 hover:bg-indigo-100',
          dotBg: 'bg-indigo-500',
          accent: 'text-indigo-700',
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-gray-200 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>Technical Capabilities &amp; Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills &amp; Certifications
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Technical competencies, e-commerce expertise, and verified generative AI certifications.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = getIcon(category.iconName);
            const style = getBadgeStyle(category.badgeVariant);

            return (
              <div
                key={category.id}
                id={`skills-card-${category.id}`}
                className={`p-6 sm:p-7 rounded-2xl ${style.cardBg} border ${style.border} shadow-xs transition-all duration-300 hover:shadow-md flex flex-col justify-between`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                    {category.id === 'learning' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-violet-700 bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">
                        <Sparkles className="w-3 h-3" />
                        In Progress
                      </span>
                    )}
                  </div>

                  {/* Skills Badges / Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${style.pillBg} transition-colors cursor-default`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${style.dotBg}`} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer notes for specific skill context */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-slate-400">
                  <span>{category.skills.length} core competencies</span>
                  <span className={`font-semibold ${style.accent}`}>Verified Practical Experience</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Showcase */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-indigo-600" />
            <h3 className="text-xl font-bold text-slate-900">
              Professional Certifications &amp; Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-indigo-100 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                        <BadgeCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-indigo-600">Verified Knowledge</span>
                  <span>AI &amp; Prompt Engineering</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <div className="sm:pr-6 flex flex-col justify-center">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-indigo-600 font-bold text-base mb-1">
                <Globe className="w-4 h-4" />
                <span>Hosting & Deployment</span>
              </div>
              <p className="text-xs text-slate-600">
                Proficient in Vercel, Netlify, custom domain routing, HTTPS, and production builds.
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-6 flex flex-col justify-center">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-600 font-bold text-base mb-1">
                <Search className="w-4 h-4" />
                <span>Google Search Indexing</span>
              </div>
              <p className="text-xs text-slate-600">
                Structured meta tags, sitemaps, robots.txt, and Search Console indexing setup.
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-center">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-600 font-bold text-base mb-1">
                <Share2 className="w-4 h-4" />
                <span>Paid Ad Campaigns</span>
              </div>
              <p className="text-xs text-slate-600">
                Setup and campaign tracking across Facebook Ads & TikTok advertising platforms.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
