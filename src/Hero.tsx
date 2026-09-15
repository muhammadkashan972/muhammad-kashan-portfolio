import React from 'react';
import {
  FileText,
  Download,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Bot,
  ExternalLink,
  MessageCircle,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-gray-100"
    >
      {/* Subtle architectural background grid / glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-20 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Hero Profile Photo - Prominently Displayed on First Impression */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative subtle frame border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-100 via-slate-100 to-blue-100 rounded-3xl opacity-80 blur-xs group-hover:opacity-100 transition-opacity" />
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-xl shadow-slate-200/60">
                <img
                  id="hero-profile-image"
                  src="/images/profile.png"
                  alt="Muhammad Kashan Munawar (Kashan Gill)"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Status Pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-gray-200/80 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-semibold text-slate-800">Open to Projects & Roles</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 bg-gray-100 px-2 py-0.5 rounded-md">
                    2026
                  </span>
                </div>
              </div>

              {/* Education Floating Badge */}
              <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200/90 shadow-md">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Superior University</p>
                  <p className="text-xs font-bold text-slate-800">BS Robotics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content & Introduction */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            {/* Location & Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              <span>Superior University, Lahore &bull; Hometown Khanewal, Pakistan</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
            >
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800">
                Muhammad Kashan Munawar
              </span>{' '}
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-500 font-normal">
                (Kashan Gill)
              </span>
            </h1>

            {/* Title / Subheadline */}
            <p
              id="hero-subheadline"
              className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight"
            >
              Web Developer &amp; AI Solutions Engineer
            </p>
            <p className="text-sm font-semibold text-indigo-600 -mt-2">
              BS Robotics Student &bull; Superior University, Lahore
            </p>

            {/* Short Introduction */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate Web Developer &amp; AI Solutions Engineer pursuing BS Robotics at Superior University, Lahore.
              I bring together the systematic logic of robotics engineering with state-of-the-art AI solutions,
              building fast business websites, high-converting e-commerce stores, and intelligent user interfaces.
            </p>

            {/* Social Links Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                Connect:
              </span>
              <a
                id="hero-social-linkedin"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-600 flex items-center justify-center shadow-xs transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-social-github"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 border border-gray-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-xs transition-all hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-social-whatsapp"
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="w-10 h-10 rounded-xl bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-600 flex items-center justify-center shadow-xs transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                id="hero-social-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Kashan"
                className="w-10 h-10 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 flex items-center justify-center shadow-xs transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Action Buttons: View Projects, View CV, Download CV, Contact Me */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-xl shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-cta-view-cv"
                href={PERSONAL_INFO.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>View CV</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              </a>

              <a
                id="hero-cta-download-cv"
                href={PERSONAL_INFO.cvPath}
                download="muhammad_kashan_munawar_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-gray-50 border border-gray-300 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-slate-700" />
                <span>Download CV</span>
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick highlight indicators */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-gray-100 text-left">
              <div className="p-3 bg-white rounded-xl border border-gray-200/70 shadow-xs">
                <p className="text-xs text-slate-400 font-medium">Domain Focus</p>
                <p className="text-sm font-bold text-slate-800 mt-0.5">Frontend & AI</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-gray-200/70 shadow-xs">
                <p className="text-xs text-slate-400 font-medium">Commercial</p>
                <p className="text-sm font-bold text-slate-800 mt-0.5">E-Commerce</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-gray-200/70 shadow-xs">
                <p className="text-xs text-slate-400 font-medium">Academics</p>
                <p className="text-sm font-bold text-slate-800 mt-0.5">Robotics Eng.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
