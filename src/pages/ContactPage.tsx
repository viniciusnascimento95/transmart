import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { SEO } from '../components/SEO';

interface ContactPageProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <>
      <SEO 
        title="Fale Conosco - Endereço, WhatsApp e Cotação"
        description="Entre em contato com a TranSmart Logística em Porto Alegre. Atendimento por WhatsApp (51) 98653-3190, e-mail e formulário de cotação."
        canonicalUrl="https://www.transmart.com.br/contato"
      />
      <div className="pt-24 pb-12 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[#80B168] font-bold text-sm tracking-wider uppercase">Canais de Atendimento</span>
          <h1 className="text-3xl md:text-5xl font-black mt-2">Entre em Contato</h1>
          <p className="text-slate-300 mt-4 text-lg">Estamos prontos para entender sua necessidade e propor a melhor solução de transporte.</p>
        </div>
      </div>
      <main className="w-full">
        <ContactSection onOpenQuoteModal={() => onOpenQuoteModal()} />
      </main>
    </>
  );
};
