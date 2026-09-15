import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'CV / Resume', href: '#cv' },
    { label: 'Languages', href: '#languages' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            id="brand-logo-link"
            className="group flex items-center gap-3 text-slate-900 font-bold tracking-tight hover:opacity-90 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-indigo-600 transition-colors">
              KM
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold text-slate-900 leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-slate-500 font-normal flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Web Developer &amp; AI Solutions Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Buttons: View CV & Download CV */}
          <div className="hidden md:flex items-center gap-2">
            <a
              id="header-view-cv-btn"
              href={PERSONAL_INFO.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-xs transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-600" />
              <span>View CV</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <a
              id="header-download-cv-btn"
              href={PERSONAL_INFO.cvPath}
              download="muhammad_kashan_munawar_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-lg shadow-xs transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <div className="py-2 border-b border-gray-100 mb-3">
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Navigation</p>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              id={`mobile-nav-${link.label.toLowerCase()}`}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <a
              id="mobile-download-cv-btn"
              href={PERSONAL_INFO.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
