import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "carpet-amin";
// Set once the custom domain's DNS is live and verified in GitHub Pages settings —
// a custom domain always serves from the root, so the /carpet-amin subpath must drop.
const customDomain = process.env.CUSTOM_DOMAIN;

const usesRepoSubpath = isGithubPages && !customDomain;
const basePath = usesRepoSubpath ? `/${repoName}` : "";
// Origin only — withBasePath() already prepends the base path to paths when one is set,
// so siteUrl + withBasePath(path) must not include it twice.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (customDomain
    ? `https://${customDomain}`
    : isGithubPages
      ? "https://noor07.github.io"
      : "http://localhost:3000");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: usesRepoSubpath ? `/${repoName}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID ?? "",
  },
};

export default nextConfig;
