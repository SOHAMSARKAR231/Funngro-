import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQItem } from '../types';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  faqItems?: FAQItem[];
  pageType?: 'website' | 'article';
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  faqItems,
  pageType = 'website',
}) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://funngro.com';
  const canonicalUrl = `${origin}${canonicalPath}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Funngro',
    alternateName: 'Funngro Youth Platform',
    url: origin,
    logo: `${origin}/favicon.ico`,
    description: 'India’s leading platform for youth to earn money through verified tasks and brand projects.',
    sameAs: [
      'https://www.instagram.com/funngro',
      'https://www.linkedin.com/company/funngro',
      'https://twitter.com/funngro',
      'https://www.youtube.com/@funngro',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Funngro',
    url: origin,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${origin}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: origin,
      },
      ...(canonicalPath !== '/'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: canonicalPath === '/brands' ? 'For Brands' : canonicalPath.slice(1),
              item: canonicalUrl,
            },
          ]
        : []),
    ],
  };

  const faqSchema = faqItems && faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  return (
    <Helmet>
      {/* Primary HTML Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Funngro" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
};
