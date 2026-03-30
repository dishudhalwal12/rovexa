import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  allowedDevOrigins: ["127.0.0.1"],
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/images/favicon.png"
      }
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"]
  },
  turbopack: {
    root: process.cwd()
  }
};

export default withMDX(nextConfig);
