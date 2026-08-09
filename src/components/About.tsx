import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Target, Compass } from 'lucide-react';
import { COMPANY_INFO, VALUES_DATA } from '../data/content';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-7 h-7 text-[#689F38]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#689F38]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-[#689F38]" />;
      default:
        return <Award className="w-7 h-7 text-[#689F38]" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#689F38]/10 text-[#689F38] text-xs font-bold uppercase tracking-wider">
            Sobre a TranSmart
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004058] tracking-tight">
            Parceiros Estratégicos na sua Cadeia Logística
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Muito além do transporte: oferecemos uma visão inteligente e integrada para conectar sua empresa aos seus clientes com total segurança e agilidade.
          </p>
        </div>

        {/* Mission & Purpose Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-[#004058]/10 flex items-center justify-center mb-6 group-hover:bg-[#004058] transition-colors">
              <Target className="w-7 h-7 text-[#004058] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[#004058] mb-4">Nossa Missão</h3>
            <p className="text-slate-600 leading-relaxed text-base">
              {COMPANY_INFO.mission}
            </p>
          </div>

          {/* Purpose Card */}
          <div className="bg-[#004058] text-white rounded-2xl p-8 shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 font-black text-8xl select-none text-white">
              TS
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[#689F38]/20 flex items-center justify-center mb-6 border border-[#689F38]/40">
              <Compass className="w-7 h-7 text-[#80B168]" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">Nosso Propósito</h3>
              <span className="px-3 py-1 rounded-full bg-[#689F38] text-white font-bold text-xs">
                "{COMPANY_INFO.lema}"
              </span>
            </div>
            <p className="text-slate-200 leading-relaxed text-base">
              {COMPANY_INFO.purpose}
            </p>
          </div>

        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center text-[#004058] mb-8">
            Nossos Valores Fundamentais
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES_DATA.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-[#689F38]/50 hover:shadow-md transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#689F38]/10 flex items-center justify-center">
                  {getIcon(val.iconName)}
                </div>
                <h4 className="text-xl font-bold text-[#004058]">{val.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
