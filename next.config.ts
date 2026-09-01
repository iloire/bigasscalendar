import type { NextConfig } from "next";

// The site ships as a static export (no API routes, no server actions).
// GitHub project pages are served from a /<repo>/ subpath, so the deploy
// workflow passes that prefix in NEXT_PUBLIC_BASE_PATH; leave it unset for a
// local build or a custom domain. See the Deployment section of README.md.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(basePath && { basePath, assetPrefix: basePath }),
};

export default nextConfig;
