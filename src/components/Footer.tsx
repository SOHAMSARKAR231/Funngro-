import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Youtube, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14112B] text-white border-t border-[#14112B]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top summary row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group" aria-label="Funngro Home">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                funn<span className="text-[#19C37D] italic">gro</span>
              </span>
            </Link>
            <p className="text-[#6B6785] text-sm leading-relaxed max-w-sm">
              Empowering India’s teens and young adults to earn their first income through real brand projects, develop financial literacy, and build career-ready portfolios.
            </p>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/90">
                <span className="w-2 h-2 rounded-full bg-[#FFC93C]" />
                <span>As Seen on <strong>Shark Tank India S2</strong></span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/90">
                <ShieldCheck className="w-3.5 h-3.5 text-[#19C37D]" />
                <span>Backed by Sucseed Innovation</span>
              </div>
            </div>
          </div>

          {/* Column 1: Earn */}
          <div>
            <h3 className="font-mono uppercase text-xs tracking-wider text-[#FFC93C] font-semibold mb-4">
              Earn
            </h3>
            <ul className="space-y-3 text-sm text-[#A5A1BE]">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  Teen Stories
                </a>
              </li>
              <li>
                <a href="#gromoney" className="hover:text-white transition-colors">
                  GroMoney Wallet & Perks
                </a>
              </li>
              <li>
                <a href="#ladder" className="hover:text-white transition-colors">
                  Influence Ladder
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-white/70">
                  <span>SheLancer</span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#7B5CFA]/30 text-[#7B5CFA] font-bold">Initiative</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Brands */}
          <div>
            <h3 className="font-mono uppercase text-xs tracking-wider text-[#4CC9F0] font-semibold mb-4">
              Brands
            </h3>
            <ul className="space-y-3 text-sm text-[#A5A1BE]">
              <li>
                <Link to="/brands" className="hover:text-white transition-colors font-medium text-white/90">
                  For Brands Overview
                </Link>
              </li>
              <li>
                <Link to="/brands#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/brands#services" className="hover:text-white transition-colors">
                  Solutions & Deliverables
                </Link>
              </li>
              <li>
                <Link to="/brands#contact" className="hover:text-white transition-colors">
                  Contact Sales & Demo
                </Link>
              </li>
              <li>
                <Link to="/brands#faq" className="hover:text-white transition-colors">
                  Brand FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div>
            <h3 className="font-mono uppercase text-xs tracking-wider text-[#19C37D] font-semibold mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-3 text-sm text-[#A5A1BE]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-white transition-colors">
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Help & Support FAQ
                </a>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and social row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6785]">
          <div className="flex items-center gap-2">
            <span>© 2026 Funngro. All rights reserved.</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1 text-white/70">
              Made with <Heart className="w-3.5 h-3.5 text-[#FF6B6B] fill-[#FF6B6B]" /> in India
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              aria-label="Funngro on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              aria-label="Funngro on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              aria-label="Funngro on X / Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              aria-label="Funngro on YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
