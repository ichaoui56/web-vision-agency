import Footer from "@/components/Footer";

export const metadata = {
  title: "About Web Vision Agency | Morocco's Leading Digital Marketing Experts",
  description: "Meet the expert team behind Morocco's #1 digital marketing agency. 5+ years of experience, 500+ successful projects, and a proven track record of transforming businesses across North Africa.",
  keywords: [
    "about web vision agency",
    "digital marketing agency morocco team",
    "web development experts morocco", 
    "seo specialists casablanca",
    "digital marketing professionals morocco",
    "ai development team morocco",
    "web agency founders morocco",
    "digital transformation experts"
  ],
  openGraph: {
    title: "About Web Vision Agency | Meet Morocco's Digital Marketing Experts",
    description: "Discover the story behind Morocco's premier digital agency. Our expert team has transformed 500+ businesses with cutting-edge web development, SEO mastery & AI innovation.",
    images: [
      {
        url: "https://webvisionagency.ma/og-image-rev.png",
        width: 1200,
        height: 630,
        alt: "Web Vision Agency Team - Digital Marketing Experts in Morocco"
      }
    ],
    url: "/about"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Web Vision Agency | Morocco's Digital Marketing Leaders",
    description: "Meet the team that's transformed 500+ businesses across Morocco with innovative digital solutions.",
    images: ["https://webvisionagency.ma/og-image-rev.png"]
  },
  alternates: {
    canonical: "/about"
  }
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Web Vision Agency",
              "description": "Morocco's leading digital marketing and web development agency with 5+ years of experience",
              "foundingDate": "2019",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Web Vision Agency Founder",
                  "jobTitle": "CEO & Lead Developer"
                }
              ],
              "numberOfEmployees": "10-50",
              "areaServed": {
                "@type": "Place",
                "name": "Morocco, North Africa, MENA Region"
              },
             
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Google Certified",
                  "credentialCategory": "Digital Marketing Certification"
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "name": "Facebook Blueprint Certified",
                  "credentialCategory": "Social Media Marketing"
                }
              ],
              "award": [
                "Top Digital Agency Morocco 2023",
                "Best Web Development Team 2023",
                "Innovation in AI Solutions 2023"
              ],
              "knowsAbout": [
                "Web Development",
                "Search Engine Optimization", 
                "Digital Marketing",
                "Artificial Intelligence",
                "E-commerce Development",
                "Social Media Marketing"
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
