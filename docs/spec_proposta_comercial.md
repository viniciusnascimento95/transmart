# Especificação de Proposta Comercial (Spec de Venda) - Website TranSmart Logística

## 1. Visão Geral do Ativo & Cenário da Infraestrutura

O ativo digital objeto desta proposta é o **Website Comercial e Institucional da TranSmart Logística**, desenvolvido sob medida com arquitetura moderna e de alta performance (**Vite**, **React 18**, **TypeScript**, **Tailwind CSS v4** e build estático otimizado).

### 📍 Cenário do Cliente (VPS Existente + WordPress)
Este cliente já possui uma **VPS (Servidor Virtual Privado Linux)** ativa rodando o site atual em **WordPress**. A implantação do novo site React será realizada diretamente na infraestrutura atual do cliente.

#### 💡 Argumentos Comerciais de Valorização (Venda de Upgrade de Infraestrutura)
1. **Redução Drástica de Consumo da VPS**: O site em React estático consome **~95% menos memória RAM e CPU** do que o WordPress (que exige PHP + MySQL + dezenas de plugins). A VPS do cliente ficará significativamente mais rápida e leve.
2. **Imunidade a Invasões e Falhas de Segurança**: Sites WordPress desatualizados são alvos constantes de invasões e malwares por conta de plugins. O site React é 100% estático e imune a ataques de banco de dados (SQL Injection / PHP exploits).
3. **Zero Custo Adicional com Servidor**: O cliente reutilizará a VPS que já paga hoje, sem necessidade de contratar novas hospedagens.

---

## 2. Escopo de Entregáveis Técnicos & Funcionais

| Componente / Funcionalidade | Descrição Técnica / Detalhes | Status |
| :--- | :--- | :---: |
| **Hero Section & CTAs** | Banner de impacto, slogan institucional, badges de destaque e botões de conversão imediata. |  Pronto |
| **Simulador de Cotação (`QuoteFormModal`)** | Modal interativo para solicitação de cotação com envio de mensagem pré-formatada no WhatsApp/Email. |  Pronto |
| **Módulo de Serviços** | Apresentação visual de Frete Dedicado, Last Mile, Cross-docking 24h, Paletização e Distribuição. |  Pronto |
| **Abrangência Geográfica Interativa** | Filtro/Busca por cidades da Região Metropolitana de Porto Alegre com aviso de prazo de 24h. |  Pronto |
| **Apresentação de Infraestrutura** | Detalhamento do Centro de Distribuição de 650m² em POA, frota própria/agregada e sistema TMS. |  Pronto |
| **WhatsApp Flutuante** | Botão suspenso animado para rápida comunicação em dispositivos móveis e desktop. |  Pronto |
| **Deploy na VPS & Servidor Web** | Configuração do Nginx/Apache na VPS do cliente para servir o build estático de alta velocidade + SSL. | 🔄 No Deploy |
| **Migração & Redirecionamentos 301** | Redirecionamento 301 das URLs antigas do WordPress para o novo site, mantendo autoridade SEO. | 🔄 No Deploy |

---

## 3. Matriz de Precificação & Modalidades de Venda (Revisada para VPS/WordPress)

Considerando a complexidade técnica adicional de **configuração da VPS, substituição do WordPress e preservação de SEO/links antigos**, os valores foram reajustados:

```
+-----------------------------------------------------------------------------------+
|                           OPÇÕES DE VENDA (CENÁRIO VPS)                           |
+--------------------------+--------------------------+-----------------------------+
|    PACOTE ESSENCIAL      |   PACOTE COMPLETO (VPS)  |    PACOTE PREMIUM (VPS+SEO)  |
|  (Código / Template)     |   (Turnkey / Deploy VPS) |  (Substituição WP + 301)    |
|                          |                          |                             |
|   R$ 2.000 a R$ 2.800    |   R$ 5.200 a R$ 6.800    |     R$ 7.800 a R$ 9.800     |
+--------------------------+--------------------------+-----------------------------+
```

### 📦 Pacote 1: Código-Fonte & Licença do Projeto (Essencial)
* **Perfil do Comprador:** Agências ou equipe técnica do cliente que fara o deploy por conta própria na VPS.
* **Valor Recomendado:** **R$ 2.500,00** *(faixa: R$ 2.000,00 a R$ 2.800,00)*
* **O que inclui:**
  - Repositório completo do código-fonte no GitHub.
  - Guia técnico de compilação e build estático para Nginx/Apache.
* **Não inclui:** Acesso à VPS do cliente, migração de dados, SSL ou suporte de servidor.

---

