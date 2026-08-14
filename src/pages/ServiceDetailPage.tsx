import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA, COMPANY_INFO } from '../data/content';
import { SEO } from '../components/SEO';
import { MessageSquare, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ServiceDetailPageProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': service.title,
    'provider': {
      '@type': 'LocalBusiness',
      'name': COMPANY_INFO.name,
      'telephone': COMPANY_INFO.phone,
      'address': COMPANY_INFO.address
    },
    'areaServed': 'Porto Alegre e Região Metropolitana - RS',
    'description': service.fullDesc
  };

  return (
    <>
      <SEO 
        title={`${service.title} em Porto Alegre e RS`}
        description={`${service.fullDesc} Soluções em transporte de carga e logística especializada.`}
        canonicalUrl={`https://www.transmart.com.br/servicos/${service.id}`}
        schemaJsonLd={serviceSchema}
      />

      <div className="pt-24 pb-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-sm text-[#80B168] hover:underline mb-6 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Voltar para todos os serviços
          </Link>
          <span className="inline-block px-3 py-1 bg-[#80B168]/20 text-[#80B168] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            {service.highlight}
          </span>
          <h1 className="text-3xl md:text-5xl font-black">{service.title}</h1>
          <p className="text-slate-300 mt-4 text-xl">{service.shortDesc}</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Descrição Detalhada do Serviço</h2>
          <p className="text-slate-700 text-lg leading-relaxed">{service.fullDesc}</p>

          <div className="pt-6 border-t border-slate-100 grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900">Atendimento em até 24h</h4>
                <p className="text-xs text-slate-600">Para Porto Alegre e toda a Região Metropolitana.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900">Acesso ao Sistema TMS</h4>
                <p className="text-xs text-slate-600">Acompanhamento e status em tempo real.</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onOpenQuoteModal(service.id)}
              className="flex-1 py-4 px-6 bg-[#80B168] text-white font-bold rounded-xl hover:bg-[#639247] transition-all text-center cursor-pointer shadow-md"
            >
              Simular Cotação para {service.title}
            </button>
            <a
              href={`${COMPANY_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 px-6 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all text-center flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-5 h-5" />
              Falar com Atendente
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
