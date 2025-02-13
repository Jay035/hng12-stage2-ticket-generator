/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dx5zusyom/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
