import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Abrangência', href: '#coverage' },
    { label: 'Estrutura', href: '#infrastructure' },
    { label: 'Por Que Nós', href: '#why-us' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md py-3 border-b border-slate-200/80'
          : 'bg-gradient-to-b from-[#072B3C]/90 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-mx-auto px-4 sm:px-6 lg:px-8 mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-[#004058] border-2 border-[#689F38] flex items-center justify-center font-extrabold text-[#689F38] text-lg shadow-sm group-hover:scale-105 transition-transform">
            TS
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-extrabold tracking-tight leading-none ${isScrolled ? 'text-[#004058]' : 'text-white'}`}>
              Tran<span className="text-[#689F38]">Smart</span>
            </span>
            <span className={`text-[10px] uppercase font-semibold tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
              Logística Inteligente
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#689F38] ${
                isScrolled ? 'text-slate-700' : 'text-slate-100 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#689F38] text-[#689F38] hover:bg-[#689F38] hover:text-white transition-all cursor-pointer shadow-sm"
          >
            Simular Cotação
          </button>
          
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-[#689F38] text-white hover:bg-[#58872F] transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp (51) 98653-3190</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Alternar Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#072B3C] text-white px-6 pt-4 pb-6 border-b border-slate-700 shadow-xl space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium py-1.5 text-slate-200 hover:text-[#689F38] transition-colors border-b border-slate-800"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center py-2.5 rounded-lg font-semibold bg-white/10 text-white border border-[#689F38] text-sm"
            >
              Simular Cotação Rápida
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold bg-[#689F38] text-white text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
