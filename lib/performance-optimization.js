export const performanceOptimizations = {
  // Image optimization strategies
  images: {
    // Use next/image with priority for above-the-fold images
    heroImageProps: {
      priority: true,
      quality: 90,
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      placeholder: "blur"
    },
    
    // Lazy load below-the-fold images
    lazyImageProps: {
      loading: "lazy",
      quality: 85,
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    }
  },
  
  // Font optimization
  fonts: {
    preload: [
      { rel: "preload", href: "/fonts/inter-var.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" }
    ]
  },
  
  // Critical CSS inlining
  criticalCSS: `
    /* Critical above-the-fold styles */
    .hero-section { font-display: swap; }
    .navigation { contain: layout; }
    .button-primary { will-change: transform; }
  `,
  
  // Resource hints
  resourceHints: [
    { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
    { rel: "dns-prefetch", href: "//www.googletagmanager.com" },
    { rel: "dns-prefetch", href: "//connect.facebook.net" },
    { rel: "preconnect", href: "//fonts.gstatic.com", crossOrigin: "" }
  ]
};