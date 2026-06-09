/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["pg"],
  images: {
    qualities: [100, 75],
  },
};

export default nextConfig;
