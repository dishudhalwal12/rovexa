import type { Metadata } from "next";
import "./globals.css";
import { dmSans, inter, migra } from "@/lib/fonts";
import { AppBootstrap } from "@/components/layout/app-bootstrap";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png"
  },
  title: {
    default: "Rovexa",
    template: "%s | Rovexa"
  },
  description: siteConfig.description,
  keywords: [
    "Rovexa",
    "growth agency",
    "creative branding",
    "website design",
    "marketing agency",
    "operations and distribution"
  ],
  openGraph: {
    title: "Rovexa",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Rovexa",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rovexa",
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${dmSans.variable} ${migra.variable} bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        <AppBootstrap>{children}</AppBootstrap>
      </body>
    </html>
  );
}