### 📦 Pacote 2: Site Pronto + Implantação na VPS do Cliente (Turnkey VPS)
* **Perfil do Comprador:** Cliente que quer o novo site funcionando no servidor atual substituindo o WordPress antigo.
* **Valor Recomendado:** **R$ 5.800,00** *(faixa: R$ 5.200,00 a R$ 6.800,00)*
* **O que inclui:**
  - Todo o escopo do **Pacote Essencial**.
  - **Personalização de Marca:** Atualização de logotipo, paleta de cores, telefones/WhatsApp, e-mails e cidades de atendimento.
  - **Deploy & Configuração da VPS:** Acesso à VPS do cliente para compilar o site React, configurar o servidor web (Nginx/Apache), ajustar o VirtualHost e renovar/instalar certificado SSL gratuito (Certbot Let's Encrypt).
  - **Desativação Limpa do WordPress:** Backup do banco de dados/arquivos do WordPress antigo antes da substituição.
  - **Treinamento (Handover):** 1 hora de apresentação e instrução de uso.

---

### 📦 Pacote 3: Substituição Completa WP + Migração de SEO & Tráfego (Premium VPS)
* **Perfil do Comprador:** Cliente preocupado em não perder acessos do Google e que busca máxima otimização da VPS.
* **Valor Recomendado:** **R$ 8.500,00** *(faixa: R$ 7.800,00 a R$ 9.800,00)*
* **O que inclui:**
  - Todo o escopo do **Pacote Completo (Turnkey VPS)**.
  - **Migração de SEO & Redirecionamento 301**: Mapeamento de todas as URLs antigas do WordPress no Google e criação de regras de redirecionamento 301 no Nginx/Apache para as novas seções do site React.
  - **Setup de SEO Local & Indexação:** Re-submissão do Sitemap XML no Google Search Console e dados estruturados Schema.org.
  - **Integração de Analytics:** Configuração do Google Analytics 4 (GA4) para monitorar conversões.
  - **Otimização da VPS Linux:** Limpeza de processos pesados da VPS (PHP/MySQL antigos) para liberar memória e velocidade máxima.
  - **Suporte Prioritário:** 30 dias de suporte técnico pós-lançamento.

---

## 4. Opcionais e Adicionais (Add-ons de Infraestrutura)

Caso o comprador solicite serviços adicionais para a VPS:

| Adicional / Módulo Extra | Descrição | Valor Adicional Sugerido |
| :--- | :--- | :---: |
| **Backup Completo & Armazenamento WP** | Backup do WordPress antigo compactado e disponibilizado em nuvem por 1 ano. | + R$ 600,00 |
| **Subdomínio para WordPress Antigo** | Manter o WP antigo ativo em `antigo.transmart.com.br` ou `blog.transmart.com.br`. | + R$ 850,00 |
| **Gerenciamento Mensal de VPS Linux** | Monitoramento de uptime, atualizações do SO Ubuntu/Debian e renovação de SSL. | + R$ 450,00 / mês |
| **Painel CMS Headless (Sanity/Decap)** | Módulo para alteração de textos pelo próprio cliente sem mexer no React. | + R$ 2.000,00 |

---

## 5. Processo de Transferência & Implantação na VPS (Handover em 5 Etapas)

1. **Aceite da Proposta & Sinal:** Assinatura do contrato e pagamento do sinal de 50%.
2. **Acesso à VPS & Backup Preventivo:** Recebimento das credenciais de acesso SSH/Painel da VPS e execução do backup do WordPress atual.
3. **Personalização do Novo Site:** Aplicação dos dados de contato, cores e conteúdos do cliente.
4. **Deploy & Configuração Nginx/Apache + SSL:** Publicação do build estático no servidor web da VPS, configuração de HTTPS com Certbot e testes de performance.
5. **Redirecionamentos 301 & Liquidação:** Ativação dos redirecionamentos de URLs antigas, envio de relatório de migração no Google Search Console, pagamento dos 50% restantes e entrega final.

---

## 6. Termos de Pagamento e Condições Comerciais

- **Forma de Pagamento Padrão:**
  - **50% de Sinal / Aceite** na assinatura do contrato.
  - **50% na Entrega Definitiva** (com site rodando na VPS e homologado).
- **Parcelamento:** Em até 3x sem juros no PIX/Boleto ou em até 12x no cartão de crédito (com taxas da administradora).
- **Garantia:** 30 dias de garantia contra inconsistências no código ou no deploy na VPS.

---

## 7. Argumentos Chave para Apresentar ao Cliente

Ao defender o valor do Pacote 2 ou Pacote 3 na reunião comercial:
- *"Ao trocar o WordPress pelo novo site em React na sua VPS, o seu servidor passará a consumir 95% menos memória. O site abrirá instantaneamente em qualquer celular, sem o risco de cair ou ser hackeado por plugins desatualizados."*
- *"Nós cuidamos de toda a transição técnica na sua própria VPS (backup do WP antigo, instalação do SSL, configuração do servidor Nginx e redirecionamento das URLs antigas no Google) para que você não perca nem 1 dia de vendas nem o ranqueamento atual no Google."*
