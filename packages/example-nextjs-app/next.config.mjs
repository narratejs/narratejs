/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.narratejs.com",
      },
    ],
  },
};

export default nextConfig;
