import { MetadataRoute } from "next";
import { PRODUCT_FAMILIES } from "@/lib/produits";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${base}/produits`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${base}/devis`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${base}/fournisseurs`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const familyPages = PRODUCT_FAMILIES.map((f) => ({
    url: `${base}/produits/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...familyPages];
}
