# Especificação Técnica de Arquitetura - Vite Multi-Páginas & SEO de Alta Performance

## 1. Visão Geral do Projeto

Esta especificação técnica detalha a evolução do website da **TranSmart Logística** de uma landing page estática simples (SPA monolítica) para uma **Arquitetura Vite Otimizada com Roteamento Multi-Páginas, Pré-renderização SSG (Static Site Generation) e SEO de Alta Performance**.

### 🎯 Objetivos Principais
- **Garantia de Indexação Instantânea no Google**: Geração de arquivos HTML estáticos individuais para cada página durante a compilação (`build`), eliminando a latência de execução de JavaScript pelos robôs do Google (Googlebot).
- **Cards Perfeitos no WhatsApp e Redes Sociais**: Meta-tags Open Graph (`og:title`, `og:image`, `og:description`) renderizadas diretamente no HTML estático de cada rota.
- **Ampliação do Tráfego Orgânico (SEO de Cauda Longa)**: Criação de páginas de destino dedicadas para cada serviço (ex: `/servicos/frete-dedicado`) e cada cidade atendida no RS (ex: `/cobertura/porto-alegre`).
- **Compatibilidade Total com VPS/Nginx**: Deploy 100% estático de alta velocidade sem dependência de servidores Node.js em background.

---

## 2. Mapa de Rotas e Arquitetura de Conteúdo

O novo sistema será estruturado com as seguintes rotas dinâmicas e estáticas:

```
/
├── /                                  # Página Inicial (Home / Hotsite principal)
├── /sobre                             # Página Quem Somos, Missão, Visão e Valores
├── /servicos                          # Visão geral de todos os serviços
│   ├── /servicos/frete-dedicado       # Página dedicada: Frete Dedicado
│   ├── /servicos/last-mile            # Página dedicada: Entregas Last Mile
│   ├── /servicos/cross-docking        # Página dedicada: Cross-docking 24h
│   ├── /servicos/paletizacao          # Página dedicada: Paletização de Cargas
│   └── /servicos/distribuicao         # Página dedicada: Distribuição Urbana
├── /abrangencia                       # Cobertura completa na Região Metropolitana
│   ├── /abrangencia/porto-alegre      # Landing page SEO: Logística em Porto Alegre
│   ├── /abrangencia/canoas            # Landing page SEO: Logística em Canoas
│   └── /abrangencia/novo-hamburgo     # Landing page SEO: Logística em Novo Hamburgo
├── /estrutura                         # Centro de Distribuição 650m² e Frota
├── /cotacao                           # Formulário dedicado de simulação de cotação
└── /contato                           # Página de contato, mapa e telefones
```

---

## 3. Módulo de SEO Dinâmico & Metadados (`react-helmet-async`)

Será implementado um componente reutilizável `<SEO />` responsável por injetar dinamicamente no `<head>` do documento as tags de otimização de cada rota.

### 📌 Interface do Componente de SEO (`src/components/SEO.tsx`)
```typescript
interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schemaJsonLd?: object;
}
```

### 🏷️ Meta Tags Padronizadas Injetadas em Cada Página
- `title`: Título único por página (ex: *Frete Dedicado em Porto Alegre - TranSmart Logística*).
- `meta description`: Resumo chamativo focado em conversão (< 160 caracteres).
- `link rel="canonical"`: URL canônica para evitar conteúdo duplicado no Google.
- `og:title`, `og:description`, `og:image`, `og:url`: Tags de compartilhamento em redes sociais e WhatsApp.
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`: Otimização para X/Twitter.

---

## 4. Dados Estruturados Schema.org (JSON-LD)

Para garantir que o Google exiba rich snippets (informações ricas de empresa local, telefone, avaliação e serviços nos resultados de busca), todas as páginas conterão scripts de dados estruturados em formato JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TranSmart Logística",
  "image": "https://transmart.com.br/logo-transmart.png",
  "@id": "https://transmart.com.br/#organization",
  "url": "https://transmart.com.br",
  "telephone": "+5551986533190",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Plínio Kroeff, 1100",
    "addressLocality": "Porto Alegre",
    "addressRegion": "RS",
    "postalCode": "91150-170",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -29.9875,
    "longitude": -51.1345
  },
  "areaServed": [
    "Porto Alegre", "Canoas", "Novo Hamburgo", "Gravataí", "São Leopoldo"
  ],
  "sameAs": [
    "https://www.instagram.com/transmart_log"
  ]
}
```

