import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
