/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-d02e3aa7d09f4d5d9261e5d7e4bae228.r2.dev",
      },
      {
        protocol: "https",
        hostname: "pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev",
      },
      {
        protocol: "https",
        hostname: "www.rgpv.ac.in",
      },
    ],
  },
};

export default nextConfig;
