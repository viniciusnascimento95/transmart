import React from 'react';
import { Truck, Navigation, Clock, Boxes, Route, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/content';

interface ServicesProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#689F38]" />;
      case 'Navigation':
        return <Navigation className="w-6 h-6 text-[#689F38]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#689F38]" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-[#689F38]" />;
      case 'Route':
        return <Route className="w-6 h-6 text-[#689F38]" />;
      default:
        return <Truck className="w-6 h-6 text-[#689F38]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004058]/10 text-[#004058] text-xs font-bold uppercase tracking-wider">
            Serviços Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004058] tracking-tight">
            Soluções Sob Medida para a Sua Operação
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Atendemos desde demandas urgentes de frete dedicado e last mile até operações rotineiras de distribuição logística.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 hover:border-[#689F38] hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#689F38]/10 flex items-center justify-center group-hover:bg-[#689F38] transition-colors">
                    {React.cloneElement(getServiceIcon(service.iconName), {
                      className: 'w-6 h-6 text-[#689F38] group-hover:text-white transition-colors',
                    })}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#004058]/10 text-[#004058]">
                    {service.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#004058] group-hover:text-[#689F38] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuoteModal(service.id)}
                  className="text-xs font-bold text-[#004058] group-hover:text-[#689F38] inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Solicitar Cotação</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-500 hover:text-[#689F38] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}

          {/* Banner Box for Custom Demands */}
          <div className="bg-gradient-to-br from-[#072B3C] to-[#004058] text-white rounded-2xl p-7 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#689F38] text-white font-bold text-xs">
                Sob Consulta
              </span>
              <h3 className="text-xl font-bold text-white">Necessidade Específica?</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Desenvolvemos projetos logísticos personalizados para o seu negócio, itinerários dedicados e demandas corporativas com tabelas simplificadas.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => onOpenQuoteModal('custom')}
                className="w-full text-center py-3 rounded-xl bg-[#689F38] hover:bg-[#58872F] text-white font-bold text-sm transition-colors cursor-pointer"
              >
                Falar com Especialista
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
