export const generateMetaTags = (page) => {
  const defaultMeta = {
    siteName: "Web Vision Agency",
    domain: "webvisionagency.ma",
    url: "https://webvisionagency.ma",
    type: "website",
    locale: "en_US"
  };

  return {
    title: `${page.title} | ${defaultMeta.siteName}`,
    description: page.description,
    keywords: page.keywords?.join(", ") || "",
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${defaultMeta.url}${page.path}`,
      siteName: defaultMeta.siteName,
      images: page.images || [
        {
          url: `${defaultMeta.url}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: page.title
        }
      ],
      locale: defaultMeta.locale,
      type: defaultMeta.type
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: page.images?.[0]?.url || `${defaultMeta.url}/twitter-default.jpg`
    },
    robots: {
      index: page.index !== false,
      follow: page.follow !== false,
      googleBot: {
        index: page.index !== false,
        follow: page.follow !== false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    alternates: {
      canonical: `${defaultMeta.url}${page.path}`
    }
  };
};

export const generateStructuredData = (type, data) => {
  const baseContext = {
    "@context": "https://schema.org"
  };

  switch (type) {
    case "website":
      return {
        ...baseContext,
        "@type": "WebSite",
        "name": data.name,
        "url": data.url,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${data.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };
    
    case "organization":
      return {
        ...baseContext,
        "@type": "Organization",
        "name": data.name,
        "url": data.url,
        "logo": data.logo,
        "contactPoint": data.contactPoint,
        "address": data.address,
        "sameAs": data.socialMedia || []
      };
    
    default:
      return baseContext;
  }
};

// Performance monitoring for Core Web Vitals
export const reportWebVitals = (metric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
};