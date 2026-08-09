# Especificação Técnica (Spec) - Website Institucional TranSmart

## 1. Visão Geral do Projeto
O **TranSmart Hostsite** é uma página web institucional de alta conversão, moderna e responsiva, desenvolvida para apresentar os serviços de transporte de cargas e logística inteligente da TranSmart (com sede em Porto Alegre/RS). O site é baseado inteiramente no material institucional e apresentação comercial contidos na empresa (`Apresentação comercial Transmart.pdf`).

O foco principal da página é a **geração de leads e contato rápido** via WhatsApp e Email, proporcionando excelente experiência visual, alta performance e compatibilidade total com **GitHub Pages**.

---

## 2. Requisitos de Negócio e Funcionais

### 2.1 Objetivos de Conversão (Call-to-Action)
- **Primary CTA**: "Falar no WhatsApp" / "Solicitar Cotação no WhatsApp"
  - Link direto: `https://wa.me/5551986533190?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transporte.`
- **Secondary CTA**: "Fale Conosco por E-mail" / Formulário de Simulação de Cotação
  - Link direto: `mailto:contato@transmart.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20Cota%C3%A7%C3%A3o%20-%20TranSmart`
- **Floating CTA**: Botão flutuante animado de WhatsApp no canto inferior direito para acesso rápido em dispositivos móveis e desktop.

### 2.2 Estrutura de Seções (Arquitetura de Informação)
1. **Navbar (Cabeçalho de Navegação)**:
   - Logo oficial TranSmart + Ícone TS.
   - Links de navegação suave (Scroll suave): Início, Sobre Nós, Serviços, Abrangência, Estrutura, Por Que Nós, Contato.
   - Botão de Ação Direta no cabeçalho: "WhatsApp (51) 98653-3190".

2. **Hero Section (Apresentação Principal)**:
   - Título impactante: *"Soluções Eficientes e Seguras no Transporte de Cargas"*.
   - Subtítulo: *"Conectando pessoas e negócios através de uma logística inteligente em Porto Alegre e Região Metropolitana."*
   - Badges de destaque: "Atendimento em 24h", "Frota Própria & Agregados", "CD com 650m² em POA".
   - Botões duplos de CTA (WhatsApp e Formulário de Cotação).

3. **Sobre Nós (Missão, Visão e Propósito)**:
   - **Missão**: Proporcionar soluções eficientes no transporte de cargas com agilidade e confiança.
   - **Propósito**: *"Entender para atender"* — Parceiros estratégicos no desenvolvimento sustentável e econômico.
   - **Valores**: Cards interativos de Excelência, Confiança e Comprometimento.

4. **Serviços Prestados**:
   - Cards com ícones e descritivo detalhado:
     - **Frete Dedicado**: Coleta/entrega exclusiva sem consolidação ou parada intermediária.
     - **Last Mile**: Entrega final a partir do CD direto ao cliente final.
     - **Cross-docking**: Coleta diária automática com prazo de entrega em até 24h.
     - **Paletização**: Padronização de pallets conforme solicitação do cliente.
     - **Distribuição**: Recebimento consolidado, separação, etiquetagem e roteirização.

5. **Abrangência Geográfica (Cidades Cobertas)**:
   - Destaque **Entregas em até 24h**:
     - Porto Alegre, Alvorada, Cachoeirinha, Campo Bom, Canoas, Esteio, Estância Velha, Gravataí, Nova Santa Rita, Novo Hamburgo, Portão, São Leopoldo, Sapiranga, Sapucaia do Sul, Viamão.
   - Campo de busca interativo de cidades cobertas.
   - Aviso para demais cidades da Região Metropolitana e interior do RS sob consulta.

6. **Estrutura Operacional & Diferenciais**:
   - CD de 650m² na principal região logística de Porto Alegre.
   - Frota própria e agregados adaptados a cada necessidade.
   - Equipe treinada + Sistema TMS com acesso ao cliente para rastreio.

7. **Por Que Contratar a TranSmart?**:
   - Processos definidos e estrutura horizontal com comunicação ágil.
   - Cobrança simplificada com métricas claras e transparentes.
   - Personalização total ("Entender para atender").

8. **Formulário Interativo de Cotação Rápida**:
   - Simulador/Solicitador simples com campos: Nome, Empresa, Origem, Destino, Tipo de Carga e Contato.
   - Envio imediato pré-formatado para o WhatsApp da TranSmart ou acionamento de mailto.

9. **Rodapé & Informações de Contato**:
   - Endereço físico: Av. Plínio Kroeff, 1100 - Porto Alegre - RS, 91150-170.
   - Telefone/WhatsApp: (51) 98653-3190.
   - E-mail: contato@transmart.com.br.
   - Instagram: @transmart_log.
   - Mapa / Link de localização.

---

## 3. Especificação Técnica & Stack de Tecnologias

### 3.1 Stack
- **Framework**: React 18+ com TypeScript
- **Bundler & Dev Server**: Vite
- **Estilização**: CSS Moderno / Tailwind CSS v4 com variáveis customizadas para tokens de design.
- **Ícones**: Lucide React Icons
- **Deploy Target**: GitHub Pages via GitHub Actions workflow (`.github/workflows/deploy.yml`)

### 3.2 Design System (Tokens)
- **Cores Principais**:
  - Primary Dark Teal: `#0F3B4C` / `#004058` (Profissionalismo e segurança)
  - Accent Green: `#689F38` / `#80B168` (Logística verde, agilidade e destaque)
  - Neutral Light: `#F4F7F6` / `#FFFFFF` (Fundo limpo e legível)
  - Text Primary: `#1E293B`
  - Text Muted: `#64748B`
- **Tipografia**: Fontes modernas (`Inter`, `Plus Jakarta Sans` ou `Outfit` via Google Fonts).
- **Animações e Micro-interações**: Transitions suaves em hovers, modal backdrop, fade-ins ao rolar.

---

## 4. Estrutura de Arquivos Proposta

```
transmart/
├── .github/
│   └── workflows/
│       └── deploy.yml            # CI/CD para GitHub Pages
├── docs/
│   ├── Apresentação comercial Transmart.pdf
│   └── spec.md                   # Esta especificação
├── public/
│   ├── favicon.svg
│   └── logo-transmart.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Coverage.tsx
│   │   ├── Infrastructure.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── QuoteFormModal.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── content.ts            # Textos e dados institucionais centralizados
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 5. Plano de Implantação no GitHub Pages
1. Configuração do `vite.config.ts` com `base: './'` para evitar links quebrados em subcaminhos de repositórios do GitHub Pages.
2. Script `.github/workflows/deploy.yml` configurado com `actions/deploy-pages` automático no push para `main`.
