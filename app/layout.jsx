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
  title: "Web Vision Agency | Digital Solutions & AI",

  description:
    "Web Vision Agency is a full-service digital agency specializing in website development (custom, WordPress & Shopify), SEO, Ads, Social Media growth, and AI-powered solutions.",

  author: "Web Vision Agency",
  siteUrl: "http://webvisionagency.ma/",
  applicationName: "Web Vision Agency",

  keywords: [
    "web vision agency",
    "website development",
    "wordpress agency",
    "shopify agency",
    "SEO services",
    "digital marketing",
    "social media growth",
    "ads management",
    "AI solutions",
    "AI agents",
    "Morocco web agency",
  ],

  openGraph: {
    type: "website",
    url: "http://webvisionagency.ma/",
    title: "Web Vision Agency | Websites • SEO • Ads • AI",
    site_name: "Web Vision Agency",
    description:
      "We build websites, optimize SEO, run Ads, grow Social Media, and develop AI agents for your business success.",
    images: [
      {
        url: "https://webvisionagency.ma/og-image-rev.png",
        alt: "Web Vision Agency - Digital Solutions",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Vision Agency | Websites • SEO • Ads • AI",
    description:
      "Full-service digital agency: Websites, SEO, Ads, Social Media growth & AI-powered solutions.",
    images: ["https://webvisionagency.ma/og-image-rev.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
