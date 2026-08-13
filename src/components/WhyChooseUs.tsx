import React from 'react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/content';
import { CheckCircle, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#689F38]/15 text-[#58872F] text-xs font-bold uppercase tracking-wider">
            Diferenciais de Mercado
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004058] tracking-tight">
            Por Que Contratar a TranSmart?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            3 razões fundamentais pelas quais grandes empresas confiam suas cargas e operações logísticas em nossa equipe.
          </p>
        </div>

        {/* 3 Columns Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all relative flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Big Number Pill */}
                <div className="w-14 h-14 rounded-2xl bg-[#004058]/10 text-[#004058] font-black text-2xl flex items-center justify-center group-hover:bg-[#689F38] group-hover:text-white transition-colors shadow-inner">
                  {item.number}
                </div>

                <h3 className="text-xl font-bold text-[#004058]">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#689F38]">
                <CheckCircle className="w-4 h-4" />
                <span>Processo 100% Transparente</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lema & CTA Banner */}
        <div className="bg-gradient-to-r from-[#004058] via-[#072B3C] to-[#004058] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Soluções Logísticas Customizadas para a sua Empresa
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Descubra como nossa tabela simplificada e comunicação direta podem otimizar os custos e prazos de entrega do seu negócio hoje mesmo.
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 rounded-xl bg-[#689F38] hover:bg-[#58872F] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-3 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Falar com o Comercial</span>
          </a>
        </div>

      </div>
    </section>
  );
};
