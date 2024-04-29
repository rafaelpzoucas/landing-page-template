/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.SUPABASE_HOSTNAME],
  },
}

module.exports = nextConfig
