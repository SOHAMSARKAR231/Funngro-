import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDownloadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownloadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isBrandsPage = location.pathname === '/brands';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#FFF8EC]/85 backdrop-blur-md shadow-sm border-b border-[#E9E2D3]'
          : 'bg-[#FFF8EC] border-b border-[#E9E2D3]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#14112B] whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C37D] rounded-lg"
            aria-label="Funngro home page"
          >
            <span className="font-serif text-3xl text-[#14112B] tracking-tight">
              funn<span className="text-[#19C37D] italic">gro</span>
            </span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#19C37D] group-hover:scale-125 transition-transform" />
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#14112B]"
            aria-label="Primary Navigation"
          >
            <Link
              to="/"
              className={`whitespace-nowrap transition-colors hover:text-[#19C37D] py-1 ${
                !isBrandsPage
                  ? 'font-semibold text-[#14112B] border-b-2 border-[#19C37D]'
                  : 'text-[#6B6785]'
              }`}
            >
              Teens
            </Link>
            <Link
              to="/brands"
              className={`whitespace-nowrap transition-colors hover:text-[#7B5CFA] py-1 ${
                isBrandsPage
                  ? 'font-semibold text-[#14112B] border-b-2 border-[#7B5CFA]'
                  : 'text-[#6B6785]'
              }`}
            >
              For Brands
            </Link>
            <a
              href="#how-it-works"
              className="text-[#6B6785] hover:text-[#14112B] transition-colors whitespace-nowrap"
            >
              How It Works
            </a>
            <a
              href="#stories"
              className="text-[#6B6785] hover:text-[#14112B] transition-colors whitespace-nowrap"
            >
              Teen Stories
            </a>
            <a
              href="#faq"
              className="text-[#6B6785] hover:text-[#14112B] transition-colors whitespace-nowrap"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDownloadModal}
              className="cursor-pointer hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#19C37D] text-[#14112B] font-semibold text-sm rounded-full shadow-soft hover:-translate-y-0.5 hover:shadow-md transition-all active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C37D] focus-visible:ring-offset-2 whitespace-nowrap"
              aria-label="Download the Funngro mobile application"
            >
              <Smartphone className="w-4 h-4" aria-hidden="true" />
              <span>Get the App</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-xl text-[#14112B] hover:bg-[#E9E2D3]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C37D]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#FFF8EC] border-b border-[#E9E2D3] px-6 pt-4 pb-6 shadow-xl space-y-4 animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-xl font-medium text-base ${
                !isBrandsPage
                  ? 'bg-[#19C37D]/15 text-[#14112B] font-semibold'
                  : 'text-[#6B6785] hover:text-[#14112B]'
              }`}
            >
              Teens (Earn Money)
            </Link>
            <Link
              to="/brands"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-xl font-medium text-base ${
                isBrandsPage
                  ? 'bg-[#7B5CFA]/15 text-[#14112B] font-semibold'
                  : 'text-[#6B6785] hover:text-[#14112B]'
              }`}
            >
              For Brands (Youth Marketing)
            </Link>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-[#6B6785] hover:text-[#14112B] font-medium text-base"
            >
              How It Works
            </a>
            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-[#6B6785] hover:text-[#14112B] font-medium text-base"
            >
              Teen Stories
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-[#6B6785] hover:text-[#14112B] font-medium text-base"
            >
              Frequently Asked Questions
            </a>
          </div>

          <div className="pt-2 border-t border-[#E9E2D3]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#19C37D] text-[#14112B] font-semibold rounded-full shadow-soft"
            >
              <Smartphone className="w-4 h-4" />
              <span>Get the App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
