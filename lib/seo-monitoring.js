export class SEOMonitor {
  constructor() {
    this.metrics = {
      coreWebVitals: {},
      rankings: {},
      traffic: {},
      conversions: {}
    };
  }

  // Core Web Vitals tracking
  trackWebVitals = (metric) => {
    this.metrics.coreWebVitals[metric.name] = {
      value: metric.value,
      rating: metric.rating,
      timestamp: Date.now()
    };
    
    // Send to analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: metric.name,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        custom_parameter_1: metric.rating,
        non_interaction: true
      });
    }
  };

  // SEO score calculator
  calculateSEOScore = () => {
    const checks = {
      titleLength: this.checkTitleLength(),
      metaDescription: this.checkMetaDescription(), 
      headingStructure: this.checkHeadingStructure(),
      imageAlt: this.checkImageAlt(),
      internalLinks: this.checkInternalLinks(),
      pageSpeed: this.checkPageSpeed(),
      mobileOptimization: this.checkMobileOptimization(),
      structuredData: this.checkStructuredData()
    };
    
    const score = Object.values(checks).reduce((sum, check) => sum + check.score, 0);
    const maxScore = Object.keys(checks).length * 100;
    
    return {
      score: Math.round((score / maxScore) * 100),
      checks,
      recommendations: this.generateRecommendations(checks)
    };
  };

  checkTitleLength = () => {
    const title = document.title;
    const length = title.length;
    return {
      score: length >= 30 && length <= 60 ? 100 : 50,
      message: length >= 30 && length <= 60 ? 'Title length is optimal' : `Title should be 30-60 characters (current: ${length})`
    };
  };

  checkMetaDescription = () => {
    const meta = document.querySelector('meta[name="description"]');
    if (!meta) return { score: 0, message: 'Meta description is missing' };
    
    const length = meta.content.length;
    return {
      score: length >= 120 && length <= 160 ? 100 : 50,
      message: length >= 120 && length <= 160 ? 'Meta description length is optimal' : `Meta description should be 120-160 characters (current: ${length})`
    };
  };

  generateRecommendations = (checks) => {
    const recommendations = [];
    Object.entries(checks).forEach(([key, check]) => {
      if (check.score < 100) {
        recommendations.push({
          priority: check.score < 50 ? 'high' : 'medium',
          issue: key,
          message: check.message
        });
      }
    });
    return recommendations.sort((a, b) => a.priority === 'high' ? -1 : 1);
  };
}
