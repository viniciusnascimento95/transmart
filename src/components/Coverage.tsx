import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import { CITIES_24H, COMPANY_INFO } from '../data/content';

export const Coverage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = CITIES_24H.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="coverage" className="py-20 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#689F38]/15 text-[#58872F] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#689F38]" />
            Atendimento RS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004058] tracking-tight">
            Abrangência Estadual
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Abrangemos todo o RS através de parceiros estratégicos em cada região. Com foco de atendimento na região metropolitana de POA onde fica nossa sede.
          </p>
        </div>

        {/* Interactive Search Box */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Digite o nome da sua cidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#689F38] text-sm text-slate-800 shadow-sm"
            />
          </div>
        </div>

        {/* Cities Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#689F38]" />
              <h3 className="font-bold text-[#004058] text-lg">Cidades atendidas a partir da sede</h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#689F38]/10 text-[#58872F]">
              {filteredCities.length} Municípios
            </span>
          </div>

          {filteredCities.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {filteredCities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#689F38] hover:bg-[#689F38]/5 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#689F38] shrink-0" />
                  <span className="text-xs font-semibold text-slate-800 truncate">{city}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 space-y-2">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">Cidade não listada diretamente na busca rápida?</p>
              <p className="text-xs text-slate-500">
                Atendemos também demais cidades da Região Metropolitana e interior do RS sob consulta prévia!
              </p>
            </div>
          )}
        </div>

        {/* Other RS Cities Notice Box */}
        <div className="bg-gradient-to-r from-[#004058] to-[#072B3C] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Precisa de transporte para o Interior do RS?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Demais cidades da grande Porto Alegre, Serra Gaúcha e interior do Rio Grande do Sul possuem atendimento personalizado sob consulta prévia de itinerário.
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20disponibilidade%20de%20frete%20para%20outra%20cidade%20do%20RS.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#689F38] hover:bg-[#58872F] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <span>Consultar Minha Cidade</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
