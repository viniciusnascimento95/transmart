import React from 'react';
import { Infrastructure } from '../components/Infrastructure';
import { SEO } from '../components/SEO';

export const InfrastructurePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Estrutura Operacional & Centro de Distribuição 650m² em POA"
        description="Conheça nosso Centro de Distribuição estratégico de 650m² em Porto Alegre/RS, nossa frota versátil e tecnologia TMS."
        canonicalUrl="https://www.transmart.com.br/estrutura"
      />
      <div className="pt-24 pb-12 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[#80B168] font-bold text-sm tracking-wider uppercase">Infraestrutura</span>
          <h1 className="text-3xl md:text-5xl font-black mt-2">Estrutura Operacional</h1>
          <p className="text-slate-300 mt-4 text-lg">Centro de Distribuição estratégico de 650m² em Porto Alegre com acesso rápido às principais rodovias.</p>
        </div>
      </div>
      <main className="w-full">
        <Infrastructure />
      </main>
    </>
  );
};
