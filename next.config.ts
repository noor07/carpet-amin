import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "carpet-amin";

const basePath = isGithubPages ? `/${repoName}` : "";
// Origin only — withBasePath() already prepends /carpet-amin to paths on GitHub Pages,
// so siteUrl + withBasePath(path) must not include the repo name twice.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (isGithubPages ? "https://noor07.github.io" : "http://localhost:3000");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID ?? "",
  },
};

export default nextConfig;
