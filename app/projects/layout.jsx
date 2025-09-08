import Footer from "@/components/Footer";

export const metadata = {
  title: "Web Vision Agency Portfolio | 500+ Successful Digital Marketing Projects",
  description: "Explore our award-winning portfolio of web development, SEO, and digital marketing projects. See how we've generated millions in revenue for 500+ clients across Morocco and beyond.",
  keywords: [
    "web vision agency portfolio",
    "digital marketing projects morocco",
    "web development portfolio morocco",
    "seo case studies morocco",
    "successful websites morocco",
    "ecommerce projects morocco", 
    "ai solutions portfolio",
    "digital transformation case studies"
  ],
  openGraph: {
    title: "Web Vision Agency Portfolio | 500+ Success Stories",
    description: "Discover our award-winning projects that generated millions in revenue. From custom websites to AI automation - see the results that speak for themselves.",
    images: [
      {
        url: "https://webvisionagency.ma/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Web Vision Agency Portfolio - Successful Digital Marketing Projects"
      }
    ],
    url: "/projects"
  },
  twitter: {
    card: "summary_large_image",
    title: "500+ Success Stories | Web Vision Agency Portfolio 🏆",
    description: "Award-winning projects that generated millions in revenue for our clients.",
    images: ["https://webvisionagency.ma/twitter-projects.jpg"]
  },
  alternates: {
    canonical: "/projects"
  }
};

export default function ProjectsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Web Vision Agency Portfolio",
            "description": "Showcase of successful digital marketing and web development projects",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Digital Marketing Projects",
              "description": "Portfolio of successful web development and digital marketing projects",
              "numberOfItems": "500+",
              "itemListElement": [
                {
                  "@type": "CreativeWork",
                  "name": "E-commerce Website Development",
                  "description": "Custom Shopify and WooCommerce solutions",
                  "creator": {
                    "@type": "Organization",
                    "name": "Web Vision Agency"
                  }
                },
                {
                  "@type": "CreativeWork", 
                  "name": "SEO Optimization Projects",
                  "description": "Search engine optimization campaigns achieving #1 rankings",
                  "creator": {
                    "@type": "Organization",
                    "name": "Web Vision Agency"
                  }
                },
                {
                  "@type": "CreativeWork",
                  "name": "AI Automation Solutions", 
                  "description": "Custom AI chatbots and business automation systems",
                  "creator": {
                    "@type": "Organization",
                    "name": "Web Vision Agency"
                  }
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://webvisionagency.ma"
                },
                {
                  "@type": "ListItem",
                  "position": 2, 
                  "name": "Projects",
                  "item": "https://webvisionagency.ma/projects"
                }
              ]
            }
          })
        }}
      />
      {children}
      <Footer />
    </>
  );
}