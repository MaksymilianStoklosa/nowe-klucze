import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nowe-klucze",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
