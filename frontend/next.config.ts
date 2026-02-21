import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/v2", destination: "/", permanent: false },
      { source: "/v2/about", destination: "/about", permanent: false },
      { source: "/v2/impressum", destination: "/impressum", permanent: false },
    ];
  },
};

export default nextConfig;
