import React from 'react';

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://webvisionagency.ma/#business",
    "name": "Web Vision Agency",
    "alternateName": "WebVision Agency Morocco",
    "description": "Premier digital marketing and web development agency in Morocco specializing in high-converting websites, SEO domination, profitable advertising campaigns, and AI-powered business solutions.",
    
    "url": "https://webvisionagency.ma",
    "logo": "https://webvisionagency.ma/logo-512.png",
    "image": [
      "https://webvisionagency.ma/image/me1.jpg",
      "https://webvisionagency.ma/image/me2.jpg",
      "https://webvisionagency.ma/image/me3.jpg"
    ],
    
    "telephone": "+212-602-393-795",
    "email": "webvisionagency0@gmail.com",
    
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Eljadida", 
      "addressRegion": "Casablanca-Settat",
      "postalCode": "24000",
      "addressCountry": "MA"
    },
    
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-16:00" 
    ],
    
    "priceRange": "$$-$$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "PayPal"],
    "currenciesAccepted": "MAD, EUR, USD",
    
    "foundingDate": "2019-01-01",
    "numberOfEmployees": "25",
    "slogan": "Transforming Ideas into Digital Success Stories",
    
    "serviceArea": [
      {
        "@type": "Place", 
        "name": "Morocco"
      },
      {
        "@type": "Place",
        "name": "North Africa"
      },
      {
        "@type": "Place", 
        "name": "MENA Region"
      }
    ],
    
    "areaServed": [
      "Morocco", "Algeria", "Tunisia", "Egypt", "UAE", "Saudi Arabia"
    ],
    
    "knowsAbout": [
      "Web Development", "WordPress Development", "Shopify Development",
      "Search Engine Optimization", "Local SEO", "Technical SEO",
      "Digital Marketing", "Social Media Marketing", "Google Ads",
      "Facebook Advertising", "Artificial Intelligence", "Chatbot Development",
      "E-commerce Solutions", "Mobile App Development", "UI/UX Design"
    ],
    
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Website Development Package",
          "description": "Complete website design and development with SEO optimization",
          "price": "2500",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "provider": {
              "@id": "https://webvisionagency.ma/#business"
            }
          }
        },
        {
          "@type": "Offer", 
          "name": "SEO Domination Package",
          "description": "Complete SEO optimization to rank #1 on Google",
          "price": "1500",
          "priceCurrency": "MAD",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization",
            "provider": {
              "@id": "https://webvisionagency.ma/about"
            }
          }
        },
        {
          "@type": "Offer",
          "name": "Digital Marketing Mastery",
          "description": "Complete digital marketing campaigns for maximum ROI",
          "price": "3000",
          "priceCurrency": "MAD", 
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing Campaign Management",
            "provider": {
              "@id": "https://webvisionagency.ma/about"
            }
          }
        }
      ]
    },
    
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating", 
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ahmed El Mansouri"
        },
        "reviewBody": "Web Vision Agency transformed our business completely. Our website traffic increased by 300% and sales by 250% in just 6 months. Highly recommended!",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5" 
        },
        "author": {
          "@type": "Person",
          "name": "Fatima Zahra"
        },
        "reviewBody": "Professional team, excellent communication, and outstanding results. They delivered exactly what they promised and more.",
        "datePublished": "2024-01-10"
      }
    ],
    
    "sameAs": [
      "https://www.facebook.com/share/1CmMaTM3JB/?mibextid=wwXIfr",
      "https://www.instagram.com/webvision__agency",
    ],
    
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+212-602-393-795",
        "contactType": "Customer Service",
        "email": "webvisionagency0@gmail.com",
        "availableLanguage": ["English", "French", "Arabic"],
        "hoursAvailable": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ]
      },
      {
        "@type": "ContactPoint", 
        "telephone": "+212-602-393-795",
        "contactType": "Sales",
        "email": "webvisionagency0@gmail.ma",
        "availableLanguage": ["English", "French", "Arabic"]
      }
    ],
    
    "member": [
      {
        "@type": "Organization",
        "name": "Morocco Web Association"
      },
      {
        "@type": "Organization", 
        "name": "Digital Marketing Institute"
      }
    ],
    
    "award": [
      "Best Digital Agency Morocco 2023",
      "Top Web Development Company 2023",
      "Excellence in AI Solutions 2023"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
