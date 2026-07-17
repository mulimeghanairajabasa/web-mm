import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.111"],
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-neon"],
};

export default nextConfig;
