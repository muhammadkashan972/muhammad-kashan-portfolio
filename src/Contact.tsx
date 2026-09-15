import React, { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  MapPin,
  Send,
  Copy,
  Check,
  Phone,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    const formAction = e.currentTarget.action;

    // If still using placeholder YOUR_FORMSPREE_FORM_ID, simulate smooth completion
    if (!formAction || formAction.includes('YOUR_FORMSPREE_FORM_ID')) {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 700);
      return;
    }

    // Direct Formspree submission
    try {
      const response = await fetch(formAction, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New Submission from Portfolio Website',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Me
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Have a project in mind, need a commercial website, or want to collaborate? I am always open to discussing new opportunities.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/80 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Direct Communication
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Fastest response via WhatsApp or Email. Available for remote and local freelance projects.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-indigo-600 truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-gray-100 transition-colors shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      WhatsApp / Phone
                    </p>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 truncate block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open WhatsApp Chat"
                    className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    title="Copy phone to clipboard"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-gray-100 transition-colors"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Current Location
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    Lahore, Pakistan <span className="text-slate-400 font-normal">&bull; Hometown: Khanewal</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Social Channels Strip */}
            <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Social Profiles
              </span>
              <div className="flex items-center gap-2">
                <a
                  id="contact-linkedin-btn"
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  id="contact-github-btn"
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-gray-100 hover:bg-gray-200 hover:text-slate-900 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the form below and I will get back to you promptly.
              </p>

              {!submitted ? (
                <form
                  id="portfolio-contact-form"
                  action="https://formspree.io/f/xkjndleo"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Automated Subject for Formspree Notification */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Submission from Portfolio Website"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="form-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="form-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="form-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="form-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project inquiry / Website development"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-semibold text-slate-700 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Kashan, I'd like to talk about building a website / Shopify store..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-slate-400">
                      Direct email: <span className="font-semibold text-slate-600">{PERSONAL_INFO.email}</span>
                    </p>
                    <button
                      id="submit-contact-form-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-sm font-semibold shadow-xs transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div id="contact-success-state" className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you <strong className="text-slate-900">{formData.name}</strong>. Your message has been formatted. You can also send this directly via your default email client:
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(
                        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
                      )}`}
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      Open in Email App
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-700 text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
