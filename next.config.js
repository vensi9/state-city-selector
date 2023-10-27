/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
            source: '/api/v1/states',
            destination: 'https://api.minebrat.com/api/v1/states',
          },
      ];
    },
  };
  