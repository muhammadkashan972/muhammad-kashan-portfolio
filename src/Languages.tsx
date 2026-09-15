import React from 'react';
import { Languages as LangIcon, CheckCircle2, MessageSquareText, Globe2, BookOpen } from 'lucide-react';
import { LANGUAGES } from '../data';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-gray-200 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3 shadow-2xs">
            <LangIcon className="w-3.5 h-3.5 text-indigo-600" />
            <span>Communication &amp; Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Languages
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Multi-lingual fluency enabling clear communication with regional Pakistani business owners and international tech clients.
          </p>
        </div>

        {/* 3 Languages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LANGUAGES.map((lang, index) => {
            const isNative = lang.percentage === 100;

            return (
              <div
                key={index}
                id={`language-card-${lang.name.toLowerCase()}`}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Native Script & Level Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="text-2xl font-bold text-slate-900">{lang.name}</span>
                      <span className="ml-2.5 text-lg font-medium text-slate-400 font-serif">
                        ({lang.nativeName})
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                        isNative
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                      }`}
                    >
                      {isNative ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <BookOpen className="w-3 h-3 text-indigo-500" />
                      )}
                      <span>{lang.status}</span>
                    </span>
                  </div>

                  {/* Proficiency Level Label */}
                  <p className="text-sm font-semibold text-indigo-600 mb-3">
                    {lang.level}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {lang.description}
                  </p>
                </div>

                {/* Visual Bar Indicator */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5">
                    <span>Proficiency</span>
                    <span>{isNative ? '100% (Fluent)' : 'Conversational'}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isNative ? 'bg-emerald-500 w-full' : 'bg-indigo-500 w-[70%]'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Communication summary banner */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-gray-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <MessageSquareText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Clear, Direct Client Collaboration</p>
              <p className="text-xs text-slate-500">
                Comfortable handling client discovery calls, project scoping, and ongoing status updates via WhatsApp or voice calls.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 text-xs font-semibold text-slate-800 hover:text-indigo-600 bg-gray-100 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            Discuss a Project &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
