import React from 'react';
import { MapPin, CheckCircle2, IndianRupee, Quote } from 'lucide-react';
import { Story } from '../types';

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <article className="relative flex flex-col justify-between p-6 bg-white rounded-3xl border border-[#E9E2D3] shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200">
      {/* Top row: Avatar, Name, City */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={story.avatar}
                alt={`${story.name}, teen creator on Funngro`}
                width={52}
                height={52}
                loading="lazy"
                className="w-13 h-13 rounded-2xl object-cover border-2 border-[#19C37D]/30 shadow-sm"
                onError={(e) => {
                  // Fallback avatar if local path encounters any issue
                  (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/micah/svg?seed=${story.name}&backgroundColor=ffd5dc`;
                }}
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#19C37D] rounded-full border-2 border-white flex items-center justify-center">
                <CheckCircle2 className="w-2.5 h-2.5 text-white" />
              </span>
            </div>
            <div>
              <h4 className="font-bold text-[#14112B] text-base leading-tight">
                {story.name}
              </h4>
              <p className="text-xs text-[#6B6785]">
                Age {story.age} · {story.role}
              </p>
            </div>
          </div>

          {/* City chip */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF8EC] border border-[#E9E2D3] text-xs font-mono text-[#14112B]">
            <MapPin className="w-3 h-3 text-[#FF6B6B]" />
            {story.city}
          </span>
        </div>

        {/* Quote */}
        <div className="relative mb-5">
          <Quote className="w-6 h-6 text-[#7B5CFA]/20 absolute -top-2 -left-1" />
          <p className="text-sm text-[#14112B] leading-relaxed relative z-10 pl-3 italic">
            "{story.quote}"
          </p>
        </div>
      </div>

      {/* Bottom Earnings & Meta Strip */}
      <div className="pt-4 border-t border-[#E9E2D3]/70 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#6B6785]">
            Total Earned
          </span>
          <div className="flex items-center gap-1 text-lg font-bold font-mono text-[#19C37D]">
            <IndianRupee className="w-4 h-4" />
            <span className="tabular-nums">{story.earned.replace('₹', '')}</span>
          </div>
        </div>

        <div className="text-right">
          <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#7B5CFA]/10 text-[#7B5CFA] font-mono font-semibold text-[11px]">
            {story.badge}
          </span>
          <p className="text-[10px] text-[#6B6785] mt-0.5">
            {story.tasksCompleted} tasks completed
          </p>
        </div>
      </div>

      {/* Explicit Placeholder marker badge requested in prompt */}
      <div className="mt-3 pt-2 text-center border-t border-dashed border-[#E9E2D3]">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B6785]/80 bg-[#FFF8EC] px-2 py-0.5 rounded">
          Placeholder data · Verified testimonial format
        </span>
      </div>
    </article>
  );
};
