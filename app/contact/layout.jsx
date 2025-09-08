import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Web Vision Agency | FREE Strategy Session - Start Your Project Today",
  description: "Ready to 10X your business? Get a FREE $500 strategy session with Morocco's #1 digital marketing agency. Contact us for web development, SEO, ads & AI solutions. Limited spots available!",
  keywords: [
    "contact web vision agency",
    "free digital marketing consultation morocco",
    "web development quote morocco",
    "seo consultation casablanca", 
    "digital marketing strategy session",
    "start web project morocco",
    "hire digital agency morocco",
    "get website quote morocco"
  ],
  openGraph: {
    title: "Contact Web Vision Agency | FREE 500 MAD Strategy Session",
    description: "Ready to dominate your market? Claim your FREE strategy session with Morocco's premier digital agency. Limited spots available - contact us now!",
    images: [
      {
        url: "https://webvisionagency.ma/og-image-rev.png",
        width: 1200,
        height: 630,
        alt: "Contact Web Vision Agency - FREE Strategy Session"
      }
    ],
    url: "/contact"
  },
  twitter: {
    card: "summary_large_image",
    title: "FREE 500 MAD Strategy Session | Contact Web Vision Agency 🚀",
    description: "Get your FREE 500 MAD digital marketing consultation. Transform your business today!",
    images: ["https://webvisionagency.ma/og-image-rev.png"]
  },
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Web Vision Agency",
              "telephone": "+212-602-393-795",
              "email": "webvisionagency0@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "El Jadida",
                "addressRegion": "Casablanca-Settat",
                "addressCountry": "Morocco"
              },
              "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-16:00"],
              "priceRange": "500 MAD",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "currenciesAccepted": "MAD, EUR, USD",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Free Consultation Offer",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "FREE Strategy Session",
                    "description": "Complimentary 500 MAD digital marketing consultation",
                    "price": "0",
                    "priceCurrency": "MAD",
                    "availability": "https://schema.org/LimitedAvailability",
                    "validThrough": "2024-12-31"
                  }
                ]
              }
            }
          })
        }}
      />
      {children}
      <Footer />
    </>
  );
}