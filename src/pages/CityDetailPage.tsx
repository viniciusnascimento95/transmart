import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CITIES_24H, COMPANY_INFO } from '../data/content';
import { SEO } from '../components/SEO';
import { ArrowLeft, Clock, ShieldCheck, Truck, MessageSquare } from 'lucide-react';

interface CityDetailPageProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const CityDetailPage: React.FC<CityDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { citySlug } = useParams<{ citySlug: string }>();

  // Find matching city
  const city = CITIES_24H.find((c) => {
    const slug = c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
    return slug === citySlug;
  });

  if (!city) {
    return <Navigate to="/abrangencia" replace />;
  }

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'DeliveryChargeSpecification',
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': `${city}, RS, Brasil`
    },
    'eligibleTransactionVolume': {
      '@type': 'PriceSpecification',
      'priceCurrency': 'BRL'
    }
  };

  return (
    <>
      <SEO 
        title={`Transporte de Cargas e Frete em ${city} - RS`}
        description={`Serviço de transporte de cargas, frete dedicado e distribuição em ${city}/RS com entrega garantida em até 24 horas pela TranSmart Logística.`}
        canonicalUrl={`https://www.transmart.com.br/abrangencia/${citySlug}`}
        schemaJsonLd={citySchema}
      />

      <div className="pt-24 pb-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/abrangencia" className="inline-flex items-center gap-2 text-sm text-[#80B168] hover:underline mb-6 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Voltar para todas as cidades
          </Link>
          <span className="inline-block px-3 py-1 bg-[#80B168]/20 text-[#80B168] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Atendimento Garantido em 24h
          </span>
          <h1 className="text-3xl md:text-5xl font-black">Transporte de Cargas em {city} - RS</h1>
          <p className="text-slate-300 mt-4 text-xl">
            Soluções ágeis e dedicadas de transporte rodoviário e logística com coleta e entrega em {city}.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Logística de Excelência para {city}</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            A TranSmart Logística possui rotas diárias otimizadas conectando nosso Centro de Distribuição em Porto Alegre à cidade de <strong>{city}</strong>. Atendemos indústrias, comércios e distribuidores com frete dedicado, last mile e paletização sob medida.
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <Clock className="w-8 h-8 text-[#80B168] mx-auto mb-2" />
              <h3 className="font-bold text-slate-900">Prazo de 24 horas</h3>
              <p className="text-xs text-slate-600 mt-1">Coletas e entregas diárias sem atrasos.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <ShieldCheck className="w-8 h-8 text-[#80B168] mx-auto mb-2" />
              <h3 className="font-bold text-slate-900">Carga Segura</h3>
              <p className="text-xs text-slate-600 mt-1">Rastreamento TMS com acesso ao cliente.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <Truck className="w-8 h-8 text-[#80B168] mx-auto mb-2" />
              <h3 className="font-bold text-slate-900">Frota Versátil</h3>
              <p className="text-xs text-slate-600 mt-1">Veículos adequados para cada volume.</p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="flex-1 py-4 px-6 bg-[#80B168] text-white font-bold rounded-xl hover:bg-[#639247] transition-all text-center cursor-pointer shadow-md"
            >
              Cotação Rápida para {city}
            </button>
            <a
              href={`${COMPANY_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20preciso%20de%20um%20frete/transporte%20para%20${encodeURIComponent(city)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 px-6 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all text-center flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
