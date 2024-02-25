/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // as my companies list components are client side anyway, i want to avoid a flickering due to the suspense fallback
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
