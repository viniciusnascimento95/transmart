import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Coverage } from '../components/Coverage';
import { Infrastructure } from '../components/Infrastructure';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ContactSection } from '../components/ContactSection';
import { SEO } from '../components/SEO';

interface HomePageProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <>
      <SEO 
        title="Transporte de Cargas & Logística em Porto Alegre"
        description="Soluções eficientes e seguras no transporte de cargas em Porto Alegre e Região Metropolitana. Frete Dedicado, Last Mile, Cross-docking 24h e Distribuição."
      />
      <main className="w-full">
        <Hero onOpenQuoteModal={() => onOpenQuoteModal()} />
        <About />
        <Services onOpenQuoteModal={(serviceId) => onOpenQuoteModal(serviceId)} />
        <Coverage onOpenQuoteModal={() => onOpenQuoteModal()} />
        <Infrastructure />
        <WhyChooseUs />
        <ContactSection onOpenQuoteModal={() => onOpenQuoteModal()} />
      </main>
    </>
  );
};
