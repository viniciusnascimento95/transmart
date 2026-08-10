import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { Logo } from './Logo';

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
          ? 'glass-nav shadow-sm py-3 border-b border-slate-200/80'
          : 'bg-gradient-to-b from-[#072B3C]/95 to-transparent text-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo Component */}
        <a href="#hero" className="focus:outline-none py-1">
          <Logo variant={isScrolled ? 'light' : 'dark'} size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-[#78AB59] py-2 ${
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
            className="text-xs font-bold px-4 py-2.5 rounded-lg border border-[#78AB59] text-[#78AB59] hover:bg-[#78AB59] hover:text-white transition-all cursor-pointer shadow-sm min-h-[44px]"
          >
            Simular Cotação
          </button>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-[#78AB59] text-white hover:bg-[#639247] transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp (51) 98653-3190</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-3 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center ${
            isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Alternar Menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-900 px-6 pt-4 pb-8 border-b border-slate-200 shadow-2xl space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold py-3 text-slate-800 hover:text-[#78AB59] transition-colors border-b border-slate-100 flex items-center justify-between min-h-[48px]"
              >
                <span>{link.label}</span>
                <span className="text-slate-400 text-xs">➔</span>
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center py-3.5 rounded-xl font-bold bg-slate-100 text-slate-900 border border-slate-300 text-sm min-h-[48px]"
            >
              Simular Cotação Rápida
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold bg-[#78AB59] text-white text-sm shadow-md min-h-[48px]"
            >
              <MessageSquare className="w-5 h-5" />
              Falar no WhatsApp (51) 98653-3190
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
