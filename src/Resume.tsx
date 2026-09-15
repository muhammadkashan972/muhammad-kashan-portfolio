import React from 'react';
import { FileText, Download, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const Resume: React.FC = () => {
  const cvPath = PERSONAL_INFO.cvPath; // 'files/muhammad_kashan_munawar_CV.pdf'

  return (
    <section id="cv" className="py-20 bg-gray-50 border-b border-gray-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae / Resume</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional CV &amp; Credentials
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Review my official resume, educational background, and technical certifications directly in the browser or download a copy for offline evaluation.
          </p>
        </div>

        {/* CV Actions Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>muhammad_kashan_munawar_CV.pdf</span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Ready to View / Download
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                Mapped to local folder: <code className="text-indigo-600 font-mono">files/muhammad_kashan_munawar_CV.pdf</code>
              </p>
            </div>
          </div>

          {/* Action Buttons: View CV & Download CV */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* View CV Button (opens in new tab) */}
            <a
              id="cv-view-btn"
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 bg-gray-100 hover:bg-gray-200 transition-colors shadow-xs"
            >
              <Eye className="w-4 h-4 text-indigo-600" />
              <span>View CV</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {/* Download CV Button (with download attribute) */}
            <a
              id="cv-download-btn"
              href={cvPath}
              download="muhammad_kashan_munawar_CV.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-indigo-600 transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Preview Option */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-slate-500 ml-2">PDF Document Viewer</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
              >
                <span>Open Fullscreen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Embedded PDF Object Tag */}
          <div className="w-full bg-gray-100 rounded-xl overflow-hidden shadow-inner">
            <object
              id="embedded-cv-object"
              data={cvPath}
              type="application/pdf"
              width="100%"
              height="600px"
              className="w-full h-[600px] rounded-xl border border-gray-200"
            >
              {/* Fallback display if browser does not render inline PDF */}
              <div className="p-12 text-center flex flex-col items-center justify-center space-y-4 bg-gray-50 h-[600px]">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Embedded PDF Preview</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-md">
                    If your browser doesn&apos;t automatically display PDF documents within this frame, you can view or download the file directly:
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View CV in New Tab</span>
                  </a>
                  <a
                    href={cvPath}
                    download="muhammad_kashan_munawar_CV.pdf"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-gray-100 border border-gray-200 transition-colors shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </object>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-500 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Verified PDF document: BS Robotics &bull; Web Developer &bull; AI Solutions Engineer</span>
            </div>
            <span>File size: ~1.2 MB &bull; PDF Format</span>
          </div>
        </div>

      </div>
    </section>
  );
};
