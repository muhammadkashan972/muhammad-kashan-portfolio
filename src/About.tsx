import React from 'react';
import {
  Cpu,
  Sparkles,
  ShoppingBag,
  Compass,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Layers,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const About: React.FC = () => {
  const corePillars = [
    {
      icon: Cpu,
      title: 'Robotics Logic + Hardware Rigor',
      description:
        'My academic training in BS Robotics trains me to understand systematic problem decomposition, structured algorithms, and circuit-level discipline, which directly informs how I write clean, modular software.',
    },
    {
      icon: Sparkles,
      title: 'AI-Augmented Development Speed',
      description:
        'Leveraging state-of-the-art AI tooling and modern workflows, I build responsive user interfaces, prototype features rapidly, and troubleshoot code with exceptional speed and precision.',
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce & Commercial Websites',
      description:
        'From high-converting Shopify storefronts to customized WordPress platforms and modern static sites, I focus on conversion UX, fast load times, and effortless client maintenance.',
    },
    {
      icon: Compass,
      title: 'Continuous Innovation & Learning',
      description:
        'Always expanding my stack. Currently mastering scalable backend development and deeper robotics micro-controller programming to build end-to-end intelligent systems.',
    },
  ];

  const personalHighlights = [
    { label: 'Degree & University', value: 'BS Robotics (Superior University)' },
    { label: 'Campus Location', value: 'Lahore, Pakistan' },
    { label: 'Hometown', value: 'Khanewal, Pakistan' },
    { label: 'Core Workflows', value: 'Vercel, Netlify, Shopify, WordPress' },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Bridging hardware engineering logic with modern, AI-powered frontend development.
          </p>
        </div>

        {/* Main About Story & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative description */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-gray-50/80 border border-gray-200/80">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-indigo-600" />
                <span>The Intersection of Robotics and Frontend Web</span>
              </h3>
              
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  I am <strong className="text-slate-900">Muhammad Kashan Munawar</strong>, a Web Developer &amp; AI Solutions Engineer currently pursuing my Bachelor of Science in Robotics at <strong className="text-slate-900">Superior University, Lahore</strong>, having grown up in Khanewal, Pakistan. My journey began with a curiosity for how physical systems respond to computational instructions, which quickly led me into the vibrant world of web engineering.
                </p>
                <p>
                  Rather than viewing robotics and web development as separate worlds, I integrate them: the rigorous problem-solving, structural organization, and analytical precision from robotics directly elevate how I design, architect, and deliver web applications.
                </p>
                <p>
                  Today, I actively craft commercial e-commerce storefronts (Shopify & WordPress), clean responsive landing pages, and AI-accelerated frontend applications deployed smoothly to cloud hosts like Vercel and Netlify.
                </p>
              </div>

              {/* What I Deliver Checklist */}
              <div className="mt-6 pt-6 border-t border-gray-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Focus & Strengths
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Responsive, mobile-first design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>AI-enhanced development speed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>High-converting e-commerce stores</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Search engine indexing & SEO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Background Details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white rounded-xl border border-gray-200/80 shadow-xs text-center sm:text-left"
                >
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Pillars 2x2 cards */}
          <div className="lg:col-span-5 space-y-4">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white hover:bg-gray-50/50 border border-gray-200/80 shadow-xs hover:border-gray-300 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
