import React from 'react';

const ArticleSchema = ({ article }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.images || [],
    "author": {
      "@type": "Organization",
      "name": "Web Vision Agency",
      "url": "https://webvisionagency.ma"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Web Vision Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webvisionagency.ma/image/logo.png"
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "articleSection": article.category,
    "keywords": article.keywords?.join(", ") || "",
    "wordCount": article.wordCount || 0
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ArticleSchema;