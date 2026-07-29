import type { MetadataRoute } from "next";
import { rugs } from "@/lib/rugs";
import { journalPosts } from "@/lib/journal";
import { absoluteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/collections", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/trade", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/wholesale", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/projects", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/journal", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/press", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/care", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/policies", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((r) => ({
      url: absoluteUrl(r.path),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...rugs.map((rug) => ({
      url: absoluteUrl(`/collections/${rug.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...journalPosts.map((post) => ({
      url: absoluteUrl(`/journal/${post.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
