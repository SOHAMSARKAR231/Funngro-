import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  items: FAQItem[];
  theme?: 'light' | 'dark';
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, theme = 'light' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-200 border ${
              theme === 'dark'
                ? isOpen
                  ? 'bg-white/10 border-[#19C37D]/60'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
                : isOpen
                ? 'bg-white border-[#19C37D] shadow-soft'
                : 'bg-white/70 border-[#E9E2D3] hover:border-[#14112B]/30'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full py-4.5 px-6 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C37D] rounded-2xl"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span
                className={`font-semibold text-base sm:text-lg ${
                  theme === 'dark' ? 'text-white' : 'text-[#14112B]'
                }`}
              >
                {item.question}
              </span>
              <div
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-[#19C37D] text-[#14112B]' : theme === 'dark' ? 'bg-white/10 text-white' : 'bg-[#FFF8EC] text-[#14112B]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="px-6 pb-5 pt-1 animate-in fade-in duration-150"
              >
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    theme === 'dark' ? 'text-[#A5A1BE]' : 'text-[#6B6785]'
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
