import React from 'react';
import { Warehouse, Truck, MonitorCheck, MapPin, Check } from 'lucide-react';
import { INFRASTRUCTURE_ITEMS, COMPANY_INFO } from '../data/content';

export const Infrastructure: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Warehouse':
        return <Warehouse className="w-8 h-8 text-white" />;
      case 'Truck':
        return <Truck className="w-8 h-8 text-white" />;
      case 'Laptop':
        return <MonitorCheck className="w-8 h-8 text-white" />;
      default:
        return <Warehouse className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="infrastructure" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004058]/10 text-[#004058] text-xs font-bold uppercase tracking-wider">
            Infraestrutura Operacional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004058] tracking-tight">
            Estrutura Preparada para Agilidade e Segurança
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Investimos em localização estratégica, versatilidade de frota e tecnologia de rastreio para dar total previsibilidade às suas entregas.
          </p>
        </div>

        {/* 3 Main Infrastructure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {INFRASTRUCTURE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:border-[#689F38] hover:bg-white hover:shadow-lg transition-all relative space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#004058] flex items-center justify-center shadow-md group-hover:bg-[#689F38] transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-2xl font-black text-[#689F38] tracking-tight">
                    {item.stat}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#004058]">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Check className="w-4 h-4 text-[#689F38]" />
                <span>Garantia de Qualidade TranSmart</span>
              </div>
            </div>
          ))}
        </div>

        {/* CD Highlight Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#689F38]/20 border border-[#689F38]/40 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#80B168]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Localização Estratégica do Nosso Centro de Distribuição</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold shrink-0 transition-colors"
          >
            Ver no Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};
