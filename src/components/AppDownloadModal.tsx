import React, { useState } from 'react';
import { X, Smartphone, Check, QrCode, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length !== 10) {
      setError('Please enter a valid 10-digit Indian mobile number');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14112B]/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-[#FFF8EC] rounded-3xl p-6 sm:p-8 border-2 border-[#14112B] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-[#14112B] hover:text-white transition-colors border border-[#E9E2D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C37D]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#19C37D]/20 text-[#14112B] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 fill-[#19C37D] text-[#19C37D]" />
            <span>4.2 Rating · 70 Lakh+ Teens</span>
          </div>
          <h3 id="download-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#14112B]">
            Download the <span className="text-[#19C37D] italic">Funngro</span> App
          </h3>
          <p className="text-[#6B6785] text-sm mt-1">
            Start earning within 5 minutes. Available for Android and iOS devices.
          </p>
        </div>

        {/* QR Code and Quick Scan Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white border border-[#E9E2D3] mb-6">
          <div className="flex flex-col items-center justify-center p-3 bg-[#FFF8EC] rounded-xl border border-dashed border-[#14112B]/30 text-center">
            {/* SVG QR Code Simulation */}
            <div className="w-28 h-28 bg-[#14112B] p-2 rounded-xl flex items-center justify-center text-white mb-2 shadow-inner">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white" aria-hidden="true">
                <rect x="10" y="10" width="24" height="24" rx="3" fill="white" />
                <rect x="14" y="14" width="16" height="16" rx="2" fill="#14112B" />
                <rect x="18" y="18" width="8" height="8" fill="white" />

                <rect x="66" y="10" width="24" height="24" rx="3" fill="white" />
                <rect x="70" y="14" width="16" height="16" rx="2" fill="#14112B" />
                <rect x="74" y="18" width="8" height="8" fill="white" />

                <rect x="10" y="66" width="24" height="24" rx="3" fill="white" />
                <rect x="14" y="70" width="16" height="16" rx="2" fill="#14112B" />
                <rect x="18" y="74" width="8" height="8" fill="white" />

                <circle cx="45" cy="20" r="4" fill="#19C37D" />
                <circle cx="50" cy="50" r="6" fill="#7B5CFA" />
                <circle cx="25" cy="45" r="4" fill="white" />
                <rect x="42" y="70" width="16" height="6" rx="2" fill="white" />
                <rect x="66" y="45" width="20" height="8" rx="2" fill="white" />
                <rect x="66" y="70" width="10" height="18" rx="2" fill="white" />
              </svg>
            </div>
            <span className="text-[11px] font-mono font-medium text-[#14112B] flex items-center gap-1">
              <QrCode className="w-3.5 h-3.5" />
              Scan with phone camera
            </span>
          </div>

          <div className="flex flex-col justify-center space-y-3">
            <p className="text-xs text-[#6B6785]">
              Scan to install directly from official Google Play Store or Apple App Store.
            </p>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => alert('Redirecting to Google Play Store (Funngro)')}
                className="w-full py-2 px-3 rounded-xl bg-[#14112B] text-white hover:bg-[#19C37D] hover:text-[#14112B] transition-colors text-xs font-semibold flex items-center justify-between"
              >
                <span>Google Play (Android)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => alert('Redirecting to Apple App Store (Funngro)')}
                className="w-full py-2 px-3 rounded-xl bg-[#14112B] text-white hover:bg-[#7B5CFA] transition-colors text-xs font-semibold flex items-center justify-between"
              >
                <span>App Store (iOS)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* SMS Link Section */}
        <div className="pt-2">
          <p className="text-xs font-medium text-[#14112B] mb-2">Or get download link via SMS:</p>
          {sent ? (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Download link sent to <strong>+91 {phoneNumber}</strong>! Check your messages.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSendLink} className="space-y-2">
              <div className="flex gap-2">
                <div className="flex items-center px-3 bg-white border border-[#E9E2D3] rounded-xl text-xs font-mono text-[#6B6785]">
                  +91
                </div>
                <input
                  type="tel"
                  placeholder="Enter 10-digit mobile"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 px-3 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs text-[#14112B] placeholder:text-[#6B6785] focus:outline-none focus:ring-2 focus:ring-[#19C37D]"
                  maxLength={10}
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#19C37D] text-[#14112B] font-bold text-xs rounded-xl shadow-soft hover:brightness-105 transition-all whitespace-nowrap"
                >
                  Send Link
                </button>
              </div>
              {error && <p className="text-[11px] text-[#FF6B6B]">{error}</p>}
            </form>
          )}
        </div>

        {/* Trust Footnote */}
        <div className="mt-6 pt-4 border-t border-[#E9E2D3] flex items-center justify-between text-[11px] text-[#6B6785]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#19C37D]" />
            100% Free · No Joining Fees
          </span>
          <span>Version 3.8.4</span>
        </div>
      </div>
    </div>
  );
};
