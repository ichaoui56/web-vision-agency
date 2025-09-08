// sitemap-generator.js - Advanced SEO Sitemap Generator
const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
const fs = require("fs");
const path = require("path");

// Import your projects data
const projectsData = require("./json/data.json");

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://webvisionagency.ma",
    cacheTime: 600000, // 10 minutes cache time
    xmlns: {
      news: false,
      xhtml: true,
      image: true,
      video: false
    }
  });

  // Main pages with high priority and frequent updates
  const mainPages = [
    {
      url: "/",
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
      img: [
        {
          url: "https://webvisionagency.ma/og-image-rev.png",
          caption: "Web Vision Agency - Morocco's Premier Digital Marketing Agency",
          title: "Web Vision Agency Homepage"
        }
      ]
    },
    {
      url: "/about",
      changefreq: "weekly", 
      priority: 0.9,
      lastmod: new Date().toISOString(),
      img: [
        {
          url: "https://webvisionagency.ma/og-image-rev.png",
          caption: "About Web Vision Agency Team",
          title: "Meet Our Digital Marketing Experts"
        }
      ]
    },
    {
      url: "/contact",
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
      img: [
        {
          url: "https://webvisionagency.ma/og-image-rev.png", 
          caption: "Contact Web Vision Agency for Free Consultation",
          title: "Start Your Digital Marketing Project"
        }
      ]
    },
    {
      url: "/projects",
      changefreq: "daily",
      priority: 0.9,
      lastmod: new Date().toISOString(),
      img: [
        {
          url: "https://webvisionagency.ma/og-image-rev.png",
          caption: "Web Vision Agency Portfolio of Successful Projects", 
          title: "500+ Successful Digital Marketing Projects"
        }
      ]
    },
    {
      url: "/projects/archive",
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString()
    }
  ];

  // Add main pages to sitemap
  mainPages.forEach(page => {
    sitemap.write(page);
  });

  // Add dynamic project pages
  if (projectsData && projectsData.Projects) {
    projectsData.Projects.forEach(project => {
      if (project.show) {
        sitemap.write({
          url: `/projects/${project.slug}`,
          changefreq: "monthly",
          priority: 0.8,
          lastmod: new Date().toISOString(),
          img: project.images ? project.images.map(img => ({
            url: `https://webvisionagency.ma${img}`,
            caption: `${project.title} - Project Screenshot`,
            title: project.title
          })) : []
        });
      }
    });
  }

  sitemap.end();

  // Generate XML and compressed versions
  const sitemapXML = (await streamToPromise(sitemap)).toString();
  
  // Write uncompressed XML
  fs.writeFileSync("./public/sitemap.xml", sitemapXML);
  
  // Write compressed version
  const compressed = createGzip();
  const compressedStream = compressed.pipe(fs.createWriteStream("./public/sitemap2.xml"));
  compressed.write(sitemapXML);
  compressed.end();
  
  console.log("✅ Sitemap generated successfully!");
  console.log("📍 Files created:");
  console.log("  - /public/sitemap2.xml");
  console.log("  - /public/sitemap.xml.gz");
}

generateSitemap().catch(console.error);
