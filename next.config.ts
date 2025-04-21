import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // next.config.js

  basePath: "/TotalQSR-Site", // Your repo name
  assetPrefix: "/TotalQSR-Site", // Same here
  trailingSlash: true, // Optional but useful for GitHub Pages
  output: "export", // Enable static export
};

export default nextConfig;
