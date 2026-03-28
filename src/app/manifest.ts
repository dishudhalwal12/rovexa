import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rovexa",
    short_name: "Rovexa",
    description: "Premium growth agency for modern brands.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505"
  };
}

