import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const isPreviewDeployment = process.env.VERCEL_ENV === "preview";

  return {
    rules: isPreviewDeployment
      ? {
          userAgent: "*",
          disallow: "/"
        }
      : {
          userAgent: "*",
          allow: "/"
        },
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
