import React from 'react';
import { Coverage } from '../components/Coverage';
import { CITIES_24H } from '../data/content';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

interface CoveragePageProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const CoveragePage: React.FC<CoveragePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <>
      <SEO 
        title="Abrangência de Atendimento em Porto Alegre e Região Metropolitana"
        description="Confira as 15 cidades atendidas em até 24 horas pela TranSmart Logística na Região Metropolitana de Porto Alegre."
        canonicalUrl="https://www.transmart.com.br/abrangencia"
      />
      <div className="pt-24 pb-12 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[#80B168] font-bold text-sm tracking-wider uppercase">Cobertura Logística</span>
          <h1 className="text-3xl md:text-5xl font-black mt-2">Cidades Atendidas em até 24h</h1>
          <p className="text-slate-300 mt-4 text-lg">Entregas rápidas e garantidas na Grande Porto Alegre e polos industriais do RS.</p>
        </div>
      </div>
      <main className="w-full">
        <Coverage onOpenQuoteModal={() => onOpenQuoteModal()} />

        {/* City Deep Links for SEO */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Páginas de Atendimento Local</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {CITIES_24H.map((city) => {
                const slug = city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
                return (
                  <Link
                    key={city}
                    to={`/abrangencia/${slug}`}
                    className="px-4 py-2 bg-slate-100 hover:bg-[#80B168] hover:text-white rounded-lg text-sm font-semibold text-slate-800 transition-all border border-slate-200"
                  >
                    Transporte em {city}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
