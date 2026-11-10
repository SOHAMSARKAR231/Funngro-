import React, { useState } from 'react';
import { Sparkles, Flame, CheckCircle, ArrowUpRight, Smartphone, IndianRupee } from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'gaming' | 'fintech'>('all');
  const [completedTaskId, setCompletedTaskId] = useState<number | null>(null);
  const [simulatedBalance, setSimulatedBalance] = useState(2450);

  const tasks = [
    {
      id: 1,
      brand: 'boAt Lifestyle',
      tag: 'fintech',
      title: 'Sound Test & Latency Review',
      reward: 350,
      time: '12 min',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 2,
      brand: 'Krafton India',
      tag: 'gaming',
      title: 'Casual Battle Royale Beta FPS Test',
      reward: 550,
      time: '20 min',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      id: 3,
      brand: 'FamPay Youth Card',
      tag: 'fintech',
      title: 'Student KYC & UPI QR Verification',
      reward: 280,
      time: '8 min',
      color: 'bg-amber-50 text-amber-700 border-amber-200',
    },
  ];

  const filteredTasks = tasks.filter((t) => (activeTab === 'all' ? true : t.tag === activeTab));

  const handleClaim = (id: number, reward: number) => {
    if (completedTaskId === id) return;
    setCompletedTaskId(id);
    setSimulatedBalance((prev) => prev + reward);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px]">
      {/* Soft gradient blob background (violet to green to yellow, blurred, low opacity) */}
      <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-[#7B5CFA]/25 via-[#19C37D]/25 to-[#FFC93C]/25 rounded-[3rem] blur-2xl -z-10 pointer-events-none" />

      {/* Floating Sticker Badges (playful sticker-style slightly rotated) */}
      {/* Sticker 1: Total Earned */}
      <div className="absolute -top-6 -left-6 sm:-left-10 z-20 bg-[#FFC93C] text-[#14112B] font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-sticker-sm -rotate-6 border-2 border-[#14112B] flex items-center gap-1.5 animate-bounce [animation-duration:3.5s]">
        <IndianRupee className="w-4 h-4" />
        <span>₹18,450+ earned</span>
      </div>

      {/* Sticker 2: Streak Multiplier */}
      <div className="absolute top-1/3 -right-6 sm:-right-10 z-20 bg-[#FF6B6B] text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-sticker-sm rotate-6 border-2 border-[#14112B] flex items-center gap-1.5">
        <Flame className="w-4 h-4 fill-white" />
        <span>7-Day Streak 🔥 1.5x</span>
      </div>

      {/* Sticker 3: GroSpin */}
      <div className="absolute -bottom-4 -left-4 sm:-left-6 z-20 bg-[#7B5CFA] text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-sticker-sm rotate-3 border-2 border-[#14112B] flex items-center gap-1.5">
        <Sparkles className="w-4 h-4 text-[#FFC93C]" />
        <span>GroSpin: +₹150 Won!</span>
      </div>

      {/* Main Phone Hardware Body */}
      <div className="bg-[#14112B] p-3 sm:p-4 rounded-[42px] shadow-2xl border-4 border-[#14112B] ring-1 ring-black/10">
        <div className="bg-[#FFF8EC] rounded-[32px] overflow-hidden border border-[#E9E2D3] flex flex-col h-[560px]">
          {/* iOS / Phone Island & Status */}
          <div className="pt-3 px-6 pb-2 bg-[#14112B] text-white flex items-center justify-between text-[11px] font-mono">
            <span>09:41</span>
            <div className="w-20 h-4 bg-black rounded-full mx-auto" />
            <div className="flex items-center gap-1">
              <span>5G</span>
              <div className="w-4 h-2 rounded-sm border border-white/60 p-0.5">
                <div className="w-full h-full bg-[#19C37D]" />
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="p-4 bg-[#14112B] text-white">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFC93C]">
                  Teens GroDashboard
                </span>
                <h4 className="font-serif text-lg font-bold text-white leading-tight">
                  Hi, Aarav Sharma 👋
                </h4>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#19C37D]/20 border border-[#19C37D] flex items-center justify-center text-xs font-bold text-[#19C37D]">
                Lvl 3
              </div>
            </div>

            {/* Wallet Quick Balance Card */}
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-mono text-white/60">GroMoney Wallet</p>
                <p className="text-xl font-bold font-mono tracking-tight text-white flex items-center">
                  <span>₹</span>
                  <span className="tabular-nums">{simulatedBalance.toLocaleString('en-IN')}</span>
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#19C37D] text-[#14112B] font-mono">
                  UPI Ready
                </span>
                <span className="text-[9px] text-white/70">Instant 24h Payout</span>
              </div>
            </div>
          </div>

          {/* App Content Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#FFF8EC]">
            {/* Filter segments */}
            <div className="flex items-center justify-between pt-1">
              <span className="font-mono text-xs uppercase font-semibold text-[#14112B]">
                Today’s Top Tasks
              </span>
              <div className="flex gap-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`px-2 py-0.5 rounded-lg font-medium transition-colors ${
                    activeTab === 'all'
                      ? 'bg-[#14112B] text-white'
                      : 'text-[#6B6785] hover:text-[#14112B]'
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('gaming')}
                  className={`px-2 py-0.5 rounded-lg font-medium transition-colors ${
                    activeTab === 'gaming'
                      ? 'bg-[#14112B] text-white'
                      : 'text-[#6B6785] hover:text-[#14112B]'
                  }`}
                >
                  Games
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('fintech')}
                  className={`px-2 py-0.5 rounded-lg font-medium transition-colors ${
                    activeTab === 'fintech'
                      ? 'bg-[#14112B] text-white'
                      : 'text-[#6B6785] hover:text-[#14112B]'
                  }`}
                >
                  Fintech
                </button>
              </div>
            </div>

            {/* Task Cards List */}
            <div className="space-y-2.5">
              {filteredTasks.map((t) => {
                const isClaimed = completedTaskId === t.id;
                return (
                  <div
                    key={t.id}
                    className="p-3 bg-white rounded-2xl border border-[#E9E2D3] shadow-sm hover:border-[#19C37D] transition-all"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wide text-[#6B6785]">
                          {t.brand}
                        </span>
                        <h5 className="text-xs font-semibold text-[#14112B] leading-snug">
                          {t.title}
                        </h5>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-bold font-mono text-[#19C37D] tabular-nums">
                          +₹{t.reward}
                        </span>
                        <p className="text-[9px] text-[#6B6785]">{t.time}</p>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-[#E9E2D3]/60">
                      <span className="text-[10px] text-[#6B6785] flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-[#19C37D]" />
                        <span>Verified Brand</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => handleClaim(t.id, t.reward)}
                        className={`cursor-pointer px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all flex items-center gap-1 ${
                          isClaimed
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-[#14112B] text-white hover:bg-[#19C37D] hover:text-[#14112B]'
                        }`}
                      >
                        {isClaimed ? (
                          <>
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            <span>Done (+₹{t.reward})</span>
                          </>
                        ) : (
                          <>
                            <span>Start Task</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom quick banner inside phone */}
            <div className="p-2.5 rounded-2xl bg-gradient-to-r from-[#7B5CFA]/15 to-[#19C37D]/15 border border-[#7B5CFA]/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-[#7B5CFA] text-white flex items-center justify-center font-bold text-xs">
                  ⚡
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#14112B]">GroSpin Ready</p>
                  <p className="text-[9px] text-[#6B6785]">Spin daily for UPI cash bonus</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-[#7B5CFA] font-mono underline cursor-pointer">
                Spin Now
              </span>
            </div>
          </div>

          {/* Bottom Home Indicator */}
          <div className="py-2 bg-[#FFF8EC] flex justify-center">
            <div className="w-24 h-1 bg-[#14112B]/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
