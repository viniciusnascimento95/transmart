import React from 'react';
import { Services } from '../components/Services';
import { SEO } from '../components/SEO';
import { SERVICES_DATA } from '../data/content';
import { Link } from 'react-router-dom';

interface ServicesPageProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <>
      <SEO 
        title="Serviços Logísticos - Frete Dedicado, Last Mile, Cross-docking"
        description="Soluções completas de transporte de cargas em Porto Alegre e RS: Frete Dedicado, Last Mile, Cross-docking 24h, Paletização e Distribuição."
        canonicalUrl="https://www.transmart.com.br/servicos"
      />
      <div className="pt-24 pb-12 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[#80B168] font-bold text-sm tracking-wider uppercase">Nossas Soluções</span>
          <h1 className="text-3xl md:text-5xl font-black mt-2">Serviços Prestados</h1>
          <p className="text-slate-300 mt-4 text-lg">Soluções modulares e personalizadas para otimizar a cadeia de suprimentos da sua empresa.</p>
        </div>
      </div>
      <main className="w-full">
        <Services onOpenQuoteModal={(serviceId) => onOpenQuoteModal(serviceId)} />
        
        {/* Deep links to individual service pages for SEO */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Saiba Mais Sobre Cada Serviço</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES_DATA.map((service) => (
                <Link 
                  key={service.id} 
                  to={`/servicos/${service.id}`}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 transition-all hover:-translate-y-1 block"
                >
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-3">
                    {service.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{service.shortDesc}</p>
                  <span className="text-xs font-bold text-[#80B168] hover:underline flex items-center gap-1">
                    Ver detalhes do serviço →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
