export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${basePath}${path}`;
}
