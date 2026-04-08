import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 defaults to Turbopack for `next build`; empty config acknowledges that
  // alongside the webpack hook below (used for `next dev --webpack` / `next build --webpack`).
  turbopack: {},
  webpack: (config, { dev }) => {
    // Avoid Windows ENOENT pack-cache renames (antivirus / concurrent dev servers).
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qtrypzzcjebvfcihiynt.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "bkxrrjmjldsgwwqxqzpp.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
