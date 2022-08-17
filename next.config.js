/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL:
      process.env.NODE_ENV === "production"
        ? process.env.VERCEL_URL
        : "http://localhost:3000/",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
}
module.exports = nextConfig
