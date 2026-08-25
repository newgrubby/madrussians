import type { NextConfig } from "next";
const nextConfig: NextConfig = { images: { qualities:[75,82], remotePatterns: [{ protocol: "https", hostname: "static.tildacdn.com" }, { protocol: "https", hostname: "optim.tildacdn.com" }, { protocol: "https", hostname: "images.unsplash.com" }] } };
export default nextConfig;
