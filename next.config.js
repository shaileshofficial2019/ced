// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV
const withPWA = require("next-pwa");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  }
})


module.exports = {
  images: {
    loader: "imgix",
    path: "",
  },
  reactStrictMode: true,
}

module.exports = withPWA({
  pwa: {
    dest: "public",
    swSrc: 'service-worker.js',
  },
});