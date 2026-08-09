import React, { useState } from 'react';
import { X, MessageSquare, Mail, Calculator } from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/content';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuoteFormModal: React.FC<QuoteFormModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [serviceId, setServiceId] = useState(initialServiceId || 'frete-dedicado');
  const [origin, setOrigin] = useState('Porto Alegre');
  const [destination, setDestination] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedService = SERVICES_DATA.find((s) => s.id === serviceId)?.title || 'Serviço Personalizado';
    
    const message = `*SOLICITAÇÃO DE COTAÇÃO - WEBSITE TRANSMART*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `🏢 *Empresa:* ${company || 'Não informada'}\n` +
      `🚚 *Serviço:* ${selectedService}\n` +
      `📍 *Origem:* ${origin}\n` +
      `🎯 *Destino:* ${destination || 'A combinar'}\n` +
      `📝 *Observações/Carga:* ${notes || 'Sem observações'}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleSubmitMail = () => {
    const selectedService = SERVICES_DATA.find((s) => s.id === serviceId)?.title || 'Serviço Personalizado';
    
    const subject = `Solicitação de Cotação: ${selectedService} - ${company || name}`;
    const body = `Nome: ${name}\nEmpresa: ${company}\nServiço: ${selectedService}\nOrigem: ${origin}\nDestino: ${destination}\nObservações: ${notes}`;

    const mailUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailUrl;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#689F38]/15 flex items-center justify-center text-[#58872F]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#004058]">Simular Cotação Rápida</h3>
              <p className="text-xs text-slate-500">Receba um orçamento sob medida da TranSmart</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmitWhatsApp} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Seu Nome *</label>
            <input
              type="text"
              required
              placeholder="Ex: Carlos Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#689F38] text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Empresa</label>
              <input
                type="text"
                placeholder="Nome da sua empresa"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#689F38] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Serviço Desejado</label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#689F38] text-sm bg-white"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
                <option value="custom">Outro / Projeto Especial</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Cidade de Origem *</label>
              <input
                type="text"
                required
                placeholder="Ex: Porto Alegre"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#689F38] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Cidade de Destino *</label>
              <input
                type="text"
                required
                placeholder="Ex: Canoas, Novo Hamburgo..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#689F38] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Detalhes da Carga / Frequência</label>
            <textarea
              rows={2}
              placeholder="Descreva o tipo de produto, peso aproximado ou observações..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#689F38] text-sm"
            ></textarea>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#689F38] hover:bg-[#58872F] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enviar via WhatsApp da TranSmart</span>
            </button>

            <button
              type="button"
              onClick={handleSubmitMail}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Enviar Cotação por E-mail</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
