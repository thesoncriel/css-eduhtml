import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
};

export default nextConfig;

if (process.env.CF_PAGES) {
  import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
}
