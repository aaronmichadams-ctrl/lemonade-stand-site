import { site } from "@/content/site";

/** Production URL. Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : site.fallbackUrl;
