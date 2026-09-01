import type { NextConfig } from "next";

// Hosting knobs, driven by env so the default (Vercel) build is untouched:
//   STATIC_EXPORT=true             emit a plain ./out directory (GitHub Pages, S3, ...)
//   NEXT_PUBLIC_BASE_PATH=/foo     serve from a subpath, e.g. GitHub project pages
// See the Deployment section of README.md.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "true" && {
    output: "export",
    images: { unoptimized: true },
  }),
  ...(basePath && { basePath, assetPrefix: basePath }),
};

export default nextConfig;
