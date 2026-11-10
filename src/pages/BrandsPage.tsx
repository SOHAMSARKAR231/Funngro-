import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, ShieldCheck, Zap, BarChart3, Smartphone, Target, Award, Play } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { BRANDS_SERVICES, BRAND_CASE_STUDIES, BRANDS_FAQ, TRUST_METRICS } from '../data/content';
import { Link } from 'react-router-dom';

export const BrandsPage: React.FC = () => {
  const brandLogos = [
    { name: 'boAt Lifestyle', category: 'D2C Consumer Tech' },
    { name: 'Krafton India', category: 'Mobile Gaming' },
    { name: 'FamPay', category: 'Youth NeoBanking' },
    { name: 'Swiggy', category: 'Food & Delivery' },
    { name: 'Puma India', category: 'Youth Apparel' },
    { name: 'Fi Money', category: 'Smart Savings' },
    { name: 'Nazara Games', category: 'Interactive Play' },
    { name: 'Jupiter', category: 'Digital Banking' },
  ];

  return (
    <>
      <SEOHead
        title="Funngro: #1 Youth Marketing Platform in India"
        description="Reach 70 Lakh+ young Indians with Funngro, India's leading youth marketing platform for app installs, research, campus buzz, and UGC."
        canonicalPath="/brands"
        faqItems={BRANDS_FAQ}
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 pb-20 bg-[#FFF8EC]">
        {/* Ambient background blob */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[450px] bg-gradient-to-tr from-[#7B5CFA]/15 via-[#19C37D]/12 to-[#4CC9F0]/15 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7B5CFA]/10 border border-[#7B5CFA]/25 text-xs font-mono font-bold uppercase tracking-widest text-[#7B5CFA]">
                <Target className="w-3.5 h-3.5" />
                <span>For Brands & Enterprises</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#14112B] leading-[1.15] text-balance">
                Reach India's youth where they <span className="text-[#7B5CFA] italic">actually</span> are.
              </h1>

              <p className="text-base sm:text-lg text-[#6B6785] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect your brand directly with 70 Lakh+ verified teens and college students. Drive verified app installs, honest market insights, viral UGC, and hyper-targeted campus buzz with zero bot fraud.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="cursor-pointer w-full sm:w-auto px-8 py-4 bg-[#14112B] text-white hover:bg-[#19C37D] hover:text-[#14112B] font-bold text-base rounded-full shadow-soft hover:-translate-y-1 hover:shadow-soft-lg transition-all text-center flex items-center justify-center gap-2.5"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#case-studies"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-[#14112B] font-semibold text-base rounded-full border border-[#E9E2D3] hover:border-[#14112B] shadow-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>See Case Studies</span>
                </a>
              </div>

              {/* Guarantee bullet points */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#6B6785]">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#19C37D]" />
                  <span>100% Pay-Per-Action Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#7B5CFA]" />
                  <span>Verified Human Device Traffic</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Asset */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#14112B] shadow-soft-lg">
                  <img
                    src="/src/assets/images/brands_marketing_hero_1794344946641.jpg"
                    alt="Indian marketing and growth team analyzing youth campaign performance at Funngro"
                    width={640}
                    height={360}
                    loading="lazy"
                    className="w-full h-auto object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14112B]/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#19C37D] text-[#14112B] font-bold">
                        Live Analytics
                      </span>
                      <p className="text-sm font-semibold mt-1">
                        Turnaround times under 24 hours across 500+ Indian cities
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-[#E9E2D3] shadow-soft hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#19C37D]/20 text-[#19C37D] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#6B6785]">Average Conversion Lift</span>
                    <p className="text-base font-bold font-mono text-[#14112B]">+42% vs Meta Ads</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <section className="py-10 bg-white border-y border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-mono text-[#14112B] tracking-tight">
                70 Lakh+
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#6B6785] mt-1 uppercase">
                Active Youth Community
              </p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-bold font-mono text-[#7B5CFA] tracking-tight">
                500+ Cities
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#6B6785] mt-1 uppercase">
                Pan-India Tier 1/2/3 Reach
              </p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-bold font-mono text-[#19C37D] tracking-tight">
                &lt; 24 Hours
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#6B6785] mt-1 uppercase">
                Rapid Campaign Turnaround
              </p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-bold font-mono text-[#FFC93C] tracking-tight">
                Pay-Per-Action
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#6B6785] mt-1 uppercase">
                100% Performance Verified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Brands Can Do (Services & Solutions) */}
      <section id="services" className="py-20 bg-[#FFF8EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7B5CFA] font-bold">
              SOLUTIONS & CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14112B] mt-2 mb-4">
              What Brands Can Do on <span className="text-[#19C37D] italic">Funngro</span>
            </h2>
            <p className="text-[#6B6785] text-base sm:text-lg">
              Deliver high-impact business outcomes with India’s most responsive youth audience across research, acquisition, and brand advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANDS_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-[#E9E2D3] shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#FFF8EC] border border-[#E9E2D3] text-[#14112B]">
                      {srv.metrics}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#14112B]/5 flex items-center justify-center font-mono font-bold text-xs text-[#14112B]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#14112B] mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#6B6785] mb-5 leading-relaxed">
                    {srv.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9E2D3] space-y-2">
                  <span className="text-[10px] font-mono uppercase text-[#6B6785] block">
                    Key Deliverables:
                  </span>
                  {srv.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#14112B]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How a Campaign Works (4-Step Timeline) */}
      <section className="py-20 bg-white border-y border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#19C37D] font-bold">
              STREAMLINED EXECUTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14112B] mt-2 mb-4">
              How a Campaign Works from <span className="text-[#7B5CFA] italic">Brief to Report</span>
            </h2>
            <p className="text-[#6B6785] text-base sm:text-lg">
              Launch targeted campaigns in hours, not months. We handle audience cohort routing, moderation, and automated payouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-3xl bg-[#FFF8EC] border border-[#E9E2D3] relative">
              <span className="text-3xl font-serif font-bold text-[#14112B]/20 absolute top-4 right-4">
                01
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#7B5CFA]/15 text-[#7B5CFA] flex items-center justify-center font-bold mb-4">
                📋
              </div>
              <h3 className="font-serif text-xl font-bold text-[#14112B] mb-2">Campaign Brief</h3>
              <p className="text-sm text-[#6B6785] leading-relaxed">
                Define target demographics (age, city tier, college stream), instructions, and required proof criteria.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-3xl bg-[#FFF8EC] border border-[#E9E2D3] relative">
              <span className="text-3xl font-serif font-bold text-[#14112B]/20 absolute top-4 right-4">
                02
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#19C37D]/20 text-[#19C37D] flex items-center justify-center font-bold mb-4">
                🚀
              </div>
              <h3 className="font-serif text-xl font-bold text-[#14112B] mb-2">Instant Launch</h3>
              <p className="text-sm text-[#6B6785] leading-relaxed">
                Your task goes live directly inside the Funngro app to pre-qualified teen cohorts within 4 hours.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-3xl bg-[#FFF8EC] border border-[#E9E2D3] relative">
              <span className="text-3xl font-serif font-bold text-[#14112B]/20 absolute top-4 right-4">
                03
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#FF6B6B]/20 text-[#FF6B6B] flex items-center justify-center font-bold mb-4">
                📱
              </div>
              <h3 className="font-serif text-xl font-bold text-[#14112B] mb-2">Youth Execute</h3>
              <p className="text-sm text-[#6B6785] leading-relaxed">
                Young Indians complete tasks on their phones and submit screen recordings, receipts, and in-app proof.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-3xl bg-[#FFF8EC] border border-[#E9E2D3] relative">
              <span className="text-3xl font-serif font-bold text-[#14112B]/20 absolute top-4 right-4">
                04
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#FFC93C]/30 text-[#14112B] flex items-center justify-center font-bold mb-4">
                📊
              </div>
              <h3 className="font-serif text-xl font-bold text-[#14112B] mb-2">Verified Report</h3>
              <p className="text-sm text-[#6B6785] leading-relaxed">
                Our GroReview engine filters invalid attempts. You receive auditable performance analytics and UGC assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Funngro (4 Pillars) */}
      <section className="py-20 bg-[#14112B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#19C37D] font-bold">
              THE FUNNGRO ADVANTAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              Why 350+ Brands Rely on <span className="text-[#19C37D] italic">Funngro</span>
            </h2>
            <p className="text-[#A5A1BE] text-base sm:text-lg">
              Traditional digital marketing channels are saturated with ad blockers and bot click farms. Funngro delivers verified real human action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#19C37D]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#19C37D]/20 text-[#19C37D] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Verified Users</h3>
              <p className="text-sm text-[#A5A1BE] leading-relaxed">
                Zero emulator traffic. Every user is authenticated with Indian mobile OTP, device fingerprints, and UPI KYC validation.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#7B5CFA]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#7B5CFA]/20 text-[#7B5CFA] flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Real Engagement</h3>
              <p className="text-sm text-[#A5A1BE] leading-relaxed">
                Youth don’t just click and forget; they try features, test gameplay, post authentic social videos, and become genuine brand users.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#4CC9F0]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#4CC9F0]/20 text-[#4CC9F0] flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Transparent Reporting</h3>
              <p className="text-sm text-[#A5A1BE] leading-relaxed">
                Live campaign dashboard with device breakdowns, geographical heatmaps, and downloadable raw feedback data without black-box metrics.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FFC93C]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FFC93C]/20 text-[#FFC93C] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Scalable Pricing</h3>
              <p className="text-sm text-[#A5A1BE] leading-relaxed">
                Pay only when the verified action completes. Scale seamlessly from 500 prototype survey responses to 500,000 national app installs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. About the Company (Mission, Shark Tank, Sucseed) */}
      <section id="about" className="py-20 bg-[#FFF8EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E9E2D3] shadow-soft max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7B5CFA] font-bold">
                  ABOUT FUNNGRO
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14112B]">
                  Unlocking the Economic Potential of <span className="text-[#19C37D] italic">India’s Youth</span>
                </h2>
                <p className="text-[#6B6785] text-sm sm:text-base leading-relaxed">
                  Founded with the conviction that practical financial literacy begins with earning your own first rupee, Funngro connects ambitious Indian teenagers with progressive brands. By offering purposeful micro-tasks and learning opportunities, we bridge classroom theory with real-world professional responsibility.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#14112B] bg-[#FFF8EC] px-3 py-1.5 rounded-lg border border-[#E9E2D3]">
                    <span>🦈 Featured on Shark Tank India S2</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#14112B] bg-[#FFF8EC] px-3 py-1.5 rounded-lg border border-[#E9E2D3]">
                    <ShieldCheck className="w-4 h-4 text-[#7B5CFA]" />
                    <span>Backed by Sucseed Innovation Fund</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FFF8EC] border border-[#E9E2D3] text-center space-y-3">
                <span className="text-xs font-mono uppercase text-[#6B6785]">Impact Milestone</span>
                <p className="text-4xl font-bold font-mono text-[#19C37D]">
                  {TRUST_METRICS.totalPaidOut}
                </p>
                <p className="text-xs text-[#14112B] font-semibold">
                  Transferred directly into young Indians’ bank accounts & UPI wallets
                </p>
                <p className="text-[11px] text-[#6B6785]">
                  Over 500+ Indian towns & cities represented
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Case Studies & Brand Logos */}
      <section id="case-studies" className="py-20 bg-white border-y border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B6B] font-bold">
              PROVEN RESULTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14112B] mt-2 mb-4">
              Real Impact for Top <span className="text-[#19C37D] italic">Enterprises</span>
            </h2>
            <p className="text-[#6B6785] text-base sm:text-lg">
              Explore how high-growth startups and established Indian brands leverage Funngro’s youth distribution engine.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {BRAND_CASE_STUDIES.map((cs, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#FFF8EC] border border-[#E9E2D3] shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-[#14112B] text-white flex items-center justify-center font-bold font-mono text-base">
                      {cs.logoInitial}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#6B6785] px-2.5 py-1 rounded bg-white border border-[#E9E2D3]">
                      {cs.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#14112B] mb-2">
                    {cs.brand}
                  </h3>
                  <p className="text-xs text-[#6B6785] leading-relaxed mb-6">
                    {cs.objective}
                  </p>

                  <div className="space-y-3 mb-6 bg-white p-4 rounded-2xl border border-[#E9E2D3]">
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-center justify-between text-xs">
                        <span className="text-[#6B6785]">{res.label}:</span>
                        <span className="font-mono font-bold text-[#19C37D] text-sm tabular-nums">
                          {res.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E9E2D3] text-xs font-medium text-[#14112B] italic">
                  "{cs.tagline}"
                </div>
              </div>
            ))}
          </div>

          {/* Brand Logo Row */}
          <div className="pt-8 border-t border-[#E9E2D3]">
            <p className="text-center font-mono text-xs uppercase tracking-widest text-[#6B6785] mb-8">
              Trusted by 350+ Leading Indian Consumer & Digital Brands
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {brandLogos.map((brand, bIdx) => (
                <div
                  key={bIdx}
                  className="p-3 rounded-2xl bg-[#FFF8EC] border border-[#E9E2D3] text-center flex flex-col items-center justify-center min-h-[72px]"
                >
                  <span className="text-xs font-bold text-[#14112B]">{brand.name}</span>
                  <span className="text-[10px] text-[#6B6785] truncate max-w-[100px]">{brand.category}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-[11px] font-mono text-[#6B6785]">
                Placeholder showcase representing partner brand relationships
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Sales Form Section */}
      <section id="contact" className="py-20 bg-[#FFF8EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#19C37D] font-bold">
              GET IN TOUCH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14112B] mt-2 mb-3">
              Book a Strategy Call with <span className="text-[#7B5CFA] italic">Sales</span>
            </h2>
            <p className="text-[#6B6785] text-base sm:text-lg">
              Let us know your campaign objectives. We will deliver a tailored turnaround estimate and volume projection in under 4 hours.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* 9. Brands FAQ Section */}
      <section id="faq" className="py-20 bg-white border-t border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7B5CFA] font-bold">
              ENTERPRISE QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14112B] mt-2 mb-4">
              Frequently Asked <span className="text-[#19C37D] italic">Questions</span>
            </h2>
            <p className="text-[#6B6785] text-base sm:text-lg">
              Common questions regarding youth compliance, performance tracking, fraud filtering, and commercial terms.
            </p>
          </div>

          <FAQAccordion items={BRANDS_FAQ} />
        </div>
      </section>
    </>
  );
};
