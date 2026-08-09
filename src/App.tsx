import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Coverage } from './components/Coverage';
import { Infrastructure } from './components/Infrastructure';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { QuoteFormModal } from './components/QuoteFormModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <About />
        <Services onOpenQuoteModal={(serviceId) => handleOpenQuoteModal(serviceId)} />
        <Coverage />
        <Infrastructure />
        <WhyChooseUs />
        <ContactSection />
      </main>

      <Footer />

      <FloatingWhatsApp />

      <QuoteFormModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}

export default App;
