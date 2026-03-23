import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Hataların yayını engellemesini durdurur
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Tip hatalarının yayını engellemesini durdurur
    ignoreBuildErrors: true,
  },
}

export default nextConfig
