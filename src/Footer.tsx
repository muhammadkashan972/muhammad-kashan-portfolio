import React from 'react';
import { ArrowUp, Linkedin, Github, MessageCircle, Mail, FileText, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Languages', href: '#languages' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Web Developer &amp; AI Solutions Engineer &bull; Superior University, Lahore
            </p>
            <p className="text-xs text-slate-500">
              Lahore &bull; Khanewal, Pakistan
            </p>
          </div>

          {/* Social Icons & CV */}
          <div className="flex items-center gap-3">
            <a
              id="footer-linkedin-btn"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-github-btn"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-whatsapp-btn"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              id="footer-email-btn"
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              id="footer-cv-btn"
              href={PERSONAL_INFO.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Middle Footer Navigation */}
        <div className="py-8 flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Download CV (PDF)
          </a>
        </div>

        {/* Bottom Bar & Back to top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          
          <button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
