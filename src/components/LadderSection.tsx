import React, { useState } from 'react';
import { LADDER_TIERS } from '../data/content';
import { Check, Trophy, Sparkles, ArrowRight } from 'lucide-react';

export const LadderSection: React.FC = () => {
  const [selectedTierIndex, setSelectedTierIndex] = useState(2); // Gold by default

  const currentTier = LADDER_TIERS[selectedTierIndex];

  return (
    <section id="ladder" className="py-20 bg-[#FFF8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#7B5CFA] font-bold">
            GROWTH & REWARDS PATHWAY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14112B] mt-2 mb-4">
            The Income and Influence <span className="text-[#19C37D] italic">Ladder</span>
          </h2>
          <p className="text-[#6B6785] text-base sm:text-lg">
            As your task quality and streaks climb, your tier upgrades automatically. Higher tiers unlock higher payouts, instant withdrawals, and exclusive brand ambassador gigs.
          </p>
        </div>

        {/* Horizontal Tier Progression Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {LADDER_TIERS.map((tier, idx) => {
            const isSelected = selectedTierIndex === idx;
            return (
              <button
                key={tier.tier}
                onClick={() => setSelectedTierIndex(idx)}
                className={`relative p-5 rounded-2xl text-left transition-all duration-200 border-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C37D] ${
                  isSelected
                    ? 'bg-white border-[#19C37D] shadow-soft-lg -translate-y-1'
                    : 'bg-white/70 border-[#E9E2D3] hover:border-[#14112B]/30'
                }`}
              >
                {/* Level indicator */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase font-bold text-[#6B6785]">
                    Tier {idx + 1}
                  </span>
                  {tier.active && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#19C37D]/20 text-[#14112B]">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#14112B]">
                  {tier.tier}
                </h3>
                <p className="text-xs text-[#6B6785] mt-1 font-mono">
                  {tier.minTasks}
                </p>

                <div className="mt-3 pt-3 border-t border-[#E9E2D3] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#19C37D] font-mono">
                    {tier.avgEarnings}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#19C37D]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Tier Detail Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E9E2D3] shadow-soft max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E9E2D3]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-3 border">
                <Trophy className="w-3.5 h-3.5 text-[#19C37D]" />
                <span>{currentTier.level}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14112B]">
                {currentTier.tier} Benefits
              </h3>
              <p className="text-sm text-[#6B6785] mt-1">
                Requirement: <strong className="text-[#14112B]">{currentTier.minTasks}</strong>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF8EC] border border-[#E9E2D3] text-left md:text-right shrink-0">
              <span className="text-[11px] font-mono uppercase text-[#6B6785]">
                Expected Earnings
              </span>
              <p className="text-2xl font-bold font-mono text-[#19C37D]">
                {currentTier.avgEarnings}
              </p>
              <p className="text-[11px] text-[#6B6785]">Paid directly via UPI</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-[#14112B] mb-4">
              Unlocked Perks & Privileges
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentTier.perks.map((perk, pIdx) => (
                <div
                  key={pIdx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF8EC]/60 border border-[#E9E2D3]/80"
                >
                  <div className="w-5 h-5 rounded-full bg-[#19C37D]/20 text-[#19C37D] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm text-[#14112B] font-medium leading-snug">
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Level-up hint */}
          <div className="mt-8 pt-6 border-t border-[#E9E2D3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#6B6785]">
              <Sparkles className="w-4 h-4 text-[#7B5CFA]" />
              <span>Complete daily tasks to maintain your streak and accelerate tier promotion.</span>
            </div>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14112B] hover:text-[#19C37D] transition-colors font-mono uppercase"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
