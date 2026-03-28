import { PageShell } from "@/components/layout/page-shell";
import { HomeHero } from "@/components/home/home-hero";
import { siteConfig } from "@/lib/site-config";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rovexa",
  url: siteConfig.url,
  description: siteConfig.description,
  sameAs: []
};

export default function HomePage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeHero />
    </PageShell>
  );
}

