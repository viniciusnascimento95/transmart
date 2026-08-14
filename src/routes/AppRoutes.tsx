import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ServicesPage } from '../pages/ServicesPage';
import { ServiceDetailPage } from '../pages/ServiceDetailPage';
import { CoveragePage } from '../pages/CoveragePage';
import { CityDetailPage } from '../pages/CityDetailPage';
import { InfrastructurePage } from '../pages/InfrastructurePage';
import { ContactPage } from '../pages/ContactPage';
import { ProposalPage } from '../pages/ProposalPage';

interface AppRoutesProps {
  onOpenQuoteModal: () => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({ onOpenQuoteModal }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage onOpenQuoteModal={onOpenQuoteModal} />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/servicos" element={<ServicesPage onOpenQuoteModal={onOpenQuoteModal} />} />
      <Route path="/servicos/:serviceId" element={<ServiceDetailPage onOpenQuoteModal={onOpenQuoteModal} />} />
      <Route path="/abrangencia" element={<CoveragePage onOpenQuoteModal={onOpenQuoteModal} />} />
      <Route path="/abrangencia/:citySlug" element={<CityDetailPage onOpenQuoteModal={onOpenQuoteModal} />} />
      <Route path="/estrutura" element={<InfrastructurePage />} />
      <Route path="/contato" element={<ContactPage onOpenQuoteModal={onOpenQuoteModal} />} />
      <Route path="/proposta" element={<ProposalPage />} />
      <Route path="*" element={<HomePage onOpenQuoteModal={onOpenQuoteModal} />} />
    </Routes>
  );
};
