export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlight: string;
  iconName: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
}

export const COMPANY_INFO = {
  name: 'TranSmart Logística',
  tagline: 'Soluções Eficientes no Transporte de Cargas',
  lema: 'Entender para atender',
  phone: '(51) 98653-3190',
  whatsappRaw: '5551986533190',
  whatsappUrl: 'https://wa.me/5551986533190?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transporte.',
  email: 'contato@transmart.com.br',
  instagram: '@transmart_log',
  instagramUrl: 'https://www.instagram.com/transmart_log/',
  website: 'www.transmart.com.br',
  address: 'Av. Plínio Kroeff, 1100 - Porto Alegre - RS, CEP 91150-170',
  mapsUrl: 'https://maps.google.com/?q=Av.+Pl%C3%ADnio+Kroeff,+1100+-+Porto+Alegre+-+RS,+91150-170',
  
  mission: 'Nosso compromisso é proporcionar soluções eficientes e seguras no transporte de cargas, conectando pessoas e negócios através de uma logística inteligente. Buscamos sempre superar as expectativas de nossos clientes, garantindo a entrega ágil e confiável de seus produtos dentro da nossa cadeia de atendimento.',
  
  purpose: 'Nosso propósito vai além de simplesmente transportar cargas. Queremos ser parceiros estratégicos de nossos clientes, contribuindo para o crescimento de seus negócios através de soluções logísticas eficientes e personalizadas. Além disso, buscamos ser agentes de desenvolvimento econômico e social em nossa comunidade, gerando empregos, promovendo a capacitação de nossos colaboradores e contribuindo para o desenvolvimento sustentável da nossa região de atuação.',
  
  cdSize: '650m²',
  cdLocation: 'Localizado na principal região do transporte rodoviário de cargas em Porto Alegre - RS.',
};

export const VALUES_DATA: ValueItem[] = [
  {
    title: 'Excelência',
    description: 'Buscamos a excelência em tudo o que fazemos, desde o atendimento ao cliente até a execução perfeita das operações logísticas.',
    iconName: 'Award',
  },
  {
    title: 'Confiança',
    description: 'Construímos relações sólidas e transparentes com nossos clientes, fornecedores e colaboradores, baseadas na confiança mútua.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Comprometimento',
    description: 'Somos dedicados e comprometidos com a satisfação total de nossos clientes, trabalhando incansavelmente para superar suas expectativas.',
    iconName: 'HeartHandshake',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'frete-dedicado',
    title: 'Frete Dedicado',
    shortDesc: 'Veículo exclusivo para a sua carga com coleta e entrega com data e hora marcada.',
    fullDesc: 'Coleta e entrega na data e hora marcada. Sem passagem pelo nosso CD e sem consolidar com demais cargas, oferecemos um veículo integralmente para a sua necessidade.',
    highlight: '100% Exclusivo',
    iconName: 'Truck',
  },
  {
    id: 'last-mile',
    title: 'Last Mile',
    shortDesc: 'Logística de última milha do nosso centro de distribuição até o cliente final.',
    fullDesc: 'A partir do recebimento de sua mercadoria em nosso CD, realizamos o último percurso até o seu cliente final com total pontualidade e cuidado.',
    highlight: 'Entrega Final Ágil',
    iconName: 'Navigation',
  },
  {
    id: 'cross-docking',
    title: 'Cross-docking 24h',
    shortDesc: 'Coleta diária programada e entregas entregues ao cliente em até 24 horas.',
    fullDesc: 'Serviço focado na coleta e entrega diária do seu produto. Seguimos um cronograma de coleta automática na sua empresa e entregas dentro de um prazo de 24h no seu cliente.',
    highlight: 'Prazo em até 24 horas',
    iconName: 'Clock',
  },
  {
    id: 'paletizacao',
    title: 'Paletização',
    shortDesc: 'Padronização e montagem de pallets sob medida em nosso CD antes da entrega.',
    fullDesc: 'Seu cliente solicita uma entrega com pallets padronizados? Nós realizamos este serviço em nosso CD antes de realizar a entrega, garantindo conformidade total.',
    highlight: 'Padronização no CD',
    iconName: 'Boxes',
  },
  {
    id: 'distribuicao',
    title: 'Distribuição',
    shortDesc: 'Recebimento consolidado, separação, etiquetagem e roteirização inteligente.',
    fullDesc: 'Fazemos o recebimento consolidado de sua carga, separamos os pedidos por cliente, etiquetamos e programamos as entregas dentro de nosso itinerário otimizado.',
    highlight: 'Operação Completa',
    iconName: 'Route',
  },
];

export const CITIES_24H: string[] = [
  'Alvorada',
  'Cachoeirinha',
  'Campo Bom',
  'Canoas',
  'Esteio',
  'Estância Velha',
  'Gravataí',
  'Nova Santa Rita',
  'Novo Hamburgo',
  'Portão',
  'Porto Alegre',
  'São Leopoldo',
  'Sapiranga',
  'Sapucaia do Sul',
  'Viamão',
];

export const INFRASTRUCTURE_ITEMS = [
  {
    title: 'Centro de Distribuição em Porto Alegre',
    stat: '650m²',
    description: 'CD estratégico preparado para recepção, armazenagem rápida, triagem e expedição na principal zona de transporte rodoviário de cargas de Porto Alegre.',
    iconName: 'Warehouse',
  },
  {
    title: 'Frota Versátil & Agregados',
    stat: 'Sob Medida',
    description: 'Frota própria e rede de agregados qualificados, dimensionados exatamente para o volume e especificação do seu negócio.',
    iconName: 'Truck',
  },
  {
    title: 'Tecnologia TMS & Rastreamento',
    stat: 'Acesso Online',
    description: 'Equipe altamente treinada e sistema TMS moderno com acesso dedicado ao cliente para acompanhamento e status de entregas em tempo real.',
    iconName: 'Laptop',
  },
];

export const WHY_CHOOSE_US: DifferentialItem[] = [
  {
    number: '01',
    title: 'Empresa Enxuta e Comunicação Horizontal',
    description: 'Somos uma empresa ágil com processos bem definidos. Trabalhamos de forma horizontal, garantindo que a informação circule sem ruídos entre todos os agentes da operação.',
  },
  {
    number: '02',
    title: 'Métricas de Cobrança Simplificadas',
    description: 'Analisamos a necessidade real de cada cliente e montamos uma tabela clara e transparente para que sua empresa seja competitiva no momento da entrega.',
  },
  {
    number: '03',
    title: 'Personalização "Entender para atender"',
    description: 'Não buscamos apenas clientes, mas sim parceiros de negócios a longo prazo. Oferecemos um serviço 100% alinhado com o seu lema e necessidades diárias.',
  },
];
