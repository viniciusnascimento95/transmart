import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/content';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Abrangência', path: '/abrangencia' },
    { label: 'Estrutura', path: '/estrutura' },
    { label: 'Contato', path: '/contato' },
  ];

  const isCurrentPath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'glass-nav shadow-sm py-3 border-b border-slate-200/80 bg-white/90 backdrop-blur-md'
          : 'bg-gradient-to-b from-[#072B3C]/95 to-transparent text-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo Component */}
        <Link to="/" className="focus:outline-none py-1">
          <Logo variant={isScrolled || location.pathname !== '/' ? 'light' : 'dark'} size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-sm font-semibold transition-colors py-2 ${
                isCurrentPath(link.path)
                  ? 'text-[#80B168] font-bold border-b-2 border-[#80B168]'
                  : isScrolled || location.pathname !== '/'
                  ? 'text-slate-700 hover:text-[#80B168]'
                  : 'text-slate-100 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="text-xs font-bold px-4 py-2.5 rounded-lg border border-[#80B168] text-[#80B168] hover:bg-[#80B168] hover:text-white transition-all cursor-pointer shadow-sm min-h-[44px]"
          >
            Simular Cotação
          </button>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-[#80B168] text-white hover:bg-[#639247] transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp (51) 98653-3190</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-3 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center ${
            isScrolled || location.pathname !== '/' ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
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
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-semibold py-3 flex items-center justify-between border-b border-slate-100 min-h-[48px] ${
                  isCurrentPath(link.path) ? 'text-[#80B168] font-bold' : 'text-slate-800 hover:text-[#80B168]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-slate-400 text-xs">➔</span>
              </Link>
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
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold bg-[#80B168] text-white text-sm shadow-md min-h-[48px]"
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
