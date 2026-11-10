import React, { useState } from 'react';
import { Send, CheckCircle2, Building2, Mail, Phone, User, MessageSquare, Target } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    goal: 'App Installs & KYC Registrations',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (cleanPhone.length !== 10) {
      newErrors.phone = 'Enter a valid 10-digit Indian phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your campaign needs';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate brief network submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      goal: 'App Installs & KYC Registrations',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#19C37D] shadow-soft text-center animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#19C37D] mx-auto flex items-center justify-center mb-6">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#19C37D] font-bold">
          REQUEST RECEIVED
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14112B] mt-2 mb-3">
          We'll be in touch within 4 business hours!
        </h3>
        <p className="text-[#6B6785] text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
          Thank you, <strong>{formData.name}</strong>. Our enterprise growth team at Funngro will review your requirements for <strong>{formData.company}</strong> and send over a custom youth campaign proposal with estimated reach and turnaround times.
        </p>

        <div className="p-4 rounded-2xl bg-[#FFF8EC] border border-[#E9E2D3] max-w-sm mx-auto text-left text-xs space-y-1 mb-8">
          <p className="text-[#14112B]"><strong>Campaign Focus:</strong> {formData.goal}</p>
          <p className="text-[#14112B]"><strong>Confirmation sent to:</strong> {formData.email}</p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="cursor-pointer px-6 py-2.5 bg-[#14112B] text-white font-semibold text-sm rounded-full hover:bg-[#19C37D] hover:text-[#14112B] transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E9E2D3] shadow-soft space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase text-[#14112B] mb-1.5">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#6B6785] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              id="name"
              type="text"
              placeholder="e.g. Vikram Singhania"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#14112B] bg-[#FFF8EC]/40 focus:outline-none focus:ring-2 ${
                errors.name ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]' : 'border-[#E9E2D3] focus:ring-[#7B5CFA]'
              }`}
            />
          </div>
          {errors.name && <p className="text-[11px] text-[#FF6B6B] mt-1">{errors.name}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-xs font-mono font-semibold uppercase text-[#14112B] mb-1.5">
            Company / Brand *
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-[#6B6785] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              id="company"
              type="text"
              placeholder="e.g. Zeta Fintech / boAt"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#14112B] bg-[#FFF8EC]/40 focus:outline-none focus:ring-2 ${
                errors.company ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]' : 'border-[#E9E2D3] focus:ring-[#7B5CFA]'
              }`}
            />
          </div>
          {errors.company && <p className="text-[11px] text-[#FF6B6B] mt-1">{errors.company}</p>}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase text-[#14112B] mb-1.5">
            Work Email *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#6B6785] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              id="email"
              type="email"
              placeholder="vikram@brand.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#14112B] bg-[#FFF8EC]/40 focus:outline-none focus:ring-2 ${
                errors.email ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]' : 'border-[#E9E2D3] focus:ring-[#7B5CFA]'
              }`}
            />
          </div>
          {errors.email && <p className="text-[11px] text-[#FF6B6B] mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-mono font-semibold uppercase text-[#14112B] mb-1.5">
            Phone / WhatsApp *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#6B6785] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              id="phone"
              type="tel"
              placeholder="9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#14112B] bg-[#FFF8EC]/40 focus:outline-none focus:ring-2 ${
                errors.phone ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]' : 'border-[#E9E2D3] focus:ring-[#7B5CFA]'
              }`}
              maxLength={12}
            />
          </div>
          {errors.phone && <p className="text-[11px] text-[#FF6B6B] mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Campaign Goal Dropdown */}
      <div>
        <label htmlFor="goal" className="block text-xs font-mono font-semibold uppercase text-[#14112B] mb-1.5">
          Primary Campaign Goal
        </label>
        <div className="relative">
          <Target className="w-4 h-4 text-[#6B6785] absolute left-3.5 top-3.5 pointer-events-none" />
          <select
            id="goal"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-[#E9E2D3] text-sm text-[#14112B] bg-[#FFF8EC]/40 focus:outline-none focus:ring-2 focus:ring-[#7B5CFA] appearance-none"
          >
            <option>App Installs & KYC Registrations</option>
            <option>Youth Market Research & Rapid Surveys</option>
            <option>UGC Reels, Shorts & Creative Content</option>
            <option>Campus Ambassador & College Activations</option>
            <option>Beta Testing & Device Feedback</option>
            <option>Brand Awareness & Custom Partnership</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase text-[#14112B] mb-1.5">
          Campaign Details & Budget Range *
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-[#6B6785] absolute left-3.5 top-3.5 pointer-events-none" />
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us about target demographics, volume of users, expected launch timeline, etc."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#14112B] bg-[#FFF8EC]/40 focus:outline-none focus:ring-2 resize-none ${
              errors.message ? 'border-[#FF6B6B] focus:ring-[#FF6B6B]' : 'border-[#E9E2D3] focus:ring-[#7B5CFA]'
            }`}
          />
        </div>
        {errors.message && <p className="text-[11px] text-[#FF6B6B] mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-[#6B6785]">
          🔒 Strict NDA protected. No spam ever.
        </span>

        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer w-full sm:w-auto px-7 py-3 bg-[#19C37D] text-[#14112B] font-bold text-sm rounded-full shadow-soft hover:-translate-y-0.5 hover:shadow-md transition-all active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <span>Sending Proposal Request...</span>
          ) : (
            <>
              <span>Submit Campaign Brief</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
