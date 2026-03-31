import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
  output: "export", // ✅ enable static export
  images: {
    unoptimized: true, // optional, if you have external images
  },

};

export default nextConfig;
