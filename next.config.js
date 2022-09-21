module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};