import React from 'react';

const ServiceSchema = ({ service }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness", 
      "name": "Web Vision Agency",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "El Jadida",
        "addressRegion": "Casablanca-Settat",
        "addressCountry": "Morocco"
      },
      "telephone": "+212-602-393-795"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Morocco, North Africa, MENA"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": service.features?.map(feature => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature.name,
          "description": feature.description
        }
      })) || []
    },
    "review": service.reviews?.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.text
    })) || [],
    "aggregateRating": service.aggregateRating ? {
      "@type": "AggregateRating",
      "ratingValue": service.aggregateRating.value,
      "reviewCount": service.aggregateRating.count
    } : null
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;