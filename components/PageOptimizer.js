import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { seoConfig } from '@/lib/seo-config';

const PageOptimizer = ({ children }) => {
  const router = useRouter();
  
  useEffect(() => {
    // Track page views for analytics
    const handleRouteChange = (url) => {
      // Google Analytics pageview
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: url,
        });
      }
      
      // Facebook Pixel pageview
      if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'PageView');
      }
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  
  return children;
};

export default PageOptimizer;
