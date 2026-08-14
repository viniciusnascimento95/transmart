import React from 'react';
import { SEO } from '../components/SEO';
import { COMPANY_INFO } from '../data/content';
import { 
  CheckCircle2, 
  XCircle, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Clock,  
  Gift, 
  Sparkles,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export const ProposalPage: React.FC = () => {
  const whatsappProposalUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Ol%C3%A1%2C%20li%20a%20proposta%20comercial%20do%20site%20e%20gostaria%20de%20confirmar%20o%20aceite%20para%20iniciar!`;

  return (
    <>
      <SEO 
        title="Proposta Comercial - Reativação Digital TranSmart Logística"
        description="Proposta comercial de licenciamento e implantação do novo website da TranSmart Logística na VPS Hostinger."
        canonicalUrl="https://www.transmart.com.br/proposta"
      />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-[#072B3C] via-[#0F3B4C] to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#80B168]/20 border border-[#80B168]/40 text-[#80B168] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Proposta de Apoio Comercial & Parceria
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Plano de Reativação Digital <br className="hidden sm:block" />
            <span className="text-[#80B168]">TranSmart Logística</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Substituição da estrutura antiga por um novo site ultra-rápido em React, com foco 100% em conversão para o seu WhatsApp e economia na sua VPS Hostinger.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              📍 Porto Alegre - RS
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              ⚙️ VPS Hostinger do Cliente
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              ⏱️ Entrega em 5 a 7 dias
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        
        {/* Section 1: Pain vs Solution Matrix */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#80B168] text-xs font-extrabold uppercase tracking-wider">Diagnóstico de Valor</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">O Custo Invisível do Site Parado</h2>
            <p className="text-slate-600 text-sm">Entenda como o novo site resolve as dores atuais da empresa gerando retorno real.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Problem Card */}
            <div className="p-6 bg-rose-50/70 border border-rose-200 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Situação Atual (Site em Manutenção)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Perda diária de clientes:</strong> Quem busca transporte no Google não encontra a empresa ou vê aviso de erro.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Falta de credibilidade:</strong> Grandes empresas checam o site antes de assinar contrato de transporte.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Medo de custos recorrentes:</strong> Receio de pagar mensalidades caras de manutenção.</span>
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="p-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                <span>Com o Novo Site em React / Vite</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Retorno Rápido:</strong> 1 único frete fechado pelo novo site já paga 100% do investimento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Imagem Profissional:</strong> Apresentação completa com CD de 650m², frota e TMS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Custo Zero Futuro:</strong> O site é definitivo e roda na VPS Hostinger que você já possui.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Section 2: VPS Hostinger Economy */}
        <section className="bg-gradient-to-r from-slate-900 via-[#0F3B4C] to-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#80B168] text-white flex items-center justify-center font-black text-xl shrink-0 shadow-lg">
              ⚡
            </div>
            <div>
              <span className="text-[#80B168] text-xs font-extrabold uppercase tracking-wider">Vantagem de Infraestrutura</span>
              <h3 className="text-xl sm:text-2xl font-extrabold">Economia de 95% na sua VPS Hostinger</h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center space-y-1">
              <Zap className="w-6 h-6 text-[#80B168] mx-auto" />
              <h4 className="font-bold text-sm text-white">Carregamento < 1s</h4>
              <p className="text-xs text-slate-300">Abre instantaneamente em celulares 3G/4G.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center space-y-1">
              <ShieldCheck className="w-6 h-6 text-[#80B168] mx-auto" />
              <h4 className="font-bold text-sm text-white">100% Imune a Hackers</h4>
              <p className="text-xs text-slate-300">Sem plugins desatualizados de WordPress.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center space-y-1">
              <Clock className="w-6 h-6 text-[#80B168] mx-auto" />
              <h4 className="font-bold text-sm text-white">Zero Mensalidade Extra</h4>
              <p className="text-xs text-slate-300">Reutiliza o seu servidor Hostinger atual.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Market Comparison Table */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#80B168] text-xs font-extrabold uppercase tracking-wider">Transparência de Mercado</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Comparativo de Investimento</h2>
            <p className="text-slate-600 text-sm">Confira os valores praticados no mercado vs. a nossa condição de parceria.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold">Característica</th>
                  <th className="p-4 font-bold bg-[#80B168] text-white">🤝 Condição Parceria</th>
                  <th className="p-4 font-bold text-slate-300">🟡 Mercado Freelancer</th>
                  <th className="p-4 font-bold text-slate-300">🔴 Agência Tradicional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Tecnologia</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">React 18 + Vite (Estático)</td>
                  <td className="p-4">WordPress (Pesado)</td>
                  <td className="p-4">React / Next.js</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Conversão de WhatsApp</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Simulador + Botões Diretos</td>
                  <td className="p-4">Formulário básico</td>
                  <td className="p-4">Modal customizado</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Páginas de SEO Local</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">15 Cidades da Grande POA</td>
                  <td className="p-4">1 a 4 páginas</td>
                  <td className="p-4">5 a 10 páginas</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Manutenção Futura</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">R$ 0,00 (Sem mensalidade)</td>
                  <td className="p-4">Exige updates constantes</td>
                  <td className="p-4">Contrato de suporte mensal</td>
                </tr>
                <tr className="bg-slate-50 font-bold">
                  <td className="p-4 text-slate-900">INVESTIMENTO TOTAL</td>
                  <td className="p-4 text-emerald-700 bg-emerald-100 text-base">R$ 3.200,00</td>
                  <td className="p-4 text-slate-700">R$ 4.800 a R$ 5.800</td>
                  <td className="p-4 text-slate-700">R$ 9.000 a R$ 18.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Instagram Bonus */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Gift className="w-4 h-4" /> Bônus Exclusivo de Fechamento
              </span>
              <h3 className="text-2xl font-black text-slate-900">Redesign Completo do Perfil do Instagram</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">Incluso sem nenhum custo adicional para acelerar a presença digital da empresa.</p>
            </div>
            <span className="px-4 py-2 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-xl shrink-0">
              VALOR DO BÔNUS: R$ 0,00
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Otimização SEO do Nome</h4>
                  <p className="text-xs text-slate-600">Ajuste para <strong>TranSmart | Logística & Fretes POA</strong> para ser encontrado em buscas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Bio de Alta Conversão</h4>
                  <p className="text-xs text-slate-600">Reestruturação com destaques de autoridade ("CD 650m²") e link direto do WhatsApp.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">5 Capas de Destaques Personalizadas</h4>
                  <p className="text-xs text-slate-600">Ícones exclusivos nas cores do site (Serviços, CD, Frota, Cobertura e Contato).</p>
                </div>
              </div>
            </div>

            {/* Visual Mockup Preview */}
            <div className="bg-slate-900 p-4 rounded-2xl text-center space-y-2 border border-slate-800 shadow-xl">
              <img 
                src="/instagram_mockup_transmart.jpg" 
                alt="Simulação do Perfil do Instagram Redesenhado" 
                className="w-full max-w-[280px] mx-auto rounded-xl shadow-md border border-slate-700"
              />
              <span className="text-[11px] text-slate-400 font-semibold block pt-1">
                📱 Visualização prévia da nova conta do Instagram
              </span>
            </div>
          </div>
        </section>

        {/* Section 5: Investment & Special Conditions */}
        <section className="bg-gradient-to-b from-[#004058] to-[#072B3C] text-white rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#80B168] text-white text-xs font-extrabold uppercase tracking-wider inline-block">
              Oportunidade de Apoio Comercial
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">Condição Especial Facilitada</h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Condição especial desenvolvida para colocar a TranSmart no ar imediatamente sem apertar o caixa da empresa.
            </p>
          </div>

          {/* Pricing Box */}
          <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 space-y-6">
            <div className="space-y-1">
              <span className="text-xs text-slate-300 uppercase tracking-wider font-bold">Investimento Total Facilitado</span>
              <div className="text-4xl sm:text-5xl font-black text-[#80B168]">
                4x de R$ 800,00
              </div>
              <p className="text-xs text-slate-200 font-semibold pt-1">
                ou <strong>R$ 3.200,00 à vista</strong> (Economia de R$ 1.600 a R$ 2.600 referente ao valor de mercado).
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#80B168] shrink-0" />
                <span>Sinal de R$ 800,00 no aceite + 3x de R$ 800,00 (PIX / Cartão)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#80B168] shrink-0" />
                <span>Instalação e backup completo da sua VPS Hostinger inclusos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#80B168] shrink-0" />
                <span>30 dias de garantia integral e suporte pós-lançamento</span>
              </div>
            </div>

            {/* Main Action Button */}
            <a
              href={whatsappProposalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#80B168] hover:bg-[#639247] text-white font-extrabold text-base rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Aceitar Proposta & Iniciar no WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <HelpCircle className="w-4 h-4" />
            <span>Dúvidas ou ajustes nas parcelas? Fale diretamente no WhatsApp.</span>
          </div>
        </section>

      </main>
    </>
  );
};
