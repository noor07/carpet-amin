import { withBasePath } from "@/lib/basePath";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function absoluteUrl(path: string): string {
  return `${siteUrl}${withBasePath(path)}`;
}