---

## 5. Estratégia de Prerendering / SSG (Static Site Generation)

Para garantir que o build gere HTML pré-renderizado sem necessitar de Node.js no servidor de produção:

### ⚙️ Plugin e Script de Build (`vite.config.ts` / Script Prerender)
- Utilização de pré-renderização estática pós-build que navega por todas as rotas declaradas e salva arquivos `.html` estáticos no diretório `dist/`:
  - `dist/index.html` (Home)
  - `dist/sobre/index.html`
  - `dist/servicos/frete-dedicado/index.html`
  - `dist/abrangencia/porto-alegre/index.html`
  - etc.

### 🌐 Vantagem do Prerendering:
1. **Velocidade de Carregamento**: O Nginx/Apache na VPS entrega a página instantaneamente.
2. **SEO Nativo**: O robô do Google lê o HTML completo sem depender de execução de JavaScript.
3. **Imunidade a Erros 404**: Cada URL possui seu próprio arquivo `index.html` físico no servidor.

---

## 6. Nova Estrutura de Arquivos Proposta

```
transmart/
├── docs/
│   ├── spec.md
│   ├── spec_proposta_comercial.md
│   └── spec_arquitetura_vite.md       # Esta especificação técnica
├── public/
│   ├── sitemap.xml                    # Gerado automaticamente
│   ├── robots.txt                     # Instruções para buscadores
│   └── og-image.jpg                   # Imagem padrão de compartilhamento
├── src/
│   ├── assets/
│   ├── components/                    # Componentes reutilizáveis de UI
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── SEO.tsx                    # Componente de Meta-tags e Schema.org
│   │   ├── QuoteFormModal.tsx
│   │   └── FloatingWhatsApp.tsx
│   ├── data/
│   │   ├── servicesData.ts            # Dados dos serviços e conteúdos SEO
│   │   └── citiesData.ts              # Dados das 15 cidades atendidas
│   ├── pages/                         # Páginas da aplicação (Multi-páginas)
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ServiceDetailPage.tsx      # Rota dinâmica de serviço
│   │   ├── CoveragePage.tsx
│   │   ├── CityDetailPage.tsx         # Rota dinâmica de cidade SEO
│   │   ├── InfrastructurePage.tsx
│   │   └── ContactPage.tsx
│   ├── routes/
│   │   └── AppRoutes.tsx              # Configuração do React Router / TanStack
│   ├── styles/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── prerender.js                       # Script de geração SSG de HTMLs estáticos
├── vite.config.ts
├── package.json
└── README.md
```

---

## 7. Configuração da VPS (Nginx / Servidor Web)

Para garantir que a hospedagem na VPS do cliente sirva o projeto com máxima performance e segurança:

### 📜 Exemplo de Bloco de Configuração Nginx (`/etc/nginx/sites-available/transmart`)
```nginx
server {
    listen 80;
    server_name transmart.com.br www.transmart.com.br;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name transmart.com.br www.transmart.com.br;

    root /var/www/transmart/dist;
    index index.html;

    # SSL fornecido pelo Let's Encrypt / Certbot
    ssl_certificate /etc/letsencrypt/live/transmart.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/transmart.com.br/privkey.pem;

    # Compressão Gzip / Brotli para velocidade máxima
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Cache estático longo para assets compilados (JS/CSS/Imagens)
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Tratamento de rotas e fallback SPA/SSG
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 8. Roteiro de Implementação e Migração

1. **Instalação das Dependências de Roteamento e SEO**:
   - `npm install react-router-dom react-helmet-async`
2. **Criação do Componente `<SEO />`**:
   - Injeção flexível de metadados no `<head>`.
3. **Modularização das Seções em Páginas (`src/pages/`)**:
   - Transformar as seções atuais em componentes de página independentes.
4. **Configuração de Geradores Automáticos**:
   - Script para gerar `sitemap.xml` e `robots.txt` durante o build.
5. **Validação no Google Lighthouse / Search Console**:
   - Garantir pontuação 95+ em Performance, Acessibilidade, Melhores Práticas e SEO.
