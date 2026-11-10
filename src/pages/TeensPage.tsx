import React from 'react';
import { ArrowRight, Smartphone, ShieldCheck, Star, Users, CheckCircle, IndianRupee, Sparkles, ChevronRight, Lock, Award, HeartHandshake } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PhoneMockup } from '../components/PhoneMockup';
import { StoryCard } from '../components/StoryCard';
import { LadderSection } from '../components/LadderSection';
import { GroMoneySection } from '../components/GroMoneySection';
import { FAQAccordion } from '../components/FAQAccordion';
import { TEEN_STORIES, TASK_CATEGORIES, TEENS_FAQ, TRUST_METRICS } from '../data/content';
import { Link } from 'react-router-dom';

interface TeensPageProps {
  onOpenDownloadModal: () => void;
}

export const TeensPage: React.FC<TeensPageProps> = ({ onOpenDownloadModal }) => {
  return (
    <>
      <SEOHead
        title="Funngro: Earn Money Online for Teens in India"
        description="Earn real money online for teens in India. Complete tasks from top brands, level up, and withdraw instant cash to UPI or bank accounts."
        canonicalPath="/"
        faqItems={TEENS_FAQ}
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-10 sm:pt-16 pb-20 bg-[#FFF8EC]">
        {/* Soft background ambient gradient blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#7B5CFA]/10 via-[#19C37D]/12 to-[#FFC93C]/15 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14112B]/5 border border-[#14112B]/10 text-xs font-mono font-bold uppercase tracking-widest text-[#14112B]">
                <span className="w-2 h-2 rounded-full bg-[#19C37D]" />
                <span>India's Youth · India's Brands</span>
              </div>

              {/* H1 Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#14112B] leading-[1.15] text-balance">
                Earn real money doing work you <span className="text-[#19C37D] italic">actually</span> want to do.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#6B6785] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Get paid in UPI or bank transfer for tasks from top brands. No experience needed. Join 70 Lakh+ Indian teens turning spare screen time into financial freedom.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={onOpenDownloadModal}
                  className="cursor-pointer w-full sm:w-auto px-8 py-4 bg-[#19C37D] text-[#14112B] font-bold text-base rounded-full shadow-soft hover:-translate-y-1 hover:shadow-soft-lg transition-all active:translate-y-0 flex items-center justify-center gap-2.5"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Download the App</span>
                </button>

                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-[#14112B] font-semibold text-base rounded-full border border-[#E9E2D3] hover:border-[#14112B] shadow-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="w-4 h-4 text-[#6B6785]" />
                </a>
              </div>

              {/* Instant Social Micro-Proof */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#6B6785]">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#19C37D]" />
                  <span>100% Free · No Joining Fees</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <IndianRupee className="w-4 h-4 text-[#19C37D]" />
                  <span>Direct UPI Transfer in 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-8 bg-white border-y border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {/* Metric 1 */}
            <div className="p-2">
              <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-bold font-mono text-[#14112B]">
                <Star className="w-6 h-6 fill-[#FFC93C] text-[#FFC93C]" />
                <span>4.2 ★</span>
              </div>
              <p className="text-xs text-[#6B6785] mt-1 font-mono">
                85,000+ App Store Reviews
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-bold font-mono text-[#19C37D] tabular-nums">
                {TRUST_METRICS.activeUsers}
              </p>
              <p className="text-xs text-[#6B6785] mt-1 font-mono">
                Young Indians Earning
              </p>
            </div>

            {/* Metric 3: Shark Tank */}
            <div className="p-2">
              <div className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base text-[#14112B]">
                <span className="text-base sm:text-xl">🦈</span>
                <span>Shark Tank India S2</span>
              </div>
              <p className="text-xs text-[#6B6785] mt-1 font-mono">
                As Seen On National Television
              </p>
            </div>

            {/* Metric 4: Sucseed */}
            <div className="p-2">
              <div className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base text-[#7B5CFA]">
                <ShieldCheck className="w-5 h-5 text-[#7B5CFA]" />
                <span>Sucseed Innovation</span>
              </div>
              <p className="text-xs text-[#6B6785] mt-1 font-mono">
                Institutional Venture Backed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works (4 Steps with 4 distinct accent colors) */}
      <section id="how-it-works" className="py-20 bg-[#FFF8EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#19C37D] font-bold">
              SIMPLE 4-STEP BLUEPRINT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14112B] mt-2 mb-4">
              How Funngro Works for <span className="text-[#7B5CFA] italic">Teens</span>
            </h2>
            <p className="text-[#6B6785] text-base sm:text-lg">
              No tricky technical resumes or confusing interview loops. Sign up in under 60 seconds and claim tasks on your phone anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 - Violet Accent */}
            <div className="p-6 rounded-3xl bg-white border border-[#E9E2D3] shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-2xl bg-[#7B5CFA]/15 text-[#7B5CFA] font-mono font-bold flex items-center justify-center text-sm border border-[#7B5CFA]/30">
                    01
                  </span>
                  <span className="text-xs font-mono uppercase text-[#7B5CFA] font-bold">
                    60 Seconds
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#14112B] mb-2">
                  Sign Up for Free
                </h3>
                <p className="text-sm text-[#6B6785] leading-relaxed">
                  Download the app, create your verified profile with your mobile number, and enter your interests. Never pay any joining fee.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E9E2D3] text-xs font-mono text-[#6B6785]">
                ✓ Zero registration charges
              </div>
            </div>

            {/* Step 2 - Coral Accent */}
            <div className="p-6 rounded-3xl bg-white border border-[#E9E2D3] shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-2xl bg-[#FF6B6B]/15 text-[#FF6B6B] font-mono font-bold flex items-center justify-center text-sm border border-[#FF6B6B]/30">
                    02
                  </span>
                  <span className="text-xs font-mono uppercase text-[#FF6B6B] font-bold">
                    50+ Daily Gigs
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#14112B] mb-2">
                  Pick Your Tasks
                </h3>
                <p className="text-sm text-[#6B6785] leading-relaxed">
                  Explore exciting tasks across gaming, youth surveys, new app trials, and fintech tests. Pick whatever matches your free hours.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E9E2D3] text-xs font-mono text-[#6B6785]">
                ✓ Flexible time commitment
              </div>
            </div>

            {/* Step 3 - Yellow Accent */}
            <div className="p-6 rounded-3xl bg-white border border-[#E9E2D3] shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-2xl bg-[#FFC93C]/25 text-[#14112B] font-mono font-bold flex items-center justify-center text-sm border border-[#FFC93C]/50">
                    03
                  </span>
                  <span className="text-xs font-mono uppercase text-[#14112B] font-bold">
                    In-App Submit
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#14112B] mb-2">
                  Complete & Submit
                </h3>
                <p className="text-sm text-[#6B6785] leading-relaxed">
                  Follow simple step-by-step instructions. Upload proof (like a screenshot or feedback form) directly through the Funngro app.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E9E2D3] text-xs font-mono text-[#6B6785]">
                ✓ Guided task instructions
              </div>
            </div>

            {/* Step 4 - Sky/Green Accent */}
            <div className="p-6 rounded-3xl bg-white border border-[#E9E2D3] shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-2xl bg-[#19C37D]/20 text-[#19C37D] font-mono font-bold flex items-center justify-center text-sm border border-[#19C37D]/40">
                    04
                  </span>
                  <span className="text-xs font-mono uppercase text-[#19C37D] font-bold">
                    Instant UPI
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#14112B] mb-2">
                  Withdraw to UPI
                </h3>
                <p className="text-sm text-[#6B6785] leading-relaxed">
                  Once your task is verified, funds hit your GroMoney wallet. Transfer money directly to your UPI ID or bank account within 24 hours.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E9E2D3] text-xs font-mono text-[#19C37D] font-bold">
                ✓ Credited to GPay / PhonePe / FamPay
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Task Categories (Register, Games, Fintech, Survey with icons & 50+ tasks) */}
      <section className="py-20 bg-white border-y border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B6B] font-bold">
                EXPLORE OPPORTUNITIES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14112B] mt-2">
                Popular Task <span className="text-[#19C37D] italic">Categories</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#6B6785] max-w-md">
              Over 200+ partner campaigns active each week. Choose tasks based on what you love doing most on your phone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TASK_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-3xl bg-[#FFF8EC] border border-[#E9E2D3] shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white border border-[#E9E2D3] text-[#14112B]">
                      {cat.count}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#19C37D]">
                      {cat.payoutRange}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#14112B] mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#6B6785] leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-mono uppercase text-[#6B6785] mb-2">
                    Partner Brands:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.popularBrands.map((b) => (
                      <span
                        key={b}
                        className="px-2 py-0.5 rounded-lg bg-white text-[11px] font-medium text-[#14112B] border border-[#E9E2D3]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GroMoney and Wallet Section (Deep Indigo) */}
      <GroMoneySection />

      {/* 6. Income & Influence Ladder (Horizontal tier ladder) */}
      <LadderSection />

      {/* 7. Teen Stories Carousel / Showcase */}
      <section id="stories" className="py-20 bg-white border-y border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7B5CFA] font-bold">
              REAL VOICES & EXPERIENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14112B] mt-2 mb-4">
              Stories from India’s Young <span className="text-[#19C37D] italic">Earners</span>
            </h2>
            <p className="text-[#6B6785] text-base sm:text-lg">
              From Delhi to Surat to Kolkata, school students and college undergrads share how Funngro opened the doors to their first independent earnings.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEEN_STORIES.slice(0, 3).map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          {/* Secondary 2-column strip for remaining stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {TEEN_STORIES.slice(3, 5).map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Trust and Safety Section */}
      <section id="safety" className="py-20 bg-[#FFF8EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E9E2D3] shadow-soft max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="w-12 h-12 rounded-2xl bg-[#19C37D]/20 text-[#19C37D] flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#19C37D] font-bold">
                PARENT & TEEN PEACE OF MIND
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14112B] mt-2 mb-3">
                Built with 100% Trust & <span className="text-[#7B5CFA] italic">Safety</span>
              </h2>
              <p className="text-[#6B6785] text-sm sm:text-base">
                Earning should be empowering, safe, and educational. We enforce strict digital safety standards for all teen users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#7B5CFA]/15 text-[#7B5CFA] flex items-center justify-center font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#14112B] text-lg">Verified Brands Only</h3>
                <p className="text-sm text-[#6B6785] leading-relaxed">
                  Every brand project undergoes KYC and compliance screening. We never allow suspicious links, gambling apps, or adult content on Funngro.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#19C37D]/20 text-[#19C37D] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#14112B] text-lg">No Joining Fees Ever</h3>
                <p className="text-sm text-[#6B6785] leading-relaxed">
                  Funngro never charges teenagers to access gigs. We protect you from recruitment scams by making every task 100% free to start.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFC93C]/30 text-[#14112B] flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#14112B] text-lg">Guaranteed Safe Payouts</h3>
                <p className="text-sm text-[#6B6785] leading-relaxed">
                  Direct domestic bank transfer and official UPI handles. For minors under 18, parental consent can be configured easily in the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className="py-20 bg-white border-t border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#19C37D] font-bold">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14112B] mt-2 mb-4">
              Frequently Asked <span className="text-[#19C37D] italic">Questions</span>
            </h2>
            <p className="text-[#6B6785] text-base sm:text-lg">
              Everything you need to know about earning your first rupee on Funngro safely.
            </p>
          </div>

          <FAQAccordion items={TEENS_FAQ} />
        </div>
      </section>

      {/* 10. Final CTA Banner */}
      <section className="py-20 bg-[#14112B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFC93C] font-bold">
            START YOUR FINANCIAL JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-white mt-3 mb-6 max-w-3xl mx-auto leading-tight">
            Ready to earn your first <span className="text-[#19C37D] italic">₹500</span> today?
          </h2>
          <p className="text-[#A5A1BE] text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Join over 70 Lakh young Indians on Funngro. Download the app, pick a task, and withdraw your earnings directly to UPI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenDownloadModal}
              className="cursor-pointer w-full sm:w-auto px-8 py-4 bg-[#19C37D] text-[#14112B] font-bold text-base rounded-full shadow-soft hover:-translate-y-1 hover:shadow-soft-lg transition-all"
            >
              Get the Funngro App Free
            </button>

            <Link
              to="/brands"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-base rounded-full border border-white/20 transition-all"
            >
              Are you a Brand? Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
