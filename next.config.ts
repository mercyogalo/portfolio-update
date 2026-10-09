import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost", "172.29.138.51"],
  transpilePackages: [
    "three-globe",
    "three-conic-polygon-geometry",
    "three-geojson-geometry",
  ],
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        pathname: "/shecodesio-production/**",
      },
    ],
  },
};

export default nextConfig;
