import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/tree-notes',
        destination: 'https://branchynotes.com',
        permanent: true,
      },
      {
        source: '/tree-notes/:path*',
        destination: 'https://branchynotes.com/u/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
