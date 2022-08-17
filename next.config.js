/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://condition-report.dev.driv.ly"
        : "http://localhost:3000",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
}
module.exports = nextConfig
