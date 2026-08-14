import React from 'react';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Sobre Nós - Missão, Valores e História"
        description="Conheça a TranSmart Logística, nossa missão, propósito 'Entender para atender' e nossos valores de Excelência, Confiança e Comprometimento."
        canonicalUrl="https://www.transmart.com.br/sobre"
      />
      <div className="pt-24 pb-12 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[#80B168] font-bold text-sm tracking-wider uppercase">Institucional</span>
          <h1 className="text-3xl md:text-5xl font-black mt-2">Sobre a TranSmart Logística</h1>
          <p className="text-slate-300 mt-4 text-lg">Parceiro estratégico no desenvolvimento econômico através de uma logística inteligente em Porto Alegre/RS.</p>
        </div>
      </div>
      <main className="w-full">
        <About />
        <WhyChooseUs />
      </main>
    </>
  );
};
