const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://000ilya000.github.io/portfolio",
).origin;

export function assetPath(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function publicUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${siteOrigin}${assetPath(path)}`;
}
