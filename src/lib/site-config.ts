const productionSiteUrl = "https://rovexa.space";

function normalizeSiteUrl(value: string | undefined) {
  if (!value) {
    return null;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return null;
  }

  if (/^https?:\/\//i.test(trimmedValue)) {
    return trimmedValue;
  }

  return `https://${trimmedValue}`;
}

function getSiteUrl() {
  return (
    normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    normalizeSiteUrl(process.env.VERCEL_URL) ??
    productionSiteUrl
  );
}

export const siteConfig = {
  name: "Rovexa",
  domain: "rovexa.space",
  url: getSiteUrl(),
  description:
    "Rovexa is a creative growth agency helping brands grow through marketing, creative branding, websites, tech systems, operations, and distribution."
} as const;
