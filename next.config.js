/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build"
}
const { parsed: envVariables } = require('dotenv').config();

module.exports = {
  nextConfig,
  env: envVariables,
  images: {
    domains: ['images.ctfassets.net'],
  },
}


