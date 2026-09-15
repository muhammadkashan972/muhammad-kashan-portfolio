import React, { useState } from 'react';
import {
  ExternalLink,
  FolderGit2,
  CheckCircle,
  Globe,
  Sparkles,
  UtensilsCrossed,
  ShoppingBag,
  Bot,
  Wheat,
  Search,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => {
        if (filter === 'ecommerce') return p.id === 'stepzone';
        if (filter === 'client') return p.id === 'hamza-bbq' || p.id === 'gill-farm';
        if (filter === 'ai') return p.id === 'ai-assistant';
        return true;
      });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'gill-farm':
        return <Wheat className="w-5 h-5 text-emerald-600" />;
      case 'hamza-bbq':
        return <UtensilsCrossed className="w-5 h-5 text-orange-600" />;
      case 'stepzone':
        return <ShoppingBag className="w-5 h-5 text-indigo-600" />;
      case 'ai-assistant':
        return <Bot className="w-5 h-5 text-purple-600" />;
      default:
        return <Globe className="w-5 h-5 text-slate-600" />;
    }
  };

  const getGradientHeader = (id: string) => {
    switch (id) {
      case 'gill-farm':
        return 'from-emerald-600 to-teal-700';
      case 'hamza-bbq':
        return 'from-amber-600 to-orange-700';
      case 'stepzone':
        return 'from-blue-600 to-indigo-800';
      case 'ai-assistant':
        return 'from-violet-600 to-purple-800';
      default:
        return 'from-slate-700 to-slate-900';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Real-World Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Real deployments showcasing commercial client work, university engineering concepts, and AI interfaces.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('client')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === 'client'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              Client &amp; Commercial
            </button>
            <button
              onClick={() => setFilter('ecommerce')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === 'ecommerce'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              E-Commerce
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === 'ai'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              AI &amp; Chatbot
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const hasLiveUrl = !!project.liveUrl;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-gray-300"
              >
                {/* Browser Mockup Top Bar */}
                <div className={`h-36 sm:h-40 bg-gradient-to-r ${getGradientHeader(project.id)} p-5 flex flex-col justify-between text-white relative overflow-hidden`}>
                  {/* Decorative mesh */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)] pointer-events-none" />
                  
                  {/* Window dots & status badge */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    </div>
                    {project.statusBadge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-2xs">
                        <CheckCircle className="w-3 h-3 text-emerald-300" />
                        <span>{project.statusBadge}</span>
                      </span>
                    )}
                  </div>

                  {/* Icon & Category */}
                  <div className="z-10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-white/80">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xs">
                      {getProjectIcon(project.id)}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    {hasLiveUrl ? (
                      <a
                        id={`project-live-btn-${project.id}`}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-xl shadow-xs transition-all hover:gap-2.5"
                      >
                        <span>View Live Demo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                        <Search className="w-3.5 h-3.5" />
                        <span>Google Search Indexed</span>
                      </div>
                    )}

                    <span className="text-xs text-slate-400 font-medium">
                      Project #{project.id}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
