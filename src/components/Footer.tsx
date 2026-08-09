import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#072B3C] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#689F38] text-white font-black flex items-center justify-center text-lg">
                TS
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Tran<span className="text-[#80B168]">Smart</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Soluções eficientes e seguras no transporte de cargas e logística inteligente na Região Metropolitana de Porto Alegre e RS.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#80B168] text-xs font-bold border border-white/10">
                "{COMPANY_INFO.lema}"
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#hero" className="hover:text-[#80B168] transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-[#80B168] transition-colors">Sobre Nós & Missão</a></li>
              <li><a href="#services" className="hover:text-[#80B168] transition-colors">Serviços Prestados</a></li>
              <li><a href="#coverage" className="hover:text-[#80B168] transition-colors">Abrangência (24h)</a></li>
              <li><a href="#infrastructure" className="hover:text-[#80B168] transition-colors">Estrutura & CD</a></li>
              <li><a href="#why-us" className="hover:text-[#80B168] transition-colors">Por Que Nós</a></li>
              <li><a href="#contact" className="hover:text-[#80B168] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="md:col-span-4 space-y-3 text-xs text-slate-300">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contatos Diretos</h4>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#80B168]" />
              <span>{COMPANY_INFO.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#80B168]" />
              <span>{COMPANY_INFO.email}</span>
            </p>
            <p className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-[#80B168]" />
              <span>{COMPANY_INFO.instagram}</span>
            </p>
            <p className="flex items-start gap-2 pt-1 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#80B168] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} TranSmart Logística. Todos os direitos reservados.</p>
          <p className="text-slate-500">Desenvolvido para publicação em GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
};
