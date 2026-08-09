import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={COMPANY_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group focus:outline-none"
      aria-label="Falar no WhatsApp"
    >
      {/* Tooltip Badge */}
      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl border border-slate-800 animate-in fade-in duration-150">
        💬 Falar no WhatsApp agora
        <div className="absolute top-full right-4 border-4 border-transparent border-t-slate-900"></div>
      </div>

      {/* Pulsing Outer Glow */}
      <div className="w-14 h-14 rounded-full bg-[#689F38] text-white flex items-center justify-center shadow-2xl animate-pulse-glow hover:scale-110 transition-transform cursor-pointer border-2 border-white">
        <MessageSquare className="w-7 h-7" />
      </div>
    </a>
  );
};
