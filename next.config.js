const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const path = require('path');

module.exports = withBundleAnalyzer({
	experimental: {
    turbo: {
      resolveAlias: {
        '@': path.resolve(__dirname, './'),
        '@/components': path.resolve(__dirname, './components'),
        '@/public': path.resolve(__dirname, './public'),
        '@/app': path.resolve(__dirname, './app'),
        '@/lib': path.resolve(__dirname, './lib'),
      },
    },
  },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
		],
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 60,
	},
	webpack: (config, options) => {
		// Add path aliases for webpack
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, './'),
			'@/components': path.resolve(__dirname, './components'),
			'@/public': path.resolve(__dirname, './public'),
			'@/app': path.resolve(__dirname, './app'),
			'@/lib': path.resolve(__dirname, './lib'),
		};

		config.module.rules.push({
			test: /\.pdf$/i,
			type: "asset/source",
		});

		return config;
	},
	async headers() {
		return [
			{
				source: "/sitemap.xml.gz",
				headers: [
					{
						key: "Content-Type",
						value: "application/gzip",
					},
					{
						key: "Cache-Control",
						value: "public, max-age=3600",
					},
				],
			},
			{
				source: "/:path*",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
				],
			},
		];
	},
	reactStrictMode: true,
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
				  }
				: false,
	},
});