import React from 'react';
import { Mail, MapPin, Instagram, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ContactSectionProps {
  onOpenQuoteModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004058]/10 text-[#004058] text-xs font-bold uppercase tracking-wider">
            Canais de Atendimento
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004058] tracking-tight">
            Fale Conosco & Solicite seu Orçamento
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Estamos prontos para atender a sua empresa com respostas rápidas e atendimento direto por especialistas em logística.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#689F38]/10 border-2 border-[#689F38]/30 hover:border-[#689F38] hover:bg-[#689F38]/20 transition-all flex items-start gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#689F38] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#58872F]">Atendimento WhatsApp</span>
                <h3 className="text-xl font-extrabold text-[#004058]">{COMPANY_INFO.phone}</h3>
                <p className="text-xs text-slate-600">Clique para iniciar uma conversa direta no WhatsApp</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#004058] hover:bg-slate-100 transition-all flex items-start gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#004058] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">E-mail Comercial</span>
                <h3 className="text-lg font-bold text-[#004058]">{COMPANY_INFO.email}</h3>
                <p className="text-xs text-slate-600">Envie suas especificações ou editais de frete</p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-pink-500 hover:bg-slate-100 transition-all flex items-start gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Siga no Instagram</span>
                <h3 className="text-lg font-bold text-[#004058]">{COMPANY_INFO.instagram}</h3>
                <p className="text-xs text-slate-600">Acompanhe nosso dia a dia operacional e frota</p>
              </div>
            </a>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-[#80B168] text-xs font-bold uppercase">
                <MapPin className="w-4 h-4" />
                <span>Centro de Distribuição & Matriz</span>
              </div>
              <p className="text-sm text-slate-200 font-medium leading-relaxed">
                {COMPANY_INFO.address}
              </p>
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs text-[#80B168] underline hover:text-white transition-colors"
              >
                Abrir Rota no Google Maps →
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-[#004058]">Envie uma Mensagem Direta</h3>
              <p className="text-xs text-slate-500 mt-1">Preencha os dados e entraremos em contato rapidamente.</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Obrigado! Sua mensagem foi enviada. Redirecionando para o WhatsApp...');
                window.open(COMPANY_INFO.whatsappUrl, '_blank');
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#689F38] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(51) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#689F38] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">E-mail Corporativo *</label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@empresa.com.br"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#689F38] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Sua Mensagem / Necessidade *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Conte um pouco sobre suas demandas de frete ou dúvidas..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#689F38] text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#004058] hover:bg-[#072B3C] text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#80B168]" />
                <span>Enviar Mensagem para TranSmart</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
