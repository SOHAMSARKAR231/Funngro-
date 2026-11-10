import React, { useState } from 'react';
import { Flame, Sparkles, Trophy, Wallet, ArrowUpRight, Zap, RefreshCw } from 'lucide-react';

export const GroMoneySection: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<string | null>(null);

  const leaderboard = [
    { rank: 1, name: 'Ananya D.', city: 'Pune', earned: '₹31,500', streak: '18 Days', badge: 'Platinum' },
    { rank: 2, name: 'Diya P.', city: 'Surat', earned: '₹24,800', streak: '14 Days', badge: 'Platinum' },
    { rank: 3, name: 'Aarav S.', city: 'Delhi', earned: '₹18,450', streak: '9 Days', badge: 'Gold' },
    { rank: 4, name: 'Tanmay V.', city: 'Bengaluru', earned: '₹15,900', streak: '12 Days', badge: 'Gold' },
    { rank: 5, name: 'Ritwik B.', city: 'Kolkata', earned: '₹12,200', streak: '7 Days', badge: 'Silver' },
  ];

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setSpinResult(null);

    const outcomes = [
      '+₹100 UPI Bonus Won!',
      '2x Streak Multiplier Unlocked!',
      '+₹50 GroMoney Added!',
      'VIP Brand Pass Awarded!',
      '+₹250 Instant Cash Token!',
    ];

    setTimeout(() => {
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      setSpinResult(randomOutcome);
      setSpinning(false);
    }, 1200);
  };

  return (
    <section id="gromoney" className="py-20 bg-[#14112B] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7B5CFA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#19C37D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFC93C] font-bold">
            GAMIFIED TEEN WALLET & REPUTATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            GroMoney Wallet, Streaks & <span className="text-[#19C37D] italic">GroRank</span>
          </h2>
          <p className="text-[#A5A1BE] text-base sm:text-lg">
            Every task you finish builds your verifiable digital credit score. Earn real cash in your wallet, spin daily for surprise bonuses, and climb the pan-India youth leaderboard.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: GroMoney Wallet */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#19C37D]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#19C37D]/20 text-[#19C37D] flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                GroMoney Wallet
              </h3>
              <p className="text-sm text-[#A5A1BE] leading-relaxed">
                Direct 1:1 Rupee value. Withdraw straight into any UPI handle (GPay, PhonePe, Paytm, FamPay) within 24 hours. Zero hidden deductions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#19C37D]">
              <span>Direct Bank & UPI</span>
              <span className="font-bold">₹1 = ₹1</span>
            </div>
          </div>

          {/* Card 2: GroRank System */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#7B5CFA]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#7B5CFA]/20 text-[#7B5CFA] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Dynamic GroRank
              </h3>
              <p className="text-sm text-[#A5A1BE] leading-relaxed">
                Your on-platform reputation calculated from accuracy, promptness, and brand feedback. High GroRank gets first access to ₹500+ tasks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#7B5CFA]">
              <span>Quality Score</span>
              <span className="font-bold">Up to 99 GroScore</span>
            </div>
          </div>

          {/* Card 3: Daily Streaks */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FF6B6B]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B6B]/20 text-[#FF6B6B] flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 fill-[#FF6B6B]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Earnings Streaks
              </h3>
              <p className="text-sm text-[#A5A1BE] leading-relaxed">
                Complete at least one task or daily check-in to keep your fire lit. Hit 7-day and 30-day milestones for up to 1.5x earnings multipliers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#FF6B6B]">
              <span>Streak Bonus</span>
              <span className="font-bold">+15% to +50%</span>
            </div>
          </div>

          {/* Card 4: Daily GroSpin (Interactive) */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#7B5CFA]/25 to-white/5 border border-[#7B5CFA]/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFC93C]/20 text-[#FFC93C] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Daily GroSpin
              </h3>
              <p className="text-sm text-[#A5A1BE] leading-relaxed mb-4">
                Log in every day for a free spin. Win real UPI cash boosts, brand coupons, and surprise task unlocks.
              </p>

              {/* Interactive Spin Area */}
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center">
                {spinResult ? (
                  <div className="py-2 animate-in zoom-in-95 duration-150">
                    <span className="text-xs font-mono uppercase text-[#19C37D] font-bold block">
                      🎉 Lucky Drop!
                    </span>
                    <p className="text-sm font-bold text-white mt-1">{spinResult}</p>
                  </div>
                ) : (
                  <p className="text-xs text-[#A5A1BE] py-2">
                    {spinning ? 'Spinning wheel...' : '1 Free Token Available Today'}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleSpin}
                  disabled={spinning}
                  className="cursor-pointer w-full mt-2 py-2 px-3 bg-[#FFC93C] text-[#14112B] font-bold text-xs rounded-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${spinning ? 'animate-spin' : ''}`} />
                  <span>{spinning ? 'Spinning...' : 'Try GroSpin Now'}</span>
                </button>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[#A5A1BE] text-center">
              Guaranteed win on every spin
            </div>
          </div>
        </div>

        {/* Live Community Leaderboard Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#FFC93C]" />
                <h3 className="font-serif text-2xl font-bold text-white">
                  Pan-India Teen Leaderboard
                </h3>
              </div>
              <p className="text-xs text-[#A5A1BE] mt-1">
                Top earners this month across 500+ Indian cities · Updated live
              </p>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#19C37D] border border-[#19C37D]/30">
              Verified UPI Payouts
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[#6B6785] font-mono text-xs uppercase">
                  <th className="pb-3 font-semibold">Rank</th>
                  <th className="pb-3 font-semibold">Groer Name</th>
                  <th className="pb-3 font-semibold">City</th>
                  <th className="pb-3 font-semibold">Streak</th>
                  <th className="pb-3 font-semibold">Tier</th>
                  <th className="pb-3 font-semibold text-right">Earned This Month</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leaderboard.map((user) => (
                  <tr key={user.rank} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 font-mono font-bold">
                      {user.rank === 1 ? (
                        <span className="w-6 h-6 rounded-full bg-[#FFC93C] text-[#14112B] inline-flex items-center justify-center text-xs">
                          1
                        </span>
                      ) : user.rank === 2 ? (
                        <span className="w-6 h-6 rounded-full bg-slate-300 text-[#14112B] inline-flex items-center justify-center text-xs">
                          2
                        </span>
                      ) : user.rank === 3 ? (
                        <span className="w-6 h-6 rounded-full bg-amber-600 text-white inline-flex items-center justify-center text-xs">
                          3
                        </span>
                      ) : (
                        <span className="text-[#A5A1BE] px-2">{user.rank}</span>
                      )}
                    </td>
                    <td className="py-3.5 font-semibold text-white">{user.name}</td>
                    <td className="py-3.5 text-[#A5A1BE]">{user.city}</td>
                    <td className="py-3.5 text-[#FF6B6B] font-mono text-xs">{user.streak} 🔥</td>
                    <td className="py-3.5">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-white/10 text-white">
                        {user.badge}
                      </span>
                    </td>
                    <td className="py-3.5 text-right font-mono font-bold text-[#19C37D] tabular-nums">
                      {user.earned}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
