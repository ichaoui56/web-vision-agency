// app/layout.js - SEO Optimized Root Layout
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: {
    default: "Web Vision Agency | #1 Digital Marketing & Web Development Agency in Morocco",
    template: "%s | Web Vision Agency"
  },
  description: "🚀 #1 Digital Agency in Morocco! We create high-converting websites, dominate SEO rankings, run profitable ads, grow social media followers, and build AI solutions that scale your business. 10x your online presence today!",
  
  keywords: [
    // Primary keywords
    "web development agency morocco",
    "digital marketing agency morocco",
    "seo agency morocco",
    "website design morocco",
    
    // Service-based keywords
    "wordpress development morocco",
    "shopify store development",
    "ecommerce website development",
    "custom web application development",
    
    // SEO keywords
    "seo services morocco",
    "google ranking optimization",
    "local seo morocco",
    "technical seo audit",
    
    // Marketing keywords
    "google ads management morocco",
    "facebook ads agency",
    "social media marketing morocco",
    "instagram growth service",
    
    // AI keywords
    "ai chatbot development",
    "ai automation solutions",
    "machine learning development",
    "ai business solutions",
    
    // Location-based
    "casablanca web agency",
    "rabat digital marketing",
    "morocco web development",
    "north africa digital agency",
    
    // Industry-specific
    "restaurant website development",
    "hotel booking website",
    "real estate website morocco",
    "business website morocco"
  ],

  authors: [{ name: "Web Vision Agency", url: "https://webvisionagency.ma" }],
  creator: "Web Vision Agency",
  publisher: "Web Vision Agency",
  
  metadataBase: new URL("https://webvisionagency.ma"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en',
    }
  },

  openGraph: {
    type: "website",
    siteName: "Web Vision Agency",
    url: "https://webvisionagency.ma",
    title: "Web Vision Agency | #1 Digital Marketing & Web Development Agency in Morocco",
    description: "🚀 Transform your business with Morocco's leading digital agency. We build high-converting websites, dominate Google rankings, and scale businesses with AI-powered solutions.",
    images: [
      {
        url: "https://webvisionagency.ma/og-image-rev.png",
        width: 1200,
        height: 630,
        alt: "Web Vision Agency - Morocco's Premier Digital Marketing Agency",
        type: "image/png"
      }
    ],
    locale: "en_US"
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Vision Agency | #1 Digital Agency in Morocco 🚀",
    description: "Transform your business with high-converting websites, top SEO rankings & AI solutions. Morocco's leading digital marketing agency.",
    images: ["https://webvisionagency.ma/og-image-rev.png"],
    creator: "@webvisionagency"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code", 
  //   yahoo: "your-yahoo-verification-code",
  //   other: {
  //     bing: "your-bing-verification-code"
  //   }
  // },

  category: "Digital Marketing Agency",
  classification: "Business",
  
  other: {
    'geo.region': 'MA',
    'geo.placename': 'El Jadida',
    'DC.title': 'Web Vision Agency - Digital Marketing & Web Development',
    'DC.subject': 'Digital Marketing, Web Development, SEO, Morocco',
    'DC.description': 'Premier digital marketing and web development agency in Morocco',
    'DC.language': 'en',
    'DC.coverage': 'Morocco, North Africa, MENA',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Enhanced meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.js" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://webvisionagency.ma/#organization",
                  "name": "Web Vision Agency",
                  "url": "https://webvisionagency.ma",
                  "logo": "https://webvisionagency.ma/image/logo.png",
                  "sameAs": [
                    "https://www.facebook.com/share/1CmMaTM3JB/?mibextid=wwXIfr",
                    "https://www.instagram.com/webvision__agency"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+212-602-393-795",
                    "contactType": "Customer Service",
                    "email": "webvisionagency0@gmail.com",
                    "availableLanguage": ["English", "French", "Arabic"]
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Casablanca",
                    "addressRegion": "Casablanca-Settat",
                    "addressCountry": "MA"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://webvisionagency.ma/#website",
                  "url": "https://webvisionagency.ma",
                  "name": "Web Vision Agency",
                  "description": "Morocco's leading digital marketing and web development agency",
                  "publisher": {
                    "@id": "https://webvisionagency.ma/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://webvisionagency.ma/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://webvisionagency.ma/#localbusiness",
                  "name": "Web Vision Agency",
                  "image": "https://webvisionagency.ma/image/logo.png",
                  "description": "Premier digital marketing and web development agency in Morocco",
                  "url": "https://webvisionagency.ma",
                  "telephone": "+212-602-393-795",
                  "email": "webvisionagency0@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "El Jadida",
                    "addressRegion": "Casablanca-Settat",
                    "postalCode": "20000",
                    "addressCountry": "MA"
                  },
                  "openingHours": "Mo-Fr 09:00-18:00",
                  "priceRange": "MAD",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Web Development",
                          "description": "Custom website development and design"
                        }
                      },
                      {
                        "@type": "Offer", 
                        "itemOffered": {
                          "@type": "Service",
                          "name": "SEO Services",
                          "description": "Search engine optimization and ranking"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service", 
                          "name": "Digital Marketing",
                          "description": "Social media and advertising campaigns"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Solutions",
                          "description": "Artificial intelligence and automation services"
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-white bg-[url('/background.png')] bg-cover bg-center bg-fixed">
        <ClientTopProgressBar />
        <Navbar />
        {children}
        {/* <Chat /> */}
        <Analytics />
      </body>
    </html>
  );
}