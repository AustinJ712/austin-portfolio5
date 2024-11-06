// next.config.js

const { withNextVideo } = require('next-video/process');
const { withContentlayer } = require('next-contentlayer');
const { get } = require('@vercel/edge-config');

/** @type {import('next').NextConfig} */
let nextConfig = {
  experimental: {
    serverActions: true,
  },
  redirects() {
    try {
      return get('redirects');
    } catch {
      return [];
    }
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  webpack(config) {
    // Add support for importing .mp4 files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });

    return config;
  },
};

// Security Headers Configuration
const ContentSecurityPolicy = `
  default-src 'self' vercel.live;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'self' blob: data:;
  connect-src *;
  font-src 'self' data:;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

// Apply both withNextVideo and withContentlayer
nextConfig = withNextVideo(nextConfig);
nextConfig = withContentlayer(nextConfig);

module.exports = nextConfig;
