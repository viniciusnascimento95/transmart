# TranSmart Logística - Hostsite Comercial

Hostsite comercial institucional e de alta conversão da empresa **TranSmart Logística** (Porto Alegre/RS), desenvolvido com **Vite**, **React**, **TypeScript**, **Tailwind CSS v4** e **GitHub Pages**.

---

## 📌 Funcionalidades Principais

- 📱 **100% Responsivo e Ultra-rápido**: Design moderno focado em conversão para dispositivos móveis e desktop.
- 💬 **Calls-to-Action para WhatsApp e E-mail**:
  - Botão principal no Hero, botão flutuante e botões de serviço direcionando diretamente para o WhatsApp `(51) 98653-3190` com mensagem pré-formatada.
  - Links diretos `mailto:contato@transmart.com.br` e formulário de mensagem.
  - Simulador interativo de cotação rápida em modal (`QuoteFormModal.tsx`).
- 🚚 **Seções Baseadas no Material Institucional**:
  - **Hero**: Destaques, badges institucionais e o lema *"Entender para atender"*.
  - **Sobre Nós**: Missão, Propósito e os 3 Valores (Excelência, Confiança e Comprometimento).
  - **Serviços Prestados**: Frete Dedicado, Last Mile, Cross-docking 24h, Paletização e Distribuição.
  - **Abrangência (Busca Interativa)**: 15 cidades com atendimento garantido em até 24h na Região Metropolitana de Porto Alegre.
  - **Estrutura Operacional**: Centro de Distribuição de 650m² em POA, Frota Versátil e Sistema TMS com acesso ao cliente.
  - **Diferenciais**: Empresa enxuta horizontal, métricas de cobrança simplificadas e atendimento personalizado.
- 🚀 **Deploy Automático no GitHub Pages**: Configurado via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos:
```bash
# 1. Instalar dependências
npm install

# 2. Executar o servidor de desenvolvimento
npm run dev

# 3. Testar a compilação de produção
npm run build
```

---

## 🚀 Como Publicar no GitHub Pages

Este repositório já possui um workflow configurado do GitHub Actions em `.github/workflows/deploy.yml`.

### Para ativar o deploy automático:
1. No seu repositório do GitHub, vá em **Settings** > **Pages**.
2. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
3. Faça o push do código para a branch `main`:
   ```bash
   git add .
   git commit -m "feat: site comercial TranSmart com Vite e GitHub Pages"
   git push origin main
   ```
4. O GitHub Actions irá compilar o projeto e publicar o site automaticamente no endereço: `https://<seu-usuario>.github.io/transmart/`

---

## 📄 Especificação e Planejamento Spec-Driven Development
- Especificação Completa (Spec): [`docs/spec.md`](docs/spec.md)
- Apresentação Comercial Fonte: [`docs/Apresentação comercial Transmart.pdf`](docs/Apresentação%20comercial%20Transmart.pdf)
