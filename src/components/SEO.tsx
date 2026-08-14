import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/content';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schemaJsonLd?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = COMPANY_INFO.mission,
  keywords = [
    'transporte de cargas porto alegre',
    'logistica porto alegre',
    'frete dedicado rs',
    'last mile porto alegre',
    'cross docking 24h',
    'distribuicao de cargas rs',
    'transmart logistica'
  ],
  canonicalUrl = 'https://www.transmart.com.br',
  ogImage = 'https://www.transmart.com.br/logo-transmart.svg',
  ogType = 'website',
  schemaJsonLd
}) => {
  const fullTitle = title 
    ? `${title} | ${COMPANY_INFO.name}`
    : `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`;

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': COMPANY_INFO.name,
    'description': COMPANY_INFO.mission,
    'url': 'https://www.transmart.com.br',
    'telephone': '+5551986533190',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Av. Bernardino Silveira Amorim, 1485',
      'addressLocality': 'Porto Alegre',
      'addressRegion': 'RS',
      'postalCode': '91160-001',
      'addressCountry': 'BR'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -29.9875,
      'longitude': -51.1345
    },
    'areaServed': [
      'Porto Alegre', 'Canoas', 'Novo Hamburgo', 'Gravataí', 'São Leopoldo', 'Alvorada', 'Cachoeirinha', 'Viamão'
    ],
    'sameAs': [
      'https://www.instagram.com/transmart_log/'
    ]
  };

  const finalSchema = schemaJsonLd || defaultSchema;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="TranSmart Logística" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};
