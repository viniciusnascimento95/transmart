import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AppRoutes } from './routes/AppRoutes';
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

      <div className="flex-grow">
        <AppRoutes onOpenQuoteModal={handleOpenQuoteModal} />
      </div>

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
