import React from 'react';
import { MessageSquare, Calculator, ShieldCheck, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { Logo } from './Logo';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 gradient-hero-bg text-white overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[#78AB59]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-[#3FA3C4]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#A2D385] text-xs font-bold tracking-wide uppercase shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-[#78AB59] animate-ping"></span>
              Logística Inteligente em Porto Alegre & RS
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Soluções <span className="text-[#78AB59]">Eficientes & Seguras</span> no Transporte de Cargas
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Conectando pessoas e negócios com agilidade, transparência e alta pontualidade. Operação focada no lema <strong className="text-white italic">"Entender para atender"</strong>.
            </p>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                <Clock className="w-5 h-5 text-[#78AB59] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Atendimento 24h</p>
                  <p className="text-[11px] text-slate-300">Região Metropolitana</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-[#3FA3C4] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white">CD 650m² em POA</p>
                  <p className="text-[11px] text-slate-300">Zona Estratégica</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-[#C0A045] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white">TMS Dedicado</p>
                  <p className="text-[11px] text-slate-300">Rastreio em Tempo Real</p>
                </div>
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#78AB59] hover:bg-[#639247] text-white font-bold text-base shadow-lg shadow-[#78AB59]/30 hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer group min-h-[50px]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Solicitar Cotação no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/30 backdrop-blur-sm transition-all cursor-pointer min-h-[50px]"
              >
                <Calculator className="w-5 h-5 text-[#3FA3C4]" />
                <span>Simular Frete Rápido</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Official Card Display */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900 space-y-6 relative z-10 border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <Logo variant="light" size="md" />
                <span className="px-3 py-1 rounded-full bg-[#78AB59]/15 text-[#5C8842] text-xs font-bold border border-[#78AB59]/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#78AB59] animate-pulse"></span>
                  Operação Ativa
                </span>
              </div>

              {/* Quick Highlights list inside hero card */}
              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#78AB59] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Frete Dedicado & Last Mile</p>
                    <p className="text-xs text-slate-600">Coletas diretas sem paradas ou consolidação desnecessária.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3FA3C4] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Cross-docking em 24h</p>
                    <p className="text-xs text-slate-600">Cronograma diário automático de coleta e entrega acelerada.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C0A045] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Cobrança Simplificada</p>
                    <p className="text-xs text-slate-600">Métricas transparentes ajustadas ao lema "Entender para atender".</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>📍 Av. Plínio Kroeff, 1100 - POA</span>
                <span className="font-extrabold text-[#004058]">(51) 98653-3190</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
