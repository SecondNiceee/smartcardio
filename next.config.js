/** @type {import('next').NextConfig} */
const cdnUrl = process.env.CDN_URL || '';

const nextConfig = {
  assetPrefix: cdnUrl,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {

      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            all: {
              test: /.*/,
              name: 'bundle',
              chunks: 'all',
            },
          },
        },
        minimize: true,
        concatenateModules: true, // ← объединяем модули на уровне scope
      };
    }
    return config;
  },
  compress: false,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
